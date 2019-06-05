class AddUserIdToImageTable < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :user_id, :integer
    add_foreign_key :images, :users, column: :user_id
  end
end
