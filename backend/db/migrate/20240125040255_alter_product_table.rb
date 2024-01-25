class AlterProductTable < ActiveRecord::Migration[7.1]
  def change
    remove_column :products, :title_color, :string
    remove_column :products, :type, :string
  end
end
