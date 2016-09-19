//<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
//<script src="js/wxShare.js"></script>

var wxtitle = "奥迪换享季，优惠限时礼遇";
var wxdesc = "置换A6L可享2-3年0利率＋3年保养，更多惊喜，就在奥迪6月换享季";
var wxlink = "http://mobi.mconnect.cn/audi_a6l/index.html";
var wximgUrl = "http://mobi.mconnect.cn/audi_a6l/img/WXShare.jpg";
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