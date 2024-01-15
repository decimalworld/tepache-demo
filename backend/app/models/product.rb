class Product < ApplicationRecord
  has_one :image, as: :imageable, dependent: :nullify
  validates :name, length: { maximum: 50 }, presence: true
  validates :description, length: { maximum: 300 }, presence: true

  attribute :text_color, default: -> { 'orange-100' }
  attribute :bg_color, default: -> { 'red-500' }
  attribute :title_color, default: -> { 'red-500' }
end
