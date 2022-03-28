<template>
    <!-- <div v-if="$auth.isAuthenticated">
        <p>Welcome {{ $auth.email }}!</p>
        <router-link to="/logout">Logout</router-link>     -->
        <Header></Header>
        <MovieList :movies="movies"></MovieList>
    <!-- </div>
    <div v-else>
        <p>Please login:</p>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
    </div> -->
</template>

<script>
import Header from "../components/Header.vue";
import MovieList from "../components/MovieList.vue";
export default {
    created() {
        //if (this.$auth.isAuthenticated) {
            this.fetchMovies();
        //}
    },
    data() {
        return {
            movies: [],
        };
    },
    methods: {
        async fetchMovies() {
            const response = await fetch("https://appadan.herokuapp.com/api/videos", { headers: { Authorization: `Bearer ${this.$auth.access_token}` } });
            this.movies = (await (response.json())).data;
            console.log(this.movies);
        },
    },
    components: { Header, MovieList }
}
</script>

<style scoped>
.movie-list {
    display: grid;
    grid-template-columns: repeat(3,300px);
    gap: 1em;
}

.movie {
    max-width: 300px;
}
</style>