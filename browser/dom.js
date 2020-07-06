/*
HTML文档被浏览器解析后是一棵DOM树，要改变HTML的结构，就需要通过JavaScript来操作DOM
始终记住DOM是一个树形结构。操作一个DOM节点实际上就是这么几个操作：
更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
遍历：遍历该DOM节点下的子节点，以便进行进一步操作；
添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；
删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点
*/
//document对象就是整个DOM树的根节点
<!-- HTML结构 -->
<div id="test-div">
<div class="c-red">
    <p id="test-p">JavaScript</p>
    <p>Java</p>
  </div>
  <div class="c-red c-green">
    <p>Python</p>
    <p>Ruby</p>
    <p>Swift</p>
  </div>
  <div class="c-green">
    <p>Scheme</p>
    <p>Haskell</p>
  </div>
</div>
//返回id为test-div的节点
var test = document.getElementById('test-div');
//test-p节点
var js = document.getElementById('test-p');
//选择JavaScript
var s = js.innerText;
//选择Python,Ruby,Swift
//定位到所在的class的节点
//注意getElementsByClassName('c-red')包含c-red的class都将被返回
//当前要选择的是在第二个
var c = document.getElementsByClassName('c-red')[1];
//获取该加点下的Python,Ruby,Swift （也就是该节点下的p标签）
var arr = c.getElementByTagName('p');
//打印值
for(var i=0; i<arr.length; i++){
	console.log(arr[i].innerText);//依次打印Python,Ruby,Swift
}

/*****************************************************************/

//修改dom节点的文本
//修改dom节点有两种方法:
//1.修改innerHTML属性，这个方式非常强大，不但可以修改一个DOM节点的文本内容，
//  还可以直接通过HTML片段修改DOM节点内部的子树
//2.修改innerText或textContent属性，这样可以自动对字符串进行HTML编码，保证无法设置任何HTML标签

//1修改innerHTML属性
<dl id="drink-menu" style="border:solid 1px #ccc;padding:6px;">
    <dt>摩卡</dt>
    <dd>热摩卡咖啡</dd>
    <dt>酸奶</dt>
    <dd>北京老酸奶</dd>
    <dt>果汁</dt>
    <dd>鲜榨苹果汁</dd>
</dl>

var dom = document.getElementById('drink-menu');
//获取的innerHTML样式
console.log(dom.innerHTML);
/*
    <dt>摩卡</dt>
    <dd>热摩卡咖啡</dd>
    <dt>酸奶</dt>
    <dd>北京老酸奶</dd>
    <dt>果汁</dt>
    <dd>鲜榨苹果汁</dd>
*/
//修改节点的内部html结构，也就是<dl>..</dl>之间的内容
dom.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
console.log(dom.innerHTML);
//ABC <span style="color:red">RED</span> XYZ

//2修改innerText
<dl id="drink-menu" style="border:solid 1px #ccc;padding:6px;">
    <dt>摩卡</dt>
    <dd>热摩卡咖啡</dd>
    <dt>酸奶</dt>
    <dd>北京老酸奶</dd>
    <dt>果汁</dt>
    <dd>鲜榨苹果汁</dd>
</dl>
//获取的innerText样式
var dom = document.getElementById('drink-menu');
console.log(dom.innerText);
/*
摩卡
热摩卡咖啡
酸奶
北京老酸奶
果汁
鲜榨苹果汁
*/
//修改节点内部的文本
for(var i=0; i<dom.children.length; i++)
{
	dom.children[i].innerText = `文本${i}`;
	console.log(dom.children[i].innerText);
}
/*
文本0
文本1
文本2
文本3
文本4
文本5
*/

//修改css
//DOM节点的style属性对应所有的CSS，可以直接获取或设置。
//因为CSS允许font-size这样的名称，但它并非JavaScript有效的属性名，
//所以需要在JavaScript中改写为驼峰式命名fontSize
<!-- HTML结构 -->
<div id="test-div">
  <p id="test-js">javascript</p>
  <p>Java</p>
