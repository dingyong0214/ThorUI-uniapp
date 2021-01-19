<template>
	<view class="tui-list-view tui-view-class" :style="{backgroundColor:backgroundColor,marginTop:marginTop}">
		<view class="tui-list-title" :style="{color:color,fontSize:size+'rpx',lineHeight:30+'rpx'}" v-if="title">{{title}}</view>
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
			color:{
				type: String,
				default: '#666'
			},
			//rpx
			size:{
				type:Number,
				default:30
			},
			backgroundColor:{
				type: String,
				default: 'transparent'
			},
			unlined: {
				type: String,
				default: '' //top,bottom,all
			},
			marginTop:{
				type:String,
				default:'0'
			}
		}
	}
</script>

<style scoped>
	.tui-list-title {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.tui-list-content {
		width: 100%;
		position: relative;
	}

	.tui-list-content::before {
		content: " ";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1px solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 0;
		z-index: 2;
		pointer-events: none;
	}

	.tui-list-content::after {
		content: '';
		width: 100%;
		position: absolute;
		border-bottom: 1px solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 100%;
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
