//스크롤금지//
/*
$(document).on("mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll", function(e) {
        e.preventDefault();
        return;
    });
    $(document).on("keydown.disableScroll", function(e) {
        var eventKeyArray = [32, 33, 34, 35, 36, 37, 38, 39, 40];
        for (var i = 0; i < eventKeyArray.length; i++) {
            if (e.keyCode === eventKeyArray [i]) {
                e.preventDefault();
                return;
            }
        }
    });
		
*/		
/* 	//풀페이지
	$(document).ready(function() {
		$('#section1,#section2,#section3,#section4 ').fullpage();
	});
	 */
	
	
	
	//탭메뉴
  $( function() {
    $( "#tabs" ).tabs();
  } );
	
	$(function() {
	$(".section-02 .btn ul li a").click( function() {
		$(".section-02 .btn ul li a").removeClass("active-1")
		$(this).addClass("active-1")
		});
	});


//메뉴바 변경


$(function() {
	$("a.intro").click( function() {
		$("nav .gnb li a").css("background","none");
		$("nav .gnb li a").css("color","#8c000f");
		$("a.intro").css("background","#8c000f");
		$("a.intro").css("color","#ccc");
		
		
	});
	$("a.episodes").click( function() {
		$("nav .gnb li a").css("background","none");
		$("nav .gnb li a").css("color","#8c000f");
		$("a.episodes").css("background","#8c000f");
		$("a.episodes").css("color","#ccc");
	});
	$("a.about").click( function() {
		$("nav .gnb li a").css("background","none");
		$("nav .gnb li a").css("color","#8c000f");
		$("a.about").css("background","#8c000f");
		$("a.about").css("color","#ccc");
	});
	$("a.charactors").click( function() {
		$("nav .gnb li a").css("background","none");
		$("nav .gnb li a").css("color","#8c000f");
		$("a.charactors").css("background","#8c000f");
		$("a.charactors").css("color","#ccc");
	});
	$("a.contants").click( function() {
		$("nav .gnb li a").css("background","none");
		$("nav .gnb li a").css("color","#8c000f");
		$("a.contants").css("background","#8c000f");
		$("a.contants").css("color","#ccc");
	});
	
});

//슬라이드 속도//

$(function($) {
        $(".intro, .episodes").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop:$(this.hash).offset().top}, 1000);
        });

				$(".about").click(function(event){            
                event.preventDefault();
                $('html,body').stop().animate({scrollTop:$(this.hash).offset().top}, 1000);
        });
				$("#charactors").click(function(event){            
                event.preventDefault();
                $('html,body').stop().delay(2000).animate({scrollTop:$(this.hash).offset().top}, 3000);
        });
				$("#contants").click(function(event){            
                event.preventDefault();
                $('html,body').stop().delay(1000).animate({scrollTop:$(this.hash).offset().top}, 3000);
        });
});




