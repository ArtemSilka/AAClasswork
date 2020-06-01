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


    def dfs(target_value) 
        return self if @value == target_value

        @children.each do |child|
            search_result = child.dfs(target_value)
            return search_result if !search_result.nil?
        end
        nil
    end

def bfs(target_value)
        queue = [self] #[e,d,c]
        until queue.empty?
            ele = queue.shift # b
            if ele.value == target_value

                return ele 
            else
                ele.children.each {|child| queue << child}

            end
        end
        # nil
    end



    def inspect
        "#< :#{@value}, :#{@parent}, :#{@children}>"
        # { 'value' => @value, 'parent_value' => @parent.value, 'children' => @children }.inspect
    end







end

  
# node1[node3]
# node2
#node3.parent=(node2) #@parent = node1 >> node3.parent.children - [node3]