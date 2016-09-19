document.addEventListener('touchmove',function(ev){ev.preventDefault()},false);

	var audio = document.getElementById('audio');
	var audio2 = document.getElementById('audio2');
	$('.audio').on('tap',function(){
		if(!audio.paused){
			audio.pause();
		}else {
			audio.play();
		}
	});

var myScreen=$("#screen");
var p1_txtspan=$(".ld_txt span");
var loading=$("#loading");
var page1=$(".page1");
var arrowup=$(".arrowup");
var point,line,dis;
var page1pic=0;
var timer3=null;
$.loader(myScreen,'_src1',null,function(){
	myScreen.fadeIn()
	$.loader(myScreen,'_src2',function(a,len){
		var per=parseInt(a/len*100);
		p1_txtspan.html(per);
	},function(){
		loading.fadeOut(function(){
			page1.addClass('show')
			timer3=setInterval(function(){
				page1pic++;
				$(".p1_kvlist img").removeClass('show').eq(page1pic).addClass('show')	
				if(page1pic>5){
					clearInterval(timer3)
					$(".p1_kvlist img").eq(5).addClass('show')
				}
			},70)
			
		});
		point=$(".p3_point");
		line=$(".p3_bridge");
		dis=point.eq(0).width()/2;
		pointpos=[];
		for(var i=0;i<point.length;i++){
			pointpos.push({
				top:point[i].offsetTop,
				left:point[i].offsetLeft
			})
		}
	})
})

var angle = 0;
var intheend=false;
var p1_qurcir=$(".p1_qurcir");
var p1_bluecir=$(".p1_bluecir");

touch.on('#target', 'touchstart', function(ev){
    ev.startRotate();
    ev.preventDefault();
});

touch.on('#target', 'rotate', function(ev){
    var totalAngle = angle + ev.rotation;
    if(ev.fingerStatus === 'end'){
        angle = angle + ev.rotation;
	    if(intheend){
			p1_bluecir.removeClass('blink');
			page1.anim({
				translateY:'-100%'
			},0.8,'ease',function(){
				page1.removeClass('show');
				page1.next().addClass('show')
			})
		}
    }
    if(totalAngle>300 && !intheend || totalAngle<-300 && !intheend){
    	intheend=true;
		p1_qurcir.hide();
		p1_bluecir.show().addClass('blink');
	}
    this.style.webkitTransform = 'rotate(' + totalAngle + 'deg)';
});
pageMoving=true;
var start;
var page2=$(".page2")
var page3=$(".page3").on('swipeUp',function(){
	nextpage.call(this,function(){
		start=true;
	},function(){
		arrowup.fadeOut();
	})
})
var n=0;
var timer=null;
var timer2=null;
var p2_line=$(".p2_line");
var p2_car=$(".p2_car");
var startX,startY,moveX,moveY;
page2.get(0).ontouchstart=function(ev){
	var startX = ev.touches[0].pageX;
	var startY = ev.touches[0].pageY;
	clearInterval(timer);
	page2.get(0).ontouchmove=function(ev){
		var moveX = ev.touches[0].pageX;
		var moveY = ev.touches[0].pageY;
    	var curTime = new Date().getTime();
    	if((curTime - last_update) > 100){
    		var diffTime = curTime - last_update;
    		last_update = curTime;
			var dis =Math.abs(startY + startX - moveX - moveY)/diffTime*10000;
			if(dis>500){
				n+=0.00085*dis;
				if(n>100){
					n=100;
					p2_car.addClass('goin');
					audio2.play();
					clearInterval(timer);
					var dr=$(".dr");
					var dr_pic=$(".dr_pic")
					i=0;
					setTimeout(function(){
						dr.fadeIn(function(){
							page2.removeClass('show').anim({
								translateY:"-100%"
							},0.1,'ease',function(){
								p2_car.removeClass('goin')
								n=0;
								p2_line.css('width',n+ "%")
								document.ontouchend=null;
							});
						});
						timer2=setInterval(function(){
							i++;
							if(i>12){
								dr.fadeOut(function(){
									page3.addClass('show star')
									dr_pic.removeClass('show')	
									pageMoving=true;
									i=0;
									dr_pic.removeClass('show')	
								});
								clearInterval(timer2);
							}
							dr_pic.eq(i).addClass('show');
						},300)
					},2000)				
				}
				p2_line.css('width',n+ "%");
				startX=moveX;
				startY=moveY;
			}
    	}

	}
	document.ontouchend=function(){
		if(n<100){
			timer=setInterval(function(){
				n-=1.25;
				if(n<0){n=0}
				p2_line.css('width',n+ "%")
			},30)
		}
	}
}





