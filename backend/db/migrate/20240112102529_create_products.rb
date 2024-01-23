class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products, id: :uuid do |t|
      t.string  :name, limit: 50
      t.string  :description, limit: 300
      t.string  :type
      t.string  :text_color
      t.string  :title_color
      t.integer :price
      t.string  :bg_color
      t.timestamps
    end
  end
end
