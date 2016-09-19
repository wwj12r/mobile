window.onload=function(){
	$(window).resize(resize);
	resize();


    bindSlider();



    // $('.js_biao').tap(function(){
    //     var index = this.className.slice(-1);
    //     $('#biao' + index + ',.p2_biao').show()
    //     TouchSlide({
    //         slideCell:"#slider2",
    //         // titCell: ".hd span",
    //         mainCell:'.slider2',
    //         // effect:'leftLoop',
    //         // prevCell: ".sdfaefafas-prev",
    //         // nextCell: ".sdsdf-next",
    //         // endFun: function() {
    //         //     $.each($(".video"), function(i, video) {
    //         //         if(!video.paused) {video.pause()}
    //         //     })
    //         // }
    //         defaultIndex: index - 1
    //     });
    // })
    $('.goinside').tap(function(){
        $('#show360').hide();
        $('.inside').show()
    })
	$('.topic>div').tap(liandong)
	$('.p2_btn>div').tap(changecar)
	$('.p2_close').tap(function(){
		$('.p2_biao').hide()
    })

    var video = document.getElementById('video');
    video.addEventListener("pause", close, false);
    video.addEventListener("paused", close, false);
    video.addEventListener("ended", close, false);
    function close() {
        video.pause();
        $(".p2_block").hide();
    }



	goldcarid = img360("goldcarid")
	redcarid = img360("redcarid")
	blackcarid = img360("blackcarid")
	whitecarid = img360("whitecarid")
	// bindCar("goldcarid");
}
var goldcarid,redcarid,blackcarid,whitecarid
// var _cars = {
// 	"goldcarid" : '<div id="goldcarid" class="goldcar">' +
//                 '<div class="img_box" style="display:block">' +
//                     '<img src="img/color/gold/00.png" >' +
//                     '<div class="biao_box1">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/03.png" >' +
//                     '<div class="biao_box2">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>            ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/06.png" >' +
//                     '<div class="biao_box3">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                        ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/09.png" >' +
//                     '<div class="biao_box4">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                    ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/12.png" >' +
//                     '<div class="biao_box5">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                                ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/15.png" >' +
//                     '<div class="biao_box6">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                       ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/18.png" >' +
//                     '<div class="biao_box7">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                         ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/21.png" > ' +
//                     '<div class="biao_box8">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                        ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/24.png" >' +
//                     '<div class="biao_box9">' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                                    ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/27.png" >' +
//                     '<div class="biao_box10">' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                              ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/30.png" >' +
//                     '<div class="biao_box11">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                               ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/gold/33.png" >' +
//                     '<div class="biao_box12">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                           ' +
//                 '</div>' +
//             '</div>',
//     "redcarid" : '<div id="redcarid" class="redcar show">' +
//                 '<div class="img_box" style="display:block">' +
//                     '<img src="img/color/red/00.png" >' +
//                     '<div class="biao_box1">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/03.png" >' +
//                     '<div class="biao_box2">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>            ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/06.png" >' +
//                     '<div class="biao_box3">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                        ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/09.png" >' +
//                     '<div class="biao_box4">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                    ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/12.png" >' +
//                     '<div class="biao_box5">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                                ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/15.png" >' +
//                     '<div class="biao_box6">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                       ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/18.png" >' +
//                     '<div class="biao_box7">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                         ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/21.png" > ' +
//                     '<div class="biao_box8">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                        ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/24.png" >' +
//                     '<div class="biao_box9">' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                                    ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/27.png" >' +
//                     '<div class="biao_box10">' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                              ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/30.png" >' +
//                     '<div class="biao_box11">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                               ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/red/33.png" >' +
//                     '<div class="biao_box12">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                           ' +
//                 '</div>' +
//             '</div>',
//     "blackcarid" : '<div id="blackcarid" class="blackcar">' +
//                 '<div class="img_box" style="display:block">' +
//                     '<img src="img/color/black/00.png" >' +
//                     '<div class="biao_box1">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/03.png" >' +
//                     '<div class="biao_box2">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>            ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/06.png" >' +
//                     '<div class="biao_box3">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                        ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/09.png" >' +
//                     '<div class="biao_box4">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                    ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/12.png" >' +
//                     '<div class="biao_box5">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                                ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/15.png" >' +
//                     '<div class="biao_box6">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                       ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/18.png" >' +
//                     '<div class="biao_box7">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                         ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/21.png" > ' +
//                     '<div class="biao_box8">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                        ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/24.png" >' +
//                     '<div class="biao_box9">' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                                    ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/27.png" >' +
//                     '<div class="biao_box10">' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                              ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/30.png" >' +
//                     '<div class="biao_box11">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                               ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/black/33.png" >' +
//                     '<div class="biao_box12">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                           ' +
//                 '</div>' +
//             '</div>',
//     "whitecarid" : '<div id="whitecarid" class="whitecar">' +
//                 '<div class="img_box" style="display:block">' +
//                     '<img src="img/color/white/00.png" >' +
//                     '<div class="biao_box1">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/03.png" >' +
//                     '<div class="biao_box2">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>            ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/06.png" >' +
//                     '<div class="biao_box3">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                        ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/09.png" >' +
//                     '<div class="biao_box4">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                    ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/12.png" >' +
//                     '<div class="biao_box5">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                                ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/15.png" >' +
//                     '<div class="biao_box6">' +
//                         '<div class="biao1"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                       ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/18.png" >' +
//                     '<div class="biao_box7">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                         ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/21.png" > ' +
//                     '<div class="biao_box8">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                        ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/24.png" >' +
//                     '<div class="biao_box9">' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                                    ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/27.png" >' +
//                     '<div class="biao_box10">' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                              ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/30.png" >' +
//                     '<div class="biao_box11">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                               ' +
//                 '</div>' +
//                 '<div class="img_box">' +
//                     '<img src="img/color/white/33.png" >' +
//                     '<div class="biao_box12">' +
//                         '<div class="biao2"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao3"><img src="img/biao.png" width="100%"></div>' +
//                         '<div class="biao4"><img src="img/biao.png" width="100%"></div>' +
//                     '</div>                                           ' +
//                 '</div>' +
//             '</div>'
// }


