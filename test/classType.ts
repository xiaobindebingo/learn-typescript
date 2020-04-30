/**
 * 
 * 实现一个类，带静态属性，方法，只读属性，公共方法，私有方法；重写方法；
 * 
 */
class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    run(){
        console.log(this.name+'is run');
    }
}

let animal = new Animal('dog');
class Dog extends Animal{
    constructor(){
        super(name);
        
    }
    bark(){
        console.log(this.name + 'bark')
    }
}
let dog = new Dog();
dog.bark()

/**
 * 1. interface和class的关系；
 * 
 * 
 */
interface root{

}
interface Radio extends root {
    switch(a,b):any,
}
interface Battery extends root {
    checkStatus?():any,
}
class Cellphone implements Radio,Battery{
    switch(a,b){

    }
    checkStatus(){

    }
}

