<template>
		<div class="book-about">
			<h3>相关推荐</h3>
			<ul class="book-about-box">
				<template v-for="(book,key) in recommend">
					<li v-if="key<3" :key="key">
						<router-link :to="'/bookinfo/'+book._id">
						<img v-lazy="book.cover">
						<p>{{book.title}}</p>
						</router-link>
					</li>
				</template>
			</ul>
		</div>
</template>
<script type="text/javascript">
import { Indicator } from 'mint-ui'
import {getRecommend,getBookSources} from '../../api/api'
import util from '../../api/util'

	export default{
		data(){
			return {
				recommend:[]
			}
		},
		created(){
			this.getrecommend()
		},
		methods:{
			getrecommend(){
				Indicator.open()
				this.recommend=[];
				getRecommend(this.$route.params.bookid).then(res=>{
					let books=res.data.books;
					books.forEach((book)=>{
						book.cover= util.staticPath+book.cover;
						this.recommend.push(book);
					})
					Indicator.close();
				})
			}
		},
		watch:{
			'$route.params':'getrecommend'
		}
	}
</script>
<style type="text/css">
	.book-about{
		background-color: #F2F6FC;
	}
	.book-about>h3{
		padding:5px 10px;
		font-weight: 400;
		font-size: 18px;
		border-bottom: 1px solid #ddd;
	}
	.book-about-box{
		font-size: 0;
		padding:10px 50px 20px;
	}
	.book-about-box>li{
		display: inline-block;
		width:33.3%;
	}
	.book-about-box>li a{
		display: inline-block;
		color: #555;
		font-size:26px;
		height: 237px;
		width: 172px;
		border-radius: 4px;
		box-shadow: 0 5px 10px #555;
	}
	.book-about-box>li p{
		text-align: left;
		line-height: 2.4;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
    margin: 5px 0;
	}
	.book-about-box>li:nth-child(3n+1){
		text-align:left;
	}
	.book-about-box>li:nth-child(3n+2){
		text-align:center;
	}
	.book-about-box>li:nth-child(3n+3){
		text-align:right;
	}
	.book-about-box>li img{
		height: 100%;
		width: 100%;
	}
</style>
