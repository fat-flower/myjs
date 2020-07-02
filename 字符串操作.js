//split切分字符串
//按指定分隔符切分字符串
//按逗号切分
var arr = "h,e,l,l,o".split(',');
arr;//["h", "e", "l", "l", "o"]
//按空格切分(包括连续的空格)，使用正则表达式
var arr = "a  b c     d".split(/\s+/);
arr;//["a", "b", "c", "d"]

//按空格或逗号、分号切分
var arr = "a,b;;c d  e".split(/[\s,;]+/);
arr;//["a", "b", "c", "d", "e"]

/**********************************************************/

//提取子字符串

//正则表达式的exec()方法
//exec()方法在匹配成功后，会返回一个数组：
//第一个元素是正则表达式匹配到的整个字符串，后面的字符串表示匹配成功的子串
//exec()方法在匹配失败时返回null

//使用正则表达式提取子字符串
//正则表达式用'()'表示要提取的分组
//
//该表达式定义了两个提取的分组，分别是(\d{3})和(\d{3,8})
var re = /^(\d{3})-(\d{3,8})$/;
var arr = re.exec('123-45678');
arr;
//["123-45678", "123", "45678", index: 0, input: "123-45678", groups: undefined]

//提取时、分、秒
var re = /^(0[0-9]|1[0-9]|2[0-3]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])\:(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
var d = re.exec('19:35:29');
d;
//["19:35:29", "19", "35", "29", index: 0, input: "19:35:29", groups: undefined]

/*********************************************************************/

//全局搜索
//JavaScript的正则表达式还有几个特殊的标志，最常用的是g，表示全局匹配
var re1 = /test/g;
//等价于：
var re2 = new RegExp('test', 'g');

//全局匹配可以多次执行exec()方法来搜索一个匹配的字符串。
//指定g标志后，每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;

// 使用全局匹配:
re.exec(s);
//["JavaScript", index: 0, input: "JavaScript, VBScript, JScript and ECMAScript", groups: undefined]
re.lastIndex; // 10

re.exec(s);
//["VBScript", index: 12, input: "JavaScript, VBScript, JScript and ECMAScript", groups: undefined]
re.lastIndex; // 20

re.exec(s); // ['JScript']
re.lastIndex; // 29

re.exec(s); // ['ECMAScript']
re.lastIndex; // 44

re.exec(s); // null，直到结束仍没有匹配到









