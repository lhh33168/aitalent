<template>
		<div class="clubResearch">
			<div class="clubResearch_imgContent">
				<div class="personal_backImg"></div>
			</div>
			<div class="container_wrap">
				<h1>俱乐部满意度调研</h1>
				<p>非常感谢您参与AI高校俱乐部的课程，请您抽出一点时间填写此课程培训效果调查表。以便根据您的意见或建议我们能更加科学、更加有针对性的设计与改进课程以满足您的要求，感谢您的大力支持。</p>
				<h2>Q1、您的姓名</h2>
				<input type="text" placeholder="请输入您的姓名">
				<h2>Q2、你参加的培训课程是</h2>
				<div class="radio">
					<input type="radio" id="Python" name="course">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="Python">Python</label>
				</div>
				<div class="radio">
					<input type="radio" id="Java" name="course">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="Java">Java</label>
				</div>
				<div class="radio">
					<input type="radio" id="C" name="course">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="C">C/C++</label>
				</div>
				<div class="radio">
					<input type="radio" id="web" name="course">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="web">前端与移动开发</label>
				</div>
				<div class="radio">
					<input type="radio" id="computing" name="course">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="computing">云计算大数据</label>
				</div>
				<div class="radio">
					<input type="radio" id="php" name="course">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="php">PHP</label>
				</div>
				<div class="radio">
					<input type="radio" id="blockchain" name="course">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="blockchain">区块链</label>
				</div>
				<h2>Q3、你觉得整体教学质量如何是</h2>
				<div class="radio">
					<input type="radio" name="assess" id="Satisfaction">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="Satisfaction">非常满意</label>
				</div>
				<div class="radio">
					<input type="radio" name="assess" id="pleased">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="pleased">满意</label>
				</div>
				<div class="radio">
					<input type="radio" name="assess" id="general">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="general">一般</label>
				</div>
				<div class="radio">
				<input type="radio" name="assess" id="narrow">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="narrow">勉强</label>
				</div>
				<div class="radio">
					<input type="radio" name="assess" id="range">
					<span class="option">
						<span class="option-span">
							<span class="option-span_2"></span>
						</span>
					</span>
					<label for="range">极差</label>
				</div>
				<h2>Q4、请您对此次培训各个方面进行打分。“1-5分”依次代表“非常不满意-非常满意”</h2>
				<!-- <div class="grade clearfix grade_first">
					<span class="grade_first_title">课程目的的明确性</span>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div> -->
				<div class="grade clearfix" v-for="(item,index) in tablist1" :class="{grade_first:index == 0}" @click="hignLight($event,index)">
					<span :class="{grade_first_title:index == 0}">{{item.title}}</span>
					<ul ref="hignLightbigBox">
						<li v-for="(item1,index) in tablist2" ref="hignLightBox" class="active">{{item1.content}}</li>
					</ul>
				</div>
				<!-- <div class="grade clearfix">
					<span>培训课程前后的连贯性</span>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div>
				<div class="grade clearfix">
					<span>案例和理论比例分配的恰当性</span>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div>
				<div class="grade clearfix">
					<span>培训内容是否满足您的要求？</span>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div>
				<div class="grade clearfix">
					<span>培训师的专业度</span>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div>
				<div class="grade clearfix">
					<span>培训师的主题把握情况</span>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div>
				<div class="grade clearfix">
					<span>培训师的讲授技巧</span>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
					</ul>
				</div> -->
				<h2>Q5、为帮助我们提高培训质量，请您对本次培训提出改善意见和建议</h2>
				<textarea name="" id="area" cols="30" rows="10" placeholder="请输入建议或意见..."></textarea>
				<div class="submit">提交</div>
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
					tablist1:[
						{title:'课程目的的明确性'},
						{title:'课程整体框架的合理性'},
						{title:'培训课程前后的连贯性'},
						{title:'案例和理论比例分配的恰当性'},
						{title:'培训内容是否满足您的要求？'},
						{title:'培训师的专业度'},
						{title:'培训师的主题把握情况'},
						{title:'培训师的讲授技巧'}
					],
					tablist2:[
						{content:'1'},
						{content:'2'},
						{content:'3'},
						{content:'4'},
						{content:'5'}
					]
				}
			},
			// mounted(){

			// 	console.log(this.$refs.hignLightBox)
			// 	for (var i = 0; i <= this.$refs.hignLightBox.length; i++) {
			// 		this.$refs.hignLightBox[i].style.background = 'white';
			// 	}
				
			// },
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
				hignLight(e,index){	
					// console.log(index)
					if(e.target.tagName === 'LI'){
						// console.log(e.target.innerText)
						e.target.classList.remove('active');
						if(e.target.innerText==1){
							for(let i = 1;i<=4;i++){
								this.$refs.hignLightbigBox[index].children[i].classList.add('active')
							}	
						}else if(e.target.innerText==2){
							for(let i =0;i<=1;i++){
								this.$refs.hignLightbigBox[index].children[i].classList.remove('active')
							}
							for(let i = 2;i<=4;i++){
								this.$refs.hignLightbigBox[index].children[i].classList.add('active')
							}	
						}else if(e.target.innerText==3){
							for(let i =0;i<=2;i++){
								this.$refs.hignLightbigBox[index].children[i].classList.remove('active')
							}
							for(let i = 3;i<=4;i++){
								this.$refs.hignLightbigBox[index].children[i].classList.add('active')
							}	
						}else if(e.target.innerText==4){
							for(let i =0;i<=3;i++){
								this.$refs.hignLightbigBox[index].children[i].classList.remove('active')
							}
							for(let i = 4;i<=4;i++){
								this.$refs.hignLightbigBox[index].children[i].classList.add('active')
							}	
						}else if(e.target.innerText==5){
							for(let i =0;i<=4;i++){
								this.$refs.hignLightbigBox[index].children[i].classList.remove('active')
							}
						}
						
					}
				}
			}
	}
