<template>
  <v-container fluid class="pa-0">
    <Topbar />
    <div id="home">
      <v-row id="projetos" no-gutters>
        <v-col align="center">
          <div class="card">
            <h4 class="text-h4">É praticando que se aprende!</h4>
            <p>
              Melhore suas habilidades assistindo aulas gravadas,
              desenvolvendo projetos em diversas stacks de tecnologia e 
              receba feedback dos tutores e da comunidade <b class="text-purple">Progtutor</b>.
            </p>
            <v-btn color="#6E75C1" class="white--text">
              QUERO PROJETOS!
            </v-btn>
          </div>
        </v-col>

        <v-col align="center">
          *imagem*
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col align="center">
          <h3 class="text-h4">
            <b class="text-purple">Está pronto para desenvolver um projeto para o seu portfólio, mas ainda não sabe por onde começar?</b>
          </h3>
          <p>
            Na Progtutor, temos <b class="text-blue">SOLUÇÕES</b> para você que deseja desenvolver seu primeiro projeto,
            se aperfeiçoar em projetos existentes ou até mesmo aprender uma nova trilha.
          </p>
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<script src="./Home.js"></script>
<style src="./Home.css" scoped></style>