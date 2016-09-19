//<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
//<script src="js/wxShare.js"></script>

var wxtitle = "Audi Sport嘉年华";
var wxdesc = "Audi Sport嘉年华复古赛车节-新RS7上市，盛邀您共鉴精彩！";
var wxlink = "http://mobi.mconnect.cn/Audi-Sport/index.html";
var wximgUrl = "http://mobi.mconnect.cn/Audi-Sport/img/300.jpg";
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
                    title: wxdesc,
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