<template>
	<view class="container">
		<view class="title">
			主色
		</view>
		<view class="box">
			<view class="item tui-primary">
				<view>primary</view>
				<view class="color">#5677fc</view>
			</view>
			<view class="item tui-light-primary">
				<view>light primary</view>
				<view class="color">#5c8dff</view>
			</view>
			<view class="item tui-dark-primary">
				<view>dark primary</view>
				<view class="color">#4a67d6</view>
			</view>
			<view class="item tui-dLight-primary">
				<view>dark light primary</view>
				<view class="color">#4e77d9</view>
			</view>
		</view>
		<view class="title">
			辅助色
		</view>
		<view class="box">
			<view class="item tui-danger">
				<view>danger</view>
				<view class="color">#ed3f14</view>
			</view>
			<view class="item tui-warning">
				<view>warning</view>
				<view class="color">#ff7900</view>
			</view>
			<view class="item tui-blue">
				<view>blue</view>
				<view class="color">#007AFF</view>
			</view>
			<view class="item tui-green">
				<view>green</view>
				<view class="color">#19be6b</view>
			</view>
			<view class="item tui-black">
				<view>black</view>
				<view class="color">#000000</view>
			</view>
			<view class="item gray tui-white">
				<view>white</view>
				<view class="color">#ffffff</view>
			</view>
			<view class="item tui-translucent">
				<view>translucent</view>
				<view class="color">rgba(0,0,0,0.7)</view>
			</view>
		</view>
		<view class="title">
			中性色
		</view>
		<view class="box">
			<view class="item tui-light-black">
				<view>light black</view>
				<view class="color">#333333</view>
			</view>
			<view class="item tui-gray">
				<view>gray</view>
				<view class="color">#80848f</view>
			</view>
			<view class="item gray tui-phcolor-gray">
				<view>placeholder gray</view>
				<view class="color">#cccccc</view>
			</view>
			<view class="item gray tui-divider-gray">
				<view>divider gray</view>
				<view class="color">#eaeef1</view>
			</view>
			<view class="item gray tui-btn-gray">
				<view>button gray</view>
				<view class="color">#ededed</view>
			</view>
		</view>
		<view class="title">
			浅淡色
		</view>
		<view class="box">
			<view class="item tui-light-blue">
				<view>light blue</view>
				<view class="color">#ecf6fd</view>
			</view>
			<view class="item tui-light-brownish">
				<view>light brownish</view>
				<view class="color">#fcebef</view>
			</view>
			<view class="item tui-light-orange">
				<view>light orange</view>
				<view class="color">#fef5eb</view>
			</view>
			<view class="item tui-light-green">
				<view>light green</view>
				<view class="color">#e8f6e8</view>
			</view>
			<view class="item gray tui-hover-gray">
				<view>hover gray</view>
				<view class="color">#f7f7f9</view>
			</view>
			<view class="item gray tui-bg-gray">
				<view>background gray</view>
				<view class="color">#fafafa</view>
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

<style>
	@import '../../../static/style/thorui.css';

	.container {
		padding: 30rpx;
		box-sizing: border-box;
	}

	.title {
		padding: 30rpx 0;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
	}

	.box {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.item {
		width: 48%;
		padding: 30rpx 24rpx;
		box-sizing: border-box;
		border-radius: 8rpx;
		color: #fff;
		margin-bottom: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 30rpx;
	}

	.color {
		padding-top: 24rpx;
	}

	.gray {
		color: #999 !important;
	}
</style>