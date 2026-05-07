//Tạo class library
type ItemBook = {
  name: string;
  category: string;
  soLuong: number;
};

class Library {
  name:string;
  location: string;
  books: ItemBook[];
  
 constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
    this.books = [];
  }
}

  //Tạo một phương thức addBook