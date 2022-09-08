class Concert < ApplicationRecord
    belongs_to :user
    has_many :performances
    has_many :artists, through: :performances
end
