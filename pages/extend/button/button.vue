<template>
	<view class="container">
		<view class="tui-title">默认按钮</view>
		<view class="tui-btn-box"><tui-button @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button disabled loading @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button disabled loading disabledGray>禁用背景为灰色</tui-button></view>
		<view class="tui-btn-box"><tui-button type="white" @click="detail">页面次要操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="white" disabled loading>页面次要操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button type="danger" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="danger" disabled loading>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button type="danger" disabled loading disabledGray>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button type="warning" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="warning" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button type="green" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="green" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button type="blue" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="blue" disabled>页面辅助操作 Disabled</tui-button></view>

		<view class="tui-btn-box"><tui-button type="gray" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="gray" disabled>页面辅助操作 Disabled</tui-button></view>

		<view class="tui-btn-box"><tui-button type="black" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="black" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-title">空心按钮</view>
		<view class="tui-btn-box"><tui-button plain @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button plain disabled loading @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="danger" plain @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="danger" plain link @click="detail">页面辅助操作 link</tui-button></view>
		<view class="tui-btn-box"><tui-button type="danger" plain disabled loading>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button type="warning" plain @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="warning" plain link @click="detail">页面辅助操作 link</tui-button></view>
		<view class="tui-btn-box"><tui-button type="warning" plain disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button type="green" plain @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="green" plain disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button type="black" plain @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button type="black" plain disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-title">圆角按钮</view>
		<view class="tui-btn-box"><tui-button shape="circle" @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" disabled loading @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" disabled loading disabledGray>禁用背景为灰色</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="white" @click="detail">页面次要操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="white" disabled loading>页面次要操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="danger" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="danger" disabled loading>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="danger" disabled loading disabledGray>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="warning" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="warning" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="green" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="green" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="blue" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="blue" disabled>页面辅助操作 Disabled</tui-button></view>

		<view class="tui-btn-box"><tui-button shape="circle" type="gray" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="gray" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="black" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="black" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-title">平角按钮</view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" disabled loading @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" disabled loading disabledGray>禁用背景为灰色</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="white" @click="detail">页面次要操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="white" disabled loading>页面次要操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="danger" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="danger" disabled loading>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="danger" disabled loading disabledGray>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="warning" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="warning" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="green" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shape="rightAngle" type="green" disabled>页面辅助操作 Disabled</tui-button></view>

		<view class="tui-title">带阴影按钮</view>

		<view class="tui-btn-box"><tui-button shadow @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shadow disabled loading @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shadow type="danger" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shadow type="danger" disabled loading>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shadow type="warning" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shadow type="warning" disabled>页面辅助操作 Disabled</tui-button></view>
		<view class="tui-btn-box"><tui-button shadow type="green" @click="detail">页面辅助操作</tui-button></view>
		<view class="tui-btn-box"><tui-button shadow type="green" disabled>页面辅助操作 Disabled</tui-button></view>
	
		<view class="tui-title">扩展色</view>
		<view class="tui-btn-box"><tui-button bold type="gray-primary" @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button bold type="gray-green" @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button bold type="gray-danger" @click="detail">页面主操作</tui-button></view>
		<view class="tui-btn-box"><tui-button bold type="gray-warning" @click="detail">页面主操作</tui-button></view>
		<view class="tui-title">按钮大小：medium/ small/ mini</view>
		<view class="tui-btn-box"><tui-button btn-size="medium"  @click="detail">medium</tui-button></view>
		<view class="tui-btn-box"><tui-button btn-size="small"  @click="detail">small</tui-button></view>
		<view class="tui-btn-box"><tui-button btn-size="mini" :size="26" @click="detail">mini</tui-button></view>
		
		<view class="tui-title">自定义尺寸按钮</view>

		<view class="tui-flex-box">
			<tui-button margin="0 20rpx 26rpx 0" width="280rpx" height="90rpx" :size="32" @click="detail">页面主操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="danger" width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" shape="circle" width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" plain width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" plain shape="circle" width="280rpx" height="90rpx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" width="200rpx" height="80rpx" :size="28" @click="detail">页面主操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="danger" width="200rpx" height="80rpx" :size="28" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" width="200rpx" height="80rpx" :size="28" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" width="160rpx" height="70rpx" :size="24" @click="detail">160*70</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="danger" width="160rpx" height="70rpx" :size="24" @click="detail">160*70</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" width="160rpx" height="70rpx" :size="24" @click="detail">160*70</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" width="140rpx" height="60rpx" :size="24" @click="detail">140*60</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="danger" width="140rpx" height="60rpx" :size="24" @click="detail">140*60</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" width="140rpx" height="60rpx" :size="24" @click="detail">140*60</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" width="100rpx" height="50rpx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="danger" width="100rpx" height="50rpx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" width="100rpx" height="50rpx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" shape="circle" width="100rpx" height="50rpx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" plain width="100rpx" height="50rpx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" plain shape="circle" width="100rpx" height="50rpx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" plain shape="rightAngle" width="100rpx" height="50rpx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20rpx 26rpx 0" type="green" shadow width="100rpx" height="50rpx" :size="24" @click="detail">small</tui-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		detail: function() {
			console.log('click~');
			this.tui.toast('click~');
		}
	}
};
</script>

<style>
.container {
	padding: 20rpx 30rpx 40rpx 30rpx;
	box-sizing: border-box;
}

.tui-title {
	padding: 30rpx 0;
	font-size: 32rpx;
	color: #333;
	font-weight: bold;
}

.tui-btn-box {
	margin-bottom: 26rpx;
}

.tui-flex-box {
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
</style>
