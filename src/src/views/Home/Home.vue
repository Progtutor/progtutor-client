<template>
  <v-container fluid class="pa-0">
    <Topbar />

    <div id="main" class="base">
      <v-row>
        <v-col align="center">
          <div class="card">
            <h4 class="text-h4">É praticando que se aprende!</h4>
            <p>
              Melhore suas habilidades assistindo aulas gravadas,
              desenvolvendo projetos em diversas stacks de tecnologia e 
              receba feedback dos tutores e da comunidade <b class="purple--text">Progtutor</b>.
            </p>
            <v-btn color="#6E75C1" class="white--text">
              QUERO PROJETOS!
            </v-btn>
          </div>
        </v-col>

        <v-col align="center">
          <img id="img-code" alt="Coding" :src="imageCode" rel="preload" />
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center">
          <h3 class="text-h4">
            <b class="purple--text">Está pronto para desenvolver um projeto para o seu portfólio, mas ainda não sabe por onde começar?</b>
          </h3>
          <p>
            Na Progtutor, temos <b class="blue--text">SOLUÇÕES</b> para você que deseja desenvolver seu primeiro projeto,
            se aperfeiçoar em projetos existentes ou até mesmo aprender uma nova trilha.
          </p>
        </v-col>
      </v-row>

      <div id="solutions">
        <v-row>
          <v-col id="f-col">
            <div class="card">
              <v-icon color="blue" size=35>mdi-play-circle-outline</v-icon>
              <div class="purple--text title">Watch</div>
              <p>
                Com o <b class="purple--text">Watch</b> você pode assistir videos gravados por um tutor ensinando 
                passo-a-passo como construir um determinado projeto nas linguagens disponíveis.
              </p>
            </div>

            <div class="card">
              <v-icon color="blue" size=35>mdi-sync</v-icon>
              <div class="purple--text title">Progress</div>
              <p>
                Com o <b class="purple--text">Progress</b> você terá acesso a projetos semi desenvolvidos onde você poderá aperfeiçoar,
                dar sugestões e também acompanhar a discussão de toda a comunidade.
              </p>
            </div>

          </v-col>

          <v-col>
            <div class="card">
              <v-icon color="blue" size=35>mdi-progress-wrench</v-icon>
              <div class="purple--text title">Construct</div>
              <p>
                Com o <b class="purple--text">Construct</b> você pode desenvolver projetos individualmente ou em grupo de acordo
                com o roteiro e sugestões oferecidos pelos nossos tutores.
              </p>
            </div>

            <div class="card">
              <v-icon color="blue" size=35>mdi-forum-outline</v-icon>
              <div class="purple--text title">Feedback</div>
              <p>
                Receba <b class="purple--text">feedbacks</b> exclusivos sobre seus projetos desenvolvidos dos
                nossos tutores ou até mesmo da comunidade Progtutor.
              </p>
            </div>
          </v-col>

        </v-row>
      </div>
    </div>

    <div id="languages">
        <v-row align="center">
          <v-col align="center" color="purple">
            <div>Soluções disponíveis inicialmente nas seguintes linguagens</div>
            <v-icon class="blue--text" size=35>mdi-language-python</v-icon>
            <v-icon class="blue--text" size=35>mdi-language-javascript</v-icon>
          </v-col>
        </v-row>
    </div>

    <div id="video">
      <v-row align="center">
          <v-col align="center">
          </v-col>
        </v-row>
    </div>

    <div id="stats">
      <v-row align="center">
          <v-col align="center" v-for="row in stats" :key="row.name">
            <b class="purple--text title text-h4 text-center" v-text="'+' + row.value"></b>
            <p class="text-center" v-text="row.name"></p>
          </v-col>
        </v-row>
    </div>

    <div id="projects" class="base">
      <v-row align="center">
          <v-col align="center">
            <div class="text-h4 blue--text">Que tipo de projeto vou encontrar na <span class="purple--text">Progtutor</span>?</div>
            <p>
              Você encontrará projetos de vários tipos, com foco maior em <b class="purple--text">back end</b>, 
              mas temos a missão de levar o maior conhecimento possível em nossa plataforma
            </p>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col align="center">
            <div class="p-card">Criação e Consumo de API's</div>
          </v-col>

          <v-col align="center">
            <div class="p-card">Webcrawler e Webscrapping</div>
          </v-col>

          <v-col align="center">
            <div class="p-card"></div>
          </v-col>

          <v-col align="center">
            <div class="p-card"></div>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col align="center">
            <div class="p-card"></div>
          </v-col>

          <v-col align="center">
            <div class="p-card"></div>
          </v-col>

          <v-col align="center">
            <div class="p-card"></div>
          </v-col>

          <v-col align="center">
            <div class="p-card"></div>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col align="center">
            <div class="p-card"></div>
          </v-col>

          <v-col align="center">
            <div class="p-card"></div>
          </v-col>

          <v-col align="center">
            <div class="p-card"></div>
          </v-col>

          <v-col align="center">
            <div class="p-card"></div>
          </v-col>
        </v-row>

    </div>

    <div id="plans" class="base">
      <v-row align="center">
          <v-col align="center">
            <div class="text-h4 blue--text title">Conheça nossos planos</div>
          </v-col>
      </v-row>

      <v-row align="center">
          <v-col align="center">
            <div class="sep"></div>
          </v-col>
      </v-row>

      <v-row align="center">
        <v-col align="center">
          <div class="plan-card">
            <b class="purple--text title">Trilha Full - Anual</b>
            <div class="plan-card-content">
              <p>Acesso a todo o conteudo do Progtutor e suas atualizações por 1 ano</p>
              <div><v-icon color="blue" left>mdi-checkbox-outline</v-icon><span>Watch</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-outline</v-icon><span>Construct</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-outline</v-icon><span>Progress</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-outline</v-icon><span>Feedback</span></div>
              <p><br>Plano anual de <b class="purple--text">R$ 000,00</b> por apenas
              <br><b class="blue--text text-h5">12x de R$ 00,00</b></p>
            </div>
            <v-btn color="purple" class="white--text">
              QUERO A TRILHA FULL
            </v-btn>
          </div>
        </v-col>

        <v-col align="center">
          <div class="plan-card">
            <b class="purple--text title">Trilha Semi - Anual</b>
            <div class="plan-card-content">
              <p>Acesso aos seguintes conteudos do Progtutor e suas atualizações por 1 ano</p>
              <div><v-icon color="blue" left>mdi-checkbox-outline</v-icon><span>Watch</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-outline</v-icon><span>Construct</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-blank-outline</v-icon><span>Progress</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-blank-outline</v-icon><span>Feedback</span></div>
              <p><br>Plano anual de <b class="purple--text">R$ 000,00</b> por apenas
              <br><b class="blue--text text-h5">12x de R$ 00,00</b></p>
            </div>
            <v-btn color="purple" class="white--text">
              QUERO A TRILHA SEMI
            </v-btn>
          </div>
        </v-col>

        <v-col align="center">
          <div class="plan-card">
            <b class="purple--text title">Projeto Avulso</b>
            <div class="plan-card-content">
              <p>Acesso liberado para cada projeto selecionado na linguagem desejada</p>
              <div><v-icon color="blue" left>mdi-checkbox-outline</v-icon><span>Watch</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-outline</v-icon><span>Construct</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-blank-outline</v-icon><span>Progress</span></div>
              <div><v-icon color="blue" left>mdi-checkbox-blank-outline</v-icon><span>Feedback</span></div>
              <p><br>Plano anual de <b class="purple--text">R$ 000,00</b> por apenas
              <br><b class="blue--text text-h5">12x de R$ 00,00</b></p>
            </div>
            <v-btn color="purple" class="white--text">
              QUERO O PROJETO AVULSO
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>

    <Footer />
  </v-container>
</template>

<script src="./Home.js"></script>
<style src="./Home.css" scoped></style>