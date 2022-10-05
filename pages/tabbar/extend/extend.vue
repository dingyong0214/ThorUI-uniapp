<template>
	<view class="tui-container">
		<view class="tui-extend-box">
			<block v-for="(item, index) in list" :key="index">
				<view v-if="(index + 1) % 2 != 0" class="tui-extend-item" :class="['tui-bg-' + item.bg]" @tap.stop="detail(item.page)">
					<view class="tui-title tui-light">{{ item.name }}</view>
					<view class="tui-sub-title">{{ item.desc }}</view>
					<view class="tui-footer">
						<tui-tag padding="12rpx 24rpx" size="24rpx" type="white" shape="circle" :plain="true">查看详情</tui-tag>
						<view>
							<button @tap.stop="like(index)" class="tui-btn">
								<tui-icon :name="item.like ? 'like-fill' : 'like'" :color="item.like ? '#f54f46' : '#fff'" :size="20" class="tui-l-icon"></tui-icon>
							</button>
							<button open-type="share" @tap.stop="onshare" class="tui-btn" :data-id="index">
								<tui-icon name="partake" color="#fff" :size="20" class="tui-r-icon"></tui-icon>
							</button>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="tui-extend-box">
			<block v-for="(item, index) in list" :key="index">
				<view v-if="(index + 1) % 2 == 0" class="tui-extend-item" :class="'tui-bg-' + item.bg" :id="item.page" @tap.stop="detail(item.page)">
					<view class="tui-title tui-light">{{ item.name }}</view>
					<view class="tui-sub-title">{{ item.desc }}</view>
					<view class="tui-footer">
						<tui-tag padding="12rpx 24rpx" size="24rpx" type="white" shape="circle" :plain="true">查看详情</tui-tag>
						<view>
							<view @tap.stop="like(index)" class="tui-btn">
								<tui-icon :name="item.like ? 'like-fill' : 'like'" :color="item.like ? '#f54f46' : '#fff'" :size="20" class="tui-l-icon"></tui-icon>
							</view>
							<button open-type="share" @tap.stop="onshare" class="tui-btn" :data-id="index">
								<tui-icon name="partake" color="#fff" :size="20" class="tui-r-icon"></tui-icon>
							</button>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				list: [],
				listOnline: [{
						name: '字体图标',
						desc: 'icon：常用字体图标，支持基本样式设置，支持nvue。',
						page: '/pages/extend/icon/icon',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Button按钮',
						desc: 'Button按钮:可自定义宽高，设置字体大小，阴影，圆角，镂空等。',
						page: '/pages/extend/button/button',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Tag标签',
						desc: 'Tag标签：可自定义大小，设置字体大小，圆角，镂空等。',
						page: '/pages/extend/tag/tag',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Badge 徽章',
						desc: 'Badge：可设置成圆点或数字角标，支持缩放以及定位设置。',
						page: '/pages/extend/badge/badge',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'List 列表',
						desc: 'List：可设置点击效果，可设置是否显示箭头。',
						page: '/pages/extend/list/list',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Card 卡片',
						desc: 'Card 卡片：根据需要设置内容，可设置是否通栏。',
						page: '/pages/extend/card/card',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Grid 宫格',
						desc: 'Grid 宫格：可设置2~5列，以及基本样式设置。',
						page: '/pages/extend/grid/grid',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Loading 加载',
						desc: '加载效果以及加载完成或无数据时的效果。',
						page: '/pages/extend/loading/loading',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Footer 页脚',
						desc: 'Footer 页脚：支持基本样式设置，可设置是否固定在底部。',
						page: '/pages/extend/footer/footer',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '消息提示',
						desc: '包括顶部提示，居中提示，底部提示。可切换提示框背景颜色。',
						page: '/pages/extend/msgTips/msgTips',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '吸顶容器',
						desc: 'sticky吸顶容器，支持设置吸顶容器距离顶部距离，支持异步加载。',
						page: '/pages/extend/sticky/sticky',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '数字键盘',
						desc: '例子包括6位数和4位数输入，长度动态传入，根据实际情况使用。',
						page: '/pages/extend/keyboard/keyboard',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '时间轴',
						desc: 'time-axis时间轴，样式可自定义，例子实现了物流时间轴，在【thor=>日志】中也有使用。',
						page: '/pages/extend/timeaxis/timeaxis',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '滚动消息',
						desc: '滚动消息：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品。',
						page: '/pages/extend/rollingNews/rollingNews',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '弹层下拉选择',
						desc: '包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层。',
						page: '/pages/extend/popup/popup',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'ActionSheet',
						desc: '操作菜单:可加入提示信息，可单独设置字体样式。',
						page: '/pages/extend/actionsheet/actionsheet',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'NumberBox',
						desc: '数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)。',
						page: '/pages/extend/numberbox/numberbox',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Rate评分',
						desc: 'Rate评分:可设置大小颜色，支持半星，支持手势touch选择。',
						page: '/pages/extend/rate/rate',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Modal弹框',
						desc: 'Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。',
						page: '/pages/extend/modal/modal',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '倒计时',
						desc: '倒计时:时分秒倒计时，支持设置大小，颜色等。',
						page: '/pages/extend/countdown/countdown',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '分隔符',
						desc: 'Divider分隔符：可设置占据高度，线条宽度，颜色等。',
						page: '/pages/extend/divider/divider',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '卡片轮播',
						desc: '卡片轮播：包含顶部轮播，秒杀商品轮播等。',
						page: '/pages/extend/carousel/carousel',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '回到顶部',
						desc: '回到顶部：可设置bottom，right值，可设置距离顶部多少距离显示。',
						page: '/pages/extend/goTop/goTop',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'alert弹框',
						desc: 'alert弹框：可设置提示文本，按钮文本及样式。',
						page: '/pages/extend/alert/alert',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'No Data',
						desc: '无数据提示：默认居中显示，可设置。带操作按钮，可隐藏。',
						page: '/pages/extend/nodata/nodata',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'toast提示',
						desc: 'toast提示：带icon提示，可隐藏，居中显示。',
						page: '/pages/extend/toast/toast',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '表单验证',
						desc: 'Form Validation：常用的表单验证,只需配置验证项以及相关提示。',
						page: '/pages/extend/formValidation/formValidation',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '日期时间选择',
						desc: 'picker-view扩展，日期时间选择器，可设置默认显示，可根据需要调整选择的类型。',
						page: '/pages/extend/picker-dateTime/picker-dateTime',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '复制文本',
						desc: 'clipboard，复制到剪贴板，兼容H5，APP和小程序依然使用平台自带api。',
						page: '/pages/extend/clipboard/clipboard',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '悬浮按钮',
						desc: 'fab，拓展出来的按钮不应多于6个，否则违反了作为悬浮按钮的快速、高效的原则。',
						page: '/pages/extend/fab/fab',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'Tabbar',
						desc: 'Tabbar，类似uni-app原生tabbar组件，可用于自定义tabbar。',
						page: '/pages/extend/tabbar/tabbar',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'tabs标签页',
						desc: 'tabs标签页，支持设置字体颜色、字体大小、背景色、高度等。',
						page: '/pages/extend/tabs/tabs',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '折叠面板',
						desc: 'collapse折叠面板，用来折叠/显示过长的内容或者是列表。内容及样式自定义。',
						page: '/pages/extend/collapse/collapse',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '图片上传',
						desc: 'upload，图片上传，需要根据上传接口实际返回数据进行适当调整 。',
						page: '/pages/extend/upload/upload',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '骨架屏',
						desc: '数据请求时常见到锁屏的loading动画，而现在越来越多的产品倾向于使用Skeleton Screen替代 。',
						page: '/pages/extend/skeleton/skeleton',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '日历',
						desc: 'calendar日历： 可选择单个日期，可选择日期区间(可跨年跨月)，支持设置日期可选范围，支持设置状态。',
						page: '/pages/extend/calendar/calendar',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '步骤条',
						desc: 'Steps步骤条： 支持横向与纵向以及基本样式设置。',
						page: '/pages/extend/steps/steps',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'drawer 抽屉',
						desc: 'drawer： 左右抽屉，内容超过一屏时建议使用scroll-view。',
						page: '/pages/extend/drawer/drawer',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '滑动菜单',
						desc: 'swipeAction滑动菜单：actions长度为0时，插槽可直接自定义操作菜单按钮。',
						page: '/pages/extend/swipeAction/swipeAction',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '底部导航菜单',
						desc: 'Bottom Navigation：支持二级菜单，支持暗黑模式，具体使用参考文档。',
						page: '/pages/extend/bottom-navigation/bottom-navigation',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '级联选择',
						desc: 'Cascade Selection：支持一次性传入所有数据，支持分级请求返回数据，支持N级，直至没有下一级数据。',
						page: '/pages/extend/selection/selection',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '圆形进度条',
						desc: 'Circular Progress：圆形进度条，可设置大小颜色等基本样式，可显示进度或自定义显示内容。',
						page: '/pages/extend/circular-progress/circular-progress',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '图片裁剪',
						desc: 'Image Cropper：图片裁剪，组件提供了默认裁剪，可自定义操作栏。',
						page: '/pages/extend/cropper/cropper',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'NavBar',
						desc: 'NavBar自定义导航栏，支持自定义NavBar内容，支持渐变，支持沉浸式。',
						page: '/pages/extend/navigation-bar/navigation-bar',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '气泡弹框',
						desc: 'Bubble Popup：最常见的右上角弹出菜单，可以做聊天对话框使用。可设置不同方向。',
						page: '/pages/extend/bubble/bubble',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '图片组合',
						desc: 'Image Group图片组合，可设置图片宽高，圆角，偏移距离等，可设置排列方向。',
						page: '/pages/extend/image/image',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '颜色分析器',
						desc: 'color analysis，图片颜色分析，传入图片获取图片主颜色。',
						page: '/pages/extend/color-analysis/color-analysis',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '中文转拼音',
						desc: 'chinese to pinyin，获取拼音首字母等，使用场景：如获取通讯录按A-Z排序。',
						page: '/pages/extend/zhToPinYin/zhToPinYin',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '富文本解析',
						desc: 'uParse，uni-app框架下富文本解析，支持markdown和html解析。',
						page: '/pages/extend/richText/richText',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '网络请求',
						desc: 'Network request，发起网络请求，简单的封装与使用 。',
						page: '/pages/extend/request/request',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '抽奖转盘',
						desc: '抽奖转盘，例子使用随机值进行抽奖，可以指定中奖奖项。',
						page: '/pages/extend/luckdraw/luckdraw',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '新闻模板',
						desc: '新闻模板包含：新闻列表，新闻详情，评论等。',
						page: '/pages/template/news/index/index',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '聊天模板',
						desc: '聊天模板包含：消息列表，好友列表，聊天界面等。',
						page: '/pages/template/chat/msgList/msgList',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '商城模板',
						desc: '商城模板包含：商城首页，商城列表，商城详情，购物车等。',
						page: '/pages/template/mall/mall/mall',
						like: false,
						bg: this.getRandom()
					},
					{
						name: '会员模板',
						desc: '新闻，聊天，商城，登录。',
						page: '/pages/extend/template/template',
						like: false,
						bg: this.getRandom()
					},
					{
						name: 'ThorUI示例',
						desc: 'ThorUI示例项目中组件内容只对会员开放，ThorUI示例是该组件库的扩展项目。',
						page: 'thorui',
						like: false,
						bg: this.getRandom()
					}
				]
			};
		},
		computed: {
			...mapState(['networkConnected', 'isOnline'])
		},
		watch: {
			networkConnected(isConnected) {
				if (isConnected) {
					this.statusChange();
				}
			},
			isOnline(val) {
				if (val) {
					this.statusChange();
				}
			}
		},
		onLoad() {
			this.statusChange();
		},
		methods: {
			...mapActions(['getOnlineStatus']),
			async statusChange() {
				let list = [...this.listOnline];
				this.list = list.splice(0, 50);
				let isOnline = await this.getOnlineStatus();
				if (isOnline) {
					this.list = this.listOnline;
				}
			},
			getRandom: function(index) {
				var rnd = Math.floor(Math.random() * 6 + 1);
				return rnd;
			},
			detail: function(pageUrl) {
				if(pageUrl=='thorui'){
					this.openThorUI()
				}else{
					this.tui.href(pageUrl);
				}
				
			},
			like: function(index) {
				this.$set(this.list[index], 'like', !this.list[index].like);
			},
			onshare: function(e) {
				//#ifdef APP-PLUS
				let index = e.target.dataset.id;
				let title = this.list[index].name;
				plus.share.sendWithSystem({
						content: 'ThorUI：' + title,
						href: 'https://thorui.cn/'
					},
					function() {
						console.log('分享成功');
					},
					function(e) {
						console.log('分享失败：' + JSON.stringify(e));
					}
				);
				//#endif
				return false;
			},
			openThorUI() {
				// #ifdef MP-WEIXIN
				wx.navigateToMiniProgram({
					appId: 'wxd3c1da92cb8fcf40'
				});
				// #endif
			
				// #ifndef  MP-WEIXIN
				if (this.sweixin) {
					this.sweixin.launchMiniProgram({
						id: 'gh_78d54c9830d3'
					});
				} else {
					uni.previewImage({
						urls: ['https://thorui.cn/img/applets_extend.jpg']
					});
				}
				// #endif
			}
		},
		onShareAppMessage: function(e) {
			let index = e.target.dataset.id;
			let title = this.list[index].name;
			return {
				title: title
			};
		}
	};
