<template>
  <div id="table">
    <table class="table">
      <thead class="sticky">
        <th>#</th>
        <th>x</th>
        <th>y</th>
        <th class="overline">x</th>
        <th class="overline">y</th>
        <th>Opções</th>
      </thead>
      <tbody>
        <tr v-for="(numero,index) in numeros" :key="numero.id">
          <td>{{index + 1}}</td>
          <td>
            <input type="text" class="form-control" aria-describedby="emailHelp" v-model="numero.x" />
          </td>
          <td>
            <input type="text" class="form-control" aria-describedby="emailHelp" v-model="numero.y" />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="numero.ex"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="numero.ey"
            />
          </td>
          <td>
            <button type="button" class="btn btn-danger" @click="deleteRow(index)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="newNumber.x"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="newNumber.y"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="newNumber.ex"
            />
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="newNumber.ey"
            />
          </td>
          <td>
            <button type="button" class="btn btn-success" @click="addRow()">
              <i class="fas fa-plus"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  props: ["numeros"],
  data() {
    return {
      templateNumber: {
        x: 0,
        y: 0,
        ex: 0,
        ey: 0
      },
      newNumber: {
        x: 0,
        y: 0,
        ex: 0,
        ey: 0
      }
    };
  },
  methods: {
    deleteRow(index) {
      this.numeros.splice(index, 1);
    },
    addRow() {
      for(const key of Object.keys(this.newNumber)){
          this.newNumber[key] = parseFloat(this.newNumber[key])
      }
      this.numeros.push({ ...this.newNumber });
      this.newNumber = { ...this.templateNumber };
      this.$emit('addNewValue')
      setTimeout(()=> {
        document.querySelector("#table").scrollBy({
        top: 100,
        left: 100,
        behavior: "smooth"
      });
      },0.5)
    }
  }
};
</script>

<style scoped>
div {
  overflow-y: auto;
  height: calc(100vh - 50px);
}

.sticky {
  position: sticky;
  top: 0;
}

.overline {
  text-decoration: overline;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 50px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: darkgrey;
}

::-webkit-scrollbar-thumb:active {
  background: #555555;
}
</style>