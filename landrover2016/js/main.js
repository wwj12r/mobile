document.getElementById('screen').addEventListener('touchmove',function(ev){
	ev.preventDefault();},false)
document.getElementById('loading').addEventListener('touchmove',function(ev){
	ev.preventDefault();},false)

var n2=0;
var p2_car=$(".p2_car img");
var timer2=null;
var p2show=false;
var page1=$(".page1").on('swipeUp',function(){
	nextpage.call(this,function(){
		setTimeout(function(){
			timer2=setInterval(function(){
				n2++;
				p2_car.css('opacity',0)
				p2_car.eq(n2).css('opacity',1)
				if(n2>p2_car.length-2){
					clearInterval(timer2);
					n2=0;
				}
			},150)
		},0)
	},null)
})
var myScreen=$("#screen");
var ld_num=$(".ld_num span")
$.loader(myScreen,'_src',function(i,len){
	ld_num.html(parseInt(i/len*100))
},function(){
	setTimeout(function(){
		$(".loading").anim({
			translateY:'-100%'
		},1,'ease',function(){
			$(this).hide();
		})
		myScreen.fadeIn(0.3);
		page1.addClass('show');
	},300)
	nav_mitem.css('height',nav_title.height()-1);
})

var navbtn=$(".navbtn").tap(function(){
	if(nav.hasClass('show')){
		nav.removeClass('show')
		nav_block.fadeOut();
	}else{
		nav.addClass('show');
		nav_block.fadeIn();
	}
})

var p3show=false;
var timer3=null;
var n3=0;
var p3_lineimg=$(".p3_line img");
var page2=$(".page2").on('swipeUp',function(){
	nextpage.call(this,function(){
		p3show=true;
		p2_car.css('opacity',0)
		p2_car.eq(0).css('opacity',1)
		setTimeout(function(){
			timer3=setInterval(function(){
				if(!p3show){clearInterval(timer3)}
				n3++;
				if(n3>p3_lineimg.length-1){n3=0}
				p3_lineimg.css('opacity',0);
				p3_lineimg.eq(n3).css('opacity',1)
			},100)
		},3000)
	},null)
}).on('swipeDown',function(){
	prevpage.call(this,function(){
		p2_car.css('opacity',0)
		p2_car.eq(0).css('opacity',1)
	},null)
})

var page3=$(".page3").on('swipeUp',function(){
	nextpage.call(this,function(){
		p3show=false;
	},null)
}).on('swipeDown',function(){
	prevpage.call(this,function(){
		p3show=false;
		setTimeout(function(){
			timer2=setInterval(function(){
				n2++;
				p2_car.css('opacity',0)
				p2_car.eq(n2).css('opacity',1)
				if(n2>p2_car.length-2){
					clearInterval(timer2);
					n2=0;
				}
			},150)
		},0)
	},null)
})
var page4=$('.page4').on('swipeUp',nextpage).on('swipeDown',function(){
	prevpage.call(this,function(){
		p3show=true;
		setTimeout(function(){
			timer3=setInterval(function(){
				if(!p3show){clearInterval(timer3)}
				n3++;
				if(n3>p3_lineimg.length-1){n3=0}
				p3_lineimg.css('opacity',0);
				p3_lineimg.eq(n3).css('opacity',1)
			},100)
		},3000)
	})
})

var n11=0;
var timer11=null;
var p11_num=$(".p11_num span");
var page5=$(".page5").on('swipeUp',function(){
	nextpage.call(this,function(){
		setTimeout(function(){
			timer11=setInterval(function(){
				n11+=2;
				p11_num.text(n11);
				if(n11>158){
					clearInterval(timer11)
					n11=0;
				}
			},20)
		},2100)
	},null)
}).on('swipeDown',prevpage)
var page6=$(".page6").on('swipeUp',function(){
	nextpage.call(this,function(){
		p11_num.text(0);
	},null)
}).on('swipeDown',function(){
	prevpage.call(this,function(){
		p11_num.text(0);
	},null)
})
var page7=$(".page7").on('swipeUp',nextpage).on('swipeDown',function(){
	prevpage.call(this,function(){
		setTimeout(function(){
			timer11=setInterval(function(){
				n11+=2;
				p11_num.text(n11);
				if(n11>158){
					clearInterval(timer11)
					n11=0;
				}
			},20)
		},2100)
	},null)
})
var page8=$(".page8").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page9=$(".page9").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page10=$(".page10").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page11=$(".page11").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page12=$(".page12").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page13=$(".page13").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page14=$(".page14").on('swipeDown',prevpage)
var xing=$(".xing").tap(function(){
	xing.removeClass('on');
	$(this).addClass('on');
	$('.usersex').val($(this).find('span').html())
})

