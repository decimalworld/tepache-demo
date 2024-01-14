class Image < ApplicationRecord
  belongs_to :imageable, optional: true, polymorphic: true
  validates :link, presence: true
end
