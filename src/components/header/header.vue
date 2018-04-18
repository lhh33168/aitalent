<template>
	<div class="header">
		<div class="header_box container_wrap">
			<div class="navbar clearfix">
				<div class="navbar_logo">
					<a @click="changeSelect(index=0)" style="cursor:pointer;">
						<img class="logoCss" src="../../assets/imgs/icon/logo_r.png">
					</a>
				</div>	
				<div class="collapse">
					<ul class="navbar-list">
						<li  v-for="(item,index) in tabList" :class="{active:index == tabIndex}" @click="changeSelect(index,item.toHref)" @mouseenter="changeSelect1(index,item.toHref)"   @mouseleave="changeSelect2(index,item.toHref)" ref="tab">
							 <span class="nav-item">{{item.name}}</span> 
							 <transition name="fade">
									 <ul v-if="item.name=='AI高校俱乐部'" class="navbar-list2" ref="mybox">
									 		<li v-for="(item2,index) in tabList2" ><span @click.stop="changeSelect(index=2,item2.toHref)">{{item2.name}}</span></li>
									 </ul>
									 <ul v-if="item.name=='AI大咖会'" class="navbar-list3" ref="mybox">
									 		<li v-for="(item3,index) in tabList3"><span @click.stop="changeSelect(index=3,item3.toHref)">{{item3.name}}</span></li>
									 </ul>
   							 </transition>
						</li>	
					</ul>
				</div>
				<div class="login_register">
					<div @click="register">
						<!-- <p></p><img src="../../assets/imgs/icon/icon_s.png" /></p> -->
						<p class="wordState">注册</p>
					</div>
					<div @click="login">
						<!-- <p><img src="../../assets/imgs/icon/icon_log.png" /></p> -->
						<p class="wordState">登录</p>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>
	import {mapState,mapMutations,mapActions} from 'vuex';
	export default{
		data(){
			return{
				tabList:[
					{name:'AI资讯', toHref:'message'},
					{name:'AI快聘', toHref:'kpin'},
					{name:'AI高校俱乐部'},
					{name:'AI大咖会'},
				],
				tabIndex:3,
				tabList2:[
					{name:'关于俱乐部', toHref:'collegeclubs'},
					{name:'学员服务', toHref:'students'},
					{name:'AI学院', toHref:'AIcollege'},
					{name:'课程报名', toHref:'ApplicationForm'},
					{name:'俱乐部资讯库', toHref:'ClubLibrary'},
				],
				tabList3:[
					{name:'大咖会介绍', toHref:'greatCoffee'},
					{name:'参会须知', toHref:'forumNotice'},
					{name:'议题提交', toHref:'submitTicket'},
					{name:'往期回顾', toHref:'pastEvents'},
				],
			}
		},
		computed:{
			...mapState([
				'globel'
				
			])
		},
		beforeMount: function () {
			var userJsonStr = sessionStorage.getItem('userInfo');
	        if(userJsonStr){
	              var  presentTabIndex = JSON.parse(userJsonStr);
	              this.tabIndex =  presentTabIndex.tabIndex;
	        }
        },
        mounted(){
        	// console.log(this.$refs.tab[0].classList.length)
        	var userJsonStr = sessionStorage.getItem('userInfo');
	        if(userJsonStr){
	              var  presentTabIndex = JSON.parse(userJsonStr);
	              this.tabIndex =  presentTabIndex.tabIndex;
	        }
        	for(var i=0;i<this.tabList.length;i++){
        		if(this.$refs.tab[i].classList){
        			this.$refs.tab[i].classList.remove("active");
        		}	
        	}
        	if(presentTabIndex.tabIndex && presentTabIndex.tabIndex != 100){
        		this.$refs.tab[this.tabIndex].classList.add('active');	
        	}else if(presentTabIndex.tabIndex === 100){
		        	  return;
	        }else{
	        	  this.$refs.tab[0].classList.add("active");
	        }
        },
		methods:{
			...mapMutations([
				'CHANGETAB'
			]),
			changeSelect(index,name){
				/*this.$store.commit('CHANGETAB',index);*/
				this.tabIndex = index;
				window.sessionStorage.setItem('userInfo', JSON.stringify(
			            {
			               'tabIndex': index,
			            }
		          ));
				if(index==0){
					location.href='/';
				}else if(index==1){
					location.href='/plus/list.php?channelid=-8';
				}else{
					this.$router.push({path: name});
				}	
			},
			changeSelect1(index,name){
				/*this.$store.commit('CHANGETAB',index);*/
				for(var i=0;i<this.tabList.length;i++){
					if(this.$refs.tab[i].classList){
	        			this.$refs.tab[i].classList.remove("active");
	        		}	
				}
				this.tabIndex = index;
				this.$refs.tab[index].classList.add("active");
			},
			changeSelect2(index,name){
				/*this.$store.commit('CHANGETAB',index);*/
				var userJsonStr = sessionStorage.getItem('userInfo');
				var presentTabIndex = JSON.parse(userJsonStr);
				for(var i=0;i<this.tabList.length;i++){
					if(this.$refs.tab[i].classList){
						this.$refs.tab[i].classList.remove("active");
					}
				}
		        if(presentTabIndex.tabIndex && presentTabIndex.tabIndex != 100){
		              this.$refs.tab[presentTabIndex.tabIndex].classList.add("active");
		        }else if(presentTabIndex.tabIndex === 100){
		        	  return;
		        }else{
		        	  this.$refs.tab[0].classList.add("active");
		        }
				// console.log(this.$refs.tab[index],index,this.tabIndex)	
			},
			// changeSelect2(index,name){
			// 	this.$store.commit('CHANGETAB',index);
				 
			// },
			register:function(){
				this.$store.state.login.register_type = 1;
				this.$store.state.footer.footer = false;
				this.tabIndex = 100;
				window.sessionStorage.setItem('userInfo', JSON.stringify(
			            {
			               'tabIndex': this.tabIndex,
			            }
		          ));
				this.$store.state.header.tabIndexFoot = this.tabIndex;
				// this.$router.push({ path: 'register' })
				location.href='/member/index_do.php?fmdo=user&dopost=regnew'
			},
			login:function(){
				this.$store.state.login.register_type = 1;
				this.$store.state.footer.footer = false;
				this.tabIndex = 100;
				window.sessionStorage.setItem('userInfo', JSON.stringify(
			            {
			               'tabIndex': this.tabIndex,
			            }
		          ));
				this.$store.state.header.tabIndexFoot = this.tabIndex;
				// this.$router.push({ path: 'login' })
				location.href='/member'
			}	
		}
	}
	
