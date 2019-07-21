<template>
	<view class="container">
		<!--tabbar-->
		<view class="tui-operation tui-chat-operation">
			<view class='tui-right-flex tui-input-box'>
				<view hover-class="tui-opcity" :hover-stay-time="150" class="tui-voice">
					<tui-icon name="voice" :size="34" color='#333'></tui-icon>
				</view>
				<input class="tui-chat-input"></input>
			</view>
			<view hover-class="tui-opcity" :hover-stay-time="150">
				<tui-icon name="imface" :size="26" color='#333'></tui-icon>
			</view>
			<view hover-class="tui-opcity" :hover-stay-time="150" class="tui-pr">
				<tui-icon name="add" :ize="30" color='#333'></tui-icon>
			</view>
		</view>
		<!--tabbar-->
		<view class="tui-chat-content">
			<tui-loadmore :visible="loadding" :index="3" type="primary" text=" "></tui-loadmore>
			<view v-show="show">
				<view class="tui-label">对方已通过您的好友请求</view>
				<view class="tui-chat-center">星期四 11:02</view>
				<view class="tui-chat-right">
					<view class="tui-chatbox tui-chatbox-right">哈喽~，欢迎关注Thor UI！</view>
					<image src="../../../static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
				</view>
				<view class="tui-chat-left">
					<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
					<view class="tui-chatbox tui-chatbox-left">哈喽~，欢迎关注Thor UI！</view>
				</view>
				<view class="tui-chat-left">
					<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
					<view class="tui-img-chatbox">
						<image src="../../../static/images/news/avatar_2.jpg" class="tui-chat-img" mode="widthFix"></image>
					</view>
				</view>
				<view class="tui-chat-right">
					<view class="tui-chatbox tui-chatbox-right">哈喽~，欢迎关注Thor UI！</view>
					<image src="../../../static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
				</view>
				<view class="tui-chat-left">
					<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
					<view class="tui-chatbox tui-chatbox-left">哈喽~，欢迎关注Thor UI！</view>
				</view>
				<view class="tui-chat-left">
					<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
					<view class="tui-img-chatbox">
						<image src="../../../static/images/news/avatar_2.jpg" class="tui-chat-img" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="tui-chat-center">星期四 11:02</view>
			<view class="tui-chat-left">
				<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-chatbox tui-chatbox-left">哈喽~，欢迎关注Thor UI！</view>
			</view>
			<view class="tui-chat-center">星期五 12:09</view>
			<view class="tui-chat-right">
				<view class="tui-chatbox tui-chatbox-right">哈喽~，欢迎关注Thor UI！ 请说出您想加入或者优化的功能！</view>
				<image src="../../../static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
			</view>
			<view class="tui-chat-right">
				<view class="tui-chatbox tui-chatbox-right">哈喽~，欢迎关注Thor UI！</view>
				<image src="../../../static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
			</view>
			<view class="tui-chat-left">
				<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-chatbox tui-chatbox-left">哈喽~，欢迎关注Thor UI！</view>
			</view>
			<view class="tui-chat-left">
				<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-img-chatbox">
					<image src="../../../static/images/news/avatar_2.jpg" class="tui-chat-img" mode="widthFix"></image>
				</view>
			</view>
			<view class="tui-chat-left">
				<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-img-chatbox">
					<image src="../../../static/images/news/banner_2.jpg" class="tui-chat-img" mode="widthFix"></image>
				</view>
			</view>
			<view class="tui-chat-left">
				<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-flex-center">
					<view class="tui-chatbox tui-chatbox-left tui-chat-flex tui-mr">
						<image src="../../../static/images/chat/voice.png" class="tui-chat-voice tui-mr"></image>
						<view>8"</view>
					</view>
					<tui-badge :dot="true" type="danger"></tui-badge>
				</view>
			</view>
			<view class="tui-chat-left">
				<image src="../../../static/images/news/avatar_1.jpg" class="tui-user-pic tui-right"></image>
				<view class="tui-flex-center">
					<view class="tui-chatbox tui-chatbox-left tui-chat-flex tui-mr">
						<image src="../../../static/images/chat/voice.png" class="tui-chat-voice tui-mr"></image>
						<view style="width:300upx">20"</view>
					</view>
					<tui-badge :dot="true" type="danger"></tui-badge>
				</view>
			</view>

			<view class="tui-chat-right">
				<view class="tui-flex-center tui-flex-end">
					<tui-badge :dot="true" type="danger"></tui-badge>
					<view class="tui-chatbox tui-chatbox-right tui-chat-flex tui-ml tui-flex-reverse">
						<image src="../../../static/images/chat/voice.png" class="tui-chat-voice tui-rotate tui-ml"></image>
						<view style="width:280upx;text-align:right">18"</view>
					</view>
				</view>
				<image src="../../../static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
			</view>

			<view class="tui-chat-right">
				<view class="tui-flex-center tui-flex-end tui-flex-reverse">
					<view class="tui-img-chatbox">
						<image src="../../../static/images/news/avatar_1.jpg" class="tui-chat-img" mode="widthFix"></image>
					</view>
					<image src="../../../static/images/chat/fail.png" class="tui-chat-fail tui-mr"></image>
				</view>
				<image src="../../../static/images/news/avatar_2.jpg" class="tui-user-pic tui-left"></image>
			</view>
		</view>
		<view class="tui-safearea-bottom"></view>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiBadge from "@/components/badge/badge"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	export default {
		components:{
			tuiIcon,
			tuiBadge,
			tuiLoadmore
		},
		data() {
			return {
				loadding: false,
				show: false,
				bottom: 0
			}
		},
		onLoad: function(options) {
		},
		methods: {

		},
		onPageScroll(e) {
			if (e.scrollTop == 0 && !this.loadding) {
				this.loadding = true
				setTimeout(() => {
					this.show = true;
					this.loadding = false
				}, 1000)
			}
		}
	}
