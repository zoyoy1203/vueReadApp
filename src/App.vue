<template>
  <div id="app">
    <!--keep-alive 结合router，缓存部分页面-->
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <app-foot id="footer" style="display:block;"></app-foot>
  </div>
</template>

<script>
import footer from './components/footandhead/footer'
export default {
  name: 'App',
  components: {
    'app-foot': footer
  }
}
</script>

<style lang="scss" scoped>
#app{
  box-sizing: border-box;
}
#footer{
  position: relative;
  bottom: 0;
  left: 0;
}
</style>
