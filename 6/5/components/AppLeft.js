; (function () {
  window.AppLeft = {
    template: `<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active"><a href="#">Overview 
      <!--class="sr-only"-->
      <span v-show="delNum">({{delNum}})</span>
      </a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Export</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item</a></li>
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
      <li><a href="">More navigation</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
    </ul>
    </div>`,
    data() {
      return {
        delNum: 0//初始化
      }
    },
    created() {
      //订阅消息，当删除dashboard item时发布消息
      PubSub.subscribe('changeNum', (event, num) => {
        this.delNum = this.delNum + num
      })
    },
  }
})()