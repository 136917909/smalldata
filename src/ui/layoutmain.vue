<template>
    <el-container style="height:100%;margin:0 auto;">
      <el-header class="header">
        <div style="margin-left: 100px">
          <el-avatar style="float: left;margin-top: 5px" :size="50" src="../assets/logo.png"></el-avatar>
          <div style="float: left;margin-left: 10px;margin-top: 20px">用户名</div>
          <div @click="turn_to_home()" style="margin-top: 10px;float: right">
            <el-button type="info" icon="el-icon-house" circle></el-button>
          </div>
        </div>
      </el-header>
      <el-main style="width: 1200px;margin: auto">
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
</template>

<script>
  export default {
    name: 'layoutmain',
    mounted () {
      this.$router.push('/index')
    },
    methods:{
        turn_to_home(){
            this.$router.push({
                name: 'homepage'
            })
        }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 80px;
    box-shadow: 0 1px 3px 1px rgba(26, 26, 26, 0.2);
  }
  .el-main {
    overflow: visible;
  }

</style>
