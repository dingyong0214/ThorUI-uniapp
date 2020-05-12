<template>
	<view class="container">
		<view class="tui-cmt-primary">
			<view class="tui-cmt-cell tui-cell-last">
				<view class="tui-header-box">
					<view class="tui-userinfo-box">
						<image src="/static/images/news/avatar_1.jpg" class="tui-avatar"></image>
						<view class="tui-nickname-box">
							<view class="tui-cmt-nickname">米兰的卡先生</view>
							<view class="tui-cmt-time">06-22 12:02</view>
						</view>
					</view>
					<view class="tui-fabulous" :class="{ 'tui-primary': isFabulous }" @tap="btnFabulous">
						<text>{{ fabulous == 0 ? '赞' : fabulous }}</text>
						<tui-icon :name="isFabulous ? 'agree-fill' : 'agree'" :size="15" :color="isFabulous ? '#5677fc' : '#9a9a9a'"></tui-icon>
					</view>
				</view>
				<view class="tui-cmt-content">我一直没懂赛前问一个主教练如何评价对手的主教练， 记者究竟是想得到什么答案？☺☺☺☺☺</view>
			</view>
		</view>
		<view class="tui-empty"></view>
		<view class="tui-cmt-title">全部回复（44）</view>
		<view class="tui-cmtbox">
			<view class="tui-cmt-cell" v-for="(item, index) in replyList" :key="index">
				<view class="tui-header-box">
					<view class="tui-userinfo-box">
						<image :src="'/static/images/news/' + item.avatar" class="tui-avatar"></image>
						<view class="tui-nickname-box">
							<view class="tui-cmt-nickname">{{ item.nickname }}</view>
							<view class="tui-cmt-time">{{ item.time }}</view>
						</view>
					</view>
					<view class="tui-fabulous" :class="[item.isFabulous ? 'tui-primary' : '']" :id="index" @tap="cmtFabulous">
						<text>{{ item.fabulous == 0 ? '赞' : item.fabulous }}</text>
						<tui-icon :name="item.isFabulous ? 'agree-fill' : 'agree'" :size="15" :color="item.isFabulous ? '#5677fc' : '#9a9a9a'"></tui-icon>
					</view>
				</view>
				<view class="tui-reply-box" v-if="item.reply.length > 0">
					<tui-list-cell backgroundColor="#f2f2f2" :size="28" v-for="(items, index2) in item.reply" :key="index2" :unlined="true">
						<view class="tui-flex-1 tui-reply-nickname">{{ items.nickname }}</view>
						<view class="tui-flex-1">{{ items.content }}</view>
					</tui-list-cell>
				</view>
				<view class="tui-cmt-content">{{ item.content }}</view>
			</view>
		</view>

		<view class="tui-operation">
			<!--处理iphonex xr 等手机底部兼容-->
			<view class="tui-operation-inner"><view class="tui-btn-comment" @tap="btnCmt">回复楼主...</view></view>
		</view>

		<!--加载loadding-->
		<tui-loadmore v-if="loadding" :index="3" type="primary"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn" backgroundColor="#fff" text="没有更多回复"></tui-nomore>
		<!--加载loadding-->
		<view class="tui-safearea-bottom"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			fabulous: 173,
			isFabulous: false,
			replyList: [
				{
					avatar: 'avatar_1.jpg',
					nickname: '月牙',
					fabulous: 2,
					content: '力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。',
					reply: [],
					time: '昨天 21:09'
				},
				{
					avatar: 'list_2.jpg',
					nickname: '拜仁慕尼黑',
					fabulous: 2,
					content:
						'说实话，武汉重庆还真的是一家，但是比赛还是要分出个胜负来的，我卓尔球迷肯定是要为我武汉加油了，按照目前两队现在这个状态来看武汉重庆应该是五五开，所以我想说武汉加油！卓尔加油！',
					reply: [
						{
							nickname: '月牙',
							content: '力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。'
						}
					],
					time: '昨天 21:09'
				},
				{
					avatar: 'avatar_2.jpg',
					nickname: 'thorui',
					fabulous: 0,
					content: '小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛',
					reply: [],
					time: '昨天 17:30'
				}
			],
			pageIndex: 1,
			loadding: false,
			pullUpOn: true
		};
	},
	methods: {
		btnFabulous: function() {
			this.fabulous = this.isFabulous ? 173 : 174;
			this.isFabulous = !this.isFabulous;
		},
		cmtFabulous: function(e) {
			let index = e.currentTarget.id;
			let fabulousObj = this.replyList[index];
			let isFabulous = this.replyList[index].isFabulous;
			let fabulous = this.replyList[index].fabulous;
			let fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
			this.$set(fabulousObj, 'fabulous', fabulousNum);
			this.$set(fabulousObj, 'isFabulous', !isFabulous);
		},
		btnCmt: function() {
			uni.navigateTo({
				url: '../comment/comment'
			});
		}
	},
	//页面相关事件处理函数--监听用户下拉动作
	onPullDownRefresh: function() {
		this.pageIndex = 1;
		this.pullUpOn = true;
		this.loadding = false;
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 200);
	},
	// 页面上拉触底事件的处理函数
	onReachBottom: function() {
		if (!this.pullUpOn) return;
		this.loadding = true;
		if (this.pageIndex == 3) {
			this.loadding = false;
			this.pullUpOn = false;
		} else {
			let arr = JSON.parse(JSON.stringify(this.replyList));
			this.replyList = this.replyList.concat(arr);
			this.pageIndex = this.pageIndex + 1;
			this.loadding = false;
		}
	}
};
</script>

