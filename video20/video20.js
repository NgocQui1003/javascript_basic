let sum = (a, b, callback) =>{
    let tong = a + b;
    setTimeout(() =>{
        callback(tong);
    }, 5000) // 5000 miliseconds = 5s
}

let printsum = (message) =>{
    console.log("check sum: ", )
}