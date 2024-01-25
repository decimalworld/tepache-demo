class ErrorsController < ApplicationController
  def not_found
    render json: json_with_error(
      message: I18n.t('common_messages.routing_error'),
      errors: I18n.t('common_messages.not_found')
    ), status: :not_found
  end
end
