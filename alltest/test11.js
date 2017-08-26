
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
