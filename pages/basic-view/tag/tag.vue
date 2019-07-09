<template>
	<view class="container">
		<view class="title">
			实心标签
		</view>
		<view class="flex-box">
			<!-- <view class="tui-tag tui-primary">实心标签</view> -->
			<tui-tag>组件标签</tui-tag>
			<!-- <view class="tui-tag tui-black">实心标签</view> -->
			<tui-tag type="black">组件标签</tui-tag>
			<view class="tui-tag tui-white">实心标签</view>
			<view class="tui-tag tui-danger">实心标签</view>
			<view class="tui-tag tui-warning">实心标签</view>
			<view class="tui-tag tui-green">实心标签</view>
			<view class="tui-tag tui-btn-gray">实心标签</view>
			<view class="tui-tag tui-light-blue">实心标签</view>
			<view class="tui-tag tui-light-brownish">实心标签</view>
			<view class="tui-tag tui-light-orange">实心标签</view>
			<view class="tui-tag tui-light-green">实心标签</view>
		</view>
		<view class="flex-box">
			<tui-tag size="small">组件标签</tui-tag>
			<!-- <view class="tui-tag-small tui-primary">实心标签</view> -->
			<view class="tui-tag-small tui-danger">实心标签</view>
			<view class="tui-tag-small tui-black">实心标签</view>
			<view class="tui-tag-small tui-white">实心标签</view>
			<view class="tui-tag-small tui-warning">实心标签</view>
			<view class="tui-tag-small tui-green">实心标签</view>
			<view class="tui-tag-small tui-btn-gray">实心标签</view>
			<view class="tui-tag-small tui-light-blue">实心标签</view>
			<view class="tui-tag-small tui-light-brownish">实心标签</view>
			<view class="tui-tag-small tui-light-orange">实心标签</view>
			<view class="tui-tag-small tui-light-green">实心标签</view>
		</view>
		<view class="title">
			空心标签
		</view>
		<view class="flex-box">
			<tui-tag :plain="true">组件标签</tui-tag>
			<!-- <view class="tui-tag tui-tag-outline">默认标签</view> -->
			<view class="tui-tag tui-tag-outline tui-primary-outline">空心标签</view>
			<tui-tag :plain="true" type="danger">空心标签</tui-tag>
			<!-- <view class="tui-tag tui-tag-outline tui-danger-outline">空心标签</view> -->
			<view class="tui-tag tui-tag-outline tui-warning-outline">空心标签</view>
			<view class="tui-tag tui-tag-outline tui-green-outline">空心标签</view>
			<view class="tui-tag tui-tag-outline tui-gray-outline">空心标签</view>
		</view>
		<view class="flex-box">
			<view class="tui-tag-small tui-tag-outline">默认标签</view>
			<view class="tui-tag-small tui-tag-outline tui-primary-outline">空心标签</view>
			<view class="tui-tag-small tui-tag-outline tui-danger-outline">空心标签</view>
			<view class="tui-tag-small tui-tag-outline tui-warning-outline">空心标签</view>
			<view class="tui-tag-small tui-tag-outline tui-green-outline">空心标签</view>
			<view class="tui-tag-small tui-tag-outline tui-gray-outline">空心标签</view>
			<tui-tag :plain="true" size="small">组件标签</tui-tag>
		</view>

		<view class="title">
			圆角标签
		</view>
		<view class="flex-box">
			<tui-tag shape="circle">组件标签</tui-tag>
			<!-- <view class="tui-tag tui-primary tui-tag-fillet">实心标签</view> -->
			<view class="tui-tag tui-black tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-white tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-danger tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-warning tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-green tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-btn-gray tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-light-blue tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-light-brownish tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-light-orange tui-tag-fillet">实心标签</view>
			<view class="tui-tag tui-light-green tui-tag-fillet">实心标签</view>
		</view>
		<view class="flex-box">
			<tui-tag shape="circle" size="small">组件标签</tui-tag>
			<!-- <view class="tui-tag-small tui-primary tui-tag-fillet">实心标签</view> -->
			<view class="tui-tag-small tui-danger tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-black tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-white tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-warning tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-green tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-btn-gray tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-light-blue tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-light-brownish tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-light-orange tui-tag-fillet">实心标签</view>
			<view class="tui-tag-small tui-light-green tui-tag-fillet">实心标签</view>
		</view>
		<view class="flex-box">
			<tui-tag shape="circle" :plain="true">组件标签</tui-tag>
			<!-- <view class="tui-tag tui-tag-outline tui-tag-outline-fillet">默认标签</view> -->
			<view class="tui-tag tui-tag-outline tui-primary-outline tui-tag-outline-fillet">空心标签</view>
			<view class="tui-tag tui-tag-outline tui-danger-outline tui-tag-outline-fillet">空心标签</view>
			<view class="tui-tag tui-tag-outline tui-warning-outline tui-tag-outline-fillet">空心标签</view>
			<view class="tui-tag tui-tag-outline tui-green-outline tui-tag-outline-fillet">空心标签</view>
			<view class="tui-tag tui-tag-outline tui-gray-outline tui-tag-outline-fillet">空心标签</view>
		</view>
		<view class="flex-box">
			<tui-tag shape="circle" :plain="true" size="small">组件标签</tui-tag>
			<!-- <view class="tui-tag-small tui-tag-outline tui-tag-outline-fillet">默认标签</view> -->
			<view class="tui-tag-small tui-tag-outline tui-primary-outline tui-tag-outline-fillet">空心标签</view>
			<view class="tui-tag-small tui-tag-outline tui-danger-outline tui-tag-outline-fillet">空心标签</view>
			<view class="tui-tag-small tui-tag-outline tui-warning-outline tui-tag-outline-fillet">空心标签</view>
			<view class="tui-tag-small tui-tag-outline tui-green-outline tui-tag-outline-fillet">空心标签</view>
			<view class="tui-tag-small tui-tag-outline tui-gray-outline tui-tag-outline-fillet">空心标签</view>
		</view>
		<view class="title">
			半圆角标签
		</view>
		<view class="flex-box">
			<tui-tag shape="circleLeft">组件标签</tui-tag>
			<!-- <view class="tui-tag tui-primary tui-tag-fillet-left">实心标签</view> -->
			<view class="tui-tag tui-black tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-white tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-danger tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-warning tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-green tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-btn-gray tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-light-blue tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-light-brownish tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-light-orange tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag tui-light-green tui-tag-fillet-left">实心标签</view>
		</view>
		<view class="flex-box">
			<tui-tag shape="circleLeft" size="small">组件标签</tui-tag>
			<!-- <view class="tui-tag-small tui-primary tui-tag-fillet-left">实心标签</view> -->
			<view class="tui-tag-small tui-danger tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-black tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-white tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-warning tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-green tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-btn-gray tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-light-blue tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-light-brownish tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-light-orange tui-tag-fillet-left">实心标签</view>
			<view class="tui-tag-small tui-light-green tui-tag-fillet-left">实心标签</view>
		</view>
		<view class="flex-box">
			<tui-tag shape="circleRight">组件标签</tui-tag>
			<!-- <view class="tui-tag tui-primary tui-tag-fillet-right">实心标签</view> -->
			<view class="tui-tag tui-black tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-white tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-danger tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-warning tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-green tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-btn-gray tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-light-blue tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-light-brownish tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-light-orange tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag tui-light-green tui-tag-fillet-right">实心标签</view>
		</view>
		<view class="flex-box">
			<tui-tag shape="circleRight" size="small">组件标签</tui-tag>
			<!-- <view class="tui-tag-small tui-primary tui-tag-fillet-right">实心标签</view> -->
			<view class="tui-tag-small tui-danger tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag-small tui-light-green tui-tag-fillet-right">实心标签</view>
			<view class="tui-tag-small tui-light-brownish tui-tag-fillet-right">实心标签</view>
			<tui-tag shape="circleRight" size="small" :plain="true" type="primary"> 组件标签</tui-tag>
			<tui-tag shape="circleLeft" size="small" :plain="true" type="danger">组件标签</tui-tag>
			<tui-tag shape="circleLeft" size="small" :plain="true" type="green">组件标签</tui-tag>
		</view>
	</view>
</template>

<script>
	import tuiTag from '@/components/tag/tag'
	export default {
		components: {
			tuiTag
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	@import '../../../static/style/thorui.css';

	.container {
		padding: 20upx 30upx 40upx 30upx;
		box-sizing: border-box;
	}

	.title {
		padding: 30upx 0;
		font-size: 32upx;
		color: #333;
		font-weight: bold;
	}

	.tui-tag,
	.tui-tag-small,
	.tui-mrbtm {
		margin-bottom: 26upx;
		margin-right: 20upx
	}

	.flex-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		margin-bottom: 26upx;
	}
</style>
