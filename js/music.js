$(document).ready(function () {
    // 轮播图
    var num = 0; 
    var timer = null;
    timer = setInterval(move, 2000);
    $(".focus").hover(function () {
        clearInterval(timer);
        timer = null;
        }, function () {
            timer = setInterval(move, 2000);
        }
    );
    $(".focus ol li").click(function () {
        var index = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".focus img").eq(index).attr("class", "show").siblings("img").attr("class", "unshow");
    })
        
    function move() {
        if (num > $(".focus img").length - 1) {
            num = 0;
        }   
        $(".focus ol li").eq(num).addClass("cur").siblings().removeClass("cur");
        $(".focus img").eq(num).attr("class", "show").stop().siblings("img").attr("class", "unshow");
        num++;
    }

    // 流行音乐人
    $(".fash, .quik").click(function () {
        $(this).addClass("show1").siblings("span").removeClass("show1");
        if($(".fash").hasClass("show1")) {
            $(".fash1").eq(0).show().siblings(".fash1").hide();
        }else {
            $(".fash1").eq(1).show().siblings(".fash1").hide()
        }
    })
    // 推荐
    $("button").click(function () {
        $(this).addClass("active").siblings("button").removeClass("active");
        if($(".btn1").hasClass("active")) {
            $(".sent2").eq(0).show().siblings(".sent2").hide();
        }else {
            $(".sent2").eq(1).show().siblings(".sent2").hide()
        }
    })
    //排行榜
    $(".rank>ul li").click(function () {
        var index = $(this).index();
        $(this).addClass("show3").siblings("li").removeClass("show3");
        $(".hot-lis ul").eq(index).addClass("current").siblings("ul").removeClass("current");
    })
});