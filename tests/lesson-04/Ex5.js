function isPrime(number) {
  // số < 2 → không phải số nguyên tố
  if (number < 2) {
    return false;
  }

  // số = 2 → là số nguyên tố
  if (number === 2) {
    return true;
  }

  // chia hết cho 2 → không phải (trừ số 2 đã xử lý ở trên)
  if (number % 2 === 0) {
    return false;
  }

  return true;
}