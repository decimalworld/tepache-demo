require 'rails_helper'

RSpec.describe Product, type: :model do
  let(:product) { create(:product) }

  describe 'validation' do
    it { expect(product).to validate_presence_of(:name) }
    it { expect(product).to validate_length_of(:name).is_at_most(50) }
    it { expect(product).to validate_presence_of(:description) }
    it { expect(product).to validate_length_of(:description).is_at_most(300) }
  end

  describe 'association' do
    it{ expect(product).to have_one(:image) } 
  end
end
