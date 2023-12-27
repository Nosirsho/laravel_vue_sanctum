<template>
    <div class="w-25">
        <div>
            <input v-model="name" type="text" placeholder="name" class="mt-3 form-control">
        </div>
        <div>
            <input v-model="email" type="email" placeholder="email" class="mt-3 form-control">
        </div>
        <div>
            <input v-model="password" type="password" placeholder="password" class="mt-3 form-control">
        </div>
        <div>
            <input v-model="password_confirmation" type="password" placeholder="password_confirmation"
                   class="mt-3 form-control">
        </div>
        <div>
            <input @click.prevent="register" type="submit" value="Register" class="mt-3 btn btn-outline-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },

    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                }).then(res => {
                    console.log(res);
                }).catch(err=> {
                    console.log(err.response);
                })
            });

        }
    }
}
</script>

<style scoped>

</style>
