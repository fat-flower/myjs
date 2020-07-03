//JavaScript对每个创建的对象都会设置一个原型，指向它的原型对象
/*
当用obj.xxx访问一个对象的属性时，JavaScript引擎先在当前对象上查找该属性，
如果没有找到，就到其原型对象上找，如果还没有找到，就一直上溯到Object.prototype对象，
最后，如果还没有找到，就只能返回undefined

例如，创建一个Array对象：
var arr = [1, 2, 3];
其原型链是：
arr ----> Array.prototype ----> Object.prototype ----> null
Array.prototype定义了indexOf()等方法，因此所有的数组都可以直接调用这些方法

创建一个函数时：
function foo() {
    return 0;
}
函数也是一个对象，它的原型链是：
foo ----> Function.prototype ----> Object.prototype ----> null
由于Function.prototype定义了apply()等方法，因此，所有函数都可以调用apply()方法

如果原型链很长，那么访问一个对象的属性就会因为花更多的时间查找而变得更慢
*/

//构造对象的函数
//JavaScript中，可以用关键字new来调用函数，并返回一个对象
//注意，如果不写new，这就是一个普通函数，它返回undefined。
//如果写了new，变成一个构造函数，它绑定的this指向新创建的对象，并默认返回this，
//也就是说，不需要在最后写return this;
function Student(name){
	this.name = name;
	this.hello = function (){
		alert('hello, '+this.name);
	};
};
var xiaoming = new Student('小明');
xiaoming.name;//小明
xiaoming.hello();//hello, 小明
/*
新创建的xiaoming的原型链是：
xiaoming ----> Student.prototype ----> Object.prototype ----> null

也就是说，xiaoming的原型指向函数Student的原型。
如果又创建了xiaohong、xiaojun，那么这些对象的原型与xiaoming是一样的：
xiaoming ↘
xiaohong → Student.prototype ----> Object.prototype ----> null
xiaojun  ↗

用new Student()创建的对象从原型上获得了一个constructor属性，它指向函数Student本身
*/
xiaoming.constructor === Student;//true


/*
如果通过new Student()创建了很多对象，这些对象的hello函数其实都是独立的，不同的，
实际上它们只需要共享同一个函数就可以了，这样可以节省很多内存。
要让创建的对象共享一个hello函数，根据对象的属性查找原则，只要把hello函数移动到对象
共同的原型上就可以了，也就是Student.prototype
*/
function Student(name){
	this.name = name;
};
//哪个对象调用hello函数，this就指向谁
Student.prototype.hello = function (){
	alert('hello, '+this.name);
};
var xiaoming = new Student('小明');
var xiaohong = new Student('小红');
xiaoming.hello();//hello, 小明
xiaohong.hello();//hello, 小红
xiaoming.hello === xiaohong.hello;//true

/*******************************************************************/
//常用的封装构造函数编程模式
function Student(props){
	this.name = props.name || '匿名'; //如果没有指定name属性，name属性默认值为'匿名'
	this.age = props.age || 1;
};
Student.prototype.hello = function (){
	alert('hello, '+this.name);
};
//封装创建对象的函数
function createStudent(props){
	//如果没有传props，就模式传递{}
	return new Student(props || {});
};
//createStudent()函数有几个优点：
//一是不需要new来调用，二是参数非常灵活，可以不传，也可以这样传：
var xiaoming = createStudent({name:'小明', age:'18'});
xiaoming.age;//18
/*
如果创建的对象有很多属性，只需要传递需要的某些属性，剩下的属性可以用默认值。
由于参数是一个Object，无需记忆参数的顺序。
如果恰好从JSON拿到了一个对象，就可以直接创建出xiaoming
*/

/*******************************************************************************/

//ES6引入了class
//使用class编写Student
class Student{
	//constructor 对象的构造函数(调用new Student()时就是调用的这个函数)
	constructor(name){
		this.name = name;
	}
	//定义在原型上的hello函数（注意没有function关键字）
	hello(){
		alert('hello, '+this.name);
	}
}
//创建对象
var xiaoming = new Student('小明');
xiaoming.hello();//hello, 小明

//class继承
//继承通过extends来实现

//表示PrimaryStudent 继承自Student
class PrimaryStudent extends Student{
	//当前对象的构造函数
	constructor(name, grade){
		//super表示父类的构造方法
		super(name);
		this.grade = grade;
	}
	
	//PrimaryStudent通过继承已经自动获得了父类Student的hello方法
	
	//定义PrimaryStudent自身新的方法
	myGrade(){
		alert('I am at grade'+this.grade);
	}
}

var xiaohong = new PrimaryStudent('小红', 7);
xiaohong.name;	//小红
xiaohong.grade;	//7
xiaohong.hello();	//hello, 小红
xiaohong.myGrade();//I am at grade7












