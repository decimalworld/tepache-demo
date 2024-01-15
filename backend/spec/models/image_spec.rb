require 'rails_helper'

RSpec.describe Image do
  let(:image) { create(:image) }

  describe 'association' do
    it { expect(image).to belong_to(:imageable) }
  end
end
