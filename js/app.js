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
  $("a[href='#angular']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });
});
