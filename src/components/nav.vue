<template>
  <div>
    <div class="nav">
      <div class="header">
        <div class="wrapper">
          <div class="logo Dis">
            <span>易车 | AI平台</span>
          </div>
          <div class="header-ul">
            <ul class="Dis">
              <li v-for="item in ulHerder" :value="item.value">
              <router-link :to="item.path">{{item.name}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        ulHerder:[
          {
            value:1,
            name:'首页',
            path:'/home'
          },
          {
            value:2,
            name:'产品服务',
            path:'/home'
          },
          {
            value:3,
            name:'新闻中心',
            path:'/home'
          },
          {
            value:4,
            name:'SDK下载',
            path:'/home'
          },
          {
            value:5,
            name:'文档与支持',
            path:'/home'
          }
        ]
      }
    }
  }
</script>
