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
              <li v-for="item in ulHerder" :value="item.value">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg" :style ="bg"><div class="nav-span"><span>让产品更智能 更懂用户</span></div></div>  
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        bg: {
          backgroundImage: "url(" + require("../images/bg.png") + ")"
        },
        ulHerder:[
          {
            value:1,
            name:'首页',
          },
          {
            value:2,
            name:'产品服务'
          },
          {
            value:3,
            name:'新闻中心'
          },
          {
            value:4,
            name:'SDK下载'
          },
          {
            value:5,
            name:'文档与支持'
          }
        ]
      }
    }
  }
</script>