<style>
page {
	background-color: #fff;
	color: #333;
}

.container {
	padding-bottom: 110rpx;
	box-sizing: border-box;
}

.tui-empty {
	width: 100%;
	height: 10rpx;
	background-color: #eaeef1;
}

.tui-cmt-title {
	font-size: 30rpx;
	font-weight: bold;
	position: relative;
	padding: 20rpx 30rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}

.tui-cmt-title::after {
	content: '';
	position: absolute;
	left: 12rpx;
	top: 30%;
	width: 6rpx;
	height: 40%;
	background: #5677fc;
}

.tui-cmt-cell {
	width: 100%;
	padding: 26rpx 30rpx;
	box-sizing: border-box;
	position: relative;
}

.tui-cmt-cell::after {
	content: '';
	position: absolute;
	border-bottom: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	bottom: 0;
	right: 0;
	left: 0;
}

.tui-cell-last::after {
	border-bottom: 0 !important;
}

.tui-header-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 28rpx;
}

.tui-userinfo-box {
	display: flex;
	align-items: center;
}

.tui-avatar {
	width: 64rpx;
	height: 64rpx;
	border-radius: 32rpx;
	display: block;
	flex-shrink: 0;
}

.tui-nickname-box {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 12rpx;
	padding-top: 4rpx;
	height: 60rpx;
}

.tui-cmt-nickname {
	color: #5677fc;
	line-height: 28rpx;
}

.tui-cmt-time {
	font-size: 24rpx;
	line-height: 24rpx;
	color: #9a9a9a;
	transform: scale(0.8);
	transform-origin: 0 100%;
}

.tui-fabulous {
	color: #9a9a9a;
}

.tui-fabulous text {
	padding-right: 4rpx;
	font-size: 24rpx;
}

.tui-cmt-content {
	font-size: 32rpx;
	color: #333;
	text-align: justify;
	padding-top: 16rpx;
	word-break: break-all;
	word-wrap: break-word;
}

.tui-reply-box {
	border-radius: 8rpx;
	overflow: hidden;
	margin-top: 16rpx;
}

.tui-cell-class {
	flex-direction: column;
	justify-content: flex-start !important;
	padding: 20rpx !important;
	text-align: justify;
	word-break: break-all;
	word-wrap: break-word;
}

.tui-flex-1 {
	flex: 1;
	width: 100%;
}

.tui-reply-nickname {
	font-size: 24rpx;
	color: #7a7a7a;
	padding-bottom: 8rpx;
}

.tui-operation {
	width: 100%;
	padding: 0 30rpx;
	box-sizing: border-box;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.95);
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 99999;
}

.tui-operation-inner {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: env(safe-area-inset-bottom);
}

.tui-safearea-bottom {
	width: 100%;
	height: env(safe-area-inset-bottom);
}

.tui-operation::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	border-top: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

.tui-btn-comment {
	height: 64rpx;
	width: 100%;
	background: #ededed;
	color: #999;
	border-radius: 8rpx;
	font-size: 28rpx;
	display: flex;
	align-items: center;
	padding-left: 20rpx;
	box-sizing: border-box;
	padding-top: 0;
}

.tui-primary {
	color: #5677fc;
}
</style>
