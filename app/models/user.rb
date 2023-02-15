class User < ApplicationRecord
    has_many :trails
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
