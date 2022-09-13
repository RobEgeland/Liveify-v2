class Concert < ApplicationRecord
    belongs_to :user
    has_many :performances
    has_many :artists, through: :performances
    accepts_nested_attributes_for :artists
end
