var CambiarInstructor = Vue.component('CambiarInstructor', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            nombres: null,
            apellidos: null,
            genero: null,
            telefono: null,
            email: null
        }
    },
    // Aquí comienza nuestro template
    template: `
    <div>
    <p v-if="errores.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
            <li v-for="error in errores" style="color:red;">{{ error }}</li>
        </ul>
    </p>
    <p>
        <label for="nombre">Nombres</label><br>
        <input id="nombres" v-model="nombres" type="text">
    </p>
    <p>
        <label for="apellidos">Apellidos</label><br>
        <input id="apellidos" v-model="apellidos" type="text">
    </p>
    <p>
        <label for="genero">Género</label><br>
        <select id="genero" v-model="genero">
        <option>Masculino</option>
        <option>Femenino</option>
        </select>
    </p>
    <p>
        <label for="telefono">Telefóno</label><br>
        <input id="telefono" v-model="telefono" type="number">
    </p>
    <p>
        <label for="email">Email</label><br>
        <input id="email" v-model="email" type="text">
    </p>
    <p>
        <button class="btn btn-success" v-on:click="validarFormulario(), cambiar_instructor(nombres, apellidos, genero, telefono, email)">Guardar Cambios</button>
    </p>
    </div>`, // Aca termina nuestro Template
    mounted() {
        let self = this;
            fetch('https://tu-proyecto-default-rtdb.firebaseio.com/instructores/'+this.$route.params.id+'.json')
            .then(r => r.json())
            .then(json => {
                self.nombres = json.nombres,
                self.apellidos = json.apellidos,
                self.genero = json.genero,
                self.telefono = json.telefono,
                self.email = json.email
            });
        },
    methods: { //Inician los Métodos
        validarFormulario: function (e) { //iniciamos la Funcion que valida el formulario
            this.errores = [];
            if (!this.nombres) {
                this.errores.push("El Nombre es obligatorio.");
            }
            if (!this.apellidos) {
                this.errores.push("El Apellido es obligatorio.");
            }
            if (!this.telefono) {
                this.errores.push("El Telefóno es obligatorio.");
            }
            if (!this.email) {
                this.errores.push("El Email es obligatorio.");
            }
            if (!this.errores.length) {
                return true;
            }
        },
        cambiar_instructor: function(nombres, apellidos, genero, telefono, email){
            if (!(Array.isArray(this.errores) && this.errores.length)) {
            let self = this;
            axios.put('https://tu-proyecto-default-rtdb.firebaseio.com/instructores/'+ this.$route.params.id +'.json',{
                nombres:nombres,
                apellidos:apellidos,
                genero:genero,
                telefono:telefono,
                email:email,
            }).then((response) => {
                alert("Datos del Instructor Modificados Exitosamente");
                router.push({ name: "Instructores" });
            }).catch((err) => {
            self.loading = false; console.log(err);});
            }
        } // fin metodo cambiar_instructor
    } // Terminan los Métodos
});
