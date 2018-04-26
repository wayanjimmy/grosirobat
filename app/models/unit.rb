class Unit < ApplicationRecord
  validates :name, presence: true
  validates :value, presence: true
end
