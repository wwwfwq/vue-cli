<template>
	<div>
		<p>{{mes}}</p>
		<p>{{com}}</p>
		<p>{{fn()}}</p>   <!-- methods里的方法需要调用 fn() -->
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				mes:'hello'
			}
		},
		methods:{
			fn:function(){
				return this.mes.split('').reverse().join('');
			}
		},
		computed:{
			com:function(){
				return this.mes.split('').reverse().join(''); // computed 需要return
			}
		} 
		// computed与methods相比，computed会对依赖进行缓存，多次调用速度非常快
	}
</script>
<style scoped>
</style>