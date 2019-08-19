<template>
  <div id="recommend">
    <app-head :title="'推荐'"></app-head>
    <keep-alive>
      <div class="recommend-container" ref="indexview">
        <booklist-male :malelist="malelist"></booklist-male>
        <booklist-female :femalelist="femalelist"></booklist-female>
        <indexNewbook :newslist="newslist"></indexNewbook>
      </div>
    </keep-alive>
  </div>
</template>

<script>
  import header from './footandhead/header'
  import booklistMale from './booklist/booklist-male'
  import booklistFemale from './booklist/booklist-female'
  import indexNewbook from "./booklist/index-newbook"
  import {getRankCategory,getRank} from "../api/api"
  import util from "../api/util"
  import {Indicator} from 'mint-ui'  /*加载提示框*/
  export default {
    components:{
      'app-head': header,
      booklistFemale,
      booklistMale,
      indexNewbook
    },
    data(){
      return{
        malelist:[],
        femalelist:[],
        newslist:[]
      }
    },
    created(){
      getRankCategory().then(res=>{
        console.log(res)
        let maleid = res.data.male[this.randomnum(res.data.male)]._id;
        let femaleid = res.data.female[this.randomnum(res.data.female)]._id;
        let newsid = res.data.epub[this.randomnum(res.data.epub)]._id;
        this.getbooklist(maleid,this.malelist);
        this.getbooklist(femaleid,this.femalelist);
        this.getbooklist(newsid,this.newslist);
      }).catch(err=>{
        console.log(err)
      })

    },
    methods:{
      randomnum(arr){
        return parseInt((Math.random()*(arr.length - 1)));
      },
      getbooklist(id,list){
        Indicator.open();
        getRank(id).then(res=>{
          console.log(res)
          let books=res.data.ranking.books.slice(0,10);
          books.forEach((book)=>{
            book.cover=util.staticPath+book.cover;  /*地址拼接？*/
            list.push(book);
          })
          Indicator.close()
        }).catch(err=>{
          console.log(err)
          Indicator.close()
        })
      }
    }
  }
</script>

<style>

  body a{
    margin:0;
    color: #555;
  }
  ul{
    display: block;
    list-style-type: none;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0;
  }
  .index-main-box{
    height: 91.6vh;
    overflow: hidden;
    padding-bottom: 25px;
  }
  .index-scroll-view{
    overflow-y: scroll;
    height:97.5%;

  }
</style>
