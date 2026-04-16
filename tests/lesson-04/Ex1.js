//Tạo function email hợp lệ
function isValidEmail(email) {
   return email.includes("@");
} 

// Input
const emails = [
  "test@gmail.com",
  "hello.com",
  "admin@yahoo.com",
  "abc123"
];
// 2. Duyệt bằng for...of
for (const email of emails) {
  // nếu không hợp lệ → bỏ qua
  if (!isValidEmail(email)) {
    continue;
  }
     console.log("Valid email:", email);
}

//kết quả Valid email: test@gmail.com ----Valid email: admin@yahoo.com