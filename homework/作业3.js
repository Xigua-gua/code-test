// 16/09/20
// 作业 3
//
// 作业开始
// 注意, 作业中提到的颜色我们不关心

// 1
// 实现一个矩形函数
// x y 是矩形左上角坐标
// w h 是宽高
// rect(x, y, w, h)
var rect = function(x,y,w,h) {
    jump(x,y)
    setHeading(0)
    var i = 0
    while(i<2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}

// 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)
var center_rect = function(x,y,w,h) {
    var x1 = x - w/2
    var y1 = y - h/2
    jump(x1, y1)
    setHeading(0)
    var i = 0
    while(i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}

// 3
// 实现一个圆形函数
// x y 是圆心坐标
// r 是半径
// circle(x, y, r)
#
// 提示, 我们以正 36 边形为圆
var circle = function(x, y, r) {
    jump(x,y)
    setHeading(0) // 箭头设置向右
    var pi = 3.14
    var n = 36 //  边数越大越接近圆
    c = 2*pi*r // 圆的周长
    l = c/n // 边长 l
    left(90+180/n)
    penup()
    forward(r)
    pendown()
    setHeading(0)
    var angle = 360/n
    var i = 0
    while (i < n){
        forward(l)
        right(angle)
        i++
    }
}
circle(50,40,20)
// 4
// 实现一个五角星函数
// x y 是五角星横边左边坐标
// length 是一条线的长度
// wujcxy(x, y, length)
// 有内部线条
var wujcxy1= function(x, y, length) {
    jump(x, y)
    setHeading(0)
    var angle = 360/5
    var i = 0
    while (i<5) {
        forward(length)
        right(180-angle)
        i++
    }
}
wujcxy1(0,0,40)
// 无内部线条
var wujcxy2 = function(x, y, length) {
    jump(x, y)
    setHeading(0)
    var angle = 360/5
    var i = 0
    while (i < 5) {
        forward(length)
        left(angle)
        forward(length)
        right(2 * angle)
        i++
    }
}
wujcxy(0,0,40)

// 5
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()
#
// 注意, 你可以添加 x y w h 参数让国旗画在任意地方, 任意尺寸
// 注意, 以下所有国旗同理
var circle = function(x, y, r) {
    jump(x,y)
    setHeading(0) // 箭头设置向右
    var pi = 3.14
    var n = 36 //  边数越大越接近圆
    c = 2*pi*r // 圆的周长
    l = c/n // 边长 l
    left(90+180/n)
    penup()
    forward(r)
    pendown()
    setHeading(0)
    var angle = 360/n
    var i = 0
    while (i < n){
        forward(l)
        right(angle)
        i++
    }
}

var center_rect = function(x,y,w,h) {
    var x1 = x - w/2
    var y1 = y - h/2
    jump(x1, y1)
    setHeading(0)
    var i = 0
    while(i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}

var japan = function(x, y, w) {
    var h = w * 2/3
    center_rect(x, y, w, h)
    var r = 0.3 * h
    setPenColor('red')
    circle(x, y, r)
}
japan(0,0,160)
// 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（调用 5 次，不要求角度朝向，只要5个五角星即可）
// china()
var wujcxy2 = function(x, y, length) {
    jump(x, y)
    var angle = 360/5
    var i = 0
    while (i < 5) {
        forward(length)
        left(angle)
        forward(length)
        right(2 * angle)
        i++
    }
}
var center_rect = function(x,y,w,h) {
    var x1 = x - w/2
    var y1 = y - h/2
    jump(x1, y1)
    setHeading(0)
    var i = 0
    while(i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}
// (x, y) 为国旗矩形中心点坐标
var china = function(x, y, h) {
  	hide()
    var w = h * 3/2
    center_rect(x, y, w, h)
    var x1 = x - h*13/20
    var y1 = y - h*3/10
    var r1 = h * 3/20
     // 大五角星外接圆的半径 r1
    var lengthbig = r1 * Math.tan(36*Math.PI/180)
     // 大五角星 边长 lengthbig
    wujcxy2(x1, y1, lengthbig)
    // 大五角星的坐标 (x1, y1) 边长lengthbig
    var r2 = r1 / 3
    // 小五角星外接圆半径 r2
    var lengthsmall = r2 * Math.tan(36*Math.PI/180)
    // 小五角星 边长 lengthsmall
    var i = 0
    while (i < 2) {
        var x2 = x - h*3/10
        var y2 = y - h*2/5 + i*(h*7/20)
        setHeading(36)
        wujcxy2(x2, y2, lengthsmall)
        i++
    }
    var j = 0
    while (j < 2) {
        var x3 = x - h/5
        var y3 = y - h*3/10 + j*(h*3/20)
        setHeading(36)
        wujcxy2(x3, y3, lengthsmall)
        j++
    }
}
china(40,10,120)




// 7
// 实现一个函数画法国国旗
// france()
var rect = function(x, y, w, h){
    jump(x,y)
    setHeading(0)
    var i=0
    while(i<2){
      i++
      forward(w)
      right(90)
      forward(h)
      right(90)
    }
  }
var france = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    var width = w/3
    var height = h
    var x1 = width + x
    var y1 = y
    var x2 = width + x1
    var y2 = y
    setPenColor('blue')
    rect(x, y, width, height)
    setPenColor('black')
    rect(x1, y1, width, height)
    setPenColor('red')
    rect(x2, y2, width, height)
}
france(-100,-100,200,180)


// 8
// 画德国国旗
// germany()
var rect = function(x, y, w, h){
    jump(x,y)
    setHeading(0)
    var i=0
    while(i<2){
      i++
      forward(w)
      right(90)
      forward(h)
      right(90)
    }
  }
var germany = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    var width = w
    var height = h/3
    setPenColor('black')
    rect(x, y, width, height)
    setPenColor('red')
    var x1 = x
    var y1 = y + height
    rect(x1, y1, width, height)
    setPenColor('gold')
    var x2 = x
    var y2 = y1 + height
    rect(x2, y2, width, height)
}
germany(-100,-100,200,180)

// 9
// 画 冈比亚国旗
// gambia()
var rect = function(x, y, w, h){
    jump(x,y)
    setHeading(0)
    var i=0
    while(i<2){
      i++
      forward(w)
      right(90)
      forward(h)
      right(90)
    }
  }
var gambia = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    var h1 = h/3
    var h2 = h/9
    var h3 = h * 2/9
    var i = 0
    while (i<2) {
        var x1 = x
        var y1 = y + i*(h1+2*h2+h3)
        rect(x1, y1, w, h1)
        i++
    }
    var j = 0
    while(j<2) {
        var x2 = x
        var y2 = y + h1 + j*(h2+h3)
        rect(x2, y2, w, h2)
        j++
    }
    var x3 = x
    var y3 = y + h1 + h2
    rect(x3, y3, w, h3)
}
gambia(-100,-100,200,180)




// 10
// 画 瑞士国旗
// switzerland()
var shizi = function(x, y, w, h) {
    jump(x, y)
    setHeading(90)
    setPenColor('red')
    var i = 0
    while (i<2) {
        right(90)
        forward(w)
        left(90)
        forward(h)
        right(90)
        forward(w)
        right(90)
        forward(h)
        left(90)
        forward(w)
        right(90)
        forward(h)
        i++
    }
}
var switzerland = function(x, y, l) {
    jump(x, y)
    setHeading(0)
    var len = l
    var x1 = x + 3*len/16
    var y1 = y + 13*len/32
    var width = 7*len/32
    var height = 3*len/16
    var i = 0
    while (i < 4) {
        forward(len)
        right(90)
        i++
    }
    shizi(x1, y1, width, height)
}
// 11
// 画朝鲜国旗
// 分别是 圆 矩形 五角星
// 提示, 使用之前定义的函数
// northkorea()
var rect = function(x, y, w, h){
    jump(x,y)
    setHeading(0)
    var i=0
    while(i<2){
      i++
      forward(w)
      right(90)
      forward(h)
      right(90)
    }
  }

  var wujcxy2 = function(x, y, length) {
      jump(x, y)
      var angle = 360/5
      var i = 0
      while (i < 5) {
          forward(length)
          left(angle)
          forward(length)
          right(2 * angle)
          i++
      }
  }
  var circle = function(x, y, r) {
      jump(x,y)
      setHeading(0)     // 箭头设置向右
      var pi = 3.14
      var n = 36        //  边数越大越接近圆
      c = 2*pi*r        // 圆的周长
      l = c/n           // 边长 l
      left(90+180/n)
      penup()
      forward(r)
      pendown()
      setHeading(0)
      var angle = 360/n
      var i = 0
      while (i < n){
          forward(l)
          right(angle)
          i++
      }
  }


var northkorea = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    var h1 = h/6
    var h2 = h/36
    var h3 = h * 11/18
    setPenColor('blue')
    var i = 0
    while (i<2) {
        var x1 = x
        var y1 = y + i*(h1+2*h2+h3)
        rect(x1, y1, w, h1)
        i++
    }
    setPenColor('black')
    var j = 0
    while(j<2) {
        var x2 = x
        var y2 = y + h1 + j*(h2+h3)
        rect(x2, y2, w, h2)
        j++
    }
    setPenColor('red')
    var x3 = x
    var y3 = y + h1 + h2
    rect(x3, y3, w, h3)
    // 圆心 坐标 (xc, yc)
    var xc = x + w/3
    var yc = y + h/2
    // 圆的半径
    r = h*2/9
    // 画圆
    circle(xc, yc, r)
    // 五角星的 顶点坐标 (xw, yw)
    var xw = x + w/3
    var yw = y + h*5/18
    var angle = 360/5
    // 五角星的 边长 length
    var length = r * Math.tan(36*Math.PI/180)
    // 画五角星
    right(angle)
    wujcxy2(xw, yw, length )
}

northkorea(-100,-100,280,240)
