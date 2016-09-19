//<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
//<script src="js/wxShare.js"></script>

var wxtitle = "惊喜乐享 梅赛德斯-奔驰E级车全系车型 ";
var wxdesc = "“先享后选-弹性购车新方案”免3期月付";
var wxlink = "http://h5.vsail.net/skynodBenzEclass/index.html";
var wximgUrl = "http://h5.vsail.net/skynodBenzEclass/img/WXShare.jpg";
window.addEventListener('load', onloadFun, false);

function onloadFun() {
    $.ajax({
        async: false,
        url: 'http://h5.mconnect.cn/WXApi/m/GetWXJsApiByAjax.aspx?urlStr=' + encodeURIComponent(window.location.href),
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        beforeSend: function () {
        },
        success: function (json) {
            wx.config({
                debug: false,
                appId: json["appId"],
                timestamp: json["timestamp"],
                nonceStr: json["nonceStr"],
                signature: json["signature"],
                jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage'
                          ]
            });

            wx.ready(function () {
                wx.onMenuShareAppMessage({
                    title: wxtitle,
                    desc: wxdesc,
                    link: wxlink,
                    imgUrl: wximgUrl,
                    trigger: function (res) {
                    },
                    success: function (res) {
                    },
                    cancel: function (res) {
                    },
                    fail: function (res) {
                    }
                });

                wx.onMenuShareTimeline({
                    title: wxtitle,
                    link: wxlink,
                    imgUrl: wximgUrl,
                    trigger: function (res) {
                    },
                    success: function (res) {
                    },
                    cancel: function (res) {
                    },
                    fail: function (res) {
                    }
                });
            });
        },
        complete: function (XMLHttpRequest, textStatus) {
        },
        error: function (xhr) {
        }
    });
}