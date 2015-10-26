class User < ActiveRecord::Base
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, presence: { length: 8, allow_nil: true }

  has_one :application, dependent: :destroy

  attr_reader :password

  before_validation :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password) 
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.find_by_credentials(creds)
    user = User.find_by(email: creds[:email])
    return nil unless user

    user.is_password?(creds[:password]) ? user : nil
  end

  def reset_token!
    self.session_token = generate_session_token
    self.save!
    
    session_token
  end

  private

  def generate_session_token
    token = ''
      
    loop do
      token = SecureRandom.urlsafe_base64(16)
      break unless User.find_by(session_token: token)
    end

    token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token 
  end
end
