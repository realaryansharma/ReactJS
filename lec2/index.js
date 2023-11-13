// const obj = {
//     fn1: function() {
//         console.log(this);
//     },
//     fn2: () => {
//         console.log(this);
//     },
// }

// obj.fn1();
// obj.fn2();

// // As you can see, in the above example one function is  standard fn, and other one is arrow function.
// // In Standard Fn: this -> was referring to obj, the parent.
// // In Arrow Fn: this -> refers to parent of the parent obj. (Window in this case)

// // Now, what would happen if I nest obj into one more obj?

// function check() {

//     const parent = {

//         obj1: {

//             fn1: function() {
//                 console.log(this);
//             },
//             fn2: () => {
//                 console.log(this);
//             },
//         }           
        
//     }
//     const thisObj = {name: 'asjahc'};
//     parent.obj1.fn1().call(thisObj);
//     parent.obj1.fn2().call(thisObj);

// }

// check();


