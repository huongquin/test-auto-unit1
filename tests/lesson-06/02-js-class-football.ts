type ItemPlayer = {
  name: string;
  address: string;
  old: number;
  experience: number;
};

class Team {
  name: string;
  players: ItemPlayer[];

  constructor(name: string) {
    this.name = name;
    this.players = [];
  }

  // Tạo một phương thức addPlayer
  addPlayer(player: ItemPlayer): void {
    this.players.push(player);
  }
}

//Liệt kê danh sách cầu thủ của các đội
listPlayers(): void {
  for (const player of this.players) {
    console.log(`Tên: ${player.name}`);
    console.log(`Tuổi: ${player.old}`);
    console.log(`Kinh nghiệm: ${player.experience} years`);
  }
}