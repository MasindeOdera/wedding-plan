<template>
  <div class="home">
    <img alt="Couple Photo" src="../assets/couple.jpg">
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
