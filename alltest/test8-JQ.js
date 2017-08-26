// 自定义一个log 函数
var log = function() {
    console.log.apply(console, arguments);
}


// 给addbutton绑定事件  添加todo
var  bindEventAdd = function() {
    $('#id-button-add').on('click', function() {
        var task = $('#id-input-todo').val()
        var  todo = {
            'task': task,
            'time': currentTime(),
        }
        todoList.push(todo)
        saveTodos()
        insertTodo(todo)
    })
}
var  bindEventButton = function() {
    var todoContainer = $('#id-div-container')
    // 完成按钮点击事件
    todoContainer.on('click', '.todo-done', function(event){
        $(this).parent().toggleClass('done')
    })
    todoContainer.on('click', '.todo-delete',function(event){
        log('delete',$(this).parent())
        $(this).parent().remove()
        var index = $(this).parent().index()
        todoList.splice(index, 1)
        saveTodos()
    })
    todoContainer.on('click', '.todo-edit', function(event){
        log('edit',$(this).parent().find('.todo-label').attr('contenteditable'))
        $(this).parent().find('.todo-label').attr('contenteditable', true)
        $(this).parent().find('.todo-label').focus()
    })
}

var bindEventEnter = function() {
    var todoContainer = $('#id-div-container')
    todoContainer.on('keydown', '.todo-label', function(event){
        log('this',$(this))
        log('event.key',event.key)
        if (event.key === 'Enter') {
            event.preventDefault()
            event.target.blur()
            $(event.target).attr('contenteditable', false)
            log('this',$(this))
            var index = $(this).parent().index()
            todoList[index].task = $(this).html()
            saveTodos()
        }
    })
}


// var bindEventBlur = function() {
//     var todoContainer = $('#id-div-container')
//     todoContainer.on('blur', 'todo-label', function(event){
//          $(event.target).attr('contenteditable', false)
//          //更新 todo.task
//          var index =$(event.target).closest('todo-cell').index()
//          todoList[index].task = $(event.target).html()
//          saveTodos()
//     })
// }

// 本地存储todoList
var saveTodos = function() {
    log('save',todoList)
    var s = JSON.stringify(todoList)
    localStorage.todoList = s
}

//加载todolist
var loadTodos = function() {
    log('load')
    var s = localStorage.todoList
    return JSON.parse(s)
}
// 添加todo函数
var insertTodo = function(todo) {
    var t = templateTodo(todo)
    $('#id-div-container').append(t)
}

// 创建todo函数
var templateTodo = function(todo) {
    var t = `
    <div class='todo-cell'>
        <button class='todo-done'>完成</button>
        <button class='todo-delete'>删除</button>
        <button class='todo-edit'>编辑</button>
        <span class='todo-label'contenteditable='false'>${todo.task}</span>
        <span>${todo.time}</span>
    </div>
    `
    return t
}

// 创建时间函数
var currentTime = function() {
    var d = new Date()
    var month = d.getMonth() + 1
    var date = d.getDate()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    var timeString = `${month}/${date} ${hours}:${minutes}:${seconds}`
    return timeString
}

var bindEvents = function() {
    // 添加 todo
    bindEventAdd()
    // 文本框输入 todo 按回车保存
    bindEventEnter()
    // 完成按钮和删除按钮
    bindEventButton()
    // 文本框失去焦点后保存 todo
    // bindEventBlur()
}

var initTodos = function() {
    todoList = loadTodos()
    for (var i = 0; i < todoList.length; i++) {
        var todo = todoList[i]
        insertTodo(todo)
    }
}

var todoList = []

var __main = function() {
    bindEvents()
    initTodos()
}


__main()
