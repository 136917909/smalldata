<template>
    <div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="phone" label="手机号">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
                else {
                    callback();
                }
            };
            var phonenumber=(rule, value, callback) => {
                if (value && (!(/^[1][34578]\d{9}$/).test(value) || !(/^[1-9]\d*$/).test(value) || value.length !== 11)) {
                    callback(new Error('手机号码不符合规范'))
                }
                else if(value=== ''){
                    callback(new Error('请输入手机号码'));
                }
                else {
                    callback()
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    phone: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: phonenumber, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push({
                            name: 'homepage'
                        })
                    } else {
                        console.log('密码或电话号码失败');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style scoped>

</style>
