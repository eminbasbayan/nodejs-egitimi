// console.log("console.log 1");
// process.nextTick(()=> {
//     console.log("process.nextTick");
// });
// console.log("console.log 2");

//! *********************************

// Promise.resolve().then(() => console.log("Promise.resolve"));
// process.nextTick(() => console.log("process.nextTick"));

//! *********************************

process.nextTick(() => console.log("process.nextTick 1"));
process.nextTick(() => {
    console.log("process.nextTick 2");
    process.nextTick(() =>
        console.log("next tick içinde iç next tick")
    );
});
process.nextTick(() => console.log("process.nextTick 3"));

Promise.resolve().then(() => console.log("Promise.resolve 1"));
Promise.resolve().then(() => {
    console.log("Promise.resolve 2");
    process.nextTick(() =>
        console.log("Promise then bloğu içinde iç next tick")
    );
});
Promise.resolve().then(() => console.log("Promise.resolve 3"));
