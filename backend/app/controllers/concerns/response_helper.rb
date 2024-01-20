module ResponseHelper
  extend ActiveSupport::Concern

  SUCCESS = :success
  FAIL = :fail

  def json_with_success(data, options = {}, message: success)
    instance_options = options[:serialize] || {}
    instance_options[:include] = '**'
    {
      status: SUCCESS,
      message: options[:message] || message,
      data: data ? ActiveModelSerializers::SerializableResource.new(data, instance_options).as_json : nil
    }
  end

  def json_with_error(errors: nil, error_code: nil, message: fail)
    {
      status: FAIL,
      message: message || error_msg_active_record(errors),
      errors: errors,
      error_code: error_code
    }
  end

  private

  def success
    I18n.t('common_messages.success')
  end

  def fail
    I18n.t('common_messages.error')
  end

  def error_msg_active_record(errors)
    return if errors.nil? || !errors.is_a(Hash)

    msg = errors&.first
    return if msg.nil? || !msg.is_a?(Array)

    Array(msg.last).first
  end
end
