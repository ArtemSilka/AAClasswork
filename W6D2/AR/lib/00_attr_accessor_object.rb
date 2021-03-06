class AttrAccessorObject
  def self.my_attr_accessor(*names)
    
    names.each do |name|
      
      define_method(name) do
        instance_variable_get("@#{name}")
      end
    
      define_method("#{name}=") do |value = nil|
          if !value.nil?
            instance_variable_set("@#{name}", value)
          else
            raise
          end
      end

    end
  end
end