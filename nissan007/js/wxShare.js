//<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
//<script src="js/wxShare.js"></script>

var wxtitle = "和蓝鸟拯救男神“00N”";
var wxdesc = "燃起年轻，领潮上市，快和蓝鸟一起去解救神秘特工“00N”！";
var wxlink = "http://mobi.mconnect.cn/nissan007/index.html";
var wximgUrl = "http://mobi.mconnect.cn/nissan007/img/wxshare.jpg";
window.addEventListener('load', onloadFun, false);

function onloadFun() {
    $.ajax({
        async: false,
        url: 'http://h5.mconnect.cn/WXApiA/m/GetWXJsApiByAjax.aspx?urlStr=' + encodeURIComponent(window.location.href),
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