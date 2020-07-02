//ES6标准

//generator由function*定义

function* gen(max){
	var a = 0, b = 1;
	var n = 0;
	while(n < max){
		//1.相当于阻塞在yield，当外部调用生成器时返回a
		//2.yield返回后继续运行，由于循环又回到yield阻塞，等待外部再次调用生成器
		//运行到这里就返回a
		yield a;
		//a = b, b = a+b;这是在一步中完成，b=a+b中的a是之前的a，不是a=b后的a
		[a, b] = [b, a+b];
		n++;
	}
	return;
};

var g = gen(5);

//获取生成器下一个元素
//g.next();

//生成器可以遍历
for (var i of g){
	console.log(i);
}
//0,1,1,2,3