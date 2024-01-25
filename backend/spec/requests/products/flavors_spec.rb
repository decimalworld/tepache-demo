require 'rails_helper'

RSpec.describe 'products/flavors' do
  let(:create_flavor) { post '/products/flavors', params: request_params }
  let(:index_flavor) { get '/products/flavors' }

  context 'when create flavor' do
    let(:flavor_params) { attributes_for(:product, :flavor) }
    let(:request_params) { { flavor: flavor_params } }

    it { expect { create_flavor }.to change(Products::Flavor, :count).by(1) }
  end

  context 'when index flavors' do
    before do
      index_flavor
    end

    it { expect(response).to have_http_status(:success) }
  end
end
