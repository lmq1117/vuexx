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
        <home-list 
        :empList="empList"
        :deleteEmp="deleteEmp"
        ></home-list>
      </div>`,
    components: {
      DashBoard,
      HomeList
    },
    data() {
      return {
        hobbies: ['coding', '睡觉', '打豆豆', '吃饭'],
        student: { id: 1, name: 'jack', age: 18, level: 'A' },
        empList: [
          { id: 1, name: '曹操', salary: 80001 },
          { id: 2, name: '刘备', salary: 80001 },
          { id: 3, name: '关羽', salary: 80001 },
          { id: 4, name: '张飞', salary: 80001 },
          { id: 5, name: '赵云', salary: 80001 },
          { id: 6, name: '黄忠', salary: 80001 },
          { id: 7, name: '曹操', salary: 80001 },
          { id: 8, name: '曹操', salary: 80001 },
          { id: 9, name: '曹操', salary: 80001 },
          { id: 10, name: '曹操', salary: 80001 },
          { id: 11, name: '曹操', salary: 80001 },
          { id: 12, name: '曹操', salary: 80001 },
          { id: 13, name: '曹操', salary: 80001 },
          { id: 14, name: '曹操', salary: 80001 },
          { id: 15, name: '曹操', salary: 80001 },
          { id: 16, name: '曹操', salary: 80001 },
          { id: 17, name: '曹操', salary: 80001 },
          { id: 18, name: '曹操', salary: 80001 },
        ],
      }
    },
    methods: {
      deleteEmp(index) {
        this.empList.splice(index, 1)
      }
    },
  }
})()