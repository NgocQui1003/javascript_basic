//TEMPLATE STRINGS
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.'); // \n là xuống dòng // fifteen is 15 ...
console.log('Fifteen is ' + a + b + ' and\nnot ' + (2 * a + b) + '.') // fifteen is 510 ... đây là do nó thực hiện chuỗi 
// trước là fifteen is nên cộng phía sau là chuỗi luôn còn phía trên do có đặt trong dấu ngoặc nên nó nghĩ là phép tính

// trường hợp sau này đi làm muốn link url: nguyenngocqui/10diem
console.log(`nguyen ngoc qui/${b}diem`)  // ${} là được xem như một biến, cái ${} hiện lê màu xanh là được xem như 1 biến
console.log(`Nguyen Ngoc Qui, tuoi la: ${a + b}`) //thực hiện dấu nháy xéo `` giúp không nhầm lẫn giữa "" và ''