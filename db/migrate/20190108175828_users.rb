class Users < ActiveRecord::Migration[5.2]
  def change
  end

  def self.up
    create_table :users do |t|
      t.column :index, :integer
      t.column :guid, :string, :limit => 80
      t.column :name, :string, :limit => 80
      t.column :gender, :string, :limit => 80
      t.column :age, :integer
      t.column :email, :string, :limit => 80
      t.column :phone, :string, :limit => 80
      t.column :address, :string, :limit => 80
      t.column :registered, :string, :limit => 80
      t.column :image_id, :string, :limit => 80
    end
  end

  def self.down
    drop_table :users
  end
end
