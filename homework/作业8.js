// 2016/10/01
//
// ============
// 作业 8
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}


// 定义一个增强的 ensureEqual
var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}


// 作业 1
// 实现函数
// 多看提示多讨论
/*
delimiter 是 string
array 是包含 string 的 array

把 array 中的元素用 delimiter 连接成一个字符串并返回
具体请看测试
*/
// var join = function(delimiter, array) {
//     var len = array.length
//     var arr = ''
//     for (var i = 0; i < len-1; i++) {
//         arr += array[i]
//         arr += delimiter
//     }
//     var result = arr + array[len - 1]
//     return result
// }
// 答案
var join = function(delimiter, array) {

    var s = array[0]
    for (var i = 1; i < array.length; i++) {
        var a = array[i]
        s += (delimiter + a)
    }
    return s
}
var test_join = function() {
    ensureEqual(join('#', ['hello', 'gua']),'hello#gua', 'join 测试 1')
    ensureEqual(join(' ', ['hello', 'gua']),'hello gua', 'join 测试 2')
    ensureEqual(join('\n', ['multi', 'line', 'string']),'multi\nline\nstring', 'join 测试 3')
}
test_join()

// 作业 2
// 实现函数
/*
s 是 string
delimiter 是 string, 默认为空格 ' '

以 delimiter 为分隔符号, 返回一个 array
例如
split('1 2 3') 返回 ['1', '2', '3']
split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
注意, 测试 array 是否相等得自己写一个函数用循环来跑
*/
// var startsWith = function(s1, s2) {
//     /*
//     s1 是一个字符串
//     s2 是一个字符串
//     检查 s1 是否以 s2 开头, 返回 true 或者 false
//     */
//     var len = s1.length
//     var result = false
//     for (var i = 0; i < len; i++) {
//         if (s1.slice(0,i) === s2||s1 == s2){
//             result = true
//             // log('i---->', i)
//             break
//         }
//     }
//     return result
// }
//
// var findAllString = function(s1, s2) {
//     /*
//     s1 是一个字符串
//     s2 是一个字符串, 长度未知, 不一定为 1
//     返回参数 s2 在 s1 中出现的下标组成的 array
//     如果 s2 没有在 s1 中出现, 返回 []
//     */
//     var array = []
//     var len = s1.length
//     for (var i = 0; i < len; i++) {
//         var str = s1.slice(i)
//         if (startsWith(str, s2)) {
//             //log('i---->', i)
//             //log(str)
//             array.push(i)
//         }
//     }
//     return array
// }
//
// var split = function(s, delimiter=' ') {
//     var array1 = findAllString(s,delimiter)
//     var len = array1.length
//     //log('array1---->', array1)
//     var result = []
//     result.push(s.slice(0,array1[0]))
//     for (var i = 0; i < len; i++) {
//         var start = array1[i] + 1
//         var end = array1[i + 1]
//         // log('start---->', start)
//         // log('end---->', end)
//         result.push(s.slice(start, end))
//     }
//     return result
// }

var split = function(s, delimiter=' ') {
    var l = []
    // space 是分隔符的长度, 因为分隔符不一定长度为 1
    var space = delimiter.length
    // start 用来存储每次的开始下标
    var start = 0
    for(var i = 0; i < s.length; i++) {
        // 检查分隔符
        if(s.slice(i, i+space) === delimiter) {
            // 如果检查到了, 就存储一个数据
            l.push(s.slice(start, i))
            // 设置新的开始下标
            start = i + space
        }
    }
    // 把最后一个元素添加进去
    l.push(s.slice(start))
    return l
}

var split_test = function() {
    ensure(equal(split('a=b&c=d', '&'), ['a=b', 'c=d']), '测试1失败')
    ensure(equal(split('1 2 3'), ['1', '2', '3']), '测试2失败')
}
split_test()
// 作业 3
// 实现函数
/*
s old newString 都是 string
返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
*/
var replaceAll = function(s, old, newString) {
    var array = split(s, old)
    return join(newString, array)
}
var replaceAll_test = function() {
    ensure(equal(replaceAll('a=b&c=d', '&','[]'), "a=b[]c=d"), '测试1失败')
    ensure(equal(replaceAll('1 2 3 ',' ','er'), '1er2er3er'), '测试2失败')
}
replaceAll_test()

