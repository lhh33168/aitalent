<template>
	<div class="loginContent">
		<Header-top></Header-top>
		<div class="mail_main">
			 <div class="mail_register">
				<h3 v-if="$store.state.login.register_type == 0">找回/修改密码</h3>
				<h3 v-else="$store.state.login.register_type == 1">手机号码注册</h3>
				<input type="email" class="inputClass" placeholder="手机号" v-model="register.account" />
				<input type="password" class="inputClass" placeholder="密码" v-model="register.password" />
				<input type="password" class="inputClass" placeholder="确认密码" />
				
				<div v-show="$store.state.login.register_type == 1" class="authCode">
					<input type="text" class="auth_input" placeholder="输入验证码" />
					<input type="button" class="auth_button" value="获取验证码" />
				</div>
				
				<button type="button" class="btn_sure_register">确认</button>
				
				<!--<router-link to="login">使用手机号码注册</router-link>-->
				<p  class="change_type" ><router-link to="login">登录</router-link></p>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderTop from '../header/header.vue';
	export default{
		data(){
			return{
				register:{
					account:'',
					password:''
				}
			}
		},
		components: {
			HeaderTop
		},
		beforeMount(){
			if(this.$store.state.header.tabIndexFoot==null){
				this.footer = false;
			}
		},
		mounted(){
            var loginContent = document.querySelector('.loginContent');
            // console.log(window.innerHeight);
            loginContent.style.height = window.innerHeight-80 + 'px';    
        },
		methods:{
				
		}
	}
</script>

<style lang="scss" scoped>
	.loginContent{
		position: relative;
		width: 100%;
		height: 100%;
		margin-top: 80px;
	}
	
	.mail_main{
		position: relative;
		margin: 0 20%;
		top: 3.5rem;
	}
	
	.mail_register{
		position: relative;
		width: 21.5rem;
		min-height: 20rem;
		background: #FFFFFF;
		border-radius: 0.3rem;
		color: #333333;
		padding:0 1rem 1rem;
		font-size: 0.7rem;
		h3{
			text-align: center;
			font-size: 1.1rem;
			color: #E23B3A;
			padding: 1.5rem 0;
			font-weight:bold;
		}
		.inputClass{
			width: 19.5rem;
			height: 2rem;
			padding: 0.5rem 1rem;
			margin: 0 0 0.7rem;
			border-radius: 0.1rem;
			background: #FFFFFF;
			border:1px solid #DDDDDD;
		}
		.btn_sure_register{
			width: 19.5rem;
			height: 2.5rem;
			margin: 1rem 0;
			background: #E23B3A;
			color: #FFFFFF;
			border-radius:0.1rem;
			border: 0;
			cursor: pointer;
		}
		
		.authCode{
			display: inline-block;
			margin-bottom: 0.5rem;
			font-size: 0.7rem;
			line-height: 1.5;
			.auth_input{
				font-size: 0.7rem;
				width: 9.5rem;
				height: 2rem;
				padding: 0.5rem 1rem;
				border-radius: 0.1rem;
				border:1px solid #DDDDDD;
				margin-right: 1rem;
			}
			.auth_button{
				font-size: 0.7rem;
				width: 8.7rem;
				height: 2rem;
				padding: 0rem 1rem;
				border-radius: 0.1rem;
				background: #E23B3A;
				color: #FFFFFF;
				border: 0;
			}
		}
	}
	
	.change_type{
		cursor: pointer;
	}
	
	input::placeholder{
		color: #C3C3C3;
	}
</style>