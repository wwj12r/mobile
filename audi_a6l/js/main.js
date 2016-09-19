document.getElementById('screen').addEventListener('touchmove',function(ev){
	ev.preventDefault();},false)

var loadok=true;
var myScreen=$("#screen");
var page1=$(".page1");
var page2=$(".page2");
$.loader(myScreen,'_src',null,function(){
	myScreen.fadeIn(0.2,function(){
		page1.addClass('show')
		setTimeout(function(){
			$(".p1_hand").show();
			setTimeout(function(){
				$(".p1_hand").fadeOut();
			},1000)
		},1500)
	});
	$.loader(myScreen,'_src2',null,function(){
		document.getElementById('audio').play();
		document.getElementById('audio').pause();
	})
})

// =========首页点击事件===================================================================
$(".p1_txt>div").on('touchstart',function(){
	page1.removeClass('jia lv shang');
	$('.p1_title>div').removeClass('on');
	if($(this).hasClass('on')){
		$(".p1_txt>div").removeClass('on');
		$('.p1_title>div').eq(0).addClass('on');
		$(".arrow").fadeOut();
		return;
	}
	page1.addClass($(this).attr('data-name'))
	$(".arrow").fadeIn();
	$(".p1_txt>div").removeClass('on');
	// $('.p1_title div').removeClass('on');
	$(this).addClass('on');
	$('.p1_title>div').eq($(this).index()+1).addClass('on');
})
//========================================================================================
var mySwiper;
page1.on('swipeUp',function(){
	if(loadok){
		if($(this).hasClass('jia')){
			$(".menu1").fadeIn().addClass('show1')
			// nextpage.call(this,function(){
			// 	if(!mySwiper){
			// 		mySwiper = new Swiper('.swiper-container',{
			// 			effect : 'fade',
			// 			onlyExternal : true,
			// 		})
			// 	}
			// },function(){
			// 	$(".p2_1").show();
			// });
		}else if($(this).hasClass('lv')){
			nextpage.call(this,function(){

			},function(){
				$(".p2_2").show();
			    // 百度地图API功能
			    var mp = new BMap.Map("l-map");
			    var geolocation = new BMap.Geolocation();
			    mp.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
			    var myP;
			    function showLocation(data) {
			        if (myP == undefined) {
			            alert("抱歉，定位失败或未开启GPS功能，请稍后再试");
			        }
			        else if (data == undefined) {
			            alert("抱歉，未能找到您的路线，请更换详细地址哦~");
			        }
			        else {
			            var start = new BMap.Point(myP.lng, myP.lat);
			            var end = new BMap.Point(data.result.location.lng, data.result.location.lat);
			            var driving = new BMap.DrivingRoute(mp, { renderOptions: { map: mp, autoViewport: true} });
			            driving.search(start, end);
			        }
			    }
			    geolocation.getCurrentPosition(function (r) {
			        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
			            myP = r.point;
			        }
			        else {
			        }
			    }, { enableHighAccuracy: false })

			$(".addressbtn").bind("click", function () {
			        var address = $(".address").val();
			        if (address != "" && address != undefined) {
			            mp.clearOverlays();
			            $.ajax({
			                type: "get",
			                url: "http://api.map.baidu.com/geocoder/v2/?ak=pA2N9r3tH7RFaElIfst6CzlY",
			                data: {
			                    output: 'json',
			                    pois: 0,
			                    callback: 'showLocation',
			                    address: address
			                },
			                dataType: "jsonp",
			                success: function (data, status, xhr) {
			                    console.log(data);
			                    console.log(status);
			                    console.log(xhr);
			                    if (myP == undefined) {
			                        alert("抱歉，定位失败或未开启GPS功能，请稍后再试");
			                    }
			                    else if (data == undefined) {
			                        alert("抱歉，未能找到您的路线，请更换详细地址哦~");
			                    }
			                    else {
			                        var start = new BMap.Point(myP.lng, myP.lat);
			                        var end = new BMap.Point(data.result.location.lng, data.result.location.lat);
			                        var driving = new BMap.DrivingRoute(mp, { renderOptions: { map: mp, autoViewport: true} });
			                        driving.search(start, end);
			                    }
			                },
			                error: function (e) {
			                    //alert(e);
			                }
			            });
			        }
			    });
			})
		}else if($(this).hasClass('shang')){
			$(".menu1").fadeIn().addClass('show2')
			// nextpage.call(this,function(){

			// },function(){
			// 	$(".p2_3").show();
			// })
		}
	}
})