// 作业 4
// 实现函数
/*
n 是 int
返回这样规律的字符串, 特殊情况不考虑
n       返回值
1       '1'
2       '121'
3       '12321'
*/

var str1 = function(n) {
    var str = ''
    for (var i = 1; i <= n; i++) {
        str += i
    }
    for (var i = n-1; i > 0; i--) {
        str += i
    }
    return str
}

var str1_test = function() {
    ensure(equal(str1(1),'1'),'测试1失败')
    ensure(equal(str1(2),'121'),'测试2失败')
    ensure(equal(str1(3),'12321'),'测试3失败')
}
str1_test()
// 作业 5
// 实现函数
/*
n 是 int
返回这样规律的字符串, 特殊情况不考虑
n       返回值
1       'A'
2       'ABA'
3       'ABCBA'
*/

var str2 = function(n) {
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var s = ''
    for (var i = 0; i < n; i++) {
        s += upper[i]
    }
    for (var i = n - 2; i >= 0; i--) {
        s += upper[i]
    }
    return s
}

var str2_test = function() {
    ensure(equal(str2(1),'A'),'测试1失败')
    ensure(equal(str2(2),'ABA'),'测试1失败')
    ensure(equal(str2(5),'ABCDEDCBA'),'测试1失败')
    ensure(equal(str2(3),'ABCBA'),'测试1失败')
}
str2_test()
// 作业 6
// 实现加法口诀表
/*
返回这样格式的加法口诀表(没写全, 但是要返回完整的)
注意, 这只是我输入的内容
实际上你普通 log 出来是不会有回车的
[
    '1 + 1 = 2',
    '2 + 1 = 3  2 + 2 = 4',
    '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
]
*/
var hang = function(n) {
    var str = ''
    for (var i = 1; i <= n; i++) {
        var str = str + `${n} + ${i} = ${n+i}`+'  '
        if (i == n) {
            str = str.slice(0,str.length - 2)
        }
    }
    return str
}
var addTable = function() {
    var array = []
    for (var i = 1; i <= 9; i++) {
        array.push(hang(i))
    }
    return array
}

addTable()

// 作业 7
// 实现函数
/*
start end 都是 int

返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
[1, 2, 3, 4]
*/
var range1 = function(start, end) {
    var array =[]
    for (var i = start; i < end; i++) {
        array.push(i)
    }
    return array
}

var range1_test = function() {
    ensure(equal(range1(1,5),[1, 2, 3, 4]),'测试1失败')
}
range1_test()
// 作业 8
// 实现函数
/*
start end step 都是数字
step 是大于 0 的正整数

返回一个 array
假设 start=1, end=5, step=1 返回数据如下
[1, 2, 3, 4]
假设 start=0, end=6, step=2 返回数据如下
[0, 2, 4]
*/
var range2 = function(start, end, step=1) {
    var array = []
    for (var i = start; i < end; i += step ) {
        array.push(i)
    }
    return array
}
var range2_test = function() {
    ensure(equal(range2(1,5),[1, 2, 3, 4]),'测试1失败')
    ensure(equal(range2(0,6,2),[0, 2, 4]),'测试1失败')
}
range2_test()

// 作业 9
// 实现函数
/*
start end step 都是数字

和 range2 一样, 但是要求支持负数 step
使用 while 循环
返回一个 array
假设 start=1, end=5, step=1 返回数据如下
[1, 2, 3, 4]
假设 start=6, end=0, step=-1 返回数据如下
[6, 5, 4, 3, 2, 1]

*/
var range3 = function(start, end, step=1) {
    var array = []
    if (start <= end) {
        array = range2(start, end, step)
    }else {
        for (var i = start; i > end; i += step ) {
            array.push(i)
        }
    }
    return array
}

var range3_test = function() {
    ensure(equal(range3(1,5),[1, 2, 3, 4]),'测试1失败')
    ensure(equal(range3(6,0,-1),[6, 5, 4, 3, 2, 1]),'测试2失败')
    ensure(equal(range3(6,1,-2),[6, 4, 2]),'测试3失败')
}
range3_test()
// 作业 10
// 实现函数
/*
js 标准数学库有一个随机数函数
Math.random()
它返回 0 - 1 之间的小数

用它实现本函数, 返回 0 或 1
*/
var random01 = function() {
    var n = Math.random()
    n *= 10
    r = Math.floor(r)
    return r & 2
}


