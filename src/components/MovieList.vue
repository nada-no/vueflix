<template>
  <div class="movie-list">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <router-link :to="`/movie/${movie.id}`">
        <h3>{{ movie.title }}</h3>
        <img
          :src="`https://apigerard.herokuapp.com/img/movies/thumbnailmk2/img${movie.id}.jpg`"
        />
        <h3>{{ movie.title }}</h3>
        <img
          :src="`https://apigerard.herokuapp.com/img/movies/thumbnailmk2/img${movie.id}.jpg`"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
