<template>
  <div id="app" class="app">
    <div class="image">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <div class="title">
      <h1>Platzi Music</h1>
    </div>

    <div class="country-selector">
      <select name="" id="" v-model="selectedCountry">
        <option v-for="country in countries" :value="country.value" :key="country.value">
          {{ country.name }}
        </option>
      </select>
    </div>

    <div class="artists" v-if="artists.length">
      <artist v-for="artist in artists" :key="artist.mbid" :artist="artist" />
    </div>
  </div>
</template>

<script>
import { getArtists } from './utils/requests';
import artist from './components/artist.vue';

export default {
  name: 'app',
  components: {
    artist
  },
  data() {
    return {
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina' },
        { name: 'Colombia', value: 'colombia' },
        { name: 'España', value: 'spain' }
      ],
      selectedCountry: 'argentina'
    }
  },
  methods: {
    refreshArtists() {
      getArtists(this.selectedCountry)
        .then((artists) => {
          this.artists = artists;
        });
    }
  },
  mounted() {
    this.refreshArtists();
  },
  watch: {
    selectedCountry() {
      this.refreshArtists();
    }
  }
}
</script>

<style>
body, html {
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app {
  display: grid;
  grid-template-areas: "image"
                       "title"
                       "artists";
  grid-template-columns: 1fr;
  grid-template-rows: 200px 60px 1fr;
  height: 100vh;
  width: 100vw;
}

.image {
  grid-area: image;
}
.title {
  grid-area: title;
}
.artists {
  background-color: rgb(218, 218, 218);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  grid-area: artists;
  overflow-y: auto;
  padding: 20px;
  padding-bottom: 100px;
}

</style>
