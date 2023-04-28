<template>
	<view class="container">
		<tui-section fontWeight="bold" title="Section" descr="标题栏组件，主要用于文章、列表详情等标题展示。"
			padding="80rpx 90rpx 60rpx 90rpx"></tui-section>

		<view class="tui-content">
			<tui-section title="基础使用" descr="基础描述，无背景"></tui-section>
			<tui-section title="不带描述，设置背景" background="#fff" margin="48rpx 0"></tui-section>
			<tui-section title="竖线装饰" is-line background="#fff" margin="48rpx 0"></tui-section>
			<tui-section title="线条宽度/上下间隔调整，末端方形显示" is-line line-width="6" line-cap="square" :lineGap="8"
				line-color="#f74d54" :size="34" font-weight="bold" background="#fff" margin="48rpx 0"></tui-section>
			<tui-section title="线条颜色" is-line line-color="linear-gradient(to bottom,#fff,#19be6b)" :size="34"
				font-weight="bold" background="#fff" margin="48rpx 0"></tui-section>
			<tui-section title="电话号码（插槽使用）" background="#fff" padding="30rpx" margin="48rpx 0">
				<template v-slot:left>
					<image src="/static/images/my/call.png" class="tui-icon"></image>
				</template>
				<view class="tui-right">138****9909</view>
			</tui-section>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20rpx 0 120rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-content {
		padding-top: 32rpx;
	}

	.tui-icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 20rpx;
	}

	.tui-right {
		margin-left: auto;
	}
</style>