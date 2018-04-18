<template>
		<div class="AIcollege">
			<div class="AIcollege_imgContent">
				<div class="personal_backImg"></div>
			</div>
			<div class="container_wrap">
				<h1>AI学院</h1>
				<span>包含培训课程信息、进阶与时间、讲师介绍以及特训服务等</span>
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
	import './AIcollege.scss'
	export default{
		data(){
				return{
					tablist:[
						{name:'培训课程', toHref:'Trainingcourses',imgurl:require('../../assets/imgs/icon/icon_julebu_peixun.png'),content:'培训课程着重点以及课程介绍'},
						{name:'进阶与时间', toHref:'Progressionandtime',imgurl:require('../../assets/imgs/icon/icon_julebu_jinjie.png'),content:'学习时间以及课程时长等'},
						{name:'讲师介绍', toHref:'TeacherIntroduction',imgurl:require('../../assets/imgs/icon/icon_julebu_jiangshi.png'),content:'大批优秀讲师为您授课'},
						{name:'特训服务', toHref:'Speciallytrainedservice',imgurl:require('../../assets/imgs/icon/icon_julebu_texun.png'),content:'特训服务介绍'},
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