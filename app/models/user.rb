class User < ApplicationRecord
    has_many :bios
    has_many :tasks
    has_many :work_histories
    has_many :skills
    has_many :introductions
    has_many :educations

    validates :username, presence: true, uniqueness: true
    has_secure_password
end