</script>
<style lang="scss" scoped>
		.clubResearch{
			.active{
				background:#fff;
			}
			margin-top:80px;
			.personal_backImg{
				height:300px;
				background:url('../../assets/imgs/icon/banner_julebu_top.jpg') no-repeat;
				background-position:center;
				background-size:cover;
			}
			h1{
				padding:40px 0 20px;
				font-size:18px;
				color:#333;
				font-weight:bold;
				text-align:center;
			}
			h2{
				color:#e23b3a;
				font-size:16px;
				margin-top:28px;
			}
			p{
				font-size:16px;
				color:#c3c3c3;
				padding-bottom:40px;
				border-bottom:1px solid #ddd;
			}
			input[type="radio"]:checked+.option{
				border: 1px solid #e23b3a;
				background: #e23b3a;
			}
			input[type="radio"]:checked+.option>.option-span>.option-span_2{
				background:#e23b3a;
				height:4px;
				width:4px;
				position: absolute;
				top: 5px;
				left: 5px;
				border-radius:50%;
			}
			input[type="radio"] {
				display: none;
			}		
			label {
				display: inline-block;
				font-size:16px;
				line-height: 16px;
				position: relative;
				padding-left:10px;
				cursor: pointer;
				vertical-align:middle;
				color:#656565;
			}
			.radio{
				padding-top:18px;
				font-size:16px;
				color:#656565;
				.option {
					width: 18px;
					height: 18px;
					display: inline-block;
					border: 1px solid #ccc;
					vertical-align:middle;
					border-radius: 50%;
					position: relative;
					.option-span {
						position: absolute;
						top: 1px;
						left: 1px;
						width: 14px;
						height: 14px;
						background: #fff;
						border-radius: 50%;
					}
				}
			}
			input[type="text"] {
				height:40px;
				margin-top:18px;
				border:1px solid #ddd;
				border-radius:2px;
				width:290px;
				padding-left:10px;
				font-size:14px;
			}
			.grade{
				font-size:16px;
				span{
					display:block;
					float:left;
					padding-right:24px;
					width:306px;
					text-align:right;
				}
				span:not(.grade_first_title){
					margin-top:8px;
				}
				ul{
					float:left;
					height:35px;
					font-size:14px;
					width:701px;
					color:#656565;
					line-height:35px;
					border-radius:2px;
					border: 1px solid rgb(221,221,221);
					border-right:0 none;
					margin-bottom:12px;
					background: -webkit-linear-gradient(left,#FFD200, #CD0000); /* Safari 5.1 - 6.0 */
					background: -o-linear-gradient(right,#FFD200, #CD0000); /* Opera 11.1 - 12.0 */
					background: -moz-linear-gradient(right,#FFD200, #CD0000); /* Firefox 3.6 - 15 */
					background: linear-gradient(to right,#FFD200, #CD0000); /* 标准的语法 */
					li{
						height:34px;
						float:left;
						width:140px;
						text-align:center;
						border-right: 1px solid rgb(221,221,221);
						border-bottom:1px solid rgb(221,221,221);
						// background:#fff;
					}
				}
			}	
			.grade_first{
				span{
					margin-top:30px;
				}
				ul{
					margin-top:24px;
				}	
			}
			#area{
				margin-top:20px;
				padding:18px 0  0 18px;
				width:1200px;
				height:350px;
				color:#c3c3c3;
				font-size:16px;
			}
			.submit{
				height:50px;
				width:140px;
				margin:40px auto 70px;
				background:#e23b3a;
				color:#fff;
				border-radius:6px;
				font-size:20px;
				line-height:50px;
				text-align:center;
			}
		}
</style>