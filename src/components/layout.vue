<template>
  <div class="ai">
    <commonNav></commonNav>
    <router-view></router-view>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonNav from "./nav.vue";
import commonFooter from "./footer.vue";
  export default{
    components:{commonNav,commonFooter},
  }
</script>

