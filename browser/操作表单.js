/*
表单的输入框、下拉框等可以接收用户输入，用JavaScript来操作表单，
可以获得用户输入的内容，或者对一个输入框设置新的内容
HTML表单的输入控件主要有以下几种：
文本框，对应的<input type="text">，用于输入文本；
口令框，对应的<input type="password">，用于输入口令；
单选框，对应的<input type="radio">，用于选择一项；
复选框，对应的<input type="checkbox">，用于选择多项；
下拉框，对应的<select>，用于选择一项；
隐藏文本，对应的<input type="hidden">，用户不可见，但表单提交时会把隐藏文本发送到服务器
*/

//获取值
//如果获得了一个<input>节点的引用，就可以直接调用value获得对应的用户输入值
//这种方式可以应用于text、password、hidden以及select
// <input type="text" id="email">
var input = document.getElementById('email');
//获取用户输入值
input.value;

//对于单选框和复选框，value属性返回的永远是HTML预设的值，
//而实际需要获得的是用户是否“勾上了”的选项，所以应该用checked判断
// <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
// <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
//返回的是默认值
mon.value; // '1'
tue.value; // '2'
//检查是否勾选了该值(true表示勾选，false表示未勾选)
mon.checked; // true或者false
tue.checked; // true或者false

//设置值
//对于text、password、hidden以及select，直接设置value就可以：
// <input type="text" id="email">
var input = document.getElementById('email');
input.value = 'test@example.com'; // 文本框的内容更新
//对于单选框和复选框，设置checked为true或false即可

//提交表单
//响应<form>本身的onsubmit事件
/*
在检查和修改<input>时，要充分利用<input type="hidden">来传递数据

id为md5-password的<input>标记了name="password"，而用户输入的id为input-password的
<input>没有name属性。没有name属性的<input>的数据不会被提交
*/
<!-- HTML -->
<form id="login-form" method="post" onsubmit="return checkForm()">
    <input type="text" id="username" name="username">
    <input type="password" id="input-password">
    <input type="hidden" id="md5-password" name="password">
    <button type="submit">Submit</button>
</form>

<script>
//用来响应提交事件
function checkForm() {
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    //把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    //继续下一步:
    return true;
}
</script>

//练习
//利用JavaScript检查用户注册信息是否正确，在以下情况不满足时报错并阻止提交表单：
//用户名必须是3-10位英文字母或数字；
//口令必须是6-20位；
//两次输入口令必须一致。
<!-- HTML结构 -->
<form id="test-register" action="#" target="_blank" onsubmit="return checkRegisterForm()">
    <p id="test-error" style="color:red"></p>
    <p>
        用户名: <input type="text" id="username" name="username">
    </p>
    <p>
        口令: <input type="password" id="password" name="password">
    </p>
    <p>
        重复口令: <input type="password" id="password-2">
    </p>
    <p>
        <button type="submit">提交</button> <button type="reset">重置</button>
    </p>
</form>

<script>

function checkRegisterForm(){
	var re_name = /^[0-9a-zA-Z]{3,8}$/;
	var re_pwd = /^.{6,20}$/;
	
	var user_input = document.getElementById('username');
	var pwd_input = document.getElementById('password');
	var pwd_input_2 = document.getElementById('password-2');
	var username = user_input.value;
	var pwd = pwd_input.value;
	var pwd_2 = pwd_input_2.value;
	if(re_name.test(username) && re_pwd.test(pwd) && pwd === pwd_2)
	{
		return true;
	}
	return false;
}
</script>







