======
//
var log = function() {
    console.log.apply(console, arguments);
}



var options = ['China', 'Japan', 'England','ewqe','123']
// test 1
//
// 实现函数 GuaOptions1, 功能见注释描述
var GuaOptions1 = function(options) {
    /*
    options 是一个包含 string 的数组
    本函数对每个 string 生成一个复选框和文本
    append 到 body 中
    示意图如下

    +-+
    | | string
    +-+

    */
    var t = ''
    $.map(options, function(value){s
        t += `<label class="pure-checkbox">
               <input  type='checkbox' value=${value}>${value}
              </label></br>`
    })
    $('.fuxr').append(t)
}

// GuaOptions1(options)
// test 2
//
var GuaOptions2 = function(options) {
    /*
    options 是一个包含 string 的数组
    全选 和 反选
    */
    GuaOptions1(options)
    $('.fuxr').append(`<button id='qrxr' class='pure-button pure-button-primary' type='button'>全选</button>`)
    $('.fuxr').append(`<button id='fjxr' class='pure-button pure-button-primary' type='button'>反选</button>`)
    $('.fuxr').append(`<button id='iuuihw' class='pure-button pure-button-primary' type='button'>初始化</button>`)
    $('#iuuihw').on('click', function(){
        var input = $("input:checkbox")
        $.map(input, function(value){
            value.checked = false
        })
    })
    $('#qrxr').on('click', function(){
        var input = $("input:checkbox")
        $.map(input, function(value){
            value.checked = true
        })
    })
    $('#fjxr').on('click', function(){
        var input = $("input:checkbox")
        $.map(input, function(value){
            if(value.checked) {
                value.checked = false
            }else {
                value.checked = true
            }
        })
    })
}
// GuaOptions2(options)

// test 3
//

var options1 ={
                'text': 'Japan',
                'checked': true,
             }

var GuaOptions3 = function(options1) {
    /*
    options 是一个包含如下 object 的数组
    text 是文本描述
    checked 是布尔值, 表示是否打勾
    {
    	'text': 'string',
        'checked': true,
    }
	并且要求在初始化的时候要按照相应的值对相应的复选框打勾
    */
    GuaOptions2(options)
    var input = $("input:checkbox")
    input.each(function(i, e){
        var val = e.value
        if (val == options1.text) {
            input[i].checked = true
        }
    })
}
// GuaOptions3(options1)

// test 4
//
var GuaOptions4 = function(options1) {
    /*
    save 按钮点击的时候会保存当前的 options 状态到 localStorage(用 JSON)
    load 按钮点击的时候会从 localStorage 中读取保存的信息并更新界面
    */
    GuaOptions3(options1)
    $('.fuxr').append(`<button id='save' class='pure-button pure-button-primary' type='button'>Save</button>`)
    $('.fuxr').append(`<button id='load' class='pure-button pure-button-primary' type='button'>Load</button>`)
    var input = $('input:checkbox')
    $('#save').on('click', function(){
        var options = []
        // text 数组
        var array= []
        input.each(function(i, e){
            var val = e.value
            array.push(val)
        })
        // checked 数组
        var message = []
        $.map(input, function(value){
            var bool = value.checked
            message.push(bool)
        })
        for (var i = 0; i < input.length; i++) {
            var obj = {}
            obj.text = array[i]
            obj.checked = message[i]
            options.push(obj)
        }
        log('save options', options)
        var s = JSON.stringify(options)
        localStorage.options = s
    })
    $('#load').on('click', function(){
        var s = localStorage.options
        var options = JSON.parse(s)
        log('load options',options)
        $.each(input ,function(i, e){
            e.checked = options[i].checked
        })
    })
}
GuaOptions4(options1)


// var GuaOptions4 = function(options1) {
//     /*
//     save 按钮点击的时候会保存当前的 options 状态到 localStorage(用 JSON)
//     load 按钮点击的时候会从 localStorage 中读取保存的信息并更新界面
//     */
//     GuaOptions3(options1)
//     $('.fuxr').append(`<button id='save' class='pure-button pure-button-primary' type='button'>Save</button>`)
//     $('.fuxr').append(`<button id='load' class='pure-button pure-button-primary' type='button'>Load</button>`)
//     var input = $('input:checkbox')
//     $('#save').on('click', function(){
//         var message = []
//         $.map(input, function(value){
//             var bool = value.checked
//             message.push(bool)
//         })
//         log('save message', message)
//         var s = JSON.stringify(message)
//         localStorage.message = s
//     })
//     $('#load').on('click', function(){
//         // 再更新界面加载信息
//         var s = localStorage.message
//         var message = JSON.parse(s)
//         log('load message',message)
//         $.each(input ,function(i, e){
//             input[i].checked = message[i]
//         })
//     })
// }
