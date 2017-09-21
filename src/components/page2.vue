<template>
	<div>
		<p>这是page2页面</p>
		<router-link v-bind="{to:'/page2/info/'+id}">跳转</router-link>
		<input type="button" value="存储" @click='storage'>
		<input type="button" value="删除" @click='remove'>
		<div id="div">15</div>
	</div>
	<!-- <span id="age">111</span> -->
</template>

<script>

	 
	
	export default{
		data:function(){
			return {
				age:1,
				id:100
			}
		},
		methods:{
			storage:function(){
				window.localStorage.setItem('a',1);
				window.localStorage.setItem('a',4);
			},
			remove:function(){
				// window.localStorage.clear();
				window.localStorage.removeItem('a');
			}
		}
	}
</script>

<style scoped>
	
</style>