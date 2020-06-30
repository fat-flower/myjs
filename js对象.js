//js的对象类似于Python的字典
//对象属性名称必须是字符串，有效变量可以不加''
var xiaoming = {
	name: 'xiaoming',
	age: 18,
	'midle-school': 'xxx' //midle-school中有不是有效变量名，要用''
};

//访问对象的属性
//有效变量名可用.方位属性，也可以用[]访问
xiaoming.name;
//"xiaoming"
xiaoming['name'];
//"xiaoming"
xiaoming.age;
//18

//不是有效变量名时必须用[]访问
xiaoming['midle-school'];
//"xxx"

//如果访问一个不存在的属性，不会报错，而是返回undefined
xiaoming.sex;
//undefined

/*************************************************************/

//属性操作
var xiaoming = {
	name: 'xiaoming',
	age: 18,
	'midle-school': 'xxx' //midle-school中有不是有效变量名，要用''
};

//添加属性
xiaoming.sex = '男';
xiaoming;
//{name: "xiaoming", age: 18, midle-school: "xxx", sex: "男"}

//删除属性
delete xiaoming.sex;
xiaoming;
//{name: "xiaoming", age: 18, midle-school: "xxx"}
//删除一个不存在的属性也不会报错

//in判断对象是否有相关属性，对象继承对的也算
//判断小明是否有name属性
'name' in xiaoming;
//true

//toString是继承来的
//因为toString定义在object对象中，而所有对象最终都会在原型链上指向object
'toString' in xiaoming;
//true
'family' in xiaoming;
//false

//要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()
xiaoming.hasOwnProperty('name');
//true
xiaoming.hasOwnProperty('toString');
//false
