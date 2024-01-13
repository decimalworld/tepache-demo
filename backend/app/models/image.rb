class Image < ApplicationRecord
  belongs_to :imageable, optional: true, polymorphic: true
  validates_presence_of :link
end
