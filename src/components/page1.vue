<template>
	<div>
		<div>这是page1页面</div>
		<br>
		<son :name="city" @number='num'></son>
		{{id}}
		<input type="button" value="发送age" @click='send'>
		<!-- <span id="age">50</span> -->
		<input type="button" value="路径" @click='change'>
	</div>
</template>

<script>
	import son from "./son";
	import {vm} from "./vm.js";

	export default {
		components:{son},
		data:function(){
			return {
				city: "武汉",
				id:'',
				age:10
			}
		},
		methods: {
			send:function(){
				vm.$emit('sendage',this.age);
				console.log(window.localStorage.getItem('a'))
			},
			num:function(id){
				this.id = id;
			},
			change:function(){
				this.$router.push('/page1/use')
			}
		},
		mounted:function(){
			
		}

	}

</script>

<style scoped>
	
</style>