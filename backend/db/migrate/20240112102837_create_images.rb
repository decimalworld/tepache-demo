class CreateImages < ActiveRecord::Migration[7.1]
  def change
    create_table :images, id: :uuid do |t|
      t.references :imageable, polymorphic: true, type: :uuid
      t.timestamps
    end
  end
end
