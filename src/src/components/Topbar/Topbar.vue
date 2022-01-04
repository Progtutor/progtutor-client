<template>
  <v-container id="menu" fluid>
    <v-row no-gutters>
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

        <v-btn tile color="#6E75C1" outlined>
          <v-icon left>mdi-account</v-icon>
          Entrar
        </v-btn>

        <v-btn tile color="#47BDCB" class="white--text">
          Criar Conta
        </v-btn>

      </v-col>
    </v-row>

  </v-container>
</template>

<script src="./Topbar.js"></script>
<style src="./Topbar.css" scoped></style>