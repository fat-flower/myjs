/*
$符号
$是著名的jQuery符号
jQuery把所有功能全部封装在一个全局变量jQuery中，$也是一个合法的变量名，
它是变量jQuery的别名：

window.jQuery; // jQuery(selector, context)
window.$; // jQuery(selector, context)
$ === jQuery; // true
typeof($); // 'function'
$本质上就是一个函数，但是函数也是对象，于是$除了可以直接调用外，也可以有很多其他属性
*/

//使用jQuery查找dom节点
//1.选择器
//2.层级选择器
//3.过滤器
//4.表单相关查找
//5.查找和过滤

//1.
//根据节点id查找：
//<div id="abc">
var div = $('#abc');
//#abc以#开头。返回的对象是jQuery对象
//jQuery对象类似数组，它的每个元素都是一个引用了DOM节点的对象
//如果id为abc的<div>不存在，返回的jQuery对象为[]
//jQuery的选择器不会返回undefined或者null

//jQuery对象和DOM对象之间可以互相转化
var div = $('#abc'); // jQuery对象
var divDom = div.get(0); // 假设存在div，获取第1个DOM元素
var another = $(divDom); // 重新把DOM包装为jQuery对象

//按Tag查找节点
var ps = $('p'); // 返回所有<p>节点
ps.length; 	// 返回的<p>节点数

//按class查找
//按class查找注意在class名称前加一个'.'
var a = $('.red');//包含class="red"的节点都将返回
// 例如:
// <div class="red">...</div>
// <p class="green red">...</p>

//通常很多节点有多个class，可以查找同时包含red和green的节点
var a = $('.green.red');//它们之间没有空格

//按属性查找
var email = $('[name=email]'); // 找出<??? name="email">
var passwordInput = $('[type=password]'); // 找出<??? type="password">
//当属性的值包含空格等特殊字符时，需要用双引号括起来
var a = $('[items="A B"]'); // 找出<??? items="A B">

//按属性查找还可以使用前缀查找或者后缀查找：
var icons = $('[name^=icon]'); // 找出所有name属性值以icon开头的DOM
// 例如: name="icon-1", name="icon-2"
var names = $('[name$=with]'); // 找出所有name属性值以with结尾的DOM
// 例如: name="startswith", name="endswith"
//这个方法尤其适合通过class属性查找，且不受class包含多个名称的影响：
var icons = $('[class^="icon-"]'); // 找出所有class包含至少一个以`icon-`开头的DOM
// 例如: class="icon-clock", class="abc icon-home"

//组合查找
//组合查找就是把上述简单选择器组合起来使用
//如果查找$('[name=email]')，很可能把表单外的<div name="email">也找出来，
//但如果只希望查找<input>，可以这么写：
var emailInput = $('input[name=email]'); // 不会找出<div name="email">
//根据tag和class来组合查找：
var tr = $('tr.red'); // 找出<tr class="red ...">...</tr>

//多项选择器
//多项选择器就是把多个选择器用,组合起来一块选：
$('p,div'); // 把<p>和<div>都选出来
$('p.red,p.green'); // 把<p class="red">和<p class="green">都选出来
//要注意的是，选出来的元素是按照它们在HTML中出现的顺序排列的，而且不会有重复元素
//例如，<p class="red green">不会被上面的$('p.red,p.green')选择两次

//查找例子
<!-- HTML结构 -->
<div id="test-jquery">
    <p id="para-1" class="color-red">JavaScript</p>
    <p id="para-2" class="color-green">Haskell</p>
    <p class="color-red color-green">Erlang</p>
    <p name="name" class="color-black">Python</p>
    <form class="test-form" target="_blank" action="#0" onsubmit="return false;">
        <legend>注册新用户</legend>
        <fieldset>
            <p><label>名字: <input name="name"></label></p>
            <p><label>邮件: <input name="email"></label></p>
            <p><label>口令: <input name="password" type="password"></label></p>
            <p><button type="submit">注册</button></p>
        </fieldset>
    </form>
</div>

