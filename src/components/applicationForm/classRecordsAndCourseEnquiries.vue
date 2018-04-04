<template>
    <div class="courseOverview">
        <datagrid></datagrid>
        <div class="container_wrap">
				<h1>敬请期待</h1>
				
		</div>
    </div>
</template>
<script>
    import datagrid from './applicationFormDatagrid.vue';
    export default{
    	mounted(){
            var courseOverview = document.querySelector('.courseOverview .container_wrap');
            // console.log(window.innerHeight);
            courseOverview.style.height = window.innerHeight-625 + 'px';    
        },
        components: {
            datagrid
        }
    }
</script>
<style>
		.courseOverview .container_wrap{
			height:100%;
			font-size: 14px;
		}
		.courseOverview h2{
			margin-bottom:30px;
		}
		.courseOverview h1{
			text-align:center;
			font-size:16px;
			color:#333;
			font-weight:bold;
			padding:40px 0 30px;
		}
		.courseOverview p{
			color:#656565;
			line-height:22px;
			margin-bottom:30px;
		}	
</style>