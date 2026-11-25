var Directivas = Vue.component('Directivas', {
    template: `
    <div>
        <h1>Directivas</h1>
        <p>Esta es la Página de Directivas</p>
        
        <table class="table">
        <tbody>
          <tr>
            <th colspan="2" class="col-1">v-text</th>
            <td>Actualiza el textContent del elemento. Si usted necesita actualizar parte del textContent, usted debe utilizar interpolaciones {$ endraw %}.</td>
          </tr>
          <tr>
            <th colspan="2">v-html</th>
            <td>Actualiza el innerHTML del elemento. Note que los contenidos son insertados como HTML puro - no serán compilados como plantillas (templates) de Vue. Si usted se encuentra intentando componer plantillas utilizando v-html, intente pensar una solución utilizando componentes.</td>
          </tr>
          <tr>
            <th colspan="2">v-show</th>
            <td>Cambia la propiedad CSS display del elemento basado en la veracidad del valor de la expresión. La directiva dispara transiciones cuando su condición cambia.</td>
          </tr>
          <tr>
            <th colspan="2">v-if</th>
            <td>Renderiza condicionalmente el elemento basado en la veracidad del valor de la expresión. El elemento y sus directivas / componentes son destruidas y re-construidas al cambiar el valor de la expresión. Si el elemento es un 'template', su contenido será extraído como un bloque condicional. Esta directiva dispara transiciones cuando su condición cambia.</td>
          </tr>
          <tr>
            <th colspan="2">v-else</th>
            <td>Denota el “bloque else“ para v-if o una cadena v-if/v-else-if.</td>
          </tr>
          <tr>
            <th colspan="2">v-else-if</th>
            <td>Denota el “bloque else if“ para v-if . Puede ser encadenado.</td>
          </tr>
          <tr>
            <th colspan="2">v-for</th>
            <td>Renderiza el elemento o plantilla multiples veces basado en la fuente de información. El valor de la directiva debe utilizar la sintaxis especial alias in expression para proveer un alias para el elemento actual en el cual se está iterando.</td>
          </tr>
          <tr>
            <th colspan="2">v-on</th>
            <td>Agrega una escucha de evento (event listener) al elemento. El tipo del evento es denotado por el argumento. La expresión puede ser el nombre de un método, una declaración inline u omitida cuando hay modificadores.</td>
          </tr>
          <tr>
            <th colspan="2">v-bind</th>
            <td>Enlaza dinámicamente uno o más atributos, o una propiedad de un componente a una expresión.</td>
          </tr>
          <tr>
            <th colspan="2">v-model</th>
            <td>Crea un enlace bidireccional (two way binding) en un elemento de formulario o componente.</td>
          </tr>
          <tr>
            <th colspan="2">v-pre</th>
            <td>Saltea la compilación para este elemento y todos sus hijos. Usted puede utilizar esto para mostrar mustache tags sin conversión (raw). Saltear una gran cantidad de nodos sin directivas en ellos también puede acelerar el tiempo de compilación.</td>
          </tr>
          <tr>
            <th colspan="2">v-cloak</th>
            <td>Esta directiva permanecerá en el elemento hasta que la instancia Vue asociada termine su compilación. Combinada con reglas de CSS tal como [v-cloak] { display: none }, esta directiva puede ser utilizada para esconder mustache bindings no compilados hasta que la instancia de Vue este lista.</td>
          </tr>
          <tr>
            <th colspan="2">v-once</th>
            <td>Renderizará el elemento/componente solo una vez. En renderizaciones posteriores, el elemento/componente y todos sus hijos serán tratados como contenido estático, y por lo tanto, salteados. Esto puede ser utilizado para optimizar la performance de actualización.</td>
          </tr>
        </tbody>
      </table>
    </div>
    `
});