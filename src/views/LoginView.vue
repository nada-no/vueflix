<template>
    <div>
        <input v-model="email" placeholder="email">
        <input v-model="password" placeholder="password">
        <button @click="login">Login</button>
    </div>
</template>

<script>

export default {
    created(){
        this.$auth.$subscribe((mutation, state) => {
            if (state.isAuthenticated) {
                this.$router.push('/');
            }
        })
    },
    data() {
        return {
            email: 'user@user.com', password: 'useruser'
            // email: '', password: ''
        }
    },
    methods: {
        async login() {
            this.$auth.login(this.email, this.password);
        }
    }
}
</script>