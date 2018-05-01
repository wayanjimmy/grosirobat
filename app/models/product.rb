class Product < ApplicationRecord
  belongs_to :unit

  validates :name, presence: true
  validates :price, presence: true, numericality: true
end
