

// 弹窗样式
var styleAlert = `
        <style class='alert-style'>
            .modal-alert {
                text-align: center;
            }
            .modal-content {
                margin: 0 auto;
                width: 300px;
            }
            .modal-title {
                color: black;
            }
            .modal-message {
                margin: 10px 5px;
                background-color: black;
                color: red;
            }
            .modal-alert {
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                background: black;
                opacity: 0.8;
            }
            .vertical-center {

            }
        </style>
        `

// 第一题的 弹窗 todo
var todo1 = function(title, message) {
    var t = `
    <div class="modal-alert">
        <div class="modal-content .vertical-center">
            <div class="modal-title">
                <span>${title}</span>
            </div>
            <div class='modal-message'>
             <p>${message}</p>
            </div>
            <div>
            <button class='ok-button' type="button" name="button">Ok</button>
            </div
        </div>
    </div>
        `
    return t
}

// 第二题的 弹窗 todo
var todo2 = function(title, message) {
    var t = `
    <div class="modal-alert">
        <div class="modal-content">
            <div class="modal-title">
                <span>${title}</span>
            </div>
            <div class='modal-message'> <p>${message}</p> </div>
            <br>
            <div class='modal-control'>
            <button class='ok-button' type="button" name="button">Ok</button>
            <button class='cancel-button' type="button" name="button">Cancel</button>
            </div>
        </div>
    </div>
        `
    return t
}

// 第三题的 弹窗 todo
var todo3 = function(title) {
    var t = `
    <div class="modal-alert">
        <div class="modal-content">
            <div class="modal-title">
                <span>${title}</span>
            </div>
            <div class='modal-input'>
                <input class="input-alert" name="name" value="">
            </div>
            <div class='modal-control'>
                <button class='ok-button' type="button" name="button">Ok</button>
                <button class='cancel-button' type="button" name="button">Cancel</button>
            </div>
        </div>
    </div>
        `
    return t
}

// 第四题的 弹窗 todo
var todo4 = function(title) {
    var t = `
    <div class="modal-alert">
        <div class="modal-content">
            <div class="modal-title">
                ${title}
            </div>
            <br>
            <div class='modal-control'>
                <button class='cancel-button' type="button" data-index="-1">Cancle</button>
            </div>
        </div>
    </div>
                `
    return t
}

// test 1
//
var GuaAlert = function(title, message) {
    /*
    title 是 string
    message 是 string

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮
    点击 OK 按钮关闭弹窗
    */
    // 点击 生成弹窗
    var styleAlert = `
            <style class='alert-style'>
                .modal-alert {
                    text-align: center;
                }
                .modal-content {
                    margin: 0 auto;
                    width: 300px;
                }
                .modal-title {
                    color: black;
                }
                .modal-message {
                    margin: 10px 5px;
                    background-color: black;
                    color: red;
                }
                .modal-alert {
                    position: fixed;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    background: black;
                    opacity: 0.8;
                }
                .vertical-center {

                }
            </style>
            `
    $('#alert-button').on('click', function(event){
        console.log('alert  弹窗出现')
        // var button = $(event.target)
        var head = $('head')
        var body = $('body')
        head.append(styleAlert)
        body.append(todo1(title, message))
    })
    //点击 OK 弹窗消失
    $('body').on('click', '.ok-button', function(event){
        console.log('OK  弹窗消失');
        var button = $(event.target)
        button.closest('.modal-alert').remove()
        $('.alert-style').remove()
    })
    //点击 Cancel 弹窗消失
    $('body').on('click', '.cancel-button', function(event){
        console.log('Cancle  弹窗消失');
        var button = $(event.target)
        button.closest('.modal-alert').remove()
        $('.alert-style').remove()
    })
}

