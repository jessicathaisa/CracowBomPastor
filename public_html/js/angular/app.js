/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("cracow", ['nvd3ChartDirectives']);

var chart = {
    weHave: 880.00,
    weNeed: 52000.00
};

function ExampleCtrl($scope) {
    $scope.exampleData = [{
            key: "Temos",
            y: chart.weHave
        }, {
            key: "Falta",
            y: chart.weNeed - chart.weHave
        }];

    $scope.width = 500;
    $scope.height = 500;

    var colorArray = ['#27BA3D', '#E33B3B'];
    $scope.colorFunction = function () {
        return function (d, i) {
            return colorArray[i];
        };
    }

    $scope.xFunction = function () {
        return function (d) {
            return d.key;
        };
    }
    $scope.yFunction = function () {
        return function (d) {
            return d.y;
        };
    }

    $scope.descriptionFunction = function () {
        return function (d) {
            return d.key;
        }
    }
}