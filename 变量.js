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