// test 2
//
var GuaAlert2 = function(title, message, callback2) {
    /*
    title 是 string
    message 是 string
    callback 是一个接受一个 bool 类型参数的函数

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
    // 点击 生成弹窗
    $('#alert-button').on('click', function(event){
        console.log('alert  弹窗出现')
        // var button = $(event.target)
        var head = $('head')
        var body = $('body')
        head.append(styleAlert)
        body.append(todo2(title, message))
    })
    //点击 OK 弹窗消失
    $('body').on('click', '.ok-button', function(event){
        // console.log('OK  弹窗消失');
        callback2(true)
        var button = $(event.target)
        button.closest('.modal-alert').remove()
        $('.alert-style').remove()
    })
    //点击 Cancel 弹窗消失
    $('body').on('click', '.cancel-button', function(event){
        // console.log('Cancle  弹窗消失');
        callback2(false)
        var button = $(event.target)
        button.closest('.modal-alert').remove()
        $('.alert-style').remove()
    })
}

var callback2 = function(clickok) {
    if (clickok) {
        console.log('点击 OK 关闭弹窗')
    }else {
        console.log('点击 Cancle 关闭弹窗')
    }
}

// test 3
//
var GuaPrompt = function(title, callback3) {
    /*
    title 是 string
    callback 是一个如下的函数
    function(clickOk, input) {
        // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
        // input 是 string
    }

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题
    包含一个 input 让用户输入信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
    // 点击 生成弹窗
    $('#alert-button').on('click', function(event){
        console.log('alert  弹窗出现')
        // var button = $(event.target)
        var head = $('head')
        var body = $('body')
        head.append(styleAlert)
        body.append(todo3(title))
    })
    //点击 OK 弹窗消失
    $('body').on('click', '.ok-button', function(event){
        // console.log('OK  弹窗消失');
        var input = $('.input-alert').val()
        var button = $(event.target)
        callback3(true,input)
        button.closest('.modal-alert').remove()
        $('.alert-style').remove()
    })
    //点击 Cancel 弹窗消失
    $('body').on('click', '.cancel-button', function(event){
        // console.log('Cancle  弹窗消失');
        callback3(false)
        var button = $(event.target)
        button.closest('.modal-alert').remove()
        $('.alert-style').remove()
    })
}

var callback3 = function(clickok, input) {
    if (clickok) {
        console.log('点击 OK 关闭弹窗')
        console.log(`输入框里的信息:  ${input}`);
    }else {
        console.log('点击 Cancle 关闭弹窗')
    }
}


// test 4
//
var GuaActions = function(title, actions, callback4) {
    /*
    title 是 string
    actions 是一个包含 string 的数组
    callback 是一个如下的函数
    function(index) {
        // index 是下标, 具体如下
        // index 如果是 -1 表明用户点击了 cancel
    }

    这个函数生成一个弹窗页面
    弹窗包含 title 作为标题
    actions 里面的 string 作为标题生成按钮
    弹窗还包含一个 Cancel 按钮
    点击按钮的时候, 调用 callback(index)
    */
    // 点击 生成弹窗
    $('#alert-button').on('click', function(event){
        console.log('alert  弹窗出现')
        // var button = $(event.target)
        var head = $('head')
        var body = $('body')
        head.append(styleAlert)
        body.append(todo4(title))
        var modalButtons = $(".modal-content")
        $.each(actions, function(i, e){
            var button = `<br><button class='actions-button' type="button" data-index="${i}">${e}</button>`
            modalButtons.append(button)
        })
    })
    $('body').on('click', '.cancel-button', function(event){
        callback4(-1)
        var button = $(event.target)
        button.closest('.modal-alert').remove()
        $('.alert-style').remove()
    })
    $('body').on('click', '.actions-button',function(event){
        var button = $(event.target)
        var index = button.data('index')
        callback4(index)
    })
}

var callback4 = function(index) {
    if (index == -1) {
        console.log('点击 Cancle 按钮,index为-1');
    }
    var len = actions.length
    if (index >= 0 && index < len) {
        console.log(`点击了actions的第${index+1}个元素按钮 ${actions[index]}`);
    }
}


// GuaAlert(title, message)
// GuaAlert2(title, message, callback2)
// GuaPrompt(title,callback3)
// GuaActions(title, actions, callback4)

var test1 = function() {
    GuaAlert(title, message)
}

var test2 = function() {
    GuaAlert2(title, message, callback2)
}

var test3 = function() {
    GuaPrompt(title,callback3)
}

var test4 = function() {
    GuaActions(title, actions, callback4)
}
/*










*/
