require 'rails_helper'

RSpec.describe 'products/flavors' do
  let(:create_flavor) { post '/products/flavors', params: request_params }
  let(:flavor_params) { attributes_for(:product, :flavor) }
  let(:request_params) { { flavor: flavor_params } }

  it do
    expect { create_flavor }.to change(Products::Flavor, :count).by(1)
  end
end
