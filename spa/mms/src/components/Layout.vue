<template>
  <div>
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-main></app-main>
  </div>
</template>

<script>
    import AppHeader from './AppHeader'
    import AppNavbar from './AppNavbar'
    import AppMain from './AppMain'

    export default {
        components: {
            AppHeader,
            AppNavbar,
            AppMain
        },
        data() {
            return {
                // message: 'xxx',
            }
        }
    }
</script>

<style scoped>
  .header {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    line-height: 50px;
    background-color: #2d3a4b;
  }

  .navbar {
    position: absolute;
    top: 50px;
    left: 0px;
    bottom: 0px;
    width: 230px;
    background-color: #545c64;
    overflow-y: auto;
  }

  .main {
    position: absolute;
    top: 50px;
    right: 0px;
    left: 230px;
    bottom: 0px;
    padding: 10px;
    overflow-y: auto;
    /* background-color: antiquewhite; */
  }

</style>