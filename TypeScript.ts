// typescriptlang.org

var a: number = 1;
function add1(nbr: number): number {
    return nbr + 1;
}

let add2 = (nbr: number): number => {
    return nbr + 2;
}

let ans: number = add1(4);
let ans2: number = add2(7);

enum rgb { Red, Green, Blue };

let obj: any = 1;
let nbr: number = <number>obj;
nbr = (obj as number);

var fn = () => {
    let a = 0;
    if (true) {
        var b = 1;
    }
    console.log(a, b);
}
fn();
console.log("ok");