<template>
	<div class="kpin_content container_wrap">
		<!--kpin 头部筛选部分 begin  -->
		<div class="domain_main">
			<p class="domain_main_left">招聘领域:</p>
			<p class="domain_main_right">
				<span v-for="(item,index) in kpin.domainList" class="domainClass" :class="{active:item.id == kpin.activeObj.domain}" @click="checkDomain(index,0)">{{item.name}}</span>
			</p>
		</div>
		<div class="domain_main">
			<p class="domain_main_left">工作地点:</p>
			<p class="domain_main_right">
				<span v-for="(item,index) in kpin.domainList" class="domainClass" :class="{active:item.id == kpin.activeObj.position}" @click="checkDomain(index,1)">{{item.name}}</span>
			</p>
		</div>
		<div class="domain_main">
			<p class="domain_main_left">工作经验:</p>
			<p class="domain_main_right">
				<span v-for="(item,index) in kpin.smallList" class="domainClass" :class="{active:item.id == kpin.activeObj.experience}" @click="checkDomain(index,2)">{{item.name}}</span>
			</p>
		</div>
		<div class="domain_main">
			<p class="domain_main_left">岗位类别:</p>
			<p class="domain_main_right">
				<span v-for="(item,index) in kpin.smallList" class="domainClass" :class="{active:item.id == kpin.activeObj.post}" @click="checkDomain(index,3)">{{item.name}}</span>
			</p>
		</div>
		<div class="domain_main">
			<p class="domain_main_left">学历要求:</p>
			<p class="domain_main_right">
				<span v-for="(item,index) in kpin.smallList" class="domainClass" :class="{active:item.id == kpin.activeObj.education}" @click="checkDomain(index,4)">{{item.name}}</span>
			</p>
		</div>
		<!--kpin 头部筛选部分 end  -->
		
		
		<div class="showStation_content">
			<div class="showStation_label">
				<div class="showStation_label_left">
					<span>我的投递</span>
					<span>企业&部门</span>
					<span>猎头</span>
					<span>企业HR</span>
					<span>11快聘</span>
				</div>
				<div class="showStation_label_right">
					<p>
						<img src="../../assets/imgs/icon/icon_gaoduan.png" />
						<span>高端岗位</span>
					</p>
					<p>
						<img src="../../assets/imgs/icon/icon_shezhao.png" />
						<span>社招岗位</span>
					</p>
					<p>
						<img src="../../assets/imgs/icon/icon_xiaozhao.png" />
						<span>校招岗位</span>
					</p>
					<p>
						<img src="../../assets/imgs/icon/icon_shixi.png" />
						<span>实习岗位</span>
					</p>
				</div>
			</div>
			
			<div class="station_query_content">
				<input type="text" class="station_querey" :placeholder="alertPlaceholder" />
			</div>
			
			
			<div class="station_detail_content">
				<div class="station_detail" v-for="item in detailList">
					<router-link :to="{name:'kpinDetail',params:{id:item.id}}">
					<div class="station_detail_left">
						<p class="title">自然语言处理资深工程师(博士)</p>
						<p>
							<span>40-60K/月</span>
							<span>北京&上海</span>
						</p>
						<p>本科/2年</p>
					</div>
					<div class="station_detail_right">
						<p class="recruiter">
							<span>陈学远</span>
							<span class="post">首席架构师</span>
						</p>
						<p class="company">爱奇艺</p>
					</div>
					</router-link>
				</div>
			</div>
			<pagination :cur="data.cur" :all="data.all" @click="listen(data.cur)"></pagination>
		</div>	
		<Suspended></Suspended>
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
				kpin:{
					domainList:[
						{name:'全部', id:0},
						{name:'机器学习', id:1},
						{name:'机器视觉', id:2},
						{name:'语音识别', id:3},
						{name:'自然语音处理', id:4},
						{name:'自然语音处理', id:5},
						{name:'自然语音处理', id:6},
						{name:'自然语音处理', id:7},
						{name:'自然语音处理', id:8},
						{name:'自然语音处理', id:9}
					],
					smallList:[
						{name:'全部', id:0},
						{name:'机器学习', id:1},
						{name:'机器视觉', id:2},
						{name:'语音识别', id:3},
						{name:'自然语音处理', id:4}
					],
					type:{ //多选择筛选,传对象给后台;0代表默认传全部
						domain:0,
						position:0,
						experience:0,
						post:0,
						education:0
					},
					activeObj:{//控制筛选tabs的active样式
						domain:0,
						position:0,
						experience:0,
						post:0,
						education:0
					}
				},
				detailList:[
					{name:'全部', id:0},
					{name:'机器学习', id:1},
					{name:'机器视觉', id:2},
					{name:'语音识别', id:3},
					{name:'自然语音处理', id:4}
				],
				personTabIndex:0,
				alertPlaceholder:'今日新增职位3个,本周新职位63个',
				testTotal:100,
				display: 10,
				testCurrent:1
			}
		},
		components: {
			pagination,
			Suspended
		},
		methods:{
			listen(data) {
                    data.msg = '当前页码：' + data
            },
			changeSelect(index){
				this.personTabIndex = index;
			},
			checkDomain(index,selectType){
				switch(selectType)
				{
				case 0:
				  this.kpin.type.domain = index;
				  this.kpin.activeObj.domain = index;
				  break;
				case 1:
				  this.kpin.type.position = index;
				  this.kpin.activeObj.position = index;
				  break;
				case 2:
				  this.kpin.type.experience = index;
				  this.kpin.activeObj.experience = index;
				  break;
				case 3:
				  this.kpin.type.post = index;
				  this.kpin.activeObj.post = index;
				  break;
				case 4:
				  this.kpin.type.education = index;
				  this.kpin.activeObj.education = index;
				  break;  
				}
				console.log(this.kpin.type);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.kpin_content{
		margin-top:80px;
		padding: 1rem 0;
		color: #333333;
		font-size: 14px;
	}
	
	.domain_main{
		width: 100%;
		font-size: 0.8rem;
		margin-bottom: 1.5rem;
		p{
			display: inline-block;
			vertical-align: top;
		}
		.domain_main_left{
			width: 4rem;
			color: #333333;
			margin: 0.7rem 0 !important;
		}
		.domain_main_right{
			color: #656565 !important;
			width: 55rem;
		}
	}
	.domain_main_right span{
		display: inline-block;
		min-height: 1rem;
	}
	
	
	.domainClass{
		cursor: pointer;
		display: inline-block;
		font-size: 0.8rem;
		color: #656565;
		margin: 0.5rem 1rem !important;
		margin-top: 0.5rem;
		padding: 0.15rem 0.4rem;
	}
	
	.active{
		color: #FFFFFF;
		background: #E23B3A;
		border-radius: 0.3rem;
		padding: 0.15rem 0.4rem;
		
	}
	
	
	
	.showStation_content{
		width: 100%;
		min-height: 20rem;
		padding: 0.75rem 0;
		border-top:1px solid #DDDDDD;
	}
	.showStation_label{
		font-size: 0.8rem;
		color: #333333;
		div{
			display: inline-block;
		}
	}
	.showStation_label_left span{
		padding: 0.5rem 1rem;
	}
	.showStation_label_left span:first-child{
		padding-left: 0;
	}
	.showStation_label_right{
		float: right;
		p{
			display: inline-block;
			margin: 0 1rem;
		}
		img{
			height: 0.9rem;
			vertical-align: middle;
			margin-right: 0.3rem;
		}
	}
	.showStation_label_right p:last-child{
		margin-right: 0;
	}
	
	.station_query_content{
		margin: 1rem 0;
		.station_querey{
			width: 25rem;
			border: 1px solid #DDDDDD;
			border-radius: 0.3rem;
			padding: 0.5rem;
			background: url(../../assets/imgs/icon/icon_search.png) no-repeat;
			background-position: 98% 50%;
			background-size: 1rem 1rem;
		}
	}
	
	
	.station_detail_content{
	
	}
	.station_detail{
		width: 60rem;
		background: #FFFFFF;
		border: 1px solid #DDDDDD;
		border-radius: 0.3rem;
		/*text-shadow: 0px 6px 9px #F4F4F4;*/
		box-shadow: 0px 6px 9px #F4F4F4;
		margin-bottom: 1rem;
		div{
			display: inline-block;
			vertical-align: middle;
		}
	}
	.station_detail_left{
		width: 41rem;
		padding: 0.5rem 2.5rem;
		p{
			margin: 0.5rem 0;
		}
		.title{
			font-size: 0.9rem;
			color: #5a89ff;
		}
	}
	.station_detail_right{
		width: 18rem;
		padding: 0.5rem;
		p{
			margin: 0.5rem 0;
		}
		.company{
			font-size: 1rem;
			color: #333333;
		}
	}
	.recruiter span{
		margin-right: 0.5rem;
	}
	.recruiter .post{
		color: #C3C3C3;
		font-size: 0.8rem;
	}
</style>