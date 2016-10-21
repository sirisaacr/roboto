//Importar el template y el style
// import './app.scss';
import template from './app.template.html';


export const appDirective = () => {
  return {
    // Utiliza la variable definida anteriormente y no es necesario utilizar el
    // key : value
    template,
    // Permite utilizar un elemento con el nombre de la directiva en el html
    // por ejemplo <app></app>
    restrict: 'E',
    // Crea un nuevo scope sin heredar
    scope: {},
    // Reemplaza el tag <app></app> por el contenido del templatre
    replace: true
  };
};