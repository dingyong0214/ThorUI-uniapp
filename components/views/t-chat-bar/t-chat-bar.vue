<template>
	<view @touchmove.stop.prevent>
		<view class="tui-reply-tabbar" :style="{ paddingBottom: `${keyboardHeight}px` }">
			<view class="tui-chat-tabbar">
				<view class="tui-icon tui-icon-im_more tui-icon-mr" @tap="showKeyBoard(3)"></view>
				<view class="tui-icon tui-icon-im_face tui-icon-mr" @tap="showKeyBoard(2)"></view>
				<!-- v-show="showIndex != 2" -->
				<!-- <view class="tui-icon tui-icon-im_keyboard  tui-icon-mr" @tap="showKeyBoard(1)" v-show="showIndex == 2"></view> -->

				<textarea hold-keyboard auto-height class="tui-chat-input" @input="inputReply" :fixed="true"
					:adjust-position="false" maxlength="300" :value="content" :show-confirm-bar="false"
					placeholder-class="tui-phcolor" @tap.stop="showKeyBoard(1)" ref="textarea"
					v-show="!isVoice"></textarea>
				<view class="tui-chat-voice_btn" hover-class="tui-opcity" :hover-stay-time="150" v-if="isVoice">按住 说话
				</view>
				<view class="tui-send-box">
					<view class="tui-icon tui-icon-im_voice" v-if="!isVoice && !content" @tap="switchVoice"></view>
					<view class="tui-icon tui-icon-im_keyboard" v-if="isVoice && !content" @tap="switchInput"></view>
					<view class="tui-btn-send" v-if="content" :style="{ color: color }" hover-class="tui-opcity"
						:hover-stay-time="150" @tap="hideKeyboard">{{ sendText }}</view>
				</view>
			</view>
			<view class="tui-reply-more">
				<view class="tui-face-box" v-if="showIndex == 2">
					<scroll-view scroll-y :style="{ height: replyContainerH + 'px' }">
						<view class="tui-face-scroll">
							<view class="tui-face-img_box" v-for="(item, index) in faceList" :key="index"
								@tap="inputFace(index)">
								<image :src="`https://www.thorui.cn/wx/static/images/im_face/${item}.png`"
									class="tui-face-img"></image>
							</view>
						</view>
					</scroll-view>
					<view class="tui-delete-face_box">
						<view class="tui-delete-keybord" :class="{ 'tui-opcity': !content }"><text
								class="tui-icon tui-icon-delete_keybord"></text></view>
					</view>
				</view>
				<view class="tui-more-box" :style="{ height: replyContainerH + 'px' }" v-if="showIndex == 3">
					<view class="tui-more-item" hover-class="tui-opcity" :hover-stay-time="150">
						<view class="tui-more-icon">
							<view class="tui-icon tui-icon-photo"></view>
						</view>
						<text class="tui-more-text">照片</text>
					</view>
					<view class="tui-more-item" hover-class="tui-opcity" :hover-stay-time="150">
						<view class="tui-more-icon">
							<view class="tui-icon tui-icon-video"></view>
						</view>
						<text class="tui-more-text">视频通话</text>
					</view>
					<view class="tui-more-item" hover-class="tui-opcity" :hover-stay-time="150">
						<view class="tui-more-icon">
							<view class="tui-icon tui-icon-at"></view>
						</view>
						<text class="tui-more-text">@好友</text>
					</view>
					<view class="tui-more-item" hover-class="tui-opcity" :hover-stay-time="150">
						<view class="tui-more-icon">
							<view class="tui-icon tui-icon-location"></view>
						</view>
						<text class="tui-more-text">定位</text>
					</view>
				</view>
			</view>
			<view class="tui-inner-mask" v-if="isLocked"></view>
		</view>
		<view class="tui-reply-mask" v-if="mask"
			:class="{ 'tui-box-show': showIndex, 'tui-mask-show': showIndex && !maskOpacity }" @touchmove.stop.prevent
			@tap="hideKeyboard"></view>
	</view>
</template>

