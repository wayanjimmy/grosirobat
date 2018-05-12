class CreateLineItems < ActiveRecord::Migration[5.2]
  def change
    create_table :line_items do |t|
      t.integer :product_id
      t.integer :order_id
      t.integer :quantity, :default => 1
      t.integer :discount, :default => 0

      t.timestamps
    end
  end
end
