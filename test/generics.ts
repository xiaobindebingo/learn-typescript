// 为什么需要范型？
function echo<T>(arg:T):T{
    return arg;
}

const result: number = echo(123);

function swap<T, U>(tuple:[T,U]): [U,T]{
    return [tuple[1], tuple[0]]
}

const result2 = swap(['string',123]);




// 范型的深入用法：范型的约束？T[];否则.length会报错；
function echoWithArr<T>(arg:T[]):T[]{  
    console.log(arg.length);
    return arg;
}
interface withLength{
    length:number
}
function echoWithArr1<T extends withLength>(arg:T):T{  
    console.log(arg.length);
    return arg;
}


function add(a:number,b:number):Function{
    return function():number{
        return a +b;
    }
}

var res:string = add(1,2)();

// generics 约束 类和接口

class Queue<T>{
    private data = [];
    push(item:T){
        return this.data.push(item);
    }
    pop(){
        return this.data.shift();
    }
}

const queue = new Queue<number>();
queue.push('1231'); // 报错
queue.push(0);
const queue1 = new Queue<string>();
queue1.push('string')

interface KeyPair<T,U>{
    key: T,
    value: U,
}

let kp1: KeyPair<number, string> = {key:123, value:'string'};
// 用interface描述函数的类型

interface IechoWithArr2<T>{
    (arr:T):T
}
function echoWithArr2<T>(str:T):T{
    return str;
}
let c :IechoWithArr2<string> = echoWithArr2;
