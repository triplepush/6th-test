$(function() {
    $(window).on("load", function() {
        $(".loader").fadeOut(3800);
        $("video").fadeIn(400);
    });
});

var video = document.getElementById("video_background");
    video.addEventListener("canplay", function() {
    setTimeout(function() {
        video.play();
        }, 2000);
        video.pause();
        
    });