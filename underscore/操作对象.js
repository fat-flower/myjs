//和Array类似，underscore也提供了大量针对Object的函数

//keys/allkeys
//keys()可以非常方便地返回一个object自身所有的key，但不包含从原型链继承下来
'use strict';

function Student(name, age) {
    this.name = name;
    this.age = age;
}

var xiaoming = new Student('小明', 20);
_.keys(xiaoming); // ['name', 'age']

//allKeys()除了object自身的key，还包含从原型链继承下来的
'use strict';

function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.school = 'No.1 Middle School';
var xiaoming = new Student('小明', 20);
_.allKeys(xiaoming); // ['name', 'age', 'school']


//values
//和keys()类似，values()返回object自身的所有value但不包含原型链继承的
//注意没有allValues()!
'use strict';

var obj = {
    name: '小明',
    age: 20
};
_.values(obj); // ['小明', 20]


//mapObject
//mapObject()是针对object的map版本
'use strict';
var obj = { a: 1, b: 2, c: 3 };
// 注意传入的函数签名，value在前，key在后:
_.mapObject(obj, (v, k) => 100 + v); // { a: 101, b: 102, c: 103 }


//invert
//invert()把object的每个key-value来个交换，key变成value，value变成key
'use strict';
var obj = {
    Adam: 90,
    Lisa: 85,
    Bart: 59
};
_.invert(obj); // { '59': 'Bart', '85': 'Lisa', '90': 'Adam' }


//extend / extendOwn
//extend()把多个object的key-value合并到第一个object并返回
//如果有相同的key，后面的object的value将覆盖前面的object的value
'use strict';

var a = {name: 'Bob', age: 20};
_.extend(a, {age: 15}, {age: 88, city: 'Beijing'}); 
// {name: 'Bob', age: 88, city: 'Beijing'}
//注意变量a的内容也改变了：
a; // {name: 'Bob', age: 88, city: 'Beijing'}

//extendOwn()和extend()类似，但获取属性时忽略从原型链继承下来的属性


//clone
//复制一个object对象，用clone()方法，它会把原有对象的所有属性都复制到新的对象中
'use strict';
var source = {
    name: '小明',
    age: 20,
    skills: ['JavaScript', 'CSS', 'HTML']
};
var copied = _.clone(source);
//clone()是"浅复制",所谓"浅复制"就是两个对象相同的key所引用的value其实是同一对象：
source.skills === copied.skills; // true
//也就是说，修改source.skills会影响copied.skills


//isEqual
//isEqual()对两个object进行深度比较，如果内容完全相同，则返回true：

'use strict';
var o1 = { name: 'Bob', skills: { Java: 90, JavaScript: 99 }};
var o2 = { name: 'Bob', skills: { JavaScript: 99, Java: 90 }};

o1 === o2; // false
_.isEqual(o1, o2); // true

//isEqual()其实对Array也可以比较：
'use strict';
var o1 = ['Bob', { skills: ['Java', 'JavaScript'] }];
var o2 = ['Bob', { skills: ['Java', 'JavaScript'] }];

o1 === o2; // false
_.isEqual(o1, o2); // true















