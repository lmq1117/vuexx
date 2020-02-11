; (function () {
  window.HomeList = {
    template: `<div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>姓名</th>
              <th>工资</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <list-item v-for="(emp,index) in empList" 
            :key="emp.id" 
            :emp="emp" 
            :deleteEmp="deleteEmp"
            :index="index"
            ></list-item>
          </tbody>
        </table>
      </div>`,
    data() {
      return {
        name: '小Q'
      }
    },
    components: {
      ListItem
    },
    // props:['empList','deleteEmp']
    props: {
      empList: {
        type: Array,
        require: true
      },
      deleteEmp: {
        type: Function,
        require: true
      }
    }
  }
})()