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

