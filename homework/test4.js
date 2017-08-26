
var log = function() {
    console.log.apply(console, arguments)
}


// 求数组的和
var sum = function(array) {
    // 先设置一个变量用来存 和
    var s = 0
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  	return s
}

var a = [1, 2, 3, 4]
log('sum', sum(a))




// 参数是一个只包含数字的 array
// 求 array 的乘积
// 函数定义是
var product = function(array) {
    // 先设置一个变量用来存 乘积
    var s = 1
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累乘到变量 s
        s = s * n
        // 缩写是如下形式
        // s *= n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的乘了
  	return s
}

var testProduct = function() {
    ensure(product([1, 2, 3]) === 6, 'test product 1')
    ensure(product([1, 2, 0]) === 0, 'test product 2')
}

// testProduct()

// test 2
// 返回一个数的绝对值
// 函数定义是
var abs = function(n) {
    if (n < 0) {
        return -n
    } else {
        return n
    }
}

var testAbs = function() {
    ensure(abs(0) === 0, 'abs 0 错误')
    ensure(abs(-6) === 6, 'abs -6 错误')
    ensure(abs(5) === 5, 'abs 5 错误')
}

testAbs()

// test 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
var average = function(array) {
    var n = array.length
    return sum(array) / n
}


// test 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
var min = function(array) {
    var m = array[0]
    for(var i = 0; i < array.length; i++) {
        var n = array[i]
        // 如果 n 更小, 设置 m 为 n
        // 循环结束后 m 就是最小值
        if (m > n) {
            m = n
        }
    }
    return m
}


/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/
var sum1 = function(n) {
    // 观察规律发现是奇数想加偶数相减
    var sum = 0
    // 注意 i 是 1 到 n
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sum -= i
        } else {
            sum += i
        }
    }
    return sum
}



/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
var sum2 = function(n) {
    // 观察规律, 可以 让初始值为 1
    // 从 2 开始循环
    // 1 + 2 - 3 + 4 - ... n
    var sum = 1
    // 注意 i 是 2 到 n
    for (var i = 2; i <= n; i++) {
        if (i % 2 == 0) {
            sum += i
        } else {
            sum -= i
        }
    }
    return sum
}



/*
实现 fac 函数
接受一个参数 n
返回 n 的阶乘, 1 * 2 * 3 * ... * n
*/
var fac = function(n) {
    var s = 1
    for (var i = 1; i <= n; i++) {
        s *= i
    }
    return s
}



/*



实现 apply 函数
参数如下
op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
a b 分别是 2 个数字
根据 op 对 a b 运算并返回结果(加减乘除)
*/
var apply = function(op, a, b) {
    if(op == '+') {
        return a + b
    }
    if(op == '-') {
        return a - b
    }
    if(op == '*') {
        return a * b
    }
    if(op == '/') {
        return a / b
    }
}


/*

实现 applyList 函数
op 是 '+' '-' '*' '/' 其中之一
oprands 是一个只包含数字的 array
根据 op 对 oprands 中的元素进行运算并返回结果
例如, 下面的调用返回 -4
var n = applyList('-', [3, 4, 2, 1])
log(n)
// 结果是 -4, 用第一个数字减去所有的数字
*/
var applyList = function(op, oprands) {
    var result = oprands[0]
    for (var i = 1; i < oprands.length; i++) {
        var n = oprands[i]
        // 累加到 result
        result = apply(op, result, n)
    }
    return result
}


/*

实现 applyCompare 函数
参数如下
expression 是一个 array(数组), 包含了 3 个元素
第一个元素是 op, 值是 '>' '<' '==' 其中之一
剩下两个元素分别是 2 个数字
根据 op 对数字运算并返回结果(结果是 true 或者 false)
*/
var applyCompare = function(expression) {
    var op = expression[0]
    var a = expression[1]
    var b = expression[2]
    if (op == '<') {
        return a < b
    }
    if (op == '>') {
        return a > b
    }
    if (op == '==') {
        return a == b
    }
}


/*

实现 applyOps 函数
参数如下
expression 是一个 array
expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
根据 expression 运算并返回结果
*/
var applyOps = function(expression) {
    var op = expression[0]
    if (op == '+' || op == '-' || op == '*' || op == '/' ) {
        var oprands = expression.slice(1)
        return applyList(op, oprands)
    } else if(op == '<' || op == '>' || op == '==') {
        return applyCompare(expression)
    }
}
