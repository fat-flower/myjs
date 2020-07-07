//异步网络请求
/*
AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术
1.
XMLHttpRequest 对象
所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。
XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，
对网页的某部分进行更新
为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持XMLHttpRequest对象。
如果支持，则创建 XMLHttpRequest 对象。如果不支持，则创建 ActiveXObject
创建对象：
var xmlhttp;
if (window.XMLHttpRequest){
	// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp = new XMLHttpRequest();
}
else{
	// code for IE6, IE5
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

2.
向服务器发送请求
如需将请求发送到服务器，使用 XMLHttpRequest 对象的 open() 和 send() 方法
method：请求的类型；GET 或 POST
url：文件在服务器上的位置
async：true（异步）或 false（同步）
open(method,url,async)
string：仅用于 POST 请求
send(string)
如果需要像 HTML 表单那样 POST 数据，使用 setRequestHeader()来添加HTTP头。
然后在send()方法中规定希望发送的数据：
xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");
默认情况下，JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致

3.
服务器响应
获得来自服务器的响应，使用XMLHttpRequest对象的responseText或responseXML属性
responseText	获得字符串形式的响应数据
responseXML	获得 XML 形式的响应数据
responseText 属性返回字符串形式的响应，可以这样使用：
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，使用 responseXML 属性：
xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++){
	txt=txt + x[i].childNodes[0].nodeValue + "<br />";
}
document.getElementById("myDiv").innerHTML=txt;

4.
onreadystatechange 事件
当请求被发送到服务器时，需要执行一些基于响应的任务
每当 readyState 改变时，就会触发 onreadystatechange 事件
readyState 属性存有 XMLHttpRequest 的状态信息
(1)onreadystatechange存储函数（或函数名），每当readyState属性改变时，就会调用该函数
(2)readyState存有 XMLHttpRequest 的状态。从 0 到 4 发生变化:
	0: 请求未初始化
	1: 服务器连接已建立
	2: 请求已接收
	3: 请求处理中
	4: 请求已完成，且响应已就绪
(3)status	
	200: "OK"
	404: 未找到页面
在onreadystatechange事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务
当readyState等于4且状态为 200 时，表示响应已就绪
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}
//注意：onreadystatechange事件会被触发5次（0 - 4），对应着readyState的每个变化
*/

//例子, 通过ajax修改当前页面局部内容
/*
<html>
<head>
<script type="text/javascript">
*/
	function getWeather(){
		//创建XMLHttpRequest对象
		var xmlhttp;
		if (window.XMLHttpRequest){	
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		}
		else{	
			// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//注册请求状态发生变化时的回调函数
		xmlhttp.onreadystatechange = function(){
			//当请求完成并且服务器响应成功时，修改myDiv块的内容为请求返回的文本内容
			if (xmlhttp.readyState === 4 ){
				if(xmlhttp.status === 200){
					document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
				}
				else{
					alert("请求失败!");
				}
			}
		}
		//向服务器发送请求
		xmlhttp.open("GET", "/ajax/test1.txt", true);
		//调用send()方法才真正发送请求
		xmlhttp.send();
	}
/*
	</script>
</head>
<body>
	<div id="myDiv"><h2>Let AJAX change this text</h2></div>
	<!--点击按钮时触发loadXMLDoc函数-->
	<button type="button" onclick="loadXMLDoc()">通过AJAX改变内容</button>
</body>
</html>
*/
















