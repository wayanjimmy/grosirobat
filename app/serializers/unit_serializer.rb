class UnitSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :value
end
