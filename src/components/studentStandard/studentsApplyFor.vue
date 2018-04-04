<template>
		<div class="Thesecondorderstudents">
			<div class="container_wrap">
				<div class="ThesecondorderstudentsContainer">
					<h3>学员申请</h3>
					<label for="">姓名：</label><input type="text" placeholder="请输入您的姓名">
					<label for="">性别：</label><input type="text" list="itemlistsex" name="" placeholder="请选择">
					<datalist id="itemlistsex">
					    <option>男</option>
					    <option>女</option>
					</datalist>      
					<label for="">在读院校：</label><input type="text" placeholder="请输入院校名称">
					<label for="">在读专业：</label><input type="text" placeholder="请输入专业">
					<label for="">在读级别：</label><input type="text" list="itemlist" name="" placeholder="请选择级别">
					<datalist id="itemlist">
					    <option>item1</option>
					    <option>item2</option>
					</datalist>      
					<label for="">拟实习时间：</label><input type="text" placeholder="请输入实习时间">
					<label for="">拟毕业时间：</label><input type="text" placeholder="请输入毕业时间">
					<label for="">拟报名目的：</label><input type="text" list="itemlist" name="" placeholder="请选择">
					<datalist id="itemlist">
					    <option>item1</option>
					    <option>item2</option>
					</datalist>      
					<label for="">基础测试：</label>
					<span>请点击此处，参与基础测试</span>
					<div>提交</div>
				</div>
			</div>
		</div>
</template>
<script>
	export default{

	}
</script>
<style lang="scss" scoped>
	.Thesecondorderstudents{
		.ThesecondorderstudentsContainer{
			width: 380px;
			margin-left:290px;
			select{
				border:1px solid #ddd;
				width:290px;
				height:40px;
			}
			label{
				float:left;
				height:40px;
				line-height:40px;
				width:90px;
				margin-bottom:20px;
				text-align:right;
			}
			input{
				float:right;
				border:1px solid #ddd;
				width:290px;
				height:40px;
				padding:0 20px 0 10px;
				border-radius:2px;
				margin-bottom:20px;
			}
			input::placeholder{
				color: #C3C3C3;
			}
			span{
				display:inline-block;
				height:40px;
				line-height:40px;
				color:#4095ff;
				font-size:14px;
				margin-bottom:30px;
			}
			div{
				height:50px;
				background:#e23b3a;
				line-height:50px;
				text-align:center;
				border-radius:6px;
				color:#fff;
				width:140px;
				margin:0 auto;
				font-size:18px;
			}	
		}
	}
	
</style>