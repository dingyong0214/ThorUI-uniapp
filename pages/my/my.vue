<template>
	<!--pages/my/my.wxml-->
	<view class='container'>
		<view class='top-container'>
			<image class='bg-img' src='../../static/images/my/mine_bg_3x.png'></image>
			<view @tap='logout' class='logout' hover-class="opcity" :hover-stay-time="150">
				<image class='logout-img' src='../../static/images/my/icon_out_3x.png' v-show='isLogin'></image>
				<text class='logout-txt' v-show='isLogin'>退出</text>
			</view>
			<view v-show="!isLogin" class='user-wrapper'>
				<navigator url='../login/login' hover-class="opcity" :hover-stay-time="150" class='user'>
					<image class='avatar-img' src='../../static/images/my/mine_def_touxiang_3x.png'></image>
					<text class='user-info-mobile'>请登录</text>
				</navigator>
			</view>
			<view v-show='isLogin' class='user'>
				<image class='avatar-img' src='../../static/images/my/mine_def_touxiang_3x.png'></image>
				<view class='user-info-mobile'>
					<text>{{mobile}}</text>
					<view class='edit-img' hover-class="opcity" :hover-stay-time="150" @tap="edit">
						<image src='../../static/images/my/mine_icon_bianji_3x.png'></image>
					</view>
				</view>
			</view>
		</view>

		<view class='middle-container'>
			<view data-url='../myWashTicket/myWashTicket' @tap='tapEvent' data-index="1" class='middle-item' hover-class="opcity"
			 :hover-stay-time="150">
				<image class='ticket-img' src='../../static/images/my/thorui.png'></image>
				<text class='middle-tag'>Thor UI</text>
			</view>
			<!-- #ifdef APP-PLUS || MP -->
			<view @tap='github(1)' class='middle-item' hover-class="opcity" :hover-stay-time="150">
				<image class='car-img' src='../../static/images/my/github_3x.png'></image>
				<text class='middle-tag'>GitHub</text>
			</view>
			<!-- #endif -->

			<!-- #ifdef H5 -->
			<view @tap='github(2)' class='middle-item' hover-class="opcity" :hover-stay-time="150">
				<image class='car-img' src='../../static/images/my/github_3x.png'></image>
				<text class='middle-tag'>GitHub</text>
			</view>
			<!-- #endif -->
		</view>

		<view class='bottom-container'>
			<view class='ul-item'>
				<view @tap='tapEvent' data-index="2" data-key='加油站' class='item' hover-class="opcity" :hover-stay-time="150">
					<image class='item-img' src='../../static/images/my/mine_icon_jiayouzhan_3x.png'></image>
					<text class='item-name'>加油站</text>
				</view>
				<view @tap='tapEvent' data-index="2" data-key='停车场' class='item' hover-class="opcity" :hover-stay-time="150">
					<image class='item-img' src='../../static/images/my/mine_icon_tingche_3x.png'></image>
					<text class='item-name'>停车场</text>
				</view>
				<view @tap='tapEvent' data-index="2" data-key='充电桩' class='item' hover-class="opcity" :hover-stay-time="150">
					<image class='item-img' src='../../static/images/my/mine_icon_chongdian_3x.png'></image>
					<text class='item-name'>充电桩</text>
				</view>
			</view>
			<view class='ul-item'>
				<view @tap='previewReward' class='item' hover-class="opcity" :hover-stay-time="150">
					<image class='item-img' src='../../static/images/my/reward.png'></image>
					<text class='item-name'>赞赏</text>
				</view>
				<view class='item' hover-class="opcity" :hover-stay-time="150">
					<button open-type="feedback" class="btn-feedback"> </button>
					<image class='item-img' src='../../static/images/my/feedback.png'></image>
					<text class='item-name'>反馈</text>

				</view>
				<view @tap='tapEvent' data-index="3" class='item' hover-class="opcity" :hover-stay-time="150">
					<image class='item-img' src='../../static/images/my/log.png'></image>
					<text class='item-name'>日志</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		computed: mapState(['isLogin', 'mobile']),
		data() {
			return {}
		},
		onShow: function() {},
		methods: {
			logout: function() {
				uni.showModal({
					title: '提示',
					content: '确定退出登录？',
					confirmColor: '#5677FC',
					success: (res) => {
						if (res.confirm) {
							uni.clearStorage()
							uni.reLaunch({
								url: '../login/login'
							})
						}
					}
				});
			},
			edit() {
				this.tui.toast("功能开发中~")
			},
			tapEvent: function(e) {
				let index = e.currentTarget.dataset.index;
				let url = "";
				if (index == 1) {
					url = '../about/about'
				} else if (index == 2) {
					let key = e.currentTarget.dataset.key;
					url = '../maps/maps?key=' + key
					// #ifdef MP-ALIPAY
					 this.tui.toast("功能开发中~");
					 return
					// #endif
				} else {
					url = '../log/log'
				}
				uni.navigateTo({
					url: url
				})
			},
			github: function(type) {
				if (type == 1) {
					const that = this
					uni.setClipboardData({
						data: 'https://github.com/dingyong0214/ThorUI-uniapp',
						success(res) {
							uni.getClipboardData({
								success(res) {
									that.tui.toast("链接已复制", 2000, true)
								}
							})
						}
					})
				} else {
					// #ifdef H5
					location.href = "https://github.com/dingyong0214/ThorUI-uniapp"
					// #endif
				}
			},
			previewReward: function() {
				uni.previewImage({
					urls: ["https://thorui.cn/img/reward.jpg"]
				})
			}
		}
	}
