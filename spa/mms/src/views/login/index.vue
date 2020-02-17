<template>
  <div class="login-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-form">
      <h2>会员管理系统</h2>

      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <!-- @click="onSubmit" -->
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, getUserInfo } from "@/api/login";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // console.log(valid)
        if (valid) {
            //后端验证账号密码，给出token
          login(this.form.username, this.form.password).then(response => {
            const resp = response.data;
            // console.log(resp, resp.code, resp.data.token);
            if (resp.code == 200) {
              //验证通过，通过token去获取会员信息
              getUserInfo(resp.data.token).then(response => {
                const respUser = response.data;
                // console.log(
                //   respUser,
                //   respUser.data.userInfo.name,
                //   respUser.data.userInfo.address
                // );

                if (respUser.code == 200) {
                  const userInfo = respUser.data.userInfo;
                  //   console.log(userInfo);

                  //保存token userInfo到 local
                  localStorage.setItem("mms-user", JSON.stringify(userInfo));
                  localStorage.setItem("mms-token", resp.data.token);

                  this.$router.push("/");
                } else {
                  this.$message({
                    message: respUser.msg,
                    type: "warning"
                  });
                }
              });
            } else {
              //验证用户名密码失败，未获得token
              this.$message({
                message: resp.msg,
                type: "warning"
              });
            }
          });
        } else {
          this.$message({
            message: "用户名或密码不能为空",
            type: "warning"
          });
          return false;
        }
      });
    }
  }
};

// console.log("aabbcc");
</script>

<style scoped>
.login-form {
  width: 350px;
  margin: 160px auto;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 28px;
  border-radius: 20px;
}

.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/login.jpg");
}

.login-title {
  color: #303133;
  text-align: center;
}
</style>