$(".menu").tap(function(){
	var index=$(this).index();
	$(".menu").removeClass('on');
	$(this).addClass('on');
	nextpage.call(page1,function(){
		$(".menu").removeClass('on');
	},function(){
		$('.page2>div').eq(index-1).show();
		if(index===1){
			if(!mySwiper){
				mySwiper = new Swiper('.swiper-container',{
					effect : 'fade',
					onlyExternal : true,
				})
			}
		}
		setTimeout(function(){
			$('.menu1').fadeOut(0.3,function(){
				$('.menu1').removeClass('show1 show2')
			});
		},300)
	})
})

$(".p3_color>div").tap(function(){
	$(".p3_color>div").removeClass('on');
	$(this).addClass('on');
	$(".p3_carcolor img").css('opacity','0')
	$(".p3_carcolor img").eq($(this).index()-1).css('opacity','1')
})

$(".p3_light").tap(function(){
	$(".p2_4").addClass('on');
	setTimeout(function(){
		document.getElementById('audio').play();
	},1500)
})

$(".p3_back").tap(function(){
	$(this).parent().fadeOut().removeClass('show1 show2');
})

$(".p3_back2").tap(function(){
	prevpage.call(page2,function(){
		$(".p2_4").hide().removeClass('on');
	},null)
})

$(".p3_back3").tap(function(){
	prevpage.call(page2,function(){
		$(".p2_5").hide();
	},null)
})

$(".p2_1").on('swipeDown',function(){
	prevpage.call(page2,function(){
		$('.p2_1').hide();
	},null)
})
$(".p2_back").tap(function(){
	prevpage.call(page2,function(){
		$(".p2_1").hide();
	},null);
})
$(".p2_back2").tap(function(){
	prevpage.call(page2,function(){
		$(".p2_2").hide();
	},null);
})
$(".p2_back3").tap(function(){
	prevpage.call(page2,function(){
		$(".p2_img").hide();
		$(".p2_3").hide().removeClass('move');
		$(".p2_2btn>div").removeClass('on')
	},null);
})
$(".p2_btn1").tap(function(){
	mySwiper.slideTo(0, 500, false);
})
$(".p2_btn2").tap(function(){
	mySwiper.slideTo(1, 500, false);
})
$(".p2_btn3").tap(function(){
	mySwiper.slideTo(2, 500, false);
})
$(".p2_btn4").tap(function(){
	mySwiper.slideTo(3, 500, false);
})
$(".p2_btn5").tap(function(){
	mySwiper.slideTo(4, 500, false);
	console.log(1)
})

$('.shijiabtn').on('touchend',function(){
	setTimeout(function(){
		$(".shijia").fadeIn()
	},400)
})
$(".p2_3").on('swipeUp',function(){
	$(this).addClass('move');
}).on('swipeDown',function(){
	prevpage.call(page2,function(){
		$(".p2_3").hide().removeClass('move');
	},null)
})
$(".arrowdown").tap(function(){
	$(".p2_3").addClass('move');
})
$(".p2_2btn div").tap(function(){
	$(".p2_img>img").hide();
	$('.p2_img').show();
	if($(this).hasClass('on')){
		$(this).removeClass('on');
		$('.p2_img').hide();
		return;
	}
	$(".p2_2btn div").removeClass('on');
	$(this).addClass('on');
	$('.p2_img>img').eq($(this).index()).show();
})
$('.p2_backbtn').tap(function(){
	prevpage.call(page2,function(){
		$(".p2_3").removeClass('move').hide();
	},null)
})

