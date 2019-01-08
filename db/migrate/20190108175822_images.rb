class Images < ActiveRecord::Migration[5.2]
  def change
  end

  # id column is automatically generated
  def self.up
    create_table :images do |t|
      t.column :picture, :string, :limit => 80
      t.column :likes, :integer
      t.column :comments, :integer
      t.column :tags, :string[], :limit => 80
      t.column :user_id, :string, :limit => 80
    end
  end

  def self.down
    drop_table :images
  end
end
