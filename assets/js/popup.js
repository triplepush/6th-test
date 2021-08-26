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
    $('a').click(function(event) { //點選 class 為 link 的 a 元件時觸發
    event.preventDefault(); //取消事件預設動作
    newLocation = this.href;
    $('.map').animate({
        margin: '-60px',
    }, 'normal' , newpage ); //點選後淡出
});
    function newpage() {
    window.location = newLocation;
    }
});

function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}
fadeInPage();

document.addEventListener('DOMContentLoaded', function() {
    if (!window.AnimationEvent) { return; }
    var anchors = document.getElementsByTagName('a');
    for (var idx=0; idx<anchors.length; idx+=1) {
        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }
        anchors[idx].addEventListener('click', function(event) {
            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;
            
            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);
            
            event.preventDefault();
            fader.classList.add('fade-in');
        });
    }
});

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }
    var fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
  });

