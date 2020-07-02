//ES6标准

var fn = x => x * x;
//相当于
function fn(x){
	return x * x;
};
fn(2);//4

//箭头函数相当于匿名函数，并且简化了函数定义。
//箭头函数有两种格式，一种像上面的，只包含一个表达式，{ ... }和return都省略掉
//还有一种可以包含多条语句，这时候就不能省略{ ... }和return

x => {
	if(x > 0){
		return x;
	}
	return -x;
};

//如果参数不是一个，就需要用括号()括起来
(x, y) => {
	if(x > y){
		return x;
	}
	return y;
};

//没有参数
() => 3.14;

//可变参数
(a,b,...rest) => {
	var sum = a + b;
	for(var i=0; i<rest.length; i++)
	{
		sum += rest[i];
	}
	return sum;
};

//返回对象
x => ({name: x});

/************************************************************/

//箭头函数中的this
//箭头函数内部的this是词法作用域，由上下文确定
var xiaoming = {
	name: 'xiaoming',
	birth: 1991,
	getAge: function (){
		var b = this.birth;	//1991
		var fn = () => new Date().getFullYear() - this.birth;//this指向obj对象有效
		return fn();
	}
};
xiaoming.getAge();//29

//由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用
//箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略
var xiaoming = {
	name:'xiaoming',
	birth:1991,
	getAge:function(year){
		var b = this.birth;//1991
		var fn = (y) => y - this.birth;//this.birth仍是1991
		return fn.apply({name:'bob'}, [year]);//传入的对象{name:'bob'}被忽略
	}
};
xiaoming.getAge(2020);//29



