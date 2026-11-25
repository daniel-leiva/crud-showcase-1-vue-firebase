Vue.component('formula', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            nombre: null,
            correo: null,
            genero: null
        }
    },
    // Aquí comienza nuestro template
    template: `
    <div>
    <form
    id="app"
    @submit="validarFormulario"
    method="post"
    action="./app.html#/contacto"
    novalidate="true">
    <p v-if="errores.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul class="list-group">
            <li class="list-group-item list-group-item-danger" v-for="error in errores">{{ error }}</li>
        </ul>
    </p>
    <p>
        <label for="nombre">Nombre</label><br>
        <input id="nombre" v-model="nombre" type="text" nombre="nombre">
    </p>

    <p>
        <label for="correo">Correo electrónico</label><br>
        <input id="correo" v-model="correo" type="email" nombre="correo">
    </p>

    <p>
        <label for="telefono">Telefóno</label><br>
        <input id="telefono" v-model="telefono" type="number" nombre="telefono">
    </p>

    <p>
        <label for="genero">Género</label><br>
        <select id="genero" v-model="genero" nombre="genero">
            <option>Masculino</option>
            <option>Femenino</option>
        </select>
    </p>

    <p>
        <input type="submit" value="Enviar">
    </p>
    </form>
    </div>`,
    // Aca termina nuestro Template
    methods: { //Inician los Métodos
        validarFormulario: function (e) { //iniciamos la Funcion que valida el formulario
            this.errores = [];
            if (!this.nombre) {
                this.errores.push("El nombre es obligatorio.");
            }
            if (!this.correo) {
                this.errores.push('El correo electrónico es obligatorio.');
            } else if (!this.validarCorreo(this.correo)) {
                this.errores.push('El correo electrónico debe ser válido.');
            }
            if (!this.telefono) {
                this.errores.push('El número de telefóno es obligatorio.');
            }
            if (!this.errores.length) {
                return true;
            }
            e.preventDefault();
        },
        validarCorreo: function (correo) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(correo);
        }
    } // Terminan los Métodos
});