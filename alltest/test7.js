

// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试

// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}

var equal = function(arr1=[], arr2=[]) {
    var equalLength = arr1.length === arr2.length
    var equalElement = arr1.every(function(v, i) {
        return v === arr2[i]
    })

    return equalLength && equalElement
}


// 实现函数

var startsWith = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 开头, 返回 true 或者 false
    */
    var len = s2.length
    // 用 slice 切出一个和 s2 一样长度的字符串
    // 然后比较
    // slice 是不会出错的函数
    return s1.slice(0, len) === s2
}


var startsWith_test = function(){
    ensure(startsWith('guagua', 'gua'),'测试1失败')
    ensure(!startsWith('guamelon', 'melon'),'测试2失败')
    ensure(!startsWith('guagua', 'xigua'),'测试3失败')
}
startsWith_test()
// 用法如下, 作为测试参考
// log('starts_with', startsWith('guagua', 'gua'))
// starts_with true
// log('starts_with', startsWith('guagua', 'melon'))
// starts_with false
// log('starts_with', startsWith('melongua', 'gua'))
// starts_with false



// 实现函数
// 10 分钟做不出就看提示
var findIn = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个长度为 1 的字符串
    返回参数 s2 在 s1 中第一次出现的下标
    如果 s2 没有在 s1 中出现, 返回 -1
    */
    var len = s1.length
    var result = -1
    for (var i = 0; i < len; i++) {
        var si = s1[i]
        if (si === s2) {
            result = i
            //log('i---->', i)
            break
        }
    }
    return result
}

var findIn_test = function() {
    ensure(findIn('fesrea' , 'e') === 1,'测试1失败')
    ensure(findIn('whatthefuck' , 'q') === -1,'测试2失败')
    ensure(findIn('beautiful' , 'u') === 3,'测试3失败')
    ensure(findIn('smart' , ' ') === -1,'测试4失败')
}
findIn_test()



var findAllIn = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个长度为 1 的字符串
    返回参数 s2 在 s1 中出现的所有下标组成的 array
    如果 s2 没有在 s1 中出现, 返回空数组 []
    */
    var array =[]
    var len = s1.length
    for (var i = 0; i < len; i++) {
        var si = s1[i]
        if (si === s2) {
            //log('i---->', i)
            array.push(i)
        }
    }
    return array
}
var findAllIn_test = function() {
    ensure(equal(findAllIn('10121320', '1'), [0, 2, 4]), '测试1失败')
    ensure(equal(findAllIn('i am so smart', ' '), [1, 4, 7]), '测试1失败')
    ensure(equal(findAllIn('beautiful', 'u'), [3, 7]), '测试1失败')
    ensure(equal(findAllIn('10121320', '9'), []), '测试1失败')
}
// 用法范例, 作为测试参考
// log('find all', findAllIn('10121320', '1'))
// find all [0, 2, 4]
// log('find all', findAllIn('beautiful', 'u'))
// find all [3, 7]
// log('find all', findAllIn('i am so smart', ' '))
// find all [1, 4, 7]
// log('find all', findAllIn('10121320', '9'))
// find all []



var startsWith = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 开头, 返回 true 或者 false
    */
    var len = s1.length
    var result = false
    for (var i = 0; i < len; i++) {
        if (s1.slice(0,i) === s2||s1 == s2){
            result = true
            // log('i---->', i)
            break
        }
    }
    return result
}

var findAllString = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个字符串, 长度未知, 不一定为 1
    返回参数 s2 在 s1 中出现的下标组成的 array
    如果 s2 没有在 s1 中出现, 返回 []
    */
    var array = []
    var len = s1.length
    for (var i = 0; i < len; i++) {
        var str = s1.slice(i)
        if (startsWith(str, s2)) {
            //log('i---->', i)
            //log(str)
            array.push(i)
        }
    }
    return array
}

// 用法
// log('find all str', findAllString('1012100120', '10'))
// find all [0, 4]
// log('find all str', findAllString('1012100120', '100'))
// find all [4]
// log('find all str', findAllString('1012100120', '3'))
// find all []




//
// var endsWith = function(s1, s2) {
//     /*
//     s1 是一个字符串
//     s2 是一个字符串
//     检查 s1 是否以 s2 结尾, 返回 true 或者 false
//     */
//     var len1 = s1.length
//     var len2 = s2.length
//     // 尝试用 slice 切一个和 s2 等长的字符串判断是否和 s2 相等
//     // slice 不会出错, 即便给的是一个负值的下标
//     var s = s1.slice(len1-len2)
//     return s === s2
// }

var endsWith = function(s1, s2) {
    /*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 结尾, 返回 true 或者 false
    */
    var len = s1.length
    var result = false
    for (var i = 0; i < len; i++) {
        if (s1.slice(i) === s2){
            result = true
            // log('i---->', i)
            break
        }
    }
    return result
}
var endsWith_test = function(){
    ensure(endsWith('guagua 1', 'a 1'),'测试1失败')
    ensure(endsWith('guamelon', 'melon'),'测试2失败')
    ensure(!endsWith('guagua', 'xigua'),'测试3失败')
}
startsWith_test()


