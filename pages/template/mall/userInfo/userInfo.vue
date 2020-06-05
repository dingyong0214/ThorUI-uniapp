<template>
	<view class="tui-userinfo-box">
		<tui-list-cell padding="0" :arrow="true" @click="changeAvatar">
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
		<tui-list-cell padding="0" :arrow="true" @click="nickname">
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
		<tui-list-cell padding="0" :arrow="true" unlined >
			<view class="tui-list-cell">
				<view>出生日期</view>
				<view class="tui-content">1986-09-27</view>
			</view>
		</tui-list-cell>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			changeAvatar(){
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: res => {
						const tempFilePaths = res.tempFilePaths[0];
						this.tui.href('/pages/extend/cropper-default/cropper-default?src=' + tempFilePaths);
					}
				});
			},
			nickname(){
				this.tui.href("../nickname/nickname")
			}
		}
	}
</script>

<style>
	.tui-userinfo-box {
		margin: 20rpx 0;
		color: #333;
	}

	.tui-list-cell {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 60rpx 24rpx 30rpx;
		box-sizing: border-box;
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
