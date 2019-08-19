<template>
  <div id="category">
    <app-head :title="'书籍分类'"></app-head>
    <div class="category-view">
      <male-Category :maleCategory="categorylist.male"></male-Category>
      <female-Category :femaleCategory="categorylist.female"></female-Category>
    </div>
  </div>
</template>

<script>
import header from './footandhead/header'
import maleCategory from './category/maleCategory'
import femaleCategory from './category/femaleCategory'
import {getCategories} from '../api/api'

export default {
  name: 'category',
  data () {
    return {
      categorylist: {}
    }
  },
  components: {
    'app-head': header,
    'male-Category': maleCategory,
    'female-Category': femaleCategory
  },
  created () {
    getCategories().then((res) => {
      this.categorylist = res.data
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
  #category{
    min-height:1200px;
    width:100%;
  }
  .category-view{
    height:auto;
    overflow-y:scroll;
    margin-bottom: 100px;
  }
</style>
