var Componentes = Vue.component('Componentes', {
    template: `
    <div>
        <h1>Componentes</h1>
        <p>El siguiente componente suma de 2 en 2 y al llegar a 20 despliega un mensaje!</p>
        <button-counter></button-counter>
        <mensaje-limite></mensaje-limite>
    </div>
    `,
});
var BotonContar2 = Vue.component('button-counter', {
    data: function () {
        return {
            count: 0,
            mensaje: ""
        }
    },
    methods: {
        incrementar: function() {
            if(this.count < 20){
                this.count = this.count + 2;
            }else if(this.count == 20){
                this.mensaje = "El número de pulsaciones actual es igual a 20";
            }
        },
    },
    //template: '<button v-on:click="incrementar">Me ha pulsado {{ count }} veces.</button>',
    template: `
    <div>
        <button v-on:click="incrementar">Me ha pulsado {{ count }} veces.</button>
        <br><br>
        <span class="alert alert-info" v-if="mensaje"> {{ mensaje }} </span>
    </div>
    `,
});
