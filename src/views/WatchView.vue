<template>
    <Header></Header>
     <!-- <video width="320" height="240" controls>
        <source :src="'https://appadan.herokuapp.com' + movie.trailer" type="video/mp4">
Your browser does not support the video tag.
</video>  -->
<video width="320" height="240" controls>
  <source :src='"https://appadan.herokuapp.com" + movie.trailer' type="video/mp4">
  Your browser does not support the video tag.
</video>
   
    <h2>{{movie.title}}</h2>
    <h3>Año</h3>
    <p>{{movie.year}}</p>
    <h3>Duration</h3>
    <p>{{movie.duration}} min</p>
    <h3>Sinopsis</h3>
    <p>{{movie.sinopsis}}</p>
</template>
<script>
import Header from "../components/Header.vue";
export default {
    created() {
        if (this.$auth.isAuthenticated) {
            this.fetchMovie();
        }
    },
    data() {
        return {
            movie: {},
        };
    },
    methods: {
        async fetchMovie() {
            const response = await fetch(`https://appadan.herokuapp.com/api/video/${this.$route.params.id}`, { headers: { Authorization: `Bearer ${this.$auth.access_token}` } });
            this.movie = (await (response.json())).data;
            console.log("https://appadan.herokuapp.com" + this.movie.trailer);
        },
    },
    components: { Header },
    // props: {
    //     url: "https://appadan.herokuapp.com" + movie.trailer
    // }
}
</script>