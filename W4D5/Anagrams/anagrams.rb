# Anagrams
# Our goal today is to write a method that determines if two given words are 
# anagrams. This means that the letters in one word can be rearranged to form 
# the other word. For example:

# anagram?("gizmo", "sally")    #=> false
# anagram?("elvis", "lives")    #=> true
# Assume that there is no whitespace or punctuation in the given strings.

# Learning Goals
# Be able to determine the time and space complexity of a method
# Be able to recognize when and how time or space complexity can be improved
# Be able to compare different methods and discuss how changing inputs affects
#  each one's overall runtime
# Phase I:
# Write a method #first_anagram? that will generate and store all the possible 
# anagrams of the first string. Check if the second string is one of these.

# Hints:

# For testing your method, start with small input strings, otherwise you might 
# wait a while
# If you're having trouble generating the possible anagrams, look into this 
# method.
# What is the time complexity of this solution? What happens if you increase 
# the size of the strings?

# time : O(n)
# space : O(n)
def first_anagram?(str1, str2)
    str1_anagrams = str1.split("").permutation.to_a.map(&:join)
    str1_anagrams.include?(str2)
end

# p first_anagram?("hel", "leh")
# p first_anagram?("hel", "elh")
# p first_anagram?("hel", "all")

# Phase II:
# Write a method #second_anagram? that iterates over the first string. For each 
# letter in the first string, find the index of that letter in the second string 
# (hint: use Array#find_index) and delete at that index. The two strings are 
# anagrams if an index is found for every letter and the second string is empty 
# at the end of the iteration.

# Try varying the length of the input strings. What are the differences between 
# #first_anagram? and #second_anagram??

# time : O(n)
# space : O(1)
def second_anagram?(str1, str2)
    return false if str1.length != str2.length

    str1.each_char do |char|
        return false if str2.split("").find_index(char).nil?
    end

    true
end

# p second_anagram?("hel", "leh")
# p second_anagram?("hel", "elh")
# p second_anagram?("hel", "all")

# Phase III:
# Write a method #third_anagram? that solves the problem by sorting both strings 
# alphabetically. The strings are then anagrams if and only if the sorted 
# versions are the identical.

# What is the time complexity of this solution? Is it better or worse than 
# #second_anagram??

# time : O(n)
# space : O(1)
def third_anagram?(str1, str2)
    alphabet = ('a'..'z').to_a

    sorted = false
    until sorted
        sorted = true
        (0...str1.length - 1).to_a.each do |i|
            if alphabet.index(str1[i]) > alphabet.index(str1[i + 1])
                str1[i], str1[i + 1] = str1[i + 1], str1[i]
                sorted = false
            end
        end
    end

        sorted = false
    until sorted
        sorted = true
        (0...str2.length - 1).to_a.each do |i|
            if alphabet.index(str2[i]) > alphabet.index(str2[i + 1])
                str2[i], str2[i + 1] = str2[i + 1], str2[i]
                sorted = false
            end
        end
    end

    str1 == str2
end


# p third_anagram?("hel", "leh")
# p third_anagram?("hel", "elh")
# p third_anagram?("hel", "all")

# Phase IV:
# Write one more method #fourth_anagram?. This time, use two Hashes to store 
# the number of times each letter appears in both words. Compare the resulting 
# hashes.

# What is the time complexity?

# time : O(n)
# space : O(n)
def fourth_anagram?(str1, str2)
    hsh1 = Hash.new(0)
    hsh2 = Hash.new(0)

    str1.each { |char| hsh1[char] += 1}
    str2.each { |char| hsh2[char] += 1}

    hsh1 == hsh2
end


p third_anagram?("hel", "leh")
p third_anagram?("hel", "elh")
p third_anagram?("hel", "all")