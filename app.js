console.log("Hello Word");
var x=1;
console.log(typeof(x));
x="Kenneth";
console.log(typeof(x));
console.log(x);

function make1(x,y){
    console.log(x);
}

function make2(x,y,z)
{
    make1(x+1);
    console.log(typeof(x));
    if (x==null)
    {
        console.log("x is null!")
    }
    if (y==null)
    {
        console.log("y is null!")
    }
   // if(typeof(y)==='undefined')
   // {console.log("y is undefined");}
    console.log(y);
    console.log(z);
}
make1(x+1,1);
make2('xxx',null,100);
make2(null,null,100);



function make3(fn1)
{
    console.log(fn1);
    fn1();
}

function fn1()
{
    console.log("Hello World");
}

make3(fn1);

str1="Apple";
console.log(str1);
str2='An'+str1;
console.log(str1);
str2=`
xxx An ${str1}

\n hello galo`
console.log(str2);


var x= true;
var yy=false;
if(x){
    console.log("true");
}
if(yy){
    console.log("false");
}

x=100;
function make5(){
let x=10;
console.log(x);
}

make5();
console.log(`x from outside > ${x}`);

var fruit =['apple',false,'Orange',1,'durian'];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

fruit.push('PineApple'); //add from back
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.unshift(1); //add from front
console.log(fruit);
fruit.unshift('Watermelon');
console.log(fruit);
fruit.shift(); // delete first one from front
console.log(fruit);
fruit.sort();
console.log(fruit);

var numbers1=[4,7,8,9,1];
numbers1.sort(function(a,b){return b-a;})
console.log(numbers1);
numbers1.sort(function(a,b){
    console.log("a"+a);
    console.log("b"+b);
    console.log(b-a)
    return b-a;})

    var numbers1=[4,7,8,9,1];
    var numbers2=[4,77,81,9,1];
    result=numbers1.concat(numbers2); // join 2 arry
    console.log(result);
    result.sort(function(a,b){return b-a;});
    console.log(result);


var person={
    firstName:'Kenneth',
    lastName:"Phang",
    age:18,
    gender:'M',
    'my house':'amk',
    postalCode:566344

}
console.log(person.age);
console.log(person.gender);
console.log(person['age']);
console.log(person['my house']);

person.age=40;
console.log(person.age);
console.log(person.postalCode);
delete person.postalCode;
console.log(person.postalCode);

setTimeout(()=>{console.log(1+1);},5000) //=> anonymous function in JS run 1 time in this time period aka arrow function

setTimeout(function(){console.log(1+1);},5000)// anonymous fn

//name as x
function namedx(){
    console.log(1+1);
}

//set interval runs many times during the time set
setTimeout(namedx,5000);

//setInterval(()=>{
//    console.log("setInterval >" +1+1);
//},2000) 

function throwError(){
    throw new Error('This is an error');
}

try {
    throwError();
}
catch(e){
    console.log(e);

}finally{
    console.log("finally execute");
}

var x5=4;

switch(x5){
    case 1:
    console.log('1');
    case 2:
    console.log('2');
    case 4:
    console.log('4');
    default:
    console.log("This is default switch");

}

var yy=0;
while(yy<=5){
    console.log(yy);
    yy++;
}

var t=[1,3,4,5,8,9];
t.forEach((result,index)=>{
    console.log("Result >"+result);
     console.log("Index >"+index);
})


for(var i=0;i<t.length;t++){
    console.log(t[i]);
}

var months =['Jan','Feb','Mar','Apr','May'];
console.log(months);
//index, deletecount, value
months.splice(4,2,'June','July');
//after delete add values
console.log(months);
//make a copy of the month
//first para is remove the front, second para is remove the back
months.slice(1,4);
copyMonths=months.slice(1,4);
console.log(">>>" +copyMonths);
console.log(months);

var person={
    firstName:'Kenneth',
    lastName:"Phang",
    age:18,
    gender:'M',
    'my house':'amk',
    postalCode:566344

}
//create the skeleton

function Person2(firstName,lastName,age,gender){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.gender=gender;
}

var p2 = new Person2('Kenneth','Phang','18','M');
console.log(p2.age);

class Animal{
    constructor(noOfLeg,color,shape){
        this.noOfLeg=noOfLeg;
        this.color=color;
        this.shape=shape;
    }

    getNoOfLeg(){
        return this.noOfLeg;
    }

    getAdditionalLeg(){
        return this.noOfLeg+2;
    }
}

var c=new Animal(4,'brown','dog');
console.log(c.noOfLeg);
console.log(c.color);
console.log(c.getAdditionalLeg());

class Cat extends Animal {
    constructor(noOfLeg,color,shape){
        super(noOfLeg,color,shape);
    }

    getBlackColor(){
        return 'black';
    }
}
var cc= new Cat(4,'red','elephant');
console.log("additional legs for cat  >"+cc.getAdditionalLeg());


const words =['spray','comb','limit','chocolate','coffee'];
const longwords=words.filter(word=>word.length>6);
console.log(longwords);

const total =[1,4,5,6].reduce((sum,value)=>sum+value,0);
console.log(total);

//http call
Promise.resolve('Success').then(function(value){
    console.log(value);//"success"
}),function(value){
    //not called
}
