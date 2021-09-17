<template>
	<view class="container">
		<view class="btn-box"><tui-button shape="circle" shadow @click="showModal">从底部弹出 bottom-popup</tui-button></view>
		<view class="btn-box "><tui-button shape="circle" shadow @click="rDrawer">从右边弹出 Drawer</tui-button></view>
		<view class="btn-box "><tui-button shape="circle" shadow @click="lDrawer">从左边弹出 Drawer</tui-button></view>
		<view class="btn-box "><tui-button shape="circle" shadow @click="bDrawer">从底部弹出 Drawer</tui-button></view>
		<view class="btn-box "><tui-button shape="circle" shadow @click="tDrawer">从顶部部弹出 Drawer</tui-button></view>
		<view class="btn-box"><tui-button shape="circle" shadow @click="topPopup">弹层、下拉框</tui-button></view>

		<!--底部抽屉-->
		<tui-bottom-popup :show="bottomPopup" :radius="false" @close="hideModal">
			<view class="region-box">
				<view
					class="region-txt"
					:class="[index == regionArr.length - 3 || index == regionArr.length - 2 || index == regionArr.length - 1 ? 'grow' : '', tabIndex == index ? 'active' : '']"
					v-for="(item, index) in regionArr"
					:key="index"
					:data-index="index"
					@tap.stop="getRegion"
				>
					{{ item }}
				</view>
			</view>
		</tui-bottom-popup>

		<!--左抽屉-->
		<tui-drawer mode="left" :visible="leftDrawer" @close="closeDrawer">
			<view class="d-container"><tui-button height="80rpx" type="warning" shape="circle" @click="closeDrawer">关闭抽屉</tui-button></view>
		</tui-drawer>

		<!--右抽屉-->
		<tui-drawer mode="right" :visible="rightDrawer" @close="closeDrawer">
			<view class="d-container"><tui-button height="80rpx" type="danger" shape="circle" @click="closeDrawer">关闭抽屉</tui-button></view>
		</tui-drawer>
		<!--底部抽屉-->
		<tui-drawer mode="bottom" :visible="bottomDrawer" @close="closeDrawer">
			<view class="tui-drawer__box"><tui-button height="80rpx" type="green" shape="circle" @click="closeDrawer">关闭抽屉</tui-button></view>
		</tui-drawer>
		<!--顶部抽屉-->
		<tui-drawer mode="top" :visible="topDrawer" @close="closeDrawer">
			<view class="tui-drawer__box"><tui-button height="80rpx" type="green" shape="circle" @click="closeDrawer">关闭抽屉</tui-button></view>
		</tui-drawer>
	</view>
</template>

<script>
export default {
	data() {
		return {
			bottomPopup: false,
			regionArr: [
				'京',
				'津',
				'沪',
				'渝',
				'蒙',
				'新',
				'藏',
				'宁',
				'桂',
				'港',
				'澳',
				'黑',
				'吉',
				'辽',
				'晋',
				'冀',
				'青',
				'鲁',
				'豫',
				'苏',
				'皖',
				'浙',
				'闽',
				'赣',
				'湘',
				'鄂',
				'粤',
				'琼',
				'甘',
				'陕',
				'黔',
				'滇',
				'川'
			],
			regionTxt: '粤',
			tabIndex: 26,
			leftDrawer: false,
			rightDrawer: false,
			bottomDrawer: false,
			topDrawer: false,
			mode: 'right'
		};
	},
	methods: {
		showModal: function() {
			this.bottomPopup = true;
		},
		hideModal: function() {
			this.bottomPopup = false;
		},
		getRegion: function(e) {
			const index = e.currentTarget.dataset.index;
			this.regionTxt = this.regionArr[index];
			this.tabIndex = index;
			this.bottomPopup = false;
			this.tui.toast('您选择了：' + this.regionArr[index]);
		},
		closeDrawer(e) {
			this.leftDrawer = false;
			this.rightDrawer = false;
			this.bottomDrawer = false;
			this.topDrawer = false;
		},
		rDrawer() {
			this.rightDrawer = true;
		},
		lDrawer() {
			this.leftDrawer = true;
		},
		bDrawer() {
			this.bottomDrawer = true;
		},
		tDrawer() {
			this.topDrawer = true;
		},
		topPopup() {
			this.tui.href('/pages/extend/popup/popup');
		}
	}
};
</script>

<style>
.btn-box {
	padding: 30rpx;
}

.btn-box:first-child {
	margin-top: 50rpx;
}

.d-container {
	width: 400rpx;
	padding: 80rpx 30rpx;
}

.tui-drawer__box {
	height: 600rpx;
	padding: 80rpx;
	box-sizing: border-box;
}

/*底部抽屉样式 start*/

.region-box {
	width: 100%;
	height: 712rpx;
	padding: 36rpx 30rpx 40rpx;
	box-sizing: border-box;
	overflow: hidden;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
}

.region-txt {
	width: 96rpx;
	height: 82rpx;
	background: #e9edfc;
	line-height: 82rpx;
	border-radius: 6rpx;
	font-size: 30rpx;
	color: #333;
	text-align: center;
	margin-right: 23rpx;
	margin-bottom: 24rpx;
	flex-grow: 1;
}

.region-txt:nth-of-type(6n) {
	margin-right: 0;
}

.grow {
	flex-grow: 0;
}

.active {
	background: #5677fc;
	color: #fff;
}

/*底部抽屉样式 end*/
</style>
