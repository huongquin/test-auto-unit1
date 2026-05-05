
 //Tao một class Customer chứa các thuộc tính: id, name. email, phone.
class Customer {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }


  //Tạo một phương thức displayInfo
displayInfo(): void {
  console.log("Customer Information:");
  console.log(`ID: ${this.id}`);
  console.log(`Name: ${this.name}`);
  console.log(`Email: ${this.email}`);
  console.log(`Phone: ${this.phone}`);
}

//Tạo một phương thức updateEmail
updateEmail(newEmail: string): void {
    this.email = newEmail;}
};
