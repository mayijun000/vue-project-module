<template>
	<div class="endline" :style="styles">———— {{text}} ————</div>
</template>

<script>
	export default{
		props: {
			text: {
				default: '我是有底线的'
			},
			styles: {
				default: ''
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style>
	.endline{
		height: 20px;
		line-height: 20px;
		text-align: center;
		background-color: #F7F6FB;
		color: #ccc;
		font-size: 12px;
	}
</style>