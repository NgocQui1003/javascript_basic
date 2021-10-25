console.log('hello bạn quí'.toUpperCase()) //in hoa chuỗi
let a = 5; // đối với js thì chỉ có dạng number và nó tự hiểu các dạng khi ta rán vào như 
// int, float, long, double
let b = 6;
let c = 5.9;
let d = "5";
console.log(a+b) //11
console.log(a+c) // 10.9
console.log(a+d) //55 
console.log(a*d) // 25 do đối với js thì ngoài phép cộng thì nó sẽ cộng với chuỗi thì đối với các phép còn lại
// nó sẽ biến chuối thành number xong rồi thực hiện các phép -, *, /

// MẸO GIÚP MUỐN RÁN BIẾN STRING CHO BIẾN MUÔN DẠNG NUMBER
//thông thường
let e = Number(d);
//Mẹo
let f = +d; // hai cách trên đều như nhau nhưng đây là mẹo

console.log('e value: ', e, 'type: ', typeof e)
console.log('f value: ', f, 'type: ', typeof f)