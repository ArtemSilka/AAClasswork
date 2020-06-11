require_relative 'questions'
require_relative 'question'
require_relative 'reply' 
require_relative 'question_follow'

class User
  attr_accessor :fname, :lname
  attr_reader :id
  
  def self.find_by_id(id)
        users = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *   
      FROM
        users
      WHERE
        id = ?
        SQL

        User.new(users.first)
        # users.map { |user| User.new(user) }
    end

    def self.find_by_name(fname, lname)
        
        users = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
      SELECT
        *   
      FROM
        users
      WHERE
        fname = ? AND lname = ?
        SQL

        User.new(users.first)
    end

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def authored_questions
      Question.find_by_author_id(@id)
    end

    def authored_replies
      Reply.find_by_user_id(@id)
    end


end
