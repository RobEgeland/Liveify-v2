class Performance < ApplicationRecord
    belongs_to :concert
    belongs_to :artist
end