$(function() {
	//section2-animation//
	$("a.episodes").click( function() {
		$(".section-02 .bg-actor .actor-01").css("opacity",1);
		$(".section-02 .bg-actor .actor-01").css({left:'0'});
		$(".section-02 .bg-actor .actor-02").css("opacity",1);
		$(".section-02 .bg-actor .actor-02").css({right:'0'});
		
		$(".section-02 .left-contant .title-text h2").css("transform","translateX(0)");
		$(".section-02 .left-contant .title-text h2").css("opacity",1);
		$(".section-02 .left-contant .title-text p").css("transform","scale(1)");
		$(".section-02 .left-contant .title-text p").css("opacity",1);
		$(".section-02 .left-contant .title-text h3").css("transform","translateX(0)");
		$(".section-02 .left-contant .title-text h3").css("opacity",1);
		
		$(".section-02 .left-contant .movie").css("transform","scale(1)");

		$(".section-02 .right-contant").css("opacity",1);
	});
	
	//section3-animation//
	$("a.about").click( function() {
		$(".section-03").css("background-position","center bottom");

		$(".section-03-bg-blur").css("opacity",1);
		
		$(".section-03 .bg-actor .actor-01").css({bottom:'0'});
		$(".section-03 .bg-actor .actor-01").css("opacity",1);
		
		$(".section-03 .contant").css("transform","scale(1)");
		
	});
	
	//section3-animation-out//
	$("a.charactors").click( function() {
		$(".section-03-bg-blur").css("opacity",0);
		$(".section-03-bg-blur").css("transition","all 1.5s 0.1s");
		
		$(".section-03 .bg-actor .actor-01").css({bottom:'-100%'});
		$(".section-03 .bg-actor .actor-01").css("opacity",0);
		$(".section-03 .bg-actor .actor-01").css("transition","all 0.6s 0.1s");
		
		$(".section-03 .contant").css("transform","scale(0)");
		$(".section-03 .contant").css("transition","all 0.6s 0.1s");
		
		//section4-animation//
		$(".section-04").css("background-position","center bottom");
		$(".section-04-bg-blur").css("opacity",1);
						
		$(".section-04 .actor-selecter li:nth-child(1)").css("opacity",1);
		$(".section-04 .actor-selecter li:nth-child(1)").css("transform","translateY(0)");
		$(".section-04 .actor-selecter li:nth-child(1)").css("transition","all 1s 8s");
		
		$(".section-04 .actor-selecter li:nth-child(2)").css("opacity",1);
		$(".section-04 .actor-selecter li:nth-child(2)").css("transform","translateY(0)");
		$(".section-04 .actor-selecter li:nth-child(2)").css("transition","all 1s 8.2s");
		
		$(".section-04 .actor-selecter li:nth-child(3)").css("opacity",1);
		$(".section-04 .actor-selecter li:nth-child(3)").css("transform","translateY(0)");
		$(".section-04 .actor-selecter li:nth-child(3)").css("transition","all 1s 8.4s");
		
		$(".section-04 .actor-selecter li:nth-child(4)").css("opacity",1);
		$(".section-04 .actor-selecter li:nth-child(4)").css("transform","translateY(0)");
		$(".section-04 .actor-selecter li:nth-child(4)").css("transition","all 1s 8.6s");
		
		$(".section-04 .actor-selecter li:nth-child(5)").css("opacity",1);
		$(".section-04 .actor-selecter li:nth-child(5)").css("transform","translateY(0)");
		$(".section-04 .actor-selecter li:nth-child(5)").css("transition","all 1s 8.8s");
		
		$(".section-04 .actor-selecter li:nth-child(6)").css("opacity",1);
		$(".section-04 .actor-selecter li:nth-child(6)").css("transform","translateY(0)");
		$(".section-04 .actor-selecter li:nth-child(6)").css("transition","all 1s 9s");
		
		$(".section-04 .actor-selecter li:nth-child(7)").css("opacity",1);
		$(".section-04 .actor-selecter li:nth-child(7)").css("transform","translateY(0)");
		$(".section-04 .actor-selecter li:nth-child(7)").css("transition","all 1s 9.2s");
		
		$(".section-04 .actor-selecter li:nth-child(8)").css("opacity",1);
		$(".section-04 .actor-selecter li:nth-child(8)").css("transform","translateY(0)");
		$(".section-04 .actor-selecter li:nth-child(8)").css("transition","all 1s 9.4s");
		
	});
	
		//eleveter//
		
		$("a.contants, a.intro, a.about, a.charctor").click( function() {
		$(".section-04-bg-elevator .left-door").css("animation-name","closedoor");
		$(".section-04-bg-elevator .right-door").css("animation-name","closedoor");
	});
		
		$("a.contants").click( function() {
		$(".section-04-bg-elevator .left-door").css("animation-name","lclosedoor");
		$(".section-04-bg-elevator .right-door").css("animation-name","rclosedoor");
	});
	
	
	
	
});




	//케릭터선택//

