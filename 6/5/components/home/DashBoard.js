;(function(){
const template = `<div class="row placeholders">
<div v-for="(hobby,index) in hobbies" 
:key="index"

class="col-xs-6 col-sm-3 placeholder">
  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200"
    height="200" class="img-responsive" alt="Generic placeholder thumbnail">
  <h4>{{hobby}}</h4>
  <span class="text-muted">
    {{student.name}} Something else
    <br/>
    <a href="#" @click="deleteHobby(index)">删除</a>
    </span>
</div>
</div>`

window.DashBoard = {
    template,
    // 方式1 指定传递属性名 数组形式
    // props:['hobbies']

    //方式2 指定传递属性名和属性数据类型 对象形式
    // props:{
    //   hobbies:Array,
    //   student:Object
    // }

    //方式3 指定属性名 数据类型 必要性 默认值
    props:{
      hobbies:{
        type:Array,
        require:true
      },
      student:{
        type:Object,
        require:true,
        default:{name:'mary'}
      }
    },
    methods: {
      deleteHobby(index){
        this.$emit('delete_hobby',index)
      }
    },
}
})()