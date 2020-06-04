def my_uniq(array)
    uniq = []
    array.each { |ele| uniq << ele if !uniq.include?(ele) }
    uniq
end

def two_sum(array)
    pairs = []
    (0...array.length - 1).each do |i|
        (i+1...array.length).each do |j|
            pairs << [i, j] if array[i] + array[j] == 0
        end
    end

    pairs
end

def my_transpose(matrix)
    new_matrix = [] 

    (0...matrix.length).each do |i|
        new_row = []
        (0...matrix.length).each do |j|
            new_row << matrix[j][i]
        end
        new_matrix << new_row
    end

    new_matrix
end

def my_stock_picker(stock_days)
    result = []
    largest_profit = 0
    buy_day = 0
    sell_day = 0

    (0...array.length - 1).each do |i|
        (i+1...array.length).each do |j|
            if (j > i) && (largest_profit < (array[j] - array[i]))
                largest_profit = array[j] - array[i]
                buy_day = i
                sell_day = j
                result = [i, j]
            end
        end
    end

    result
end

class Game
    attr_reader :length

    def initialize
        @length = 3
        @piles = [[1,2,3],[],[]]
    end

    def move(user_input)
        player = Player.new
        player.user_input 
        
        (0...@piles.length).each do |i|
            ele = @piles[0].shift
            @piles[2].unshift(ele)
        end
    end


#move(user_input) [1,3]
#@piles.each 

end

# disc = Array.new(3) {Array.new([])}
# disc[0] = 