$(".p2_img").tap(function(){
	$('.p2_img').hide();
	$(".p2_img>img").hide();
	$(".p2_2btn div").removeClass('on');
})

// =========预约试驾===================================================================
var sel1=$(".province");
var sel2=$(".city");
var sel3=$(".dealers")
linkage(sel1,sel2,sel3,dealers)
$(".sex").tap(function(){
	$(".sex").removeClass('on');
	$(this).addClass('on')
	var xing=$(this).html();
	if(xing=="先生"){
		xing="男"
	}else if(xing=="女士"){
		xing="女"
	}
	$(".xingbie").val(xing)
})

$(".shijia_check").tap(function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on')
		$(".checked").val('')
	}else{
		$(this).addClass('on');
		$(".checked").val('1')
	}
})

$(".back").tap(function(){
	$(".shijia").fadeOut()
})

$(".submit").click(submitForm)
var submitcheck = function(k, v) {

    var username = $(".name").val();
    regex = /^([a-zA-Z\u4e00-\u9fa5]){2,20}$/gi;
    regex2 = /^1\d{10}$/gi;

    function _alert(str) {
        setTimeout(function() {
            $('.alerttxt').html(str);
        }, 300);    
    }
    switch (k) {
        case 'checked':
            return v && v ? true : (_alert('请勾选隐私条款！'), false);

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
            return regex.test(username) ? true : (_alert('手机号格式不正确'), false);

            break;
        case 'province':
            return v && v != '请选择' ? true : (_alert('“省份”不能为空！'), false);

            break;
        case 'city':
            return v && v != '请选择' ? true : (_alert('“城市”不能为空！'), false);

            break;
        case 'dealers':
            return v && v != '请选择' ? true : (_alert('“经销商”不能为空！'), false);
            break;
        case 'love':
            return v ? true : (_alert('请选择“您感兴趣的车型”'), false);

            break;
        case 'address':
            return v ? true : (_alert('请填写具体街道地址'), false);

            break;
        case 'product':
            return v ? true : (_alert('请选择“意向延保产品“'), false);

            break;

    }
}
var smartcode="";
if(window.location.href.indexOf('?smartcode=')!=-1){
	smartcode=window.location.href.substring(window.location.href.indexOf('?smartcode=')+11);
}

    function submitForm() {
        MAPI.submit('.form', 'audi_jls_2016',
            submitcheck, function(r){
                r.srcs=smartcode;
            },
            function(r) {
                console.log(r)
                $('.alerttxt').html("正在提交中...")
                if (!r.err) {
                	$('.alerttxt').html('提交成功！')
			        // switch (smartcode){
			        // 	case 'jrtt':
			        // 		smartcode='今日头条'
			        // 		break;
			        // 	case '36k':
			        // 		smartcode='36氪'
			        // 		break;
			        // 	case 'hx':
			        // 		smartcode='虎嗅'
			        // 		break;
			        // }
					$.ajax({
			         type: "get",  
			         async: false,  
			         url:"http://zjapi.audiulife.com/index.php?a=baoming",
			         dataType: "jsonp", data:"xingming="+escape($("input[name='name']").val())+"&shouji="+escape($("input[name='mobile']").val())+"&sex="+escape($("input[name='sex']").val())+"&deptname="+escape($("select[name='dealers']").val())+"&userfrom="+escape(smartcode),
			         jsonp: "callback",
			         success: function(json){
			             // if(json.result!=''){
			             // 	alert("成功"+json.message);					
			             // }else{
			             // 	alert('失败')
			             // }
			             console.log(json)
			         },  
			         error: function(){  
			             // alert("报名失败!"); 
			         }  
			     	}); 


                } else if (r.status == 105) {
                    $('.alerttxt').html('您已注册成功！');
                } else if (r.status == 2) {
                    $('.alerttxt').html('手机号码格式不正确');
                } else {
                    $('.alerttxt').html("网络错误！请稍后再试")
                }
            });
    }

// 今日头条
// 微信朋友圈
// 虎嗅
// 36k


// console.log(1)