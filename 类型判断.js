/*
不要使用new Number()、new Boolean()、new String()创建包装对象；
用parseInt()或parseFloat()来转换任意类型到number；
用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
typeof操作符可以判断出number、boolean、string、function和undefined；
判断Array要使用Array.isArray(arr)；
判断null请使用myVar === null；
判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
函数内部判断某个变量是否存在用typeof myVar === 'undefined'
*/

//字符串转整型
var str = '123';
var n = parseInt(str);
n;//123

//字符串转float型
var str = '123.321';
var f = parseFloat(str);
f;//123.321

//数值转字符串
var n1 = 123, n2 = 123.321;
var str1 = n1.toString();
var str2 = n2.toString();
str1;//"123"
str2;//"123.321"

var str = (123).toString();//注意必须加()号
str;//"123"

var str = String(123);
str;//"123"

