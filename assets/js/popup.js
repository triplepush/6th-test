$(function() {
    $(window).on("load", function() {
        $(".loader").fadeOut(4000);
    });
});

var video = document.getElementById("video_background");
    video.addEventListener("canplay", function() {
    setTimeout(function() {
        video.play();
        }, 3800);
        video.pause();
        
    });