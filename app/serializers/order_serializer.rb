class OrderSerializer < ActiveModel::Serializer
  attributes :id, :number, :customer_name, :amount_paid

  has_many :line_items
end
