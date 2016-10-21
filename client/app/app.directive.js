//Importar el template y el style

import template from './app.template.html';


export const appDirective = () => {
  return {
    scope: true,
    template: "<div class='ng-slider' ng-style='pos' ng-keydown='($event.which === 37 && vm.moveLeft()) || ($event.which === 38 && vm.moveUp()) || ($event.which === 39 && vm.moveRight()) || ($event.which === 40 && vm.moveDown())'></div>",
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