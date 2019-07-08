<template>
	<view class="container">
		<view class="tui-cmt-title">全部评论（501）</view>
		<view class="tui-cmtbox">
			<view class="tui-cmt-cell" v-for="(item,index) in cmtList" :key="index">
				<image :src="'../../../static/images/news/'+item.avatar" class="tui-avatar"></image>
				<view class="tui-cmt-detail">
					<view class="tui-header-box">
						<view class="tui-cmt-nickname">{{item.nickname}}</view>
						<view class="tui-fabulous" :class="[item.isFabulous?'tui-primary':'']" :id="index" @tap="cmtFabulous">
							<text>{{item.fabulous==0?'赞':item.fabulous}}</text>
							<tui-icon :name="item.isFabulous?'agree-fill':'agree'" size="15" :color="item.isFabulous?'#5677fc':'#9a9a9a'"></tui-icon>
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
							<view class="tui-flex-1  tui-cell-last">共{{item.replayNum}}条回复
								<tui-icon name="arrowright" size="22" color="#5677fc"></tui-icon>
							</view>
						</tui-list-cell>
					</view>
					<view class="tui-footer">
						{{item.time}}
						<view class="tui-primary tui-ml" hover-class="opcity" hover-start-time="150" @tap="cmtReply">回复</view>
					</view>
				</view>
			</view>

		</view>

		<view class="tui-operation">
			<view class="tui-operation-inner">
				<view class="tui-btn-comment" @tap="btnCmt">发表你的评论...</view>
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
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	export default {
		components: {
			tuiIcon,
			tuiListCell,
			tuiLoadmore,
			tuiNomore
		},
		data() {
			return {
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
						content: "新政实行后，大小摩托轮流冲，不用经常上迪力了，杨帅该拿下就拿下"
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
						content: "汉军威武!卓尔不凡!火炉德比，热力四射！场上争胜，场下朋友☺ ☻"
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
					content: "小克鲁伊夫带的球队征服了中超球迷，李铁也带队冲超成功，现在风头正劲，究竟鹿死谁手，谁更胜一筹，期待精彩的比赛☻ ☻",
					reply: [],
					replayNum: 0,
					time: "昨天 17:30"
				}],
				pageIndex: 1,
				loadding: false,
				pullUpOn: true
			}
		},
		methods: {
			cmtFabulous: function(e) {
				let index = e.currentTarget.id;
				let fabulousObj = this.cmtList[index];
				let isFabulous = this.cmtList[index].isFabulous;
				let fabulous = this.cmtList[index].fabulous;
				let fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
				this.$set(fabulousObj, "fabulous", fabulousNum);
				this.$set(fabulousObj, "isFabulous", !isFabulous);
			},
			btnCmt: function() {
				uni.navigateTo({
					url: '../news-cmt/news-cmt'
				})
			},
			cmtReply: function() {
				uni.navigateTo({
					url: '../news-cmt-reply/news-cmt-reply'
				})
			}
		},
		//页面相关事件处理函数--监听用户下拉动作
		onPullDownRefresh: function() {
			this.pageIndex = 1;
			this.pullUpOn = true;
			this.loadding = false
			setTimeout(() => {
				uni.stopPullDownRefresh()
			}, 200);
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
		padding: 8upx 30upx 110upx 30upx;
		box-sizing: border-box;
	}

	.tui-cmt-title {
		font-size: 30upx;
		font-weight: bold;
		position: relative;
		padding: 20upx 0;
		margin-bottom: 20upx;
	}

	.tui-cmt-title::after {
		content: '';
		position: absolute;
		left: -18upx;
		top: 32%;
		width: 6upx;
		height: 36%;
		background: #5677fc;
	}

	.tui-cmt-cell {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding-bottom: 44upx;
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
		font-size: 24upx;
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
		padding: 0 30upx;
		box-sizing: border-box;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.95);
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99999;
	}

	.tui-operation-inner {
		height: 100upx;
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
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-btn-comment {
		height: 64upx;
		width: 100%;
		background: #ededed;
		color: #999;
		border-radius: 8upx;
		font-size: 28upx;
		display: flex;
		align-items: center;
		padding-left: 20upx;
		box-sizing: border-box;
		padding-top: 0;
	}
</style>
