<template>
  <v-container fluid class="pa-0">
    <v-container class="base">
      <v-row align="center">

        <v-col align="start" id="info">
          <v-conrainer fluid>
            <img id="logo" alt="Logo Progtutor" :src="logo" rel="preload" />
            <p class="text-h3">Faça seu login na</p>
            <p class="text-h3"><b class="purple--text">Progtutor.</b></p>
            <p class="text-h5 blue--text">Comece novos projetos AGORA mesmo!</p>
          </v-conrainer>
        </v-col>

        <v-col align="start" id="login-form">
          <v-conrainer fluid>
           <p class="text-h5">Acesse sua conta</p>
           <v-text-field label="E-mail" outlined />
            <v-text-field label="Senha" outlined />

            <div>
              <router-link to="/sobre" class="purple--text text-h6">
                Esqueci minha senha
              </router-link>
            </div>

            <v-btn color="purple white--text">
              Entrar
            </v-btn>

            <div class="center">
              <router-link to="/sobre" class="purple--text text-h6">
                Não tem uma conta? <span class="blue--text">Crie agora!</span>
              </router-link>
            </div>
            
          </v-conrainer>
        </v-col>

      </v-row>
    </v-container>
  </v-container>
</template>

<script src="./Login.js"></script>
<style src="./Login.css" scoped></style>