class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :review, :user_id

  has_many :artists
  belongs_to :user
end