// 作业 11
// 实现函数
/*
返回一个只包含了 0 1 的随机 array, 长度为 n
假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
[0, 0, 1, 0, 1]
*/
var randomLine01 = function(n) {
    var array = []
    for (var i = 0; i < n; i++) {
        array.push(random01())
    }
    return array
}

var randomLine01_test = function(arr,n) {
    var result = true
    var len = arr.length
    log('len--->',len)
    if (len!=n) {
        result =false
    }
    log('result--->',result)
    for (var i = 0; i < n; i++) {
         if (arr[i]!=0&&arr[i]!=1) {
             result = false
         }
    }
    return result
}

randomLine01_test(randomLine01(5),5)
// 作业 12
/*
返回以下格式的数据
假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
注意, 这只是一个 array, 并不是它显示的样子
注意, 这是一个 array 不是 string
[
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
]
返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
*/
var randomSquare01 = function(n) {
    var array =[]
    for (var i = 0; i < n; i++) {
        array.push(randomLine01(n))
    }
    return array
}


// 作业 13
/*
返回一个只包含了 0 9 的随机 array, 长度为 n
假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
[0, 0, 9, 0, 9]
*/
var randomLine09 = function(n) {
    var array = randomLine01(n)
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            array[i] == 9
        }
    }
    return array
}
var randomLine09_test = function(arr,n) {
    var result = true
    var len = arr.length
    log('len--->',len)
    if (len!=n) {
        result =false
    }
    log('result--->',result)
    for (var i = 0; i < n; i++) {
         if (arr[i]!=0&&arr[i]!=9) {
             result = false
         }
    }
    return result
}

randomLine01_test(randomLine01(5),5)

// 作业 14
/*
array 是一个只包含了 0 9 的 array
返回一个标记过的 array
** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
复制数组用 array.slice(0) 实现

标记规则如下
对于下面这样的 array
[0, 0, 9, 0, 9]
标记后是这样
[0, 1, 9, 2, 9]

规则是, 0 会被设置为左右两边 9 的数量
*/
var markedLine = function(array) {
    var result = array.slice(0)
    var len = result.length
    // log('result---->',result)
    // log('len---->',len)
    for (var i = 0; i < len; i++) {
        if (result[i] == 0) {
            var num = 0
            if (result[i+1] == 9) {
                num++
            }
            if (result[i-1] == 9) {
                num++
            }
            result[i] = num
        }
    }
    return result
}

var markedLine_test = function() {
    ensure(equal(markedLine([0,0,9,0,9]), [0,1,9,2,9]),'测试1失败')
    ensure(equal(markedLine([9,9,0,0,9]), [9,9,1,1,9]),'测试2失败')
    ensure(equal(markedLine([0,0,0,0,9]), [0,0,0,1,9]),'测试3失败')
}
markedLine_test()


// 作业 15
/*
array 是一个「包含了『只包含了 0 9 的 array』的 array」
返回一个标记过的 array
** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

范例如下, 这是 array
[
    [0, 9, 0, 0],
    [0, 0, 9, 0],
    [9, 0, 9, 0],
    [0, 9, 0, 0],
]

这是标记后的结果
[
    [1, 9, 2, 1],
    [2, 4, 9, 2],
    [9, 4, 9, 2],
    [2, 9, 2, 1],
]

规则是, 0 会被设置为四周 8 个元素中 9 的数量
*/
//
// 课 8 作业 15 答案
// 复制一个 square
var clonedSquare = function(array) {
    var s = []
    for (var i = 0; i < array.length; i++) {
        var line = []
        for (var j = 0; j < array[i].length; j++) {
            line.push(array[i][j])
        }
        s.push(line)
    }
    return s
}

// 辅助函数, 给数字 +1
// 这里会判断下标是否合法
var plus1 = function(array, x, y) {
    var n = array.length
    if (x >= 0 && x < n && y >= 0 && y < n) {
        if (array[x][y] !== 9) {
            array[x][y] += 1
        }
    }
}

// 辅助函数, 用来给 9 周边的 8 个格子 +1
var markAround = function(array, x, y) {
    /*
    ###
    #9#
    ###
    */
    if (array[x][y] === 9) {
        // 左边 3 个
        plus1(array, x - 1, y - 1)
        plus1(array, x - 1, y)
        plus1(array, x - 1, y + 1)
        // 上下 2 个
        plus1(array, x, y - 1)
        plus1(array, x, y + 1)
        // 右边 3 个
        plus1(array, x + 1, y - 1)
        plus1(array, x + 1, y)
        plus1(array, x + 1, y + 1)
    }
}

