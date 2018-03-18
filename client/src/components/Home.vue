<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          :src="require('../assets/swedLogo.jpg')"
          height="500px"
          contain
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ title }}</h3>
            <div>{{ msg }}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Swedbank',
      msg: `Lorem ipsum dolor sit amet, te vel stet voluptatum omittantur, mei ea habeo velit equidem. Clita antiopam sit an, labore dolorum repudiandae no mel. Eu solum corpora mei. No libris nostrud scribentur pro, luptatum dissentias duo cu, sed cu iudico luptatum suscipiantur. Mel cu quis copiosae reprehendunt. Ei pro esse quaeque.
      Sea purto aeterno at. Pri ferri labitur ea, soleat prompta vocibus sea no, usu ne illum moderatius. Nihil oporteat singulis at mel, at nibh aliquam tractatos pro, id feugait fierent sea. Qui eu maiorum dolores, magna libris nominavi eu pri. Cu ius tibique comprehensam.
      `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
