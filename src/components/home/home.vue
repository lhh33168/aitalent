<template>
	<div class="home_box">
		<Header-top></Header-top>
		
		<div><router-view></router-view></div>
		
		<Footer-bom v-if="$store.state.footer.footer"></Footer-bom>
	</div>
</template>

<script>
/*import HeaderTop from './header';*/
import HeaderTop from '../header/header.vue';
import FooterBom from '../footer/footer.vue';
import Message from '../message/message.vue';
// import '../../js/index.js';
export default {
	data() {
		return {

		}
	},
	computed: {

	},
	components: {
		HeaderTop,
		FooterBom,
		Message
	},
	methods: {

	}

}
</script>

<style>
	@import './home.scss';
</style>