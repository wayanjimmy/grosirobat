class OrderSerializer < ActiveModel::Serializer
  attributes :id, :number, :customer_name, :customer_phone, :amount_paid, :notes, :status
end
