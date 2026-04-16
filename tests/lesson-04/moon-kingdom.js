function createCharacters() {
  // 1. Khai báo mảng
  const characters = [
    { name: "Mario", level: 10, health: 400 },
    { name: "Luigi", level: 12, health: 600 },
    { name: "Peach", level: 8, health: 300 },
    { name: "Mango", level: 20, health: 500 }
  ];

   // 2. Dùng map để tạo charactersPowerUp
const charactersPowerUp = characters.map(char => {
  return {
    name: char.name.toUpperCase(),
    level: char.level * 2,
    health: char.health * 3
  };

    // 3. Dùng filter để lấy health > 1000
  const possibleWinners = charactersPowerUp.filter(char => {
    return char.health > 1000;
  });
  console.log("possibleWinners:", possibleWinners);
};

// Gọi hàm
createCharacters();