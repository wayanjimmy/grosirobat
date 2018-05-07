require 'rails_helper'

RSpec.describe Unit, type: :model do
  it "has 2 products" do
    unit = Unit.create!(:name => 'A unit', :value => 10)
    product1 = unit.products.create!(:name => 'Product 1', :price => 10000)
    product2 = unit.products.create!(:name => 'Product 2', :price => 15000)
    expect(unit.reload.products.count).to eq(2)
  end
end
