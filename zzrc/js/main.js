$(function(){
    // 取消默认事件
    document.addEventListener("touchmove", function(ev) {ev.preventDefault();}, false);
    // 数字卡
    var fontSize=$('.p1_number').height()
    $('.p1_number>div').css('font-size',fontSize-2)

    //$.address("#form")
    // page1
    $(function(){

        var page1Numbers = $(".p1_number").children();
        function page1Set(num) {
            var str = num + "";
            str = "000000".substring(str.length) + str;
            Array.prototype.forEach.call(str, function(a, i) {
                page1Numbers[i].innerHTML = a;
            });
        }
        function page1Run(num) {
            var set = 0;
            var add = num / 20;
            var timer = setInterval(function() {
                set += parseInt(Math.random() * add);
                if (set >= num) {
                    clearInterval(timer);
                    set = num;
                };
                page1Set(set);
            }, 30);
        }
        // function rnd(n,m){
        //     return parseInt(n+Math.random()*(m-n))
        // }
    window.onload=function(){
        $('.page_box').css('opacity','1');
        $('#body').css('background','#000');
        page1Run(num1)
    }
        function quzheng(num){
            if(num<100000&&num>9999){
                return "0"+num
            }else if(num<10000&&num>999){
                return "00"+num
            }else{
                return num+"";
            }
        }
        // var num=rnd(1000,238781);
        // var num1=quzheng(num);
        var oldday=new Date()
        oldday.setFullYear(2015,2,23);
        oldday.setHours(0,0,0,0);
        var num320=oldday.getTime()
        var numnow=new Date().getTime()
        var dis=parseInt((numnow- num320)/1000);
        var day= parseInt(dis/86400);
        dis=dis%86400;
        var h=parseInt(dis/3600)
        if(day<0){day=0}
        if(h<0){h=0}
        num=18096+day*11688+h*487;
        num1=quzheng(num)
        // console.log(day)
        // console.log(h)
        // console.log(dis)
        $('.p1_btn').on('touchend',function(){
            setTimeout(function(){
                $('.page4').css('z-index','110')
                $('.p4_back1').show()
                $('.arrowup').hide()
            },200)
        })

        var page1=$('.page1');
        var page2=$('.page2');
        page1.addClass('show')
        page1.on('swipeUp',function(){
            page1.anim({
                translateY:"-100%"
            },0.8,"ease",function(){
                page1.removeClass('show')
                page2.addClass('show')
            })
        })
    })


    //page2
    $(function(){
        $('.p2_kv').on('swipeDown',function(){
            $('.page2,.page1').anim({
                translateY:"0"
            },0.8,"ease",function(){
                $('.page2').removeClass('show')
                $('.page1').addClass('show')
            })
        })

        var slider = $('#slider')
        var timer1=null;
        var timer2=null;
        var n=0;
        var last_last_time = 0;
        var last_time = 0;
        var gtimer = null;
        var time = 700;
        var timer = null;
        var gamecount=0;
        var video=document.getElementById('gsound');
        var top=['48.5%','41.5%','34.5%','27.6%','20.6%','13.6%'];
        var score=['000','020','040','060','080','100']
        $('.point').tap(p2_game);


        $('.p2_kv').tap(function(){
            $('.txt').hide()
        })
        $('.p2_kv').on('swipeLeft',p2_game0)
        function p2_game(){
            clearTimeout(timer1,timer2)
            var index = this.className.slice(-1);
            $('.txt').hide()
            $(".txt").eq($(this).index()-1).show()
            event.cancelBubble = true;
            timer1=setTimeout(function(){
                slider.show().css("opacity", 0);
                $('.arrowup').hide()
                timer2=setTimeout(function() {
                    TouchSlide({
                        slideCell:"#slider",
                        mainCell:'.slider',
                        // effect:'leftLoop',
                        defaultIndex: index-1
                    });
                    slider.css("opacity", 1);
                    // 游戏页面
                    game()
                }, 100);
            },1000)
        }
        function p2_game0(){
            slider.show().css("opacity", 0);
            $('.arrowup').hide()
            timer2=setTimeout(function() {
                TouchSlide({
                    slideCell:"#slider",
                    mainCell:'.slider',
                    // effect:'leftLoop',
                    defaultIndex: 0
                });
                slider.anim({
                    opacity:'1'
                },0.8,'ease',false)
                // slider.css("opacity", 1);
                // 游戏页面
                game()
            }, 100);
        }
        function game(){
            $('.p2_gstart').on('click',function(){
                setTimeout(function(){
                    $('.p2_gstart').hide()
                    $('.p2_block').hide()
                },200)
            })
            $('.p2_tc4c').tap(function(){
                $('#slider').hide()
                $(".arrowup").show()
            },false);
            $(".close").tap(function(){
                $('#slider').hide()
                $(".arrowup").show() 
                n=0;
                last_last_time = 0;
                last_time = 0;
                gtimer = null;
                time = 700;
                timer = null;
                gamecount=0;
                clearTimeout(timer)
            })
            function up(){
                n++;
                if(n==6){n=5}   
                $('.p2_line').css('top',top[n])
                $('.p2_score span').html(score[n])
            }
            function down(){
                n--;
                if(n==-1){n=0}
                $('.p2_line').css('top',top[n])
                $('.p2_score span').html(score[n])
                if (n == 0) {return true}; // 到底
            }


            function go_down() {
                stop_down();
                timer = setTimeout(function() {
                    if(!down()) {
                        time -= 50;
                        if (time < 500) {time = 500};
                    }
                    go_down();
                }, time);
            }
            function stop_down() {
                clearTimeout(timer);
            }
            // HTMLAudioElement.prototype.stop = function() 
            // { 
            // this.pause(); 
            // this.currentTime = 0.0; 
            // } 

            go_down()
            $('.p2_btn').on('touchstart',function(){
playMusic()
                $('.p2_btn img').attr('src','img/p2_btndown.png')
                setTimeout(function(){
                    $('.p2_btn img').attr('src','img/p2_btnup.png')
                },100)


                clearTimeout(gtimer)
                stop_down();
                gtimer = setTimeout(function(){
                    go_down();
                },50)

                var now_time = new Date().getTime();
                if (!last_time) {
                    return last_time = now_time;
                };
                if (!last_last_time) {
                    return last_last_time = last_time, last_time = now_time;
                };


                if (last_time - last_last_time < 300 && now_time - last_time < 300) {
                    // 三次或三次以上
                    gamecount++;
                    if(gamecount>2){
                        up();
                        gamecount=0;
                    }
                }
                last_last_time = last_time;
                last_time = now_time;

                if(n==5){
                    setTimeout(function(){
                        $('.p2_tc41').show();
                        $('.p2_close1').show()
                        $('.p2_close').hide();
                        myScroll3.refresh()
                    },500)
                }
            })
            $('.p2_close1').tap(function(){
                $('.p2_tc41').hide()
                $('.p2_close').show()
                $('.p2_close1').hide()
            })
        }

        $(".p2_close").tap(function(){
            $('#slider').hide()
            $(".arrowup").show() 
            alert(1)
            n=0;
            last_last_time = 0;
            last_time = 0;
            gtimer = null;
            time = 700;
            timer = null;
            gamecount=0;
            clearTimeout(timer)
        })



        $('.p2_kv').on('swipeUp',function(){
            $('.page2').anim({
                translateY:"-100%"
            },0.8,"ease",function(){
                $('.page2').removeClass('show')
                $('.page3').addClass('show')
            })
        })
        window.myScroll3 = new IScroll('#wrapper3', {
            mouseWheel: true,
            click: true,
            freeScroll:true,
            bounce:false
        });
    })
    
    // page3
    $(function(){
        $('.page3').on('swipeDown',function(){
            $('.page2,.page3').anim({
                translateY:"0"
            },0.8,"ease",function(){
                $('.page3').removeClass('show')
                $('.page2').addClass('show')
            })
        })
        var myScroll;
        // 定义区
        var startx=-(1440/965*(window.innerHeight-$('.logo').height())-window.innerWidth);
        var wrapper=window.innerWidth-startx;
        $('.p3_kv').css('width',wrapper);
        var timer=null;
        var slider2=$('#slider2')

        if (myScroll) {
            myScroll.refresh();
        } else {
            myScroll = new IScroll('#wrapper', {
                mouseWheel: true,
                click: true,
                freeScroll:true,
                scrollX: true, 
                scrollY: false,
                startX:startx,
                bounce:false
            });
        }

        $('.point2').tap(function(){
            clearTimeout(timer)
            var index = this.className.slice(-1);
            event.cancelBubble = true;
            slider2.show().css("opacity", 0);
            $('.arrowup').hide()
            timer=setTimeout(function() {
                TouchSlide({
                    slideCell:"#slider2",
                    mainCell:'.slider2',
                    defaultIndex: index-1
                });
                slider2.css("opacity", 1);
                $('.p3_tchua').addClass('show')
            }, 100);
        })
        $(".p3_close").tap(function(){
            $('.p3_kv').css('opacity',1)
            $('#slider2').hide()
            $(".arrowup").show()
            $('.p3_tchua').removeClass('show')
        })
        $('.page3').on('swipeUp',function(){
            $('.page3').anim({
                translateY:"-100%"
            },0.8,"ease",function(){
                $('.page3').removeClass('show')
                $('.page4').addClass('show')
            })
        })
    })

    // page4
    $(function(){
        $('.page4').on('swipeDown',function(){
            $('.page4,.page3').anim({
                translateY:"0"
            },0.8,"ease",function(){
                $('.page4').removeClass('show')
                $('.page3').addClass('show')
                $('.arrowup').show()
            })
        })
        $('.p4_man').tap(function(){
            $('.p4_man').attr('src','img/p4_manunc.png')
            $('.p4_woman').attr('src','img/p4_womanun.png')
            $(this).attr('src','img/p4_manche.png')
            $('.p4_sexy').val('先生')
        })     

        $('.p4_woman').tap(function(){
            $('.p4_man').attr('src','img/p4_manunc.png')
            $('.p4_woman').attr('src','img/p4_womanun.png')
            $(this).attr('src','img/p4_womanche.png')
            $('.p4_sexy').val('女士')
        })    
        var count=0
        $('.p4_check').tap(function(){
            count++;
            if(count%2==1){
                $('.p4_checked').attr('src','img/p4_uncheck.png')
                $('#checked').val('');
            }else{
                $('.p4_checked').attr('src','img/p4_checked.png')
                $('#checked').val("true")
            }
        })

        if(window.innerHeight<515){
            myScroll2 = new IScroll('#wrapper2', {
                mouseWheel: true,
                click: true,
                freeScroll:true,
                bounce:false
            });
        }
        $('.p4_back').tap(function(){
            $('.page4,.page3').anim({
                translateY:"0"
            },0.8,"ease",function(){
                $('.page4').removeClass('show')
                $('.page3').addClass('show')
                $('.arrowup').show()
            })
        })
        $(".p4_back1").tap(function(){
            $('.page4').css('z-index',"70")
            $('.p4_back1').hide()
            $('.arrowup').show()
        })

       // $('.p4_submit').on('click', submitForm)

        $('.p5_sharebtn').tap(function(){
            $('.p5_share').show()
        })
        $('.p5_share').tap(function(){
            $('.p5_share').hide()
        })
        $('.page4').on('swipeUp',function(){
            if($('.page4').hasClass('show')){
                $('.arrowup').hide();
                $('.page4').anim({
                    translateY:"-100%"
                },0.8,"ease",function(){
                    $('.page4').removeClass('show')
                    $('.page5').addClass('show')
                    $('.arrowup').hide();
                })
                setTimeout(function(){
                    $('.arrowup').hide();
                },50)
            }
        })

        $('.page5').on('swipeDown',function(){
            $('.page4').anim({
                translateY:"0"
            },0.8,"ease",function(){
                $('.page5').removeClass('show')
                $('.page4').addClass('show')
                $('.arrowup').show()
            })
        })
        var submitcheck = function(k, v) {

            console.log(123);

            function _alert(str) {
                setTimeout(function() {
                    alert(str);
                }, 300);
            }
            switch (k) {
                case 'checked':
                    return v ? true : (_alert('请勾选“我愿意参加郑州日产全车系驾享体验活动”'), false);

                    break;
                case 'name':
                    return v ? true : (_alert('“姓名”不能为空！'), false);

                    break;
                case 'sex':
                    return v ? true : (_alert('请选择性别！'), false);

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
                    return v ? true : (_alert('“试驾车型”不能为空！'), false);

                    break;
                case 'address':
                    return v ? true : (_alert('请填写具体街道地址'), false);

                    break;

            }
        }

        function submitForm() {
            MAPI.submit('#p4', 'dongfeng_richan_2015',
                submitcheck,
                function(r) {

                    var a = r.dealer.split(":");
                    r.dealer = a[1];
                    r.dealers = a[0];

                },
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
    })












})