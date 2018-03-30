<template>
	<div class="fixed_bottom">
		<p><img src="../../assets/imgs/icon/icon_qustion.png" @click="popQustion"></p>
		<p><img src="../../assets/imgs/icon/icon_top.png" @click="upTop" /></p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
		 popQustion(){
		 	alert('待开发');
		 },
		 upTop(){
		 	alert('待开发');
		 }
		}
	}
</script>

<style lang="scss" scoped>
	.fixed_bottom{
		position: fixed;
		bottom: 12rem;
		right: 10rem;	
		z-index: 99;
		img{
			cursor: pointer;
			width: 3rem;
		}	
	}
</style>