
/*
给jQuery对象绑定一个新方法是通过扩展$.fn对象实现的
编写一个jQuery插件的原则：
1.给$.fn绑定函数，实现插件的代码逻辑；
2.插件函数最后要return this;以支持链式调用；
3.插件函数要有默认值，绑定在$.fn.<pluginName>.defaults上；
4.用户在调用时可传入设定值以便覆盖默认值

jQuery提供的辅助方法$.extend(target, obj1, obj2, ...)，
把多个object对象的属性合并到第一个target对象中，
遇到同名属性，总是使用靠后的对象的值，也就是越往后优先级越高
*/

//$.extend()
var opts = $.extend({}, {aa:'123',bb:'456'}, {cc:'123'}, {bb:'111'});
opts;
//{aa: "123", bb: "111", cc: "123"}


//编写一个高亮显示的jQuery扩展highlight():
$.fn.highlight = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.highlight.defaults, options);
	//this在调用时被绑定为jQuery对象
	//设置样式属性
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    return this;
}
//设定默认值，把默认值对象放到定义的扩展函数对象本身
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
}
//使用时，只需一次性设定默认值，然后调用highlight函数
$.fn.highlight.defaults.color = '#fff';
$.fn.highlight.defaults.backgroundColor = '#000';

//测试扩展的highlight()方法
// <span>用来组合文档中的行内元素
//当<span>与 CSS 一同使用时，<span>元素可用于为部分文本(<span>之间的)设置样式属性
<!-- HTML结构 -->
<div id="test-highlight">
    <p>如何编写<span>jQuery</span> <span>Plugin</span></p>
    <p>编写<span>jQuery</span> <span>Plugin</span>，要设置<span>默认值</span>，并允许用户修改<span>默认值</span>，或者运行时传入<span>其他值</span>。</p>
</div>
//设置默认值
$.fn.highlight.defaults.color = '#659f13';
$.fn.highlight.defaults.backgroundColor = '#f2fae3';
//调用扩展的jQuery对象的highlight方法(不传参数，使用默认值)
$('#test-highlight p:first-child span').highlight();
//调用扩展的jQuery对象的highlight方法(使用当前指定的属性值，没有指定的用默认值)
$('#test-highlight p:last-child span').highlight({
    color: '#dd1144'
});

/************************************************************************/

//针对特定元素的扩展
//Query对象的有些方法只能作用在特定DOM元素上，比如submit()方法只能针对form
//例：给所有指向外链的超链接加上跳转提示
$.fn.external = function () {
    // return返回的each()返回结果，支持链式调用:
    return this.filter('a').each(function () {
        // 注意: each()内部的回调函数的this绑定为DOM本身!
        var a = $(this);
		//获取herf属性的值
        var url = a.attr('href');
		//indexOf()方法返回某个指定的字符串值在字符串中首次出现的位置
		//获取的url需要包含http://或https://
        if (url && (url.indexOf('http://')===0 || url.indexOf('https://')===0)) {
            //链式调用
			//a.attr('href', '#0')设置连接指向未知的('#0'),相当于去除点击超链接时本身的跳转动作
			//removeAttr('target')移除掉对象的target属性
			//append(' <i class="uk-icon-external-link"></i>')在当前对象后添加节点
			//绑定click鼠标点击链接时触发的函数
			a.attr('href', '#0').removeAttr('target').append(' <i class="uk-icon-external-link"></i>').click(function () {
                if(confirm('你确定要前往' + url + '？')) {
                    //使用open重新开启url对应的页面，这样代替了超链接的跳转
					window.open(url);
                }
            });
        }
    });
}

<!-- HTML结构 -->
<div id="test-external">
    <p>如何学习<a href="http://jquery.com">jQuery</a>？</p>
    <p>首先，你要学习<a href="/wiki/1022910821149312">JavaScript</a>，并了解基本的<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>。</p>
</div>

$('#test-external a').external();


