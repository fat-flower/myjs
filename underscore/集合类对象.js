//underscore是一个第三方开源库
//underscore提供了一套完善的函数式编程接口，可以更方便地在JavaScript中实现函数式编程

//jQuery在加载时，会把自身绑定到唯一的全局变量$上
//underscore与其类似，会把自身绑定到唯一的全局变量_上


//underscore为集合类对象提供了一致的接口
//集合类是指Array和Object，暂不支持Map和Set
//map/filter
//和Array的map()与filter()类似，但是underscore的map()和filter()可以作用于Object。
//当作用于Object时，传入的函数为function (value, key)，第一个参数接收value，第二个参数接收key
'use strict';

var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};
//返回的是数组
var upper = _.map(obj, function (value, key) {
    return key+'='+value;
});
upper;
//["name=bob", "school=No.1 middle school", "address=xueyuan road"]

//_.mapObject最终返回的是对象(Object)
var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};
//返回的是分别对对象的key和value操作后的值
var upper = _.mapObject(obj, function (value, key) {
    return key = value+'_1';
});
upper;
//{{name: "bob_1", school: "No.1 middle school_1", address: "xueyuan road_1"}


//every/some
/*
当集合的所有元素都满足条件时，_.every()函数返回true
当集合的至少一个元素满足条件时，_.some()函数返回true
*/
'use strict';
// 所有元素都大于0？
_.every([1, 4, 7, -3, -9], (x) => x > 0); // false
// 至少一个元素大于0？
_.some([1, 4, 7, -3, -9], (x) => x > 0); // true

//当集合是Object时，可以同时获得value和key
'use strict';
var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};
//判断对象的key和value是否都为小写
var r1 = _.every(obj, function (value, key) {
    return key === key.toLowerCase() && value === value.toLowerCase();
});
//r1 = false 
//判断对象的key和value是否至少有一对是小写
var r2 = _.some(obj, function (value, key) {
    return key === key.toLowerCase() && value === value.toLowerCase();
});
//r2 = true


//max / min
//返回集合中的最大值/最小值
'use strict';
var arr = [3, 5, 7, 9];
_.max(arr); // 9
_.min(arr); // 3

// 空集合会返回-Infinity和Infinity，所以要先判断集合不为空：
_.max([])
//-Infinity
_.min([])
//Infinity

//注意，如果集合是Object，max()和min()只作用于value，忽略掉key：
'use strict';
_.max({ a: 1, b: 2, c: 3 }); // 3


//groupBy
//groupBy()把集合的元素按照key归类，key由传入的函数返回
'use strict';

var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});
// 结果:
// {
//   A: [81, 91, 88, 99],
//   B: [75, 77, 66, 72],
//   C: [20, 40, 59]
// }


//shuffle / sample
//shuffle()用洗牌算法随机打乱一个集合：

'use strict';
// 注意每次结果都不一样：
_.shuffle([1, 2, 3, 4, 5, 6]); // [3, 5, 4, 6, 2, 1]

//sample()随机选择一个或多个元素：
'use strict';
// 注意每次结果都不一样：
// 随机选1个：
_.sample([1, 2, 3, 4, 5, 6]); // 2
// 随机选3个：
_.sample([1, 2, 3, 4, 5, 6], 3); // [6, 1, 4]
















