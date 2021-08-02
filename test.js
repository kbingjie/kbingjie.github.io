var x;
function bar() { }
function foo() {
    let c = "c";
    bar();
    console.log("from foo: " + x, c);
}

function baz() {
    console.log("from baz: " + x);
    x = 1337;
}

function bar() {
    let x = 100;
    baz();
}

function mainx() {
    x = 10;
    if (true) {
        let x = "test";
        console.log("from main: " + x);
        foo();
    }

}

mainx();