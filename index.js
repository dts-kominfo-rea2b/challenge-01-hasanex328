// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {"nama":"Monica","gender":"Female","age":17, "email":"monica@dingdong.com","favoriteColour":new set["Yellow","Pink", "White", "Purple"],"isHavePet":true,"education":[{"name": "SD 01", "city": "Jakarta", "graduate": "2016"},{"name": "SMP 02", "city": "Jakarta", "graduate": "2019"},{"name": "SMA 03", "city": "Tangerang"}],"favoriteRestaurant":new set ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]};
const secondUser = {"nama":"Wendy","gender":"Male","age":23, "email":"wendy@dingdong.com","favoriteColour":new set["blue","black","gray"],"isHavePet":false,"education":[{"name": "SD 02", "city": "Jakarta", "graduate": "2010"},{"name": "SMP 03", "city":"Bogor", "graduate": "2013"},{"name": "SMA 01", "city": "Surabaya"}],"favoriteRestaurant":new set ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};