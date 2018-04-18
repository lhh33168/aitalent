<template>
	<div class="messageContent clearfix container_wrap">
		<div class="message_leftCont">
			<!--banner滚动图 begin-->
			<div class="swiper-container">
				  <div class="swiper-wrapper">
					    <div class="swiper-slide">
					    	<img class="swiper_bannerImg" src="../../assets/imgs/icon/banner.png"/>
					    	<div class="swiper_shade">
					    		<p>阿里8.6亿美元再押ofo,创始人戴维如何打好下一场硬战?</p>
					    	</div>
					    </div>
					    <div class="swiper-slide">
					    	<img class="swiper_bannerImg" src="../../assets/imgs/icon/banner.png" />
					    	<div class="swiper_shade">
					    		<p>阿里8.6亿美元再押ofo,创始人戴维如何打好下一场硬战?</p>
					    	</div>
					    </div>
					    <div class="swiper-slide">
					    	<img class="swiper_bannerImg" src="../../assets/imgs/icon/banner.png" />
					    </div>
					    <div class="swiper-slide">
					    	<img class="swiper_bannerImg" src="../../assets/imgs/icon/banner.png" />
					    </div>
				  </div>
			  
			  <div>
				  <div class="swiper-button-prev swiper-button-white"></div>
	    		  <div class="swiper-button-next swiper-button-white"></div>
    		  </div>
			  <div class="swiper-pagination"></div>
		</div>
			<!--banner滚动图 end-->
			
			<!--tabIcon  begin-->
			<div class="iconContent">
				<div class="tabIcon_main" v-for="(item,index) in wordTab_list">
					<div class="tabIcon_shadow">
						<p>阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里阿里?</p>
					</div>
					<router-link :to="{name:'artDetail',params:{id:index}}">
						<img class="tabIcon" :src="a"/>
					</router-link>
				</div>
			</div>
			<!--tabIcon  end-->
			
			<div class="messageMain">
				<p class="word_tab">
					<span v-for="(item,index) in wordTab_list" :class="{active:wordTab_type==index}" @click="changeTab(index)">
						{{item.name}}
					</span>
					<!--<span>本周热点</span>
					<span>阅读精选</span>-->
				</p>
				
				<div class="article_detail">
					<img src="../../assets/imgs/icon/articleImg.png">
					<h3>霍金走了,办公室墙上的一句话昭示了他执着的灵魂</h3>
					<p>史蒂芬·威廉·霍金（Stephen William Hawking），1942年1月8日出生于英国牛津，英国剑桥大学英国剑桥大学英国剑桥大学</p>
					<p class="mt30">
						<span>2018-03-14 12:33:33</span>
						<span class="article_eye">
							<img src="../../assets/imgs/icon/icon_eyes.png" />3876
						</span>
					</p>
				</div>
				
				<div class="article_detail">
					<img src="../../assets/imgs/icon/articleImg.png">
					<h3>霍金走了,办公室墙上的一句话昭示了他执着的灵魂</h3>
					<p>史蒂芬·威廉·霍金（Stephen William Hawking），1942年1月8日出生于英国牛津，英国剑桥大学英国剑桥大学英国剑桥大学英国剑桥大学</p>
					<p class="mt30">
						<span>2018-03-14 12:33:33</span>
						<span class="article_eye">
							<img src="../../assets/imgs/icon/icon_eyes.png" />3876
						</span>
					</p>
				</div>
				<div class="article_detail">
					<img src="../../assets/imgs/icon/articleImg.png">
					<h3>霍金走了,办公室墙上的一句话昭示了他执着的灵魂</h3>
					<p>史蒂芬·威廉·霍金（Stephen William Hawking），1942年1月8日出生于英国牛津，英国剑桥大学英国剑桥大学英国剑桥大学英国剑桥大学</p>
					<p class="mt30">
						<span>2018-03-14 12:33:33</span>
						<span class="article_eye">
							<img src="../../assets/imgs/icon/icon_eyes.png" />3876
						</span>
					</p>
				</div>
				<div class="article_detail">
					<img src="../../assets/imgs/icon/articleImg.png">
					<h3>霍金走了,办公室墙上的一句话昭示了他执着的灵魂</h3>
					<p>史蒂芬·威廉·霍金（Stephen William Hawking），1942年1月8日出生于英国牛津，英国剑桥大学英国剑桥大学英国剑桥大学英国剑桥大学</p>
					<p class="mt30">
						<span>2018-03-14 12:33:33</span>
						<span class="article_eye">
							<img src="../../assets/imgs/icon/icon_eyes.png" />3876
						</span>
					</p>
				</div>
				<div class="article_detail">
					<img src="../../assets/imgs/icon/articleImg.png">
					<h3>霍金走了,办公室墙上的一句话昭示了他执着的灵魂</h3>
					<p>史蒂芬·威廉·霍金（Stephen William Hawking），1942年1月8日出生于英国牛津，英国剑桥大学英国剑桥大学英国剑桥大学英国剑桥大学</p>
					<p class="mt30">
						<span>2018-03-14 12:33:33</span>
						<span class="article_eye">
							<img src="../../assets/imgs/icon/icon_eyes.png" />3876
						</span>
					</p>
				</div>
			</div>
		</div>	
		
		
		
		<div class="message_rightCont">
			<div class="hot_post">
				<h3>热门职位</h3>
				<div class="post_state">
					<p>
						<span>人工智能专家</span>
						<span class="alignRight">360管家</span>
					</p>
					<p>
						<span>机器视觉算法专家</span>
						<span class="alignRight">腾讯</span>
					</p>
					<p>
						<span>人工智能算法研究</span>
						<span class="alignRight">中科院</span>
					</p>
					<p>
						<span>人工智能专家</span>
						<span class="alignRight">360管家</span>
					</p>
					<p>
						<span>机器视觉算法专家</span>
						<span class="alignRight">腾讯</span>
					</p>
					<p>
						<span>人工智能算法研究</span>
						<span class="alignRight">中科院</span>
					</p>
				</div>
			</div>
			
			<div class="hot_article">
				<h3>热门文章</h3>
				<div class="hot_main">
					<p>
						<img class="cover_img" src="../../assets/imgs/icon/icon_top1.png" />
						<img class="hot_img" src="../../assets/imgs/icon/hot_article.png">
					</p>
					<p>
						<img class="cover_img" src="../../assets/imgs/icon/icon_top2.png" />
						<img class="hot_img" src="../../assets/imgs/icon/hot_article.png">
					</p>
				</div>
				<div class="hot_detail">
					<img src="../../assets/imgs/icon/hot_detailImg.png">
					<h3>拼多多会终结淘宝和京东还是会昙花一现？</h3>
					<p>2018-03-14</p>
				</div>
				<div class="hot_detail">
					<img src="../../assets/imgs/icon/hot_detailImg.png">
					<h3>拼多多会终结淘宝和京东还是会昙花一现？</h3>
					<p>2018-03-14</p>
				</div>
				<div class="hot_detail">
					<img src="../../assets/imgs/icon/hot_detailImg.png">
					<h3>拼多多会终结淘宝和京东还是会昙花一现？</h3>
					<p>2018-03-14</p>
				</div>
				<div class="hot_detail">
					<img src="../../assets/imgs/icon/hot_detailImg.png">
					<h3>拼多多会终结淘宝和京东还是会昙花一现？</h3>
					<p>2018-03-14</p>
				</div>
				<div class="hot_detail">
					<img src="../../assets/imgs/icon/hot_detailImg.png">
					<h3>拼多多会终结淘宝和京东还是会昙花一现？</h3>
					<p>2018-03-14</p>
				</div>
				<div class="hot_detail">
					<img src="../../assets/imgs/icon/hot_detailImg.png">
					<h3>拼多多会终结淘宝和京东还是会昙花一现？</h3>
					<p>2018-03-14</p>
				</div>
			</div>
		</div>
		
		<Suspended></Suspended>
	</div>
