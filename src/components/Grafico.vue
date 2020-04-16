<template>
  <div class="row">
    <div class="offset-1 col-10">
        <echart :options="options"></echart>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    options() {
      return {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
.echarts{
    width:100%;
    height:100%;
}
</style>