class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :number, :null => false
      t.string :customer_name, :null => false
      t.string :customer_phone
      t.decimal :amount_paid, :precision => 9, :scale => 2
      t.string :notes
      t.boolean :is_draft, :default => false

      t.timestamps
    end
  end
end
