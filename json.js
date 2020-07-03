/*
json的数据类型
number：和JavaScript的number完全一致；
boolean：就是JavaScript的true或false；
string：就是JavaScript的string；
null：就是JavaScript的null；
array：就是JavaScript的Array表示方式——[]；
object：就是JavaScript的{ ... }表示方式
*/

//json的序列化和反序列化

'use strict';

//将对象序列化为json
var xiaoming = {
	name:'xiaoming',
	age: 18,
	'mid-school': 'HY-mid-school',
	skills: ['python', 'C', 'js']
};

var s = JSON.stringify(xiaoming);
s;
//"{"name":"xiaoming","age":18,"mid-school":"HY-mid-school","skills":["python","C","js"]}"

//可以加上参数，按缩进输出(第三个参数指定格式)
var s = JSON.stringify(xiaoming, null , '	');
s;
/*
"{
	"name": "xiaoming",
	"age": 18,
	"mid-school": "HY-mid-school",
	"skills": [
		"python",
		"C",
		"js"
	]
}"
*/

//第二个参数用于控制如何筛选对象的键值，如果只想输出指定的属性，可以传入数组
var xiaoming = {
	name:'xiaoming',
	age: 18,
	'mid-school': 'HY-mid-school',
	skills: ['python', 'C', 'js']
};
//只序列化输出name,age属性
var s = JSON.stringify(xiaoming, ['name', 'age']);
s;
//"{"name":"xiaoming","age":18}"

//第二个参数也可以传入一个函数，这样每个key value都将被函数处理
var xiaoming = {
	name:'xiaoming',
	age: 18,
	'mid-school': 'HY-mid-school',
	skills: ['python', 'C', 'js']
};
//函数的参数为 键，值
function foo(key, value){
	//如果属性值是字符串，则转换为大写
	if(typeof value === 'string'){
		return value.toUpperCase();
	}
	return value;
};

var s = JSON.stringify(xiaoming, foo);
s;
//"{"name":"XIAOMING","age":18,"mid-school":"HY-MID-SCHOOL","skills":["PYTHON","C","JS"]}"


/*****************************************************************/

//定义对象的toJSON()方法
/*
toJSON()作为JSON.stringify中第二个参数(函数过滤器)的补充，理解内部顺序很重要
把一个对象传入JSON.stringify() 序列化对象的顺序如下：
(1)如果对象存在toJSON()方法而且能通过它取得有效的值，则返回toJSON()返回的键值对
   否则，按对象属性的默认顺序返回键值对
(2)如果JSON.stringify()提供了第二个参数(函数过滤器)，则传入函数过滤器的值是第(1)步返回的值。
(3)对第(2)步返回的每个值进行相应的序列化
(4)如果提供了第三个参数，执行相应的格式化操作
*/
var xiaoming = {
	name: 'xiaoming',
	age: 18,
	'mid-school': 'HY-mid-school',
	skills: ['python', 'C', 'js'],
	//序列化时只输出name和age，并且改变了name和age的key(修改为大写)
	toJSON: function () {
				return {
					'NAME': this.name,
					'AGE': this.age
				};
			}
};
var s = JSON.stringify(xiaoming);
s;
//"{"NAME":"xiaoming","AGE":18}"


/*******************************************************************/

//反序列化
//拿到一个JSON格式的字符串，可以用JSON.parse()把它变成一个JavaScript对象
var s = '{"name":"xiaoming","age":18,"mid-school":"HY-mid-school","skills":["python","C","js"]}';
var xiaoming = JSON.parse(s);
xiaoming;
//{name: "xiaoming", age: 18, mid-school: "HY-mid-school", skills: ["python","C","js"]}

//JSON.parse()还可以接收一个函数，用来转换解析出的属性
function foo(key, value){
	//将name属性的值转换为大写
	if(key === 'name'){
		return value.toUpperCase();
	}
	return value;
};

var s = '{"name":"xiaoming","age":18}';
var xiaoming = JSON.parse(s, foo);
xiaoming;//{name: "XIAOMING", age: 18}









