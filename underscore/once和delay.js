/*
once
once()保证某个函数执行且仅执行一次
例如一个register()功能，用户在页面上点两个按钮的任何一个都可以执行的话，
就可以用once()保证函数仅调用一次，无论用户点击多少次
*/

var register = _.once(function () {
    alert('Register ok!');
});

//delay
//delay()可以让一个函数延迟执行，效果和setTimeout()是一样的：
'use strict';
// 2秒后调用alert():
_.delay(alert, 2000);
//如果要延迟调用的函数有参数，把参数也传进去：
'use strict';
var log = _.bind(console.log, console);
_.delay(log, 2000, 'Hello,', 'world!');
// 2秒后打印'Hello, world!':