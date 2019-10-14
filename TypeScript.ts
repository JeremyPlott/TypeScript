// typescriptlang.org
// git: npm install -g typescript (-g installs globally. Important.)
// tsc --init

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



class Customer {
    id: number;
    name: string;

    get Id() { return this.id; }
    set Id(id: number) { this.id = id; }

    get Name() { return this.name; }
    set Name(name: string) { this.name = name; }

    get Sales() { return this.sales; }
    set Sales(sales: number) = 

    constructor(id: number, name: string, public sales: number) {
        this.id = id;
        this.name = name;
        this.sales = sales;
    }

    log(): void {
        console.log(`id is ${this.id}` +
            ` and name is ${this.name}` +
            ` and sales is ${this.sales}`);
    }
}
let c: Customer = new Customer(1, "MAX", 1000);
c.log();

let custs: Customer[] = [];
custs.push(c);

for (let cust of custs) {
    cust.log();
}