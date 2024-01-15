FactoryBot.define do
  factory :image do
    imageable factory: :product
  end
end
