<template>
	<!--可以直接引入thorui.css使用，也可以使用组件button-->
	<view class="container">
		<view class="title">
			默认按钮
		</view>
		<tui-button @click="detail" type="primary" >页面主操作</tui-button>
		<tui-button type="primary" :disabled="true" :loading="true">页面主操作 Disabled</tui-button>
		<!--注释部分为直接引入thorui.css写法-->
		<!-- <button class="tui-btn tui-btn-block tui-primary" hover-class="tui-primary-hover">页面主操作</button> -->
		<!-- <button class="tui-btn tui-btn-block tui-primary tui-dark-disabled" loading disabled>页面主操作 Disabled</button> -->
		<button class="tui-btn tui-btn-block tui-white" hover-class="tui-white-hover">页面次要操作</button>
		<button class="tui-btn tui-btn-block tui-white" disabled loading> 页面次要操作 Disabled</button>
		<button class="tui-btn tui-btn-block tui-danger" hover-class="tui-danger-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-danger tui-dark-disabled" loading disabled>页面辅助操作 Disabled</button>
		<button class="tui-btn tui-btn-block tui-warning" hover-class="tui-warning-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-warning tui-dark-disabled" disabled>页面辅助操作 Disabled</button>
		<button class="tui-btn tui-btn-block tui-green" hover-class="tui-green-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-green tui-dark-disabled" disabled>页面辅助操作 Disabled</button>
		<button class="tui-btn tui-btn-block tui-btn-gray" hover-class="tui-gray-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-btn-gray" disabled loading>页面辅助操作</button>
		<view class="title">
			空心按钮
		</view>
		<tui-button @click="detail" type="primary" :plain="true">页面主操作</tui-button>
		<tui-button type="primary" :plain="true" :disabled="true" :loading="true">页面主操作
			Disabled</tui-button>
		<!-- <button class="tui-btn tui-btn-block tui-primary-outline" hover-class="tui-outline-hover">页面主操作</button>
  <button class="tui-btn tui-btn-block tui-primary-outline tui-dark-disabled" disabled loading>页面主操作 Disabled</button> -->
		<button class="tui-btn tui-btn-block tui-danger-outline" hover-class="tui-outline-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-danger-outline tui-dark-disabled" disabled>页面辅助操作 Disabled</button>
		<button class="tui-btn tui-btn-block tui-warning-outline" hover-class="tui-outline-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-green-outline" hover-class="tui-outline-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-gray-outline" hover-class="tui-outline-hover">页面辅助操作</button>
		<view class="title">
			圆角按钮
		</view>
		<tui-button @click="detail" shape="circle" type="primary">页面主操作</tui-button>
		<!-- <button class="tui-btn tui-btn-block tui-primary tui-fillet" hover-class="tui-primary-hover">页面主操作</button> -->
		<button class="tui-btn tui-btn-block tui-white tui-fillet" hover-class="tui-white-hover">页面次要操作</button>
		<button class="tui-btn tui-btn-block tui-danger tui-fillet" hover-class="tui-danger-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-warning tui-fillet" hover-class="tui-warning-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-green tui-fillet" hover-class="tui-green-hover">页面辅助操作</button>
		<button class="tui-btn tui-btn-block tui-primary-outline tui-outline-fillet" hover-class="tui-outline-hover">页面主操作</button>
		<button class="tui-btn tui-btn-block tui-danger-outline tui-outline-fillet" hover-class="tui-outline-hover">页面辅助操作</button>
		<tui-button @click="detail" type="warning" :plain="true" shape="circle">页面主操作</tui-button>
		<!-- <button class="tui-btn tui-btn-block tui-warning-outline tui-outline-fillet" hover-class="tui-outline-hover">页面辅助操作</button> -->

		<view class="title">
			渐变按钮
		</view>
		<!-- 组件默认就是渐变按钮-->
		<tui-button @click="detail">页面主操作</tui-button>
		<!-- <button class="tui-btn tui-btn-block tui-btn-gradual " hover-class="tui-gradual-hover">页面主操作</button> -->
		<button class="tui-btn tui-btn-block btn-gradual-disabled" disabled>页面主操作 Disabled</button>

		<view class="title">
			不同尺寸按钮
		</view>

		<view class="flex-box">
			<tui-button @click="detail" type="primary" size="mini" class="tui-mbtm">主操作</tui-button>
			<!-- <button class="tui-btn tui-btn-mini tui-primary" hover-class="tui-primary-hover">主操作</button> -->
			<button class="tui-btn tui-btn-mini tui-white" hover-class="tui-white-hover">次要操作</button>
			<button class="tui-btn tui-btn-mini tui-danger" hover-class="tui-danger-hover">辅助操作</button>
			<button class="tui-btn tui-btn-small tui-primary" hover-class="tui-primary-hover">主要</button>
			<button class="tui-btn tui-btn-small tui-white" hover-class="tui-white-hover">次要</button>
			<button class="tui-btn tui-btn-small tui-danger" hover-class="tui-danger-hover">辅助</button>
			<tui-button @click="detail" type="primary" size="mini" :plain="true" class="tui-mbtm">主操作</tui-button>
			<!-- <button class="tui-btn tui-btn-mini tui-primary-outline" hover-class="tui-outline-hover">主操作</button> -->
			<button class="tui-btn tui-btn-mini tui-danger-outline" hover-class="tui-outline-hover">辅助操作</button>
			<button class="tui-btn tui-btn-mini tui-green-outline" hover-class="tui-outline-hover">辅助操作</button>
			<button class="tui-btn tui-btn-small tui-primary-outline" hover-class="tui-outline-hover">主要</button>

			<button class="tui-btn tui-btn-mini tui-primary tui-fillet" hover-class="tui-primary-hover">主操作</button>
			<button class="tui-btn tui-btn-mini tui-danger tui-fillet" hover-class="tui-danger-hover">辅助操作</button>
			<button class="tui-btn tui-btn-small tui-warning tui-fillet" hover-class="tui-warning-hover">辅助</button>
			<button class="tui-btn tui-btn-small tui-green tui-fillet" hover-class="tui-green-hover">辅助</button>

			<button class="tui-btn tui-btn-mini tui-primary-outline tui-outline-fillet" hover-class="tui-outline-hover">主操作</button>
			<button class="tui-btn tui-btn-mini tui-green-outline tui-outline-fillet" hover-class="tui-outline-hover">辅助操作</button>
		</view>
	</view>
</template>

<script>
	import tuiButton from "@/components/button/button"
	export default {
		components: {
			tuiButton
		},
		data() {
			return {

			}
		},
		methods: {
			detail: function() {
				uni.showToast({
					title: '只有组件才有的点击事件~',
					icon: "none"
				})
			}
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

	.tui-btn{
		margin-bottom: 26upx;
		margin-right: 20upx;
	}

	.flex-box {
		width: 100%;
	}
</style>