</script>

<style>
	/* pages/my/my.wxss */
	.container {
		position: relative;
	}

	.top-container {
		height: 440rpx;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.bg-img {
		position: absolute;
		width: 100%;
		height: 440rpx;
	}

	.logout {
		width: 110rpx;
		height: 36rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 42rpx 0 24rpx 32rpx;
		position: relative;
		z-index: 2;
	}

	.logout-img {
		width: 36rpx;
		height: 36rpx;
		margin-right: 11rpx;
	}

	.logout-txt {
		font-size: 28rpx;
		color: #FEFEFE;
		line-height: 28rpx;
	}

	.user-wrapper {
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 2;
	}

	.user {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		z-index: 2;
	}

	.avatar-img {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		align-self: center;
	}

	.user-info {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
		align-items: center;
	}

	.user-info-mobile {
		margin-top: 30rpx;
		position: relative;
		font-size: 28rpx;
		color: #FEFEFE;
		line-height: 28rpx;
		align-self: center;
		padding: 0 50rpx;
	}

	.edit-img {
		position: absolute;
		width: 42rpx;
		height: 42rpx;
		right: 0;
		bottom: -4rpx;
	}

	.edit-img>image {
		width: 42rpx;
		height: 42rpx;
		padding-left: 25rpx;
	}

	.middle-container {
		height: 138rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		margin: -30rpx 30rpx 26rpx 30rpx;
		box-shadow: 0 15rpx 10rpx -15rpx #efefef;
		position: relative;
		z-index: 2;

	}

	.middle-item {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.ticket-img {
		width: 80rpx;
		height: 80rpx;
		margin-left: 65rpx;
	}

	.middle-tag {
		font-size: 28rpx;
		color: #333333;
		line-height: 28rpx;
		font-weight: bold;
		padding-left: 22rpx;
	}

	.car-img {
		width: 80rpx;
		height: 80rpx;
		margin-left: 97rpx;
	}

	.bottom-container {
		height: 334rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40rpx 74rpx 40rpx 95rpx;
		margin: 0 30rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		box-sizing: border-box;
		box-shadow: 0 0 10rpx #efefef
	}

	.ul-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.item-img {
		width: 64rpx;
		height: 64rpx;
	}

	.item-name {
		padding-top: 13rpx;
		font-size: 24rpx;
		color: #666666;
		min-width: 80rpx;
		text-align: center;
	}

	.btn-feedback {
		background: transparent !important;
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
	}

</style>
