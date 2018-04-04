<template>
		<div class="students">
			<div class="students_imgContent">
				<img src="../../assets/imgs/icon/banner_julebu_top.jpg" class="personal_backImg" />
			</div>
			<div class="container_wrap">
				<h1>学员服务</h1>
				<span>包括学员信息、福利以及各项标准等在线咨询</span>
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
	import './students.scss'
	export default{
			data(){
				return{
					tablist:[
						{name:'学员服务信息', toHref:'Studentserviceinformation',imgurl:require('../../assets/imgs/icon/icon_julebu_xueyuan_xueyuan.png'),content:'培训服务、实习服务、工作推荐等'},
						{name:'学员福利', toHref:'studentwelfare',imgurl:require('../../assets/imgs/icon/icon_julebu_xueyuan_fuli.png'),content:'一阶二阶以及特供学员福利'},
						{name:'学员标准', toHref:'studentstandard',imgurl:require('../../assets/imgs/icon/icon_julebu_xueyuan_biaozhun.png'),content:'一阶二阶以及特培学员标准及申请'}
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