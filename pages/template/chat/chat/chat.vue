<template>
	<view class="container">
		<!--tabbar-->

		<!--tabbar-->
		<view class="tui-chat-content">
			<tui-loadmore v-if="loadding" :index="3" type="primary" text=" "></tui-loadmore>
			<view v-show="show">
				<view class="tui-label">对方已通过您的好友请求</view>
				<view class="tui-chat-center">星期四 11:02</view>
				<view class="tui-chat-right">
					<view class="tui-chatbox tui-chatbox-right">哈喽~，欢迎关注Thor UI！</view>
					<image src="/static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
				</view>
				<view class="tui-chat-left">
					<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
					<view class="tui-chatbox tui-chatbox-left">哈喽~，欢迎关注Thor UI！</view>
				</view>
				<view class="tui-chat-left">
					<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
					<view class="tui-img-chatbox"><image src="/static/images/news/avatar_2.jpg" class="tui-chat-img" mode="widthFix"></image></view>
				</view>
				<view class="tui-chat-right">
					<view class="tui-chatbox tui-chatbox-right">哈喽~，欢迎关注Thor UI！</view>
					<image src="/static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
				</view>
				<view class="tui-chat-left">
					<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
					<view class="tui-chatbox tui-chatbox-left">哈喽~，欢迎关注Thor UI！</view>
				</view>
				<view class="tui-chat-left">
					<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
					<view class="tui-img-chatbox"><image src="/static/images/news/avatar_2.jpg" class="tui-chat-img" mode="widthFix"></image></view>
				</view>
			</view>


			<view class="tui-chat-center">星期四 11:02</view>
			<view class="tui-chat-left">
				<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-chatbox tui-chatbox-left">哈喽~，欢迎关注Thor UI！</view>
			</view>
			<view class="tui-chat-center">星期五 12:09</view>
			<view class="tui-chat-right">
				<view class="tui-chatbox tui-chatbox-right">哈喽~，欢迎关注Thor UI！ 请说出您想加入或者优化的功能！</view>
				<image src="/static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
			</view>
			<view class="tui-chat-right">
				<view class="tui-chatbox tui-chatbox-right">哈喽~，欢迎关注Thor UI！</view>
				<image src="/static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
			</view>
			<view class="tui-chat-left">
				<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-chatbox tui-chatbox-left">哈喽~，欢迎关注Thor UI！</view>
			</view>
			<view class="tui-chat-left">
				<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-img-chatbox"><image src="/static/images/news/avatar_2.jpg" class="tui-chat-img" mode="widthFix"></image></view>
			</view>
			<view class="tui-chat-left">
				<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-img-chatbox"><image src="/static/images/news/banner_2.jpg" class="tui-chat-img" mode="widthFix"></image></view>
			</view>
			<view class="tui-chat-left">
				<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-flex-center">
					<view class="tui-chatbox tui-chatbox-left tui-chat-flex tui-mr">
						<image src="/static/images/chat/voice.png" class="tui-chat-voice tui-mr"></image>
						<view>8"</view>
					</view>
					<tui-badge :dot="true" type="danger"></tui-badge>
				</view>
			</view>
			<view class="tui-chat-left">
				<image src="/static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-flex-center">
					<view class="tui-chatbox tui-chatbox-left tui-chat-flex tui-mr">
						<image src="/static/images/chat/voice.png" class="tui-chat-voice tui-mr"></image>
						<view style="width:300rpx">20"</view>
					</view>
					<tui-badge :dot="true" type="danger"></tui-badge>
				</view>
			</view>

			<view class="tui-chat-right">
				<view class="tui-flex-center tui-flex-end">
					<tui-badge :dot="true" type="danger"></tui-badge>
					<view class="tui-chatbox tui-chatbox-right tui-chat-flex tui-ml tui-flex-reverse">
						<image src="/static/images/chat/voice.png" class="tui-chat-voice tui-rotate tui-ml"></image>
						<view style="width:280rpx;text-align:right">18"</view>
					</view>
				</view>
				<image src="/static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
			</view>

			<view class="tui-chat-right">
				<view class="tui-flex-center tui-flex-end tui-flex-reverse">
					<view class="tui-img-chatbox"><image src="/static/images/news/avatar_1.jpg" class="tui-chat-img" mode="widthFix"></image></view>
					<image src="/static/images/chat/fail.png" class="tui-chat-fail tui-mr"></image>
				</view>
				<image src="/static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
			</view>
		</view>
		<t-chat-bar></t-chat-bar>
		<view class="tui-safearea-bottom"></view>
	</view>
