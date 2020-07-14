//错误处理

//try ... catch ... finally
/*
当代码块被try { ... }包裹的时候，就表示这部分代码执行过程中可能会发生错误，
一旦发生错误，就不再继续执行后续代码，转而跳到catch块。
catch (e) { ... }包裹的代码就是错误处理代码，变量e表示捕获到的错误。
最后，无论有没有错误，finally一定会被执行
*/

var r1, r2, s = null;
try {
    r1 = s.length; 	// 此处应产生错误
    r2 = 100; 		// 该语句不会执行
} catch (e) {
    console.log('出错了：' + e);
} finally {
    console.log('finally');
}
console.log('r1 = ' + r1); // r1应为undefined
console.log('r2 = ' + r2); // r2应为undefined
/*
出错了：TypeError: Cannot read property 'length' of null
finally
r1 = undefined
r2 = undefined
*/

//抛出错误
//程序也可以主动抛出一个错误，让执行流程直接跳转到catch块。抛出错误使用throw语句
var r, n, s;
try {
    s = prompt('请输入一个数字');
    n = parseInt(s);
	//如果n不是数值或不是数值字符串，返回true
	//NaN: not a number
    if (isNaN(n)) {
		//创建并抛出一个Error对象
        throw new Error('输入错误');
    }
    // 计算平方:
    r = n * n;
    console.log(n + ' * ' + n + ' = ' + r);
} catch (e) {
    console.log('出错了：' + e);
}


/***********************************************************************/

//错误传播

/*
如果在一个函数内部发生了错误，它自身没有捕获，错误就会被抛到外层调用函数，
如果外层函数也没有捕获，该错误会一直沿着函数调用链向上抛出，
直到被JavaScript引擎捕获，代码终止执行
所以，不必在每一个函数内部捕获错误，只需要在合适的地方来个统一捕获
*/

function main(s) {
    console.log('BEGIN main()');
    try {
        foo(s);
    } catch (e) {
        console.log('出错了：' + e);
    }
    console.log('END main()');
}

function foo(s) {
    console.log('BEGIN foo()');
    bar(s);
    console.log('END foo()');
}

function bar(s) {
    console.log('BEGIN bar()');
    console.log('length = ' + s.length);//s为null时报错
    console.log('END bar()');
}
main(null);
/*
BEGIN main()
BEGIN foo()
BEGIN bar()
出错了：TypeError: Cannot read property 'length' of null
END main()
*/

/*********************************************************************/

//异步错误处理
/*
当处理一个事件时，在绑定事件的代码处，无法捕获事件处理函数的错误
所以应该到事件处理函数中去用try...catch捕获
*/

<form>
    <input id="x"> + <input id="y">
    <button id="calc" type="button">计算</button>
</form>

var btn = $('#calc');
$btn.click(function (){
	//在事件处理函数中捕获事件处理函数的错误
	try{
		var x = parseFloat($('#x').val());
		var y = parseFloat($('#y').val());
		//如果输入的x和y不是数值，则抛出一个错误对象
		if(isNaN(x) || isNaN(y)){
			throw new Error('类型错误，请输入数值');
		}
		var r = x + y;
		alert('计算结果: ' + r);
	}
	catch(e){
		alert('输入有误!');
	}
	
});






