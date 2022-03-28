<template>
  <div class="movie-list">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <router-link :to="`/watch/${movie.idVideo}`">
        <h3>{{ movie.title }}</h3>
        <img
          :src="`https://appadan.herokuapp.com/${movie.image}`"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['movies']
};
</script>
