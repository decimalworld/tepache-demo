Aws.config[:credentials] = Aws::Credentials.new(
  Rails.application.credentials.dig(:aws, :access_key_id),
  Rails.application.credentials.dig(:aws, :secret_access_key),
)
Aws.config[:region] = Rails.application.credentials.dig(:aws, :region)

S3 = Rails.env.test? ? nil : Aws::S3::Resource.new.bucket(Rails.application.credentials.dig(:aws, :s3_bucket))
