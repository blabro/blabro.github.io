angular.module('basicCtrl', ['angular-inview']).controller('basicCtrl', function basicCtrl ($scope, $sce) {


  $scope.inviewLogs = [];
  $scope.divInView = function(index) {
    Console.log("jestem w module");
    $scope.inviewLogs.unshift({ id: logId++, message: $sce.trustAsHtml('Line <em>#' + index + '</em>: ' ) });
    console.log($scope.inviewLogs.unshift({ message: $sce.trustAsHtml('Line <em>#' + index + '</em>: ')}));
    return false;
  }
});
