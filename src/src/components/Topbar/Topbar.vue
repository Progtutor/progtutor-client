<template>
  <v-container id="menu" fluid>
    <v-row no-gutters align="center">
      <v-col align="start">
        <img id="logo" alt="Logo Progtutor" :src="logo" rel="preload" />
      </v-col>

      <v-col align="end">
        <router-link to="/">
          Home
        </router-link>

        <a href="/#plans">
          Planos
        </a>

        <router-link to="/sobre">
          Sobre
        </router-link>

        <v-btn color="purple" outlined>
          <v-icon left size=25>mdi-account</v-icon>
          Entrar
        </v-btn>

        <v-btn color="blue" class="white--text">
          Criar Conta
        </v-btn>

      </v-col>
    </v-row>

  </v-container>
</template>

<script src="./Topbar.js"></script>
<style src="./Topbar.css" scoped></style>