angular.module('myApp', [])
  .controller('MultiplicationCtrl', ($scope, $attrs) ->
    populateNumbers = (x)->
      numbers = []
      i = 0

      while i < x
        numbers[i] = i + 1
        i++
      return numbers

    $scope.numberLimit = $attrs.initialNumberLimit or 10
    $scope.numbers = populateNumbers($scope.numberLimit)
    $scope.compute = (a,b)->
      return a * b

    $scope.$watch('numberLimit', (limit)->
      $scope.numbers = populateNumbers(limit)
    )

  )
