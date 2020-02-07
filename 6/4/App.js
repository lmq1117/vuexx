;(function(){
    window.App = {
        template:`<div id="aapp">    
        <!-- 头部导航区域 -->
        <app-navbar></app-navbar>
        <div class="container-fluid">
          <div class="row">
            <!-- 左侧菜单区域 -->
            <app-left></app-left>
            <!-- 右侧主页区域 分上下两个区域 -->
            <app-home></app-home>
          </div>
        </div></div>`,
        components: {
            AppNavbar,
            AppLeft,
            AppHome
          }
    }
})()