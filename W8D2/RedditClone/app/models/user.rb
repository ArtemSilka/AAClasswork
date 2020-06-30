# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, :password_digest, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post

    has_many :subs, 
    foreign_key: :moderator_id, 
    class_name: :Sub 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(plain_text_password)
        BCrypt::Password.new(self.password_digest).is_password?(plain_text_password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(64)
    end

end
