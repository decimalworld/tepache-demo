module Products
  class FlavorSerializer < ActiveModel::Serializer
    attributes :name, :description, :bg_color, :text_color
    attribute :image_presigned_url, if: :newly_created?

    def newly_created?
      object.id_previously_changed?
    end
  end
end
