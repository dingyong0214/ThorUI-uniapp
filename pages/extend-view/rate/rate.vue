<template>
	<view class="container">
		<view class="header">
			<view class="title">Rate</view>
			<view class="sub-title">评分</view>
		</view>
		<view class="tui-rate-box">
			<view class="tui-title"> 基本用法</view>
			<tui-rate :current="current" @change="change"></tui-rate>
		</view>
		<view class="tui-rate-box">
			<view class="tui-title">设置星星数</view>
			<tui-rate :current="index" :quantity="8" @change="change"></tui-rate>
		</view>
		<view class="tui-rate-box">
			<view class="tui-title">设置尺寸大小(缩小)</view>
			<tui-rate :current="index" @change="change" :size="16"></tui-rate>
		</view>
		<view class="tui-rate-box">
			<view class="tui-title">设置尺寸大小(放大)</view>
			<tui-rate :current="index" @change="change" :size="26"></tui-rate>
		</view>
		<view class="tui-rate-box">
			<view class="tui-title"> 设置颜色</view>
			<tui-rate :current="index" @change="change" normal="#ccc" active="#ff7900"></tui-rate>
		</view>
		<view class="tui-rate-box">
			<view class="tui-title">不可点击</view>
			<tui-rate :current="index" @change="change" :disabled="true"></tui-rate>
		</view>
		<view class="tui-rate-box">
			<view class="tui-title">未选中为空心</view>
			<tui-rate :current="index" :hollow="true" @change="change"></tui-rate>
		</view>

	</view>
</template>

<script>
	import tuiRate from "@/components/rate/rate"
	export default {
		components:{
			tuiRate
		},
		data() {
			return {
				loadding: false,
				show: false,
				current: 0,
				index: 3
			}
		},
		methods: {
			change: function(e) {
				this.index = e.index;
				this.current = e.index
			}
		}
	}
</script>

<style>
	.container {
		padding: 20upx 0 120upx 0;
		box-sizing: border-box;
	}

	.header {
		padding: 80upx 90upx 60upx 90upx;
		box-sizing: border-box;
	}

	.title {
		font-size: 34upx;
		color: #333;
		font-weight: 500;
	}

	.sub-title {
		font-size: 24upx;
		color: #7a7a7a;
		padding-top: 18upx;
	}

	.tui-rate-box {
		padding: 40upx;
		box-sizing: border-box;
		margin-bottom: 30upx;
		background: #fff;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-title {
		font-size: 30upx;
	}
</style>
