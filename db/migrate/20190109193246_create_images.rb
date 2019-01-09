class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :picture
      t.integer :likes
      t.integer :comments
      t.string :tags, array: true, default: []
      t.string :user_id
      t.timestamps
    end
  end
end
