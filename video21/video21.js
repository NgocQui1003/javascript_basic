// filter and find
// cả hai đều tìm phần tử, fil thì tìm ra nhiều, find thì tìm ra một phần tử đầu tiên thỏa mà nó tìm đc còn tìm k đc thì 
// trả ra undefined  
// có thể tìm hiểu thêm ở trang dev mozila
// Hàm filter tạo ra một bảng mới và không thay đổi mảng ban đầu
let arr = [1, 2, 3, 4, 5]
let filter = arr.filter((item, index) => {
    console.log('item and index: ', 'item: ', item, 'index: ', index)
    return item && item > 5;
});

console.log(filter)

// filter với obj
let arr1 = [
    {name: 'Qui', age: 20},
    {name: 'Qui', age: 21},
    {name: 'Qui', age: 24},
    {name: 'Qui', age: 26},
    {name: 'Qui', age: 30}
]
let filter1 = arr1.filter((item, index) => {
    console.log('item and index: ', 'item: ', item, 'index: ', index)
    return item && item.age > 5;
});

console.log(filter1)

// filter với obj
let arr1 = [
    {name: 'Qui', age: 20},
    {name: 'Qui', age: 21},
    {name: 'Qui', age: 24},
    {name: 'Qui', age: 26},
    {name: 'Qui', age: 30}
]
let filter2 = arr1.find((item, index) => {
    console.log('item and index: ', 'item: ', item, 'index: ', index)
    return item && item.age > 5;
});

console.log(filter2)