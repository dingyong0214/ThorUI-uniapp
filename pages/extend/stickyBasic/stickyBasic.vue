<template>
	<view class="container">
		<view class="tui-title">
			基本用法
		</view>
		<tui-sticky :scrollTop="scrollTop" stickyHeight="80rpx">
			<template v-slot:header>
				<view class="tui-tag">基本用法</view>
			</template>
		</tui-sticky>

		<view class="tui-title">
			吸顶距离
		</view>
		<tui-sticky :scrollTop="scrollTop" :stickyTop="stickyTop" stickyHeight="80rpx">
			<template v-slot:header>
				<view class="tui-center">
					<view class="tui-tag tui-green">吸顶距离</view>
				</view>
			</template>
		</tui-sticky>

		<view class="tui-title">
			指定容器
		</view>
		<tui-sticky :scrollTop="scrollTop" stickyHeight="80rpx" container>
			<template v-slot:header>
				<view class="tui-right">
					<view class="tui-tag tui-danger">指定容器</view>
				</view>
			</template>
			<template v-slot:content>
				<view class="tui-box">
					容器内容
				</view>
			</template>
		</tui-sticky>
		<view style="height: 800px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				stickyTop: uni.upx2px(80)
			}
		},
		onLoad() {
			// #ifdef H5
			this.stickyTop += 44;
			// #endif
		},
		methods: {

		},
		//页面滚动执行方式
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style>
	.tui-title {
		padding: 50rpx 30rpx 30rpx;
		color: #2C405A;
	}

	.tui-tag {
		width: 200rpx;
		height: 80rpx;
		margin-left: 30rpx;
		background-color: #5677fc;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6rpx;
	}

	.tui-green {
		background-color: #19be6b !important;
	}

	.tui-danger {
		background-color: #EB0909 !important;
	}

	.tui-center {
		display: flex;
		justify-content: center;
	}

	.tui-right {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-end;
	}

	.tui-box {
		width: 100%;
		height: 300rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
	}
</style>
