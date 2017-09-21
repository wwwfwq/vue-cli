<template>
	<div>公共部分提取---子组件{{name}}</div>
</template>

<script>
	export default {
		props:['na'],
		created(){
			this.name = this.na
			this.send()
		},
		data(){
			return {
				id:11,
				name:''
			}
		},
		methods:{
			send:function(){
				this.$emit('number',this.id)
			}
		}
	}

</script>

<style scoped>
	
</style>