</script>

<style lang="scss" scoped>
	.header{
		position: fixed;
		top: 0;
		width: 100%;
		height: 80px;
		border-bottom: 1px solid #dddddd;
		z-index: 99;
		background: #FFFFFF;
	}
	.header_box{
    	height: 79px;
    	background: #FFFFFF;
    	color: #333333;   	
	}
	
	.navbar_logo{
		width: 260px;
		float: left;
		background: #fff;
		text-align: left;
		height: 79px;
	}
	.navbar_logo .logoCss{
		width: 10rem;
		position: relative;
        top: 50%;
        transform: translateY(-50%);
	}
	
	.collapse{
		width: 50%;
		height: 79px;
		float: left;
		background: #fff;
		color: #333333;
		text-align: left;
	}
	.navbar-list{
		width: 100%;
		height: 80px;
		margin:0;
		cursor:pointer;
		position:relative;
		li{
			display: inline-block;
			height: 80px;
		}
		.nav-item{
			height: 79px;
			display: inline-block;
			font-size: 18px;
			margin-right: 50px;
			padding: 0.8rem 0;
    		line-height: 46px;
		}
		li .nav-item{
			color: #333333;
			cursor:pointer;
		}
	}
	.navbar-list>li{
		position:relative;
	}
	.login_register{
		width: 25%;
		height: 80px;
		float: right;
		font-size: 14px;
		div{
			text-align: center;
			float: right;
			cursor:pointer;
		}
		.wordState {
			 line-height: 80px;
			 margin-left:10px;
		}
	}
	.navbar-list2{
		background:url('../../assets/imgs/tabmenu/xl_julebu.png');
		color:#000;
		width:140px;
		position:absolute;
		top:-120px;
		left:-15px;
		border-radius: 8px;
		padding:12px 20px;
		border-bottom:1px solid #ddd;
		-webkit-transition:all 0.5s; 
		-moz-transition:all 0.5s; 
		-o-transition:all 0.5s; 
		opacity:0;
		z-index:-1;
		li{
			width:100%;
			height:35px;
			text-align:center;
			font-size:16px;
			color:#333333;
			line-height:35px;
		}
	}
	.navbar-list2>li:hover span{
		color: #e23b3a;
		display:block;
	}
	.navbar-list3>li:hover span{
		color: #e23b3a;
		display:block;
	}
	.navbar-list3{
		background:url('../../assets/imgs/tabmenu/xl_dakahui.png');
		color:#000;
		width:140px;
		position:absolute;
		top:-85px;
		left:-32px;
		border-radius: 8px;
		padding:12px 20px;
		border-bottom:1px solid #ddd;
		-webkit-transition:all 0.5s; 
		-moz-transition:all 0.5s; 
		-o-transition:all 0.5s; 
		opacity:0;
		z-index:-1;
		li{
			width:100%;
			height:35px;
			text-align:center;
			font-size:16px;
			color:#333333;
			line-height:35px;
		}
	}
	.active:hover .navbar-list2{
		top:80px;
		opacity:1;
	}
	.active:hover .navbar-list3{
		top:80px;
		opacity:1;
	}
	
	.active{
		// position:relative;
		font-size: 18px;
		color: #e23b3a;
		.nav-item{
			color: #e23b3a !important;
			
			border-bottom: 2px solid #e23b3a;
		}
	}
</style>