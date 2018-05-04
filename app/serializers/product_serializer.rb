class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :unit_id, :price, :created_at, :updated_at

  belongs_to :unit
end
