// setTimeout(()=> console.log("setTimeout 1"), 0);
// setTimeout(() => {
//     console.log("setTimeout 2");
//     process.nextTick(() =>
//         console.log("setTimeout içinde iç next tick")
//     );
// }, 0);
// setTimeout(()=> console.log("setTimeout 3"), 0);

setTimeout(()=> console.log("setTimeout 1"), 1000);
setTimeout(()=> console.log("setTimeout 2"), 500);
setTimeout(()=> console.log("setTimeout 3"), 0);
