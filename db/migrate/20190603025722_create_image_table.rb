class CreateImageTable < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :url
      t.integer :inventory
      t.decimal :price
    end
  end
end