var nowPoint=0;
var fromone=false;
var a=window.innerHeight/622;
var bili=a*a*a*a;
$(".p3_point").eq(0).on('touchstart',function(ev){
	$(".p3_tips").fadeOut();
	page3.removeClass('star')
	fromone=true;
	point.eq(0).addClass('now')
	$(document).on('touchmove',function(ev){
		var moveX = ev.touches[0].pageX;
		var moveY = ev.touches[0].pageY;
		if(nowPoint<4 && fromone){
			if(moveX>pointpos[nowPoint+1].left + dis/1.5 && moveX < pointpos[nowPoint+1].left + dis*1.2 && moveY > 
				pointpos[nowPoint+1].top + dis/5.8*bili && moveY < pointpos[nowPoint+1].top + dis/1.3*bili){
				line.eq(nowPoint).show();
				point.eq(nowPoint+1).addClass('now')
				nowPoint++;
				if(nowPoint>point.length-1){
					nowPoint=point.length-1;
				}
			}
		}
	})
	$(document).on('touchend',function(){
		document.ontouchstart=null;
		if(nowPoint!=4){
			$(".p3_tips").fadeIn();
			page3.addClass('star');
			point.removeClass('now')
			line.hide();
			nowPoint=0;
			fromone=false;
		}else{
			page3.addClass('done')
			arrowup.fadeIn();
			pageMoving=false;
		}
	})

})

var p3_hand=$('.p3_hand');
var block=$(".block");
var p3_bridge=$(".p3_bridge");

var p3_window=$(".p3_window");
var p3_kuang=$('.p3_kuang')

var p3_close=$('.p3_close').tap(function(){
	p3_window.fadeOut()
})
var p3_btnbox=$(".p3_btn").tap(function(){
	var index=$(this).index()
	p3_kuang.find('div').hide();
	p3_close.show();
	p3_kuang.find('div').eq(index).show();
	p3_window.fadeIn();
})

