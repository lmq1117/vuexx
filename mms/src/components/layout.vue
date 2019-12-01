<template>
    <div>
        <app-header></app-header>
        <app-navbar></app-navbar>
        <app-main></app-main>
    </div>
</template>
<script>
    import AppHeader from "@/components/AppHeader"
    import AppNavbar from "@/components/AppNavbar"
    import AppMain from "@/components/AppMain"
    export default {
        components:{
            AppHeader,
            AppNavbar,
            AppMain,
        }
    }
</script>

<style scoped>
    .header {
        position: absolute;
        background:#2d3a4b;
        line-height: 50px;
        top:0px;
        left:0px;
        right: 0px;
    }

    .navbar{
        position: absolute;
        width:230px;
        background-color: #545c64;
        top:50px;
        left:0px;
        bottom: 0px;
        overflow-y: auto;
    }

    .main {
        position: absolute;
        top:50px;
        left:230px;
        right:0px;
        bottom: 0px;
        padding: 10px;
        overflow-y: auto;
        /*background-color: red;*/
    }
</style>