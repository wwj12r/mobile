$(function(){function e(){$.ajax({async:!1,url:"http://h5.mconnect.cn/WXApi/m/GetWXJsApi.aspx?urlStr="+encodeURIComponent(window.location.href),type:"GET",dataType:"jsonp",jsonp:"callback",timeout:5e3,beforeSend:function(){},success:function(e){wx.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage"]}),wx.ready(function(){wx.onMenuShareAppMessage({title:t,desc:a,link:o,imgUrl:s,trigger:function(e){},success:function(e){},cancel:function(e){},fail:function(e){}}),wx.onMenuShareTimeline({title:a,link:o,imgUrl:s,trigger:function(e){},success:function(e){},cancel:function(e){},fail:function(e){}})})},complete:function(e,n){},error:function(e){}})}document.addEventListener("touchmove",function(e){e.preventDefault()},!1);var n=$(".p1_number").height();$(".p1_number>div").css("font-size",n-2),$.address("#form"),$(function(){function e(e){var n=e+"";n="000000".substring(n.length)+n,Array.prototype.forEach.call(n,function(e,n){o[n].innerHTML=e})}function n(n){var t=0,a=n/30,o=setInterval(function(){t+=parseInt(Math.random()*a),t>=n&&(clearInterval(o),t=n),e(t)},30)}function t(e,n){return parseInt(e+Math.random()*(n-e))}function a(e){return 1e5>e&&e>9999?"0"+e:1e4>e&&e>999?"00"+e:e+""}var o=$(".p1_number").children(),s=t(1e3,238781),i=a(s);console.log(s),console.log(i),window.onload=function(){n(i)},$(".p1_btn").tap(function(){$(".page4").css("z-index","110"),$(".p4_back1").show(),$(".arrowup").hide()});var c=$(".page1"),r=$(".page2");c.addClass("show"),c.on("swipeUp",function(){c.anim({translateY:"-100%"},.8,"ease",function(){c.removeClass("show"),r.addClass("show")})})}),$(function(){function e(){clearTimeout(o,s);var e=this.className.slice(-1);$(".txt").hide(),$(".txt").eq($(this).index()-1).show(),event.cancelBubble=!0,o=setTimeout(function(){a.show().css("opacity",0),$(".arrowup").hide(),s=setTimeout(function(){TouchSlide({slideCell:"#slider",mainCell:".slider",defaultIndex:e-1}),a.css("opacity",1),t()},100)},1e3)}function n(){a.show().css("opacity",0),$(".arrowup").hide(),s=setTimeout(function(){TouchSlide({slideCell:"#slider",mainCell:".slider",defaultIndex:2}),a.anim({opacity:"1"},.8,"ease",!1),t()},100)}function t(){function e(){i++,6==i&&(i=5),$(".p2_line").css("top",m[i]),$(".p2_score span").html(f[i])}function n(){return i--,-1==i&&(i=0),$(".p2_line").css("top",m[i]),$(".p2_score span").html(f[i]),0==i?!0:void 0}function t(){a(),l=setTimeout(function(){n()||(u-=50,500>u&&(u=500)),t()},u)}function a(){clearTimeout(l)}$(".p2_gstart").on("click",function(){setTimeout(function(){$(".p2_gstart").hide()},200)}),$(".p2_tc4c").tap(function(){$("#slider").hide(),$(".arrowup").show()},!1),HTMLAudioElement.prototype.stop=function(){this.pause(),this.currentTime=0},t(),$(".p2_btn").tap(function(){h.stop(),h.play(),$(".p2_btn img").attr("src","img/p2_btndown.png"),setTimeout(function(){$(".p2_btn img").attr("src","img/p2_btnup.png")},100),clearTimeout(p),a(),p=setTimeout(function(){t()},50);var n=(new Date).getTime();return r?c?(300>r-c&&300>n-r&&(d++,d>2&&(e(),d=0)),c=r,r=n,void(5==i&&setTimeout(function(){$(".p2_tc41").show(),$(".p2_close1").show(),$(".p2_close").hide()},500))):(c=r,r=n):r=n}),$(".p2_close1").tap(function(){$(".p2_tc41").hide(),$(".p2_close").show(),$(".p2_close1").hide()})}$(".p2_kv").on("swipeDown",function(){$(".page2,.page1").anim({translateY:"0"},.8,"ease",function(){$(".page2").removeClass("show"),$(".page1").addClass("show")})});var a=$("#slider"),o=null,s=null,i=0,c=0,r=0,p=null,u=700,l=null,d=0,h=document.getElementById("gsound"),m=["48.5%","41.5%","34.5%","27.6%","20.6%","13.6%"],f=["000","020","040","060","080","100"];$(".point").tap(e),$(".p2_kv").tap(function(){$(".txt").hide()}),$(".p2_kv").on("swipeLeft",n),$(".p2_close").tap(function(){$("#slider").hide(),$(".arrowup").show(),i=0,c=0,r=0,p=null,u=700,l=null,d=0,clearTimeout(l)}),$(".p2_kv").on("swipeUp",function(){$(".page2").anim({translateY:"-100%"},.8,"ease",function(){$(".page2").removeClass("show"),$(".page3").addClass("show")})})}),$(function(){$(".page3").on("swipeDown",function(){$(".page2,.page3").anim({translateY:"0"},.8,"ease",function(){$(".page3").removeClass("show"),$(".page2").addClass("show")})});var e,n=-(1440/965*(window.innerHeight-$(".logo").height())-window.innerWidth),t=window.innerWidth-n;$(".p3_kv").css("width",t);var a=null,o=$("#slider2");e?e.refresh():e=new IScroll("#wrapper",{mouseWheel:!0,click:!0,freeScroll:!0,scrollX:!0,scrollY:!1,startX:n,bounce:!1}),$(".point2").tap(function(){clearTimeout(a);var e=this.className.slice(-1);event.cancelBubble=!0,o.show().css("opacity",0),$(".arrowup").hide(),a=setTimeout(function(){TouchSlide({slideCell:"#slider2",mainCell:".slider2",defaultIndex:e-1}),o.css("opacity",1)},100)}),$(".p3_close").tap(function(){$(".p3_kv").css("opacity",1),$("#slider2").hide(),$(".arrowup").show()}),$(".page3").on("swipeUp",function(){$(".page3").anim({translateY:"-100%"},.8,"ease",function(){$(".page3").removeClass("show"),$(".page4").addClass("show")})})}),$(function(){function e(){MAPI.submit("#p4","dongfeng_richan_2015",t,function(e){var n=e.dealer.split(":");e.dealer=n[1],e.dealers=n[0]},function(e){console.log(e),e.err?alert(105==e.status?"您已注册成功！":2==e.status?"手机号码格式不正确":"网络错误！请稍后再试"):(alert("提交成功！"),$(".page4").anim({translateY:"-100%"},.8,"ease",function(){$(".page4").removeClass("show"),$(".page5").addClass("show")}))})}$(".page4").on("swipeDown",function(){$(".page4,.page3").anim({translateY:"0"},.8,"ease",function(){$(".page4").removeClass("show"),$(".page3").addClass("show"),$(".arrowup").show()})}),$(".p4_man").tap(function(){$(".p4_man").attr("src","img/p4_manunc.png"),$(".p4_woman").attr("src","img/p4_womanun.png"),$(this).attr("src","img/p4_manche.png"),$(".p4_sexy").val("先生")}),$(".p4_woman").tap(function(){$(".p4_man").attr("src","img/p4_manunc.png"),$(".p4_woman").attr("src","img/p4_womanun.png"),$(this).attr("src","img/p4_womanche.png"),$(".p4_sexy").val("女士")});var n=0;$(".p4_check").tap(function(){n++,n%2==1?($(".p4_checked").attr("src","img/p4_uncheck.png"),$("#checked").val("")):($(".p4_checked").attr("src","img/p4_checked.png"),$("#checked").val("true"))}),myScroll2=new IScroll("#wrapper2",{mouseWheel:!0,click:!0,freeScroll:!0,bounce:!1}),$(".p4_back").tap(function(){$(".page4,.page3").anim({translateY:"0"},.8,"ease",function(){$(".page4").removeClass("show"),$(".page3").addClass("show"),$(".arrowup").show()})}),$(".p4_back1").tap(function(){$(".page4").css("z-index","70"),$(".p4_back1").hide(),$(".arrowup").show()}),$(".p4_submit").on("click",e),$(".p5_sharebtn").tap(function(){$(".p5_share").show()}),$(".p5_share").tap(function(){$(".p5_share").hide()}),$(".page4").on("swipeUp",function(){$(".arrowup").hide(),$(".page4").anim({translateY:"-100%"},.8,"ease",function(){$(".page4").removeClass("show"),$(".page5").addClass("show")})}),$(".page5").on("swipeDown",function(){$(".page4").anim({translateY:"0"},.8,"ease",function(){$(".page5").removeClass("show"),$(".page4").addClass("show"),$(".arrowup").show()})});var t=function(e,n){function t(e){setTimeout(function(){alert(e)},300)}switch(console.log(123),e){case"checked":return n?!0:(t("请勾选“我愿意参加郑州日产全车系驾享体验活动”"),!1);break;case"name":return n?!0:(t("“姓名”不能为空！"),!1);break;case"sex":return n?!0:(t("请选择性别！"),!1);break;case"mobile":return n?!0:(t("手机号格式不正确"),!1);break;case"province":return n&&"请选择"!=n?!0:(t("“省份”不能为空！"),!1);break;case"city":return n&&"请选择"!=n?!0:(t("“城市”不能为空！"),!1);break;case"dealer":return n&&"请选择"!=n?!0:(t("“经销商”不能为空！"),!1);break;case"love":return n?!0:(t("“试驾车型”不能为空！"),!1);break;case"address":return n?!0:(t("请填写具体街道地址"),!1)}}});var t="东风风度MX6 超高性价比都市SUV。",a="东风风度MX6 引发一场20万元级别SUV性价比大探讨。",o="http://mobi.mconnect.cn/zzrc",s="http://mobi.mconnect.cn/zzrc/img/300.jpg";window.addEventListener("load",e,!1)});