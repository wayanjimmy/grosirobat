class Order < ApplicationRecord
  validates :customer_name, :amount_paid, presence: true
  validates :amount_paid, numericality: {greater_than_or_equal_to: 0.01}
  validates :number, uniqueness: true

  has_many :line_items

  before_create :generate_order_number

  private

  def generate_order_number
    if self.number.nil?
      order_number = SecureRandom.alphanumeric.first(10).upcase
      count = Order.where(:number => order_number).count

      if count > 0
        order_number = order_number + count
      end

      self.number = order_number
    end
  end
end
