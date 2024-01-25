module ParamsHelper
  extend ActiveSupport::Concern

  def params_paging
    params.permit(:per, :page).to_h.symbolize_keys || {}
  end
end
