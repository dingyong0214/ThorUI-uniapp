<template>
	<view class="container">
		<view class="list-view">
			<view v-for="(item,index) in newsList" :key="index" class="list-cell tui-list-item" :class="[(newsList.length-1)==index?'tui-last':'']"
			 hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
				<view class="cell-title-box" :class="[item.img==0?'':'min']">
					<view class="cell-title" :class="[item.img==0?'pdr0':'']">{{item.title}}</view>
					<image :src="'/static/images/product/'+item.img+'.jpg'" class="img" v-if="item.img!=0"></image>
				</view>
				<view class="sub-title">
					<text class="tag" :class="[getLabelCss(item.label)]" v-if="item.label!=0">{{getLabelText(item.label)}}</text>
					<text class="sub-content">{{item.source}}</text>
				</view>
			</view>

		</view>
		<!--加载loadding-->
		<tui-loadmore v-if="loadding"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageIndex: 1,
				newsList: [{
					title: '温故知"心"老师们这些话要牢记',
					img: 1,
					source: "央视新闻网",
					label: 1
				}, {
					title: '3.07财经早报┃头条：推进改革开放创新增进民生福祉，促进经济社会持续健康发展促进经济社会持续健康发展',
					img: 0,
					source: "百科故事大全",
					label: 0
				}, {
					title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列',
					img: 0,
					source: "粤港精英联盟",
					label: 2
				}, {
					title: '触手直播“和平精英”星联赛Jstar夺冠 大热',
					img: 1,
					source: "央视新闻网",
					label: 0
				}, {
					title: '开户大战燎原！加急上线科创板预约开户',
					img: 2,
					source: "百科故事大全",
					label: 4
				}, {
					title: '科创板交易系统准备就绪,不存在首批名单',
					img: 0,
					source: "百科故事大全",
					label: 1
				}, {
					title: '美国会表决通过新驻华大使 月底有望赴华',
					img: 4,
					source: "粤港精英联盟",
					label: 0
				}, {
					title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列',
					img: 1,
					source: "粤港精英联盟",
					label: 4
				}, {
					title: '温故知"心"老师们这些话要牢记',
					img: 0,
					source: "央视新闻网",
					label: 3
				}, {
					title: '科创板交易系统准备就绪,不存在首批名单',
					img: 5,
					source: "央视新闻网",
					label: 2
				}],
				loadData: [{
					title: '温故知"心"老师们这些话要牢记',
					img: 1,
					source: "央视新闻网",
					label: 1
				}, {
					title: '3.07财经早报┃头条：推进改革开放创新增进民生福祉，促进经济社会持续健康发展促进经济社会持续健康发展',
					img: 2,
					source: "百科故事大全",
					label: 2
				}, {
					title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列',
					img: 0,
					source: "粤港精英联盟",
					label: 0
				}, {
					title: '触手直播“和平精英”星联赛Jstar夺冠 大热',
					img: 0,
					source: "央视新闻网",
					label: 3
				}, {
					title: '开户大战燎原！加急上线科创板预约开户',
					img: 2,
					source: "百科故事大全",
					label: 4
				}, {
					title: '科创板交易系统准备就绪,不存在首批名单',
					img: 0,
					source: "百科故事大全",
					label: 1
				}, {
					title: '美国会表决通过新驻华大使 月底有望赴华',
					img: 4,
					source: "粤港精英联盟",
					label: 0
				}, {
					title: '哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列',
					img: 1,
					source: "粤港精英联盟",
					label: 4
				}, {
					title: '温故知"心"老师们这些话要牢记',
					img: 3,
					source: "央视新闻网",
					label: 0
				}, {
					title: '科创板交易系统准备就绪,不存在首批名单',
					img: 5,
					source: "央视新闻网",
					label: 2
				}],
				loadding: false,
				pullUpOn: true
			}
		},
		methods: {
			detail(e) {
				uni.navigateTo({
					url: '/pages/template/news/newsDetail/newsDetail'
				})
			},
			getLabelText: function(label) {
				return ["", "要闻", "朋友都看过", "本地资讯", "互联网精英看过"][label];
			},
			getLabelCss: function(label) {
				return ["", "b-red", "b-blue", "b-orange", "b-green"][label];
			}
		},
		//页面相关事件处理函数--监听用户下拉动作
		onPullDownRefresh: function() {
			//延时为了看效果
			setTimeout(() => {
				this.newsList = this.loadData;
				this.pageIndex = 1;
				this.pullUpOn = true;
				this.loadding = false;
				uni.stopPullDownRefresh();
				this.tui.toast("刷新成功");
			}, 200)
		},

		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			if (this.pageIndex == 3) {
				this.loadding = false;
				this.pullUpOn = false;
			} else {
				this.newsList = this.newsList.concat(this.loadData);
				this.pageIndex = this.pageIndex + 1;
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.list-view {
		width: 100%;
		background: #fff;
		box-sizing: border-box;
	}

	.list-cell {
		padding: 30rpx 32rpx;
		box-sizing: border-box;
	}

	.cell-title-box {
		position: relative;
	}

	.min {
		min-height: 90rpx
	}

	.cell-title {
		padding-right: 172rpx;
		font-size: 36rpx;
		line-height: 56rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}

	.pdr0 {
		padding-right: 0 !important;
	}

	.img {
		position: absolute;
		right: 0;
		top: 6rpx;
		width: 146rpx;
		height: 146rpx;
		border-radius: 4rpx;
	}

	.sub-title {
		padding-top: 24rpx;
		font-size: 28rpx;
		color: #BCBCBC;
		display: flex;
		align-items: center
	}

	.tag {
		padding: 5rpx 10rpx;
		font-size: 24rpx;
		border-radius: 4rpx;
		margin-right: 20rpx;
	}

	.b-red {
		background: #FCEBEF;
		color: #8A5966;
	}

	.b-blue {
		background: #ECF6FD;
		color: #4DABEB;
	}

	.b-orange {
		background: #FEF5EB;
		color: #FAA851
	}

	.b-green {
		background: #E8F6E8;
		color: #44CF85
	}
</style>
