//ES6规范

//Map是一组键值对的结构，具有极快的查找速度

//初始化Map需要一个二维数组，或者直接初始化一个空Map
var m = new Map([['linus', 60], ['bob', 59]]);
m.get('linus'); //60

//或者
var m = new Map();
m.set('bob') = 59;	//添加一个新的key-value
m.set('adam') = 61;
m.get('bob');		//获取key bob的值  59
m.has('adam');      //判断是否存在key adam  true
m.delete('adam');	//删除key adam
m.get('adam');		//获取不存在的key对应的值，返回undefined

/***************************************************************/

//set类似于python的元组
//set中的元素不重复
var s1 = new Set();	//空set
var s2 = new Set(['a', 'b', 11, 2, '2'], 11);//11有重复的自动删除一个
//{"a", "b", 11, 2, "2"}

//向set添加元素
s1.add(1);
s1.add(2);
//删除元素'a'
s2.delete('a');
s2;
//{"b", 11, 2, "2"}

//遍历set
for (var i of s2){
	console.log(i);
};
//'b', 11, 2, '2'

