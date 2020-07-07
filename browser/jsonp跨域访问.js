/*
凡是拥有”src”这个属性的标签都拥有跨域的能力，比如<\script>、<\img>、<\iframe>
为了便于客户端使用数据，逐渐形成了一种非正式传输协议，人们把它称作JSONP，
该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回
数据时会将这个callback参数作为函数名来包裹住JSON数据，数据返回后又因为是在<script>
块中，所以自动执行返回的数据
这样客户端就可以随意
定制自己的函数来自动处理返回数据了
*/

<!doctype>
<html>
<head>
<meta charset='utf-8'></meta>
<script>
//data即getPrice中price.src请求的返回结果showPrice(data)中的data, 是一个JSON字符串
function showPrice(data){
    var p=document.getElementById("test-jsonp");
    p.innerHTML="当前价格："+
    data['0000001'].name +': ' + 
    data['0000001'].price + '；' +
    data['1399001'].name + ': ' +
    data['1399001'].price;
}

//点击刷新按钮时, 从'http://api.money.126.net/data/feed/0000001,1399001'
//请求JSON字符串,并把请求结果传给自定义函数showPrice()
function getPrice(){  
    //在head节点下添加一个<script>块  
    var price=document.createElement('script');
    var head=document.getElementsByTagName("head")[0];
	/*支持jsonp的服务器端应该是类似这种实现响应：
	  String callback = request.getParameter("callback");//获取用户传来的callback参数
	  result = callback + "(" + data + ")";
	*/
	//url中加上callback=showPrice,则返回的结果是showPrice(data),data表示请求到的数据
	//在<script>块中src属性指定的串将被执行
    price.src= 'http://api.money.126.net/data/feed/0000001,1399001?callback=showPrice';
	//将包含src的<script>块添加到<head>的字块末尾，添加后将自动执行src对应的代码
	//由于返回的是showPrice(data)，那么showPrice(data)也会被执行
    head.appendChild(price);
}
</script>
</head>
<body>
<p id="test-jsonp">placehoder</p>
<button type='button' onclick="getPrice()">刷新</button>
</body>
</html>