
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res);
})

Promise.resolve().then(() => {
    console.log(1);
    return Promise.resolve(2);
}).then((res) => {
    console.log(res);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() => {
    console.log(6);
})

//The program excutes order is :


// [ATask,BTask] output: 0  then here is has a promise 4 to inssert into the queue then excute P4 will pending

// [BTask,A2Task,B2Task] output:1 then here is has a promise 2 to inssert into the queue then excute P2 will pending

//  [A2Task,B2Task,B3Task] output:4 

//  [B3Task,B4Task] output:2

//  [B4Task,B5Task] output:3

//  [B5Task,B6Task] output:5

//  [B6Task] output:6



