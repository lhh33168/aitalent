<template>
	<div class="header">
		<div class="header_box container_wrap">
			<div class="navbar clearfix">
				<div class="navbar_logo">
					<router-link class="navbar-logo" to="message">
						<img class="logoCss" src="../../assets/imgs/icon/logo_r.png">
					</router-link>
				</div>	
				<div class="collapse">
					<ul class="navbar-list">
						<li  v-for="(item,index) in tabList" :class="{active:index == tabIndex}" @click="changeSelect(index,item.toHref)" @mouseenter="changeSelect1(index,item.toHref)"   >
							<!-- <el-button v-popover:popover1 class="nav-item">{{item.name}}</el-button> -->
							 <span class="nav-item">{{item.name}}</span> 
							 <transition name="fade">
								 <ul v-if="item.toHref=='personCenter' && show" class="navbar-list2" ref="mybox">
								 		<div id="triangle-down"></div>
								 		<li v-for="(item2,index) in tabList2">{{item2.name}}</li>
								 </ul>
								 <ul v-if="item.toHref=='HigherUpsWill' && show" class="navbar-list2" ref="mybox">
								 		<div id="triangle-down"></div>
								 		<li v-for="(item3,index) in tabList3">{{item3.name}}</li>
								 </ul>
   							 </transition>
							<!--  <el-popover
								  ref="popover1"
								  placement="bottom"
								  title="标题"
								  width="200"
								  trigger="hover"
								  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
							</el-popover> -->
						</li>	
					</ul>
				</div>
				<div class="login_register">
					<div @click="register">
						<p></p><img src="../../assets/imgs/icon/icon_s.png" /></p>
						<p class="wordState"></p>注册</p>
					</div>
					<div @click="login">
						<p><img src="../../assets/imgs/icon/icon_log.png" /></p>
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
					{name:'AI高校俱乐部', toHref:'personCenter'},
					{name:'AI大咖会', toHref:'HigherUpsWill'},
				],
				tabIndex:0,
				tabList2:[
					{name:'关于俱乐部', toHref:'officialVer'},
					{name:'学员服务', toHref:'Studen'},
					{name:'AI学院', toHref:'college'},
					{name:'课程报名', toHref:'ApplicationForm'},
					{name:'俱乐部资讯库', toHref:'ClubLibrary'},
				],
				tabList3:[
					{name:'大咖会介绍', toHref:'officialVer'},
					{name:'参会须知', toHref:'Studen'},
					{name:'AI学院', toHref:'college'},
					{name:'议题提交', toHref:'ApplicationForm'},
				],
				show:false
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
				this.$router.push({path: name});
				this.$store.state.footer.footer = true;
			},
			changeSelect1(index,name){
				/*this.$store.commit('CHANGETAB',index);*/
				this.tabIndex = index;
				window.sessionStorage.setItem('userInfo', JSON.stringify(
			            {
			               'tabIndex': index,
			            }
		          ));
				this.$store.state.footer.footer = true;
				
				if(name=="personCenter"){
					// this.animate(this.$refs.mybox,{top:10}) 
					this.show = true
				}
				
			},
			// changeSelect2(index,name){
			// 	this.$store.commit('CHANGETAB',index);
				 
			// },
			register:function(){
				this.$store.state.login.register_type = 1;
				this.$store.state.footer.footer = false;
				this.tabIndex=null;
				window.sessionStorage.setItem('userInfo', JSON.stringify(
			            {
			               'tabIndex': this.tabIndex,
			            }
		          ));
				this.$store.state.header.tabIndexFoot = this.tabIndex;
				this.$router.push({ path: 'register' })
			},
			login:function(){
				this.$store.state.login.register_type = 1;
				this.$store.state.footer.footer = false;
				this.tabIndex=null;
				window.sessionStorage.setItem('userInfo', JSON.stringify(
			            {
			               'tabIndex': this.tabIndex,
			            }
		          ));
				this.$store.state.header.tabIndexFoot = this.tabIndex;
				this.$router.push({ path: 'login' })
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
		.wordState{
			margin-top: -10px;
		}
	}
	#triangle-down {
	    width: 0;
	    height: 0;
	    border-left: 5px solid transparent;
	    border-right: 5px solid transparent;
	    border-bottom: 10px solid #fff;
	    position:absolute;
	    top:-10px;
	    left:67px;
	}
	.navbar-list2{
		display:none;
		height:auto;
		background:#fff;
		color:#000;
		width:140px;
		position:absolute;
		left:-15px;
		border-radius: 3px;
		padding:12px 20px;
		margin-top:10px;
		border:1px solid #ddd;
		// opacity:0;
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
		display:block;
	}
	// .fade-enter-active{animation: fade-in .5s;}

 //    // .fade-leave-active{animation: fade-out .5s;}

 //    @keyframes fade-in{
 //        from{
 //            opacity: 0;
 //        }
 //        to{
 //            opacity: 1;
 //        }
 //    }

    // @keyframes fade-out{
    //     from{opacity: 1;}
    //     to{opacity: 0;}
    // }
	.active{
		position:relative;
		font-size: 18px;
		color: #e23b3a;
		.nav-item{
			color: #e23b3a !important;
			
			border-bottom: 2px solid #e23b3a;
		}
	}
</style>