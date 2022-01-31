<template>
  <v-container fill-height fluid class="pa-0 base">
    <v-row no-gutters align="center">

      <v-col align="start" xs=12 sm=12 md=6>
        <v-container fluid id="info">
          <img id="logo" alt="Logo Progtutor" :src="logo" rel="preload" />
          <p class="text-h3">
            Cadastre-se agora na <b class="purple--text">Progtutor.</b>
            e desfrute de mais de <b class="blue--text">20 projetos</b> em diferentes linguagens.</p>
        </v-container>
      </v-col>

      <v-col align="start" xs=12 sm=12 md=6>
        <v-container fluid id="register-form">
          <p class="text-h5">Crie sua conta</p>

          <v-text-field
            v-model="registerForm.name"
            color="blue"
            background-color="purple"
            label="Nome Completo"
            outlined
            single-line
          />

          <v-text-field
            v-model="registerForm.username"
            color="blue"
            background-color="purple"
            label="Nome de Usuário"
            outlined
            single-line
          />

          <v-text-field
            v-model="registerForm.email"
            color="blue"
            background-color="purple"
            label="E-mail"
            outlined
            single-line
          />

          <v-text-field 
            v-model="registerForm.password"
            color="blue" 
            background-color="purple" 
            label="Senha" 
            outlined 
            single-line
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />

          <v-text-field 
            v-model="registerForm.confirmPassword"
            color="blue" 
            background-color="purple" 
            label="Confirmar Senha" 
            outlined 
            single-line
            :type="showPassword ? 'text' : 'password'"
          />

          <div id="div-btn-register">
            <v-btn id="btn-register" color="purple white--text">
              Cadastrar
            </v-btn>
          </div>

          <div class="text-center">
            <router-link to="/entrar" class="purple--text text-h6">
              Já tem uma conta? <span class="blue--text">Faça login!</span>
            </router-link>
          </div>
          
        </v-container>
      </v-col>

    </v-row>
  </v-container>
</template>

<script src="./Register.js"></script>
<style src="./Register.css" scoped></style>