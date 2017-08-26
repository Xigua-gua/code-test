// 2016/10/05
//
// 作业 9
// ========
//

var log = function() {
    console.log.apply(console, arguments)
}

// 作业 1
//
var unique = function(a) {
    /*
    a 是一个 array
	返回一个 array, 包含了 a 中所有元素, 且不包含重复元素
    例如 a 是 [1, 2, 3, 1, 3, 5]
    返回 [1, 2, 3, 5]
    */
    var array = []
    for (var i = 0; i < a.length; i++) {
        if (!array.includes(a[i])) {
            array.push(a[i])
        }
    }
    return array
}

// 注意, 要自行实现 arrayEquals 来判断两个数组是否相等
// ensureEqual(unique([1, 2, 3, 1, 3, 5]), [1, 2, 3, 5]), 'test 1')
// ensureEqual(unique([1, 1, 3, 3, 1, 3]), [1, 3]), 'test 2')


// 作业 2
//
var intersection = function(a, b) {
    /*
    a b 都是 array

    返回一个 array, 里面的元素是同时出现在 a b 中的元素
    这个 array 中不包含重复元素
    */
    var array = []
    for (var i = 0; i < a.length; i++) {
        var element = a[i]
        if (b.includes(element)) {
            array.push(element)
        }
    }
    var result = unique(array)
    return result
}


// 作业 3
//
var union = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是所有出现在 a b 中的元素
    这个 array 中不包含重复元素
    /*/
    var array = []
    for (var i = 0; i < a.length; i++) {
        array.push(a[i])
    }
    for (var i = 0; i < b.length; i++) {
        array.push(b[i])
    }
    var result = unique(array)
    return result
}


// 作业 4
//
var difference = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是
    所有在 a 中有 b 中没有的元素
    这个 array 中不包含重复元素
    /*/
    var array = []
    for (var i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            array.push(a[i])
        }
    }
    var result = unique(array)
    return result
}


// 作业 5
//
var differenceAll = function(a, b) {
    /*/
    a b 都是 array

    返回一个 array, 里面的元素是
    所有在 a b 中的非公共元素
    这个 array 中不包含重复元素
    /*/
    var array1 = difference(a, b)
    var array2 = difference(b, a)
    for (var i = 0; i < array2.length; i++) {
        array1.push(array2[i])
    }
    return array1
}


// 作业 6
//
var isSubset = function(a, b) {
    /*/
    a b 都是 array

	检查是否 a 中的每个元素都在 b 中出现
    返回 bool
    /*/
    var result = true
    for (var i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            result =false
            break
        }
    }
    return result
}

var isSubset2 = function(a, b) {
    // 取交集
    var l = intersection(a, b)
    // 检查 l a 长度是否一样
    return l.length === a.length
}

// 下面的题目都是 DOM 操作题目
// =====
//
// 作业 7
//
/*
element 是一个标签
html 是一段 html 字符串
把 html 作为子元素插入到 element 的末尾
上课一直在用这个函数
*/
var appendHtml = function(element, html) {
    log('test7 已执行')
    element.insertAdjacentHTML('beforeend', html);
}


// 作业 8
//
/*
element 是一个标签
eventName 是一个 string, 表示事件的名字
callback 是一个函数
用法如下, 假设 button 是一个标签
bindEvent(button, 'click', function(){
})
*/
var bindEvent = function(element, eventName, callback) {
    log('test8 已执行')
    var element = document.querySelector('element')
    element.addEventListener(eventName, callback)
}


// 作业 9
//
/*
element 是一个标签
eventName 是一个 string, 表示事件的名字
callback 是一个函数
responseClass 是一个字符串

在 element 上绑定一个事件委托
只会响应拥有 responseClass 类的元素
*/

var bindEventDelegate = function(element,eventName,callback,responseClass) {
    // 通过 event.target 的 class 来检查点击的是什么
    log('test 9 responseClass--->',responseClass)
    var todoContainer = document.querySelector(element)
    var func = function() {
        log ('event.target---->',event.target)
        if ( event.target.classList.contains(responseClass) ) {
            log('test9 执行')
            callback()
        }
    }
    todoContainer.addEventListener(eventName, func)
}

var bindEventDelegate2 = function(element, eventName, callback, responseClass) {
    /*
    element 是一个标签
    eventName 是一个 string, 表示事件的名字
    callback 是一个函数
    responseClass 是一个字符串

    在 element 上绑定一个事件委托
    只会响应拥有 responseClass 类的元素
    */
    element.addEventListener(eventName, function(event){
        var target = event.target
        if(target.classList.contains(responseClass)) {
            callback(event)
        }
    })
}

// 作业 10
//
/*
selector 是一个 string, 选择器, 有如下三种取值
    1, 标签选择器, 如 'div'
    2, class 选择器, 如 '.red'
    3, id 选择器, 如 '#id-input-name'
html 是一段 html 字符串
把 html 作为子元素插入到 selector 选中的所有元素的末尾
*/
var append = function(selector, html) {
    log('test10 已执行')
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.insertAdjacentHTML('beforeend', html)
    }
}


// 作业 11
//
/*
selector 是一个 string, 选择器, 有如下三种取值
    1, 标签选择器, 如 'div'
    2, class 选择器, 如 '.red'
    3, id 选择器, 如 '#id-input-name'
eventName 是一个 string, 表示事件的名字
callback 是一个函数
responseClass 是一个字符串, 这个参数可以为空

给 selector 选中的所有元素绑定 eventName 事件
当 responseClass 给出的时候, callback 只会响应拥有 responseClass 类的元素
当 responseClass 没有给的时候, callback 直接响应

这题做不出来就放弃
*/
var bindAll = function(selector, eventName, callback, responseClass) {
    log('test-11 responseClass--->',responseClass)
    var elements = document.querySelectorAll(selector)
    element.addEventListener(eventName, function(event){
        var target = event.target
        if(target.classList.contains(responseClass)) {
            callback(event)
        }
    })
}


// =====
// 提示
// =====
/*/

1, unique
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在新数组中出现
如果没出现就 push


2, intersection
创建一个新数组
遍历 a
对于 a 中的每个元素, 判断是否在 b 中出现
如果出现就 push 到新数组


3, union
有问题单独提问


4, difference
有问题单独提问


5, differenceAll
对 a b 分别 difference 并 push 到新数组


6, isSubset
循环判断


7, appendHtml
上课用的函数的封装


8, bindEvent
上课用函数的简单封装


9, bindEventDelegate
事件委托的简单封装


10, append
选择, 然后循环 appendHtml


11, bindAll
这题做不出来就算了
/*/
