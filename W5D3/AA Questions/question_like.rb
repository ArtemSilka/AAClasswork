require_relative 'questions'
require_relative 'user'

class QuestionLike  
    attr_accessor :user_id, :question_id
    attr_reader :reader
  
    def self.find_by_id(id)
        
        question_likes = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *   
      FROM
        question_likes
      WHERE
        id = ?
        SQL

        question_likes.map { |question_like| QuestionLike.new(question_like) }
    end

    def initialize(options)
        @id = options['id']
        @user_id = options['user_id']
        @question_id = options['question_id']
    end

end