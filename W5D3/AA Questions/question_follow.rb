require_relative 'questions'
require_relative 'user'
require_relative 'question'

class QuestionFollow
  attr_accessor :user_id, :question_id
  attr_reader :id

   def self.find_by_id(id)
        question_follows = QuestionDatabase.instance.execute(<<-SQL, id)
      SELECT
        *   
      FROM
        question_follows
      WHERE
        id = ?
        SQL

        question_follows.map { |question_follow| QuestionFollow.new(question_follow) }
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

end