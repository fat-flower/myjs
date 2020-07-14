//underscore为Array提供了许多工具类方法，可以更方便快捷地操作Array

//first/last 
//分别取第一个和最后一个元素
var arr = [1,2,3,4];
var f = _.first(arr);//1
var l = _.last(arr);//4

//flatten
//接收一个数组，无论这个数组里面嵌套了多少个数组，flatten最后都把它变成一个一维数组
_.flatten([1, [2], [3, [[4], [5]]]]); // [1, 2, 3, 4, 5]


//zip / unzip
//zip()把两个或多个数组的所有元素按索引对齐，然后按索引合并成新数组
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.zip(names, scores);
// [['Adam', 85], ['Lisa', 92], ['Bart', 59]]
//unzip()则是反过来：
'use strict';
var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
_.unzip(namesAndScores);
// [['Adam', 'Lisa', 'Bart'], [85, 92, 59]]

//object
//与zip类似，不过是将数组元素按索引对应组合成对象
'use strict';
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
_.object(names, scores);
// {Adam: 85, Lisa: 92, Bart: 59}

//range
//生成一个序列
// 从0开始小于10:
_.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 从1开始小于11：
_.range(1, 11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 从0开始小于30，步长5:
_.range(0, 30, 5); // [0, 5, 10, 15, 20, 25]
// 从0开始大于-10，步长-1:
_.range(0, -10, -1); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//uniq 去重
var arr = [1,2,3,1,2,3];
_.uniq(arr);//[1,2,3]
//如果是有序的，传入true可加快速度
var arr = [1,1,2,3,3,4,4,4];
_.uniq(arr, true);//[1, 2, 3, 4]
//如果想根据转换计算唯一的项，传递一个函数
var arr = ['Apple', 'orange', 'banana', 'ORANGE', 'apple', 'PEAR'];
//不区分大小写去重
var result = _.uniq(arr, x=>x.toLowerCase());
result;
//["Apple", "orange", "banana", "PEAR"]



