<template>
		<div class="clubKnowledge">
			<div class="clubKnowledge_imgContent">
				<div class="personal_backImg"></div>
			</div>
			<div class="container_wrap">
				<h1>俱乐部知识库</h1>
				<ul>
					<li  v-for="(item,index) in tablist" @click="changeSelect(index,item.toHref)" class="clearfix">
						<img :src='item.imgurl' class="fl"/>
						<div class="fl">
							<h2>{{item.name}}</h2>
							<p>{{item.content}}</p>
							<span>{{item.time}}</span>
						</div>
					</li>
				</ul>
				<div class="Paging">
					<pagination :cur="data.cur" :all="data.all" @click="listen(data.cur)"></pagination>
				</div>
			</div>
		</div>
</template>
<script>
	import pagination from '../pagination/pagination.vue';
	import Suspended from '../suspended/suspended.vue';
	export default{
			data(){
				return{
					data: {
		                cur: 1,
		                all: 100,
		                msg: ''
		            },
					tablist:[
						{name:'人工智能课程', toHref:'clubKnowledge',imgurl:require('../../assets/imgs/listImg/julebu.png'),content:'在漫长的人类历史中，几乎所有的重大科技进步都是发端于战场。在科技尚不足以毁掉世界的时代，人类再从战场归来后还能一边舔舐伤口，一边享受从战争中诞生的科技所带来的生活便利和技术进步。',time:'2018-03-22 12:34:56'},
						{name:'大数据开发课程', toHref:'latestNews',imgurl:require('../../assets/imgs/listImg/julebu.png'),content:'在漫长的人类历史中，几乎所有的重大科技进步都是发端于战场。在科技尚不足以毁掉世界的时代，人类再从战场归来后还能一边舔舐伤口，一边享受从战争中诞生的科技所带来的生活便利和技术进步。',time:'2018-03-22 12:34:56'},
						{name:'大数据开发课程', toHref:'internshipInformation',imgurl:require('../../assets/imgs/listImg/julebu.png'),content:'在漫长的人类历史中，几乎所有的重大科技进步都是发端于战场。在科技尚不足以毁掉世界的时代，人类再从战场归来后还能一边舔舐伤口，一边享受从战争中诞生的科技所带来的生活便利和技术进步。',time:'2018-03-22 12:34:56'},
						{name:'人工智能课程', toHref:'clubResearch',imgurl:require('../../assets/imgs/listImg/julebu.png'),content:'在漫长的人类历史中，几乎所有的重大科技进步都是发端于战场。在科技尚不足以毁掉世界的时代，人类再从战场归来后还能一边舔舐伤口，一边享受从战争中诞生的科技所带来的生活便利和技术进步。',time:'2018-03-22 12:34:56'},
					],
				}
				
			},
			components: {
				pagination,
				Suspended
			},
			methods:{
				changeSelect(index,name){
					/*this.$store.commit('CHANGETAB',index);*/
					this.tabIndex = index;
					window.sessionStorage.setItem('userInfo', JSON.stringify(
				            {
				               'tabIndex': 2,
				            }
			          ));
					this.$router.push({path: name});
				},
				listen(data) {
	                    data.msg = '当前页码：' + data
	            }
			}
	}
</script>
<style lang="scss" scoped>
		.clubKnowledge{
			.Paging{
				padding:30px 0 80px; 
			}
			margin-top:80px;
			.personal_backImg{
				height:300px;
				background:url('../../assets/imgs/icon/banner_julebu_top.jpg') no-repeat;
				background-position:center;
				background-size:cover;
			}
			h1{
				font-size:18px;
				text-align:center;
				color:#333;
				font-weight:bold;
				padding:40px 0 30px;
				border-bottom:1px solid #ccc;
			}
			ul{
				li{
					img{
						width:240px;
						height:160px;
						border-radius:6px;margin:20px 20px 20px 0;
					}
					div{
						height:200px;
						position:relative;
						width:940px;
						padding: 20px 0;
						h2{
							font-size:22px;
							color: #333;
							font-weight:bold;
						}
						p{
							padding-top:16px;
							line-height:24px;
							font-size:14px;
							color:#c3c3c3;
						}
						span{
							font-size:14px;
							color:#c3c3c3;
							position:absolute;
							bottom:18px;
						}
					}
					border-bottom:1px solid #ccc;
				}
					
			}
			
		}
</style>