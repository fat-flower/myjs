//JavaScript可以获取浏览器提供的很多对象，并进行操作

//window对象
/*
window对象不但充当全局作用域，而且表示浏览器窗口
window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度。
内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高
window还有一个outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高
*/
//浏览器内部宽度
var iw = window.innerWidth;
//浏览器内部高度
var ih = window.innerHeight;
console.log(ih+'x'+iw);//722x1074

//浏览器整个宽高
var ow = window.outerWidth;
var oh = window.outerHeight;
console.log(ow+'x'+oh);//1536x824

/*****************************************************************/

//navigator
//navigator的信息可以很容易地被用户修改，所以JavaScript读取的值不一定是正确的
/*
navigator对象表示浏览器的信息，最常用的属性包括：
navigator.appName：浏览器名称；
navigator.appVersion：浏览器版本；
navigator.language：浏览器设置的语言；
navigator.platform：操作系统类型；
navigator.userAgent：浏览器设定的User-Agent字符串
*/
console.log('appName = ' + navigator.appName);
//appName = Netscape
console.log('appVersion = ' + navigator.appVersion);
//appVersion = 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36
console.log('language = ' + navigator.language);
//language = zh-CN
console.log('platform = ' + navigator.platform);
//platform = Win32
console.log('userAgent = ' + navigator.userAgent);
//userAgent = Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36

/*****************************************************************/

//screen
//screen对象表示屏幕的信息
/*
常用的属性有：
screen.width：屏幕宽度，以像素为单位
screen.height：屏幕高度，以像素为单位
screen.colorDepth：返回颜色位数，如8、16、24
*/
console.log('Screen size='+screen.width+'x'+screen.height+';'+'colordepth:'+screen.colorDepth);
//Screen size=1536x864;colordepth:24

/*****************************************************************/

//location
//location对象表示当前页面的URL信息
/*
例如当前页面url：http://www.example.com:8080/path/index.html?a=1&b=2#TOP
//获取当前页面完整的url:
location.href; http://www.example.com:8080/path/index.html?a=1&b=2#TOP
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'
*/
//要加载一个新页面，可以调用location.assign()。
//如果要重新加载当前页面，调用location.reload()方法
//confirm弹框确认：
//重新加载当前页http://www.example.com:8080/path/index.html?a=1&b=2#TOP?
//点击确定则返回true，点击取消则返回false
if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} 
else {
	//例如当前url:http://www.example.com:8080/path/index.html?a=1&b=2#TOP
	//加载到/就表示加载到首页：http://www.example.com:8080
    location.assign('/'); // 设置一个新的URL地址
}


/********************************************************************/

//document
//document对象表示当前页面
//由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点

//document的title属性是从HTML文档中的<title>xxx</title>读取的，但是可以动态改变
document.title = '学习js'
console.log(document.title);//学习js  （浏览器窗口标题变为学习js）

//要查找DOM树的某个节点，需要从document对象开始查找。
//最常用的查找是根据ID和Tag Name
//xml如下
<dl id="drink-menu" style="border:solid 1px #ccc;padding:6px;">
    <dt>摩卡</dt>
    <dd>热摩卡咖啡</dd>
    <dt>酸奶</dt>
    <dd>北京老酸奶</dd>
    <dt>果汁</dt>
    <dd>鲜榨苹果汁</dd>
</dl>
//通过id找到对应的节点
var menu = document.getElementById('drink-menu');
//在找到的drink-menu节点下找所有dt标签对应的一组节点
var drinks = menu.getElementsByName('dt');
for(var i=0; i<drinks.length; i++)
{
	//dt标签对应的内容
	console.log(drinks[i].innerHTML);//摩卡 酸奶 果汁
}
//menu.children表示获取节点drink-menu下的所有直属子节点
var ret = menu.children;
for(i=0;i<ret.length;i++)
{
    console.log(ret[i].innerHTML);
}
//依次打印摩卡，热摩卡咖啡，酸奶，北京老酸奶，果汁，鲜榨苹果汁


//document对象还有一个cookie属性，可以获取当前页面的Cookie
document.cookie;
/*
由于JavaScript能读取到页面的Cookie，而用户的登录信息通常也存在Cookie中，
这就造成了巨大的安全隐患,为了解决这个问题，服务器在设置Cookie时可以使用httpOnly，
设定了httpOnly的Cookie将不能被JavaScript读取。
这个行为由浏览器实现，主流浏览器均支持httpOnly选项
*/

/****************************************************************/

//history
//history对象保存了浏览器的历史记录
//JavaScript可以调用history对象的back()或forward ()，
//相当于用户点击了浏览器的“后退”或“前进”按钮
//弃用~








