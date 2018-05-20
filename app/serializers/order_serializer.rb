class OrderSerializer < ActiveModel::Serializer
  attributes :id, :number, :customer_name, :amount_paid, :created_at, :updated_at

  has_many :line_items
end
