const users = ["guest", "editor", "admin", "admin2"];

let foundUser = null;

for (const user of users) {
  if (user.includes("admin")) {
    foundUser = user;
    break;
  }
}
console.log("Found user:", foundUser);