<template>
    <div>
      <div style="width: 200px;border-style:solid;border-width:1px;border-radius: 5px;padding: 5px">
        <div style="text-align: center"><img></div>
        <div>名字：{{this.$route.query.name}}</div>
        <div>城市：{{this.$route.query.intentcity}}</div>
        <div>工作经验：{{this.$route.query.workyear}}</div>
        <div>工作意向:</div>
        <div>技能：{{this.$route.query.skill}}</div>
        <div>岗位介绍：</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'PersonalCenter'
  }
</script>

<style scoped>

</style>
