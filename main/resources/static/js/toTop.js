/**
 *  Plugin Name: jQuery toTop for smoothly Scroll back to Top
 *  Plugin URL: https://github.com/mmkjony/jQuery.toTop
 *  Version: 1.1
 *  Author: MMK Jony
 *  Author URL: https://github.com/mmkjony
 *  License: Licensed under MIT
 **/

(function( $ ){
    'use strict';
    $.fn.toTop = function(opt){
        //variables
        var elem = this;
        var win = $(window);
        var doc = $('html, body');

        //Extended Options
        var options = $.extend({
            autohide: true,
            offset: 50,
            speed: 500,
            position: true,
            right: 15,
            bottom: 30
        }, opt);

        elem.css({
            'cursor': 'pointer'
        });

        if(options.autohide){
            elem.css('display', 'none');
        }

        if(options.position){
            elem.css({
                'position': 'fixed',
                'right': options.right,
                'bottom': options.bottom,
            });
        }

        elem.click(function(){
            doc.animate({scrollTop: 0}, options.speed);
        });

        win.scroll(function(){
            var scrolling = win.scrollTop();

            if(options.autohide){
                if(scrolling > options.offset){
                    elem.fadeIn(options.speed);
                }
                else elem.fadeOut(options.speed);
            }

        });

    };

}( jQuery ));

$('.to-top').toTop();

$("#sousuo").hover(function () {
    $("#sousuobtn").css("color","white")
})
$("#sousuobtn").hover(function () {
    $("#sousuobtn").css("color","white")
})
$("#sousuo").mouseout(function () {
    $("#sousuobtn").css("color","#007bff")
})

$(function () {
    var width = window.innerWidth;
    if (width<=992){
        $("#smallexit").show();
    }
    if (width>992){
        $("#smallexit").hide();
    }
})

window.onresize = function () {
    if (!$(".navbar-toggler").is(':hidden')) {
        $("#smallexit").show();
    }
    if ($(".navbar-toggler").is(':hidden')){
        $("#smallexit").hide();
    }
};

window.οnbefοreunlοad = function () {
    $.post("/chat/flushMsgCount");
}
window.onload = function () {
    $.post("/chat/flushMsgCount");
}
