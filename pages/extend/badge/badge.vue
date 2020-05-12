<template>
	<view class="container">
		<view class="tui-title">无内容</view>
		<view class="tui-flex-box">
			<tui-badge margin="0 40rpx 0 0" dot></tui-badge>
			<tui-badge margin="0 40rpx 0 0" type="warning" dot></tui-badge>
			<tui-badge margin="0 40rpx 0 0" type="green" dot></tui-badge>
			<tui-badge margin="0 40rpx 0 0" type="danger" dot></tui-badge>
			<tui-badge margin="0 40rpx 0 0" type="white" dot></tui-badge>
			<tui-badge margin="0 40rpx 0 0" type="black" dot></tui-badge>
			<tui-badge margin="0 40rpx 0 0" type="gray" dot></tui-badge>
		</view>
		<view class="tui-title">无内容(放大)</view>
		<view class="tui-flex-box">
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="warning" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="green" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="danger" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="white" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="black" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="gray" dot></tui-badge>
			</view>
		</view>
		
		<view class="tui-title">无内容(缩小)</view>
		<view class="tui-flex-box">
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="warning" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="green" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="danger" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="white" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="black" dot></tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="gray" dot></tui-badge>
			</view>
		</view>

		<view class="tui-title">数字角标</view>
		<view class="tui-flex-box">
			<view class="tui-badge-box">
				<tui-badge>1</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge type="warning">2</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge type="green">3</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge type="danger">4</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge type="white">5</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge type="white_red">5</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge type="black">88</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge type="gray">99+</tui-badge>
			</view>
		</view>
		
		<view class="tui-title">数字角标(放大)</view>
		<view class="tui-flex-box">
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2">1</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="warning">2</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="green">3</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="danger">4</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="white">5</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="white_red">5</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="black">88</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="1.2" type="gray">99+</tui-badge>
			</view>
		</view>

        <view class="tui-title">数字角标(缩小)</view>
		<view class="tui-flex-box">
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8">1</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="warning">2</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="green">3</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="danger">4</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="white">5</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="white_red">5</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="black">88</tui-badge>
			</view>
			<view class="tui-badge-box">
				<tui-badge :scaleRatio="0.8" type="gray">99+</tui-badge>
			</view>
		</view>

		<view class="tui-title">绝对定位</view>

		<view class="tui-flex-box">
			<view class="tui-badge-item">
				<tui-icon name="message"></tui-icon>
				<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</tui-badge>
			</view>
			<view class="tui-badge-item">
				<tui-icon name="message"></tui-icon>
				<tui-badge type="red" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</tui-badge>
			</view>
			<view class="tui-badge-item">
				<tui-icon name="message"></tui-icon>
				<tui-badge type="white_red" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</tui-badge>
			</view>
			
			<view class="tui-badge-item">
				<tui-icon name="message"></tui-icon>
				<tui-badge type="danger" dot absolute top="4rpx"></tui-badge>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 20rpx 30rpx 120rpx 30rpx;
		box-sizing: border-box;
	}

	.tui-title {
		padding: 30rpx 0;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
	}

	.tui-flex-box {
		width: 100%;
		display: flex;
		align-items: center;
		padding-bottom: 30rpx;
	}

	.tui-badge-box {
		padding-right: 40rpx;
	}

	.tui-badge-item {
		position: relative;
		margin-right: 80rpx;
	}
</style>
