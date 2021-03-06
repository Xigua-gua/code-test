

var log = function() {
    console.log.apply(console, arguments)
}


// ======

// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}


// 注意看, 我们使用了上文定义的 ensure 来进行测试
var test_sample = function() {
    // ensure 函数接受两个参数
    // 第一个是一个 bool 值, 如果为 True 则不会有任何反应
    // 否则会打印第二个参数
    ensure(1 === 1, '如果测试失败, 这句话会被打印出来')
    ensure(1 > 2, '测试 1 > 2 失败')
}


test_sample()
// 调用上面的 test_sample 可以得到如下输出
// *** 测试失败: 测试 1 > 2 失败



//
var nChar = function(char, n) {
    var s = ''
    for (var i = 0; i < n; i++) {
        s += char
    }
    return s
}

var zfill = function(n, width) {
    /*
    n 是 int 类型
    width 是 int 类型

    把 n 的位数变成 width 这么长，并在右对齐，不足部分用 0 补足并返回
    具体请看测试, 注意, 返回的是 string 类型

    返回 string 类型
    */
    var s = String(n)
    var len = s.length
    return nChar('0', width - len) + s
}


// 测试函数
var test_zfill = function() {
    ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
    ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
    ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
    ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
}

// 调用测试函数
test_zfill()



//

// fillchar 这个参数如果你不提供, 它的值默认就是 ' '
// 语法就是这样
var ljust = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在末尾用 fillchar 填充并返回
    否则, 原样返回, 不做额外处理

    返回 string 类型
    */
    var len = width - s.length
    return s + nChar(fillchar, len)
}


// 测试函数
var test_ljust = function() {
    ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
    ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
    ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
}


//
var rjust = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在开头用 fillchar 填充并返回

    返回 string 类型
    */
    var len = width - s.length
    return nChar(fillchar, len) + s
}

// 测试函数
var test_rjust = function() {
    ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
    ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
    ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
}


//
var center = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
    如果 s.length 和 width 互为奇偶, 则无法平均分配两边的 fillchar
    这种情况下, 让左边的 fillchar 数量小于右边

    返回 string 类型
    */
    var len = width - s.length
    var lenLeft = Math.floor(len / 2)
    var lenRight = len - lenLeft
    var left = nChar(fillchar, lenLeft)
    var right = nChar(fillchar, lenRight)
    return left + s + right
}

// 测试函数
var test_center = function() {
    ensure(center('gua', 5) === ' gua ', 'center 测试 1')
    ensure(center('gua', 5, '*') === '*gua*', 'center 测试 2')
    ensure(center('gw', 5) === ' gw  ', 'center 测试 3')
    ensure(center('gua', 6) === ' gua  ', 'center 测试 4')
}


//
var is_space = function(s) {
    /*
    s 是 string
    检查 s 中是否只包含空格

    返回 bool, 如果 s 中包含的只有空格则返回 true, 否则返回 false
    */
    for (var i = 0; i < s.length; i++) {
        var x = s[i]
        if (x.includes(' ')) {
            return true
        }else {
            return false
        }
    }
}


// 测试函数
var test_is_space = function() {
    ensure(is_space(' '), 'center 测试 1')
    ensure(is_space('   '), 'center 测试 2')
    ensure(!is_space(''), 'center 测试 3')
    ensure(!is_space('gua'), 'center 测试 4')
}

test_is_space()


//
var log = function() {
    console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var is_digit = function(s) {
    /*
    s 是字符串
    检查 s 中是否只包含数字
    返回: bool, 如果 s 中包含的只有数字则返回 true, 否则返回 false
    */
    var x = s.length
    var t ='0123456789'
    for (var i = 0; i < x; i++) {
        if (!t.includes(s[i])) {
            //log('s[i]---->',s[i])
            return false
        }
    }
    return true
}

// 测试函数
var test_is_digit = function() {
    ensure(is_digit('123'), 'is_digit 测试 1')
    ensure(is_digit('0'), 'is_digit 测试 2')
    ensure(!is_digit('  '), 'is_digit 测试 3')
    ensure(!is_digit('1.1'), 'is_digit 测试 4')
    ensure(!is_digit('gua'), 'is_digit 测试 5')
}

test_is_digit()


var strip_left = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串开始的所有空格」的字符串

    返回 string
    */
    var x = s.length
    var i = 0
    while (i < x) {
        if(s[i] != ' ') {
            x = i
            log("i---->",i)
            break
        }
        i++
    }
    return s.slice(x)
}

// 测试函数
var test_strip_left = function() {
    ensure(strip_left('  gua') === 'gua', 'strip_left 测试 1')
    ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试 2')
    ensure(strip_left('') === '', 'strip_left 测试 3')
    ensure(strip_left('    ') === '', 'strip_left 测试 4')
}

test_strip_left()



//

var strip_right = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串末尾的所有空格」的字符串

    返回 string
    */
    var x = s.length
    var n
    for (var i = x - 1; i > 0; i--) {
        if (s[i] != ' ') {
            n = i
            log("i---->",i)
            break
        }
    }
    return s.slice(0,n + 1)
}

// 测试函数
var test_strip_right = function() {
    ensure(strip_right('  gua') === '  gua', 'strip_right 测试 1')
    ensure(strip_right(' gua  ') === ' gua', 'strip_right 测试 2')
    ensure(strip_right('') === '', 'strip_right 测试 3')
    ensure(strip_right('    ') === '', 'strip_right 测试 4')
}

test_strip_right()


//
var strip_right = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串末尾的所有空格」的字符串

    返回 string
    */
    var x = s.length
    var n
    for (var i = x - 1; i > 0; i--) {
        if (s[i] != ' ') {
            n = i
            break
        }
    }
    return s.slice(0,n + 1)
}

var strip_left = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串开始的所有空格」的字符串

    返回 string
    */
    var x = s.length
    var i = 0
    while (i < x) {
        if(s[i] != ' ') {
            x = i
            break
        }
        i++
    }
    return s.slice(x)
}

var strip = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串首尾的所有空格」的字符串

    返回 string
    */
    return strip_left(strip_right(s))
}

// 测试函数
var test_strip = function() {
    ensure(strip('  gua') === 'gua', 'strip 测试 1')
    ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
    ensure(strip('') === '', 'strip 测试 3')
    ensure(strip('    ') === '', 'strip 测试 4')
}

test_strip()

//
var replace = function(s, old, newstr) {
    /*
    3 个参数 s old new 都是字符串
    返回一个「将 s 中的 old 字符串替换为 new 字符串」的字符串
    假设 old 存在并且只出现一次

    返回 string
    */
    var lenS = s.length
    var lenOld = old.length
    var index
    if (s.includes(old)) {
        for (var i = 0; i < s.length; i++) {
            if (s[i] == old[0]) {
                index = i
                break;
            }
        }
        return s.slice(0,index) + newstr + s.slice(index + lenOld)
    }else {
        return s
    }
}


// 测试函数
var test_replace = function() {
    ensure(replace('hello, world', 'world', 'gua') === 'hello, gua', 'replace 测试 1')
    ensure(replace('hello', 'world', 'gua') === 'hello', 'replace 测试 2')
    ensure(replace('hello', 'll', 'gua') === 'heguao', 'replace 测试 3')
}

test_replace()


-
