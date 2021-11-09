// thường function và method khác nhau ở chỗ method thường k đi một mình và năm trong class 
// quan trọng là không cần hiểu về hai khái niệm mà là biết về cách dùng

let obj = {
    name: 'Qui',
    address: 'An Giang',
    getName: function(){
        //method
        return this.name;
    }
}

console.log('getname obj: ', bbj.getName());