class Unit < ApplicationRecord
  has_many :products

  validates :name, presence: true
  validates :value, presence: true
end
