class Image < ApplicationRecord
    belongs_to :user
    # validates_numericality_of :likes, :comments
end
