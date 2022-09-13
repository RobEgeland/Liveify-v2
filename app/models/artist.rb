class Artist < ApplicationRecord
    belongs_to :genre
    has_many :performances
    has_many :concerts, through: :performances
end
