<template>
	<div>
		信息页---{{num}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				num:0
			}
		},
		created(){
			this.num = this.$route.params.id;
			this.getid();
		},
		methods:{
			getid:function(){
				// alert(this.num)
			}
		}
	}
</script>

<style scoped>
	
</style>