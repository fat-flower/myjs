//在一个对象中绑定函数，称为这个对象的方法

var xiaoming = {
	name: 'xiaoming',
	birth: 1991,
	age: function (){
		//获取当前年份
		var y = new Date().getFullYear();
		//this指向当前对象，类似python的self，
		//但是如果在当前函数下再定义一个函数,则this指向undefined!!
		return y - this.birth;
	}
};
xiaoming.birth;//1991
xiaoming.age();//29

//apply
//函数本身的apply方法用于控制this指向
function getAge(){
	var y = new Date().getFullYear();
	//当前函数不在对象中，this指向在strict模式下指向undefined
	return y - this.birth;
};

var xiaoming = {
	name: 'xiaoming',
	birth: 1991,
	age: getAge
};
xiaoming.name;//xiaoming
//apply第一个参数是对象(也就是函数中的this)，第二个参数数组，表示getAge的参数
getAge.apply(xiaoming,[]);//29

//call与apply相似，区别是传递函数本身的参数是按顺序传入而不是数组
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5

/***************************************************************/

//装饰器
//利用apply的特性，动态改变函数的行为

//原函数
function foo(x){
	console.log(x);
};
//封装一个装饰器统计调用foo函数的次数
//保存原函数
var old_foo = foo;
var count = 0;

//重新定义foo函数
window.foo = function(){
	//统计调用次数
	count += 1;
	//使用apply，调用被装饰的函数
	//apply()方法在这里的作用应该是把类数组arguments拆开，
	//当成一个个的参数传递给函数oldParseInt
	return old_foo.apply(null, arguments);
};
foo('aaa');//aaa
count;//1







