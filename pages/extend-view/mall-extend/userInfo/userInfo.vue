<template>
	<view class="tui-userinfo-box">
		<tui-list-cell padding="0" :arrow="true">
			<view class="tui-list-cell">
				<view>头像</view>
				<image src="/static/images/my/mine_def_touxiang_3x.png" class="tui-avatar"></image>
			</view>
		</tui-list-cell>
		<tui-list-cell padding="0" :hover="false">
			<view class="tui-list-cell tui-pr30">
				<view>用户名</view>
				<view class="tui-content">ThorUI</view>
			</view>
		</tui-list-cell>
		<tui-list-cell padding="0" :arrow="true">
			<view class="tui-list-cell">
				<view>昵称</view>
				<view class="tui-content">echo.</view>
			</view>
		</tui-list-cell>
		<tui-list-cell padding="0" :arrow="true">
			<view class="tui-list-cell">
				<view>性别</view>
				<view class="tui-content">男</view>
			</view>
		</tui-list-cell>
		<tui-list-cell padding="0" :arrow="true" :last="true" >
			<view class="tui-list-cell">
				<view>出生日期</view>
				<view class="tui-content">1986-09-27</view>
			</view>
		</tui-list-cell>
	</view>
</template>

<script>
	import tuiListCell from "@/components/list-cell/list-cell"
	export default {
		components: {
			tuiListCell
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style>
	.tui-userinfo-box {
		padding-bottom: 20rpx;
		color: #333;
	}

	.tui-list-cell {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 60rpx 24rpx 30rpx;
		font-size: 30rpx;
	}

	.tui-pr30 {
		padding-right: 30rpx;
	}

	.tui-avatar {
		width: 100rpx;
		height: 100rpx;
		display: block;
	}

	.tui-content {
		font-size: 26rpx;
		color: #666;
	}
</style>
