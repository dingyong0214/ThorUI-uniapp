<template>
	<view class="container">
		<!--header-->
		<view class="tui-header">
			<view class="tui-header-top">
				<view class="tui-top-item" @tap="screen">综合</view>
				<view class="tui-top-item" @tap="screen">销量</view>
				<view class="tui-top-item" @tap="screen">
					<view>价格</view>
					<view class="tui-price-arrow">
						<view class="tui-icon-box tui-arrow-up">
							<tui-icon name="turningup" :size="12" color="#444"></tui-icon>
						</view>
						<view class="tui-icon-box tui-arrow-down">
							<tui-icon name="turningdown" :size="12" color="#444"></tui-icon>
						</view>

					</view>
				</view>
				<view class="tui-top-item tui-screen" @tap="screen">
					<text class="tui-bold">筛选</text>
					<tui-icon name="screen" :size="12" color="#5677fc" :bold="true"></tui-icon>
				</view>
			</view>
			<view class="tui-header-bottom">
				<view class="tui-bottom-item" :class="[proDropIndex==0?'tui-btmItem-active':'']" @tap="btnDropChange(0)">
					<view class="tui-bottom-text" :class="[proDropIndex==0?'tui-active':'']">品牌</view>
					<tui-icon :name="proDropIndex==0?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==0?'#5677fc':'#444'"></tui-icon>
				</view>
				<view class="tui-bottom-item" :class="[proDropIndex==1?'tui-btmItem-active':'']" @tap="btnDropChange(1)">
					<view class="tui-bottom-text" :class="[proDropIndex==1?'tui-active':'']">类型</view>
					<tui-icon :name="proDropIndex==1?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==1?'#5677fc':'#444'"></tui-icon>
				</view>
				<view class="tui-bottom-item" :class="[proDropIndex==2?'tui-btmItem-active':'']" @tap="btnDropChange(2)">
					<view class="tui-bottom-text" :class="[proDropIndex==2?'tui-active':'']">适用手机</view>
					<tui-icon :name="proDropIndex==2?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==2?'#5677fc':'#444'"></tui-icon>
				</view>
			</view>

		</view>

		<!--header-->

		<!--header 顶部下拉选择框-->

		<tui-top-dropdown :show="dropShow" :paddingbtm="110" :translatey="216" @close="btnCloseDrop">
			<scroll-view class="tui-scroll-box" scroll-y scroll-with-animation :scroll-top="scrollTop">
				<view class="tui-seizeaseat-20"></view>
				<view class="tui-drop-item" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in proDropData" :key="index"
				 @tap.stop="btnSelected" :data-index="index">
					<tui-icon name="check" :size="16" color="#5677fc" :bold="true" v-if="item.selected"></tui-icon>
					<text class="tui-ml tui-middle">{{item.name}}</text>
				</view>
				<view class="tui-seizeaseat-30"></view>
			</scroll-view>
			<view class="tui-drop-btnbox">
				<view class="tui-drop-btn tui-button-white" hover-class="tui-button-white_hover" :hover-stay-time="150" @tap="reset">重置</view>
				<view class="tui-drop-btn tui-button-primary" hover-class="tui-button-hover" :hover-stay-time="150" @tap="btnCloseDrop">确定</view>
			</view>
		</tui-top-dropdown>
		<!--header 顶部下拉选择框-->

		<view class="top-dropdown">
			<tui-button type="white" shape="circle" @click="btnDropChange(0)">顶部下拉列表</tui-button>
		</view>

		<!--下拉选择框 dropdownlist-->
		<view class="tui-drop-input-box">
			<tui-dropdown-list :show="dropdownShow" :top="94" :height="400">
				<template v-slot:selectionbox>
					<tui-button type="white" shape="circle" @click="dropDownList(-1)">下拉选择框
						<view class="tui-animation" :class="[dropdownShow?'tui-animation-show':'']">
							<tui-icon name="turningdown" :size="20"></tui-icon>
						</view>
					</tui-button>
				</template>
				<template v-slot:dropdownbox>
					<view class="tui-selected-list">
						<scroll-view scroll-y class="tui-dropdown-scroll">
							<block v-for="(item,index) in dropdownlistData" :key="index">
								<tui-list-cell padding="0" @click="dropDownList(index)" :unlined="dropdownlistData.length-1==index">
									<view class="tui-cell-class">
										<tui-icon :name="item.icon" :size="item.size" :color="item.color"></tui-icon>
										<text class="tui-ml-20">{{item.name}}</text>
									</view>
								
								</tui-list-cell>
							</block>
						</scroll-view>
					</view>
				</template>
			</tui-dropdown-list>
		</view>
		<!--下拉选择框-->

		<view class="tui-share-box">
			<tui-button type="white" shape="circle" @click="popup">底部分享弹窗</tui-button>
		</view>


		<!--底部分享弹窗-->
		<tui-bottom-popup backgroundColor="#f6f6f6"  :zIndex="1002" :maskZIndex="1001" :show="popupShow" @close="popup">
			<view class="tui-share">
				<view class="tui-share-title">分享到</view>
				<scroll-view scroll-x style="padding-right:20rpx">
					<view class="tui-share-top">
						<view class="tui-share-item" :class="[shareList[0].share.length-1===index?'tui-item-last':'']" v-for="(item,index) in shareList[0].share"
						 :key="index" @tap="popup">
							<view class="tui-share-icon" hover-class="tui-hover" :hover-stay-time="150">
								<tui-icon :name="item.icon" :color="item.color" :size="item.size?item.size:36"></tui-icon>
							</view>
							<view class="tui-share-text">{{item.name}}</view>
						</view>
						<view class="tui-empty">!</view>
					</view>

				</scroll-view>

				<scroll-view scroll-x class="tui-mt">
					<view class="tui-share-bottom">
						<view class="tui-share-item" :class="[shareList[1].operate.length-1===index?'tui-item-last':'']" v-for="(item,index) in shareList[1].operate"
						 :key="index" @tap="popup">
							<view class="tui-share-icon" hover-class="tui-hover" :hover-stay-time="150">
								<tui-icon :name="item.icon" color="#404040" :size="item.size" :bold="index===2"></tui-icon>
							</view>
							<view class="tui-share-text">{{item.name}}</view>
						</view>
					</view>

				</scroll-view>
				<view class="tui-btn-cancle" @tap="popup">取消</view>
			</view>
		</tui-bottom-popup>
		<!--底部分享弹窗-->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				proDropList: [{
					list: [{
						name: "trendsetter",
						selected: false
					}, {
						name: "维肯（Viken）",
						selected: false
					}, {
						name: "AORO",
						selected: false
					}, {
						name: "苏发",
						selected: false
					}, {
						name: "飞花令（FHL）",
						selected: false
					}, {
						name: "叶梦丝",
						selected: false
					}, {
						name: "ITZOOM",
						selected: false
					}, {
						name: "亿魅",
						selected: false
					}, {
						name: "LEIKS",
						selected: false
					}, {
						name: "雷克士",
						selected: false
					}, {
						name: "蕊芬妮",
						selected: false
					}, {
						name: "辉宏达",
						selected: false
					}, {
						name: "英西达",
						selected: false
					}, {
						name: "戴为",
						selected: false
					}, {
						name: "魔风者",
						selected: false
					}, {
						name: "即满",
						selected: false
					}, {
						name: "北比",
						selected: false
					}, {
						name: "娱浪",
						selected: false
					}, {
						name: "搞怪猪",
						selected: false
					}]
				}, {
					list: [{
						name: "线充套装",
						selected: false
					}, {
						name: "单条装",
						selected: false
					}, {
						name: "车载充电器",
						selected: false
					}, {
						name: "PD快充",
						selected: false
					}, {
						name: "数据线转换器",
						selected: false
					}, {
						name: "多条装",
						selected: false
					}, {
						name: "充电插头",
						selected: false
					}, {
						name: "无线充电器",
						selected: false
					}, {
						name: "座式充电器",
						selected: false
					}, {
						name: "万能充",
						selected: false
					}, {
						name: "转换器/转接线",
						selected: false
					}, {
						name: "MFI苹果认证",
						selected: false
					}, {
						name: "转换器",
						selected: false
					}, {
						name: "苹果认证",
						selected: false
					}]
				}, {
					list: [{
						name: "通用",
						selected: false
					}, {
						name: "vivo",
						selected: false
					}, {
						name: "OPPO",
						selected: false
					}, {
						name: "魅族",
						selected: false
					}, {
						name: "苹果",
						selected: false
					}, {
						name: "华为",
						selected: false
					}, {
						name: "三星",
						selected: false
					}, {
						name: "荣耀",
						selected: false
					}, {
						name: "诺基亚5",
						selected: false
					}, {
						name: "荣耀4",
						selected: false
					}, {
						name: "诺基",
						selected: false
					}, {
						name: "荣耀",
						selected: false
					}, {
						name: "诺基亚2",
						selected: false
					}, {
						name: "荣耀2",
						selected: false
					}, {
						name: "诺基",
						selected: false
					}]
				}],
				proDropData: [],
				proDropIndex: -1,
				dropShow: false,
				scrollTop: 0,
				dropdownlistData: [{
					name: "微信支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}, {
					name: "支付宝支付",
					icon: "alipay",
					color: "#00AAEE",
					size: 30
				}, {
					name: "银行卡支付",
					icon: "bankcard-fill",
					color: "#ff7900",
					size: 28
				}, {
					name: "微信支付",
					icon: "wechat",
					color: "#80D640",
					size: 30
				}, {
					name: "支付宝支付",
					icon: "alipay",
					color: "#00AAEE",
					size: 30
				}, {
					name: "银行卡支付",
					icon: "bankcard-fill",
					color: "#ff7900",
					size: 28
				}],
				dropdownShow: false,
				popupShow: false,
				shareList: [{
					share: [{
						name: "QQ",
						icon: "qq",
						color: "#07BDFD",
						size: 34
					}, {
						name: "微信",
						icon: "wechat",
						color: "#80D640"
					}, {
						name: "朋友圈",
						icon: "moments",
						color: "#80D640",
						size: 32
					}, {
						name: "支付宝",
						icon: "alipay",
						color: "#00AAEE"
					}, {
						name: "新浪微博",
						icon: "sina",
						color: "#F9C718"
					}, {
						name: "小程序",
						icon: "applets",
						color: "#2BA348"
					}, {
						name: "钉钉",
						icon: "dingtalk",
						color: "#2DA0F1"
					}, {
						name: "浏览器打开",
						icon: "explore-fill",
						color: "#1695F7"
					}, {
						name: "邮件",
						icon: "mail-fill",
						color: "#2868E5"
					}]
				}, {
					operate: [{
						name: "投诉",
						icon: "warning",
						size: 30
					}, {
						name: "复制链接",
						icon: "link",
						size: 28
					}, {
						name: "刷新",
						icon: "refresh",
						size: 30
					}, {
						name: "搜索内容",
						icon: "search-2",
						size: 28
					}]
				}]
			}
		},
		methods: {
			btnDropChange(index) {
				this.proDropData = [...this.proDropList[index].list];
				this.proDropIndex = index;
				this.dropShow = true;
				this.dropdownShow=false
			},
			btnSelected: function(e) {
				let index = e.currentTarget.dataset.index;
				let obj = this.proDropData[index];
				this.$set(obj, 'selected', !obj.selected)
			},
			reset() {
				let arr = this.proDropData;
				for (let item of arr) {
					item.selected = false;
				}
				this.proDropData = arr
			},
			btnCloseDrop() {
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0
				});
				this.dropShow = false;
				this.proDropIndex = -1;
				this.reset()
			},
			screen() {
				this.tui.toast("商城模板中功能~")
			},
			dropDownList(index) {
				if (index !== -1) {
					this.tui.toast("index：" + index)
				}
				this.dropdownShow = !this.dropdownShow
			},
			popup: function() {
				this.popupShow = !this.popupShow
			}
		}
	}
