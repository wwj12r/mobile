// WWJ
// zepto.js
// 2015.4.23
// verson 1.1(联动)

// zepto - swipe event - swipeUp:

// page1.on('swipeUp',function(){
// 	nextpage.call(this,fnStart,fnEnd)
// })

var pageMoving=false;
function nextpage(fnEnd, fnStart){
	if(pageMoving){return};
	pageMoving=true;
	fnStart && fnStart.call(this);
	$(this).next().show();
    $(this).anim({
        translateY:"-100%"
    },0.8,"ease",function(){
        $(this).removeClass('show').hide()
        $(this).next().addClass('show')
        pageMoving=false;
        $.isFunction(fnEnd) && fnEnd.call(this);
		var num=nav_item.eq($(this).index()).parent().children().length;
		nav_mitem.removeClass('on')
		nav_item.eq($(this).index()).parent().addClass('on');
		nav_mitem.css('height',nav_title.height())
		nav_item.eq($(this).index()).parent().css('height',num*nav_title.height())
        nav_item.removeClass('on')
        nav_item.eq($(this).index()).addClass('on');
    })
}

function prevpage(fnEnd, fnStart){
    var _this=this
	if(pageMoving){return};
	pageMoving=true;
	fnStart && fnStart.call(this);
	$(this).prev().show();
    $(this).prev().anim({
        translateY:"0"
    },0.8,"ease",function(){
        $(_this).removeClass('show').hide();
        $(_this).prev().addClass('show')
        pageMoving=false;
        $.isFunction(fnEnd) && fnEnd.call(this);
        console.log($(_this).index())
        if($(_this).index()===1){
        	// console.log($(_this).index())
			nav_mitem.css('height',nav_title.height())
	        nav_item.removeClass('on')
			nav_mitem.removeClass('on')
        }else{
			var num=nav_item.eq($(this).index()-1).parent().children().length;
			nav_mitem.removeClass('on')
			nav_item.eq($(this).index()-1).parent().addClass('on');
			nav_mitem.css('height',nav_title.height())
			nav_item.eq($(this).index()-1).parent().css('height',num*nav_title.height())
	        nav_item.removeClass('on')
	        nav_item.eq($(this).index()-1).addClass('on');
	    }
    })
}


// copy zepto.zsy.js http://mobi.mconnect.cn/auditeaser/
// 加载
// $.loader()
$.loader = function(selector, attr, fnOne, fnEnd) {
	var i = 0;
	var srcs = [];
	var imgs = typeof selector == "string" ? $(selector + " [" + attr + "]") : $(selector).find("[" + attr + "]");
	var count = imgs.length;
	if(count == 0) {
		fnEnd && fnEnd(0);
		return;
	}

	(function () { // 同步加载
		var load = arguments.callee;
		if(i == count) {
			console.log(attr + " 图片加载完成,count:", count);
			fnEnd && fnEnd(count);
			imgs = srcs = null;
			return;
		}
		var img = imgs[i];
		var src = img.getAttribute(attr);
		if(srcs.indexOf(src) == -1) {
			srcs.push(src);
			img.onload = function() {
				i++;
				fnOne && fnOne(i, count);
				img = img.onload = null;
				load();
			};
		} else {
			i++;
			fnOne && fnOne(i, count);
			load();
		}
		img.src = src;
		img.removeAttribute(attr);
	})();
};
// fadeIn()

$.fn.fadeIn = function(time, fnEnd) {
	if (!arguments.length) {
		time = 0.5;
	};
	if ($.isFunction(time)) {
		fnEnd = time;
		time = 0.5;
	};
	return this.show().anim({opacity: 1}, time, "linear", fnEnd);
};

// fadeOut()

$.fn.fadeOut = function(time, fnEnd) {
	if (!arguments.length) {
		time = 0.5;
	};
	if ($.isFunction(time)) {
		fnEnd = time;
		time = 0.5;
	};
	var self = this;
	return this.anim({opacity: 0}, time, "linear", function() {
		self.hide();
		fnEnd && fnEnd.call(this);
	});
};
// console.log(1)