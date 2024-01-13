class CreateImages < ActiveRecord::Migration[7.1]
  def change
    create_table :images, id: :uuid do |t|
      t.string :link, null: false
      t.references :imageable, polymorphic: true
      t.timestamps
    end
  end
end
