class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :number
      t.string :customer_name
      t.string :customer_phone
      t.decimal :amount_paid
      t.string :notes
      t.integer :status

      t.timestamps
    end
  end
end
