<template>
  <div>
    <div>城市xx</div>
    <div id="myChart" style="height: 500px;width: 1000px"></div>
    <div id="myChart2" style="height: 300px;width: 300px"></div>
  </div>
</template>

<script>
  export default {
    name: 'City',
    data(){
      return{

      }
  },
    mounted () {
      this.drawLine();
    },
    methods:{
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          dataset: {
            source: [
              ['score', 'amount', 'product'],
              [89.3, 58212, 'Matcha Latte'],
              [57.1, 78254, 'Milk Tea'],
              [74.4, 41032, 'Cheese Cocoa'],
              [50.1, 12755, 'Cheese Brownie'],
              [32.7, 20112, 'Walnut Brownie']
            ]
          },
          grid: {containLabel: true},
          xAxis: {name: '热度'},
          yAxis: {type: 'category'},
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: ['#D7DA8B', '#E15457']
            }
          },
          series: [
            {
              type: 'bar',
              encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
              }
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>

</style>
