import {RobotController as controller} from './todo.controller';
import template from './robot.template.html';

export const robotDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