//查找值为JavaScript的节点
var selected = $('#para-1');	//按id查找
//查找Erlang的节点
selected = $('.color-rad.color-green');//按class查找
//查找JavaScript和Erlang节点
selected = $('.color-red'); //按class查找，它们都有color-red
//查找所有编程语言节点
selected = $('[class^="color-"]');	//按属性值查找，所有编程语言class属性中都有color
//查找 名字input
selected =  $('input[name=name]'); //input标签，有属性name=name的节点
//查找 名字input和邮件input
selected = $('input[name=name],input[name=email]');

/***************************************************************************/

//2.层级选择器
//如果两个DOM元素具有层级关系，就可以用$('ancestor descendant')来选择，
//层级之间用空格隔开

<!-- HTML结构 -->
<div class="testing">
    <ul class="lang">
        <li class="lang-javascript">JavaScript</li>
        <li class="lang-python">Python</li>
        <li class="lang-lua">Lua</li>
    </ul>
</div>
//要选出JavaScript，可以用层级选择器
var selected = $('div.testing ul.lang li.lang-javascript');
//selected: [<li class="lang-javascript">JavaScript</li>]
//或者
selected = $('ul.lang li.lang-javascript');
//因为<div>和<ul>都是<li>的祖先节点，所以上面两种方式都可以选出相应的<li>节点

//选择所有的<li>节点:
var selected = $('ul.lang li');

//子选择器
//子选择器$('parent>child')类似层级选择器，但是限定了层级关系必须是父子关系，
//就是<child>节点必须是<parent>节点的直属子节点
<!-- HTML结构 -->
<div class="testing">
    <ul class="lang">
        <li class="lang-javascript">JavaScript</li>
        <li class="lang-python">Python</li>
        <li class="lang-lua">Lua</li>
    </ul>
</div>
//用子选择器选出JavaScript节点
var selected = $('ul.lang>li.lang-javascript');
//可以选出[<li class="lang-javascript">JavaScript</li>]
selected = $('div.testing>li.lang-javascript');//不能选出，因为div和li不是直属父子

/***********************************************************************/

//过滤器
//过滤器一般不单独使用，它通常附加在选择器上，帮助更精确地定位元素
<!-- HTML结构 -->
<div class="testing">
    <ul class="lang">
        <li class="lang-javascript">JavaScript</li>
        <li class="lang-python">Python</li>
        <li class="lang-lua">Lua</li>
    </ul>
