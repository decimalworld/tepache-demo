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

  def json_with_pagination(message: success, data: nil, custom_serializer: nil, options: {})
    {
      status: SUCCESS,
      message: message,
      data: data ? pagination_json(data, custom_serializer: custom_serializer, options: options) : nil
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

  def pagination_json(data, custom_serializer: nil, options: {})
    pagination = {
      limit_value: data.try(:limit_value) || 0,
      current_page: data.try(:current_page) || 1,
      next_page: data.try(:next_page),
      prev_page: data.try(:prev_page),
      total_pages: data.try(:total_pages) || 1,
      total_item: data.try(:total_count)
    }

    options = { each_serializer: custom_serializer }.merge(options) if custom_serializer
    options[:include] = '**'

    {
      pagination: pagination,
      items: ActiveModelSerializers::SerializableResource.new(data, options).as_json
    }
  end
end
