# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Cat < ApplicationRecord
    validates :color, inclusion: { in: %w(black white orange), 
            message: "%{color} is not a valid color" }
    validates :sex, inclusion: { in: ["F", "M"],
            message: "choose sex from 'M' or 'F'"}

    def age(birth_date)
        @age = ((DateTime.now - birth_date) / 365.25)#.floor
    end
end
