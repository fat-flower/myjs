//数组Array的sort()方法默认把所有元素先转换为String再排序！！

//对于两个元素x和y，如果x < y，返回-1，如果x == y，返回0，如果x > y，返回1

['Google', 'Apple', 'Microsoft'].sort(); 
//['Apple', 'Google', 'Microsoft'];

//通过sort方法实现自定义排序
//升序
var arr = [12, 5, 45, 99];
function foo(x, y){
	if(x > y){
		return 1;
	}
	else if(x < y){
		return -1;
	};
	return 0;
};
arr.sort(foo);
arr;
//[5, 12, 45, 99]

//降序
var arr = [12, 5, 45, 99];
function foo(x, y){
	if(x > y){
		return -1;
	}
	else if(x < y){
		return 1;
	};
	return 0;
};
arr.sort(foo);
arr;
//[99, 45, 12, 5]

//忽略大小写比较字符串
var arr = ['A','D','e', 'b'];
function foo(x, y){
	//统一转化为大写再做比较
	m = x.toUpperCase();
    n = y.toUpperCase();
	if(m > n){
		return 1;
	}
	else if (m < n){
		return -1;
	}
	return 0;
};
arr.sort(foo);
arr;
//["A", "b", "D", "e"]







