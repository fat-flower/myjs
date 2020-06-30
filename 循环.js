var sum = 0;
var i;

for(i = 0; i < 100; i++)
{
	sum = sum + i;
}
sum;
//4950

/*******************************************************/

//for ... in... 循环
//for in 可以把一个对象的所有属性依次循环出来
//for ... in对Array的循环得到的是String而不是Number
var xiaoming = {
	name : 'xiaoming',
	age : 18
};

for (var key in xiaoming)
{
	console.log(key);
}
//name
//age

//数组也是对象，它的索引被视为对象的属性
var arr = ['a', 'b', 'c'];
for (var i in arr)
{
	console.log(i);			//'0', '1', '2'
	console.log(arr[i]);	//'a', 'b', 'c'
}

/**************************************************************/
var arr = ['Bart', 'Lisa', 'Adam'];
var i = 0;
while (i < arr.length)
{
	console.log('Hello,' + arr[i] + '!');
	i = i + 1;
}
//Hello,Bart!
//Hello,Lisa!
//Hello,Adam!


