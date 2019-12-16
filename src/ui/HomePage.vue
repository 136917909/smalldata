<template>
  <div>
    <div style="">
      <el-tabs :tab-position="tabPosition" style="margin-left: 100px;height: 300px">
        <el-tab-pane label="全部">12</el-tab-pane>
        <el-tab-pane label="赶集网">32</el-tab-pane>
        <el-tab-pane label="58同城">56</el-tab-pane>
        <el-tab-pane label="前程无忧">45</el-tab-pane>
      </el-tabs>
    </div>
    <div id="myChart" style="height: 300px;width: 300px"></div>
    <div id="myChart2" style="height: 300px;width: 300px"></div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data(){
      return{
        tabPosition:'left'
      }
    },
    mounted(){
      this.drawLine();
      this.circle();
    },
    methods: {
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      circle(){
        let myCharts2 = this.$echarts.init(document.getElementById('myChart2'))
        myCharts2.setOption({
          title:{text: '在Vue中使用echarts'},
          tooltip:{},
          angleAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            z: 10
          },
          radiusAxis: {
          },
          polar: {
          },
          series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
          }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
          }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
          }],
          legend: {
            show: true,
            data: ['A', 'B', 'C']
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
