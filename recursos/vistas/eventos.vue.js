var Eventos = Vue.component('Eventos', {
    template: `
    <div>
        <h1>Eventos</h1>
        <p>
        En Vue hay "eventos" que se utilizan para pasar información de los componentes secundarios a los componentes principales. Podemos usar la directiva v-on para escuchar eventos DOM y ejecutar JavaScript cuando se activan.
        <br><br>
        Sin embargo, muchos controladores de eventos tendrán una lógica más compleja, por lo que es imposible guardar su JavaScript en el valor del atributo v-on. Es por eso que v-on también puede aceptar el nombre de un método para llamar.
        <br><br>
        Los métodos de controlador en línea se vinculan directamente con el nombre del método, y también podemos usar métodos en declaraciones de JavaScript, aunque a veces también necesitamos acceso a eventos DOM sin procesar en controladores en línea.
        <br><br>
        Es una necesidad muy común llamar a event.preventDefault() o event.stopPropagation() en un controlador de eventos. Si bien podríamos hacer esto fácilmente en un método, sería mejor si el método se tratara únicamente de la lógica de datos y no de los detalles del manejo de eventos DOM. Para resolver este problema, Vue proporciona modificadores de eventos para v-on. Recuerde que los modificadores son directivas de postfijo marcadas con puntos.
        <br><br>
        Por otro lado, cuando escuchamos eventos de teclado, a menudo necesitamos verificar los códigos de tecla de uso común. Vue también permite agregar modificadores de teclas a v-on al escuchar eventos de teclado. Recordar todos los códigos clave es una molestia, por lo que Vue proporciona alias para las claves más utilizadas.
        <br><br>
        Es posible que le preocupe que todos estos métodos de escucha de eventos violen las buenas reglas antiguas sobre la "separación de preocupaciones". Tenga la seguridad de que todas las funciones y expresiones del controlador Vue están estrictamente vinculadas al ViewModel que controla la vista actual, sin causar dificultades de mantenimiento.
        </p>
    </div>
    `
});