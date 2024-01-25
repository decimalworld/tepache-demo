# == Schema Information
#
# Table name: products
#
#  id          :uuid             not null, primary key
#  name        :string(50)
#  description :string(300)
#  text_color  :string
#  price       :integer
#  bg_color    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
module Products
  class Flavor < Product
  end
end
