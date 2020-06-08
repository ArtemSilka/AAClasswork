class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    str = ""
    self.each_with_index do |ele, i|
      str += ele.to_s + i.to_s
    end
    str.to_i
  end
end


class String
  def hash
# str = ""
   alphabet = ('a'..'z').to_a
#     self.each_char.with_index do |char, idx|
#       str += alphabet.index(char).to_s(2)
#     end
# str.to_i
    self.split("").map{|char| alphabet.index(char)}.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
