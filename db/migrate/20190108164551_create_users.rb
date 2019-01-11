class CreateUsers < ActiveRecord::Migration[5.2]
  # re-create table from scratch
  def change
    # set _id column as primary key
    create_table :users, :primary_key => :_id do |t|
      t.string :_id
      t.integer :index
      t.string :guid
      t.string :name
      t.string :gender
      t.integer :age
      t.string :email
      t.string :phone
      t.string :address
      t.string :registered
      t.string :image_id
      t.timestamps      
    end

    # remove auto-generated id column
    remove_column :users, :id
  end
end
