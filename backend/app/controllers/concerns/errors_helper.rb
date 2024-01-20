module ErrorsHelper
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordInvalid, with: :handle_record_invalid
  end

  def handle_record_invalid(exception)
    render json: json_with_error(
      message: I18n.t(
        'activerecord.errors.record_invalid',
        record: exception.record.class.model_name.human
      ),
      errors: exception.record&.errors&.messages
    ), status: :unprocessable_entity
  end
end
