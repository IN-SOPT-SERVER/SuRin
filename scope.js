if (true) {
    var x = "var";
}
console.log("x: ",x);

if (true) {
    let y = "let";
}
console.log("y: ",y); //error

function func() {
    if (true) {
        var test = "var";
        console.log("test: ", test);
    }
    console.log("test: ", test);
}

func();
console.log("test: ",test); //error