
<!--THIS MUST BE JQUERY -->
$( document ).ready(function() {
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