</script>

<style>
	/* 隐藏scroll-view滚动条*/
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	/*header*/
	.tui-header {
		width: 100%;
		padding-top: 34rpx;
		/* box-shadow: 0 15rpx 10rpx -15rpx #f2f2f2; */
		box-sizing: border-box;
		background-color: #fff;
		position: fixed;
		z-index: 1000;
	}

	.tui-header-top,
	.tui-header-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 26rpx;
		color: #333;
	}

	.tui-top-item {
		height: 26rpx;
		line-height: 26rpx;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-topitem-active {
		position: relative;
		font-weight: bold;
	}

	.tui-topitem-active::after {
		content: '';
		position: absolute;
		width: 44rpx;
		height: 6rpx;
		background: #5677fc;
		border-radius: 6rpx;
		bottom: -10rpx;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}

	.tui-price-arrow {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 20rpx;
	}

	.tui-bottom-item .tui-icon-class,
	.tui-screen .tui-icon-class {
		margin-left: 6rpx;
	}

	.tui-icon-box {
		line-height: 12px !important;
		padding: 0 !important;
		display: block !important;
		position: relative;
	}

	.tui-arrow-up {
		top: 5px;
	}

	.tui-arrow-down {
		top: -3px;
	}

	.tui-header-bottom {
		margin-top: 56rpx;
		height: 108rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		align-items: flex-start;
		overflow: hidden;
	}

	.tui-bottom-text {
		line-height: 24rpx;
	}

	.tui-bottom-item {
		flex: 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 18rpx 12rpx;
		border-radius: 40rpx;
		box-sizing: border-box;
		background: #f2f2f2;
		margin-right: 20rpx;
		white-space: nowrap;
	}

	.tui-bottom-item:last-child {
		margin-right: 0;
	}

	.tui-btmItem-active {
		padding-bottom: 60rpx;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-active {
		color: #5677fc;
	}

	.tui-ml {
		margin-left: 6rpx;
	}

	.tui-seizeaseat-20 {
		height: 20rpx;
	}

	.tui-seizeaseat-30 {
		height: 30rpx;
	}

	.tui-middle {
		vertical-align: middle;
	}

	.tui-drop-item .tui-icon-class {
		vertical-align: middle;
	}

	/*header*/

	/*header 下拉选择*/

	.tui-scroll-box {
		width: 100%;
		height: 480rpx;
		box-sizing: border-box;
		position: relative;
		z-index: 99;
		color: #fff;
		font-size: 30rpx;
		word-break: break-all;
	}

	.tui-drop-item {
		color: #333;
		height: 80rpx;
		font-size: 28rpx;
		padding: 20rpx 40rpx 20rpx 40rpx;
		box-sizing: border-box;
		display: inline-block;
		width: 50%;
	}

	.tui-drop-btnbox {
		width: 100%;
		height: 100rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		display: flex;
	}

	.tui-drop-btn {
		width: 50% !important;
		border-radius: 0 !important;
		font-size: 32rpx !important;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		border: 0;
	}


	/*header 下拉选择*/

	.top-dropdown {
		margin-top: 360rpx;
		padding: 0 40rpx;
		box-sizing: border-box;
	}

	.tui-share-box {
		padding: 0 50rpx;
		box-sizing: border-box;
	}

	.tui-drop-input-box {
		padding: 50rpx;
		box-sizing: border-box;
	}

	.tui-animation {
		display: inline-block;
		transform: rotate(0deg);
		transition: all 0.2s;
	}

	.tui-animation-show {
		transform: rotate(180deg);
	}

	.tui-selected-list {
		background-color: #fff;
		border-radius: 20rpx;
		overflow: hidden;
		transform: translateZ(0);
	}

	.tui-dropdown-scroll {
		height: 400rpx;
	}

	.tui-cell-class {
		display: flex;
		align-items: center;
		padding: 26rpx 30rpx !important;
	}

	.tui-ml-20 {
		margin-left: 20rpx;
	}

	.tui-share {
		background: #e8e8e8;
		position: relative;
	}

	.tui-share-title {
		font-size: 26rpx;
		color: #7E7E7E;
		text-align: center;
		line-height: 26rpx;
		padding: 20rpx 0 50rpx 0;
	}

	.tui-share-top,
	.tui-share-bottom {
		min-width: 101%;
		padding: 0 20rpx 0 30rpx;
		white-space: nowrap;
	}

	.tui-mt {
		margin-top: 30rpx;
		padding-bottom: 150rpx;
	}

	.tui-share-item {
		width: 126rpx;
		display: inline-block;
		margin-right: 24rpx;
		text-align: center;
	}

	.tui-item-last {
		margin: 0;
	}

	.tui-empty {
		display: inline-block;
		width: 30rpx;
		visibility: hidden;
	}

	.tui-share-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fafafa;
		height: 126rpx;
		width: 126rpx;
		border-radius: 32rpx;
	}

	.tui-share-text {
		font-size: 24rpx;
		color: #7E7E7E;
		line-height: 24rpx;
		padding: 20rpx 0;
		white-space: nowrap;
	}

	.tui-btn-cancle {
		width: 100%;
		height: 100rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		background: #f6f6f6;
		font-size: 36rpx;
		color: #3e3e3e;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-hover {
		background: rgba(0, 0, 0, 0.2)
	}
</style>
