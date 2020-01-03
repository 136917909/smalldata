<template>
    <div style="width: 800px;margin-left: 300px;">
      <div>填写详细信息：</div>
      <el-form ref="form" :model="form" label-width="80px" label-position="left">
        <el-form-item label="城市">
          <el-input v-model="form.intentcity"></el-input>
        </el-form-item>
        <el-form-item label="期望工资">
          <el-input v-model="form.salary"></el-input>
        </el-form-item>
        <el-form-item label="工作意向">
          <el-select v-model="form.workdir" placeholder="请选择意向">
            <el-option label="java" value="java"></el-option>
            <el-option label="python" value="python"></el-option>
            <el-option label="c++" value="c++"></el-option>
            <el-option label="前端" value="web"></el-option>
            <el-option label="android" value="android"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作经验">
          <el-radio-group v-model="form.workyear">
            <el-radio label="应届毕业生"></el-radio>
            <el-radio label="1-3年"></el-radio>
            <el-radio label="3-5年"></el-radio>
            <el-radio label="5-10年"></el-radio>
            <el-radio label="10年以上"></el-radio>
            <el-radio label="不要求"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="公司规模">
          <el-radio-group v-model="form.companysize">
            <el-radio label="少于15人"></el-radio>
            <el-radio label="15-50人"></el-radio>
            <el-radio label="50-150人"></el-radio>
            <el-radio label="150-500人"></el-radio>
            <el-radio label="500-2000人"></el-radio>
            <el-radio label="2000人以上"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="技能">
          <el-checkbox-group v-model="form.skill">
            <el-checkbox label="网络爬虫" name="type"></el-checkbox>
            <el-checkbox label="spring mvc" name="type"></el-checkbox>
            <el-checkbox label="Android开发" name="type"></el-checkbox>
            <el-checkbox label="c++编程" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'match',
  data() {
      return {
          form: {
              companysize: '',
              workyear: '',
              workdir: '',
              salary: '',
              intentcity: '',
              skill:[]
          }
      }
  },
    methods: {
        onSubmit() {
            this.$router.push({
                name: 'homepage'
            })
        }
    }
}

</script>

<style scoped>

</style>
