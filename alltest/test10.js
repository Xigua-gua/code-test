
// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

var arrayEquals = function(a, b, message) {
    if (JSON.stringify(a) != JSON.stringify(b)) {
        log(`${message}测试失败---> ${a}不等于${b} `)
    }
    if (JSON.stringify(a) === JSON.stringify(b)) {
        log(`${message}测试成功---> ${a}等于${b}`)
    }
}
// ======
// 测试
// ======
//

// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}


// test 1
//
var isPrime = function(n) {
    /*
    n 是 int
    判断 n 是否是素数(质数)
    */
    var result = true
    if (n <=1 ) {
        result = false
    }else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                result = false
            }
        }
    }
    return result
}

var test1 = function() {
    arrayEquals(isPrime(439), true, '1-1')
    arrayEquals(!isPrime(0), true, '1-2')
    arrayEquals(!isPrime(1), true, '1-3')
    arrayEquals(isPrime(2), true, '1-4')
}
// test 2
//
var primeNumbers = function() {
    /*
    返回 100 内的素数列表
    */
    var array = []
    for (var i = 0; i <= 100; i++) {
        var p = isPrime(i)
        if ( p ) {
            array.push(i)
        }
    }
    return array
}

var test2 = function() {
    arrayEquals(primeNumbers(), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
        41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], "2-1" )
}

// test 3
//先写一个辅助函数 让由空格隔开的每个单词都是首字母大写
var capst = function(str) {
    var lower = 'abcdefghijklmnopqrstuvwxyz'
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    //先确定首字母 大写
    for (var i = 0; i < lower.length; i++) {
        if (str[0] == lower[i] || str[0] == upper[i]) {
            //log(lower[i])
            result = upper[i]
            break
        }
    }
    //log('result[0]' , result)
    // 再让str.slice(1) 都小写
    for (var i = 1; i < str.length; i++) {
        if (upper.includes(str[i])) {
            for (var j = 0; j < upper.length; j++) {
                if (upper[j] == str[i]) {
                    var index = j
                    //log('j',j)
                    result += lower[j]
                }
            }
        }else {
                    result += str[i]
                }
    }
    return result
}

var capString = function(str) {
    /*
    给定一个英文句子 str（由空格隔开的单词组成的字符串）
    返回「将句中所有单词变为有且只有首字母大写的形式」的 string
    */
    var  result = ''
    var  array = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            array.push(i)
        }
    }
    //log('array',array)
    result = result + capst(str.slice(0,array[0]))
    for (var i = 0; i < array.length; i++) {
        result += str[array[i]] + capst(str.slice(array[i]+1,array[i+1]))
    }
    return result
}

var test3 = function() {
    arrayEquals(capString('WhaT aRe yOU doInG'), "What Are You Doing", '3-1')
    arrayEquals(capString('i aM lOoKiNg fOR YoU'), 'I Am Looking For You', '3-2')
}

// test 4
//
/*
给定一个只包含字母的字符串，返回单个字母出现的次数
考察字典的概念和使用
返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

// 可以使用 Object.keys 函数
var obj = {
  foo: 1,
  bar: 2,
}
Object.keys(obj)
["foo", "bar"]

参数 "hello"
返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
*/

var letterCount = function(str) {
    var result = []
    var arr = []
    var  obj = {}
    for (var i = 0; i < str.length; i++) {
        if (Object.keys(obj).includes(str[i])) {
            obj[str[i]] += 1
        }else {
            obj[str[i]] = 1
        }
    }
    log('obj',obj)
    var keys = Object.keys(obj)
    for (var i = 0; i <  keys.length; i++) {
        var val = obj[keys[i]]
        var arr = [keys[i], val]
        result.push(arr)
    }
    return result
}

var test4 = function() {
    arrayEquals(letterCount('asddffjk'), [['a', 1],['s', 1],['d', 2],['f', 2],
        ['j',1],['k',1]], '4-1')
    arrayEquals(letterCount('hello'),[['h', 1], ['e', 1], ['l', 2], ['o', 1]],
        '4-2')
}