// 实现函数
var topl = function(students) {
    /*
    students 是 array
    里面的每个元素都是如下格式的 object
    {
        'name': 'gua',
        'sex': '男',
        'score': 127,
    }
    返回 score 最高的那个元素(object)
    */
    var len = students.length
    var max = students[0]
    for (var i = 0; i < len; i++) {
        if (max.score < students[i].score) {
            max = students[i]
        }
    }
    return max
}

// 目前只有两个数据, 自行扩充到 5 个
var student_list = [
    {
        'name': 'gua1',
        'sex': '男',
        'score': 99,
    },
    {
        'name': 'gua2',
        'sex': '男',
        'score': 90,
    },
    {
        'name': 'gua3',
        'sex': '基佬',
        'score': 59,
    },
    {
        'name': 'gua4',
        'sex': '妹子',
        'score': 100,
    },
    {
        'name': 'xigua',
        'sex': '男',
        'score': 101,
    },

]



/*
day 是代表星期的数字, 从周一到周日分别是 1 2 3 4 5 6 7
返回 '星期一' '星期二' 这样的描述字符串
*/
var formated_weekday = function(day) {
    var week = {
        '1':'星期一',
        '2':'星期二',
        '3':'星期三',
        '4':'星期四',
        '5':'星期五',
        '6':'星期六',
        '7':'星期日',
    }
    var  key = String(day)
    return week[key]
}



// test 8

var discount = function(price, grade) {
    /*
    price 是一个 int
    grade 合法情况下一共 6 种取值, 还可能没有给出这个参数
        '小学生'
        '初中生'
        '高中生'
        '大学生'
        '研究生'
    对应的折扣分别是 5 6 7 8 9

    注意, 如果调用者没有给出 grade 参数, 没有折扣

    返回折扣后的价格
    */
    var grades = [
        '小学生',
        '初中生',
        '高中生',
        '大学生',
        '研究生',
    ]
    var priceMap = {
        '小学生': 0.5,
        '初中生': 0.6,
        '高中生': 0.7,
        '大学生': 0.8,
        '研究生': 0.9,
    }
    if (grades.includes(grade)) {
        return price * priceMap[grade]
    } else {
        return price
    }
}
var discount_test = function() {
    ensure(discount(500,'小学生') === 250, '测试1失败')
    ensure(discount(500,'初中生') === 300, '测试2失败')
    ensure(discount(500,'高中生') === 350, '测试3失败')
    ensure(discount(500,'大学生') === 400, '测试4失败')
    ensure(discount(500,'研究生') === 450, '测试5失败')
    ensure(discount(500,'不知道') === 500, '测试5失败')
}
discount_test()

/*
array 是 array 类型, 里面的元素都是字符串
按如下的格式返回这个 array
假设 array 是 ['python', 'js', 'objective-c']
那么返回的数据是一个数组, 多了首尾两个元素
[
    '+++++++++++++++',
    '+ python      +',
    '+ js          +',
    '+ objective-c +',
    '+++++++++++++++',
]
返回包含了 string 的 array
*/


var maxLength = function(array) {
    var max = array[0].length
    for (var i = 0; i < array.length; i++) {
        var s = array[i]
        if (max < s.length) {
            max = s.length
        }
    }
    return max
}

// 返回 n 个 char 组成的字符串
var nChar = function(n, char) {
    var s = ''
    for (var i = 0; i < n; i++) {
        s += char
    }
    return s
}

var prettyLog1 = function(array) {
    var len = maxLength(array)
    var head = nChar(len + 4, '+')
    // 创建空数组
    var l = []
    // push 头
    l.push(head)
    // 循环拼接
    for (var i = 0; i < array.length; i++) {
        var s = array[i]
        // 得到每行的空格
        var space = nChar(len - s.length, ' ')
        // 每行的内容
        var content = s + space
        // 得到每行的完整字符串
        var line = `+ ${content} +`
        l.push(line)
    }
    // push 最后一行
    l.push(head)
    return l
}



var prettyLog2 = function(array) {
    var len = array.length
    var result = []
    var s = ''
    var len1 = array[0].length
    for (var i = 0; i < len; i++) {
        if (len1 < array[i].length) {
            len1 = array[i].length
        }
    }
    //log("len1---->", len1)
    for (var j = 0; j < len1 + 4; j++) {
        s += '+'
    }
    result.push(s)
    for (var i = 0; i < len; i++) {
        var num = len1 - array[i].length
        for (var p = 0; p < num; p++) {
            array[i] += ' '
        }
        array[i] = '+ ' + array[i] + ' +'
        result.push(array[i])
    }
    result.push(s)
    return result
}

var array = ['python', 'js', 'objective-c']
prettyLog1(array)
// =======
/
