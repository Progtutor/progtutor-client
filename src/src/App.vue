<template>
  <v-app class="d-flex" >
    <router-view />
  </v-app>
</template>

<script>
export default {
    name: "App"
}
</script>

<style>
#app {
  background: #121214;
  color: #E5E5E5;
}

.toasted-font {
  font-family: "Roboto", sans-serif;
}

.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>