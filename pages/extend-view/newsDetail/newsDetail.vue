<template>
	<view class="container">
		<view class="tui-news-title">
			我们充分尊重联赛新政，武汉队战术多变训练有素
		</view>
		<view class="tui-sub-info">
			<view class="tui-sub-left">
				<text class="tui-author">早安君</text>
				<text>昨天 17:12</text>
			</view>
			<view class="tui-sub-right">阅读 2453</view>
		</view>
		<view class="tui-news-content">
			<view class="tui-article">
				北京时间6月22日，重庆斯威队召开了赛前新闻发布会，主教练小克鲁伊夫和球员彭欣力出席。
			</view>
			<view class="tui-article">
				这是一场很重要的比赛，武汉卓尔在中超目前打的还是不错的，现在积分与我们一样。我们面对这个对手做了充分的准备，他们的战术变化很多，我也认为他们是一支训练有素的队伍。虽然这是一场艰难的比赛，我们也充满了动力去拿到我们想要的分数，实现我们的目标。联赛上半程还有两场比赛，我们也会竭尽全力拿到尽量多的分数。
			</view>
			<image src="../../../static/images/news/banner_2.jpg" class="tui-article-pic" mode="widthFix"></image>
			<view class="tui-article">
				大家下午好，明天非常重要，这星期我们的备战时间比较充裕，我们针对对手做了有效的布置，希望明天给大家呈现精彩的比赛。
			</view>
			<view class="tui-article">
				我相信大家比我更了解他，但是就像刚刚提到的一样，这支球队的战术是丰富而多变的，这就意味着他在应对不同比赛时做了充分的准备。我们非常尊重明天的对手，他们最近状态出色，拿到许多分数。
			</view>
			<image src="../../../static/images/news/banner_1.jpg" class="tui-article-pic" mode="widthFix"></image>
			<view class="tui-article">
				对我而言，我还是想保持沉默，我不打算就这个问题做过多的评论。因为这个政策的变化是马上实施了，我们肯定是尊重它，然后在我们力所能及的范围上找到最好的应对的方案，我个人意见并不重要，我们尊重和遵守相关决定。
			</view>

		</view>

		<view class="tui-news-source">消息参考来源：体坛大精汇</view>

		<view class="tui-operate-box">
			<tui-tag :type="isFabulous?'':'gray'" shape="circle" :plain="true" @click="btnFabulous">
				<tui-icon :name="iconName(isFabulous)" size="20" :color="iconColor"></tui-icon>
				<text class="tui-black" :class="[isFabulous?'tui-primary':'']">{{fabulous}}赞</text>
			</tui-tag>
			<button open-type="share" class="tui-share-btn">
				<tui-tag type="gray" shape="circle" :plain="true">
					<tui-icon name="partake" size="20" color="#333"></tui-icon>
					<text class="tui-black">分享</text>
				</tui-tag>
			</button>

		</view>

		<view class="tui-cmt-title">精彩评论（20）</view>
		<view class="tui-cmtbox">
			<view class="tui-cmt-cell" v-for="(item,index) in cmtList" :key="index">
				<image :src="'../../../static/images/news/'+item.avatar" class="tui-avatar"></image>
				<view class="tui-cmt-detail">
					<view class="tui-header-box">
						<view class="tui-cmt-nickname">{{item.nickname}}</view>
						<view class="tui-fabulous" :class="[item.isFabulous?'tui-primary':'']" :id="index" @tap="cmtFabulous">
							<text>{{item.fabulous==0?'赞':item.fabulous}}</text>
							<tui-icon :name="iconName(item.isFabulous)" size="15" :color="itemIconColor(item.isFabulous)"></tui-icon>
						</view>
					</view>
					<view class="tui-cmt-content">
						{{item.content}}
					</view>
					<view class="tui-reply-box" v-if="item.replayNum>0">
						<tui-list-cell bgcolor="#f2f2f2" size="28" v-for="(items,index2) in item.reply" :key="index2" :last="item.replayNum<2 && item.reply.length-1==index"
						 @tap="cmtReply">
							<view class="tui-flex-1 tui-reply-nickname">{{items.nickname}}</view>
							<view class="tui-flex-1">{{items.content}}</view>
						</tui-list-cell>
						<tui-list-cell bgcolor="#f2f2f2" size="28" :last="true" v-if="item.replayNum>2" @tap="cmtReply">
							<view class="tui-flex-1  tui-cell-last">
								<text>共{{item.replayNum}}条回复</text>
								<tui-icon name="arrowright" size="22" color="#5677fc"></tui-icon>
							</view>
						</tui-list-cell>
					</view>
					<view class="tui-footer">
						{{item.time}}
						<view class="tui-primary tui-ml" hover-class="opcity" :hover-start-time="150" @tap="cmtReply">回复</view>
					</view>
				</view>
			</view>

		</view>

		<view class="tui-operation">
			<view class="tui-operation-left tui-col-7 tui-height-full tui-ptop-zero">
				<view class="tui-btn-comment" @tap="btnCmt">发表你的评论...</view>
			</view>
			<view class="tui-operation-right tui-right-flex tui-col-5">
				<view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150" @tap="cmtAll">
					<tui-icon name="message" size="30" color='#444'></tui-icon>
					<tui-badge type="white" size="small">501</tui-badge>
				</view>
				<view class="tui-operation-item" @tap="collection">
					<tui-icon :name="isCollection?'star-fill':'star'" size="29" :color="isCollection?'#5677fc':'#444'"></tui-icon>
				</view>
				<view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150">
					<button open-type="share" class="tui-share-btn">
						<tui-icon name="share" size="31" color='#444'></tui-icon>
					</button>
				</view>
			</view>
		</view>

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" index="3" type="primary"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn" bgcolor="#fff" text="没有更多评论"></tui-nomore>
		<!--加载loadding-->
		<view class="tui-safearea-bottom"></view>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiBadge from "@/components/badge/badge"
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiListCell,
			tuiLoadmore,
			tuiNomore,
			tuiBadge
		},
		data() {
			return {
				fabulous: 123,
				isFabulous: false,
				isCollection: false,
				cmtList: [{
					avatar: "list_2.jpg",
					nickname: "米兰的卡先生",
					fabulous: 123,
					isFabulous: false,
					content: "我一直没懂赛前问一个主教练如何评价对手的主教练， 记者究竟是想得到什么答案？",
					reply: [{
						nickname: "Mesaldo",
						content: "汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友☺ ☻"
					}, {
						nickname: "月牙",
						content: "新政实行后，大小摩托轮流冲，不用经常上迪力了，杨帅该拿下就拿下☺"
					}],
					replayNum: 44,
					time: "昨天 22:12"
				}, {
					avatar: "avatar_1.jpg",
					nickname: "月牙",
					fabulous: 2,
					content: "力帆有杨帅，迪力木来提，尹聪耀，完全可以应付。尤其是杨帅坐稳主力后卫。",
					reply: [{
						nickname: "thorui",
						content: "汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友"
					}, {
						nickname: "Mr卡卜斯",
						content: "说实话，武汉重庆还真的是一家，但是比赛还是要分出个胜负来的，我卓尔球迷肯定是要为我武汉加油了，按照目前两队现在这个状态来看武汉重庆应该是五五开，所以我想说武汉加油！卓尔加油！"
					}],
					replayNum: 2,
					time: "昨天 21:09"
				}, {
					avatar: "avatar_2.jpg",
					nickname: "thorui",
					fabulous: 0,
					content: "小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛 ☻ ☻ ☻",
					reply: [],
					replayNum: 0,
					time: "昨天 17:30"
				}],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true
			}
		},
		computed: {
			iconColor() {
				return this.isFabulous ? '#5677fc' : '#333'
			},
			itemIconColor() {
				return function(isFabulous) {
					return isFabulous ? '#5677fc' : '#9a9a9a'
				}
			},
			iconName() {
				return function(isFabulous) {
					return isFabulous ? 'agree-fill' : 'agree'
				}
			}
		},
		methods: {
			btnFabulous: function() {
				this.fabulous = this.isFabulous ? 123 : 124;
				this.isFabulous = !this.isFabulous
			},
			cmtFabulous: function(e) {
				let index = e.currentTarget.id;
				let fabulousObj = this.cmtList[index];
				let isFabulous = this.cmtList[index].isFabulous;
				let fabulous = this.cmtList[index].fabulous;
				let fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
				this.$set(fabulousObj, "fabulous", fabulousNum);
				this.$set(fabulousObj, "isFabulous", !isFabulous);
			},
			collection: function() {
				this.isCollection = !this.isCollection
				if (this.isCollection) {
					this.tui.toast("收藏成功！");
				}
			},
			btnCmt: function() {
				uni.navigateTo({
					url: '../news-cmt/news-cmt'
				})
			},
			cmtAll: function() {
				uni.navigateTo({
					url: '../news-cmt-list/news-cmt-list'
				})
			},
			cmtReply: function() {
				uni.navigateTo({
					url: '../news-cmt-reply/news-cmt-reply'
				})
			}
		},
		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true
			if (this.pageIndex == 3) {
				this.loadding = false;
				this.pullUpOn = false
			} else {
				let arr = JSON.parse(JSON.stringify(this.cmtList));
				this.cmtList = this.cmtList.concat(arr);
				this.pageIndex = this.pageIndex + 1;
				this.loadding = false
			}
		}
	}
