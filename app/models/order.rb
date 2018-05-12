class Order < ApplicationRecord
  validates :number, :customer_name, :amount_paid, :status, presence: true
  validates :amount_paid, numericality: {greater_than_or_equal_to: 0.01}
  validates :number, uniqueness: true
end
