
/*
在HTML表单中，可以上传文件的唯一控件就是<input type="file">。
注意：当一个表单包含<input type="file">时，表单的enctype必须指定为
multipart/form-data，method必须指定为post，浏览器才能正确编码并以multipart/form-data
格式发送表单的数据。

出于安全考虑，浏览器只允许用户点击<input type="file">来选择本地文件，
用JavaScript对<input type="file">的value赋值是没有任何效果的。
当用户选择了上传某个文件后，JavaScript也无法获得该文件的真实路径
*/

//通常，上传的文件都由后台服务器处理，JavaScript可以在提交表单时对文件扩展名做检查，
//以便防止用户上传无效格式的文件：
//选择本地文件上传的框
//<input type="file" id="test-file-upload" name="test">
var f = document.getElementById('test-file-upload');
//JavaScript无法获得该文件的真实路径
var filename = f.value; 
// 'C:\fakepath\test.png' 其中获取的fakepath不是文件的真实的路径
if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
    alert('Can only upload image file.');
    return false;
}

/*****************************************************************/

//HTML5的File API提供了File和FileReader两个主要对象，可以获得文件信息并读取文件

//选择本地文件上传的框
/*
<form method="post" action="http://localhost/test" enctype="multipart/form-data">
    <p>图片预览：</p>
    <p></p><div id="test-image-preview" style="border: 1px solid #ccc; width: 100%; height: 200px; background-size: contain; background-repeat: no-repeat; background-position: center center;"></div><p></p>
    <p>
    	<input type="file" id="test-image-file" name="test">
    </p>
    <p id="test-file-info"></p>
</form>
*/
//上传文件的节点
var fileInput = document.getElementById("test-image-file");
//用来展示上传文件信息的节点(初始内容是空的，当上传文件后，往该节点添加文件信息)
var info = document.getElementById('test-file-info');
//用来显示上传图片内容的块节点
var preview = document.getElementById('test-image-preview');

// 监听change事件:
fileInput.addEventListener('change', function () {
    //清除先前的背景图片
    preview.style.backgroundImage = '';
    //检查文件是否选择:
    if (!fileInput.value) {
        info.innerHTML = '没有选择文件';
        return;
    }
	//fileInput.files表示上传的所有文件
    //获取File引用(即上传的第一个文件):
    var file = fileInput.files[0];
    //获取上传的文件的信息，将信息添加到test-file-info节点
    info.innerHTML = '文件: ' + file.name + '<br>' +
                     '大小: ' + file.size + '<br>' +
                     '修改: ' + file.lastModifiedDate;
	//判断上传图片的类型是否是图片
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('不是有效的图片文件!');
        return;
    }
    //创建FfileReader对象
    var reader = new FileReader();
	
	//设置回调函数，当文件读取完成后会调用此函数
    reader.onload = function(e) {
        var data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...' 
		//将读取的文件内容(base64编码)设置为test-image-preview节点的背景
        preview.style.backgroundImage = 'url(' + data + ')';
    };
    //以DataURL的形式读取文件
    reader.readAsDataURL(file);
});


