<template>
	<div class="kpin_detail container_wrap">
		<div class="kpin_detail_left">
			<div class="message_box">
				<div>
					<button class="deliver_resume">投递简历</button>
					<p class="title">知识图谱/NLP算法研究员</p>
					<p class="second_title">京东上海算法研究院</p>
				</div>
				<div class="label">
					<span>北京&上海</span>
					<span>20-30K/月</span>
					<span>本科</span>
					<span>3-5年</span>
					<span>社招</span>
				</div>
				<div class="publish_message">
					<span>发布于：2018-03-15</span>
					<span>截止于：2018-04-15</span>
					<span>有效期：30天</span>
				</div>
			</div>
			
			<div class="post_detail">
				<p class="require">责任描述：</p>
				<p>1、3年以上Web前端开发经验，精通HTML5、CSS3、javascript、XHTML等技术、XHTML等技术、XHTML等技术</p>
				<p>2、良好的代码习惯，对表现与数据分离，html 语义化等有深刻理解，熟悉前端 MVC 框架</p>
				<p>3、熟悉多种浏览器的兼容性，对前端性能优化有一定经验</p>
				
				<p class="require">岗位要求：</p>
				<p>1、3年以上Web前端开发经验，精通HTML5、CSS3、javascript、XHTML等技术、XHTML等技术、XHTML等技术</p>
				<p>2、良好的代码习惯，对表现与数据分离，html 语义化等有深刻理解，熟悉前端 MVC 框架</p>
				<p>3、熟悉多种浏览器的兼容性，对前端性能优化有一定经验</p>
				<p>4、3年以上Web前端开发经验，精通HTML5、CSS3、javascript、XHTML等技术、XHTML等技术、XHTML等技术</p>
				<p>5、良好的代码习惯，对表现与数据分离，html 语义化等有深刻理解，熟悉前端 MVC 框架</p>
				<p>6、熟悉多种浏览器的兼容性，对前端性能优化有一定经验</p>
			</div>
		</div>
		
		<div class="kpin_detail_right">
			<div class="person_message">
				<img src="../../assets/imgs/icon/set_toux.png" class="toux_img" />
				<p class="name">吴承恩</p>
				<p class="source">京东上海算法研究院</p>
				<div>
					<img src="../../assets/imgs/icon/qrcode.png" class="qrcode" />
					<p class="focus">关注OneOne.ai社区</p>
					<p class="focus">获取更多AI高端职业</p>
				</div>
			</div>
		</div>
		
		<Suspended></Suspended>
	</div>
</template>

<script>
	import Suspended from '../suspended/suspended.vue';
	export default{
		data(){
			return{
			}
		},
		mounted() {
			this.alert();
		},
      	components:{
      		Suspended
      	},
      	methods:{
      		alert(){
      			console.log(this.$route.params.id)
      		}
      	}
	}
</script>

<style lang="scss" scoped>
	.kpin_detail{
		margin-top: 80px;
		/*padding: 1.5rem 0 4rem;*/
	}
	.kpin_detail_left{
		width: 38rem;
		min-height: 20rem;
		float: left;
		padding: 1.5rem 0 4rem;
	}
	
	.kpin_detail_right{
		width: 22rem;
		min-height: 20rem;
		float: left;
		padding: 1.5rem 0 4rem;
		text-align: center;
	}
	
	.message_box{
		width: 38rem;
		padding: 1.5rem;
		font-size: 0.8rem;
		border: 1px solid #DDDDDD;
		border-radius: 0.3rem;
		box-shadow: 0px 6px 9px #F4F4F4;
		.title{
			font-size: 1.1rem;
			color: #5A89FF;
			font-weight: bold;
		}
		.second_title{
			font-size: 1rem;
			color: #333333;
			margin: 1rem 0;	
		}
		
		.label{
			margin: 1rem 0;
		}
		.publish_message{
			margin-top: 0.5rem;
		}
	}	
	
	.message_box .label span{
		display: inline-block;
		/*margin: 1rem 0;*/
		padding-right: 2.5rem;
		font-size: 0.8rem;
	}
	.message_box .publish_message span{
		display: inline-block;
		/*margin: 1rem 0;*/
		padding-right: 2.5rem;
		font-size: 0.8rem;
	}
	.deliver_resume{
		position: relative;
		float: right;
		font-size: 0.8rem;
		padding: 0.3rem 0.5rem;
		background: #E23B3A;
		color: #FFFFFF;
		border:0 ;
		border-radius: 0.3rem;
		cursor: pointer;
		outline: none;
	}
	.post_detail{
		width: 100%;
		font-size: 0.8rem;
		color: #333333;
		.require{
			font-size: 0.9rem;
			margin: 2rem 0 1.5rem;
		}
	}
	
	.person_message{
		color: #333333;
		.toux_img{
			width: 6rem;
			height: 6rem;
			border-radius: 3rem;
			margin-bottom: 1rem;
		}
		.name{
			font-size: 0.9rem;
			margin-bottom: 1rem;
		}
		.source{
			font-size: 1rem;
			margin-bottom: 1rem;
		}
		.qrcode{
			width: 5rem;
			height: 5rem;
			margin-top: 5rem;
			margin-bottom: 1rem;
		}
		.focus{
			font-size: 0.7rem;
			color: #333333;
		}
	}
</style>