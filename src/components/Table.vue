<template>
  <div id="table" class="mt-5">
      <table class="table">
          <thead>
              <th>#</th>
              <th>Valor</th>
              <th>Opções</th>
          </thead>
          <tbody>
              <tr v-for="(numero,index) in numeros" :key="numero.id">
                  <td>{{index}}</td>
                  <td>{{numero}}</td>
                  <td><button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    data(){
        return {
            numeros:[1,2,3,4,5]
        }
    }
}
</script>

<style scoped>
div{
    height: 100%;
}
</style>