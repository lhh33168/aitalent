<template>
	<div class="pagination_content">
		<ul class="pagination">
			<li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> < </a></li> 
			<li v-for="p in grouplist" :class="{'active': current == p.val}" ><a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a></li>
			<li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"> > </a></li>
		</ul>
			<!--<ul class="pagination pull-right">
				<li><span> 共 {{ total }}  条数据 </span></li>			
				<li><span> 每页显示 {{ display }}  条数据 </span></li>
				<li><span> 共 {{ page }} 页 </span></li>
				<li><span> 当前第 {{ current }} 页 </span></li>
			</ul>-->
	
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	props: {
		total: { // 数据总条数
			type: Number,
			default: 10000
		},
		display: { // 每页显示条数
			type: Number,
			default: 10
		},
		current: { // 当前页码
			type: Number,
			default: 1
		},
		pagegroup: { // 分页条数 -- 奇数
			type: Number,
			default: 12,
			coerce: function(v) {
				v = v > 0 ? v : 6;
				return v % 2 === 1 ? v : v + 1;
			}
		}
	},
	computed: {
		page: function() { // 总页数
			return Math.ceil(this.total / this.display);
		},
		grouplist: function() { // 获取分页页码
			var len = this.page,
				temp = [],
				list = [],
				count = Math.floor(this.pagegroup / 2),
				center = this.current;
			if(len <= this.pagegroup) {
				while(len--) {
					temp.push({
						text: this.page - len,
						val: this.page - len
					});
				};
				return temp;
			}
			while(len--) {
				temp.push(this.page - len);
			};
			var idx = temp.indexOf(center);
			(idx < count) && (center = center + count - idx);
			(this.current > this.page - count) && (center = this.page - count);
			temp = temp.splice(center - count - 1, this.pagegroup);
			do {
				var t = temp.shift();
				list.push({
					text: t,
					val: t
				});
			} while (temp.length);
			if(this.page > this.pagegroup) {
				(this.current > count + 1) && list.unshift({
					text: '...',
					val: list[0].val - 1
				});
				(this.current < this.page - count) && list.push({
					text: '...',
					val: list[list.length - 1].val + 1
				});
			}
			return list;
		}
	},
	methods: {
		setCurrent: function(idx) {
			if(this.current != idx && idx > 0 && idx < this.page + 1) {
				this.current = idx;
				/*this.$dispatch('pagechange', this.current);*/
			}
			
		}
	}
}
</script>

<style lang="scss" scoped>
	/*.pagination{
		width: auto;
		border-radius: 0.3rem;
		text-align: center;
		li{
			display: inline-block;
			padding: 0.3rem 0.5rem;
			border: 1px solid #DDDDDD;
			border-right: 0;
			margin: 0;
		}
	}
	.pagination li a{
		color: #337ab7 !important;
	}
	.pagination li:last-child{
		border-right: 1px solid #DDDDDD;
	}
	
	.active{
		background: #337ab7;
		color: #FFFFFF !important;
	}*/
	
	.pagination_content{
		width: 60rem;
		padding: 1rem 20% 2rem;
	}
	.pagination>li:first-child>a, .pagination>li:first-child>span {
	    margin-left: 0;
	    border-top-left-radius: 4px;
	    border-bottom-left-radius: 4px;
	}
	.pagination>li>a, .pagination>li>span {
		display:block;
	    float: left;
	    height:32px;
	    width:32px;
	    line-height:32px;
	    text-align:center;
	    font-size:14px;
	    color: #C3C3C3;
	    text-decoration: none;
	    background-color: #fff;
	    border: 1px solid #ddd;
	    margin-left:10px;
	}
	a {
	    color: #C3C3C3;
	    text-decoration: none;
	}
	.pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {
	    z-index: 3;
	    color: #fff;
	    cursor: default;
	    background-color: #E23B3A;
	    border-color: #E23B3A;
	}
</style>