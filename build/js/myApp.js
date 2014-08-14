(function() {
  angular.module('myApp', []).controller('MultiplicationCtrl', function($scope, $attrs) {
    var populateNumbers;
    populateNumbers = function(x) {
      var i, numbers;
      numbers = [];
      i = 0;
      while (i < x) {
        numbers[i] = i + 1;
        i++;
      }
      return numbers;
    };
    $scope.numberLimit = $attrs.initialNumberLimit || 10;
    $scope.numbers = populateNumbers($scope.numberLimit);
    $scope.compute = function(a, b) {
      return a * b;
    };
    return $scope.$watch('numberLimit', function(limit) {
      return $scope.numbers = populateNumbers(limit);
    });
  });

}).call(this);
