class DropTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :images
    drop_table :users
  end
end
