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
require 'rails_helper'

RSpec.describe Product do
  let(:product) { create(:product) }

  describe 'validation' do
    it { expect(product).to validate_presence_of(:name) }
    it { expect(product).to validate_length_of(:name).is_at_most(50) }
    it { expect(product).to validate_presence_of(:description) }
    it { expect(product).to validate_length_of(:description).is_at_most(300) }
    it { expect(product).to validate_presence_of(:price) }
  end

  describe 'association' do
    it { expect(product).to have_one(:image) }
  end
end
