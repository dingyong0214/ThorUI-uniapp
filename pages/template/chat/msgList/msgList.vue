<template>
	<view class="container">
		<!--tabbar-->
		<view class="tui-tabbar">
			<block v-for="(item,index) in tabbar" :key="index">
				<view class="tui-tabbar-item" :class="[current==index?'tui-item-active':'']" :data-index="index" @tap="tabbarSwitch">
					<tui-icon :name="current==index?(item.icon+'-fill'):item.icon" :color="current==index?'#00C0FB':'#666'" :size="item.size"
					 :class="[index==0?'tui-ptop-4':'']"></tui-icon>
					<view class="tui-scale">{{item.text}}</view>
				</view>
			</block>
		</view>
		<!--tabbar-->
		<!--searchbox-->
		<view class="tui-searchbox">
			<view class="tui-search-input" @tap="search">
				<icon type="search" size='15' color='#999'></icon>
				<text class="tui-search-text">搜索</text>
			</view>
		</view>
		<!--searchbox-->

		<block v-for="(item,index) in msgList" :key="index">
			<tui-list-cell @click="detail" :unlined="true">
				<view class="tui-chat-item">
					<view class="tui-msg-box">
						<image :src="'/static/images/news/'+item.pic+'.jpg'" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">{{item.nickname}}</view>
							<view class="tui-msg-content">{{item.msg}}</view>
						</view>
					</view>
					<view class="tui-msg-right" :class="[item.level==3?'tui-right-dot':'']">
						<view class="tui-msg-time">{{item.time}}</view>
						<tui-badge :type="item.level==2?'gray':'danger'" :dot="item.level==3?true:false" v-if="item.msgNum>0">{{item.level!=3?item.msgNum:""}}</tui-badge>
					</view>
				</view>
			</tui-list-cell>
		</block>
		<view class="tui-safearea-bottom"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabbar: [{
					icon: "community",
					text: "消息",
					size: 24
				}, {
					icon: "people",
					text: "联系人",
					size: 24
				}, {
					icon: "explore",
					text: "发现",
					size: 24
				}],
				msgList: [{
					nickname: "波动星球",
					pic: "avatar_1",
					msg: "兰家双臂初长成！",
					msgNum: 2,
					time: "10:22",
					level: 1
				}, {
					nickname: "Thorui看点",
					pic: "avatar_2",
					msg: "thorui商城模板即将上线，功能完善中！",
					msgNum: 2,
					time: "13:27",
					level: 3
				}, {
					nickname: "技术交流群",
					pic: "4",
					msg: "[图片]",
					msgNum: 18,
					time: "12:27",
					level: 1
				}, {
					nickname: "技术交流2群",
					pic: "2",
					msg: "[视频]",
					msgNum: 98,
					time: "10:27",
					level: 2
				}, {
					nickname: "陈永华",
					pic: "avatar_1",
					msg: "对方已同意你的好友请求",
					msgNum: 2,
					time: "10:27",
					level: 1
				}, {
					nickname: "尚高旭",
					pic: "avatar_2",
					msg: "晚上一起吃个饭！",
					msgNum: 0,
					time: "10:27",
					level: 1
				}, {
					nickname: "张新旺",
					pic: "avatar_1",
					msg: "[图片]",
					msgNum: 0,
					time: "10:27",
					level: 1
				}, {
					nickname: "曾少敏",
					pic: "3",
					msg: "对方已同意你的好友请求对方已同意你的好友请求",
					msgNum: 0,
					time: "10:27",
					level: 1
				}, {
					nickname: "波动星球",
					pic: "avatar_1",
					msg: "兰家双臂初长成！",
					msgNum: 2,
					time: "10:22",
					level: 1
				}, {
					nickname: "Thorui看点",
					pic: "avatar_2",
					msg: "thorui商城模板即将上线，功能完善中！",
					msgNum: 2,
					time: "13:27",
					level: 3
				}, {
					nickname: "技术交流群",
					pic: "4",
					msg: "[图片]",
					msgNum: 18,
					time: "12:27",
					level: 1
				}, {
					nickname: "技术交流2群",
					pic: "2",
					msg: "[视频]",
					msgNum: 98,
					time: "10:27",
					level: 2
				}, {
					nickname: "陈永华",
					pic: "avatar_1",
					msg: "对方已同意你的好友请求",
					msgNum: 2,
					time: "10:27",
					level: 1
				}]
			}
		},
		methods: {
			tabbarSwitch: function(e) {
				let index = e.currentTarget.dataset.index;
				this.current = index;
				if (index != 0) {
					if (index == 1) {
						uni.navigateTo({
							url: '../friendList/friendList'
						})
					} else {
						this.tui.toast("功能开发中~")
					}
				}
			},
			search: function() {
				uni.navigateTo({
					url: '../../news/search/search'
				})
			},
			detail: function() {
				uni.navigateTo({
					url: '../chat/chat'
				})
			}
		},
		onPullDownRefresh: function() {
			uni.stopPullDownRefresh();
		}
	}
</script>

<style>
	.container {
		padding-bottom: 100rpx
	}

	/*tabbar*/

	.tui-tabbar {
		width: 100%;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 99999;
		background-color: #fff;
		height: 100rpx;
		left: 0;
		bottom: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	.tui-tabbar::before {
		content: '';
		width: 100%;
		border-top: 1rpx solid #d2d2d2;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-tabbar-item {
		flex: 1;
		width: 25%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		font-size: 24rpx;
		color: #666;
		height: 80rpx;
	}

	.tui-ptop-4 {
		padding-top: 4rpx;
	}

	.tui-scale {
		font-weight: bold;
		transform: scale(0.8);
		transform-origin: center 100%;
		line-height: 30rpx;
	}

	.tui-item-active {
		color: #00c0fb !important;
	}

	/*tabbar*/

	/*searchbox*/

	.tui-searchbox {
		width: 100%;
		height: 100rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.tui-search-input {
		width: 100%;
		height: 72rpx;
		background: #fafafa;
		border-radius: 36rpx;
		font-size: 30rpx;
		color: #A8ABB8;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-search-text {
		padding-left: 16rpx;
	}

	/*searchbox*/

	.tui-chat-item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-msg-box {
		display: flex;
		align-items: center;
	}

	.tui-msg-pic {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		display: block;
		margin-right: 24rpx;
	}

	.tui-msg-item {
		max-width: 500rpx;
		min-height: 80rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tui-msg-name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 34rpx;
		line-height: 1;
		color: #262b3a;
	}

	.tui-msg-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 28rpx;
		line-height: 1;
		color: #9397a4;
	}

	.tui-msg-right {
		max-width: 120rpx;
		height: 88rpx;
		margin-left: auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.tui-msg-right.tui-right-dot {
		height: 76rpx;
		padding-bottom: 10rpx;

	}

	.tui-msg-time {
		width: 100%;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #9397a4;
	}
</style>
