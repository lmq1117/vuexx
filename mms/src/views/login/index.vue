<template>
    <div class="login-container">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-form">
            <h2 class="login-title">会员管理系统</h2>
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {login, getUserInfo} from "@/api/login";

    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: "账号不能为空", trigger: 'blur'},
                        {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: "密码不能为空", trigger: 'blur'},
                        {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
                    ],
                },
            }
        },

        methods: {
            onSubmit(formName) {
                // console.log('submit!' + Math.random());
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        // 提交api 验证用户名密码是否正确并返回token
                        login(this.form.username, this.form.password).then(response => {
                            // console.log(response.data)
                            const resp = response.data
                            if (resp.code == "0000") {
                                //获取token成功 拿token去获取userInfo
                                getUserInfo(resp.token).then(response => {
                                    const respUser = response.data
                                    if (respUser.code == "0000") {
                                        localStorage.setItem("mms-user", JSON.stringify(respUser.data))
                                        localStorage.setItem("mms-token", resp.token)
                                        //登录成功 跳转至首页
                                        this.$router.push("/")
                                    } else {
                                        this.$message({
                                            message: respUser.message,
                                            type: "warning",
                                        })
                                    }

                                })
                            } else {
                                this.$message({
                                    message: resp.message,
                                    type: "warning",
                                })
                            }

                        })
                    } else {
                        this.$message({
                            message: "submit valid error",
                            type: "warning",
                        })
                        // console.log("submit valid error")
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../../assets/login-back.jpg") no-repeat;
        background-size: 100% 100%;
    }

    .login-form {
        width: 350px;
        margin: 160px auto;
        padding: 30px;
        background-color: rgb(255, 255, 255, 0.8);
        border-radius: 20px;
    }

    .login-title {
        color: #303133;
        text-align: center;
    }

</style>