<template>
  <v-app class="d-flex">
    <Topbar />
    <router-view />
  </v-app>
</template>

<script>
import Topbar from "./components/Topbar/Topbar.vue"

export default {
    name: "App",
    components: {
        Topbar
    }
}
</script>

<style>
#app {
  background: #121214;
}

.toasted-font {
  font-family: "Roboto", sans-serif;
}

.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>