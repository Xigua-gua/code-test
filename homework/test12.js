
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

var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}


// test 1
//
var ascii = function(char) {
    /*
    char 是一个长度为 1 的 string
    这个函数返回这个字符的 ASCII 码

    字符在电脑中的存储是以数字的方式
    每个字符其实是用一个数字代表的, 这个方式叫做编码
    ASCII 码是一个通用的编码, 包含英文字符数字和常见符号

    */
    return char.charCodeAt(0)
}

var test1 = function() {
    arrayEquals(ascii('M'), 77,'test1')
}

// test 2
//
var charFromAscii = function(code) {
    /*
    code 是一个 int
    返回 code 所表示的字符

    */
    return String.fromCharCode(code)
}

var test2 = function() {
    arrayEquals(charFromAscii(88), 'X','test2')
}


// test 3
//
/*
n 是一个不大于 255 的 int
返回 n 的 8 位二进制形式的字符串
例如 binary(7) 返回 '00000111'

进制转换自行搜索或者论坛提问大家讨论吧
*/
var binary = function(n) {
    if(n >= 0&&n <= 255) {
        var bin = (n).toString(2)
    }
    var str = String(bin)
    var num = 8 - str.length
    for (var i = 0; i < num; i++) {
        str = '0' + str
    }
    return str
}

var test3 = function() {
    arrayEquals(binary(254), '11111110','test3')
}



// test 4
//
/*
bin 是一个 8 位二进制形式的字符串
返回 bin 代表的数字
例如 int('00000111') 返回 7

进制转换自行搜索或者论坛提问大家讨论吧
*/
var int = function(bin) {
    var len = bin.length
    if (len >= 0 && len <= 8) {
        //将字符串转换为数字
        var b = Number(bin)
        var result = parseInt(b, 2)
    }
    return result
}

var test4 = function() {
    arrayEquals(int('11000100'), 196,'test4')
}


// test 5
//
/*
s 是一个 string
返回 s 的二进制字符串
例如 binaryStream('Man') 返回
'010011010110000101101110'

使用上面的函数
*/
var binaryStream = function(s) {
    var result = ''
    var len = s.length
    for (var i = 0; i < len; i++) {
        var str = s[i]
        var int = ascii(str)
        result += binary(int)
    }
    return result
}

var test5 = function() {
    arrayEquals(binaryStream('Man'), '010011010110000101101110','test5')
}

// test 6
//
var stringFromBinary = function(bins) {
    /*
    bins 是一个二进制形式的字符串
    返回 bins 代表的原始字符串
    例如 stringFromBinary('010011010110000101101110') 返回 'Man'

    使用上面的函数
    */
    var result = ''
    var len = bins.length
    var n = len/8
    //将bins均匀拆分为 8位二进制字符串
    var array = []
    array.push(bins.slice(0, 8))
    for (var i = 1; i < n; i++) {
        var x = bins.slice(i * 8, (i + 1) * 8)
        array.push(x)
    }
    //log('array', array)
    //将数组内每个8位二进制字符串 转换为 对应的ASCII码字符串
    for (var i = 0; i < array.length; i++) {
        var asc = int(array[i])
        result += charFromAscii(asc)
    }
    return result
}

var test6 = function() {
    arrayEquals(stringFromBinary('010011010110000101101110'), 'Man','test6')
}

// test 7
//
/*
s 是一个 string
返回 s 的 base64 编码

Base64是一种基于 64 个可打印字符来表示数据的方法
它用每6个比特为一个单元，对应某个可打印字符
ASCII 码一个字符是 8 比特, 也就是一字节
3 个字节就有 24 个比特, 对应了 4 个 base64 单元

如下所示
原始信息        M        a        n
ASCII         77       97        110
二进制         01001101 01100001 01101110
4 个单元       010011 010110 000101 101110
每个单元转换后  19  22  5  46

原始信息        M        ''
ASCII         77       0         0
二进制         01001101 00000000 00000000
4 个单元       010011 010000 000000 000000
每个单元转换后  19  16   0  0
               T   Q   A   =

转换后每个 base64 单元都是一个 0-63 的数字
因为 6 比特表示的范围就是这么大
然后数字到字符串的转换是下面这段字符串取下标所得
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

那么 Base64 编码结果就是    T   W   F  u

所以 base64Encode('Man') 返回 'TWFu'


既然 3 个字节转换为 4 个 base64 单元

原始信息    M
ASCII     77       0        0
二进制     01001101 00000000 00000000
4 个单元   010011 010000 000000 000000
单元转换后  19 16 0 0
所以 base64Encode('M') 返回 'TQ=='
*/
// 先将 二进制码补全 最后判断有几个 '='
var base64Encode2 = function(s) {
    var str = binaryStream(s)
    //log('str--->',str)
    var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    var result = ''
    var sum = 0
    while (str.length % 24 !== 0) {
        str += '00000000'
        sum++
        if (str.length % 24 == 0) {
            break
        }
    }
    //log('str---->',str)
    var n = str.length / 6
    var array = []
    array.push(str.slice(0, 6))
    for (var i = 1; i < n; i++) {
        var x = str.slice(i * 6, (i + 1) * 6)
        array.push(x)
    }
    //log('array',array)
    for (var i = 0; i < array.length; i++) {
        var index = int(array[i])
        result += base[index]
    }
    var len = result.length
    var result = result.slice(0, len - sum)
    for (var i = 0; i < sum; i++) {
        result += '='
    }
    return result
}


var test7 = function() {
    arrayEquals(base64Encode('Man'), 'TWFu', 'test7')
    arrayEquals(base64Encode('M'), 'TQ==', 'test7')
}

// test 8
//

/*
s 是一个 base64 编码后的字符串
解码 s 并返回
例如 base64Decode('TWFu') 返回 'Man'
*/
// 返回 s2 在 s1 中的下标
var find = function(s1, s2) {
    var index
    for (var i = 0; i < s1.length; i++) {
        if(s1[i] == s2) {
            index = i
            break
        }
    }
    return index
}

var base64Decode = function(s) {
    var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    var array = []
    var sum = 0
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '=') {
            sum ++
            array.push('000000')
        }else {
            var index = find(base, s[i])
            var b = binary(index).slice(2)
            array.push(b)
        }
    }
    // log(array)
    // log(sum)
    var str = array.join('')
    // len 是最后字符串的长度
    var len = str.length/8 - sum
    var bins = ''
    for (var i = 0; i < len; i++) {
        var a = str.slice(8*i, 8*(i+1))
        bins += a
    }
    // log(bins)
    var result = stringFromBinary(bins)
    return result
}




var test8 = function() {
    arrayEquals(base64Decode('TWFu'), 'Man', 'test8')
}





var test = function() {
    test1()
    test2()
    test3()
    test4()
    test5()
    test6()
    test7()
    test8()
}
test()

/*













*/
