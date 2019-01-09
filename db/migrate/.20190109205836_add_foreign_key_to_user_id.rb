class AddForeignKeyToUserId < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :id
    change_column :users, :index, :bigint

    # execute "alter table `users` drop primary key"
    change_column :users, :index, :primary_key
    add_foreign_key :images, :users
  end
end
