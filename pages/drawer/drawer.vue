<template>
	<view class="container">
		<!-- #ifdef APP-PLUS || MP-->
		<view class="btn-box">
			<button class="btn-primary" hover-class="btn-hover" @tap="showModal">从底部弹出</button>
		</view>
		<!-- #endif -->
		
		<view class="btn-box ">
			<button class="btn-primary" hover-class="btn-hover" @tap="rDrawer">从右边弹出</button>
		</view>
		<view class="btn-box ">
			<button class="btn-primary" hover-class="btn-hover" @tap="lDrawer">从左边弹出</button>
		</view>

		<!--底部抽屉-->
		<view class="mask-screen" @tap="hideModal" v-show="showModalStatus"></view>
		<view :animation="animationData" class="region-box" v-show="showModalStatus">
			<view class="region-txt" :class="[(index==regionArr.length-3 || index==regionArr.length-2 || index==regionArr.length-1)?'grow':'',tabIndex==index?'active':'']"
			 v-for="(item,index) in regionArr" :data-index="index" @tap.stop="getRegion">{{item}}</view>
		</view>

		<!--左抽屉-->
		<tui-drawer mode="left" :visible="leftDrawer" @close="closeDrawer">
			<view class="d-container">
				<button class="btn-primary" hover-class="btn-hover" @tap="closeDrawer">关闭抽屉</button>
			</view>
		</tui-drawer>

		<!--右抽屉-->
		<tui-drawer mode="right" :visible="rightDrawer" @close="closeDrawer">
			<view class="d-container">
				<button class="btn-primary" hover-class="btn-hover" @tap="closeDrawer">关闭抽屉</button>
			</view>
		</tui-drawer>

	</view>
</template>

<script>
	import tuiDrawer from "@/components/drawer/drawer"
	export default {
		components: {
			tuiDrawer
		},
		data() {
			return {
				showModalStatus: false,
				animationData: "",
				regionArr: [
					"京", "津", "沪", "渝", "蒙", "新",
					"藏", "宁", "桂", "港", "澳", "黑",
					"吉", "辽", "晋", "冀", "青", "鲁",
					"豫", "苏", "皖", "浙", "闽", "赣",
					"湘", "鄂", "粤", "琼", "甘", "陕",
					"黔", "滇", "川"
				],
				regionTxt: "粤",
				tabIndex: 26,
				leftDrawer: false,
				rightDrawer: false,
				mode: "right"
			}
		},
		methods: {
			showModal: function() {
				// 显示遮罩层
				// 创建动画实例 
				let animation = uni.createAnimation({
					duration: 200,
					timingFunction: "linear",
					delay: 0
				})
				animation.translateY(uni.upx2px(712)).step()
				this.animationData = animation.export();
				this.showModalStatus = true
				setTimeout(function() { 
					animation.translateY(0).step()
					this.animationData = animation.export()
				}.bind(this), 200)
			},
			hideModal: function() {
				this.showModalStatus = false
			},
			getRegion: function(e) {
				const index = e.currentTarget.dataset.index
				this.regionTxt = this.regionArr[index];
				this.tabIndex = index;
				this.showModalStatus = false;
				this.tui.toast('您选择了：' + this.regionArr[index])
			},
			closeDrawer(e) {
				this.leftDrawer = false
				this.rightDrawer = false
			},
			rDrawer() {
				this.rightDrawer = true
			},
			lDrawer() {
				this.leftDrawer = true
			}
		}
	}
</script>

<style>
	.btn-box {
		padding: 30upx
	}
	.btn-box:first-child{
		margin-top: 50upx
	}

	.d-container {
		width: 400upx;
		padding: 80upx 30upx
	}


	/*底部抽屉样式 start*/

	.mask-screen {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #000;
		opacity: 0.5;
		overflow: hidden;
		z-index: 9;
	}

	.region-box {
		width: 100%;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 10;
		background: #fff;
		padding-top: 20upx;
		height: 712upx;
		padding: 40upx 30upx 48upx 30upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
	}

	.region-txt {
		width: 96upx;
		height: 82upx;
		background: #e9edfc;
		line-height: 82upx;
		border-radius: 6upx;
		font-size: 30upx;
		color: #333;
		text-align: center;
		margin-right: 23upx;
		margin-bottom: 26upx;
		flex-grow: 1
	}

	.region-txt:nth-of-type(6n) {
		margin-right: 0
	}

	.grow {
		flex-grow: 0
	}

	.active {
		background: #5677FC;
		color: #fff;
	}

	/*底部抽屉样式 end*/
</style>
