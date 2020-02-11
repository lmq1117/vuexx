; (function () {
  window.AppHome = {
    template: `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

        <!--右边上半区域-->
        <h1 class="page-header">Dashboard</h1>
        
        <dash-board 
        v-bind:hobbies="hobbies" 
        :student="student"
        ></dash-board>
        <!--右边下半区域-->
        <h2 class="sub-header">Section title</h2>
        <home-list></home-list>
      </div>`,
    components: {
      DashBoard,
      HomeList
    },
    data() {
      return {
        hobbies: ['coding', '睡觉', '打豆豆', '吃饭'],
        student: { id: 1, name: 'jack', age: 18, level: 'A' },
      }
    }
  }
})()