class MaxIntSet
  attr_reader :store
  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    if (0..@store.length).to_a.include?(num)
      @store[num] = true 
    else
      raise "Out of bounds"
    end
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num] != false
  end
  

  private

  def is_valid?(num)
  end
  
  def validate!(num)
  end
end


class IntSet

  attr_reader :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end
  
  def insert(num)
   @store[num % @store.length] << num
  end
  
  def remove(num)
    @store[num].delete(num)
  end
  
  def include?(num)
    @store[num] != []
    # @store.any? {|sub| sub.include?(num)}
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !@store[num % @store.length].include?(num)
      @store[num % @store.length] << num 
      @count += 1
      resize! if @store.length == count
    end
  end

  def remove(num)
    if @store[num % @store.length].include?(num)
      @store[num % @store.length].delete(num)
      @count -= 1
    end
  end

  def include?(num)
    @store[num % @store.length].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    
      resized = Array.new(@store.length * 2){Array.new}
      @store.each do |sub|
        sub.each do |ele|
          resized[ele % resized.length] << ele
        end
      end
      @store = resized
    end
  

  # def inspect

  # end
end