</template>

<script>
	import fliterUrl from '../../utils/baseUrl'
	import { Swiper, swiperSlide } from 'vue-awesome-swiper';
    import Suspended from '../../components/suspended/suspended.vue';
	export default{
		data(){
			return{
				wordTab_list:[
					{name:'每日头条'},
					{name:'本周热点'},
					{name:'阅读精选'}
				],
				wordTab_type:0,
				a:''
			}
		},
		mounted() {
            this.mySwiper();
            this.a = fliterUrl.fliterUrl('img/tabIcon.063e0d5.png')
            console.log(fliterUrl.fliterUrl('img/tabIcon.063e0d5.png'))
      	},
      	components:{
      		Suspended
      	},
		methods:{
			mySwiper(){
				var mySwiper = new Swiper('.swiper-container', {
				autoplay:{
					stopLastSlide:true,
					delay: 3000,
					loop:true
				},
				pagination:{
					el:'.swiper-pagination',
					type:'bullets',
					clickable:true
				},
				navigation:{
					 nextEl: '.swiper-button-next',
    				prevEl: '.swiper-button-prev',
				}
			});
			for(var i=0;i<mySwiper.pagination.bullets.length;i++){
			  mySwiper.pagination.bullets[i].index=i
			  mySwiper.pagination.bullets[i].onmouseover=function(){
			    mySwiper.slideTo(this.index);
			  };
			}
		 },
		 changeTab(index){
		 	this.wordTab_type = index;
		 }
		}
	}
</script>

