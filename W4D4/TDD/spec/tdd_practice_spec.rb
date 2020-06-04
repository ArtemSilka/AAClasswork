require 'tdd_practice'

describe "my_uniq" do
    let(:array) { [1, 1, 2, 3, 1] }
    it "removes duplicates" do
        # expect { my_uniq(array) }.to eq([1,2,3])
        expect(my_uniq(array)).to eq([1, 2, 3])
    end
end

describe "two_sum" do
    let(:array) { [-1, 0, 2, -2, 1] }
    it "finds all pairs of positions where elements sum equal 0" do
        expect(two_sum(array)).to eq([[0, 4], [2, 3]].sort)
    end
    
end

describe "my_transpose" do
    let(:matrix) {[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
        ]}

    it "will convert rows to columns" do
        expect(my_transpose(matrix)).to eq([
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ])
    end
end

describe "my_stock_picker" do
    let(:array) { [3, 2, 7, 10, 1, 6]}
    
    it "returns pair of buy and sell days" do
        expect(my_stock_picker(array)).to eq([1, 3])
    end

    it "order matter" do
        output = my_stock_picker(array)
        # expect {output.first < output.last}.to_not raise_error
        expect(output.first).to be < output.last
    end

    it "stock price decreases" do
        array = [10,8,5,4]
        expect(my_stock_picker(array).empty?).to eq(false)
    end
end

describe Game do
    subject(:hanoi_tower) { Game.new }

    it "initializes" do
        expect(hanoi_tower).to be_a(Game) 
    end

    it "length" do
        expect(hanoi_tower.length).to eq(3)
    end

    describe "#move" do
    context "when player inputs valid move" do
        it "one pile should move" do
            allow(player).to recieve(:user_input).and_return(valid_move)
            expect(hanoi_tower.move).to eq([[2,3],[],[1]])
        end
    end
    # describe "hanoi_tower" do
    #     let(:piles) { [[1, 2, 3],[],[]] }
    # end
end

# start = [1, 2, 3] discs
# middle = [       ]
# destination = [       ]

# when destination == start then game_over
# move ele_1 = start.shift
# start = [2, 3]
# destination.push(ele_1) => [1]
# # of discs = 3 now 2

# expect(start.move).to eq([2,3])