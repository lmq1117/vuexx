;(function(){
    const template = `<tr>
    <td>{{emp.id}}</td>
    <td>{{emp.name}}</td>
    <td>{{emp.salary}}</td>
    <td>
    <a href="#" @click="deleteItem">删除</a>
    </td>
  </tr>`
  window.ListItem = {
      template,
    //   props:['emp',{name:'deleteEmp',type:Function},'index'],
    props:{
        emp:{
            type:Object,
            require:true
        },
        deleteEmp:{
            type:Function,
            require:true
        },
        index:{
            type:Number,
            require:true
        }
    },
      methods: {
        deleteItem(){
            if(window.confirm(`确定删除姓名为: ${this.emp.name} 的记录吗?`)){
                this.deleteEmp(this.index)
            }
        }
      },
  }
})()