<style lang="scss" scoped>
	.messageContent{
		position: relative;
		padding: 0.5rem 0;
    	background: #FFFFFF;
    	margin-top:80px;
	}
	.message_leftCont{
		width: 38rem;
		min-height: 80rem;
		background: #FFFFFF;
		float: left;
	}
		
	.swiper-container{
		width: 38rem;
		height: 14rem;
	}
	
	.swiper-slide{
		width: 10rem;
		height: 10rem;
	}
	.swiper_bannerImg{
		width: 38rem;
		height: 14rem;
		border-radius: 6px;
	}
	.swiper_shade{
		position: absolute;
		bottom: -4rem;
		width: 38rem;
		height: 3rem;
		background: rgba(0,0,0,0.5);
		font-size: 0.9rem;
		color: #FFFFFF;
		text-align: center;
		padding-top: 0.5rem;
	}
	.iconContent{
		margin: 1rem 0;
		.tabIcon{
			border-radius: 0.3rem;
			width: 11.8rem;
			height: 8rem;
		}
		.tabIcon_main{
			display: inline-block;
			width: 11.8rem;
			height: 8rem;
			margin-right:1rem;
		}
		.tabIcon_main:last-child{
			margin-right: 0 !important;
		}
		.tabIcon_shadow{
			position: absolute;
			width: 11.8rem;
			height: 2.5rem;
			background: rgba(0,0,0,0.5);
			font-size: 0.8rem;
			color: #FFFFFF;
			padding: 0.2rem;
			margin-top: 5.5rem;
			border-radius: 0.3rem;
		}
	}
	.LastIcon{
		margin-right:0 !important;
	}
	
	.messageMain{
		.word_tab{
			font-size: 0.9rem;
			text-align: right;
			color: #C3C3C3;
			height:1.7rem;
			span{
				position: relative;
				width: 5.5rem;
				padding:0.5rem 1rem;
				cursor: pointer;
			}
			.active{
				cursor: pointer;
				background: #E23B3A;
				color: #FFFFFF;
				border-radius: 0.3rem 0.3rem 0 0;
			}
		}
	}
	
	.article_detail{
		padding: 1rem 0;
		border-top: 1px solid #DDDDDD;
		height: 11rem;
		img{
			float: left;
			width: 14rem;
			border-radius: 0.3rem;
			margin-right: 1rem;
		}
		h3{
			font-size: 1.1rem;
			color: #333333;
			font-weight: bold;
			margin-bottom: 1rem;
			margin-top: 0 !important;
			
		}
		p{
			float: left;
			width: 23rem;
			height: 2.2rem;
			font-size: 0.8rem;
			color: #C3C3C3;
			padding-bottom: 2.1rem;
			text-overflow: -o-ellipsis-lastline;  
			overflow: hidden;  
			text-overflow: ellipsis;  
			display: -webkit-box;  
			-webkit-line-clamp: 2;  
			-webkit-box-orient: vertical;
		}
		.article_eye{
			float: right;
			img{
				width: 1.1rem;
				margin-right: 0;
				margin: 0 0.3rem;
				padding-top: 0.2rem;
				
			}
		}
	}
	
	/*右边内容 begin*/
	.message_rightCont{
		width: 22rem;
		min-height: 50rem;
		background: #FFFFFF;
		float: left;
		padding-left:3rem ;
		
	}
		
	.hot_post{
		h3{
			text-align: center;
			font-size: 1rem;
			color: #333333;
			font-weight: bold;
			margin: 0.5rem 0 1rem;
		}
		p{
			height: 1.25rem;
			font-size: 0.8rem;
			color: #656565;
			margin: 0.5rem 0;
		}
		.alignRight{
			float: right;
		}
		
	}
	.post_state{
		margin: 0.5rem 0;
		border-top: 1px solid #DDDDDD;
		border-bottom: 1px solid #DDDDDD;
	}
	
	
	.hot_article{
		h3{
			text-align: center;
			font-size: 1rem;
			color: #333333;
			font-weight: bold;
			margin: 2rem 0 1rem;
		}
		.hot_main{
			border-top: 1px solid #DDDDDD;
			padding-top: 0.5rem;
		}
		.hot_img{
			width: 19rem;
			border-radius: 0.3rem;
			margin: 0.5rem 0;
		}
		.cover_img{
			position: absolute;
			margin-top: 0.5rem;	
		}
		
		.hot_detail{
			margin: 0.5rem 0;
			height: 4rem;
			img{
				float: left;
				width: 6rem;
				border-radius: 0.3rem;
				margin-right: 0.5rem;
			}
			h3{
				text-align: left;
				font-size: 0.8rem;
				color: #333333;
				margin-bottom: 1rem;
				margin-top: 0 !important;
			}
			p{
				font-size: 0.8rem;
				color: #C3C3C3;
			}
		}	
	}
	/*右边内容 begin*/
	
	.fixed_bottom{
		position: fixed;
		bottom: 12rem;
		right: 10rem;	
		z-index: 99;
		img{
			width: 3rem;
		}	
	}
	
	.subscript{
		color: black;
		height: 3px;
		font-weight: bold;
	}
	
	
	.swiper-button-prev{
		left: 1.5rem !important;
		background: url(../../assets/imgs/icon/icon_arr_l.png) no-repeat !important;
		background-size:1rem 1.8rem !important;
	}
	.swiper-button-next{
		right: 1.5rem !important;
		background: url(../../assets/imgs/icon/icon_arr_r.png) no-repeat !important;
		background-size:1rem 1.8rem !important;
	}
	
</style>