<template>
    <div class="header">
        <a href="#/">
            <img class="logo" src="@/assets/logo.png" width="25px">
            <span class="company">会员管理系统</span>
        </a>

        <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        欢迎您:admin!<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="edit-password" icon="el-icon-edit">修改密码</el-dropdown-item>
                <el-dropdown-item command="logout" icon="el-icon-s-fold">退出系统</el-dropdown-item>

            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>


<script>
    export default {
        methods:{
            handleCommand(command){
                this.$message("点击了："+command+" - xxx")
            }
        }
    }

</script>

<style scoped>
    .logo {
        vertical-align: middle;
        padding: 0px 10px 0px 40px;
    }

    .company {
        position: absolute;
        color: white;
    }

    /*下拉菜单*/
    .el-dropdown {
        float: right;
        /*color: white;*/
        margin-right: 40px;
    }

    .el-dropdown-link{
        color:white;
        cursor: pointer;
    }

</style>