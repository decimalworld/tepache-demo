module Products
  class FlavorsController < ApplicationController
    def index
      flavors = Products::Flavor.fetch_page(params_paging)
      render json: json_with_pagination(data: flavors)
    end

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
