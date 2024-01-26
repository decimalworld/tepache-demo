# == Schema Information
#
# Table name: products
#
#  id          :uuid             not null, primary key
#  name        :string(50)
#  description :string(300)
#  text_color  :string
#  price       :integer
#  bg_color    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
  has_one :image, as: :imageable, dependent: :destroy
  validates :name, length: { maximum: 50 }, presence: true
  validates :description, length: { maximum: 300 }, presence: true
  validates :price, presence: true

  after_save :create_image!, if: :id_previously_changed?

  attribute :text_color, default: -> { 'orange-100' }
  attribute :bg_color, default: -> { 'red-500' }

  delegate :presigned_url, to: :image, allow_nil: true, prefix: true
  delegate :full_link, to: :image, allow_nil: true, prefix: true
end
