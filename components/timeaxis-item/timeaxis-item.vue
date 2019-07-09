<template>
	<view class="timeaxis-item-class tui-timeaxis-item">
		<slot name="content"></slot>
		<view class="tui-node" :style="{background:bgcolor}">
			<slot name="node"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tuiTimeaxisItem",
		props: {
			//节点背景色
			bgcolor: {
				type: String,
				default: "#fafafa"
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>
	.tui-timeaxis-item {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 25px;
	}

	.tui-node {
		position: absolute;
		top: 0;
		left: -20px;
		/* padding: 3px 0; */
		transform-origin: 0;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99;
		background: #fafafa;
		font-size: 24upx;
	}
</style>
