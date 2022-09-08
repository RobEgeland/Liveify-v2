class CreateConcerts < ActiveRecord::Migration[7.0]
  def change
    create_table :concerts do |t|
      t.string :name
      t.string :location
      t.text :review
      t.integer :user_id

      t.timestamps
    end
  end
end
