
// 类型别名和类型断言
// type aliases；

type PlusType = (x:number,y:number)=>number;
function sum(x:number,y:number):number{
    return x+y;
}

const sum2:PlusType = sum;

type nameResolver = ()=>string;
function getName(n:string|nameResolver):string{
    if(typeof n === 'string'){
        return n;
    }else{
        return n();
    }
}

// type assertion 
function getLength(input:string|number):number{
    const str = input as String;
    if(str.length){
        return str.length;
    }else{
        const num = input as Number; // 直接返回
        return num.toString().length;
    }
    
}

function getLength1(input:string|number):number{
    const str = input as String;
    if((<string>input).length){
        return (<string>input).length;
    }
    return <number>input;
    
}// 如何返回number；强制转换成number；