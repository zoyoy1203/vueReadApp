<template>
  <div id="footer">
    <mu-bottom-nav  :value.sync="shift">
      <mu-bottom-nav-item to='/' title="书架" value="书架" icon="person_outline"></mu-bottom-nav-item>
      <mu-bottom-nav-item to="/recommend" title="今日推荐" value="今日推荐" icon="restore"></mu-bottom-nav-item>
      <mu-bottom-nav-item to="/category" title="分类" value="分类" icon="sort"></mu-bottom-nav-item>
      <mu-bottom-nav-item to="/ranking" title="排行榜" value="排行榜" icon="receipt"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
export default{
  data () {
    return {
      shift: '书架'
    }
  },
  methods: {

  },
  props: {

  }
}
</script>

<style>
#footer{
  height: 134px;
  border-top: 3px solid #006400;
  box-shadow: 0 -4px 4px rgba(0,100,0,.15);
}
.mu-bottom-item-icon{
  width: auto;
}
.mu-bottom-item-active{
  color: #006400;
}
.mu-bottom-item-active .mu-bottom-item-text{
  color:#006400;
}
</style>
