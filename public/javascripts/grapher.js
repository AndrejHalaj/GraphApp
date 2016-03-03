var grapher = angular.module('grapher', []);

grapher.controller('GrapherController', ['$scope', function($scope) {
    var algorithms = ['Dijkstra', 'Kruskal', 'Floyd-Warshall'];

    $scope.selected = algorithms[0];

    $scope.getAlgorithms = function() {
        return algorithms;
    }
}]);
