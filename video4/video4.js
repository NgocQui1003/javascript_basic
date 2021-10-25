// Để không phải bị lẩn lộn giữa dấu nháy đơn '' hay là kép ""
// chúng ta có thể dùng dấu nháy chéo để khai báo ``

// Ví dụ
let a = "Tôi là Nguyễn Ngọc Quí";
let b = 'Tôi là nguyễn ngọc quí';
let c = `Toi là "Nguyễn Ngọc Quí"` // đối với trường hợp bên trong chuỗi có dấu nháy đơn hoặc kép thì dùng dấu nháy chéo 
// sẽ giải quyết được vấn đề nhầm lẫn và lỗi
console.log(c)