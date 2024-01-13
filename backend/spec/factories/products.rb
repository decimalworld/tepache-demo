FactoryBot.define do
  factory :product do
    name { Faker::Name.name }
    description { Faker::Lorem.sentence }
    type { nil }

    trait :flavor do
      type { Products::Flavor.name }
    end
    
    trait :pack do
      type { Products::Pack.name }
    end

    initialize_with { type.present? ? type.constantize.new : Product.new}
  end
end
