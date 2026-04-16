const orders =[200, -50, 300, 0, 150];
let total=0;

for (const order of orders) {
  // bỏ qua đơn <= 0
  if (order <= 0) {
    continue;
  }

  total += order;
}

console.log("Total valid orders:", total);