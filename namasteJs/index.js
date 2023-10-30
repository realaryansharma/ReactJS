//Closure Example Ep 10

// function x() {
//     let a = 10;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

//Ep 11

function x() {

    let a = 10;

    setTimeout( function() {
        console.log(a);
        
    }, 3000);

    console.log("Ayoo..!");

}

x();