class Product < ApplicationRecord
  belongs_to :unit

  scope :latest, -> { order('created_at desc') }

  validates :name, presence: true
  validates :price, presence: true, numericality: true
end
