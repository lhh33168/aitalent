/**
 * [pagination 分页组件]
 * @param  {Number} total 		[数据总条数]
 * @param  {Number} display 	[每页显示条数 default:10]
 * @param  {Number} current 	[当前页码 default:1]
 * @param  {Number} pagegroup 	[分页条数(奇数) default:5]
 * @param  {Event} pagechange 	[页码改动时 dispatch ]
 * @return {[type]}   [description]
 */
import Vue from 'Vue';

Vue.component('pagination', {
	template: '#template_pagination',
	props: {
		total: {			// 数据总条数
			type: Number,
			default: 0
		},
		display: {			// 每页显示条数
			type: Number,
			default: 10
		},
		current: {			// 当前页码
			type: Number,
			default: 1
		},
		pagegroup: {		// 分页条数 -- 奇数
			type: Number,
			default: 5,
			coerce:function(v){
				v = v > 0 ? v : 5;
				return v % 2 === 1 ? v : v + 1;
			}
		}
	},
	computed: {
		page:function() { // 总页数
			return Math.ceil(this.total / this.display);
		},
		grouplist:function(){ // 获取分页页码
			var len = this.page , temp = [], list = [], count = Math.floor(this.pagegroup / 2) ,center = this.current;
			if( len <= this.pagegroup ){
				while(len--){ temp.push({text:this.page-len,val:this.page-len});};
				return temp;
			}
			while(len--){ temp.push(this.page - len);};
			var idx = temp.indexOf(center);            	
			(idx < count) && ( center = center + count - idx); 
			(this.current > this.page - count) && ( center = this.page - count);
			temp = temp.splice(center - count -1, this.pagegroup);            	
			do {
				var t = temp.shift();
				list.push({
					text: t,
					val: t
				});
			}while(temp.length);            	
			if( this.page > this.pagegroup ){
				(this.current > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });
				(this.current < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });
			}
			return list;
		}
	},
	methods: {
		setCurrent: function(idx) {
			if( this.current != idx && idx > 0 && idx < this.page + 1) {
				this.current = idx;
				this.$dispatch('pagechange',this.current);                	
			}                
		}
	}
});
