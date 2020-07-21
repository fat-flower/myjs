//ES6标准引入了新的iterable(可迭代)类型，Array、Map和Set都属于iterable类型

//具有iterable类型的集合可以通过新的for ... of循环来遍历
//for in 遍历的是对象的属性，for of 遍历的是对象的本身的元素
//更好的遍历方式是直接使用iterable内置的forEach方法

//遍历数组
var arr = [1,2,3,4];
for (var i of arr)
{
	console.log(i);
}
//1,2,3,4

//遍历Map
var m = new Map([['bob', 59],['linus', 0]]);
for (var x of m)
{
	//x就是存有key-value的数组
	console.log(x[0]+'='+x[1]);
}
//bob=59
//linus=0

//遍历set
var s = new Set([1,2,3,4]);
for (var i of s)
{
	console.log(i);
}
//1,2,3,4

/*************************************************************/

//更好的遍历方式是直接使用iterable内置的forEach方法，
//它接收一个函数，每次迭代就自动回调该函数

//遍历数组
var arr = ['a','b','c','d'];

//这里在语句内用function定义一个匿名函数
//forEach将当前的元素值，索引，数组传递给function
//element当前元素值，index当前元素索引，array当前数组
arr.forEach(function(element, index, array)
{
	console.log(index+','+element);
}
);
//0,a 
//1,b
//2,c 
//3,d

//遍历set
//Set没有索引，因此回调函数的前两个参数都是元素本身
var s = new Set(['a','b','c']);
s.forEach(function (value, sameValue, set){
	console.log(value);
});
//a b c

//遍历map
//Map的回调函数参数依次为value、key和map本身
var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
m.forEach(function (value, key, map){
	console.log(key+':'+value);
});
//1:x
//2:y
//3:z

