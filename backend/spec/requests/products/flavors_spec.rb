require 'rails_helper'

RSpec.describe 'products/flavors' do
  let(:create_flavor) { post '/products/flavors', params: params }
  let(:params) { attributes_for(:product, :flavor).except(:type) }

  it do
    expect { create_flavor }.to change(Products::Flavor, :count).by(1)
  end
end
