class User < ApplicationRecord

  validates :username, :memberlvl, presence: true
  validates :memberlvl, inclusion: {
    in: %w(Bronze Silver Gold Platinum), 
    message: "%{value} is not the right level"
  }
end
