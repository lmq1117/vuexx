<template>
    <div class="login-container">
        <el-form ref="form" :model="form" label-width="80px" class="login-form">
            <h2 class="login-title">会员管理系统</h2>
            <el-form-item label="账号">
                <el-input v-model="form.username"></el-input>
            </el-form-item>

            <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password:'',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!'+Math.random());
            }
        }
    }
</script>

<style scoped>
    .login-container {
        position: absolute;
        width:100%;
        height:100%;
        background:url("../../assets/login-back.jpg") no-repeat;
        background-size: 100% 100%;
    }
    .login-form {
        width:350px;
        margin:160px auto;
        padding: 30px;
        background-color: rgb(255,255,255,0.8);
        border-radius: 20px;
    }

    .login-title {
        color:#303133;
        text-align: center;
    }

</style>