<template>
    <div>
      <el-card style="width: 200px;height: 500px">
        <div style="text-align: center"><img></div>
        <div style="margin: 10px">名字：{{this.$route.query.name}}</div>
        <div style="margin: 10px">城市：{{this.$route.query.intentcity}}</div>
        <div style="margin: 10px">工作经验：{{this.$route.query.workyear}}</div>
        <div style="margin: 10px">工作意向:{{this.$route.query.workdir}}</div>
        <div style="margin: 10px">技能：{{this.$route.query.skill}}</div>
        <div style="margin-top: 30px">职业推荐：c++</div>
      </el-card>
<!--      <div style="width: 200px;border-style:solid;border-width:1px;border-radius: 5px;padding: 5px">-->
<!--        <div style="text-align: center"><img></div>-->
<!--        <div>名字：{{this.$route.query.name}}</div>-->
<!--        <div>城市：{{this.$route.query.intentcity}}</div>-->
<!--        <div>工作经验：{{this.$route.query.workyear}}</div>-->
<!--        <div>工作意向:</div>-->
<!--        <div>技能：{{this.$route.query.skill}}</div>-->
<!--        <div>岗位介绍：</div>-->
<!--      </div>-->
    </div>
</template>

<script>
  export default {
    name: 'PersonalCenter'
  }
</script>

<style scoped>

</style>
