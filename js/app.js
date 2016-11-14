var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.items = [];
  for (var i=0; i<100; i++) { $scope.items.push(i); }
});

app.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
console.log('scrollonclick???');        
        $("body").animate({scrollTop: $elm.offset().top}, "slow");
      });
    }
  }
});

<!--THIS MUST BE JQUERY -->
$( document ).ready(function() {
  $( "#moje" ).click(function( event ) {
    alert( "Well HELLO Human!" );
  });
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
  $("a[href='#cv']").click(function() {
    $("html, body").animate({ scrollTop: $(".cv").position().top }, "slow");
    $("html, body").addClass('animated fadeIn');
    setTimeout(function () {
        $("html, body").removeClass('animated fadeIn');
    }, 700);
  });

  $("a[href='#angular']").mouseover(function(){
    $("html, body").addClass('animated shake');
    setTimeout(function () {
        $("html, body").removeClass('animated shake');
    }, 200);
  });


  $("a[href='#experience']").click(function() {
    $("html, body").animate({ scrollTop: $(".experience").position().top }, "slow");
    $("html, body").addClass('animated rollIn');
    setTimeout(function () {
        $("html, body").removeClass('animated rollIn');
    }, 700);
  });
  $("a[href='#studies']").click(function() {
    $("html, body").animate({ scrollTop: $(".studies").position().top }, "slow");
    $(".studies").addClass('animated shake');
    setTimeout(function () {
        $(".studies").removeClass('animated shake');
    }, 700);
  });
  $("a[href='#skills']").click(function() {
    $("html, body").animate({ scrollTop: $(".skills").position().top }, "slow");
    $(".skills").addClass('animated fadeInRight');
    setTimeout(function () {
        $(".skills").removeClass('animated fadeInRight');
    }, 900);
  });
  $("a[href='#hobby']").click(function() {
    $("html, body").animate({ scrollTop: $(".hobby").position().top }, "slow");
    $(".hobby").addClass('animated zoomInUp');
    setTimeout(function () {
        $(".hobby").removeClass('animated zoomInUp');
    }, 700);
  });
  $("a[href='#footer']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
});
