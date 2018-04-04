<template>
		<div class="ClubLibrary">
			<div class="ClubLibrary_imgContent">
				<img src="../../assets/imgs/icon/banner_julebu_top.jpg" class="personal_backImg" />
			</div>
			<div class="container_wrap">
				<h1>俱乐部资讯库</h1>
				<span>包含俱乐部知识、咨询、实习职位信息以及调研</span>
				<ul class="clearfix">
					<li  v-for="(item,index) in tablist" @click="changeSelect(index,item.toHref)">
						<img :src='item.imgurl' >
						<span>{{item.name}}</span>
						<p>{{item.content}}</p>
					</li>
				</ul>
			</div>
		</div>
</template>
<script>
	import './ClubLibrary.scss'
	export default{
			data(){
				return{
					tablist:[
						{name:'俱乐部知识', toHref:'clubKnowledge',imgurl:require('../../assets/imgs/icon/icon_julebu_zixun_zhishi.png'),content:'培训课程着重点以及课程介绍'},
						{name:'俱乐部最新资讯', toHref:'latestNews',imgurl:require('../../assets/imgs/icon/icon_julebu_zixun_zixun.png'),content:'学习时间以及课程时长等'},
						{name:'实习职位信息', toHref:'internshipInformation',imgurl:require('../../assets/imgs/icon/icon_julebu_zixun_shixi.png'),content:'大批优秀讲师为您授课'},
						{name:'俱乐部调研', toHref:'clubResearch',imgurl:require('../../assets/imgs/icon/icon_julebu_zixun_diaoyan.png'),content:'特训服务介绍'},
					],
				}
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
			}
	}
</script>