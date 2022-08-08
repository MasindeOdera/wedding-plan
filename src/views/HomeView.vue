<template>
  <div class="home">
    <img alt="Couple Photo" src="../assets/couple.jpg">
    <h2>13<sup>th</sup> August 2022</h2>
    <p>14:00, Kirche Hilterfingen / Church Hilterfingen</p>
    <p>16:00, Schloss Hünegg / Castle Hünegg</p>
    <p>17:00, Apero</p>
    <p>19:30, Dinner</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.home {
  img {
    max-width: 300px;
    @media only screen and (min-width: 600px) {
      max-width: 500px;
    }
  }
}
</style>
