<template>
  <div>
    <div style="font-size: 50px;text-align: center;margin: auto;padding: 50px">
      职业详情页
    </div>
    <div style="text-align: center;font-size: 30px;padding: 50px">{{this.Occup_id}}</div>
    <div>
      <div style="font-size: 20px;padding: 20px">职业匹配度：{{this.job_match}}%<span></span></div>
    </div>
    <div style="padding: 50px;background: darkgrey;">
      <div>技能要求</div>
      <div>{{this.job_message}}</div>
    </div>
    <hr style="margin-top: 50px">
    <div style="font-size: 30px;text-align: center;margin: auto;padding: 50px">
      职业热门城市薪资排名：
    </div>

    <div style="position: relative">
      <button @click="turn_to_city(hot_city_list[4].city) " style="position: absolute;height: 20px;width: 60px;left: 100px;top: 85px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_city(hot_city_list[3].city)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 155px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_city(hot_city_list[2].city)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 225px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_city(hot_city_list[1].city)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 295px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_city(hot_city_list[0].city)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 365px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <div id="myChart" style="height: 500px;width: 1000px">

      </div>
      <hr style="margin-top: 50px">
      <div style="font-size: 30px;text-align: center;margin: auto;padding: 50px">
        职业热门城市薪资排名：
      </div>
    </div>
    <div style="position: relative">
      <button @click="turn_to_city(hot_city_list2[4].name) " style="position: absolute;height: 20px;width: 60px;left: 100px;top: 85px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_city(hot_city_list2[3].name)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 155px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_city(hot_city_list2[2].name)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 225px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_city(hot_city_list2[1].name)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 295px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <button @click="turn_to_city(hot_city_list2[0].name)"style="position: absolute;height: 20px;width: 60px;left: 100px;top: 365px;z-index: 5;background: transparent;border: none;outline: none;cursor: pointer;"></button>
      <div id="myChart2" style="height: 500px;width: 1000px">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Occupation',
    data(){
        return{
          Occup_id:this.$route.params.id,
          hot_city_list:[],
          hot_city_list2:[],
          job_ms:[],
          job_match:'',
          job_message:'',
          job_message2:[]
        }
    },
    mounted () {
        this.drawLine();
        this.drawLine2();
        this.$server.jobMassageShow({job:this.$route.params.id}).then((response) => {
          this.job_ms = response.list1
          this.job_match = response.list1[0].job_match
          this.job_message = response.list1[0].job_message
          console.log('jobmes1',response)
        })
          .catch(function (error) {
            console.log('err', error)
          })
    },
    methods:{
        turn_to_city(e){
            this.$router.push({
                name: 'citys',
                params: {city: e}
            })
        },

        drawLine(){
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            myChart.setOption({})
            this.$server.jobSalaryCityRank({job:this.$route.params.id}).then((response) => {
              this.hot_city_list = response.list
              setTimeout(() => {
                myChart.hideLoading();
                myChart.setOption({
                  dataset: {
                    source: [
                      ['score', 'amount', 'product'],
                      [89.3, response.list[0].avgSalary, response.list[0].city],
                      [57.1, response.list[1].avgSalary, response.list[1].city],
                      [74.4, response.list[2].avgSalary, response.list[2].city],
                      [50.1, response.list[3].avgSalary, response.list[3].city],
                      [32.7, response.list[4].avgSalary, response.list[4].city]
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
              console.log('api1',response)
            })
              .catch(function (error) {
                console.log('err', error)
              })
        },
      drawLine2(){
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        myChart.setOption({})
        this.$server.jobHotCityRank({job:this.$route.params.id}).then((response) => {
          this.hot_city_list2 = response.list
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
          console.log('api',response)
        })
          .catch(function (error) {
            console.log('err', error)
          })
      },
    }
}
</script>

<style scoped>

</style>
