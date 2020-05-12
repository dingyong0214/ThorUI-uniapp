<template>
	<view class="container">
		<view class="header">
			<view class="title">滑动菜单</view>
			<view class="sub-title">swipeAction滑动菜单：actions长度为0时，插槽可直接传入操作菜单按钮。</view>
		</view>
		<view class="tui-title">基本使用</view>
		<tui-swipe-action :actions="actions" @click="handlerButton">
			<template v-slot:content>
				<view class="tui-list-item">基本使用</view>
			</template>
		</tui-swipe-action>

		<view class="tui-title">点击按钮时不关闭</view>
		<tui-swipe-action :actions="actions2" :closable="false" @click="handlerButton2">
			<template v-slot:content>
				<view class="tui-list-item">点击按钮时不关闭</view>
			</template>
		</tui-swipe-action>

		<view class="tui-title">禁止滑动展示</view>
		<tui-swipe-action :actions="actions2" :closable="false" forbid @click="handlerButton2">
			<template v-slot:content>
				<view class="tui-list-item">禁止滑动展示</view>
			</template>
		</tui-swipe-action>

		<view class="tui-title">
			使用变量控制开关
			<switch color="#19be6b" class="tui-switch" @change="switchChange"></switch>
		</view>
		<tui-swipe-action :actions="actions2" :open="open" @click="handlerButton2">
			<template v-slot:content>
				<view class="tui-list-item">使用变量控制开关</view>
			</template>
		</tui-swipe-action>

		<view class="tui-title">可同时打开多行菜单</view>
		<tui-swipe-action :actions="actions2" :showMask="false" @click="handlerButton2">
			<template v-slot:content>
				<view class="tui-list-item">打开关闭互不影响</view>
			</template>
		</tui-swipe-action>
		<tui-swipe-action :actions="actions2" :showMask="false" @click="handlerButton2">
			<template v-slot:content>
				<view class="tui-list-item">打开关闭互不影响</view>
			</template>
		</tui-swipe-action>
		<tui-swipe-action :actions="actions2" :showMask="false" @click="handlerButton2">
			<template v-slot:content>
				<view class="tui-list-item">打开关闭互不影响</view>
			</template>
		</tui-swipe-action>
		<view class="tui-title">自定义操作菜单</view>

		<tui-swipe-action :operateWidth="140">
			<template v-slot:content>
				<view class="tui-list-item">自定义操作菜单，不传actions</view>
			</template>
			<template v-slot:button>
				<view class="tui-custom-btn_box">
					<view class="tui-custom-btn tui-custom-mr" @tap="customBtn(0)"><tui-icon name="star" color="#333" :size="20"></tui-icon></view>
					<view class="tui-custom-btn" @tap="customBtn(1)"><tui-icon name="delete" color="#333" :size="18"></tui-icon></view>
				</view>
			</template>
		</tui-swipe-action>
	</view>
</template>

<script>
export default {
	data() {
		return {
			actions: [
				{
					name: '删除',
					color: '#fff',
					fontsize: 30, //单位rpx
					width: 70, //单位px
					background: '#FD3B31'
				},
				{
					name: '修改',
					color: '#fff',
					fontsize: 30,
					width: 70,
					background: '#5677fc'
				},
				{
					name: '收藏',
					width: 70,
					fontsize: 30,
					color: '#fff',
					background: '#C8C7CD'
				}
			],
			actions2: [
				{
					name: '普通',
					color: '#fff',
					fontsize: 30,
					width: 70,
					background: '#C8C7CD'
				},
				{
					name: '警示',
					color: '#fff',
					fontsize: 30, //单位rpx
					width: 70, //单位px
					background: '#FD3B31'
				}
			],
			open:false
		};
	},
	methods: {
		handlerButton(e) {
			let index = e.index;
			let item = e.item;
			let menuTxt = ['删除', '修改', '收藏'][index];
			this.tui.toast('您点击了【' + menuTxt + '】按钮');
		},
		handlerButton2(e) {
			let index = e.index + 1;
			this.tui.toast('您点击了按钮' + index);
		},
		customBtn(index) {
			index = index + 1;
			this.tui.toast('您点击了按钮' + index);
		},
		switchChange: function(e) {
			this.open = e.target.value;
		}
	}
};
</script>

<style>
.container {
	padding-bottom: 120rpx;
}

.header {
	padding: 80rpx 90rpx 60rpx 90rpx;
	box-sizing: border-box;
}

.title {
	font-size: 34rpx;
	color: #333;
	font-weight: 500;
}

.sub-title {
	font-size: 24rpx;
	color: #7a7a7a;
	padding-top: 18rpx;
}

.tui-list-item {
	padding: 40rpx 30rpx;
	display: flex;
	align-items: item;
}

.tui-title {
	width: 100%;
	padding: 50rpx 30rpx 30rpx;
	box-sizing: border-box;
	font-size: 32rpx;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.tui-switch {
	transform: scale(0.8);
	transform-origin: 100% center;
}

.tui-custom-btn_box {
	width: 140px;
	height: 100%;
	padding: 0 20rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fafafa;
}

.tui-custom-btn {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	background-color: #fff;
	color: #333;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}

.tui-custom-mr {
	margin-right: 20rpx;
}
</style>
