class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :created_at, :updated_at

  belongs_to :unit
end
