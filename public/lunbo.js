/*!
 * textSlider 0.1
 * Copyright (c) 2014 tnnyang http://tnnyang.cnblogs.com/
 * Dependence Zepto v1.1.6 & fx.js & touch-0.2.14.min.js
 * fork from Author 小坏
 *
 * 也可以用 jQuery 代替 Zepto v1.1.6 & fx.js 
 * touchjs 模拟 swipeup, swipedown 等触摸事件
 * @see http://www.tuicool.com/articles/3mUFVnJ
 */
(function($) {
  $.fn.textSlider = function(options) {
    //默认配置
    var defaults = {
      speed: 40, //滚动速度,值越大速度越慢
      line: 1 //滚动的行数
    };
    var opts = $.extend({}, defaults, options);
    var $timer;

    function marquee(obj, _speed, lineHeight) {
      var top = 0;
      var margintop;
      clearInterval($timer);
      $timer = setInterval(function() {
        top++;
        margintop = 0 - top;
        obj[0].offsetHeight;
        obj.find("ul").animate({
          marginTop: margintop
        }, 0, function() {
          var $this = $(this);
          var s = Math.abs(parseInt($(this).css("margin-top")));
          if (s >= lineHeight) {
            top = 0;
            $this.css("margin-top", 0); //确保每次都是从0开始，避免抖动
            $this.find("li").slice(0, 1).appendTo($this);
          }
        });
      }, _speed);
    }
    
    this.each(function() {
      var speed = opts["speed"],
        line = opts["line"],
        _this = $(this);
      var $ul = _this.find("ul");
      var lineHeight = parseInt( $ul.find('li').css("height") );
      function go() {
        if ($ul.height() > _this.height()) {
          marquee(_this, speed, lineHeight);
        }
      }
      
      go();
      
      //触摸开始
      _this.on('touchstart', function(ev) {
        // ev.preventDefault();
        clearInterval($timer);
      });
      //向上滑动
      _this.find('ul').on('swipeup', function(ev) {
        ev.preventDefault();
        clearInterval($timer);
        if ($ul.height() > _this.height()) {
          for (i = 0; i < opts.line; i++) {
            $ul.find("li").first().appendTo($ul);
          }
          $ul.css("margin-top", 0);
        }
        go();
      });
      //向下滑动
      _this.find('ul').on('swipedown', function(ev) {
        ev.preventDefault();
        clearInterval($timer);
        if ($ul.height() > _this.height()) {
          for (i = 0; i < opts.line; i++) {
            $ul.find("li").first().before($ul.find("li").last());
          }
          $ul.css("margin-top", 0);
        }
        go();
      });
      //触摸结束
      _this.on('touchend', function(ev) {
        go()
      });
    });
  }
})($);
