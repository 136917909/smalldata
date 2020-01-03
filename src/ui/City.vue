<template>
  <div>
    <div style="font-size: 50px;text-align: center;margin: auto;padding: 50px">
      城市详情页
    </div>
    <div style="font-size: 30px;text-align: center;margin: auto;padding: 50px">{{city_name}}</div>
    <hr>
    <div style="font-size: 30px;width:170px;margin: auto;padding: 50px">
      热门职业：
    </div>
    <div style="position: relative">
      <button @click="turn_to_occup(hot_job_list[4].name)" style="position: absolute;height: 20px;width: 60px;left: 100px;top: 85px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_occup(hot_job_list[3].name)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 155px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_occup(hot_job_list[2].name)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 225px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_occup(hot_job_list[1].name)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 295px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_occup(hot_job_list[0].name)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 365px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <div id="myChart" style="height: 500px;width: 1000px">
      </div>
    </div>
    <div id="myChart2" style="height: 300px;width: 300px"></div>
  </div>
</template>

<script>
  export default {
    name: 'City',
    data(){
      return{
        city_name:this.$route.params.city,
        hot_job_list:[]
      }
  },
    mounted () {
      this.drawLine();
    },
    methods:{
        turn_to_occup(e){
            this.$router.push({
                name: 'position',
                params: {
                    id: e
                }
            })
        },
      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({})
        this.$server.cityHotJobRank({city:this.$route.params.city}).then((response) => {
          this.hot_job_list = response.list
          setTimeout(() => {
            myChart.hideLoading();
            myChart.setOption({
              dataset: {
                source: [
                  ['score', 'amount', 'product'],
                  [89.3, response.list[0].value, response.list[0].name],
                  [57.1, response.list[1].value, response.list[1].name],
                  [74.4, response.list[2].value, response.list[2].name],
                  [50.1, response.list[3].value, response.list[3].name],
                  [32.7, response.list[4].value, response.list[4].name]
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
            })
          })
          console.log('api',response.list)
        })
          .catch(function (error) {
            console.log('err', error)
          })
      }
    }
  }
</script>

<style scoped>

</style>
