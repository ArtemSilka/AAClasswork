require "byebug"
require_relative "poly_tree_node"


class KnightPathFinder
    attr_reader :start_pos

    STEPS = [[2, 1] , [-2, 1] , [1, 2] , [-1, 2] , 
            [2, -1] , [-2, -1] , [1, -2] , [-1, -1]]

    def initialize(start_pos = [0,0])
        @start_pos = start_pos
        @considered_position  = [start_pos]
    end

    def self.valid_moves(pos) #(2,1)
        current_row , current_col = pos
        valid_moves = []

        STEPS.each do |step|
            row , col = step
            valid_moves << [current_row + row , current_col + col]
        end

        valid_moves.select do |move| 
            move.all?{|i| (0..7).include?(i)}
        end
    end    
    
    def new_move_positions(pos)
        moves = KnightPathFinder.valid_moves(pos)
        new_moves = moves.select{|move| !@considered_position.include?(move)}
        @considered_position << new_moves
        new_moves
    end

    def move_tree
        @root_node = PolyTreeNode.new(start_pos)
        nodes = [@root_node]
        until nodes.empty?
            node = nodes.shift
            self.new_move_positions(node.value).each do |child_pos| 
                child = PolyTreeNode.new(child_pos)
                node.add_child(child)
                nodes << child
                # child.parent=(node)
            end
        end
    end
end
