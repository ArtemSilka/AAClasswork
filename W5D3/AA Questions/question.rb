require_relative 'questions'
require 'sqlite3'


class Question
  attr_accessor :title, :body, :author_id
  attr_reader :id

    def self.find_by_id(id)
        
        questions = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *   
      FROM
        questions
      WHERE
        id = ?
        SQL

        questions.map { |question| Question.new(question) }
    end

    def self.find_by_author_id(author_id)
        
        authors = QuestionsDatabase.instance.execute(<<-SQL, author_id)
      SELECT
        *   
      FROM
        questions
      WHERE
        author_id = ?
        SQL

        authors.map { |author| Question.new(author) }
    end

    def initialize(options)
        @id = options['id'] 
        @title = options['title'] 
        @body = options['body'] 
        @author_id = options['author_id'] 
    end

    def author
      User.find_by_id(@id)
    end

    def replies
      Reply.find_by_question_id(@id)
    end

end