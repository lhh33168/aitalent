<template>
		<div class="internshipInformation">
			<div class="internshipInformation_imgContent">
				<img src="../../assets/imgs/icon/banner_julebu_top.jpg" class="personal_backImg" />
			</div>
			<div class="container_wrap">
				<h1>实习职位</h1>
				<ul>
					<li v-for="(item,index) in tablist" @click="changeSelect(index,item.toHref)" class="clearfix">
						<div class="fl internshipInformation_left">
							<h2>
								<span>{{item.name}}</span>
								<span>实习</span>
								<i>{{item.time}}</i>
							</h2>
							<p>
								<span>{{item.Monthly}}</span>
								<span>北京&上海</span>
							</p>
							<span class="internshipInformation_left_bottom">本科/无</span>
						</div>
						<div class="fr internshipInformation_right">
							<p>姜文<span>NLP科学家</span></h2>
							<h3>苏宁易购</h3>
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
						{name:'人工智能课程', toHref:'clubKnowledge',imgurl:require('../../assets/imgs/listImg/julebu.png'),content:'在漫长的人类历史中，几乎所有的重大科技进步都是发端于战场。在科技尚不足以毁掉世界的时代，人类再从战场归来后还能一边舔舐伤口，一边享受从战争中诞生的科技所带来的生活便利和技术进步。',time:'2018-03-22 12:34:56',Monthly:'20-30K/月'},
						{name:'大数据开发课程', toHref:'latestNews',imgurl:require('../../assets/imgs/listImg/julebu.png'),content:'在漫长的人类历史中，几乎所有的重大科技进步都是发端于战场。在科技尚不足以毁掉世界的时代，人类再从战场归来后还能一边舔舐伤口，一边享受从战争中诞生的科技所带来的生活便利和技术进步。',time:'2018-03-22 12:34:56',Monthly:'20-30K/月'},
						{name:'大数据开发课程', toHref:'internshipInformation',imgurl:require('../../assets/imgs/listImg/julebu.png'),content:'在漫长的人类历史中，几乎所有的重大科技进步都是发端于战场。在科技尚不足以毁掉世界的时代，人类再从战场归来后还能一边舔舐伤口，一边享受从战争中诞生的科技所带来的生活便利和技术进步。',time:'2018-03-22 12:34:56',Monthly:'20-30K/月'},
						{name:'人工智能课程', toHref:'clubResearch',imgurl:require('../../assets/imgs/listImg/julebu.png'),content:'在漫长的人类历史中，几乎所有的重大科技进步都是发端于战场。在科技尚不足以毁掉世界的时代，人类再从战场归来后还能一边舔舐伤口，一边享受从战争中诞生的科技所带来的生活便利和技术进步。',time:'2018-03-22 12:34:56',Monthly:'20-30K/月'},
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
		.internshipInformation{
			.Paging{
				padding:30px 0 50px; 
			}
			h1{
				font-size:18px;
				text-align:center;
				color:#333;
				font-weight:bold;
				padding:40px 0 10px;
			}
			ul{
				li{
					margin-top:20px;
					height:140px;
					width:100%;
					border:1px solid #ddd;
					border-radius:6px;
					box-shadow:0px 6px  9px #f4f4f4;
					.internshipInformation_left{
						padding-left: 50px;
						h2{
							padding-top:16px;
							span{
								font-size:16px;
								color:#5a89ff;
							}
							i{
								color:#c3c3c3;
								font-size:16px;
								padding-left:40px;
							}
						}
						p{
							padding-top:16px;
							span{
								font-size:16px;
								padding-right:40px;
							}
						}
						.internshipInformation_left_bottom{
							display:inline-block;
							padding-top:16px;
							font-size:16px;
						}

					}
					.internshipInformation_right{
						font-size:16px;
						width:320px;
						color:#333;
						p{
							padding-top:40px;
							span{
								color:#c3c3c3;
								padding-left:10px;
							}
						}
						h3{
							font-size:20px;
							padding-top:16px;
						}

					}
				}
					
			}
			
		}
</style>