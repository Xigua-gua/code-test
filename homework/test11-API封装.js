
// 使用面向对象方式 封装Ajax
// 设置TodoApi类
var TodoApi = function() {
    this.baseUrl = 'http://vip.cocode.cc:3000/todo'
    this.qq = '646293529'
}

// 给TodoApi类定义  get方法(封装Ajax的GET请求)
TodoApi.prototype.get = function(path, callback) {
    // 创建请求地址 url
    var url = `${this.baseUrl}/${this.qq}` + path
    // 创建 AJAX 对象
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open('GET', url, true)
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    // 发送请求
    r.send()
}

// 给TodoApi类定义  post方法(封装Ajax的POST请求)
TodoApi.prototype.post = function(path, data, callback) {
    // 创建请求地址 url
    var url = `${this.baseUrl}/${this.qq}` + path
    // 创建 AJAX 对象
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open( 'POST', url, true )
    // 设置发送的数据的格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    // 将请求数据用 JOSN 序列化为字符串
    var d = JSON.stringify(data)
    // 发送请求数据
    r.send(d)
}

// 给TodoApi类定义  all方法 用于获取数据
TodoApi.prototype.all = function(callback) {
    // 设置获取路径
    var path = '/all'
    // 调用get方法 (GET请求) 获取数据
    this.get(path, callback)
}

// 给TodoApi类定义  add方法 用于添加数据
TodoApi.prototype.add = function(todo, callback) {
    // 设置添加路径
    var path = '/add'
    // 调用post方法 (POST请求)添加数据
    this.post(path, todo, callback)
}

// 给TodoApi类定义  update方法 用于更新数据
TodoApi.prototype.update = function(todo, callback) {
    // 设置更新路径(todo里面包含id)
    var path = '/update/' + todo.id
    // 调用post方法 (POST请求)更新数据
    this.post(path, todo, callback)
}

// 给TodoApi类定义  delete方法 用于删除数据
TodoApi.prototype.delete = function(todoId, callback) {
    // 设置删除路径
    var path = '/delete/' + todoId
    // 调用get方法 (GET请求) 返回删除的数据
    this.get(path, callback)
}


//test - get
var api = new TodoApi()

var foo = function(x) {
    console.log(x)
}
api.all(foo)

var task = {
    task : 'study',
}
api.add(task, foo)

api.update(task, foo)