var markedSquare = function(array) {
    var square = clonedSquare(array)
    for (var i = 0; i < square.length; i++) {
        var line = square[i]
        for (var j = 0; j < line.length; j++) {
            markAround(square, i, j)
        }
    }
    return square
}
// 拆分函数的依据
// 描绘 what
// 而不是描绘 how



// 作业 16
/*
返回以下格式的数据
只包含 0 和 9
limit 是 9 的个数
假设 n 为 4, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
注意, 这只是一个 array, 并不是它显示的样子
注意, 这是一个 array 不是 string
[
    [0, 9, 0, 0],
    [0, 0, 9, 0],
    [9, 0, 0, 0],
    [0, 0, 0, 0],
]
返回, 包含了 n 个『只包含 n 个「随机 0 9」的 array』的 array, 9 的个数是 limit
*/
var emptyLine = function(n) {
    var l = []
    for (var i = 0; i < n; i++) {
        l.push(0)
    }
    return l
}
 emptyLine(3) // [0,0,0]
var emptySquare = function(n) {
    var l = []
    for (var i = 0; i < n; i++) {
        var line = emptyLine(n)
        l.push(line)
    }
    return l
}
//emptySquare(3) = [[0,0,0,],[0,0,0],[0,0,0]]

var random = function(n) {
    // r 是一个 0 - 1 的小数
    var r = Math.random()
    // * n, 现在是 0 - n 的小数了
    r *= n
    // 取整, 现在是 0 - n 的整数了
    r = Math.floor(r)
    return r
}
random(3) // 0或1或2

var randomSquare09 = function(n, limit=3) {
    var square = emptySquare(n)
    // 随机出 limit 个坐标, 并且处理好重合的情况
    for (var i = 0; i < limit; i++) {
        var x = random(n)
        var y = random(n)
        // 如果随机到的坐标是 0, 就设置为 9
        if (square[x][y] === 0) {
            square[x][y] = 9
        } else {
            // 否则什么都不做, 并且 i--
            // 因为要跳过此次循环
            i--
        }
    }
    return square
}


// 下面开始都是 DOM API 相关练习
// ====
//
// 作业 17
/*
实现一个登录页, 有 2 个标签分别是用户名输入框和登录按钮
给登录按钮绑定一个 click 事件
检查用户名是否符合如下规则
1，第一位是字母
2，只能包含字母、数字、下划线
3，只能字母或数字结尾
4，最小长度2
5，最大长度10

如果符合规则, log '检查合格'
如果不符合, 在登录按钮后插入一个红色 h1 标签
内容是 '用户名错误'

需要补全的代码自行解决
*/


// 作业 18
/*
给上课写的 todo 程序加一个功能
在编辑的时候输入框失去焦掉后保存 todo
失去焦点的事件名是 blur
*/


// 作业 19
/*
给上课写的 todo 加一个功能
增加一个 编辑 按钮
task 默认是不能编辑的
在你点了编辑按钮后它才能编辑(设置属性)
并且拥有焦点(element.focus() 实现)
编辑完成后(失去焦点后), 让 task 不可编辑

如果不懂, 看提示
*/

// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, join
循环相加


2, split
用循环找到 delimiter
记录两个变量 start 和 end 来 slice 出子字符串


3, replaceAll
split 再 join


4, str1
用 2 个辅助函数
一个生成前半部分
一个生成后半部分
辅助函数用循环


5, str2
同上


6, addTable
用一个辅助函数生成行
用循环 push


7, range1
使用 while 循环


8, range2
循环加判断


9, range3
循环加判断


10, random01
用余数来实现


11, randomLine01
循环加 random01


12, randomSquare01
循环加 randomLine01


13, randomLine09
可以生成 01 之后把 1 替换为 9


14, markedLine
把 9 左右加一
注意判断 9 是否在两边


15, markedSquare
循环调用 markedLine


16, randomSquare09
把 randomSquare01 里的 1 替换成 9


17, 用户名检查
红色是 css 预先写好的


18, 保存 todo
给编辑框绑定一个 blur 事件就好
用事件委托


19, 动态编辑
用之前讲过的 DOM API 设置属性即可
*/
