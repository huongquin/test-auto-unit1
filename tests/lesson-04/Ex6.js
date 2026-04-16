const prices = [120, 90, 300, 250, 150];

let maxPrice = prices[0];

for (const price of prices) {
  if (price > maxPrice) {
    maxPrice = price;
  }
}

console.log("Max price:", maxPrice);