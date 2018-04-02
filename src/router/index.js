import Vue from 'vue'
import VueRouter from 'vue-router'
// import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login/login.vue'
import RegisterComponent from '../components/register/register.vue'
import MessageComponent from '../components/message/message.vue'
import CenterComponent from '../components/centers/personCenter.vue'
import KpinComponent from '../components/kpin/kpin.vue'
import ArtDetailComponent from '../components/message/article_detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
		redirect:'/message',
		children:[
                {path:'/message',component:MessageComponent},
                {path:'/personCenter',name: 'personCenter',component: CenterComponent},
                {path:'/kpin',name: 'kpin',component: KpinComponent},
                {path:'/artDetail',name: 'artDetail',component: ArtDetailComponent}
            ]},
        {path:'/login',name: 'login',component: LoginComponent},
        {path:'/register',name: 'register',component: RegisterComponent}
	]
})

// 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	console.log(Vue);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
		
// 	} 
// 	next();
// })

export default router