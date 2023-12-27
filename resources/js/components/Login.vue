<template>
    <div class="w-25">
        <div>
            <input v-model="email" type="email" placeholder="email" class="mt-3 form-control">
        </div>
        <div>
            <input v-model="password" type="password" placeholder="password" class="mt-3 form-control">
        </div>
        <div>
            <input @click.prevent="login" type="submit" value="Login" class="mt-3 btn btn-outline-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
      return {
          email: null,
          password: null
      }
    },

    methods: {
        login(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login',{email: this.email, password: this.password})
                    .then(res=>{
                        console.log(res);
                    })
            });

        }
    }
}
</script>

<style scoped>

</style>
