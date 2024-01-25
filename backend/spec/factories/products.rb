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
FactoryBot.define do
  factory :product do
    name { Faker::Name.name }
    description { Faker::Lorem.sentence }
    type { nil }
    price { 10 }

    trait :flavor do
      type { Products::Flavor.name }
    end

    trait :pack do
      type { Products::Pack.name }
    end

    initialize_with { type.present? ? type.constantize.new : Product.new }
  end
end
