//js数组
var arr = [1,2,'hello',null,true];

//数组长度
arr.length;

//通过索引赋值时，索引超过了范围，会引起Array大小的变化
//修改arr.length值也会影响数组的大小
arr[7] = 'world';
arr;
//[1,2,'hello',null,true,undefined,undefined,'world'];

/*********************************************/

//indexOf 
//通过值查询索引
var arr = [1,2,'hello',null,true];
arr.indexOf('hello');	//2

/*********************************************/

//slice 截取数组
var arr = [1,2,'hello',null,true];
//不加参数就是从头截取到尾部，可用于复制数组
arr.slice()	
//[1, 2, "hello", null, true]

//从索引1开始截取，到3结束（不包括3）
arr.slice(1, 3);
//[2, "hello"]

//从2开始知道结束
arr.slice(2);
//["hello", null, true]

/*********************************************/

//push和pop
//push()向Array的末尾添加若干元素，pop()把Array的最后一个元素删除掉
var arr = [1, 2, 'hello', null, true];
arr.push(3, 'a', 'b');
arr;
//[1, 2, "hello", null, true, 3, "a", "b"]

arr.pop();
arr;
//[1, 2, "hello", null, true, 3, "a"]

//空数组pop()不会报错，而是返回undefined
arr = [];
arr.pop();
//undefined

/*********************************************/

//unshift和shift
//unshift向数组头部添加若干元素，shift删除数组的第一个元素
var arr = [1, 2, 'hello', null, true];
arr.unshift('a', 'b', 'c');
arr;
//["a", "b", "c", 1, 2, "hello", null, true]
arr.shift();
arr;
//["b", "c", 1, 2, "hello", null, true]

/*********************************************/

//仅所有元素为字符串，如果是数字，则结果不正确，如25>100,因为字符'2'大于'1'
//sort对数组内元素按字符串大小进行排序，默认为升序
var arr = ['d', 'c', 'b', 'a'];
arr.sort();
arr;
//["a", "b", "c", "d"]

var arr = ['hello', 'bell', 'lucky', 'messi'];
arr.sort();
arr;
//["bell", "hello", "lucky", "messi"]

/*********************************************/

//reverse反转数组
var arr = ['hello', 'bell', 'lucky', 'messi'];
arr.reverse();
arr;
//["messi", "lucky", "bell", "hello"]

/*********************************************/

//splice
//splice()方法可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素
var arr = ['hello', 'bell', 'lucky', 'messi', 'linux'];
//删除第2个元素开始的2个元素，然后再从该位置添加'lixin', 'bob'
arr.splice(3,2,'lixin', 'bob');
arr;
//["hello", "bell", "lixin", "bob", "linux"]

//在第2个元素位置添加'unix',不删除元素
var arr = ['hello', 'bell', 'lucky', 'messi', 'linux'];
arr.splice(1,0,'unix');
arr;
//["hello", "unix", "bell", "lucky", "messi", "linux"]

//删除第2个元素位置开始的3个元素，不添加
var arr = ['hello', 'bell', 'lucky', 'messi', 'linux'];
arr.splice(1,3);
arr;
//["hello", "linux"]

/*********************************************/

//concat
//concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array
var arr = ['hello', 'world'];
var con = arr.concat(['good', 'morning']);
con;
//["hello", "world", "good", "morning"]

//concat()方法可以接收任意个元素和数组，并且自动把Array拆开，然后全部添加到新的数组
var arr = ['a', 'b'];
var con = arr.concat(1,2,['b','c']);
con;
//["a", "b", 1, 2, "b", "c"]

/*********************************************/

//join
//join()方法把当前数组的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
var arr = ['a', 1, 'b'];
var str = arr.join('-');
str;
//"a-1-b"



