<template>
		<div class="ApplicationForm">
			<div class="ApplicationForm_imgContent">
				<img src="../../assets/imgs/icon/banner_julebu_top.jpg" class="personal_backImg" />
			</div>
			<div class="container_wrap">
				<h1>课程报名</h1>
				<span>包括学院信息、福利以及各项标准等在线咨询</span>
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
	import './ApplicationForm.scss'
	export default{
			data(){
				return{
					tablist:[
						{name:'学院介绍', toHref:'collegeIsIntroduced',imgurl:require('../../assets/imgs/icon/icon_julebu_kecheng_jieshao.png'),content:'培训课程着重点以及课程介绍'},
						{name:'课程总揽', toHref:'courseOverview',imgurl:require('../../assets/imgs/icon/icon_julebu_kecheng_zonglan.png'),content:'学习时间以及课程时长等'},
						{name:'上课记录&课程查询', toHref:'classRecordsAndCourseEnquiries',imgurl:require('../../assets/imgs/icon/icon_julebu_kecheng_julu.png'),content:'大批优秀讲师为您授课'},
						{name:'缴费确认&记录查询', toHref:'paymentConfirmationAndRecordEnquiry',imgurl:require('../../assets/imgs/icon/icon_julebu_kecheng_jiaofei.png'),content:'特训服务介绍'},
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