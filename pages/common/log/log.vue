<template>
	<view class="container">
		<view class="tui-header">
			Hi，欢迎使用Thor UI！当前版本：
			<text class="tui-version">V{{ version }}</text>
		</view>
		<view class="tui-log">
			<tui-time-axis>
				<tui-timeaxis-item v-for="(item, index) in logList" :key="index">
					<template v-slot:node>
						<view class="tui-node"><tui-icon name="explore-fill" :color="version == item.version ? '#5c8dff' : '#ddd'" :size="18"></tui-icon></view>
					</template>
					<template v-slot:content>
						<view class="tui-content-log" :class="[version == item.version ? '' : 'tui-log-gray']">
							<view class="tui-version-date">{{ logList.length - 1 == index ? item.version : 'V' + item.version }}（{{ item.date }}）</view>
							<view v-for="(model, index2) in item.log" :key="index2" class="tui-log-text">{{ model }}</view>
							<view class="tui-doc-box" v-if="index === logList.length - 1">
								<view>组件文档地址：</view>
								<view class="tui-link" @tap.stop="getLink('https://thorui.cn/doc/')">https://thorui.cn/doc/</view>
								<view class="tui-link" @tap.stop="getLink('http://www.donarui.com')">http://www.donarui.com</view>
								<view>uni-app版本GitHub地址：</view>
								<view class="tui-link" @tap.stop="getLink('https://github.com/dingyong0214/ThorUI-uniapp')">https://github.com/dingyong0214/ThorUI-uniapp</view>
								<view>uni-app版本插件市场地址：</view>
								<view class="tui-link" @tap.stop="getLink('https://ext.dcloud.net.cn/plugin?id=556')">https://ext.dcloud.net.cn/plugin?id=556</view>
								<view>小程序版本GitHub地址：</view>
								<view class="tui-link" @tap.stop="getLink('https://github.com/dingyong0214/ThorUI')">https://github.com/dingyong0214/ThorUI</view>
								<view>小程序版本插件市场地址：</view>
								<view class="tui-link" @tap.stop="getLink('https://ext.dcloud.net.cn/plugin?id=569')">https://ext.dcloud.net.cn/plugin?id=569</view>
							</view>
						</view>
					</template>
				</tui-timeaxis-item>
			</tui-time-axis>
		</view>
	</view>
</template>

