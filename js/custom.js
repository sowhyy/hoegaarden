// 기본 상태
$('article').mouseleave(function () {
  const vid = $(this).find('video').get(0);
  vid.pause();

  $(this).stop().animate({ width: '8%' }, 700);
  $(this).find('h3').stop().animate({ right: '-900px' }, 100);
  $(this).find('p').stop().animate({ right: '-900px' }, 500);
  $(this).find('p.beer').stop().animate({ right: '-900px' }, 500);
  $(this).find('p.step').stop().animate({ right: '-900px' }, 500);
  $(this).find('img').stop().animate({ right: '-900px' }, 300);
});

// 호버 상태
$('article').mouseenter(function () {
  const vid = $(this).find('video').get(0);

  vid.play();
  $(this)
    .stop()
    .animate({ width: '60%' }, 1000, function () {
      $(this).find('img').stop().animate({ right: '65%' }, 800);
      $(this).find('h3').stop().animate({ right: '5%' }, 100);
      $(this).find('p').stop().animate({ right: '5%' }, 800);
      
      $(this).find('h3.beer').stop().animate({ right: '5%' }, 100);
      $(this).find('img.beer').stop().animate({ right: '57%' }, 800);
      $(this).find('p.beer').stop().animate({ right: '5%' }, 800);
      
      $(this).find('p.step').stop().animate({ right: '6%' }, 800);
      $(this).find('img.step').stop().animate({ right: '1%' }, 800);
    });
});




      // $(this).find('h3').stop().animate({ right: '520px' }, 100);
      // $(this).find('p').stop().animate({ right: '200px' }, 800);
      // $(this).find('img').stop().animate({ right: '400px' }, 800);