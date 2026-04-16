const users = [
 { name: "Anna", active: true },
 { name: "Tom", active: false },
 { name: "John", active: true }
];
for (const user of users) {
  const stUser = user.active ? "Active" : "Inactive";

  console.log(user.name, stUser);
}