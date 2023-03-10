$(document).ready(function () {

  //메뉴
  $(".main").hover(function(){
    $(this).find(".sub_all").stop().slideDown();
  },function(){
    $(this).find(".sub_all").stop().slideUp();
  });

  //탭메뉴수직이동
  
  $(".tab li").click(function() {

    numh = $(this).index();
    moveh = +70 * numh; //세로높이 70px씩 증가됨

    $(".tab-header .tab-highlight").stop(true,true).animate({top: moveh});
    $(this).siblings().removeClass("active"); 
    $(this).addClass("active"); 

    let result = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#" + result).addClass("active");

  });

  
});
