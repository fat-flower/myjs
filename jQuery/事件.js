/*
JavaScript在浏览器中以单线程模式运行，页面加载后，一旦页面上所有的JavaScript代码
被执行完后，就只能依赖触发事件来执行JavaScript代码
浏览器在接收到用户的鼠标或键盘输入后，会自动在对应的DOM节点上触发相应的事件。
如果该节点已经绑定了对应的JavaScript处理函数，该函数就会自动调用

鼠标事件
click: 鼠标单击时触发；
dblclick：鼠标双击时触发；
mouseenter：鼠标进入时触发；
mouseleave：鼠标移出时触发；
mousemove：鼠标在DOM内部移动时触发；
hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。

键盘事件
键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。
keydown：键盘按下时触发；
keyup：键盘松开时触发；
keypress：按一次键后触发。

其他事件
focus：当DOM获得焦点时触发；
blur：当DOM失去焦点时触发；
change：当<input>、<select>或<textarea>的内容改变时触发；
submit：当<form>提交时触发；
ready：当页面被载入并且DOM树完成初始化后触发
*/

//click绑定响应鼠标点击事件
//<a>标签表示超链接，href 属性用于指定超链接目标的 URL
<a id="test-link" href="#0">点我试试</a>
//获取超链接的jQuery对象
var a = $('#test-link');
//为超链接绑定响应鼠标点击的处理函数
a.click(function(){alert("hello");});


//ready事件
//当页面被载入并且DOM树完成初始化后触发
//ready仅作用于document对象。
//ready事件在DOM完成初始化后触发，且只触发一次，所以非常适合用来写其他的初始化代码

//假设想给一个<form>表单绑定submit事件，下面的代码没有预期的效果:
<html>
<head>
    <script>
        // 代码有误:因为此时form节点还没有加载
        $('#testForm).on('submit', function () {
            alert('submit!');
        });
    </script>
</head>
<body>
    <form id="testForm">
        ...
    </form>
</body>
//因为JavaScript在此执行的时候，<form>尚未载入浏览器，所以$('#testForm)返回[]，
//并没有绑定事件到任何DOM上
//所以初始化代码必须放到document对象的ready事件中，保证DOM已完成初始化了再执行
<html>
<head>
    <script>
		//将要初始化的代码放到ready事件中，到dom都加载完成后才会执行
        $(document).ready(function () {
			$('#testForm).submit(function () {
				alert('submit!');
			});
		});
		/*
		可以再简化为（最常见）：
		$(function () {
			$('#testForm).submit(function () {
				alert('submit!');
			});
		});
		*/
    </script>
</head>
<body>
    <form id="testForm">
        ...
    </form>
</body>
/*
$(function () {
    // init...
});
上面的这种写法最为常见
完全可以反复绑定事件处理函数，它们会依次执行：
*/
$(function () {
    console.log('init A...');
});
$(function () {
    console.log('init B...');
});
$(function () {
    console.log('init C...');
});

/*******************************************************************/

//事件参数
//有些事件，如mousemove和keypress，需要获取鼠标位置和按键的值，否则监听这些事件
//就没什么意义。所有事件都会传入Event对象作为参数，可以从Event对象上获取到更多的信息
/*
event.type：获取事件的类型，触发元素的事件类型
event.pageX 和 event.pageY：获取鼠标当前相对于页面的坐标
event.target：获取触发事件的dom对象
event.which：获取在鼠标单击事件中鼠标的左、中、右键（左键1，中间键2，右键3）以及在键盘事件中键盘的键码值
event.currentTarget : 获取冒泡前的当前触发事件的DOM对象, 等同于this
*/
$(function () {
    $('#testMouseMoveDiv').mousemove(function (e) {
        $('#testMouseMoveSpan').text('pageX=' + e.pageX + ',pageY=' + e.pageY);
    });
});

/********************************************************************/

//取消绑定
//一个已被绑定的事件可以解除绑定，通过off('click', function)实现：
<a id="test-link" href="#0">点我试试</a>
function hello() {
    alert('hello!');
}
var a = $('#test-link');
a.click(hello); // 绑定鼠标点击事件

// 10秒钟后解除绑定:
setTimeout(function () {
    a.off('click', hello);
}, 10000);

