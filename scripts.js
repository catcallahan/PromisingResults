slowMath.add(6,2)
.then ((a) => {
    console.log(a)
    return slowMath.multiply(a, 2)
}).then ((b) => {
    console.log (b)
    return slowMath.divide(b,4)
}).then((c) => {
    console.log(c)
    return slowMath.subtract(c,3)
}).then ((d) => {
    console.log(d);
    return slowMath.add(d,98)
}).then ((e) => {
    console.log(e);
    return slowMath.divide(e,2)
}).then ((f) => {
    console.log(f)
});