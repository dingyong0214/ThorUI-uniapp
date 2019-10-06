<template>
	<view class="container">
		<view class='tui-notice-board'>
			<view class="tui-icon-bg">
				<tui-icon name="news-fill" :size='24' color='#f54f46'></tui-icon>
			</view>
			<view class="tui-scorll-view" @tap='detail'>
				<view class="tui-notice" :class="[animation?'tui-animation':'']">B站10分日本动漫已消失，9.9分仅剩12部，这一部动漫包揽三席！</view>
			</view>
		</view>

		<view class="tui-subject">纵向滚动</view>
		<view class="tui-rolling-news">
			<tui-icon name="news-fill" :size='28' color='#5677fc'></tui-icon>
			<swiper vertical autoplay circular interval="3000" class="tui-swiper">
				<swiper-item v-for="(item,index) in newsList" :key="index" class="tui-swiper-item">
					<view class="tui-news-item" @tap='detail'>{{item}}</view>
				</swiper-item>
			</swiper>
		</view>

		<!--搜索框-->
		<view class="tui-searchbox">

			<view class="tui-rolling-search">
				<!-- <icon type="search" class="tui-rolling-icon"  :size='16' color='#999'></icon> -->
				<tui-icon  name="search" :size='18' color='#999'></tui-icon>
				<swiper vertical autoplay circular interval="3000" class="tui-swiper">
					<swiper-item v-for="(item,index) in hotSearch" :key="index" class="tui-swiper-item">
						<view class="tui-news-item" @tap='detail'>{{item}}</view>
					</swiper-item>
				</swiper>
			</view>

		</view>

		<view class="tui-subject">横向滚动</view>
		<view class="tui-rolling-news">
			<tui-icon  name="news-fill" :size='28' color='#5677fc'></tui-icon>
			<swiper autoplay circular :interval="3000" class="tui-swiper">
				<swiper-item v-for="(item,index) in newsList" :key="index" class="tui-swiper-item">
					<view class="tui-news-item" @tap='detail'>{{item}}</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	export default {
		components: {
			tuiIcon
		},
		data() {
			return {
				newsList: [
					"致力发展负责任的人工智能 中国发布八大治理原则",
					"格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气",
					"阿里计划将每股普通股拆为8股，增加筹资灵活性"
				],
				hotSearch: [
					"夏季穿搭",
					"减脂冬瓜荷叶蛋",
					"玻尿酸补水面膜"
				],
				animation: false
			}
		},
		onLoad: function(options) {
			setTimeout(() => {
				this.animation = true
			}, 600)
		},
		methods: {
			detail(e) {
				this.tui.toast('详情功能尚未完善~')
			}
		}
	}
</script>

<style>
	.container {
		padding-top: 120upx;
	}

	.tui-notice-board {
		width: 100%;
		padding-right: 30upx;
		box-sizing: border-box;
		font-size: 28upx;
		height: 60upx;
		background: #fff8d5;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 999;
	}

	.tui-icon-bg {
		background: #fff8d5;
		padding-left: 30upx;
		position: relative;
		z-index: 10;
	}

	.tui-icon-class {
		margin-right: 12upx;
	}

	.tui-scorll-view {
		flex: 1;
		line-height: 1;
		white-space: nowrap;
		overflow: hidden;
		color: #f54f46;
	}

	.tui-notice {
		transform: translateX(100%);
	}

	.tui-animation {
		-webkit-animation: tui-rolling 12s linear infinite;
		animation: tui-rolling 12s linear infinite;
	}

	@-webkit-keyframes tui-rolling {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(-170%);
		}
	}

	@keyframes tui-rolling {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(-170%);
		}
	}

	.tui-subject {
		padding: 100upx 30upx 30upx 30upx;
		box-sizing: border-box;
		font-size: 32upx;
		font-weight: bold;
	}

	.tui-rolling-news {
		width: 100%;
		padding: 12upx 30upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
	}

	.tui-swiper {
		font-size: 28upx;
		height: 50upx;
		flex: 1;
	}

	.tui-swiper-item {
		display: flex;
		align-items: center
	}

	.tui-news-item {
		line-height: 28upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-searchbox {
		padding: 60upx 80upx;
		box-sizing: border-box;
	}

	.tui-rolling-search {
		width: 100%;
		height: 70upx;
		border-radius: 35upx;
		padding: 0 40upx 0 30upx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		color: #999;
	}
</style>
