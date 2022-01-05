<template>
  <v-container id="menu" fluid>
    <v-row no-gutters>
      <v-col align="start">
        *logo*
      </v-col>

      <v-col align="end">
        <router-link to="/">
          Home
        </router-link>

        <router-link to="/planos">
          Planos
        </router-link>

        <router-link to="/sobre">
          Sobre
        </router-link>

        <v-btn tile color="purple" outlined>
          <v-icon left size=25>mdi-account</v-icon>
          Entrar
        </v-btn>

        <v-btn tile color="blue" class="white--text">
          Criar Conta
        </v-btn>

      </v-col>
    </v-row>

  </v-container>
</template>

<script src="./Topbar.js"></script>
<style src="./Topbar.css" scoped></style>