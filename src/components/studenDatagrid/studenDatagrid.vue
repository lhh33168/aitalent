<template>
		<div class="Studendatagrid">
			<div class="Studendatagrid_imgContent">
				<div class="personal_backImg"></div>
			</div>
			<div class="container_wrap clearfix" style="height:1000px;">
				<ul class="fl">
					<li  v-for="(item,index) in alllabels" @click="changeSelect(index,columns[index])"  @mouseenter="changeSelect1(index,columns[index])"  @mouseleave="changeSelect2(index,columns[index])" ><span :class="{active:index == tabIndexstu}" ref="tab">{{item}}</span></li>
				</ul>
				<div class="fr">
					<router-view></router-view>
				</div>
			</div>
		</div>
</template>
<script>
	import './Studendatagrid.scss'
	export default{
		props: ['cols','labels'],
		beforeMount: function () {
			// console.log(this.cols)
			try{
	             this.columns = this.cols.split(',');
	             this.alllabels = this.labels.split(',');
	        }catch(err){}
			var userJsonStr = sessionStorage.getItem('userInfo');
	        if(userJsonStr){
	              var  presentTabIndexstu = JSON.parse(userJsonStr);
	              this.tabIndexstu =  presentTabIndexstu.tabIndexstu;
	        }
	        
        },
        mounted(){
        	// console.log(this.$refs.tab[0].classList.length)
        	for(var i=0;i<this.columns.length;i++){
	        	this.$refs.tab[i].classList.remove("active");
        	}
        	if(this.tabIndexstu){
        		this.$refs.tab[this.tabIndexstu].classList.add('active');
        		
        	}else{
        		this.$refs.tab[0].classList.add('active');
        	}
        },
		data(){
			return{
				// columns:[
				// 		{name:this.columns[0], toHref:'Thefirstorderstudents'},
				// 		{name:this.columns[0], toHref:'Thesecondorderstudents'},
				// 		{name:this.columns[0], toHref:'cultivatesstudents'},
				// 		{name:this.columns[0], toHref:'Studentsapplyfor'},
				// 	],
				tabIndexstu:0,
				columns: [],
                alllabels:[]
			}
		},
		methods:{
				changeSelect(index,name){
					/*this.$store.commit('CHANGETAB',index);*/
					// console.log(name)
					if(this.$refs.tab[0].classList.length>0){
						// console.log(this.$refs.tab[0].classList.length)
		        		this.$refs.tab[0].classList.remove("active");
		        	}
					this.tabIndexstu = index;
					window.sessionStorage.setItem('userInfo', JSON.stringify(
				            {
				               'tabIndexstu': index,
				               'tabIndex': 2
				            }
			          ));
					this.$router.push({path: name});
				},
				changeSelect1(index,name){
				/*this.$store.commit('CHANGETAB',index);*/
					for(var i=0;i<this.columns.length;i++){
							this.$refs.tab[i].classList.remove("active");
						}
					this.tabIndexstu = index;
					this.$refs.tab[index].classList.add("active");
				},
				changeSelect2(index,name){
					/*this.$store.commit('CHANGETAB',index);*/
					var userJsonStr = sessionStorage.getItem('userInfo');
					var presenttabIndexstu = JSON.parse(userJsonStr);
					for(var i=0;i<this.columns.length;i++){
						if(this.$refs.tab[i].classList){
							this.$refs.tab[i].classList.remove("active");
						}
					}
			        if(presenttabIndexstu.tabIndexstu){
			              this.$refs.tab[presenttabIndexstu.tabIndexstu].classList.add("active");
			        }else{
			        	  this.$refs.tab[0].classList.add("active");
			        }
					//console.log(this.$refs.tab[index],index,this.tabIndexstu)
				},
		}
	}
</script>

