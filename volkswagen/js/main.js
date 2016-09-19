window.onload=function(){
    // 字体取值
    document.addEventListener("touchmove", function(ev) {ev.preventDefault();}, false);
    $(window).resize(resize);
    resize();

    function resize() {
        $("html").css("fontSize", window.innerWidth / 20);
    }

    $('.submit').on('click', submitcheck)
    $('.tvc .next').on('touchend', nextLi);
    $('.tvc .pre').on('touchend', preLi);
    $('.p1_left').off().on('swipeLeft',nextpage);
    $('.p1_right').off().on('swipeRight',prepage);


}
var prepage=function(){
	$('.p1_kv1,.p1_car').anim({
		translateX:'0'
	},0.8,'ease',function(){
	$('.p1_left').show();
	$('.p1_right').hide();
});
}
var nextpage=function(){
	$('.p1_kv1,.p1_car').anim({
		translateX:'-50%'
	},0.8,'ease',function(){
	$('.p1_left').hide();
	$('.p1_right').show();
});
}


var nextLi = function (e) {
    // e.stopPropagation();
    // e.preventDefault();
    var lis = $('.tvc iframe'),
        ul = $('.tvc .ul'),
        i = parseInt(ul.attr('data-i'));
    if (i >= lis.length-1) {
        return;
    }
    i += 1;
    ul.attr('data-i', i);
    ul.css('-webkit-transform', 'translate3d(-'+100*i+'%, 0, 0)');
    $('.tvc .slide-point span').removeClass('on').eq(i).addClass('on');
};
var preLi = function (e) {
    // e.stopPropagation();
    // e.preventDefault();
    var lis = $('.tvc iframe'),
        ul = $('.tvc .ul'),
        i = parseInt(ul.attr('data-i'));
    if (i <= 0) {
        return;
    }
    i -= 1;
    ul.attr('data-i', i);
    ul.css('-webkit-transform', 'translate3d(-'+100*i+'%, 0, 0)');
    $('.tvc .slide-point span').removeClass('on').eq(i).addClass('on');
};

var submitcheck = function() {
    var name=$('#name').val();
    var sex=$('#sex').val();
    var mobile=$('#mobile').val();
    var love=$('#love').val();
    var pro=$('#province').val();
    var city=$('#city').val();
    var dealer=$('#dealer').val();

    if(!name){
    	alert('请填写您的姓名')
    	return
    }
    if(!sex){
    	alert('请选择性别')
    	return
    }
    if(!mobile){
    	alert('请填写您的手机号')
    	return
    }
    if(mobile.length<11){
    	alert('手机号格式不正确')
    	return
    }
    if(!love){
    	alert('请选择试驾车型')
    	return
    }
    if(!pro){
    	alert('请选择所在省份')
    	return
    }
    if(!city){
    	alert('请选择所在城市')
    	return
    }
    if(!dealer){
    	alert('请选择经销商')
    	return
    }
}




