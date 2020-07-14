//修改Text和HTML

//jQuery对象的text()和html()方法分别获取节点的文本和原始HTML文本
//text()和html()如果带参数就是设置文本

<!-- HTML结构 -->
<ul id="test-ul">
    <li class="js">JavaScript</li>
    <li name="book">Java &amp; JavaScript</li>
</ul>
//获取li[name=book]节点的文本和html
var li_text = $('#test-ul li[name=book]').text();//"Java & JavaScript"
var li_html = $('#test-ul li[name=book]').html();//Java &amp; JavaScript
//设置文本
$('#test-ul li[name=book]').html('<span style="color: red">Java & JavaScript</span>')
//再重新获取文本
li_html = $('#test-ul li[name=book]').html();//Java & JavaScript(红色字体)

//同时修改两个节点的文本内容为JS
$('#test-ul li').text('JS');

// 如果不存在id为not-exist的节点：
$('#not-exist').text('Hello'); // 代码不报错，没有节点被设置为'Hello'


//修改CSS
//jQuery对象有“批量操作”的特点，这用于修改CSS很方便考
//css()方法将作用于DOM节点的style属性，具有最高优先级
<!-- HTML结构 -->
<ul id="test-css">
    <li class="lang dy"><span>JavaScript</span></li>
    <li class="lang"><span>Java</span></li>
    <li class="lang dy"><span>Python</span></li>
    <li class="lang"><span>Swift</span></li>
    <li class="lang dy"><span>Scheme</span></li>
</ul>
//高亮显示动态语言，调用jQuery对象的css('name', 'value')方法

//修改class包含dy的节点的文本的背景颜色为#ffd351， 字体颜色为red
$('#test-css li.dy').css('background-color', '#ffd351').css('color', 'red');

var div = $('#test-div');
div.css('color'); // '#000033', 获取CSS属性（获取字体颜色）
div.css('color', '#336699'); // 设置CSS属性 (设置字体颜色)
div.css('color', ''); // 清除CSS属性 (清除颜色属性)


/**************************************************************************/

//修改class属性，可以用jQuery提供的下列方法：
<!-- HTML结构 -->
<ul id="test-css">
    <li class="lang dy"><span>JavaScript</span></li>
    <li class="lang"><span>Java</span></li>
    <li class="lang dy"><span>Python</span></li>
    <li class="lang"><span>Swift</span></li>
    <li class="lang dy"><span>Scheme</span></li>
</ul>
var div = $('#test-div');
div.hasClass('highlight'); // false， class是否包含highlight
div.addClass('highlight'); // 添加highlight这个class
div.removeClass('highlight'); // 删除highlight这个class

/**************************************************************************/

//显示和隐藏DOM
var a = $('a[target=_blank]');
a.hide(); // 隐藏
a.show(); // 显示
//隐藏DOM节点并未改变DOM树的结构，它只影响DOM节点的显示。这和删除DOM节点是不同的

/**************************************************************************/

//获取DOM信息
//利用jQuery对象的若干方法，直接可以获取DOM的高宽等信息

// 浏览器可视窗口大小:
$(window).width(); // 800
$(window).height(); // 600

// HTML文档大小:
$(document).width(); // 800
$(document).height(); // 3500

// 某个div的大小:
var div = $('#test-div');
div.width(); // 600
div.height(); // 300
div.width(400); // 设置CSS属性 width: 400px，是否生效要看CSS是否有效
div.height('200px'); // 设置CSS属性 height: 200px，是否生效要看CSS是否有效

//attr()和removeAttr()方法用于操作DOM节点的属性
// <div id="test-div" name="Test" start="1">...</div>
var div = $('#test-div');
div.attr('data'); // undefined, 属性不存在
div.attr('name'); // 'Test'
div.attr('name', 'Hello'); // div的name属性变为'Hello'
div.removeAttr('name'); // 删除name属性
div.attr('name'); // undefined

//HTML5规定有一种属性在DOM节点中可以没有值，只有出现与不出现两种，例如：
<input id="test-radio" type="radio" name="test" checked value="1">
//等价于：
<input id="test-radio" type="radio" name="test" checked="checked" value="1">
//attr()和prop()对于属性checked处理有所不同：

var radio = $('#test-radio');
radio.attr('checked'); // 'checked'
radio.prop('checked'); // true
//prop()返回值更合理一些。不过，用is()方法判断更好：

var radio = $('#test-radio');
radio.is(':checked'); // true
//类似的属性还有selected，处理时最好用is(':selected')

/******************************************************************/

//表单操作

//对于表单元素，jQuery对象统一提供val()方法获取和设置对应的value属性
/*
    <input id="test-input" name="email" value="">
    <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
        <option value="SH">Shanghai</option>
        <option value="SZ">Shenzhen</option>
    </select>
    <textarea id="test-textarea">Hello</textarea>
*/
var
    input = $('#test-input'),
    select = $('#test-select'),
    textarea = $('#test-textarea');

input.val(); // 'test'
input.val('abc@example.com'); // 文本框的内容已变为abc@example.com

select.val(); // 'BJ'
select.val('SH'); // 选择框已变为Shanghai

textarea.val(); // 'Hello'
textarea.val('Hi'); // 文本区域已更新为'Hi'

/***********************************************************************/

//添加dom
//要添加新的DOM节点，除了通过jQuery的html()这种暴力方法外，还可以用append()方法
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>

var ul = $('#test-div>ul');
//调用append()传入HTML片段
ul.append('<li><span>Haskell</span></li>');

//除了接受字符串，append()还可以传入原始的DOM对象，jQuery对象和函数对象
// 创建DOM对象:
var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';
// 添加DOM对象:
ul.append(ps);
// 添加jQuery对象:
ul.append($('#scheme'));
// 添加函数对象:
ul.append(function (index, html) {
    return '<li><span>Language - ' + index + '</span></li>';
});
//传入函数时，要求返回一个字符串、DOM对象或者jQuery对象。
//因为jQuery的append()可能作用于一组DOM节点，只有传入函数才能针对每个DOM生成不同的子节点
//append()把DOM添加到最后，prepend()则把DOM添加到最前
//注意，如果要添加的DOM节点已经存在于HTML文档中，它会首先从文档移除，然后再添加，
//也就是说，用append()，你可以移动一个DOM节点

//如果要把新节点插入到指定位置，例如，JavaScript和Python之间，
//那么，可以先定位到JavaScript，然后用after()方法
//同级节点可以用after()或者before()方法
//after()添加到节点后，before()添加到节点前
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>
var js = $('#test-div>ul>li:first-child');
js.after('<li><span>Lua</span></li>');

//删除节点
//要删除DOM节点，拿到jQuery对象后直接调用remove()方法
//如果jQuery对象包含若干DOM节点，实际上可以一次删除多个DOM节点
var li = $('#test-div>ul>li');
li.remove(); // 所有<li>全被删除

//练习
//除了列出的3种语言外，请再添加Pascal、Lua和Ruby，然后按字母顺序排序节点：

<!-- HTML结构 -->
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>

var ul = $('#test-div>ul');
ul.append('<li><span>Pascal</span></li>');
ul.append('<li><span>Lua</span></li>');
ul.append('<li><span>Ruby</span></li>');
var li = $('#test-div>ul>li');
var arr = li.map(function(){return this.innerText;}).get();
console.log(arr);
arr.sort();
console.log(arr);
//console.log(li.length);
//遍历所有li对象，function会作用于每个对象，index从0开始，每次递增
li.each(function (index){
    $(this).text(arr[index]);
});
