$(document).on("scroll",function () {
    let st = $(this).scrollTop()
    if (st>100){
        $('div.top').fadeIn(200)
    }else{
        $('div.top').fadeOut(200)
    }
})
$('div.top').on("click",function () {
    $('html').animate({
        'scrollTop': '0'
    },500,'linear')
})
$("div.form_up").on("click",function(){
    $('div.menu-small>div:nth-of-type(2)').fadeOut(200)
    $("div.cover").css({
        'animation-name': 'openModal',
        'animation-duration': '1s',
        'animation-timing-function': 'linear'
    }).fadeIn(200)
})
$("div.close").on("click",function(){
    $('div.menu-small>div:nth-of-type(2)').fadeIn(300)
    $("div.cover").css({
        'animation-name': 'closeModal',
        'animation-duration': '1s',
        'animation-timing-function': 'linear'                
    }).fadeOut(200)
})
var swiper = new Swiper(".mySliderNews", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  let Home = $("div.wrapper>div.menu>nav>div>ul>li>a:nth-of-type(1)").attr('data-id')
  let offsetHome=$("div#Home").offset().top  
  function Home1(){
      $('html,body').animate({
          "scrollTop":offsetHome
      },700,"linear")
  }
  let News = $("div.wrapper>div.menu>nav>div>ul>li>a:nth-of-type(2)").attr('data-id')
  let offsetNews=$("div#News").offset().top 
  function News1(){
      $('html,body').animate({
          "scrollTop":offsetNews
      },700,"linear")
  }
  let GameAwards = $("div.wrapper>div.menu>nav>div>ul>li>a:nth-of-type(3)").attr('data-id')
  let offsetGameAwards=$("div#GameAwards").offset().top+100
  function GameAwards1(){
      $('html,body').animate({
          "scrollTop":offsetGameAwards
      },700,"linear")
  }
  let BestGame = $("div.wrapper>div.menu>nav>div>ul>li>a:nth-of-type(4)").attr('data-id')
  let offsetBestGame=$("div#BestGame").offset().top+300 
  function BestGame1(){
      $('html,body').animate({
          "scrollTop":offsetBestGame
      },700,"linear")
  }
