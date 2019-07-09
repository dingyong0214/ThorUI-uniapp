<template>
	<view class="tui-list-view tui-view-class">
		<view class="tui-list-title" v-if="title">{{title}}</view>
		<view class="tui-list-content" :class="[unlined?'tui-border-'+unlined:'']">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tuiListView",
		props: {
			title: {
				type: String,
				default: ''
			},
			unlined: {
				type: String,
				default: '' //top,bottom,all
			}
		}
	}
</script>

<style>
	.tui-list-title {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
		font-size: 30upx;
		line-height: 30upx;
		color: #666;
	}

	.tui-list-content {
		width: 100%;
		position: relative;
	}

	.tui-list-content::before {
		content: " ";
		position: absolute;
		top: -1upx;
		right: 0;
		left: 0;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);

	}

	.tui-list-content::after {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tui-border-top::before {
		border-top: 0;
	}

	.tui-border-bottom::after {
		border-bottom: 0;
	}

	.tui-border-all::after {
		border-bottom: 0;
	}

	.tui-border-all::before {
		border-top: 0;
	}
</style>
