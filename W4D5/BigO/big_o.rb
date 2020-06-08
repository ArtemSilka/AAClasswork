# my_min
# Given a list of integers find the smallest number in the list.

# Example:

    # list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
    # p my_min(list)  # =>  -5

# Phase I
# First, write a function that compares each element to every other element of the
#  list. Return the element if all other elements in the array are larger.
# What is the time complexity for this function?

# O(n^2)
def my_min(list)
    sorted = false

    until sorted
        sorted = true
        list.each_with_index do |el, i|
            next if i + 1 ==list.length
            j = i + 1
            if list[i] > list[j]
                list[i], list[j] = list[j], list[i]
                sorted = false
            end
        end
    end
    list.first
end

#  list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
#     p my_min(list)  # =>  -5
# Phase II
# Now rewrite the function to iterate through the list just once while keeping 
# track of the minimum. What is the time complexity?

# O(n)
def my_min(list)
        min = list.first

    list.each do |num|
        min = num if num < min
    end

    min
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
#     p my_min(list)  # =>  -5


# ______________________________________________________________________________


# Largest Contiguous Sub-sum
# You have an array of integers and you want to find the largest contiguous 
# (together in sequence) sub-sum. Find the sums of all contiguous sub-arrays and 
# return the max.

# Example:

#     list = [5, 3, -7]
#     largest_contiguous_subsum(list) # => 8

#     # possible sub-sums
#     [5]           # => 5
#     [5, 3]        # => 8 --> we want this one
#     [5, 3, -7]    # => 1
#     [3]           # => 3
#     [3, -7]       # => -4
#     [-7]          # => -7
# Example 2:

#     list = [2, 3, -6, 7, -6, 7]
#     largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])
# Example 3:

#     list = [-5, -1, -3]
#     largest_contiguous_subsum(list) # => -1 (from [-1])
# Phase I
# Write a function that iterates through the array and finds all sub-arrays using 
# nested loops. First make an array to hold all sub-arrays. Then find the sums of 
# each sub-array and return the max.

# O(n^3)
def largest_contiguous_subsum(list)
    subs = []

    (0...list.length).each do |i|
        (i...list.length).each do |j|
            subs << list[i..j]
        end
    end
    
    subs.map { |sub| sub.inject(:+) }.max
end

# list = [-5, -1, -3]
# p largest_contiguous_subsum(list) # => -1 (from [-1])

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

# list = [-5, -1, -3]
# p largest_contiguous_subsum(list) # => -1 (from [-1])

# Discuss the time complexity of this solution.

# Phase II
# Let's make a better version. Write a new function using O(n) time with O(1) 
# memory. Keep a running tally of the largest sum. To accomplish this efficient 
# space complexity, consider using two variables. One variable should track the 
# largest sum so far and another to track the current sum. We'll leave the rest 
# to you.

# O(n)
def largest_contiguous_subsum(list)
    largest_sum = list.first
    current_sum = list.first 

    list.drop(1).each do |num|
        current_sum = 0 if current_sum < 0
        current_sum += num
        largest_sum = current_sum if current_sum > largest_sum 
    end
    
    largest_sum
end

# list = [-5, -1, -3]
# p largest_contiguous_subsum(list) # => -1 (from [-1])

# list = [2, 3, -6, 7, -6, 7]
# p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

# list = [-5, -1, -3]
# p largest_contiguous_subsum(list) # => -1 (from [-1])

# list = [-5, 1, -3]
# p largest_contiguous_subsum(list) # => 9 (from [5, 1, 3])