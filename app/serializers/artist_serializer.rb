class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :band_members, :band_img, :genre_id
  belongs_to :genre
end
