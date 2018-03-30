<template>
	<div class="loginContent">
		<div class="mail_main">
			 <div class="mail_register">
				<h3>账号密码登录</h3>
				<input type="phone" class="inputClass" placeholder="手机号" v-model="account" />
				<input type="password" class="inputClass" placeholder="密码" v-model="password" />
					
				<!--<router-link to="login">使用手机号码注册</router-link>-->
				<p class="linkToForget" @click="forgetPassword">忘记密码</p>
				<p class="linkToRegister" @click="register">注册</p>
				
				<button type="button" class="btn_sure_register" @click="login">登录</button>
				
				<div class="threeLogin">
					<h5>第三方登录</h5>
					<div>
						<img src="../../assets/imgs/icon/icon_log_weibo.png" />
						<img src="../../assets/imgs/icon/icon_log_weixin.png" />
						<img src="../../assets/imgs/icon/icon_log_qq.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import './login.scss'
	// import { mapGetters, mapActions } from 'vuex'
	// import $ from 'jquery'

	export default {
		data: function(){
			return {
				account:'',
				password:''	
			}
		},
		mounted(){
            var loginContent = document.querySelector('.loginContent');
            // console.log(window.innerHeight);
            loginContent.style.height = window.innerHeight-80 + 'px';
            console.log(loginContent.style.height)
        },
		methods: {
			login: function(event){
				console.log(this)
				if($('form').valid()){
					this.$store.dispatch('login', {username: this.username, password: this.pwd})
				}
			},
			forgetPassword:function(){
				this.$store.state.login.register_type = 0;
				this.$router.push({ path: '/register' })
			},
			register:function(){
				this.$store.state.login.register_type = 1;
				this.$router.push({ path: '/register' })
			}
		}
	}
</script>