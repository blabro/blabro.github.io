//<!--THIS MUST BE JQUERY -->
$( document ).ready(function() {
  $(window).on('load scroll', function () {
    var scrolled = $(this).scrollTop();
    $('#myVideo').css('transform', 'translate3d(0, ' + -(scrolled * 0.45) + 'px, 0)');
    $('#header').css({
      'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
      'opacity': 1 - scrolled / 400 // fade out at 400px from top
    });
    console.log(scrolled, '123');
  });


  $(window).scroll(function () {
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;
   $("#progressbar").attr('value', position);
  });

  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $("a[href='#footer']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
  
  animatescrollandbounceInUp("a[href='#contact']", ".contact");
  animatescrollandbounceInUp("a[href='#experience']", ".experience");
  animatescrollandbounceInUp("a[href='#studies']", ".studies");
  animatescrollandbounceInUp("a[href='#skills']", ".skills");
  animatescrollandbounceInUp("a[href='#hobby']", ".hobby");
});

function animatescrollandbounceInUp(hrefName, className) {
  $(hrefName).click(function() {
    $("html, body").animate({ scrollTop: $(className).position().top }, "slow");
    $(className).addClass('animated bounceInUp');
      setTimeout(function () {
        $(className).removeClass('animated bounceInUp');
      }, 700);
    });
};

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loadersmall").style.display = "none";
  document.getElementById("overlay").style.display = "block";
}
