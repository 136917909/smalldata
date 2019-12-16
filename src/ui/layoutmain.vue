<template>
    <el-container>
      <el-header class="header">
          <div>头像</div>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
</template>

<script>
  export default {
    name: 'layoutmain',
    mounted () {
      this.$router.push('/index')
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 30px;
    padding: 0 10px;
    border-left: 10px solid #a3be8c;
    font-size: 12px;
    line-height: 30px;
    color: #eff1f5;
    background: #343d46;
    overflow: hidden;
  }

</style>