// test 5
//
var join = function(delimiter, array) {

    var s = array[0]
    for (var i = 1; i < array.length; i++) {
        var a = array[i]
        s += (delimiter + a)
    }
    return s
}
var queryFromObject = function(param) {
    /*
    param 是一个 object
    例子如下
    param 是 {
        'foo': 1,
        'bar': 'far',
    }
    返回如下 string, 顺序不做要求(foo bar 的顺序)
    foo=1&bar=far

    注意, 使用 Object.keys 函数
    */
    var array = []
    var array1 = Object.keys(param)
    //log('array1--->',array1)
    var array2 = []
    for (var i = 0; i < array1.length; i++) {
        var p = param[array1[i]]
        array2.push(p)
    }
    //log('array2--->',array2)
    for (var i = 0; i < array1.length; i++) {
        array.push(`${array1[i]}=${array2[i]}`)
    }
    //log('array--->',array)
    var result = join('&',array)
    return result
}

// 答案
// var queryFromObject = function(param) {
//     var pairs = []
//     var keys = Object.keys(param)
//     log('keys--->',keys)
//     for (var i = 0; i < keys.length; i++) {
//         var k = keys[i]
//         var p = k + '=' + param[k]
//         pairs.push(p)
//     }
//     return pairs.join('&')
// }
var test5 = function() {
    arrayEquals(queryFromObject({'foo': 1,'bar': 'far','me':'cool'}),
    "foo=1&bar=far&me=cool",'5-1')
}

// test 6
//
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

var argsFromQuery = function(queryString) {
    /*
    queryString 是一个 string
    例子如下
    queryString 是 foo=1&bar=far
    返回如下 object, 顺序不做要求(foo bar 的顺序)
    {
        'foo': 1,
        'bar': 'far',
    }
    */
    var obj = {}
    var array = split(queryString, '&')
    //log('array---->', array)
    for (var i = 0; i < array.length; i++) {
        var s = array[i]
        for (var j = 0; j < s.length; j++) {
            if (s[j] == '=') {
                //log('j--->',j)
                obj[s.slice(0, j)] = s.slice(j+1)
            }
        }
    }
    return obj
}

var test6 = function() {
    arrayEquals(argsFromQuery('foo=1&bar=far'),{foo: "1", bar: "far"},'6-1')
}

// test 7
//
var ajaxGet = function(url, callback) {
    /*
    利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
    url 是一个 URL
    callback 是一个函数, 在接受服务器响应后调用并传递参数给它
    本题不会就放弃
    */
    var r = new XMLHttpRequest()
    r.open('GET', url, true)
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    r.send()
}


// test 8
//
var ajax = function(request) {
    /*
    request 是一个 object, 有如下属性
    method, 请求的方法, string
    url, 请求的路径, string
    data, 请求发送的数据, 如果是 GET 方法则没这个值, string
    callback, 响应回调, function

    本题不会就放弃, 本题带了一个用法在下方
    */
    var r = new XMLHttpRequest()
    r.open(request.method, request.url, true)
    if (request.contentType !== undefined) {
        r.setRequestHeader('Content-Type', request.contentType)
    }
    r.onreadystatechange = function(event) {
        if (r.readyState === 4 ) {
            request.callback(r.response)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
        console.log('r--->', r)
    }
}

var account = {
    username:'西瓜丶1111',
    password: '646293529'
}
var data = JSON.stringify(account)
var r = {
    method: 'POST',
    url: '/login',
    contentType: 'application/json',
    data: data,
    callback: function(response) {
        console.log('响应', response)
        // var res = JSON.parse(response)
        // if (res.success) {
        //     window.location.href = '/'
        // }else {
        //     alert('登录失败')
        // }
    }
}

ajax(r)







//所有测试:
var __main = function() {
    test1()
    test2()
    test3()
    test4()
    test5()
    test6()
}

__main()