</div>

//修改id = test-js的节点
var dom = document.getElementById('test-js');
//将javascript 修改为JavaScript
dom.innerText = 'JavaScript';
//修改该节点的CSS为: color: #ff0000, font-weight: bold
dom.style.color = '#ff0000';
dom.style.fontWeight = 'bold';
//查看修改后的<div>之间的内容
console.log(document.getElementById('test-div'));
/*
  <p id="test-js" style="color: rgb(255, 0, 0); font-weight: bold;">JavaScript</p>
  <p>Java</p>
*/


/*************************************************************************/

//插入dom
//2种方法插入新节点

//1.appendChild，把一个子节点添加到父节点的最后一个子节点
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
//把<p id="js">JavaScript</p>添加到<div id="list">的最后一项
//获取js节点
var js = document.getElementById("js");
//获取list节点
var list = document.getElementById("list");
//将js节点插入到list子节点的最后
list.appendChild(js);
/*
插入的js节点已经存在于当前文档树，因此这个节点首先会从原先的位置删除，再插入到新的位置

现在，HTML结构变成了这样：
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="js">JavaScript</p>
</div>
*/

//创建新的节点插入到指定的位置

<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
</div>
//list的子节点最后添加js节点
//创建新节点
var js = document.createElement('p');//p为标签名
//节点id
js.id = 'js';
//节点内容
js.innerText = 'JavaScript';
//找到list节点
var list = getElementById('list');
//将新的节点添加到list子节点的最后
list.appendChild(js);
/*
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
	<p id="js">JavaScript</p>
</div>
*/

//动态地给文档添加了新的CSS定义
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
</div>

//创建新的节点style
var d = document.createElement('style');
//为新的节点添加属性type，属性值为text/css
d.setAttribute('type', 'text/css');
//节点的html内容（将list节点下的所有p标签的内容显示为红色）
d.innerHTML = 'p { color: red }';
//将css属性节点插入list节点的子节点最后
document.getElementsByTagId('list').appendChild(d);
/*
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
	<style type="text/css">p { color: red }</style>
</div>
*/


//2.insertBefore插入节点
//insertBefore将节点插入到指定位置
//parentElement.insertBefore(newElement, referenceElement);
//newElement会插入到referenceElement节点之前
//使用insertBefore重点是要拿到一个“参考子节点”的引用
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
</div>
//创建一个新节点JavaScript插入到list节点下的python节点之前
var js = document.createElement('p');
js.id = 'JavaScript';
js.innetText = 'JavaScript';
//找到list节点
list = document.getElementById('list');
//找到Python节点
var ref = document.getElementById('python');
//将js节点插入到python节点之前
list.insertBefore(js, ref);
/*
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
	<p id "JavaScript">JavaScript</p>
</div>
*/


/*******************************************************************/

//删除dom
//要删除一个节点，首先要获得该节点本身以及它的父节点，
//然后，调用父节点的removeChild把该节点删掉

// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除并返回被删除的节点
var removed = parent.removeChild(self);
removed === self; // true 

/*
注意到删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。
当遍历一个父节点的子节点并进行删除操作时，要注意，children属性是一个只读属性，
并且它在子节点变化时会实时更新。

例如，对于如下HTML结构：
<div id="parent">
    <p>First</p>
    <p>Second</p>
</div>
当用如下代码删除子节点时：

var parent = document.getElementById('parent');
parent.removeChild(parent.children[0]);
parent.removeChild(parent.children[1]); // <-- 浏览器报错
浏览器报错：parent.children[1]不是一个有效的节点。
原因就在于，当<p>First</p>节点被删除后，parent.children的节点数量已经从2变为了1，
索引[1]已经不存在了。

因此，删除多个节点时，要注意children属性时刻都在变化
*/ 





















