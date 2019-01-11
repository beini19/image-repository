class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :picture
      t.integer :likes
      t.integer :comments
      t.string :tags, array: true, default: []
      t.integer :user_id   # foreign key
      t.timestamps
    end
    add_foreign_key :images, :users
  end
end