</template>

<script>
import tChatBar from '@/components/views/t-chat-bar/t-chat-bar';
export default {
	components: {
		tChatBar
	},
	data() {
		return {
			loadding: false,
			show: false,
			bottom: 0,
			myUserId: 2,
			chatList: [
				{
					type: 1, //1-文字 2-图片 3-语音，4-时间 5-提醒 ...
					userId: 1, //用户标识 不一定是userid
					text: '',
					src: '',
					read: false,
					success: false
				}
			]
		};
	},
	onLoad: function(options) {},
	methods: {},
	onPageScroll(e) {
		if (e.scrollTop == 0 && !this.loadding) {
			this.loadding = true;
			setTimeout(() => {
				this.show = true;
				this.loadding = false;
			}, 1000);
		}
	}
};
</script>

<style>
.container {
	padding-left: 20rpx;
	padding-right: 20rpx;
	padding-bottom: 146rpx;
	box-sizing: border-box;
}

/*chatbox*/
.tui-chat-content {
	width: 100%;
}

.tui-chatbox {
	max-width: 66%;
	border-radius: 10rpx;
	position: relative;
	padding: 20rpx 22rpx;
	font-size: 32rpx;
	color: #333;
	word-break: break-all;
	word-wrap: break-word;
}

.tui-chatbox::before {
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	top: 20rpx;
	border: 16rpx solid;
}

.tui-chatbox-left {
	background: #fff;
	border: 1rpx solid #fff;
	display: inline-block;
}

.tui-chatbox-left::before {
	right: 100%;
	border-color: transparent #fff transparent transparent;
}

.tui-chatbox-right {
	background: #a0d5f3;
	border: 1rpx solid #a0d5f3;
}

.tui-chatbox-right::before {
	left: 100%;
	border-color: transparent transparent transparent #a0d5f3;
}

/*chatbox*/

.tui-chat-left,
.tui-chat-right {
	display: flex;
	align-items: flex-start;
	padding-top: 36rpx;
}

.tui-user-pic {
	width: 80rpx;
	height: 80rpx;
	flex-shrink: 0;
	border-radius: 50%;
	display: block;
}

.tui-left {
	margin-left: 26rpx;
}

.tui-right {
	margin-right: 26rpx;
}

.tui-chat-right {
	justify-content: flex-end;
}

.tui-chat-center {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 28rpx;
	font-size: 28rpx;
	color: #666;
	padding-top: 36rpx;
}

.tui-label {
	display: inline-block;
	background: rgba(0, 0, 0, 0.4);
	color: #fff;
	font-size: 24rpx;
	line-height: 24rpx;
	margin-top: 36rpx;
	padding: 12rpx 16rpx;
	text-align: center;
	border-radius: 8rpx;
	margin-left: 50%;
	transform: translateX(-50%);
}

.tui-img-chatbox {
	position: relative;
}

.tui-img-chatbox::after {
	content: '';
	position: absolute;
	height: 200%;
	width: 200%;
	border: 1rpx solid #eaeef1;
	transform-origin: 0 0;
	-webkit-transform-origin: 0 0;
	-webkit-transform: scale(0.5);
	transform: scale(0.5);
	left: 0;
	top: 0;
	border-radius: 20rpx;
}

.tui-chat-img {
	max-width: 200rpx;
	/* min-height: 80rpx; */
	display: block;
	border-radius: 10rpx;
}

.tui-chat-flex {
	display: flex;
	align-items: center;
}

.tui-flex-center {
	display: flex;
	align-items: center;
}

.tui-chat-voice {
	width: 40rpx;
	height: 40rpx;
	display: block;
	flex-shrink: 0;
}

.tui-rotate {
	transform: rotate(180deg);
}

.tui-chat-fail {
	width: 50rpx;
	height: 50rpx;
	display: block;
	flex-shrink: 0;
}

.tui-mr {
	margin-right: 16rpx;
}

.tui-ml {
	margin-left: 16rpx;
}

.tui-flex-end {
	justify-content: flex-end;
}

.tui-flex-reverse {
	flex-direction: row-reverse;
}
</style>
