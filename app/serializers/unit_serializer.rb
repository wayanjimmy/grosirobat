class UnitSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :created_at, :updated_at
end
