<template>
	<view class="container">
		<view class="header">
			<view class="tui-tips">保留基础组件button,扩展新增阴影效果，可设置任意大小</view>
		</view>
		<view class="tui-title">block按钮</view>
		<!--button 按钮-->
		<view class="tui-btm">
			<tui-button>primary</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button :disabled="true" :loading="true">加载中...</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button :shadow="true">primary加阴影</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger">danger</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" :disabled="true">禁用状态</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" :shadow="true">danger加阴影</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="green">green</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="warning">warning</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="blue">blue</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="white">white</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="gray">gray</tui-button>
		</view>
		<view class="tui-title">圆角按钮</view>
		<view class="tui-btm">
			<tui-button shape="circle" type="warning">warning</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button shape="circle" :shadow="true" type="warning">warning加阴影</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="green" shape="circle">green</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="green" :shadow="true" shape="circle">green加阴影</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="blue" shape="circle">blue</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="blue" :shadow="true" shape="circle">blue加阴影</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="gray" shape="circle">gray</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="gray" :shadow="true" shape="circle">gray加阴影</tui-button>
		</view>

		<view class="tui-title">镂空按钮</view>
		<view class="tui-btm">
			<tui-button :plain="true" type="green">green</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" :plain="true">danger</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button shape="circle" :plain="true" type="green">green</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" shape="circle" :plain="true">danger</tui-button>
		</view>

		<view class="tui-title">控制按钮大小 或 字体大小</view>
		<view class="tui-btm">
			<tui-button type="danger" width="300rpx" height="80rpx" :size="30">小按钮</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" width="200rpx" height="60rpx" :size="26">小按钮</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" width="200rpx" height="60rpx" :size="26" :plain="true">小按钮</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" width="94rpx" height="40rpx" :size="24" :plain="true">小按钮</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" width="94rpx" height="40rpx" :size="24" >小按钮</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" width="130rpx" height="50rpx" :size="24">立即抢购</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" width="146rpx" height="60rpx" :size="28">立即抢购</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" :disabled="true" width="146rpx" height="60rpx" :size="28">已售罄</tui-button>
		</view>

		<view class="tui-title">无圆角</view>
		<view class="tui-btm">
			<tui-button type="green" height="98rpx" shape="rightAngle">
				<text class="tui-btn-time">08:00</text>
				<text>开抢, 已设提醒</text>
			</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="warning" height="98rpx" shape="rightAngle">开抢, 已设提醒</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="gray" :disabled="true" height="98rpx" shape="rightAngle">活动已结束</tui-button>
		</view>
		<view class="tui-btm">
			<tui-button type="danger" height="98rpx" shape="rightAngle">立即抢购</tui-button>
		</view>

	</view>

</template>

<script>
	import tuiButton from "@/components/extend/button/button"
	export default {
		components: {
			tuiButton
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style>
	.container {
		padding: 20rpx 0 120rpx 0;
		box-sizing: border-box;
	}

	.header {
		padding: 60rpx 90rpx 60rpx 90rpx;
		box-sizing: border-box;
	}


	.tui-tips {
		font-size: 24rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.tui-title {
		padding: 30rpx 25rpx;
		font-size: 32rpx;
		font-weight: bold;
		box-sizing: border-box;
	}

	.container {
		padding: 40rpx 0 100rpx 0;
	}

	.tui-btm {
		margin-bottom: 20rpx;
		padding: 0 25rpx;
	}
</style>
