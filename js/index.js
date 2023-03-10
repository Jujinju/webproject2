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

  //커리큘럼박스

  $(".num0").hover(function(){
    $(".curriEx #tab6").hide();
    $(".curriEx #tab7").hide();
    $(".curriEx #tab8").hide();
    $(".curriEx #tab5").stop().show("slow");
  });

  $(".num1").hover(function(){
    $(".curriEx #tab5").hide();
    $(".curriEx #tab7").hide();
    $(".curriEx #tab8").hide();
    $(".curriEx #tab6").stop().show("slow");
  });
  
  $(".num2").hover(function(){
    $(".curriEx #tab5").hide();
    $(".curriEx #tab6").hide();
    $(".curriEx #tab8").hide();
    $(".curriEx #tab7").stop().show("slow");
  });

  $(".num3").hover(function(){
    $(".curriEx #tab5").hide();
    $(".curriEx #tab6").hide();
    $(".curriEx #tab7").hide();
    $(".curriEx #tab8").stop().show("slow");
  });

});
