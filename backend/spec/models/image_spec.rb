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
require 'rails_helper'

RSpec.describe Image do
  let(:image) { create(:image) }

  describe 'association' do
    it { expect(image).to belong_to(:imageable) }
  end
end
