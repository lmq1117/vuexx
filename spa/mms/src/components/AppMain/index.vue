<template>
  <div class="main">
    <!--  顶部面包屑  -->
    <app-link></app-link>

    <router-view></router-view>

  </div>
</template>

<script>
  import AppLink from './Link'
  export default {
    data() {
      return {
        // message: 'dafds'
      }
    },
    components:{
      AppLink
    }
  }
</script>

<style scoped>

</style>