$(function() {
	$(".section-04 .actor-selecter li.sherlock a").click( function() {
		$(".section-04 .select-wrap .select-text, .section-04 .select-bg, .section-04 .actor-bg").css("opacity",0);
		$(".section-04 .select-wrap .select-text").css("left","-495px");
		$(".section-04 .select-actor-01 .select-bg").css("opacity",1);
		$(".section-04 .select-actor-01 .select-wrap .select-text").css("opacity",1);
		$(".section-04 .select-actor-01 .select-wrap .select-text").css("left",0);
		$(".section-04 .select-sherlock-bg").css("opacity",0.5);
	});
	
	$(".section-04 .actor-selecter li.watson a").click( function() {
		$(".section-04 .select-wrap .select-text, .section-04 .select-bg, .section-04 .actor-bg").css("opacity",0);
		$(".section-04 .select-wrap .select-text").css("left","-495px");
		$(".section-04 .select-actor-02 .select-bg").css("opacity",1);
		$(".section-04 .select-actor-02 .select-wrap .select-text").css("opacity",1);
		$(".section-04 .select-actor-02 .select-wrap .select-text").css("left",0);
		$(".section-04 .select-watson-bg").css("opacity",0.5);
	});
	
	$(".section-04 .actor-selecter li.mary a").click( function() {
		$(".section-04 .select-wrap .select-text, .section-04 .select-bg, .section-04 .actor-bg").css("opacity",0);
		$(".section-04 .select-wrap .select-text").css("left","-495px");
		$(".section-04 .select-actor-03 .select-bg").css("opacity",1);
		$(".section-04 .select-actor-03 .select-wrap .select-text").css("opacity",1);
		$(".section-04 .select-actor-03 .select-wrap .select-text").css("left",0);
		$(".section-04 .select-mary-bg").css("opacity",0.5);
	});
	
	$(".section-04 .actor-selecter li.mycroft a").click( function() {
		$(".section-04 .select-wrap .select-text, .section-04 .select-bg, .section-04 .actor-bg").css("opacity",0);
		$(".section-04 .select-wrap .select-text").css("left","-495px");
		$(".section-04 .select-actor-04 .select-bg").css("opacity",1);
		$(".section-04 .select-actor-04 .select-wrap .select-text").css("opacity",1);
		$(".section-04 .select-actor-04 .select-wrap .select-text").css("left",0);
		$(".section-04 .select-mycroft-bg").css("opacity",0.5);
	});
	
	$(".section-04 .actor-selecter li.molly a").click( function() {
		$(".section-04 .select-wrap .select-text, .section-04 .select-bg, .section-04 .actor-bg").css("opacity",0);
		$(".section-04 .select-wrap .select-text").css("left","-495px");
		$(".section-04 .select-actor-05 .select-bg").css("opacity",1);
		$(".section-04 .select-actor-05 .select-wrap .select-text").css("opacity",1);
		$(".section-04 .select-actor-05 .select-wrap .select-text").css("left",0);
		$(".section-04 .select-molly-bg").css("opacity",0.5);
	});
	
	$(".section-04 .actor-selecter li.hudson a").click( function() {
		$(".section-04 .select-wrap .select-text, .section-04 .select-bg, .section-04 .actor-bg").css("opacity",0);
		$(".section-04 .select-wrap .select-text").css("left","-495px");
		$(".section-04 .select-actor-06 .select-bg").css("opacity",1);
		$(".section-04 .select-actor-06 .select-wrap .select-text").css("opacity",1);
		$(".section-04 .select-actor-06 .select-wrap .select-text").css("left",0);
		$(".section-04 .select-hudson-bg").css("opacity",0.5);
	});
	
	$(".section-04 .actor-selecter li.lestrade a").click( function() {
		$(".section-04 .select-wrap .select-text, .section-04 .select-bg, .section-04 .actor-bg").css("opacity",0);
		$(".section-04 .select-wrap .select-text").css("left","-495px");
		$(".section-04 .select-actor-07 .select-bg").css("opacity",1);
		$(".section-04 .select-actor-07 .select-wrap .select-text").css("opacity",1);
		$(".section-04 .select-actor-07 .select-wrap .select-text").css("left",0);
		$(".section-04 .select-lestrade-bg").css("opacity",0.5);
	});
	
	$(".section-04 .actor-selecter li.moriarty a").click( function() {
		$(".section-04 .select-wrap .select-text, .section-04 .select-bg, .section-04 .actor-bg").css("opacity",0);
		$(".section-04 .select-wrap .select-text").css("left","-495px");
		$(".section-04 .select-actor-08 .select-bg").css("opacity",1);
		$(".section-04 .select-actor-08 .select-wrap .select-text").css("opacity",1);
		$(".section-04 .select-actor-08 .select-wrap .select-text").css("left",0);
		$(".section-04 .select-moriarty-bg").css("opacity",0.5);
	});
	
	//모달창
	$('.modal-close').click(function(){
		$('.section-05 .container .modals').stop().animate({opacity:0},500);
		$('.section-05 .container > ul li').css('pointer-events','all');
		$('#clips, #gallery, #wallpaper').css('pointer-events','none');
	});
	$('li.clips').click(function(){
		$('#clips').stop().animate({opacity:1},500);
		$('#clips').css('pointer-events','all');
		$('.section-05 .container > ul li').css('pointer-events','none');
	});
	$('li.gallery').click(function(){
		$('#gallery').stop().animate({opacity:1},500);
		$('#gallery').css('pointer-events','all');
		$('.section-05 .container > ul li').css('pointer-events','none');
	});
	$('li.wallpaper').click(function(){
		$('#wallpaper').stop().animate({opacity:1},500);
		$('#wallpaper').css('pointer-events','all');
		$('.section-05 .container > ul li').css('pointer-events','none');
	});
	
	
});
