
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

  $( "#moje" ).click(function( event ) {
    alert( "Well HELLO Human!" );
  });
  $("a[href='#angular']").mouseover(function(){
    $("html, body").addClass('animated infinite shake');
  });
  $("a[href='#angular']").click(function(){
    $("html, body").removeClass('animated infinite shake');
  });

  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  $("a[href='#cv']").click(function() {
    $("html, body").animate({ scrollTop: $(".cv").position().top }, "slow");
    $(".contact").addClass('animated bounceInUp');
    setTimeout(function () {
        $(".contact").removeClass('animated bounceInUp');
    }, 700);
  });

  $("a[href='#experience']").click(function() {
    $("html, body").animate({ scrollTop: $(".experience").position().top }, "slow");
    $(".experience").addClass('animated bounceInUp');
    setTimeout(function () {
        $(".experience").removeClass('animated bounceInUp');
    }, 700);
  });
  $("a[href='#studies']").click(function() {
    $("html, body").animate({ scrollTop: $(".studies").position().top }, "slow");
    $(".studies").addClass('animated bounceInUp');
    setTimeout(function () {
        $(".studies").removeClass('animated bounceInUp');
    }, 700);
  });
  $("a[href='#skills']").click(function() {
    $("html, body").animate({ scrollTop: $(".skills").position().top }, "slow");
    $(".skills").addClass('animated bounceInUp');
    setTimeout(function () {
        $(".skills").removeClass('animated bounceInUp');
    }, 900);
  });
  $("a[href='#hobby']").click(function() {
    $("html, body").animate({ scrollTop: $(".hobby").position().top }, "slow");
    $(".hobby").addClass('animated bounceInUp');
    setTimeout(function () {
        $(".hobby").removeClass('animated bounceInUp');
    }, 700);
  });
  $("a[href='#footer']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
});