</div>
//选出JavaScript,Python,Lua三个节点
var selected = $('ul.lang li');
//仅选出JavaScript
selected = $('ul.lang li:first-child');
//仅选择Lua
selected = $('ul.lang li:last-child');
//选出第n个元素，n从1开始
selected = $('ul.lang li:nth-child(2)');//选出第二个节点(Python)
$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
$('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素


/**********************************************************************/

//表单相关 
/*
针对表单元素，jQuery还有一组特殊的选择器：
:input：可以选择<input>，<textarea>，<select>和<button>；
:file：可以选择<input type="file">，和input[type=file]一样；
:checkbox：可以选择复选框，和input[type=checkbox]一样；
:radio：可以选择单选框，和input[type=radio]一样；
:focus：可以选择当前输入焦点的元素，例如把光标放到一个<input>上，用$('input:focus')就可以选出；
:checked：选择当前勾上的单选框和复选框，用这个选择器可以立刻获得用户选择的项目，如$('input[type=radio]:checked')；
:enabled：可以选择可以正常输入的<input>、<select> 等，也就是没有灰掉的输入；
:disabled：和:enabled正好相反，选择那些不能输入的

此外，jQuery还有很多有用的选择器，例如，选出可见的或隐藏的元素：
$('div:visible'); // 所有可见的div
$('div:hidden'); // 所有隐藏的div
*/

/********************************************************************/

//查找和过滤 
/*
通常情况下选择器可以直接定位到我们想要的元素，但是，当我们拿到一个jQuery对象后，
还可以以这个对象为基准，进行查找和过滤。
最常见的查找是在某个节点的所有子节点中查找，使用find()方法，
它本身又接收一个任意的选择器
*/
<!-- HTML结构 -->
<ul class="lang">
    <li class="js dy">JavaScript</li>
    <li class="dy">Python</li>
    <li id="swift">Swift</li>
    <li class="dy">Scheme</li>
    <li name="haskell">Haskell</li>
</ul>
//用find()查找
var ul = $('ul.lang'); //获得<ul>
//获得JavaScript, Python, Scheme
var dy = ul.find('.dy');
// 获得Swift
var swift = ul.find('#swift');
// 获得Haskell
var haskell = ul.find('[name=haskell]');

//从当前节点向上查找
var swift = $('#swift');
//获得Swift的上层节点
var p = swift.parent();
var a = swift.parent('.lang');//获得上层节点，同时附带过滤条件

//对于位于同一层级的节点，可以通过next()和prev()方法
var swift = $('#swift');
//获得下一个节点(Secheme节点)
var scheme = swift.next();
//也可以指定下一个节点的过滤条件
//如果下一个节点没有name=xxx属性，返回空对象
var scheme = swift.next('[name=xxx]');

//获得上一个节点(Python节点)
var python = swift.prev();


/*****************************************************************/

//和函数式编程的map、filter类似，jQuery对象也有类似的方法

//filter()方法可以过滤掉不符合选择器条件的节点
//map()方法把一个jQuery对象包含的若干DOM节点转化为其他对象

//fileter
<!-- HTML结构 -->
<ul class="lang">
    <li class="js dy">JavaScript</li>
    <li class="dy">Python</li>
    <li id="swift">Swift</li>
    <li class="dy">Scheme</li>
    <li name="haskell">Haskell</li>
</ul>
//拿到JavaScript, Python, Swift, Scheme和Haskell
var langs = $('ul.lang li');
//过滤掉Python和Scheme和haskell
var a = langs.filter('.dy'); //过滤掉Python和Scheme和haskell都有class dy
//filter也可以传入一个函数，特别注意函数内部的this被绑定为DOM对象，不是jQuery对象
//拿到值为'S'开头的节点（Swift和Scheme）
var b = langs.filter(function(){
	return this.innerHTML.indexOf('S');
});


//map
<!-- HTML结构 -->
<ul class="lang">
    <li class="js dy">JavaScript</li>
    <li class="dy">Python</li>
    <li id="swift">Swift</li>
    <li class="dy">Scheme</li>
    <li name="haskell">Haskell</li>
</ul>
//获取ul节点下所有li节点
var langs = $('ul.lang li');
//map将作用于每个li节点，this被绑定为DOM对象
//用get()拿到包含string的数组:['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']
var arr = langs.map(function(){
	return this.innerHTML;
}).get();

/*
一个jQuery对象如果包含了不止一个DOM节点，first()、last()和slice()方法
可以返回一个新的jQuery对象，把不需要的DOM节点去掉：
*/
<!-- HTML结构 -->
<ul class="lang">
    <li class="js dy">JavaScript</li>
    <li class="dy">Python</li>
    <li id="swift">Swift</li>
    <li class="dy">Scheme</li>
    <li name="haskell">Haskell</li>
</ul>
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
//第2和第4个节点
var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致

//例子
//输入值后，用jQuery获取表单的JSON字符串，
//key和value分别对应每个输入的name和相应的value，例如：{"name":"Michael","email":...}
<form id="test-form" action="#0" onsubmit="return false;">
    <p><label>Name: <input name="name"></label></p>
    <p><label>Email: <input name="email"></label></p>
    <p><label>Password: <input name="password" type="password"></label></p>
    <p>Gender: <label><input name="gender" type="radio" value="m" checked> Male</label> <label><input name="gender" type="radio" value="f"> Female</label></p>
    <p><label>City: <select name="city">
    	<option value="BJ" selected>Beijing</option>
    	<option value="SH">Shanghai</option>
    	<option value="CD">Chengdu</option>
    	<option value="XM">Xiamen</option>
    </select></label></p>
    <p><button type="submit">Submit</button></p>
</form>

var json = null;
json = {};
//.val()方法获得jQuery对象的input值
json.name = $('#test-form').find('[name=name]').val();
json.email = $('#test-form').find('[name=eamil]').val();
json.password = $('#test-form').find('[name=password]').val();
json.gender = $('#test-form').find('[name=gender]:checked').val();
json.city = $('#test-form').find('[name=city]').val();
json=JSON.stringify(json);
//{"name":"wyh","password":"112233","gender":"f","city":"CD"}





