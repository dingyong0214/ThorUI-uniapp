<template>
	<view class="container">
		<view class="tui-text tui-size-28 tui-bold">您的设备未启用移动网络或 Wi-Fi 网络</view>
		<view class="tui-text tui-ptop-24">如需要连接到互联网，可以参照以下方法：</view>
		<view class="tui-text tui-ptop-8">在设备的「<text class="tui-bold">设置</text>」-「<text class="tui-bold">无线局域网</text>」设置面板中选择一个可用的 Wi-Fi 热点接入。</view>
		<view class="tui-text">在设备的「<text class="tui-bold">设置</text>」-「<text class="tui-bold">蜂窝移动网络</text>」-「<text class="tui-bold">使用无线局域网与蜂窝移动的应用</text>」中找到米盘，启用<text class="tui-bold">蜂窝数据</text>（启用后运营商可能会收取数据通信费用）。</view>
	    <view class="tui-text tui-ptop-24">如果您已接入 Wi-Fi 网络：</view>
		 <view class="tui-text tui-ptop-8">请检查您所连接的 Wi-Fi 热点是否已接入互联网，或该热点是否已允许您的设备访问互联网。</view>
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

<style lang="scss">
.container {
	width: 100%;
	padding: $uni-spacing-row-lg;
	box-sizing: border-box;
	.tui-text {
		font-size: $uni-font-size-sm;
		// text-indent: 2em;
		color: $uni-text-color;
		padding-bottom: $uni-spacing-col-sm;
		text-align: justify;
	}
	.tui-size-28{
		font-size: $uni-font-size-base;
	}
	.tui-bold {
		font-weight: bold;
	}
	.tui-ptop-8{
		padding-top: $uni-spacing-col-sm;
	}
	.tui-ptop-24{
		padding-top: $uni-spacing-col-lg;
	}
}
</style>