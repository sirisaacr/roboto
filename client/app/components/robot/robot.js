import angular from 'angular';
import {robotDirective} from './robot.directive';

export const robot = angular
                      .module('robot', [])
                      .config(function($stateProvider, $urlRouterProvider){
                                $urlRouterProvider.otherwise('/');
                                $stateProvider.state('robot', {
                                    url      : '/',
                                    template : '<robot></robot>'
                                  }
                                );//state
                              }//function
                      )//config
                      .directive('robot', robotDirective);