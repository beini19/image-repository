class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
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
  end
end