<script>
const thorui = require('@/components/common/tui-clipboard/tui-clipboard.js');
import { mapState } from 'vuex';
export default {
	computed: mapState(['version']),
	data() {
		return {
			logList: [
				{
					version: 'preface',
					date: '2019-06-01',
					log: ['本项目稳定后，会同步更新到支付宝小程序，百度小程序，头条小程序等']
				},
				{
					version: '0.1.0',
					date: '2019-06-01',
					log: ['1.Thor UI代码片段整理', '2.bug修复，以及部分兼容问题修复，代码优化']
				},
				{
					version: '0.5.0',
					date: '2019-06-08',
					log: ['1.Thor UI第一版开始内测', '2.已知bug修复，以及部分兼容问题修复', '3.代码片段优化，封装部分组件']
				},
				{
					version: '1.0.0',
					date: '2019-06-15',
					log: [
						'1.【地图】新增拖拽定位功能',
						'2.【扩展】新增基础组件，包括：字体图标，按钮，Grid宫格，List列表，Card卡片...',
						'3.【扩展】新增数字键盘',
						'4.【扩展】新增时间轴',
						'5.完善thor(个人中心)功能，包括：关于Thor UI，模拟登录，GitHub地址复制，赞赏，反馈，更新日志等',
						'6.已知bug修复，以及部分功能优化'
					]
				},
				{
					version: '1.1.0',
					date: '2019-06-24',
					log: [
						'1.将基础组件移出扩展，单独出来',
						'2.扩展改为单独tab bar选项extend',
						'3.新增滚动消息（extend=>滚动消息）：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品',
						'4.新增弹层下拉选择（extend=>弹层下拉选择）：包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层',
						'5.新增ActionSheet操作菜单（extend=>ActionSheet）：可加入提示信息，可单独设置字体样式',
						'6.新增新闻模板（extend=>新闻模板）:包含新闻列表，新闻详情，评论等',
						'7.部分功能优化，修复已知bug'
					]
				},
				{
					version: '1.2.0',
					date: '2019-07-01',
					log: [
						'1.新增组件NumberBox数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)',
						'2.新增组件Rate评分:可设置星星数，可设置大小颜色',
						'3.新增聊天模板，包含：消息列表，好友列表，聊天界面等',
						'4.新增商城模板,包含：商城首页，商城列表，商城详情等',
						'5.优化部分体验'
					]
				},
				{
					version: '1.2.1',
					date: '2019-07-10',
					log: ['1.修复部分兼容性问题', '2.修复部分已知bug']
				},
				{
					version: '1.2.2',
					date: '2019-07-11',
					log: ['1.新增组件Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。', '2.修复已知bug', '3.ThorUI组件文档地址：http://www.donarui.com/']
				},
				{
					version: '1.3.0',
					date: '2019-07-14',
					log: [
						'1.新增倒计时组件:时分秒倒计时，支持设置大小，颜色等。',
						'2.新增分隔符组件:Divider分隔符，可设置占据高度，线条宽度，颜色等。',
						'3.新增卡片轮播:包含顶部轮播，秒杀商品轮播等。',
						'4.已知问题修复以及优化。'
					]
				},
				{
					version: '1.3.2',
					date: '2019-07-22',
					log: [
						'1.修复H5端发行报错的问题。',
						'2.扩展基础组件(保留了之前版本):alert、tips、button、toast。',
						'3.新增表单验证功能，只需配置相应验证即可。',
						'4.新增返回顶部组件,nvue返回顶部看首页[nvue商品列表]。',
						'5.优化部分页面，修复已知bug。'
					]
				},
				{
					version: '1.4.0',
					date: '2019-10-06',
					log: [
						'1.新增日期时间选择器组件。',
						'2.H5新增复制文本功能。',
						'3.新增悬浮按钮组件。',
						'4.新增Tabbar组件。',
						'5.新增tabs标签页组件。',
						'6.新增折叠面板组件。',
						'7.新增图片上传组件。',
						'8.NumberBox组件优化调整。',
						'9.Modal组件优化调整。',
						'10.sticky组件优化调整。',
						'11.countdown组件优化调整。',
						'12.商城模板新增购物车、我的、提交订单、支付成功、我的订单、地址列表、新增地址、设置、用户信息等页面。',
						'13.修改已知bug。'
					]
				},
				{
					version: '1.4.1',
					date: '2019-10-27',
					log: [
						'1.新增文档相关链接信息。',
						'2.新增骨架屏组件(extend=>骨架屏)。',
						'3.新增网络请求示例。',
						'4.调整sticky组件，支持索引列表吸顶效果。',
						'5.新增吸顶&索引列表，非scroll-view实现(code[首页]=>索引列表=>索引&吸顶效果)。',
						'6.已知问题修复以及优化。'
					]
				},
				{
					version: '1.4.2',
					date: '2019-11-17',
					log: [
						'1.modal组件优化，宽高以及padding值可设置。',
						'2.rate评分组件支持小数，如4星半，4.6星等。',
						'3.tabs组件优化。',
						'4.商城模板新增优惠券页面。',
						'5.商城模板新增订单详情页面。',
						'6.分包，解决小程序预览时包体积超出限制的问题。'
					]
				},
				{
					version: '1.5.0',
					date: '2020-05-12',
					log: [
						'1.新增日历组件 。',
						'2.新增图片裁剪组件。',
						'3.新增头像、图片组合组件。',
						'4.新增顶部NavationBar导航组件。',
						'5.新增圆形进度条组件。',
						'6.新增底部导航组件。',
						'7.新增级联选择组件cascade-selection。',
						'8.新增步骤条组件。',
						'9.新增气泡框组件。',
						'10.countdown倒计时组件优化，可只显示秒数倒计时。',
						'11.回到顶部组件优化，新增回首页，分享按钮，可自定义控制显示。',
						'12.日期时间选择组件优化，新增秒数选择，单位可置顶展示。',
						'13.新增垂直分类菜单左右联动联动案例。',
						'14.地图支持H5。',
						'15.表单验证优化:非必填情况下,如果值为空,则不进行校验，不为空则进行校验。',
						'16.发布H5、QQ小程序以及Android App。H5地址：https://www.thorui.cn/h5/#/ ，QQ小程序搜索ThorUI,apk前往https://www.thorui.cn/下载。',
						'17.针对支付宝小程序做了部分优化调整。',
						'18.nvue支持uni-app编译模式。',
						'19.新增自定义tabbar使用模板，小程序参考：https://github.com/dingyong0214/AfterSale，uni-app参考：https://github.com/dingyong0214/tabbar-uniapp。',
						'20.引入优化uParse。',
						'21.搜索页面新增关键词高亮显示。',
						'22.新增navbar上拉加载下拉刷新案例。',
						'23.v3编译支持。',
						'24.支持easycom组件模式，直接在页面中使用组件，无需引入注册。',
						'25.优化sticky组件，新增普通案例和异步加载案例。',
						'26.整体优化调整，项目重构，部分模板完善。'
					]
				},
				{
					version: '1.5.1',
					date: '2020-06-06',
					log: [
						'1.日历组件支持农历（古历）。',
						'2.sticky吸顶组件新增wxs实现(tui-sticky-wxs)。',
						'3.新增圆形进度条组件renderjs实现(App、H5端)与canvas 2d实现（小程序端）以及nuve版本。',
						'4.图片裁剪组件优化，手势事件改为wxs实现。',
						'5.级联选择器组件优化，支持设置默认选中。',
						'6.新增图片颜色分析器组件，传入图片分析图片色彩。',
						'7.新增中文转拼音组件，可处理多音字。',
						'8.新增update页面(App端资源更新页面)',
						'9.解决H5端异步请求数据后复制文本（clipboard）报错bug。',
						'解决方案：',
						'①.新增参数event，调用方法时传入此参数;',
						'②.异步请求转同步。',
						'10.修复其它已知bug。',
						'--------------------------',
						'--------------------------',
						'注：自1.4.2版本之后，ThorUI只对uni-app版本进行开源，小程序原生版付费会员才可使用（￥99/永久），1.4.2版本之前不受影响。',
						'如若需要，请联系QQ：3168647172。'
					]
				},
				{
					version: '1.5.2',
					date: '2020-07-20',
					log: [
						'1.步骤条组件优化，支持自定义图标，支持设置线条为虚线。',
						'2.修复图片裁剪组件(wxs版)初始化裁剪不正确的问题。',
						'3.按钮（tui-button)组件支持表单提交，详见文档。',
						'4.图片上传组件（tui-upload）新增props：header，formData，修复初始化图片不显示的bug。',
						'5.tabbar组件与自定义导航栏组件(NavBar)背景支持设置高斯模糊(ios端)。',
						'6.uni-app版本骨架屏修复编译到小程序端无法获取到组件节点的bug。',
						'7.日历组件单个日期选择和区间选择支持设置默认选中。',
						'8.新增多语言模板。源码地址：https://github.com/dingyong0214/ThorUI-utag',
						'9.新增拖拽排序组件，wxs实现，详细查看多语言模板示例。',
						'10.新增签到模板（点star获取源码）。获取步骤如下：',
						'1）去GitHub给ThorUI项目点star，项目地址分别为：https://github.com/dingyong0214/ThorUI 和 https://github.com/dingyong0214/ThorUI-uniapp',
						'2）加QQ3039218619，截图发送到该QQ即可获取源码。',
						'--------------------------',
						'--------------------------',
						'注：自1.4.2版本之后，ThorUI只对uni-app版本进行开源，小程序原生版付费会员才可使用（￥99/永久），1.4.2版本之前不受影响。',
						'如若需要，请联系QQ：3168647172。'
					]
				},
				{
					version: '1.5.5',
					date: '2020-08-16',
					log: [
						'1.自定义导航栏组件优化，新增props：maxOpacity（最大不透明度值），dropDownHide（下拉隐藏NavigationBar，主要针对有回弹效果ios端）。',
						'2.上传组件优化，可限制上传图片类型，单张图片大小，sizeType，sourceType。',
						'3.倒计时组件优化，可每秒返回剩余时间，默认不返回。',
						'4.tui-modal弹框组件优化，修复transform导致元素内字体模糊的问题。',
						'5.tui-button按钮组件优化，新增link样式配置，具体查看文档。',
						'6.tui-tabs标签页组件优化，新增props：width（tabs宽度）设置。',
						'7.tui-image-group图片组合组件优化，横向展示支持多行。',
						'8.裁剪组件优化，修复网络图片在小程序端裁剪出现空白的问题。',
						'9.商城模板更新【会员专用】。',
						'1).首页改版，新增秒杀模块',
						'2).选择优惠券（提交订单）',
						'3).开具发票',
						'4).发票详情',
						'5).查看发票，发送至邮箱',
						'6).商品评论',
						'7).评论详情，评论回复',
						'8).评价晒单',
						'9).店铺',
						'10).店铺详情',
						'11).限时秒杀列表',
						'12).秒杀详情',
						'13).商品详情优化，新增视频播放入口',
						'--------------------------',
						'--------------------------',
						'注：会员专用内容加入会员才可使用（￥99/永久)。',
						'如若需要，请联系QQ：3168647172 或 3039218619。'
					]
				},
				{
					version: '1.5.6',
					date: '2020-08-18',
					log: [
						'1.修复tui-tabs组件宽度不正确的bug。',
						'2.修复级联选择组件(tui-cascade-selection)默认数据不生效的bug。',
						'3.优化tui-button按钮组件，新增props：preventClick[是否阻止用户重复点击，设为true则200ms内只执行一次点击事件，默认false]。',
						'--------------------------',
						'--------------------------',
						'注：加入会员享受更多权益（￥99/永久)。',
						'如若需要，请联系QQ：3168647172 或 3039218619。'
					]
				}
			].reverse()
		};
	},
	methods: {
		getLink: function(link) {
			thorui.getClipboardData(link, res => {
				// #ifdef H5 || MP-ALIPAY
				if (res) {
					this.tui.toast('链接复制成功');
				} else {
					this.tui.toast('链接复制失败');
				}
				// #endif
			});
		}
	}
};
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
	top: 44px;
	/* #endif */
	z-index: 999999;
}

