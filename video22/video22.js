// MAP
//map cũng duyệt qua các phần tử trong mảng tuy nhiên khi thay đổi thực hiện phép tính trên mảng này thì nó sẽ 
// không thay đổi giá trị trên mảng này mà nó sẽ tạo ra mảng mới 
// vòng lặp for thì ngược lại

// VÍ DỤ
let arr = [1,2,3,4,5,6,7,8,9]
// vòng lặp for
for(let i=0; i<arr.length; i++)
{
    arr[i] = arr[i] * arr[i];   
}

// map
let maparr = arr.map((item, index) =>{
    item = item * item;
    return item;
})

console.log('check arr: ', arr)
console.log('check maparr: ', maparr)