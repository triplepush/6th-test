/*
$(function() {
    $(window).on("load", function() {
        $(".loader").fadeOut(4000);
    });
});
*/

/*
var video = document.getElementById("video_background");
    video.addEventListener("canplay", function() {
    setTimeout(function() {
        video.play();
        }, 3800);
        video.pause();
        
    });
*/

 $(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(2000); //一開始淡入
    $('a').click(function(event) { //點選 class 為 link 的 a 元件時觸發
    event.preventDefault(); //取消事件預設動作
    newLocation = this.href;
    $('body').fadeOut(2000, newpage); //點選後淡出
});
    function newpage() {
    window.location = newLocation;
    }
});

