<template>
	<view class="container">
		<view class="header">
			<view class="title">Rate</view>
			<view class="sub-title">评分：可设置大小颜色，支持半星，支持手势touch选择。</view>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title"> 基本用法</view>
			<tui-rate :current="current" @change="change"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">设置星星数</view>
			<tui-rate :current="index" :quantity="8" @change="change"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">设置尺寸大小(缩小)</view>
			<tui-rate :current="index" @change="change" :size="16"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">设置尺寸大小(放大)</view>
			<tui-rate :current="index" @change="change" :size="26"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title"> 设置颜色</view>
			<tui-rate :current="index" @change="change" normal="#ccc" active="#ff7900"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">未选中为空心</view>
			<tui-rate :current="index" :hollow="true" @change="change"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">不可点击</view>
			<tui-rate :current="index" @change="change" :disabled="true"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">不可点击(3.45星)</view>
			<tui-rate :current="4" :disabled="true" :score="0.45"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">不可点击(3星半)</view>
			<tui-rate :current="4" :disabled="true" :score="0.5"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">不可点击(3.55星)</view>
			<tui-rate :current="4" :disabled="true" :score="0.55"></tui-rate>
		</view>
		<view class="tui-rate-container">
			<view class="tui-title">不可点击(3.6星)</view>
			<tui-rate :current="4" active="#ff7900" :hollow="true" :disabled="true" :score="0.6"></tui-rate>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				index: 3
			}
		},
		onLoad() {
		},
		methods: {
			change: function(e) {
				this.index = e.index;
				this.current = e.index
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 20rpx 0 120rpx 0;
		box-sizing: border-box;
	}

	.header {
		padding: 80rpx 90rpx 60rpx 90rpx;
		box-sizing: border-box;
	}

	.title {
		font-size: 34rpx;
		color: #333;
		font-weight: 500;
	}

	.sub-title {
		font-size: 24rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.tui-rate-container {
		padding: 40rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		background: #fff;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-title {
		font-size: 30rpx;
	}
</style>