</script>

<style>
	page {
		background: #fff;
		color: #333;
	}

	.container {
		padding: 40upx 30upx 110upx 30upx;
		box-sizing: border-box;
	}

	.tui-news-title {
		font-size: 48upx;
		font-weight: 500;
		text-align: justify;
	}

	.tui-sub-info {
		padding-top: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		color: #999;
	}

	.tui-author {
		color: #5677fc;
		padding-right: 20upx;
	}

	.tui-news-content {
		padding-top: 40upx;
	}

	.tui-article {
		/* text-indent: 2em; */
		font-size: 34upx;
		padding-bottom: 40upx;
		line-height: 60upx;
		text-align: justify;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-article-pic {
		width: 100%;
		display: block;
		margin-bottom: 40upx;
	}

	.tui-news-source {
		font-size: 24upx;
		color: #999;
	}

	.tui-operate-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 60upx 40upx;
		box-sizing: border-box;
	}

	.tui-tag-class {
		min-width: 130upx;
		padding: 20upx 52upx !important;
		font-size: 26upx !important;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-black {
		color: #333;
		padding-left: 12upx;
	}

	.tui-cmt-title {
		font-size: 30upx;
		font-weight: bold;
		position: relative;
	}

	.tui-cmt-title::after {
		content: '';
		position: absolute;
		left: -18upx;
		top: 18%;
		width: 6upx;
		height: 64%;
		background: #5677fc;
	}

	.tui-cmtbox {
		padding-bottom: 20upx;
	}

	.tui-cmt-cell {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding-top: 44upx;
	}

	.tui-avatar {
		width: 64upx;
		height: 64upx;
		border-radius: 32upx;
		display: block;
		flex-shrink: 0;
	}

	.tui-cmt-detail {
		padding-left: 16upx;
		box-sizing: border-box;
	}

	.tui-header-box {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		font-size: 30upx;
	}

	.tui-cmt-nickname {
		color: #5677fc;
	}

	.tui-fabulous {
		color: #9a9a9a;
	}

	.tui-fabulous text {
		padding-right: 4upx;
		font-size: 24upx
	}

	.tui-cmt-content {
		font-size: 32upx;
		color: #333;
		text-align: justify;
		padding-top: 8upx;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-reply-box {
		border-radius: 8upx;
		overflow: hidden;
		margin-top: 16upx;
	}

	.tui-cell-class {
		flex-direction: column;
		justify-content: flex-start !important;
		padding: 20upx !important;
		text-align: justify;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-cell-last {
		color: #5677fc;
	}

	.tui-flex-1 {
		flex: 1;
		width: 100%;
	}

	.tui-reply-nickname {
		font-size: 24upx;
		color: #7a7a7a;
		padding-bottom: 8upx;
	}

	.tui-footer {
		display: flex;
		align-items: center;
		font-size: 24upx;
		margin-top: 16upx;
		color: #9a9a9a;
	}

	.tui-primary {
		color: #5677fc !important;
	}

	.tui-ml {
		margin-left: 16upx;
	}

	.tui-cell-last .tui-icon-class {
		width: 40upx !important;
		margin-left: -10upx;
	}

	.tui-operation {
		width: 100%;
		height: 100upx;
		/* box-sizing: border-box; */
		overflow: hidden;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99999;
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
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-operation-left {
		display: flex;
		align-items: center;
	}

	.tui-operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}

	.tui-operation-right {
		height: 100upx;
		box-sizing: border-box;
		padding-top: 0;
	}

	.tui-badge-class {
		color: #5677fc !important;
		position: absolute;
		top: -6upx;
		padding: 2px 4px !important;
	}

	.tui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-btn-comment {
		height: 64upx;
		width: 84%;
		background: #ededed;
		color: #999;
		border-radius: 8upx;
		font-size: 28upx;
		display: flex;
		align-items: center;
		padding-left: 20upx;
		box-sizing: border-box;
		padding-top: 0;
		margin-left: 30upx;
	}

	.tui-col-7 {
		width: 58.33333333%;
	}

	.tui-col-5 {
		width: 41.66666667%;
	}

	.tui-share-btn {
		display: block;
		background: none;
		margin: 0;
		padding: 0;
	}
</style>
