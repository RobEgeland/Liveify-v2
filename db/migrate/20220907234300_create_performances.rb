class CreatePerformances < ActiveRecord::Migration[7.0]
  def change
    create_table :performances do |t|
      t.integer :concert_id
      t.integer :artist_id

      t.timestamps
    end
  end
end
