<template>
  <div id="page">
    <Navigation @changeActive="(value) => {active=value}" :active="active" id="nav"></Navigation>
    <div id="content">
      <Table :numeros="numeros" v-if="active=='tabela'" @addNewValue="reorganizeRows"></Table>
      <Grafico :raw="numeros" v-if="active=='grafico'"></Grafico>
    </div>
  </div>
</template>

<script>
import Navigation from "./Nav";
import Table from "./Table";
import Grafico from "./Grafico";
import Vue from "vue";

export default {
  components: {
    Navigation,
    Table,
    Grafico
  },
  data() {
    return {
      active: "tabela",
      numeros: []
    };
  },
  methods: {
    reorganizeRows() {
      for (let i = 0; i < this.numeros.length; i++) {
        for (let j = i+1; j < this.numeros.length; j++) {
          if (parseFloat(this.numeros[i].x) > parseFloat(this.numeros[j].x)) {
            console.log("entrou troca");
            let aux = { ...this.numeros[i] };
            Vue.set(this.numeros, i, this.numeros[j]);
            Vue.set(this.numeros, j, aux);
          }
        }
      }
      console.log('teste')
      console.log(this.numeros)
    }
  }
};
</script>

<style scoped>
#page {
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows:
    var(--nav-height)
    1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav"
    "content";
}

#nav {
  grid-area: nav;
}

#content {
  grid-area: content;
}
</style>