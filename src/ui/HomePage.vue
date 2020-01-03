<template>
  <div>
    <div>
      <div style="float: left;width: 100px">
        <div style="display: flex;flex-direction: column;justify-content: center;">
          <el-button @click="curid=0" :class="{'cur':curid===0}">全部</el-button>
          <el-button @click="curid=1" :class="{'cur':curid===1}">拉勾网</el-button>
          <el-button @click="curid=2" :class="{'cur':curid===2}">前程</el-button>
          <el-button @click="curid=3" :class="{'cur':curid===3}">智联招聘</el-button>
        </div>
      </div>
      <div style="height: 600px;width: 1000px;margin-left:120px;">
          <Map></Map>
      </div>
    </div>
    <div style="position: relative">
      <button @click="turn_to_occup('大数据')" style="position: absolute;height: 20px;width: 60px;left: 100px;top: 85px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_occup('C')"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 155px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_occup('前端')"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 225px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_occup('java')"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 295px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_occup('软件架构')"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 365px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <div id="myChart" style="height: 500px;width: 1000px">

      </div>
    </div>
  </div>
</template>

<script>
  import Map from './Map'
  import echarts from "echarts"
  import 'echarts/map/js/province/guangdong.js'
  import 'echarts/map/js/china.js'
  import option from "../../static/js/MapOption.js"
  import option1 from "../../static/js/test.js"
  export default {
    name: 'HomePage',
    components: {Map},
    data(){
      return{
        tabPosition:'left',
        curid:0
      }
    },
    mounted(){
      this.drawLine();
      this.ChinaMap();
    },
    methods: {
      turn_to_occup(e){
          this.$router.push({
              name: 'position',
              params: {
                  id: e
              }
          })
      },
      ChinaMap() {
        let ChinaMap = echarts.init(document.getElementById('map')) //这里是为了获得容器所在位置
        ChinaMap.setOption(option);
      },
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          dataset: {
            source: [
              ['score', 'amount', 'product'],
              [50, 63233, '软件架构'],
              [50, 9749, 'Java'],
              [50, 7220, '前端'],
              [50, 2606, 'C语言'],
              [50, 1944, '大数据']
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
      },
    }
  }
</script>

<style scoped>
  .cur{
    background:rgba(255,131,35,1);
    border-radius:5px;
    font-size:16px;
    font-family:Source Han Sans CN;
    color:rgba(255,255,255,1);
    line-height:24px;
    font-weight: 500;
  }
  .el-button+.el-button {
    margin-left: 0px;
    margin-top: 10px;
  }
</style>
