<template>
	<view class="container">
		<!--顶部消息-->
		<tui-tips ref="toast" :backgroundColor="backgroundColor" v-if="index == 0"></tui-tips>
		<!--顶部消息-->

		<!--居中消息-->
		<tui-tips position="center" :backgroundColor="backgroundColor" ref="toast" v-if="index == 1"></tui-tips>
		<!--居中消息-->

		<!--底部消息-->
		<tui-tips position="bottom" :backgroundColor="backgroundColor" ref="toast" v-if="index == 2"></tui-tips>
		<!--底部消息-->
		<view class="tui-subsection">
			<view class="tui-subsection-item" :class="[index == 0 ? 'tui-active' : '']" data-index="0" @tap="switchTabs">顶部提示</view>
			<view class="tui-subsection-item" :class="[index == 1 ? 'tui-active' : '']" @tap="switchTabs" data-index="1">居中提示</view>
			<view class="tui-subsection-item tui-last-child" :class="[index == 2 ? 'tui-active' : '']" @tap="switchTabs" data-index="2">底部提示</view>
		</view>
		<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover" data-index="0" @tap="showTips">一般提示</button>
		<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover" data-index="1" @tap="showTips">成功提示</button>
		<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover" data-index="2" @tap="showTips">警告提示</button>
		<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover" data-index="3" @tap="showTips">错误提示</button>
		<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover" data-index="4" @tap="showTips">其他提示</button>
		<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover" data-index="5" @tap="showTips">长文字消息提示</button>
		<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover" data-index="6" @tap="showTips">自定义时间消息提示</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			basicData: [
				{
					type: 'translucent',
					msg: '一般消息提示~'
				},
				{
					type: 'green',
					msg: '成功消息提示~'
				},
				{
					type: 'warning',
					msg: '警告消息提示~'
				},
				{
					type: 'danger',
					msg: '错误消息提示~'
				},
				{
					type: 'primary',
					msg: '其他消息提示~'
				},
				{
					type: 'primary',
					msg: '长文字消息提示，看不完信息？可自定义设置显示时间，建议提示信息不要过长'
				},
				{
					type: 'translucent',
					msg: '4S后关闭提示框',
					duration: 4000
				}
			],
			backgroundColor: 'rgba(0, 0, 0, 0.7)',
			index: 0
		};
	},
	methods: {
		showTips: function(e) {
			let index = e.currentTarget.dataset.index;
			this.backgroundColor = { translucent: 'rgba(0, 0, 0, 0.7)', green: '#19be6b', warning: '#ff7900', danger: '#EB0909', primary: '#5677fc' }[this.basicData[index].type];
			let options = {
				msg: this.basicData[index].msg,
				duration: this.basicData[index].duration || 2000
			};
			this.$refs.toast.showTips(options);
		},
		switchTabs: function(e) {
			this.index = e.currentTarget.dataset.index;
		}
	}
};
</script>

<style>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 60rpx 30rpx 100rpx 30rpx;
	box-sizing: border-box;
}

.tui-button-primary {
	margin-bottom: 40rpx;
}

.tui-subsection {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20rpx 0 80rpx 0;
	border-radius: 10rpx;
	overflow: hidden;
	transform: translateZ(0);
	border: 0;
	position: relative;
	border: 1rpx solid #5677fc;
}

.tui-subsection-item {
	position: relative;
	z-index: 10;
}
.tui-subsection view {
	flex: 1;
	font-size: 28rpx;
	text-align: center;
	padding: 10rpx 30rpx;
	color: #5677fc;
	position: relative;
	border-right: 1rpx solid #5677fc;
}
.tui-last-child {
	border-right: 0 !important;
}

.tui-subsection .tui-active {
	background-color: #5677fc;
	color: #fff;
}
</style>
