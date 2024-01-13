require 'rails_helper'

RSpec.describe Image, type: :model do
  let(:image) { create(:image) }

  describe "validation" do
    it { expect(image).to validate_presence_of(:link)}
  end

  describe "association" do
    it { expect(image).to belong_to(:imageable).optional }
  end
end
