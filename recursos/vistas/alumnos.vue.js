var Alumnos = Vue.component('Alumnos',
{
    template: `
    <div>
    <h1>Alumnos</h1>
    <p>Esta es la página de Alumnos</p>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Genero</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in alumnos">
                <td>{{ item.nombres }}</td>
                <td>{{ item.apellidos }}</td>
                <td>{{ item.genero }}</td>
                <td><a href="/cambiar_alumno"></a>
                <router-link class="nav-link" :to="{ name: 'cambiar_alumno', params: { id:index }}"> <button class="btn btn-primary">Editar</button> </router-link>
                <button class="btn btn-danger" v-on:click="eliminar_alumno(index) ">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    <a href="/crear_alumno"></a>
    <router-link class="nav-link" to="/crear_alumno"> <button class="btn btn-success">Agregar Alumno</button>
    </router-link>
    </div>
    `,
    data: function () {
        return {
            alumnos: [],
        }
    },
    mounted() {
        let self = this;
        fetch('https://tu-proyecto-default-rtdb.firebaseio.com//alumnos.json')
        .then(r => r.json())
        .then(json => {
            self.alumnos = json;
        });
    },
    methods: { //Inician los Métodos
        eliminar_alumno: function(id){
            let self = this;
            axios.delete('https://tu-proyecto-default-rtdb.firebaseio.com//alumnos/'+id+'.json')
            .then((response) => {
                alert("El Alumno Fue Eliminado");
                location.reload();
            }).catch((err) => {
                self.loading = false; console.log(err);
            });
        } // fin metodo eliminar_alumno
    }
});