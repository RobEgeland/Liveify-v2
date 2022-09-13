class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.integer :band_members
      t.string :band_img
      t.integer :genre_id
      t.timestamps
    end
  end
end
