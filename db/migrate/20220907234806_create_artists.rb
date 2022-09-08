class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.integer :band_members
      t.string :band_img

      t.timestamps
    end
  end
end
