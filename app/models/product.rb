class Product < ApplicationRecord
  validates :name, :price, presence: true
  validates :price, numericality: {greater_than_or_equal_to: 0.01}
  validates :name, uniqueness: true

  belongs_to :unit

  scope :latest, -> { order('created_at desc') }
end
