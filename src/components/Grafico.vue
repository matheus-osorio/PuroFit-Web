<template>
  <div id="graph-area">
    <div id="graph">
      <echart :options="options"></echart>
    </div>
  </div>
</template>

<script>
export default {
    props:['raw'],
  computed: {
    options() {
      return {
        xAxis: {
          type: "category",
          data: this.raw.map((line) => {
             return line.x
          })
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.raw.map((line) => {
              return line.y
          }),
            type: "line"
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
#graph-area {
  width:100%;
  height:100%;
  display: grid;
  grid-template-columns: var(--empty-space-graph) 1fr var(--empty-space-graph);
  grid-template-rows: 1fr;
  grid-template-areas: "nothing graph nothing2";
}

.echarts {
  width: 100% !important;
  height: 100% !important;
}

#graph {
  width:100%;
  height:100%;
  grid-area: graph;
}
</style>