</script>

<style>
	page {
		background: #ebedf6;
	}

	.container {
		padding-left: 20upx;
		padding-right: 20upx;
		padding-bottom: 146upx;
		box-sizing: border-box;
	}

	/*--tabbar--*/

	.tui-operation {
		width: 100%;
		height: 100upx;
		overflow: hidden;
		background: #EFF2FC;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: env(safe-area-inset-bottom);
		z-index: 999;
	}

	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	.tui-operation::before {
		content: '';
		position: absolute;
		top: 0px;
		right: 0;
		left: 0;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-chat-operation {
		background: #f6f6f6 !important;
		/* padding-right: 18upx; */
		/* box-sizing: border-box; */
	}
	.tui-pr{
		padding-right: 16rpx;
	}

	.tui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-input-box {
		width: 78%;
		justify-content: flex-start;
	}

	.tui-chat-input {
		background: #fff;
		height: 72upx;
		border-radius: 6upx;
		padding-left: 20upx;
		padding-right: 20upx;
		flex: 1;
	}

	

	.tui-opcity {
		opacity: 0.5;
	}

	/*--tabbar--*/

	/*chatbox*/
	.tui-chat-content {
		width: 100%;
	}

	.tui-chatbox {
		max-width: 66%;
		border-radius: 10upx;
		position: relative;
		padding: 20upx 22upx;
		font-size: 32upx;
		color: #000;
		/* text-align: justify; */
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-chatbox::before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		top: 20upx;
		border: 16upx solid;
	}

	.tui-chatbox-left {
		background: #fff;
		border: 1upx solid #fff;
		display: inline-block;
	}

	.tui-chatbox-left::before {
		right: 100%;
		border-color: transparent #fff transparent transparent;
	}

	.tui-chatbox-right {
		background: #a0d5f3;
		border: 1upx solid #a0d5f3;
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
		padding-top: 36upx;
	}

	.tui-user-pic {
		width: 80upx;
		height: 80upx;
		flex-shrink: 0;
		border-radius: 50%;
		display: block;
	}

	.tui-left {
		margin-left: 26upx;
	}

	.tui-right {
		margin-right: 26upx;
	}

	.tui-chat-right {
		justify-content: flex-end;
	}

	.tui-chat-center {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 28upx;
		font-size: 28upx;
		color: #666;
		padding-top: 36upx;
	}

	.tui-label {
		display: inline-block;
		background: rgba(0, 0, 0, 0.4);
		color: #fff;
		font-size: 24upx;
		line-height: 24upx;
		margin-top: 36upx;
		padding: 12upx 16upx;
		text-align: center;
		border-radius: 8upx;
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
		border: 1upx solid #eaeef1;
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
		border-radius: 20upx;
	}

	.tui-chat-img {
		max-width: 200upx;
		/* min-height: 80upx; */
		display: block;
		border-radius: 10upx;
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
		width: 40upx;
		height: 40upx;
		display: block;
		flex-shrink: 0;
	}

	.tui-rotate {
		transform: rotate(180deg)
	}

	.tui-chat-fail {
		width: 50upx;
		height: 50upx;
		display: block;
		flex-shrink: 0;
	}

	.tui-mr {
		margin-right: 16upx;
	}

	.tui-ml {
		margin-left: 16upx;
	}

	.tui-flex-end {
		justify-content: flex-end;
	}

	.tui-flex-reverse {
		flex-direction: row-reverse;
	}
</style>
