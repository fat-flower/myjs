//map

//map()方法定义在JavaScript的Array中
//调用Array的map()方法，传入自己的函数，就得到了一个新的Array
//map将传入的函数作用在每个数组元素上，返回新的数组
function pow(x){
	return x*x;
};
var arr = [1,2,3,4,5];
var ret = arr.map(pow);
ret;
//[1, 4, 9, 16, 25]

/************************************************************/

//reduce
function pow(x,y){
	return x*y;
};
var arr = [1,2,3,4,5];
//将前面的结果与下一个元素做pow函数的运算
var ret = arr.reduce(pow);
//function (x,y){return x*y} 匿名函数
//var ret = arr.reduce(function (x,y){return x*y});
ret;//120

/*************************************************************/

//filter()
//把传入的函数依次作用于每个元素，根据返回值是true还是false决定保留还是丢弃该元素
var arr = [1,2,3,4];
function foo(x){
	return x > 2;
};
//过滤小于等于2的元素
var ret = arr.filter(foo);
ret;//[3,4]

//filter的回调函数可以接受三个参数，1，当前数组元素，2，当前元素索引，3当前数组对象
function foo(x, y, z){
	console.log(x);
	console.log(y);
	console.log(z);
	return true;
};
var ret = arr.filter(foo);
ret;//[1,2,3,4]

//利用filter去重
//原理：数组的indexOf(x)方法总是返回数组元素中第一个x值的索引
var arr = [1,2,2,3,3,4,4];
function foo(x, index, array){
	return array.indexOf(x) === index;
};
var ret = arr.filter(foo);
ret;//[1,2,3,4]




