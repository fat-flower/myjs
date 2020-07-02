//var定义变量
//const定义常量

const n = 3.14;
n = 2;//有些浏览器不会报错，但不会生效，当前谷歌浏览器报错
console.log(n);

/*************************************************************/

//解构赋值
var arr = [1,2,3];
//对数组元素进行解构赋值时，多个变量要用[]括起来
var [x,y,z] = arr;
console.log(x+','+y+','+z);//1,2,3

//解构赋值还可以忽略某些元素
var arr = [1,2,3];
//对数组元素进行解构赋值时，多个变量要用[]括起来
//忽略前两个元素
var [,,z] = arr;
console.log(z);//3

//对对象进行解构赋值是，多个变量用{}括起来
//注意定义的变量名要和属性名称一致！否则会被认为是不存在的属性，从而返回undefined
var xiaoming = {
	name: 'xiaoming',
	age: 18
};
var {name,age} =  xiaoming;
console.log(name+','+age);

//如果要使用的变量名和属性名不一致，可以用let
var xiaoming = {
	name: 'xiaoming',
	age: 18
};
//把age属性赋值给变量his_age
//注意: passport不是变量，而是为了让变量id获得passport属性
let {name, age:his_age} = xiaoming;
his_age;//18
age;//Uncaught ReferenceError: passport is not defined

//多个层次则要保证层级相同
var xiaoming = {
	name: 'xiaoming',
	age: 18,
	address: {
		city: 'chengdu',
		street: 'd5'
	}
};
var {name,age,address:{city,street}} = xiaoming;

//解构使用默认值
var xiaoming = {
	name: 'xiaoming',
	age: 18
};
//如果对象没有sex属性，则sex默认为'男'
var {name,age,sex='男'} = xiaoming;

//如果变量已经被声明，则要加()
//这时因为JavaScript引擎把{开头的语句当作了块处理，于是=不再合法。
//解决方法是用小括号括起来
var xiaoming = {
	name: 'xiaoming',
	age: 18
};
//声明name，age
var name, age;
({name, age} = xiaoming);

//使用场景，两个数交换
var x=1,y=2;
[x,y] = [y,x];
//x=2, y=1







