<template>
	<view class="container">
		<view class="tui-cells">
			<textarea class="tui-textarea" name="desc" placeholder="发表你的评论..." maxlength="500" placeholder-class="tui-phcolor-color" auto-focus />
			<view class="tui-textarea-counter">0/500</view>
		</view>
		<view class="tui-enclosure">
			<tui-icon margin="0 40rpx 0 0"  name="satisfied" :size="25"></tui-icon>
			<tui-icon margin="0 40rpx 0 0" name="picture" :size="25"></tui-icon>
			<tui-icon name="link" :size="22"></tui-icon>
		</view>
		<view class="tui-cmt-btn">
			<tui-button shape="circle">发表</tui-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
page {
	background: #fff;
	color: #333;
}
.container {
	padding: 30rpx;
	box-sizing: border-box;
}

.tui-cells {
	border-radius: 4rpx;
	height: 280rpx;
	box-sizing: border-box;
	padding: 20rpx 20rpx 0 20rpx;
	position: relative;
}

.tui-cells::after {
	content: '';
	position: absolute;
	height: 200%;
	width: 200%;
	border: 1px solid #e6e6e6;
	transform-origin: 0 0;
	-webkit-transform-origin: 0 0;
	-webkit-transform: scale(0.5);
	transform: scale(0.5);
	left: 0;
	top: 0;
	border-radius: 8rpx;
	pointer-events: none;
}

.tui-textarea {
	height: 210rpx;
	width: 100%;
	color: #666;
	font-size: 28rpx;
}

.tui-phcolor-color {
	color: #ccc !important;
}

.tui-textarea-counter {
	font-size: 24rpx;
	color: #999;
	text-align: right;
	height: 40rpx;
	line-height: 40rpx;
	padding-top: 4rpx;
}
.tui-enclosure {
	display: flex;
	align-items: center;
	padding: 26rpx 10rpx;
	box-sizing: border-box;
}

.tui-cmt-btn {
	margin-top: 60rpx;
}
</style>
