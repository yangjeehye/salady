$(function(){
  const $gnb = $('header > nav > .gnb');
  const $lnb = $('header > nav .lnb');
  const $bg_lnb = $('.bg_lnb');

  // header
  const downFn = function(){
    $bg_lnb.stop().slideDown();

    $lnb.stop().slideDown();
  };

  const upFn = function(){
    $lnb.stop().slideUp();
    
    $bg_lnb.stop().slideUp();
  };

  $gnb.on('mouseover',function(evt){
    evt.preventDefault();

    downFn();
  });

  $gnb.on('mouseout',function(evt){
    evt.preventDefault();

    upFn();
  });

  $bg_lnb.on('mouseover',function(evt){
    evt.preventDefault();

    downFn();
  });

  $bg_lnb.on('mouseout',function(evt){
    evt.preventDefault();

    upFn();
  });

  $gnb.on('click', function(evt){
    evt.preventDefault();
  });

  $lnb.on('click', function(evt){
    evt.preventDefault();
  });

  $bg_lnb.on('click', function(evt){
    evt.preventDefault();
  });


  // section.banner
  const $slides_a = $('section.banner > .slide > .slide-container > li > a');
  const $indicator = $('section.banner > .slide > .slide-pagination > li > a');
  const $container = $('section.banner >.slide> .slide-container');
  const $slides = $('section.banner >.slide> .slide-container>li');

  
  let nowIdx = 0;
  let intervalKey = 0;
  
  const slideFn = function () {
    const $container = $('section.banner >.slide> .slide-container');
    const $slides = $('section.banner >.slide> .slide-container>li');
    
    $container.stop().animate({left:-1440},function(){
      $slides.eq(0).appendTo($container);
      $container.css({left:0});
    });

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  };

  $slides_a.on('click', function(evt){
    evt.preventDefault();
  });

  $indicator.on('click', function(evt){
    
    //슬라이드 초기화
    $container.empty();

    for(let i=0;i<4;i++)
      $container.append($slides.eq(i));
    

    evt.preventDefault();

    setInterval(function(){
      clearInterval(intervalKey);
    });

    nowIdx = $indicator.index(this);

    $container.animate({
      left : -1440*nowIdx
    });
    

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

  });

  // 자동재생
  const autoPlay = function(){
    intervalKey = setInterval(function(){

      if(nowIdx<3){
        nowIdx++;
      }else{
        nowIdx=0;
      }
  
      slideFn();
    },3000);
  };

  $(window).on('load', function(){
    autoPlay(1);
  });

   // section.menu영역 자바스크립트
   const $menu_gnb = $('section.menu > article > .menu-gnb > li > a');
   const $menu_con = $('section.menu > article > .menu_con');
 
   let menuIdx = 0;
 
   $menu_gnb.on('click', function(evt){
     evt.preventDefault();
 
     menuIdx = $menu_gnb.index(this);
 
     $menu_gnb.eq(menuIdx).parent().addClass('on').siblings().removeClass('on');
 
     $menu_con.eq(menuIdx).show().siblings('.menu_con').hide();
   });
 
   $(window).on('load', function(){
     $menu_con.hide();
 
     $menu_con.filter('.on').show();
   });


  //  section.cont영역 자바스크립트
   $('section.cont').on('click', function(evt){
    evt.preventDefault();
   });
  
  
  // section.cont_2영역 자바스크립트
  const $cont_info_2 = $('section.cont_2 > .cont_2_menu > .cont_info_2');

  $cont_info_2.on('click', function () {
    alert('샐럽오더 준비중입니다.')
  });

  // footer영역 자바스크립트
  $('footer > .personal > .personal_gnb > li > a').on('click', function(evt){
    evt.preventDefault();
  });
});