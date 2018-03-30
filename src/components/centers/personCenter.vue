<template>
	<div class="personal_center">
		<div class="person_imgContent">
			<img src="../../assets/imgs/icon/set_banner.png" class="personal_backImg" />
		</div>
		<div class="personal_tabs">
			<div class="tabs_content">
				<li class="tabs" v-for="(item,index) in personTabList" :class="{active:index == personTabIndex}" @click="changeSelect(index)">
					{{item.name}}
				</li>
			</div>
			
			<div v-show="personTabIndex == 0" class="data_content">
				<div class="data_main">
					<img class="toux" src="../../assets/imgs/icon/set_toux.png" />
					<img class="set_icon" src="../../assets/imgs/icon/icon_my_set.png" @click="set_header" />
					<h3 class="biaoT">吴承恩</h3>
				</div>
				<div class="data_state">
					<p>
						<span>昵称:</span>
						<input type="text" v-model="person.name" class="amendAble" value="吴承恩" :readonly="amendNameType" />
						<span v-if="amendNameType == true" class="amend" @click="amendName">修改</span>
						<span v-else class="amend" @click="amendName">确定</span>
					</p>
					<p>
						<span>账号:</span>
						<input type="text" class="amendAble" value="81483304@qq.com" readonly="readonly" />
					</p>
					<p>
						<span>公司:</span>
						<input type="text" v-model="person.company" class="amendAble" value="京东北京研究所" :readonly="amendCompanyType" />
						<span v-if="amendCompanyType == true" class="amend" @click="amendCompany">修改</span>
						<span v-else class="amend" @click="amendCompany">确定</span>
					</p>
					<p>
						<span>性别:</span>
						<input type="text" class="amendAble" value="男" readonly="readonly" />
					</p>
				</div>
				
			</div>
			
			<div v-show="personTabIndex == 1" class="message_content">
				<div class="message_main">
					<img src="../../assets/imgs/icon/icon_my_del.png" class="message_delete" />
					<p class="title">系统通知</p>
					<p class="state">系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知。</p>
				</div>
				<div class="message_main">
					<img src="../../assets/imgs/icon/icon_my_del.png" class="message_delete" />
					<p class="title">系统通知</p>
					<p class="state">系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知。</p>
				</div>
				<div class="message_main">
					<img src="../../assets/imgs/icon/icon_my_del.png" class="message_delete" />
					<p class="title">系统通知</p>
					<p class="state">系统通知系统通知系统通知系统通知系统知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知系统通知。</p>
				</div>
			</div>
			
			<div v-show="personTabIndex == 2" class="uploading_main">
				<div>个人简历.docx</div>
				<p class="delete"><img src="../../assets/imgs/icon/icon_my_del.png"></p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				personTabList:[
					{name:'个人资料', toHref:'message'},
					{name:'个人消息', toHref:'home'},
					{name:'个人附件', toHref:'message'}
				],
				person:{
					name:'吴承恩',
					company:'京东北京研究所'
				},
				personTabIndex:0,
				amendNameType:true,
				amendCompanyType:true
			}
		},
		methods:{
			changeSelect(index){
				this.personTabIndex = index;
			},
			set_header(){
				alert(1);
			},
			amendName(){
				this.amendNameType = !this.amendNameType;
				if(this.amendNameType){
					$.post('/',this.person,function(data){
						
					})
				}
			},
			amendCompany(){
				this.amendCompanyType = !this.amendCompanyType;
				if(this.amendCompanyType){
					$.post('/',this.person,function(data){
						
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.personal_center{
		width: 100%;
		margin-top: 80px;
		padding: 0;
		font-size: 0.9rem;
		color: #333333;
	}
	.person_imgContent{
		width: 100%;
	}
	.personal_backImg{
		width: 100%;
		height: 15rem;
	}
	
	.tabs_content{
		height: 3rem;
		padding-bottom: 1rem;
	}
	.personal_tabs{
		min-height: 15rem;
		margin: 2rem 20% 0;
		.tabs{
			width: 33.3%;
			min-height: 1.5rem;
			cursor: pointer;
			padding: 0.5rem 0;
			float: left;
			text-align: center;
		}
	}
	
	.uploading_main{
		position: relative;
		min-height:2.5rem ;
		padding: 0.6rem;
		border-top: 1px solid #DDDDDD;
		border-bottom: 1px solid #DDDDDD;
		div{
			float: left;
		}
		.delete{
			float: right;
		}
		img{
			width: 0.8rem;
		}
	}
	
	.message_content{
		position: relative;
		width: 100%;
		min-height:10rem;
		border-top: 1px solid #DDDDDD;
		padding-bottom:2.5rem ;
	}
	
	.message_main{
		min-height:2.5rem ;
		padding: 1rem 0.5rem;
		border-bottom: 1px solid #DDDDDD;
		.state{
			font-size: 0.8rem;
			color: #C3C3C3;
			margin-top: 0.5rem;
		}
		.message_delete{
			width: 0.8rem;
			float: right;
		}
	}
	
	.data_content{
		padding: 2rem;
		border-top: 1px solid #DDDDDD;
	}
	.data_main{
		text-align: center;
		.set_icon{
			width: 1.4rem;
			position: absolute;
			margin-left: -1.2rem;
			margin-top: 4.2rem;
			cursor: pointer;
		}
		.toux{
			width: 6rem;
			border-radius: 3rem;
		}
		.biaoT{
			margin: 1rem 0;
			color: #333333;
		}
	}
	.data_state{
		width: 20rem;
		margin: 0 auto;
		.amendAble{
			width: 16rem;
			margin-left: 0.5rem;
			font-size: 0.8rem;
			color: #333333;
			padding: 0.5rem;
			border: 0;
			border-bottom: 1px solid #DDDDDD;
		}
		.amend{
			font-size: 0.8rem;
			position: absolute;
			margin-left: -1.8rem;
			margin-top: 0.5rem;
			z-index: 99;
			cursor: pointer;
		}
	}
	.amendAble:focus{
		outline:none;
	}	
	
	.active{
		font-size: 0.9rem;
		color: #E23B3A;
	}
</style>