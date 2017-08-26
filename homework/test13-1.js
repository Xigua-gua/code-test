var log = function() {
    console.log.apply(console, arguments)
}

var checkLogin = function() {
    var loginButton = document.querySelector('#id-button-login')
    var user = document.querySelector('#id-input-username')
    loginButton.addEventListener('click',function(){
        var userValue = user.value
        var check = document.querySelector('.check')
        log('userValue--->',userValue)
        if (clicked(userValue)) {
            check.style.display = 'none'
            log('检查合格')
        }else{
            check.style.display = 'inline'
        }
    })
}

var clicked = function(userValue) {
    var w = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var x = '0123456789'
    var y = '_'
    var char = w+x+y
    var s = userValue
    var len = s.length
    var result = true
    if (userValue ='') {
        result = false
    }
    if (len < 2||len > 10) {
        result = false
    }
    if (result) {
        for (var i = 0; i < len; i++) {
            if (!char.includes(s[i])) {
                result = false
                break
            }else if (!w.includes(s[0])) {
                result = false
            }else if (!(x+w).includes(s[len-1])) {
                result = false
            }else {
                result = true
            }
        }
    }
    return result
}

checkLogin()
