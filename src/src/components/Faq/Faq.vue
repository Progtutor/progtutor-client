<template>
  <v-container id="faq" fluid>
    <v-row no-gutters>
      <v-col align="start">
        <v-tabs background-color="#141418" color="blue">
          <v-tab v-for="(tab, i) in tabs" :key="i" v-text="tab" />
        </v-tabs>
        <v-expansion-panels accordion tile class="panel-content">
        <v-expansion-panel v-for="(doubt,i) in doubts" :key="i">
          <v-expansion-panel-header class="panel-header">{{doubt}}</v-expansion-panel-header>
          <v-expansion-panel-content class="panel-content">{{'Resposta'}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Faq.js"></script>
<style src="./Faq.css" scoped></style>