# == Schema Information
#
# Table name: images
#
#  id             :uuid             not null, primary key
#  imageable_type :string
#  imageable_id   :uuid
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Image < ApplicationRecord
  belongs_to :imageable, polymorphic: true
  before_destroy :remove_from_s3
  after_save :generate_presign_url, if: :id_previously_changed?

  attr_reader :presigned_url

  def link
    "#{ENV.fetch('RAILS_ENV', nil)}/#{imageable_type.underscore}/#{id}"
  end

  def full_link
    S3.object(link).public_url if S3.present?
  end

  private

  def generate_presign_url
    @presigned_url = S3.object(link).presigned_url(:put, expires_in: 300) if S3.present?
  end

  def remove_from_s3
    S3.object(link).delete if S3.present?
  rescue Aws::S3::Errors::InvalidAccessKeyId
  end
end
