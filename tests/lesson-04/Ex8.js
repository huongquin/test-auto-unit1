const users = [
 { name: "A", online: true },
 { name: "B", online: false },
 { name: "C", online: true },
 { name: "D", online: true }
];
let count= 0;
for (const user of users) {
  if (user.online ===true)
   count++;

}
  console.log("Total user online:", count);
