require_relative 'questions'
require_relative 'user' 
require_relative 'question'



class Reply
  attr_accessor :question_id, :body, :author_id, :parent_reply_id
  attr_reader :id

    def self.find_by_id(id)
      
      replies = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *   
      FROM
        replies
      WHERE
        id = ?
        SQL

        replies.map { |reply| Reply.new(reply) }
    end

    def self.find_by_question_id(question_id)
        
        replies = QuestionsDatabase.instance.execute(<<-SQL, question_id)
      SELECT
        *   
      FROM
        replies
      WHERE
        question_id = ?
        SQL

      replies.map { |reply| Reply.new(reply) }
    end


    def self.find_by_user_id(author_id)
    
        replies = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT 
        * 
      FROM 
        replies
      WHERE
        author_id = ?
    SQL
        replies.map { |reply| Reply.new(reply) }
  end

    def initialize(options)
        @id = options['id'] 
        @question_id = options['question_id'] 
        @author_id = options['author_id']
        @body = options['body'] 
        @parent_reply_id = options['parent_reply_id'] 
    end

    def author
      User.find_by_id(@author_id)
    end

    def question
      Question.find_by_id(@question_id)
    end

    def parent_reply
      Reply.find_by_id(@parent_reply_id)
    end

    def child_replies
      child_replies = QuestionsDatabase.instance.execute(<<-SQL, @id)
        SELECT
          *
        FROM
          replies
        WHERE
          parent_reply_id = ?
      SQL

      child_replies.map {|reply| Reply.new(reply)}
    end

end