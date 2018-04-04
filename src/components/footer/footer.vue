<template>
	<div class="footer_box">
		<div class="footer_content container_wrap">
			<div class="footer_logo">
				<span>致力构建国内领先的AI社区</span>
				<img src="../../assets/imgs/icon/logo_w.png" class="logo_img" />
			</div>
			
			<div class="footer_main">
				<div class="footer_left">
					<div class="main_list">
						<p class="title">关于我们</p>
						<p>公司介绍</p>
						<p>核心高管</p>
						<p>联系我们</p>
					</div>
					<div class="main_list">
						<p class="title">加入我们</p>
						<p>校招资讯</p>
						<p>社招咨询</p>
						<p style="opacity: 0;">社招咨询</p>
					</div>
					<div class="main_list">
						<p class="title">产品&业务</p>
						<p>AI人才社区</p>
						<p>11快聘</p>
						<p>红萝卡</p>
					</div>
					<div class="main_list">
						<p class="title">帮助中心</p>
						<p>自助服务</p>
						<p>问题分类</p>
						<p style="opacity: 0;">红萝卡</p>
					</div>
				</div>
				
				<div class="client_list">
					<p class="client_p">客户列表</p>
					<div class="imgDiv_list">
						<img src="../../assets/imgs/icon/pp.png" class="img_list" />
						<img src="../../assets/imgs/icon/yy.png" class="img_list" />
						<img src="../../assets/imgs/icon/9377.png" class="img_list" />
						<img src="../../assets/imgs/icon/3v.png" class="img_list" />
					</div>
					<div class="imgDiv_list">
						<img src="../../assets/imgs/icon/sh.png" class="img_list" />
						<img src="../../assets/imgs/icon/yn.png" class="img_list" />
						<img src="../../assets/imgs/icon/vvm.png" class="img_list" />
						<img src="../../assets/imgs/icon/hz.png" class="img_list" />
					</div>
				</div>
			</div>
			<div class="footer_brand">
				<p>@2017 oneoneai.com 一一快聘®版权所有 粤ICP备18024612号</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.footer_box{
		width: 100%;
		min-height: 320px;
		margin: 0 auto;
		background: #333333;
		color: #C3C3C3;
		clear: both;
	}
	.footer_content .footer_logo{
		height: 60px;
		padding: 17px 0;
		line-height: 26px;
		font-size:26px;
		color: #FFFFFF;
		font-weight: bold;
	}
	.footer_logo .logo_img{
		width: 10rem;
		float: right;
		margin-top: 3px;
	}
	
	.footer_content .footer_main{
		width: 100%;
		height: 210px;
		font-size: 13px;
		padding: 10px 0;
		border-top:1px solid #454545;
		border-bottom: 1px solid #454545;
	}
	.footer_left{
		width: 50%;
		float: left;
	}
	
	.main_list{
		display: inline-block;
		height: 5.2rem;
		padding: 4px 30px;
		text-align: center;
	}
	.main_list:nth-child(1){
		padding-left:0;
	}
	.main_list .title{
		color: #FFFFFF;
		margin-bottom: 16px;
		font-size: 15px;
	}
	.main_list p{
		margin: 10px 0;
	}
	.client_list{
		float: left;
		width: 50%;
	}
	
	.client_list .client_p{
		color: #FFFFFF;
		padding: 14px 0;
		padding-left: 169px;
		font-size: 15px;
	}
	
	.client_list .imgDiv_list{
		float: right;
		margin-right: -10px;
	}
	.client_list .img_list{
		width: 110px;
		padding: 10px ;
	}
	
	.footer_brand{
		clear: both;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 14px;
	}
	
</style>