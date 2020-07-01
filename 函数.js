//js函数

//函数定义方式有两种
//function指明这是一个函数定义
//方式1
function abs(x)
{
	if(typeof x !== 'number')
	{
		//throw 语句抛出一个错误。
		//当错误发生时， JavaScript 会停止执行并抛出错误信息
		throw 'not a number';
	}
	if(x > 0)
	{
		return x;
	}
	return -x;
}
abs(-1);//1

//方式2
//function(x)表示一个匿名函数
//这个匿名函数赋值给了变量abs，所以，通过变量abs就可以调用该函数
//注意末尾的;号，因为这一一条赋值语句
var abs = function(x)
{
	if(typeof x !== 'number')
	{
		//throw 语句抛出一个错误。
		//当错误发生时，JavaScript会停止执行并抛出错误信息
		throw 'not a number';
	}
	if(x > 0)
	{
		return x;
	}
	return -x;
};	
abs(-1);//1

//js允许传入任意个参数而不影响调用，传入的参数比定义的参数多也没有问题
abs(1,'hello', 123);//1

/********************************************************************/

//arguments关键字
//它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
//arguments类似数组但它不是一个数组

function foo(x)
{
	//arguments.length表示传入参数的个数
	for(var i=0; i < arguments.length; i++)
	{
		console.log(arguments[i]);
	}
}
foo(1,2,3,4);
//1,2,3,4

//arguments最常见的用法是判断传入参数的个数
//将b变为可选参数
//要把中间的参数b变为“可选”参数，就只能通过arguments判断，然后重新调整参数并赋值
function boo(a,b,c)
{
	//如果只传了两个参数，实际拿到的参数是a和b，c为undefined
	//将b赋给c，b变为默认值
	if(arguments.length === 2)
	{
		c = b;
		b = 0;	//设置b的默认值为0（也可以定义为其他默认值）
	}
	return a+b+c;
}
boo(1,3); //4

/***********************************************************************/

//rest参数,ES6标准
//rest参数只能写在最后，前面用...标识，以数组形式用来表示多余的参数
function foo(a,b,...rest)
{
	console.log('a='+a);
	console.log('b='+b);
	console.log(rest);
	console.log(typeof rest);	//object
}
foo(1,2,3,4,5);
//a=1
//b=2
//[3,4,5]
foo(1);
//a=1
//b=undefined
//[]

//所有参数都存到rest数组
function boo(...rest)
{
	console.log(rest);
}
boo(1,2,'hello');
//[1, 2, "hello"]

/**********************************************************/
//练习，计算圆面积的函数area_of_circle()，它有两个参数：
//r: 表示圆的半径；
//pi: 表示π的值，如果不传，则默认3.14
function area_of_circle(r, pi)
{
	if(arguments.length === 1)
	{
		pi = 3.14;
	}
	if(typeof r !== 'number' || typeof pi !== 'number')
	{
		throw 'must be a number!';
	}
	var n = pi*r*r;
	console.log('面积为'+n);
}
area_of_circle(1);	//面积为3.14
area_of_circle(1,3.2);	//面积为3.2
area_of_circle('a',3.2);	//Uncaught must be a number!




