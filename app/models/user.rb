class User < ApplicationRecord
    has_many :image
    self.primary_key = "_id"
    # validates_presence_of :name
    # validates_numericality_of :age
end