var p14_btn1=$(".p14_btn1").tap(function(){
	$(".p14_txt").fadeOut(0.3);
	$(".p14_form").addClass('on')
})

var close=$(".close").tap(function(){
	$(".p14_txt").fadeIn(0.3);
	$(".p14_form").removeClass('on');
})
var p14_kv=$(".p14_kv>img").tap(function(){
	$(".p14_txt").fadeIn(0.3);
	$(".p14_form").removeClass('on');
})

var p14_btn3=$(".p14_btn3").tap(function(){
	window.location.reload();
})
var nav=$(".nav");
var nav_title=$('.nav_title');
// 目录操作
var nav_mitem=$(".nav_mitem").tap(function(){
	if($(this).hasClass('on')){return}
	var num=$(this).children().length;
	nav_mitem.removeClass('on')
	$(this).addClass('on');
	nav_mitem.anim({
		height:nav_title.height()+1
	},0.5,'ease')
	$(this).anim({
		height:num*nav_title.height()+1
	},0.5,'ease')
})
var page=$("#page_box>div");
var nav_item=$(".nav_item").tap(function(){
	var theone=nav_item.index($(this))+1;
	if(theone!=1){
		p2_car.css('opacity',0)
		p2_car.eq(0).css('opacity',1)
	}
	if(theone!=2){
		p3show=false;
	}
	if(theone!=5){
		p11_num.text(0);
	}
	for(var i=0;i<13;i++){
		if(i<theone){
			page.eq(i).anim({
				translateY:"-100%"
			},0.8,'ease',function(){
				for(var j=0;j<theone;j++){
					page.eq(j).hide();
				}
			})
		}else if(i>=theone){
			page.eq(theone).show()
			page.eq(i).anim({
				translateY:"0"
			},0.8,'ease',function(){
				for(var k=theone+1;k<13;k++){
					page.eq(k).hide();
				}
			})
		}
	}
	if(theone===1&& !page.eq(1).hasClass('show')){
		setTimeout(function(){
			timer2=setInterval(function(){
				n2++;
				p2_car.css('opacity',0)
				p2_car.eq(n2).css('opacity',1)
				if(n2>p2_car.length-2){
					clearInterval(timer2);
					n2=0;
				}
			},150)
		},0)
	}else if(theone===2&& !page.eq(2).hasClass('show')){
		p3show=true;
		setTimeout(function(){
			timer3=setInterval(function(){
				if(!p3show){clearInterval(timer3)}
				n3++;
				if(n3>p3_lineimg.length-1){n3=0}
				p3_lineimg.css('opacity',0);
				p3_lineimg.eq(n3).css('opacity',1)
			},100)
		},3000)
	}else if(theone===5&& !page.eq(5).hasClass('show')){
		setTimeout(function(){
			timer11=setInterval(function(){
				n11+=2;
				p11_num.text(n11);
				if(n11>158){
					clearInterval(timer11)
					n11=0;
				}
			},20)
		},2100)
	}
	page.removeClass('show');
	page.eq(theone).addClass('show')
	nav_item.removeClass('on')
	$(this).addClass('on')
	setTimeout(function(){
		nav.removeClass('show')
		nav_block.fadeOut()
	},300)
})

var nav_block=$(".nav_block").tap(function(){
	nav.removeClass('show')
	$(this).fadeOut()
})
// console.log(1)