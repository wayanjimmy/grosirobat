class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :discount, :created_at, :updated_at

  belongs_to :order
  belongs_to :product
end
