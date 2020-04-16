<template>
  <nav class="navbar navbar-custom">
      <div class="nav-items ml-auto">
          <div :class="{'active': active=='tabela'}" @click="$emit('changeActive','tabela')" class="nav-item"><a href="#" class="nav-link">Dados</a></div>
          <div :class="{'active': active=='grafico'}" @click="$emit('changeActive','grafico')" class="nav-item"><a href="#" class="nav-link">Gráficos</a></div>    
      </div>
  </nav>


</template>

<script>
export default {
   props:['active']
}
</script>

<style scoped>
.navbar-custom{
    padding: 0px;
    background-color:#1b89b5;
}

.nav-items{
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-item{
    height:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

a{
    color:antiquewhite;
}
.active{
 background-color:#0c3c4f;
}
</style>