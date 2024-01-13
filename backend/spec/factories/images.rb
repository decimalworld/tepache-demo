FactoryBot.define do
  factory :image do
    link { Faker::Internet.url }
  end
end
