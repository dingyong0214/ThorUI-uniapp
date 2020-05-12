<template>
	<view class="container">
		<view class="header">
			<view class="title">No Data</view>
			<view class="sub-title">无数据提示：默认居中显示，无操作按钮 </view>
		</view>
		<tui-no-data :fixed="false" imgUrl="/static/images/toast/img_noorder_3x.png">暂无订单</tui-no-data>
		<tui-no-data :fixed="false" imgUrl="/static/images/toast/img_nodata.png">暂无数据</tui-no-data>
		<tui-no-data :fixed="false" imgUrl="/static/images/toast/img_nodata.png"  btnText="去逛逛" @click="extend">您还没有购买任何商品~</tui-no-data>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			extend(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
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

	.tui-btn-box {
		padding: 10rpx 40rpx;
		box-sizing: border-box;
	}
</style>
