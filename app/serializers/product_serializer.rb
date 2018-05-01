class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :unit_id, :price
end