var x, y, z, last_x, last_y, last_z;
var last_update = 0;
var SHAKE_THRESHOLD = 1800;
var p4_wall=$(".p4_wall");
var page4=$(".page4").on('swipeDown',function(){
	prevpage.call(this,null,null)
})
var page5=$(".page5").on('swipeUp',nextpage)
window.ondevicemotion = function (obj) {
    if (!start) { return };
    var acceleration = obj.accelerationIncludingGravity;
    var curTime = new Date().getTime();
    if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;

        if(x<-0.1){
        	p4_wall.removeClass('left right').addClass('left')
        }else if(x>0.1){
        	p4_wall.removeClass('left right').addClass('right')
        }
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        if (speed > SHAKE_THRESHOLD) {
    		arrowup.fadeIn();
        	start=false;
        	page4.addClass('move')
        	setTimeout(function(){
        		page5.addClass('show');
        		setTimeout(function(){
        			page4.removeClass('show').anim({
        				translateY:'-100%'
        			},0.3,'ease')
        			$(".page5_s").fadeIn();
        		},2000)
        	},1000)
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
};
  //       var picList = [
  //       {
  //           width: 441,
  //           height: 243,
  //           content: "img/p5_pic1.jpg",
  //       },
  //       {
  //           width: 441,
  //           height: 243,
  //           content: "img/p5_pic2.jpg",
  //       },
  //       {
  //           width: 441,
  //           height: 243,
  //           content: "img/p5_pic3.jpg",
  //       },
  //       {
  //           width: 441,
  //           height: 243,
  //           content: "img/p5_pic4.jpg",
  //       },
  //       {
  //           width: 441,
  //           height: 243,
  //           content:"img/p5_pic5.jpg"
  //       },
  //       {
  //           width: 441,
  //           height: 243,
  //           content:"img/p5_pic6.jpg"
  //       }
  //       ];

		// var p5_txt=$(".p5_txt img");
  //       //all animation effect
  //       var islider1 = new iSlider({
  //           data: picList,
  //           dom: document.getElementById("animation-effect"),
  //           duration: 3000,
  //           animateType: 'rotate',
  //           isAutoplay: true,
  //           isLooping: true,
  //           onslidechange:function(index){
  //           	p5_txt.attr('src','img/p5_title'+ index +'.png')
  //           }
  //       });
var page51=$(".page51").on('swipeUp',nextpage).on('swipeDown',function(){
	page5.fadeIn(0.5).anim({
		translateY:"0"
	},0.5,'ease')
})
var page52=$(".page52").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page53=$(".page53").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page54=$(".page54").on('swipeUp',nextpage).on('swipeDown',prevpage)
var page55=$(".page55").on('swipeUp',nextpage).on('swipeDown',prevpage)
var xing=$(".xing").tap(function(){
	xing.removeClass('bie');
	$(this).addClass('bie');
	$('.sex').val($(this).find('span').html())
})
var province=$(".province");
var city=$(".city");
linkage(province,city,proty)

var tapOk = false;

document.getElementById('p6_openletter').addEventListener('webkitAnimationEnd',function(){
	$(".p6_letterbottom").hide();
})

var p6_openletter=$(".p6_openletter")


var back=$(".back").click(function(){
	prevpage.call($('.page6'),function(){
		arrowup.fadeIn()
		// setTimeout(function(){
		// 	// p6_openletter.fadeOut();
		// },1000)
	},null)
})


$(".submit").click(submitForm)     
var submitcheck = function(k, v) {

    var username = $(".name").val();
    regex = /^([\u4e00-\u9fa5]){1,20}$/gi;

    function _alert(str) {
        setTimeout(function() {
            alert(str);
        }, 300);    
    }
    switch (k) {
        case 'hiddenbox':
            return v && v ? true : (_alert('请接收“个人信息保护法律声明”！'), false);

            break;
        case 'name':
            return regex.test(username) ? true : (_alert('“姓名”格式不正确！'), false);

            break;
        // case 'name1':
        //     return regex.test($('.name1').val()) ? true : (_alert('“姓”格式不正确！'), false);

        //     break;
        // case 'name2':
        //     return regex.test($('.name2').val()) ? true : (_alert('“名”格式不正确！'), false);

        //     break;
        case 'sex':
            return v ? true : (_alert('请选择称谓！'), false);

            break;
        case 'mobile':
            return v ? true : (_alert('手机号格式不正确'), false);

            break;
        case 'province':
            return v && v != '请选择' ? true : (_alert('“省份”不能为空！'), false);

            break;
        case 'city':
            return v && v != '请选择' ? true : (_alert('“城市”不能为空！'), false);

            break;
        case 'dealer':
            return v && v != '请选择' ? true : (_alert('“经销商”不能为空！'), false);
            break;
        case 'love':
            return v ? true : (_alert('请选择“您感兴趣的车型”'), false);

            break;
        case 'address':
            return v ? true : (_alert('请填写具体街道地址'), false);

            break;

    }
}

    function submitForm() {
        MAPI.submit('.form', 'audi_sport_2015',
            submitcheck, null,
            function(r) {
                console.log(r)

                if (!r.err) {
                    alert('提交成功！');


                } else if (r.status == 105) {
                    alert('您已注册成功！');
                } else if (r.status == 2) {
                    alert('手机号码格式不正确');
                } else {
                    alert("网络错误！请稍后再试")
                }
            });
        }





// console.log(1)