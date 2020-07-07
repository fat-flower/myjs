/*
Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
它们是两个函数，由JavaScript引擎提供，不用自己部署。
resolve函数的作用是将Promise对象的状态从'未完成'变为'成功'(从pending变为resolved)
在异步操作成功时调用，并将异步操作的结果(信息)作为resolve的参数传递出去
reject函数的作用是将Promise对象的状态从'未完成'变为'失败'(从 pending 变为 rejected)
在异步操作失败时调用，并将异步操作报出的错误(信息)作为resolve的参数传递出去

Promise实例生成以后，可以用then方法分别指定resolve状态和rejected状态的回调函数
then方法可以接受两个回调函数作为参数。
第一个回调函数是Promise对象的状态变为resolved时调用
第二个回调函数是Promise对象的状态变为rejected时调用
其中，第二个函数是可选的，不一定要提供。
这两个函数都接受Promise对象传出的值作为参数(即resolve或reject携带的参数)

catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，
用于指定发生错误时(变为rejected状态)的回调函数
*/

//用promise对象实现ajax操作
var getJSON = function(url) {
	//创建promise对象,Promise的参数是一个函数，Promise()被调用时会执行该函数
	var promise = new Promise(function(resolve, reject){
		//定义ajax的请求完成时的异步回调函数
		var handler = function(){
			if (this.readyState !== 4) {
				return;
			}
			//请求成功，变为resolved状态，并返回请求的结果
			if (this.status === 200) {
				resolve(this.response);//this为调用该函数的对象(client)
			} 
			//响应失败，变为reject状态，并返回错误信息
			else {
				reject(new Error(this.statusText));
			}
		};
		//创建XMLHttpRequest对象
		var client = new XMLHttpRequest();
		client.open("GET", url);
		//注册ajax请求完成时调用的回调函数(异步调用)
		client.onreadystatechange = handler;
		//ajax期望服务器返回的数据类型为json
		client.responseType = "json";
		//设置http请求头部，当前期望接收的数据类型
		client.setRequestHeader("Accept", "application/json");
		//发送请求
		client.send();
	});

	return promise;
};
//调用getJSON函数->执行Promise构造函数->等待异步回调函数(handler)返回->
//如果返回resolve执行then中的第一个回调函数，返回reject则执行then中的第二个回调函数
getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});


