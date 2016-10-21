import 'normalize.css';
import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';



angular.module('robotoapp', [])
.directive('ngSlider', function() {
  return {
    scope: true,
    template: "<div class='ng-slider' tabindex='0' ng-style='pos' ng-style='pos' ng-style='pos' ng-keydown='($event.which === 37 && moveLeft()) || ($event.which === 38 && moveUp()) || ($event.which === 39 && moveRight()) || ($event.which === 40 && moveDown())'></div>",
    replace: true,
    controller: function($scope) {

        $scope.pos = {
            top: "",
            left: "",
            x: 0,
            y: 0
        };

        $scope.moveUp = function() {
            if($scope.pos.x > 0){
                $scope.pos.x -= 10;
                $scope.pos.top = $scope.pos.x+"px";
            }
        };

        $scope.moveDown = function() {
            if($scope.pos.x < 600){ 
                $scope.pos.x += 10;
                $scope.pos.top = $scope.pos.x+"px";
            }
        };

        $scope.moveRight = function() {
            if($scope.pos.y < 600){
                $scope.pos.y += 10;
                $scope.pos.left = $scope.pos.y+"px";
            }
        };

        $scope.moveLeft = function() {
            if($scope.pos.y > 0){ 
                $scope.pos.y -= 10;
                $scope.pos.left = $scope.pos.y+"px";
            }
        };

    }
  };
});