</script>

<style>
	page {
		-webkit-font-smoothing: antialiased;
	}

	.tui-container {
		width: 100%;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.tui-extend-box {
		flex: 1;
		margin-right: 10rpx;
	}

	.tui-extend-box:last-child {
		margin-right: 0;
	}

	.tui-extend-item {
		/* display: inline-block; */
		width: 100%;
		padding: 30rpx 20rpx;
		margin-bottom: 10rpx;
		border-radius: 20rpx;
		box-sizing: border-box;
		color: #fff;
		font-family: 'Microsoft YaHei';
		text-align: justify;
		word-break: break-all;
		word-wrap: break-word;
		position: relative;
	}

	.tui-extend-item::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 20rpx;
	}

	.tui-title {
		font-size: 40rpx;
		line-height: 40rpx;
		font-weight: bold;
		position: relative;
	}

	.tui-sub-title {
		font-size: 32rpx;
		padding-top: 30rpx;
		color: #fff;
		position: relative;
		z-index: 10;
	}

	.tui-footer {
		padding-top: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		z-index: 10;
		height: 44rpx;
	}

	.tui-r-icon {
		padding-left: 16rpx;
		padding-bottom: 5rpx;
	}

	.tui-l-icon {
		padding: 0 10rpx 5rpx 8rpx;
	}

	.tui-btn {
		background: transparent !important;
		padding: 0;
		/* #ifdef MP-ALIPAY */
		padding: 0 12rpx;
		/* #endif */
		margin: 0;
		display: inline;
		border: 0;
	}

	.tui-btn::after {
		border: 0;
	}

	.tui-bg-1 {
		background: #282537;
		background-image: -webkit-radial-gradient(top, circle farthest-corner, #3c3b52 0%, #252233 80%);
		background-image: radial-gradient(top, circle farthest-corner, #3c3b52 0%, #252233 80%);
	}

	.tui-bg-2 {
		background: #092756;
		background: -webkit-radial-gradient(0% 100%, ellipse farthest-corner, rgba(104, 128, 138, 0.4) 10%, rgba(138, 114, 76, 0) 40%),
			-webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%), -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
		background: -webkit-radial-gradient(0% 100%, ellipse farthest-corner, rgba(104, 128, 138, 0.4) 10%, rgba(138, 114, 76, 0) 40%),
			linear-gradient(to bottom, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%), linear-gradient(135deg, #670d10 0%, #092756 100%);
	}

	.tui-bg-3 {
		background-image: linear-gradient(#8b9da9, #fff6e4);
		box-shadow: inset 0 0 100px hsla(0, 0%, 0%, 0.3);
	}

	.tui-bg-4 {
		background: rgb(105, 155, 200);
		background: -webkit-gradient(radial, top left, 0px, top left, 100%, color-stop(0%, rgba(105, 155, 200, 1)), color-stop(57%, rgba(181, 197, 216, 1)));
		background: -webkit-radial-gradient(top left, ellipse farthest-corner, rgba(105, 155, 200, 1) 0%, rgba(181, 197, 216, 1) 57%);
	}

	.tui-bg-5 {
		background-image: linear-gradient(45deg, rgba(194, 233, 221, 0.5) 1%, rgba(104, 119, 132, 0.5) 100%), linear-gradient(-45deg, #494d71 0%, rgba(217, 230, 185, 0.5) 80%);
	}

	.tui-bg-6 {
		background: rgb(244, 226, 156);
		background: -webkit-linear-gradient(-45deg, rgba(244, 226, 156, 0) 0%, rgba(59, 41, 58, 1) 100%),
			-webkit-linear-gradient(left, rgba(244, 226, 156, 1) 0%, rgba(130, 96, 87, 1) 100%);
		background: linear-gradient(135deg, rgba(244, 226, 156, 0) 0%, rgba(59, 41, 58, 1) 100%), linear-gradient(to right, rgba(244, 226, 156, 1) 0%, rgba(130, 96, 87, 1) 100%);
	}

	.tui-light {
		color: #fff;
		text-shadow: 0 0 0.1em rgba(0, 0, 0, 0.3), 0 0 0.2em rgba(0, 0, 0, 0.3);
	}
</style>
