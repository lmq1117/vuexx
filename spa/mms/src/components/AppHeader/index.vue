<template>
  <div class="header">
    <a href="#">
      <img class="logo" src="@/assets/logo.png" width="25px"/>
      <span class="title">小Q会员管理系统</span>
    </a>

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        Admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold" command="b">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import {logout} from '@/api/login'
  export default {
    data() {
      return {};
    },
    methods: {
      handleCommand(command) {
        // this.$message(`点击了'${command}'`)
        switch (command) {
          case 'a':
            this.$message(`修改密码`)
            break;
          case 'b':
            // this.$message(`退出系统`)
            logout( localStorage.getItem('mms-token') ).then(response =>{
              const resp = response.data
              if(resp.code == 200){
                localStorage.removeItem('mms-token')
                localStorage.removeItem('mms-user')
                this.$router.push('/login')
              } else {
                this.$message({
                  message:resp.message,
                  type:'warning',
                  duration:500 //提示框存活时间
                })
              }
            })

            break;
          default:
            break;

        }
      }
    }
  };
</script>

<style scoped>
  .logo {
    vertical-align: middle;
    padding: 0 10px 0 40px;
  }

  .title {
    color: white;
    cursor: pointer;
  }

  .el-dropdown {
    float: right;
    margin-right: 40px;
  }

  .el-dropdown-link {
    color: white;
    cursor: pointer;
  }
</style>