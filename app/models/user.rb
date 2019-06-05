class User < ApplicationRecord
    has_many :image
    # self.primary_key = "_id"
    # validates_presence_of :name
    # validates_numericality_of :age

    def is_manager?
        user_type == "manager"
    end

    def is_client?
        user_type == "client"
    end
end
