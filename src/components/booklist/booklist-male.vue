<template>
  <div class="index-male">
    <div class="index-male-title">
      <h3>男生推荐</h3>
    </div>
    <ul class="index-male-rank">
      <li class="fix" v-for="(book,key) in malelist" :key="key">
        <router-link :to="'/bookinfo/'+book._id">
          <div class="book-cover-box">
            <img class="book-cover" v-lazy="book.cover" :title="book.title">
            <div class="book-number">{{key+1}}</div>
          </div>
          <div class="book-info">
            <p class="book-title">
              {{book.title}}
            </p>
            <!--<p class="book-author">{{book.author}}</p>-->
            <p class="book-content">
              {{book.shortIntro}}
            </p>
            <ul class="book-tags fix">
              <li>{{book.author}}</li>
              <li style="float: right">{{book.majorCate}}</li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { lazyload } from 'mint-ui' /*图片懒加载*/

export default{
  props:['malelist']
}
</script>
<style>
  .index-male-title{
    padding: 10px 14px;
    border-bottom: 1px solid #DCDFE6;
  }
  .index-male-title>h3{
    font-size: 32px;
  }
  .index-male-rank{
    border-bottom: 1px solid #DCDFE6;
    margin-bottom: 10px;
  }
  .index-male-rank>li{
    padding: 10px 14px;
  }
  .fix{
    margin-bottom: 10px;
  }
  .title>h3{
    font-size: 32px;
    font-weight: normal;
  }
  .book-cover-box{
    background-color:#606266;
    border-radius: 4px;
    height: 226px;
    width: 172px;
    float: left;
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 10px #555;
  }
  .book-cover{
    width: inherit;
    height: inherit;
  }
  .book-number{
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    background-color:#E6A23C;
    color: #F2F6FC;
    width: 18px;
    height:18px;
    padding:1px;
    font-size:12px;
    line-height: 14px;
  }
  .book-info{
    margin-left: 180px;
    padding-bottom:20px;
    border-bottom: 1px solid #ccc;
  }
  .book-title{
    font-size:32px;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space: nowrap;
    color:#555;
    margin: 5px 0;
  }
  .book-author{
    font-size: 14px;
    margin-bottom: 2px;
    color: rgba(0, 0, 0, 0.4);
  }
  .book-content{
    color: rgba(0, 0, 0, 0.4);
    font-size:26px;
    text-overflow: ellipsis;
    overflow:hidden;
    margin-bottom: 5px;
    display: -webkit-box;
    height: 120px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

  }
  .book-tags{
    overflow:hidden;
  }
  .book-tags>li{
    float: left;
    padding: 2px 8px;
    background-color: #67C23A;
    border-radius: 4px;
    color: #F2F6FC;
    line-height: 1.3;
    font-size: 22px;
  }
  .book-tags>li+li{
    margin-left: 10px;
  }
  .book-tags>li:nth-child(3n+1){
    background-color: #53ac7d;
  }
  .book-tags>li:last-child{
    background-color: #E6A23C;
  }
</style>
