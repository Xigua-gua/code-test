// 2016/10/09
//
// ============
// 作业 11
//
//

/*
这次作业分 2 块

1, 出一份到 11 课为止学习的内容笔记, 注明自己掌握得不够好的东西

2, 在 vip.cocode.cc:3000/ 可以写代码, 实现一个用 ajax 和后端交互数据的 todo

如果你不会这道题, 请等待我进一步发说明, 或者发帖讨论


'''
todo 后端程序提供了 4 个 API, 说明如下


1, 获得所有的 todo, 返回的是一个数组

GET
http://vip.cocode.cc:3000/todo/<你的qq+号>/all


2, 发送 JSON 格式字符串来创建一个 todo
要求设置 Content-Type 为 application/json

POST
{"task": "study"}
http://vip.cocode.cc:3000/todo/<你的qq号>/add


3, 发送 JSON 格式字符串来更新一个 todo
要求设置 Content-Type 为 application/json

POST
{"task": "study"}
http://vip.cocode.cc:3000/todo/<你的qq号>/update/<todo_id>


4, 删除一个 todo
GET
http://vip.cocode.cc:3000/todo/<你的qq号>/delete/<todo_id>

'''

*/
//GET 请求
var  getTodos = function() {
    var r = new XMLHttpRequest()
    r.open('GET', 'http://vip.cocode.cc:3000/todo/646293529/all', true)
    //log(r)
    r.onreadystatechange = function(event) {
        //log(event)
        //log(event.target)
        if(r.readyState === 4) {
            var re = JSON.parse(r.response)
            console.log(r.response)
        }
    }
    r.send()
}

//POST 请求
var postTodo = function(todo) {
    var r = new XMLHttpRequest()
    r.open('POST', 'http://vip.cocode.cc:3000/todo/646293529/add', true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function(event) {
        console.log('r--->', r)
        if (r.readyState === 4) {
            console.log('r.response--->', r.response)
            var response = JSON.parse(r.response)
            console.log(response)
        }
    }
    r.send(todo)
}

//创建 todo
var addTodos = function(s) {
    var todo = {"task": s}
    var t = JSON.stringify(todo)
    postTodo(t)
}

// 发送请求更新的 todo id
var updateTodo = function(todo, id) {
    var r = new XMLHttpRequest()
    var url = 'http://vip.cocode.cc:3000/todo/646293529/update/' + id
    r.open('POST', url, true)
    r.setRequestHeader('Content-Type', 'application/json')
    r.onreadystatechange = function(event) {
        console.log('r--->', r)
        if (r.readyState === 4) {
            console.log('r.response--->', r.response)
            var response = JSON.parse(r.response)
            console.log(response)
        }
    }
    r.send(todo)
}

//更新todo
var update = function(id, s) {
    var todo = {"task": s}
    var t = JSON.stringify(todo)
    updateTodo(t, id)
}

//删除 一个todo
var deleteTodo = function(id) {
    var r = new XMLHttpRequest()
    var url = 'http://vip.cocode.cc:3000/todo/646293529/delete/' + id
    r.open('GET', url, true)
    r.onreadystatechange = function(event) {
        if(r.readyState === 4) {
            var re = JSON.parse(r.response)
            console.log(r.response)
        }
    }
    r.send()
}