<script>
	//聊天栏 回复栏
	import emoji from '@/utils/emoji.js'
	export default {
		name: 'tChatBar',
		props: {
			//禁用聊天栏
			isLocked: {
				type: Boolean,
				default: false
			},
			//是否显示遮罩
			mask: {
				type: Boolean,
				default: true
			},
			//true表示遮罩透明
			maskOpacity: {
				type: Boolean,
				default: true
			},
			sendText: {
				type: String,
				default: '发送'
			},
			color: {
				type: String,
				default: '#5677fc'
			}
		},
		created() {
			//键盘高度监听
			this.faceList = emoji.en;
			let safeH = this.tui.isPhoneX() ? 34 : 0;
			uni.onKeyboardHeightChange(res => {
				let h = res.height - safeH;
				this.keyboardHeight = h > 0 ? h : 0;
				//去除 完成那一栏高度影响
				setTimeout(() => {
					if (this.showIndex == 1 && this.keyboardHeight != 0) {
						this.replyContainerH = this.keyboardHeight;
					}
				}, 100);
			});
		},
		data() {
			return {
				showIndex: 0, //1-键盘 2-表情 3-其他
				keyboardHeight: 0,
				replyContainerH: uni.upx2px(500),
				faceList: [],
				content: '',
				isVoice: false
			};
		},
		methods: {
			hideKeyboard() {
				//隐藏键盘
				this.showIndex = 0;
				// uni.hideKeyboard();
			},
			showKeyBoard(index) {
				if (this.showIndex == index) return;
				this.showIndex = index;
				this.isVoice = false;
				// if(index==1){
				// 	this.$refs.textarea.focus();
				// }
				// setTimeout(function() {
				// 	if(index==1){
				// 		this.$refs.textarea.focus();
				// 	}
				// }, 150);
			},
			inputReply(e) {
				this.content = e.detail.value;
			},
			inputFace(index) {
				let face = emoji.cn[index];
				this.content = this.content + face;
			},
			switchVoice() {
				this.isVoice = true;
				this.showIndex = 0;
			},
			switchInput() {
				this.isVoice = false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: 'ticons';
		src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	.tui-icon {
		font-family: ticons;
		font-size: 24px;
		font-weight: normal;
		font-style: normal;
		line-height: 1;
		display: inline-block;
		text-decoration: none;
		-webkit-font-smoothing: antialiased;
	}

	.tui-icon-at:before {
		content: '\eb90';
	}

	.tui-icon-location:before {
		content: '\eb95';
	}

	.tui-icon-im_more:before {
		content: '\eb96';
	}

	.tui-icon-im_face:before {
		content: '\eb97';
	}

	.tui-icon-link:before {
		content: '\eb98';
	}

	.tui-icon-im_voice:before {
		content: '\eb99';
	}

	.tui-icon-photo:before {
		content: '\eb9a';
	}

	.tui-icon-redpacket:before {
		content: '\eb9b';
	}

	.tui-icon-im_keyboard:before {
		content: '\eb9c';
	}

	.tui-icon-principal:before {
		content: '\eb9d';
	}

	.tui-icon-video:before {
		content: '\eba2';
	}

	.tui-icon-delete_keybord:before {
		content: '\e7b8';
	}

	.tui-reply-tabbar {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		z-index: 999;

		.tui-chat-tabbar {
			width: 100%;
			background-color: $uni-bg-color-grey;
			display: flex;
			align-items: flex-end;
			padding: 16rpx 24rpx;
			box-sizing: border-box;

			&::after {
				content: ' ';
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				border-top: 1rpx solid $uni-text-color-placeholder;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
			}

			.tui-chat-input {
				flex: 1;
				/* #ifndef MP-WEIXIN */
				min-height: 46rpx;
				padding: $uni-spacing-col-base 0;
				/* #endif */
				/* #ifdef MP-WEIXIN */
				min-height: 78rpx;
				/* #endif */
				background-color: $uni-bg-color;
				border-radius: 8rpx;
				margin: 0;
			}

			.tui-chat-voice_btn {
				flex: 1;
				height: 78rpx;
				border-radius: 8rpx;
				background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: bold;
			}

			.tui-icon-mr {
				margin-right: 28rpx;
			}

			.tui-icon-ml {
				margin-left: 28rpx;
			}

			.tui-icon {
				margin-bottom: 13rpx;
			}

			.tui-send-box {
				width: 80rpx;
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}

			.tui-btn-send {
				flex-shrink: 0;
				padding: 22rpx 0;
				font-size: 30rpx;
				line-height: 30rpx;
			}
		}

		.tui-reply-more {
			width: 100%;
			position: relative;

			&::after {
				content: ' ';
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				border-top: 1rpx solid $uni-text-color-placeholder;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
			}

			.tui-face-box {
				width: 100%;
				position: relative;
				background-color: $uni-bg-color-hover;

				.tui-face-scroll {
					width: 100%;
					padding: $uni-spacing-row-lg 24rpx 80rpx;
					box-sizing: border-box;
					display: flex;
					flex-wrap: wrap;

					.tui-face-img_box {
						width: 14.2857%;
						height: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;

						.tui-face-img {
							width: 60rpx;
							height: 60rpx;
						}
					}
				}

				.tui-delete-face_box {
					position: absolute;
					background-color: $uni-bg-color-hover;
					width: 108rpx;
					height: 92rpx;
					right: 20rpx;
					bottom: 0;
					z-index: 10;

					.tui-delete-keybord {
						width: 108rpx;
						height: 68rpx;
						background-color: $uni-bg-color;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: $uni-border-radius-lg;

						.tui-icon {
							font-size: 48rpx;
						}
					}
				}
			}

			.tui-more-box {
				width: 100%;
				padding: $uni-spacing-row-lg;
				box-sizing: border-box;
				position: relative;
				display: flex;
				align-items: flex-start;
				flex-wrap: wrap;
				background-color: $uni-bg-color-hover;

				.tui-more-item {
					width: 126rpx;
					display: flex;
					align-items: center;
					flex-direction: column;
					justify-content: center;
					margin-right: 40rpx;

					&:active {
						opacity: 0.6;
					}
				}

				.tui-more-icon {
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #ffffff;
					height: 126rpx;
					width: 126rpx;
					border-radius: 32rpx;

					.tui-icon {
						font-size: 60rpx;
					}
				}

				.tui-more-text {
					font-size: 24rpx;
					line-height: 24rpx;
					color: #7e7e7e;
					padding-top: 20rpx;
					padding-bottom: 20rpx;
				}
			}
		}

		.tui-inner-mask {
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background-color: rgba(248, 248, 248, 0.6);
		}
	}

	.tui-reply-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 990;
		background-color: $uni-bg-color-mask;
		visibility: hidden;
		transition: all 0.3s ease;
		opacity: 0;
	}

	.tui-box-show {
		visibility: visible !important;
	}

	.tui-mask-show {
		opacity: 1;
	}
</style>
