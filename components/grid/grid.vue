<template>
	<view class="tui-grids" :class="{'tui-border-top':unlined}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"tuiGrid",
		props: {
			//是否去掉上线条
			unlined: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style>
	.tui-grids {
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	.tui-grids::after {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 1px;
		border-top: 1px solid #eaeef1;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-border-top::after {
		border-top: 0 !important;
	}
</style>