.tui-version {
	color: #f54f46;
	font-weight: bold;
}

.tui-log {
	padding: 84rpx 80rpx 30rpx 40rpx;
	box-sizing: border-box;
}

.tui-node {
	padding: 3px 0;
}

.tui-content-log {
	border-radius: 10rpx;
	position: relative;
	padding: 20rpx 26rpx;
	font-size: 28rpx;
	color: #fff;
	background: #5c8dff;
	border: 1rpx solid #5c8dff;
	display: inline-block;
	word-break: break-all;
}

/* 
.tui-log-text {
	word-break: break-all;
	word-wrap: break-word;
	text-align: justify;
} */

.tui-content-log::before {
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	top: 14rpx;
	border: 16rpx solid;
	right: 100%;
	border-color: transparent #5c8dff transparent transparent;
}

.tui-log-gray {
	background: #ededed !important;
	border: 1rpx solid #ededed !important;
	color: #999 !important;
}

.tui-log-gray::before {
	border-color: transparent #ededed transparent transparent !important;
}

.tui-version-date {
	font-size: 32rpx;
	font-weight: bold;
	padding-bottom: 20rpx;
}

.tui-doc-box {
	padding-top: 20rpx;
	word-break: break-all;
}

.tui-link {
	padding-bottom: 20rpx;
	color: #0066cc;
}
</style>
