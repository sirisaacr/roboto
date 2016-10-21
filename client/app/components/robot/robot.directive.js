import {RobotController as controller} from './robot.controller';
import template from './robot.template.html';

export const robotDirective = ()=> {
  return {
    scope: true,
    template: "<div class='ng-slider' ng-style='pos'></div>",
    replace: true,
    controller: function($scope, $interval) {

      $scope.pos = {
        top: 0,
        left: 0
      };
      
      $scope.newPos = function() {
        // calculate however you'd like:
        $scope.pos.top = Math.random() * 400 + "px";
        $scope.pos.left = Math.random() * 500 + "px";
      }

      $interval($scope.newPos, 1000);
    }
  };
};
