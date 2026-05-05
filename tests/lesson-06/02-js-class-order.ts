// Tao một class Order
type OrderItem = {
  name: string;
  price: number;
  amount: number;
  discount: number;
};

class Order {
  orderId: number;
  customerName: string;
  items: OrderItem[];
  totalAmount: number;

  constructor(orderId: number, customerName: string) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = [];
    this.totalAmount = 0;
  }

  // addItem
  addItem(item: OrderItem): void {
    this.items.push(item);
  }

  // Tính tổng số tiền đơn hàng
  calculateTotal(): number {
    this.totalAmount = 0;

    for (const item of this.items) {
      this.totalAmount += item.price * item.amount - item.discount;
    }

    console.log(`totalAmount: ${this.totalAmount}`);
    return this.totalAmount;
  }
}