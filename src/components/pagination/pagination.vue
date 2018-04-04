<template>
	<div class="page-bar"> 
	     <ul> 
		       <li><a :class="setButtonClass(0)" v-on:click="prvePage(mycur)" class="el-icon-arrow-left"></a></li> 
		       <li v-for="index in indexs"  v-bind:class="{ active: mycur == index }"> 
		          <a v-on:click="btnClick(index)">{{ index < 1 ? "..." : index }}</a> 
		       </li> 
		       <li><a :class="setButtonClass(1)" v-on:click="nextPage(mycur)" class="el-icon-arrow-right"></a></li> 
	     </ul> 
   	</div>
</template>

<script>
export default {
		props: ['cur', 'all'],
		data(){
			return{
				mycur: this.cur
			}
		},
	    computed: {
	        indexs: function () {
	            var left = 1
	            var right = this.all
	            var ar = []
	            if (this.all >= 14) {
	                if (this.mycur > 7 && this.mycur < this.all - 6) {
	                    left = this.mycur - 7
	                    right = this.mycur + 6
	                } else {
	                    if (this.mycur <= 7) {
	                        left = 1
	                        right = 14
	                    } else {
	                        right = this.all
	                        left = this.all - 13
	                    }
	                }
	            }
	            while (left <= right) {
	                ar.push(left)
	                left++
	            }
	            if (ar[0] > 1) {
	                ar[0] = 1;
	                ar[1] = -1;
	            }
	            if (ar[ar.length - 1] < this.all) {
	                ar[ar.length - 1] = this.all;
	                ar[ar.length - 2] = 0;
	            }
	            return ar
	        }
	    },
	    methods: {
	        btnClick: function (index) {
	            if (index < 1) return;
	            if (index != this.mycur) {
	                this.mycur = index
	                // this.$dispatch('btn-click', index)
	            }
	        },
	        nextPage: function (index) {
	            if (this.mycur >= this.all) return;
	            this.btnClick(this.mycur + 1);
	        },
	        prvePage: function (index) {
	            if (this.mycur <= 1) return;
	            this.btnClick(this.mycur - 1);
	        },
	        setButtonClass: function (isNextButton) {
	            if (isNextButton) {
	                return this.mycur >= this.all ? "page-button-disabled" : ""
	            }
	            else {
	                return this.mycur <= 1 ? "page-button-disabled" : ""
	            }
	        }
	    }
}
</script>

<style >
	@import './pagination.css';
</style>