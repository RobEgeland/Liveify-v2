class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true 
    validates :age, presence: true, numericality: {greater_than: 13}
end
