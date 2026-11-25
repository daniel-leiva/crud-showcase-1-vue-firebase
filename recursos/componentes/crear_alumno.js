var CrearAlumno = Vue.component('CrearAlumno', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            nombres: null,
            apellidos: null,
            genero: null
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
        <button v-on:click="validarFormulario(), crear_alumno(nombres, apellidos,
        genero) ">Agregar Alumno</button>
    </p>
    </div>`, // Aca termina nuestro Template
    methods: { //Inician los Métodos
        validarFormulario: function (e) { //iniciamos la Funcion que valida el formulario
            this.errores = [];
            if (!this.nombres) {
                this.errores.push("El Nombre es obligatorio.");
            }
            if (!this.apellidos) {
                this.errores.push("El Apellido es obligatorio.");
            }
            if (!this.errores.length) {
                return true;
            }
            },
            crear_alumno: function(nombres, apellidos, genero){
                if (!(Array.isArray(this.errores) && this.errores.length)) {
                let self = this;
                axios.post('https://tu-proyecto-default-rtdb.firebaseio.com//alumnos.json',{
                    nombres:nombres,
                    apellidos:apellidos,
                    genero:genero,
            })
            .then((response) => {
                alert("Se Agregó a la Lista Exitosamente");
                router.push({ name: "Alumnos" });
            }
            ).catch((err) => {
                self.loading = false;
                console.log(err);
            });
        }
        } // fin metodo crear_alumno
    } // Terminan los Métodos
});