/************************************************************************/

//事件触发条件
//事件的触发总是由用户操作引发的，例如，监控文本框的内容改动：
var input = $('#test-input');
input.change(function () {
    console.log('changed...');
});
//当用户在文本框中输入时，就会触发change事件。
//但是，如果用JavaScript代码去改动文本框的值，将不会触发change事件：
var input = $('#test-input');
input.val('change it!'); // 无法触发change事件
//这使，可以直接调用无参数的change()方法来触发change事件：
var input = $('#test-input');
input.val('change it!');
input.change(); // 触发change事件

/****************************************************************/
//练习
//对如下的Form表单：

<!-- HTML结构 -->
<form id="test-form" action="test">
    <legend>请选择想要学习的编程语言：</legend>
    <fieldset>
        <p><label class="selectAll"><input type="checkbox"> <span class="selectAll">全选</span><span class="deselectAll">全不选</span></label> <a href="#0" class="invertSelect">反选</a></p>
        <p><label><input type="checkbox" name="lang" value="javascript"> JavaScript</label></p>
        <p><label><input type="checkbox" name="lang" value="python"> Python</label></p>
        <p><label><input type="checkbox" name="lang" value="ruby"> Ruby</label></p>
        <p><label><input type="checkbox" name="lang" value="haskell"> Haskell</label></p>
        <p><label><input type="checkbox" name="lang" value="scheme"> Scheme</label></p>
		<p><button type="submit">Submit</button></p>
    </fieldset>
</form>
/*
绑定合适的事件处理函数，实现以下逻辑：
当用户勾上“全选”时，自动选中所有语言，并把“全选”变成“全不选”；
当用户去掉“全不选”时，自动不选中所有语言；
当用户点击“反选”时，自动把所有语言状态反转（选中的变为未选，未选的变为选中）；
当用户把所有语言都手动勾上时，“全选”被自动勾上，并变为“全不选”；
当用户手动去掉选中至少一种语言时，“全不选”自动被去掉选中，并变为“全选”。
*/
'use strict';

var
    form = $('#test-form'),
    langs = form.find('[name=lang]'),
    selectAll = form.find('label.selectAll :checkbox'),
    selectAllLabel = form.find('label.selectAll span.selectAll'),
    deselectAllLabel = form.find('label.selectAll span.deselectAll'),
    invertSelect = form.find('a.invertSelect');

// 重置初始化状态:
form.find('*').show().off();
form.find(':checkbox').prop('checked', false).off();
deselectAllLabel.hide();
// 拦截form提交事件:
form.off().submit(function (e) {
    e.preventDefault();
    alert(form.serialize());
});

function setAllSelect(){
    //点击全选
    if(selectAll.prop('checked')){
        langs.prop('checked', true);
        selectAllLabel.hide();
        deselectAllLabel.show();
    }
    //去掉全不选,所有langs节点的checked设置为false
    else{
        langs.prop('checked', false);
        selectAllLabel.show();
        deselectAllLabel.hide();
    }
};
//反选
function invert(){     

      langs.each(function (i){
        if($(this).prop('checked')){
            $(this).prop('checked', false);
        }
        else{
            $(this).prop('checked', true);
        }
    });
    //当所有语言都被勾上时，全选被自动勾上，并变为全不选
    langsAll();
    //当所有语言都没有被勾上时，不全选变为全选(没有选择语言，连续两次反选的情况)
    cancelSelect();
}
//当所有语言都被勾上时，全选被自动勾上，并变为全不选
function langsAll(){
    //get()获取langs对象中的所有dom元素
	//every 每个元素都返回true时，返回true
    if(langs.get().every(d => d.checked)){
         selectAll.prop('checked', true);
         deselectAllLabel.show();
         selectAllLabel.hide();
    }
};
//手动去掉选中至少一种语言时，“全不选”自动被去掉选中，并变为“全选”
function cancelSelect(){
    if(!langs.get().every(d => d.checked)){
        selectAll.prop('checked', false);
        deselectAllLabel.hide();
        selectAllLabel.show();
    }
};
//绑定事件的处理函数
selectAll.change(setAllSelect);
langs.change(langsAll);
invertSelect.click(invert);
langs.change(cancelSelect);
