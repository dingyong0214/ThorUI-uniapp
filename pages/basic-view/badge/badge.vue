<template>
	<view class="container">
		<view class="title">
			无内容
		</view>
		<view class="flex-box">
			<view class="tui-badge-dot"></view>
			<view class="tui-badge-dot tui-white"></view>
			<view class="tui-badge-class">
				<tui-badge :dot="true" type="black"></tui-badge>
			</view>

			<view class="tui-badge-dot tui-warning"></view>
			<view class="tui-badge-dot tui-green"></view>
			<view class="tui-badge-dot tui-danger"></view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-dot tui-badge-small"></view>
			<view class="tui-badge-dot tui-white tui-badge-small"></view>
			<view class="tui-badge-class">
				<tui-badge :dot="true" type="black" size="small"></tui-badge>
			</view>

			<view class="tui-badge-dot tui-warning tui-badge-small"></view>
			<view class="tui-badge-dot tui-green tui-badge-small"></view>
			<view class="tui-badge-dot tui-danger tui-badge-small"></view>
		</view>
		<view class="title">
			数字角标
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge>7</tui-badge>
			</view>

			<view class="tui-badge">8</view>
			<view class="tui-badge">2</view>
			<view class="tui-badge">3</view>
			<view class="tui-badge">10</view>
			<view class="tui-badge">99+</view>
			<view class="tui-badge">9999+</view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge type="gray">7</tui-badge>
			</view>

			<view class="tui-badge tui-btn-gray">8</view>
			<view class="tui-badge tui-btn-gray">2</view>
			<view class="tui-badge tui-btn-gray">3</view>
			<view class="tui-badge tui-btn-gray">10</view>
			<view class="tui-badge tui-btn-gray">99+</view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge type="warning">7</tui-badge>
			</view>

			<view class="tui-badge tui-warning">8</view>
			<view class="tui-badge tui-warning">2</view>
			<view class="tui-badge tui-warning">3</view>
			<view class="tui-badge tui-warning">10</view>
			<view class="tui-badge tui-warning">99+</view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge type="danger">7</tui-badge>
			</view>

			<view class="tui-badge tui-danger">8</view>
			<view class="tui-badge tui-danger">2</view>
			<view class="tui-badge tui-danger">3</view>
			<view class="tui-badge tui-danger">10</view>
			<view class="tui-badge tui-danger">99+</view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge type="green">7</tui-badge>
			</view>

			<view class="tui-badge tui-green">8</view>
			<view class="tui-badge tui-green">2</view>
			<view class="tui-badge tui-green">3</view>
			<view class="tui-badge tui-green">10</view>
			<view class="tui-badge tui-green">99+</view>
		</view>

		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge size="small">7</tui-badge>
			</view>

			<view class="tui-badge tui-badge-small">8</view>
			<view class="tui-badge tui-badge-small">2</view>
			<view class="tui-badge tui-badge-small">3</view>
			<view class="tui-badge tui-badge-small">10</view>
			<view class="tui-badge tui-badge-small">99+</view>
			<view class="tui-badge tui-badge-small">9999+</view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge size="small" type="gray">7</tui-badge>
			</view>

			<view class="tui-badge tui-btn-gray tui-badge-small">8</view>
			<view class="tui-badge tui-btn-gray tui-badge-small">2</view>
			<view class="tui-badge tui-btn-gray tui-badge-small">3</view>
			<view class="tui-badge tui-btn-gray tui-badge-small">10</view>
			<view class="tui-badge tui-btn-gray tui-badge-small">99+</view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge size="small" type="warning">7</tui-badge>
			</view>
			
			<view class="tui-badge tui-warning tui-badge-small">8</view>
			<view class="tui-badge tui-warning tui-badge-small">2</view>
			<view class="tui-badge tui-warning tui-badge-small">3</view>
			<view class="tui-badge tui-warning tui-badge-small">10</view>
			<view class="tui-badge tui-warning tui-badge-small">99+</view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge size="small" type="danger">7</tui-badge>
			</view>
			
			<view class="tui-badge tui-danger tui-badge-small">8</view>
			<view class="tui-badge tui-danger tui-badge-small">2</view>
			<view class="tui-badge tui-danger tui-badge-small">3</view>
			<view class="tui-badge tui-danger tui-badge-small">10</view>
			<view class="tui-badge tui-danger tui-badge-small">99+</view>
		</view>
		<view class="flex-box">
			<view class="tui-badge-class">
				<tui-badge size="small" type="green">7</tui-badge>
			</view>
			
			<view class="tui-badge tui-green tui-badge-small">8</view>
			<view class="tui-badge tui-green tui-badge-small">2</view>
			<view class="tui-badge tui-green tui-badge-small">3</view>
			<view class="tui-badge tui-green tui-badge-small">10</view>
			<view class="tui-badge tui-green tui-badge-small">99+</view>
		</view>
	</view>
</template>

<script>
	import tuiBadge from "@/components/badge/badge"
	export default {
		components: {
			tuiBadge
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	@import '../../../static/style/thorui.css';

	.container {
		padding: 20upx 30upx 40upx 30upx;
		box-sizing: border-box;
	}

	.title {
		padding: 30upx 0;
		font-size: 32upx;
		color: #333;
		font-weight: bold;
	}

	.tui-badge,
	.tui-badge-small,
	.tui-badge-dot {
		margin-right: 20upx !important;
	}

	.tui-badge-class {
		display:inline-block;
		margin-right: 20upx !important;
	}

	.flex-box {
		width: 100%;
		margin-bottom: 36upx;
		display: flex;
		align-items: center;
	}
</style>
