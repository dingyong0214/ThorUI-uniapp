<template>
	<view class="container">
		<view class="tui-header">
			功能开发中，敬请期待！最新完成：
			<text class="tui-current" @tap="currentStep">短视频</text>
		</view>
		
		<view class="tui-template">
			<tui-time-axis>
				<block v-for="(item,index) in stepList" :key="index">
					<tui-timeaxis-item>
						<template v-slot:node>
							<view class="tui-node">
								<tui-icon :name="index==0?'satisfied':'circle-fill'" :color="item.state==1?'#5c8dff':'#ddd'" :size="18"></tui-icon>
							</view>
						</template>
						<template v-slot:content>
							<view class="tui-content-template" :class="[item.state==1?'':'tui-template-gray']" :data-index="index" @tap="template">
								<view class="tui-version-date">{{item.name+item.stateText}}</view>
								<view v-for="(model,index2) in item.desc" :key="index2">{{model}}</view>
							</view>
						</template>
					</tui-timeaxis-item>
				</block>
			</tui-time-axis>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				stepList: [{
					name: "preface",
					state: 1,
					stateText: "",
					desc: ["计划前三套模板：新闻、商城、聊天。完成后再逐步追加，敬请期待！"],
					page: "/pages/template/news/index/index"
				}, {
					name: "新闻模板",
					state: 1,
					stateText: "（100%）",
					desc: ["新闻模板包含：新闻列表，新闻详情，评论等"],
					page: "/pages/template/news/index/index"
				}, {
					name: "聊天模板",
					state: 1,
					stateText: "（100%）",
					desc: ["聊天模板包含：消息列表，好友列表，聊天界面等"],
					page: "/pages/template/chat/msgList/msgList"
				}, {
					name: "商城模板",
					state: 1,
					stateText: "（进度100%）",
					desc: ["商城模板包含：商品列表，商品搜索，商品详情，购物车，结算页面，我的订单等"],
					page: "/pages/template/mall/mall/mall"
				}, {
					name: "签到模板",
					state: 1,
					stateText: "（进度100%）",
					desc: ["点star获取模板，详细获取方式查看V1.5.2更新日志"],
					page: "/pages/common/log/log"
				}, {
					name: "多语言模板",
					state: 1,
					stateText: "（进度100%）",
					desc: ["该模板非会员仅供参考学习，源码地址查看V1.5.2更新日志"],
					page: "/pages/common/log/log"
				}, {
					name: "订餐",
					state: 0,
					stateText: "（进度100%）",
					desc: ["订餐模板：列表，评价，购物车，订单，我的等。该模板为付费模板不开源，会员9折，后续会通知具体开放日期。"],
					page: ""
				}, {
					name: "短视频",
					state: 0,
					stateText: "（进度100%）",
					desc: ["短视频播放，类似抖音视频模板，该模板为付费模板不开源，会员9折，后续会通知具体开放日期。"],
					page: ""
				}, {
					name: "其它模板",
					state: 0,
					stateText: "",
					desc: ["更多内容敬请期待！"],
					page: "news"
				}]
			}
		},
		methods: {
			template: function(e) {
				let index = e.currentTarget.dataset.index;
				let state = this.stepList[index].state;
				let page = this.stepList[index].page;
				if (state == 1 || index == 3) {
					uni.navigateTo({
						url: page
					})
				} else {
					this.tui.toast("功能开发中~")
				}
			},
			currentStep: function() {
				this.tui.toast("此版本暂不开源，敬请期待！")
			}
		}
	}
</script>

<style>
	.container {
		overflow: hidden;
	}

	.tui-header {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #999;
		height: 54rpx;
		line-height: 54rpx;
		background: #fff8d5;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		top:44px;
		/* #endif */
		z-index: 998;
	}

	.tui-current {
		color: #5c8dff;
		font-weight: bold;
	}

	.tui-template {
		padding: 84rpx 80rpx 30rpx 40rpx;
		box-sizing: border-box;
	}

	.tui-node {
		padding: 3px 0;
	}

	.tui-content-template {
		border-radius: 10rpx;
		position: relative;
		padding: 20rpx 26rpx;
		font-size: 28rpx;
		color: #fff;
		background: #5c8dff;
		border: 1rpx solid #5c8dff;
		display: inline-block;
	}

	.tui-content-template::before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		top: 14rpx;
		border: 16rpx solid;
		right: 100%;
		border-color: transparent #5c8dff transparent transparent;
	}

	.tui-template-gray {
		background: #ededed !important;
		border: 1rpx solid #ededed !important;
		color: #999 !important;
	}

	.tui-template-gray::before {
		border-color: transparent #ededed transparent transparent !important;
	}

	.tui-version-date {
		font-size: 32rpx;
		font-weight: bold;
		padding-bottom: 20rpx;
	}
</style>