function resize() {
    $("html").css("fontSize", window.innerWidth / 20);
}

function liandong(){
	$('.topic>div').removeClass('checked');
	$('.txt').hide();
	$(this).addClass('checked');
	$('.txt').eq($(this).index()).show();
    bindSlider();
    closeVideo();
}

function closeVideo() {
    $.each($(".video"), function(i, video) {
        if(!video.paused) {video.pause()}
    })
}

function bindSlider() {
    TouchSlide({
        slideCell:"#slider",
        mainCell:'.bd',
        titCell: ".hd span",
        endFun: closeVideo
    });
    setTimeout(function() {
        $('[data-src]').on('tap',function(){
            var self=$(this);
            $(".p2_block video").attr('src',self.data('src'));
            $(".p2_block").show();
            setTimeout(function() {
                video.play();
            }, 100);
        })
    }, 10);
}

function changecar(){
	// bindCar($(this).attr("data-carid"))
    $('.p2_car>div').removeClass('show')
	$('.p2_car>div').eq($(this).index()).addClass('show').children().removeClass("show").eq(0).addClass("show")
    goldcarid.now = redcarid.now = blackcarid.now = whitecarid.now = 0;
}

function img360(id){
	// var c1=new Array();
	// //创建数组，i的数量是图片的总数；进行for循环。
	// for(var i=1;i<=12;i++){
	// 	c1[i]=new Image();
	// 	c1[i].src="img/aCar"+i+".png";
	// }

	//定义要360度旋转的对象
	var main_swipe = document.getElementById(id);
	var cars = main_swipe.children;
	var max = cars.length - 1;
    main_swipe.now = 0;

	//创建滑动的基本距离和滑动方法属性。
	var defaults = {
		threshold: {
			x: 10,
			y: 30
		},
		swipeLeft: function() {showPicLeft();},
		swipeRight: function() {showPicRight();},
	};
	//定义初始坐标
	var originalCoord = { x: 0, y: 0 };
	var shiftCoord = { x: 0, y: 0 };
	var finalCoord = { x: 0, y: 0 };

	main_swipe.addEventListener("touchstart",function(ev) {
		
		//定义滑动初始时的坐标
		originalCoord.x = ev.targetTouches[0].pageX;
		originalCoord.y = ev.targetTouches[0].pageY;
		shiftCoord.x = ev.targetTouches[0].pageX;
		shiftCoord.y = ev.targetTouches[0].pageY;
		finalCoord.x = originalCoord.x;
		finalCoord.y = originalCoord.y;
		
	}, false);

	main_swipe.addEventListener("touchmove",function(ev) {
		
		//定义滑动中的坐标
		// ev.preventDefault();
		finalCoord.x = ev.targetTouches[0].pageX;
		finalCoord.y = ev.targetTouches[0].pageY;
		
		//当横向滑动距离大于5时，则判断为有效滑动并执行向左滑动的方法。反之则向向右滑动。
		if(finalCoord.x - shiftCoord.x >20){
			ev.preventDefault();
			defaults.swipeLeft();
			shiftCoord.x = finalCoord.x;
		
		}else if(finalCoord.x - shiftCoord.x < -20){
			ev.preventDefault();
			defaults.swipeRight();
			shiftCoord.x = finalCoord.x;

	   }
	}, false);

	main_swipe.addEventListener("touchend",function(ev) {
		
		var changeY = originalCoord.y - finalCoord.y;
		
		//滑动结束时，进行坐标判断。并执行向左或是向右的方法
		if(changeY < defaults.threshold.y && changeY > (defaults.threshold.y*-1)) {
			
			changeX = originalCoord.x - finalCoord.x;
			
			if(changeX > defaults.threshold.x) {
				defaults.swipeRight();
			}
			
			if(changeX < (defaults.threshold.x*-1)) {
				defaults.swipeLeft();
			}
		}
	}
	, false);

	//向左滑动方法showPicLeft
	var showPicRight = function(){
		var prev = main_swipe.now - 1;
		if(prev < 0){
			prev = max;
		};
		$(cars[prev]).addClass('show');
		$(cars[main_swipe.now]).removeClass('show');
		main_swipe.now = prev;
	};

	//向右滑动方法
	var showPicLeft = function(){
		var next = main_swipe.now + 1;
		if(next > max){
			 next = 0;
		};
		$(cars[next]).addClass('show');
		$(cars[main_swipe.now]).removeClass('show');
		main_swipe.now = next;
	};

	var oE = "ontouchend" in window ? "touchend" : "click";

	$(".aW0btn360All").each(function(index){
	  //console.log('input %d is: %o', index, this)
		$(this).find("a").bind(oE,function(){
			$(".aFontInfo").html($(this).attr("oText"));
			$(".aFontBox").addClass("iFontAnim");
		})
	})

    return main_swipe;
};

