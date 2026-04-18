const orders = [50, 120, 80, 200];
for (const order of orders) {
  const shipping = order>=100 ? "Free shipping" : "Paid shipping";

  console.log(order, shipping);
}