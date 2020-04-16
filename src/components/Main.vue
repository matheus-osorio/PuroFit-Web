<template>
  <div id="page">
      <Navigation @changeActive="(value) => {active=value}" :active="active" id="nav"></Navigation>
      <Table v-if="active=='tabela'"></Table>
      <Grafico v-if="active=='grafico'"></Grafico>
  </div>

</template>

<script>
import Navigation from './Nav'
import Table from './Table'
import Grafico from './Grafico'

export default {
components:{
    Navigation,
    Table,
    Grafico
},
data(){
    return{
        active:"tabela"
    }
}
}
</script>

<style scoped>

#page{
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

#nav{
    grid-area:nav;
}

#page > #content{
    grid-area:content;
}
</style>