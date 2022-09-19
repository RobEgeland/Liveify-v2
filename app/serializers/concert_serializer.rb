class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :review, :user_id
end
