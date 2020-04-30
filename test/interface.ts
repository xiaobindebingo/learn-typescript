/**
 * interface接口 
 * 1. 定义对象的shape进行描述，
 * 2. 对类进行抽象
 * readonly 是用在对象的属性上的， const是用在变量上的；
 */


 interface Person{
     readonly id: number;
     name: string;
     age: number;
     hobby: string[];
     friend?: string;
 }
 let viking: Person = {
     id: 1234,
     name:'hah',
     age: 16,
     hobby: ['2','1'],
     friend: '23213',
 }


