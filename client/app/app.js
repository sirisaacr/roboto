import 'normalize.css';
import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {todo} from './components/robot/robot';

angular.module('robotoapp', [
  uiRouter,
  robot.name
])
.directive('app', appDirective);