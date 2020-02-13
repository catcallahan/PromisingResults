// //---- Promise Chain ---//
// slowMath.add(6,2)
// .then ((a) => {
//     console.log(a)
//     return slowMath.multiply(a, 2)
// }).then ((b) => {
//     console.log (b)
//     return slowMath.divide(b,4)
// }).then((c) => {
//     console.log(c)
//     return slowMath.subtract(c,3)
// }).then ((d) => {
//     console.log(d);
//     return slowMath.add(d,98)
// }).then ((e) => {
//     console.log(e);
//     return slowMath.remainder(e,2)
// }).then ((f) => {
//     console.log(f);
//     return slowMath.multiply(f,50)
// }).then ((g)=> {
//     console.log(g);
//     return slowMath.remainder(g, 40);
// } ).then((h) => {
//     console.log(h);
//     return slowMath.add(h, 32);
// }).then((i) => {
//     console.log(`The final result is ${i}`)
// }).catch ((err)=> {
//     err = new Error ("The math doesn't pan out");
//     console.log(err);
// });

//----Async and Await ---//

async function doMath(a, b) {
    try {
        let wait = await slowMath.add(a, b);
        console.log(wait);
        wait = await slowMath.multiply(wait, 2);
        console.log(wait);
        wait = await slowMath.divide(wait, 4);
        console.log(wait);
        wait = await slowMath.subtract(wait, 3);
        console.log(wait);
        wait = await slowMath.add(wait, 98);
        console.log(wait);
        wait = await slowMath.remainder(wait, 2);
        console.log(wait);
        wait = await slowMath.multiply(wait, 50);
        console.log(wait);
        wait= await slowMath.remainder(wait, 40);
        console.log(wait);
        wait = await slowMath.add(wait, 32);
        console.log(`The final result is ${wait}`)

    } catch (err) {
        err = new Error("The math ain't working out");
        console.log(err)
    }
}

doMath(6, 2);