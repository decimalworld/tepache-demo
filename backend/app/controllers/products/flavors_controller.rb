module Products
  class FlavorsController < ApplicationController
    def create
      compacted_param = flavor_param.compact_blank
      flavor = Products::Flavor.create!(compacted_param)
      render json: json_with_success(flavor)
    end

    private

    def flavor_param
      params.required(:flavor).permit(:name, :description, :text_color, :bg_color, :price)
    end
  end
end
