<template>
	<div class="fixed_bottom">
		<div class="firstchild clearfix">
			<p></p>	
			<div class="qrcode"></div>
		</div>
		<div class="secondchild">
			<p></p>
		</div>
		<div class="thirdchild" @click="upTop()">
			<p></p>
		</div>
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
		 	let timer = setInterval(()=>{
                    // 获取当前滚动果的距离：5000,100
                    let scrollY = window.scrollY;
                    // 计算速度
                    let speed = scrollY/10;//500,10
                    scrollY -= speed;
                    // 清除定时器
                    // 当速度为0
                    // 当scrollY等于0
                    if(speed <= 0 || scrollY === 0){
                        clearInterval(timer);
                    }
                    scrollTo(0,scrollY);
                },30);
            }
		}
	}
</script>

<style lang="scss" scoped>
	.fixed_bottom{
		p{
			height:60px;
			width:60px;
			margin-bottom:5px;
		}
		.firstchild{
			p{
				float:right;
				background:url('../../assets/imgs/icon/totop.fw.png') -400px 0px no-repeat;
			}
		}
		.secondchild{
			p{
				position:absolute;
				right:0;
				top:65px;
				background:url('../../assets/imgs/icon/totop.fw.png') -240px 0px no-repeat;	
			}
		}
		.thirdchild{
			p{
				position:absolute;
				right:0;
				background:url('../../assets/imgs/icon/totop.fw.png') -80px 0px no-repeat;
			}	
		}
		.qrcode{
			// position:absolute;
			// top:-10px;
			// left:-280px;
			opacity:0;
			width:0;
			height:130px;
			float:right;
			// float:left;
			background:url('../../assets/imgs/icon/icon_qrcodeq.png') no-repeat;
			-webkit-transition:all 0.5s; 
			-moz-transition:all 0.5s; 
			-o-transition:all 0.5s; 
		}
		position: fixed;
		bottom: 12rem;
		right: 10rem;	
		z-index: 99;
		// img{
		// 	cursor: pointer;
		// 	width: 3rem;
		// }	
		.firstchild:hover p{
			background:url('../../assets/imgs/icon/totop.fw.png') -320px 0px no-repeat;
		}
		.firstchild:hover .qrcode{
			width:280px;
			opacity:1;
		}
		.secondchild:hover p{
				background:url('../../assets/imgs/icon/totop.fw.png') -160px 0px no-repeat;
		}
		.thirdchild:hover p{
				background:url('../../assets/imgs/icon/totop.fw.png') 0px 0px no-repeat;
		}
	}
	
</style>