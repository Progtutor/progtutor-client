<template>
  <v-container fill-height fluid class="pa-0 base">
    <v-row no-gutters align="center">

      <v-col align="start" xs=12 sm=12 md=6>
        <v-container fluid id="info">
          <img id="logo" alt="Logo Progtutor" :src="logo" rel="preload" />
          <p class="text-h3">Faça seu login na</p>
          <p class="text-h3"><b class="purple--text">Progtutor.</b></p>
          <p class="text-h5 blue--text">Comece novos projetos AGORA mesmo!</p>
        </v-container>
      </v-col>

      <v-col align="start" xs=12 sm=12 md=6>
        <v-container fluid id="login-form">
          <p class="text-h5">Acesse sua conta</p>
          <v-text-field
            v-model="loginForm.email"
            color="blue"
            background-color="purple"
            label="E-mail"
            outlined
            single-line
          />

          <v-text-field 
            v-model="loginForm.password"
            color="blue" 
            background-color="purple" 
            label="Senha" 
            outlined 
            single-line
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />

          <div id="forgot-password"> 
            <router-link to="/sobre" class="purple--text text-h6">
              Esqueci minha senha
            </router-link>
          </div>

          <div id="div-btn-login">
            <v-btn id="btn-login" color="purple white--text">
              Entrar
            </v-btn>
          </div>

          <div class="text-center">
            <router-link to="/sobre" class="purple--text text-h6">
              Não tem uma conta? <span class="blue--text">Crie agora!</span>
            </router-link>
          </div>
          
        </v-container>
      </v-col>

    </v-row>
  </v-container>
</template>

<script src="./Login.js"></script>
<style src="./Login.css" scoped></style>