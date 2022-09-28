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
      $(this).find('img').stop().animate({ right: '750px' }, 800);
      $(this).find('h3').stop().animate({ right: '10px' }, 100);
      $(this).find('p').stop().animate({ right: '10px' }, 800);
      
      $(this).find('h3.beer').stop().animate({ right: '80px' }, 100);
      $(this).find('p.beer').stop().animate({ right: '80px' }, 800);
      $(this).find('p.step').stop().animate({ right: '80px' }, 800);
      $(this).find('img.beer').stop().animate({ right: '680px' }, 800);
      $(this).find('img.step').stop().animate({ right: '30px' }, 800);
    });
});




      // $(this).find('h3').stop().animate({ right: '520px' }, 100);
      // $(this).find('p').stop().animate({ right: '200px' }, 800);
      // $(this).find('img').stop().animate({ right: '400px' }, 800);