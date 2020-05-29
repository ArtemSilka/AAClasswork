require "byebug"
class PolyTreeNode

    attr_reader :parent, :children, :value
    attr_writer :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(instance = nil)
        return @parent = nil if instance == nil
        old = self.parent
        @parent = instance

        if !instance.children.include?(self)
            old.children.delete(self) if !old.nil?
            instance.children << self 
        end

    end

    def add_child(child)
        child.parent = self
    end

    def remove_child(child)
        if child.parent == nil
            raise
        end
        child.parent = nil
    end

    def inspect
        "#< :#{@value}, :#{@parent}, :#{@children}>"
        # { 'value' => @value, 'parent_value' => @parent.value, 'children' => @children }.inspect
    end

end

  
# node1[node3]
# node2
#node3.parent=(node2) #@parent = node1 >> node3.parent.children - [node3]