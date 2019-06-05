class UpdateImageTable < ActiveRecord::Migration[5.2]
  def change
    add_column :images, :url, :string
    add_column :images, :inventory, :integer
    add_column :images, :price, :decimal 

    # add_foreign_key :images, :users, column: :user_id
  end
end
