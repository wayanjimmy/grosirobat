class OrderSerializer < ActiveModel::Serializer
  attributes :id, :customer_name, :customer_phone, :amount_paid, :created_at, :updated_at

  has_many :line_items
end
