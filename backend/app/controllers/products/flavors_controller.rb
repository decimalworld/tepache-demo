module Products
  class FlavorsController < ApplicationController
    def create
      flavor = Products::Flavor.create!(flavor_param)
      render json: json_with_success(flavor)
    end

    private

    def flavor_param
      params.permit(:name, :description, :text_color, :bg_color)
    end
  end
end
