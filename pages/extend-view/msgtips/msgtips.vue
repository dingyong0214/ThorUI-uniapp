<template>
	<view class="container">
		<!--顶部消息-->
		<tui-tips ref="toast" v-if="index==0"></tui-tips>
		<!--顶部消息-->

		<!--居中消息-->
		<tui-tips position="center" ref="toast" v-if="index==1"></tui-tips>
		<!--居中消息-->

		<!--底部消息-->
		<tui-tips position="bottom" ref="toast" v-if="index==2"></tui-tips>
		<!--底部消息-->
		<view class="tui-subsection">
			<view :class="[index==0?'tui-active':'']" data-index="0" @tap="switchTabs">顶部提示</view>
			<view :class="[index==1?'tui-active':'']" @tap="switchTabs" data-index="1">居中提示</view>
			<view :class="[index==2?'tui-active':'']" @tap="switchTabs" data-index="2">底部提示</view>
		</view>
		<button class="btn-primary btn-gray" hover-class="btn-gray-hover" data-index="0" @tap="showTips">一般提示</button>
		<button class="btn-primary btn-gray" hover-class="btn-gray-hover" data-index="1" @tap="showTips">成功提示</button>
		<button class="btn-primary btn-gray" hover-class="btn-gray-hover" data-index="2" @tap="showTips">警告提示</button>
		<button class="btn-primary btn-gray" hover-class="btn-gray-hover" data-index="3" @tap="showTips">错误提示</button>
		<button class="btn-primary btn-gray" hover-class="btn-gray-hover" data-index="4" @tap="showTips">其他提示</button>
		<button class="btn-primary btn-gray" hover-class="btn-gray-hover" data-index="5" @tap="showTips">长文字消息提示</button>
		<button class="btn-primary btn-gray" hover-class="btn-gray-hover" data-index="6" @tap="showTips">自定义时间消息提示</button>
	</view>
</template>

<script>
	import tuiTips from "@/components/tips/tips"
	export default {
		components: {
			tuiTips
		},
		data() {
			return {
				basicData: [{
					type: "translucent",
					msg: "一般消息提示~"
				}, {
					type: "green",
					msg: "成功消息提示~"
				}, {
					type: "warning",
					msg: "警告消息提示~"
				}, {
					type: "danger",
					msg: "错误消息提示~"
				}, {
					type: "primary",
					msg: "其他消息提示~"
				}, {
					type: "primary",
					msg: "长文字消息提示，看不完信息？可自定义设置显示时间，建议提示信息不要过长"
				}, {
					type: "translucent",
					msg: "4S后关闭提示框",
					duration: 4000
				}],
				index: 0
			}
		},
		methods: {
			showTips: function(e) {
				let index = e.currentTarget.dataset.index;
				let options = {
					msg: this.basicData[index].msg,
					duration: this.basicData[index].duration || 2000,
					type: this.basicData[index].type
				};
				 this.$refs.toast.showTips(options);
			},
			switchTabs: function(e) {
				this.index= e.currentTarget.dataset.index
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 60upx 30upx 100upx 30upx;
		box-sizing: border-box;
	}

	.btn-primary {
		margin-bottom: 40upx;
	}

	.tui-subsection {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 20upx 0 80upx 0;
		border-radius: 10upx;
		overflow: hidden;
		border: 0;
		position: relative;
	}

	.tui-subsection::after {
		content: "";
		position: absolute;
		width: 200%;
		height: 200%;
		border: 1px solid #5677fc;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(0.5, 0.5);
		transform: scale(0.5, 0.5);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 20upx;
		z-index: -1;
	}

	.tui-subsection view {
		flex: 1;
		font-size: 28upx;
		text-align: center;
		padding: 10upx 30upx;
		color: #5677fc;
		position: relative;
	}

	.tui-subsection view::after {
		content: "";
		position: absolute;
		height: 100%;
		width: 1px;
		border-right: 1px solid #5677fc;
		-webkit-transform-origin: 100% 0;
		transform-origin: 100% 0;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
		right: 0;
		top: 0;
	}

	.tui-subsection view:last-child::after {
		border-right: 0;
	}

	.tui-subsection view.tui-active {
		background: #5677fc;
		color: #fff;
	}
</style>
