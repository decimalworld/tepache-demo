# == Schema Information
#
# Table name: images
#
#  id             :uuid             not null, primary key
#  imageable_type :string
#  imageable_id   :uuid
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
FactoryBot.define do
  factory :image do
    imageable factory: :product
  end
end
