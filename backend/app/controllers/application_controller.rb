class ApplicationController < ActionController::API
  include ParamsHelper
  include ResponseHelper
  include ErrorsHelper
end
