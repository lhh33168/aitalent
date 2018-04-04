<template>
		<div class="clubResearch">
			<div class="clubResearch_imgContent">
				<img src="../../assets/imgs/icon/banner_julebu_top.jpg" class="personal_backImg" />
			</div>
			<div class="container_wrap">
				<h1>俱乐部满意度调研</h1>
				<p>非常感谢您参与AI高校俱乐部的课程，请您抽出一点时间填写此课程培训效果调查表。以便根据您的意见或建议我们能更加科学、更加有针对性的设计与改进课程以满足您的要求，感谢您的大力支持。</p>
				<h2>Q1、您的姓名</h2>
				<input type="text">
				<h2>Q2、你参加的培训课程是</h2>
				<input type="radio" id="Python"><label for="Python">Python</label>
				<input type="radio" id="Java"><label for="Java">Java</label>
				<input type="radio" id="C"><label for="C">C/C++</label>
				<input type="radio" id="web"><label for="web">前端与移动开发</label>
				<input type="radio" id="computing"><label for="computing">云计算大数据</label>
				<input type="radio" id="php"><label for="php">PHP</label>
				<input type="radio" id="blockchain"><label for="blockchain">区块链</label>
				<h2>Q3、你觉得整体教学质量如何是</h2>
				<input type="radio"><label for="">非常满意</label>
				<input type="radio"><label for="">满意</label>
				<input type="radio"><label for="">一般</label>
				<input type="radio"><label for="">勉强</label>
				<input type="radio"><label for="">极差</label>
				<h2>Q4、请您对此次培训各个方面进行打分。“1-5分”依次代表“非常不满意-非常满意”</h2>
				<div>
					<span>课程目的的明确性</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<span>课程整体框架的合理性</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<span>培训课程前后的连贯性</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<span>案例和理论比例分配的恰当性</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<span>培训内容是否满足您的要求？</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<span>培训师的专业度</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<span>培训师的主题把握情况</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div>
					<span>培训师的讲授技巧</span>
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<h2>Q5、为帮助我们提高培训质量，请您对本次培训提出改善意见和建议</h2>
				<textarea name="" id="" cols="30" rows="10"></textarea>
				<div>提交</div>
			</div>
		</div>
</template>
<script>
	export default{
			data(){
				return{
					tablist:[
						{name:'俱乐部知识', toHref:'clubKnowledge',imgurl:require('../../assets/imgs/icon/icon_julebu_zixun_zhishi.png'),content:'培训课程着重点以及课程介绍'},
						{name:'俱乐部最新资讯', toHref:'latestNews',imgurl:require('../../assets/imgs/icon/icon_julebu_zixun_zixun.png'),content:'学习时间以及课程时长等'},
						{name:'实习职位信息', toHref:'internshipInformation',imgurl:require('../../assets/imgs/icon/icon_julebu_zixun_shixi.png'),content:'大批优秀讲师为您授课'},
						{name:'俱乐部调研', toHref:'clubResearch',imgurl:require('../../assets/imgs/icon/icon_julebu_zixun_diaoyan.png'),content:'特训服务介绍'},
					],
				}
			},
			methods:{
				changeSelect(index,name){
					/*this.$store.commit('CHANGETAB',index);*/
					this.tabIndex = index;
					window.sessionStorage.setItem('userInfo', JSON.stringify(
				            {
				               'tabIndex': 2,
				            }
			          ));
					this.$router.push({path: name});
				},
			}
	}
</script>
<style lang="scss" scoped>
		.clubResearch{
			h1{
				padding:40px 0 20px;
				font-size:18px;
				color:#333;
				font-weight:bold;
				text-align:center;
			}
			p{
				font-size:16px;
				color:#c3c3c3;
				padding-bottom:40px;
				border-bottom:1px solid #ddd;
			}
		}
</style>