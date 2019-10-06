<template>
	<view class="container">
		<!-- #ifdef APP-PLUS || MP -->
		<view class="tui-header">功能开发中，敬请期待！最新完成：
			<text class="tui-current" @tap="currentStep">聊天模板</text>
		</view>
		<!-- #endif -->
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
	import tuiIcon from "@/components/icon/icon"
	import tuiTimeAxis from "@/components/time-axis/time-axis"
	import tuiTimeaxisItem from "@/components/timeaxis-item/timeaxis-item"
	export default {
		components:{
			tuiIcon,
			tuiTimeAxis,
			tuiTimeaxisItem
		},
		data() {
			return {
				stepList: [{
					name: "preface",
					state: 1,
					stateText: "",
					desc: ["计划前三套模板：新闻、商城、聊天。完成后再逐步追加，敬请期待！"],
					page: "news"
				}, {
					name: "新闻模板",
					state: 1,
					stateText: "（100%）",
					desc: ["新闻模板包含：新闻列表，新闻详情，评论等"],
					page: "news"
				}, {
					name: "聊天模板",
					state: 1,
					stateText: "（100%）",
					desc: ["聊天模板包含：消息列表，好友列表，聊天界面等"],
					page: "msgList"
				}, {
					name: "商城模板",
					state: 0,
					stateText: "（进度85%）",
					desc: ["商城模板包含：商品列表，商品搜索，商品详情，购物车，结算页面，我的订单等"],
					page: "mall"
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
						url: "../" + page + "/" + page //`../${page}/${page}`
					})
				} else {
					this.tui.toast("功能开发中~")
				}
			},
			currentStep: function() {
				uni.navigateTo({
					url: '../msgList/msgList'
				})
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
		padding: 0 30upx;
		box-sizing: border-box;
		font-size: 24upx;
		color: #999;
		height: 54upx;
		line-height: 54upx;
		background: #fff8d5;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 999999;
	}

	.tui-current {
		color: #5c8dff;
		font-weight: bold;
	}

	.tui-template {
		padding: 84upx 80upx 30upx 40upx;
		box-sizing: border-box;
	}

	.tui-node {
		padding: 3px 0;
	}

	.tui-content-template {
		border-radius: 10upx;
		position: relative;
		padding: 20upx 26upx;
		font-size: 28upx;
		color: #fff;
		background: #5c8dff;
		border: 1upx solid #5c8dff;
		display: inline-block;
	}

	.tui-content-template::before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		top: 14upx;
		border: 16upx solid;
		right: 100%;
		border-color: transparent #5c8dff transparent transparent;
	}

	.tui-template-gray {
		background: #ededed !important;
		border: 1upx solid #ededed !important;
		color: #999 !important;
	}

	.tui-template-gray::before {
		border-color: transparent #ededed transparent transparent !important;
	}

	.tui-version-date {
		font-size: 32upx;
		font-weight: bold;
		padding-bottom: 20upx;
	}
</style>
