var Instructores = Vue.component('Instructores', {
    template: `
    <div>
    <h1>Instructores</h1>
    <p>Esta es la página de Instructores</p>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Genero</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in instructores">
                <td>{{ item.nombres }}</td>
                <td>{{ item.apellidos }}</td>
                <td>{{ item.genero }}</td>
                <td>{{ item.telefono }}</td>
                <td>{{ item.email }}</td>
                <td><a href="/cambiar_instructor"></a>
                <router-link class="nav-link" :to="{ name: 'cambiar_instructor', params: { id:index }}"> <button class="btn btn-primary">Editar</button> </router-link>
                <button class="btn btn-danger" v-on:click="eliminar_instructor(index) ">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    <a href="/crear_instructor"></a>
    <router-link class="nav-link" to="/crear_instructor"> <button class="btn btn-success">Agregar Instructor</button>
    </router-link>
    </div>
    `,
    data: function () {
        return {
            instructores: [],
        }
    },
    mounted() {
        let self = this;
        fetch('https://tu-proyecto-default-rtdb.firebaseio.com/instructores.json')
        .then(r => r.json())
        .then(json => {
            self.instructores = json;
        });
    },
    methods: { //Inician los Métodos
        eliminar_instructor: function(id){
            let self = this;
            axios.delete('https://tu-proyecto-default-rtdb.firebaseio.com/instructores/'+id+'.json')
            .then((response) => {
                alert("El Instructor Fue Eliminado");
                location.reload();
            }).catch((err) => {
                self.loading = false; console.log(err);
            });
        } // fin metodo eliminar_instructor
    }
});