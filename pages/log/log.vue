<template>
	<view class="container">
		<!-- #ifdef APP-PLUS || MP -->
		<view class="tui-header">Hi，欢迎使用Thor UI！当前版本：
			<text class="tui-version">V{{version}}</text>
		</view>
		<!-- #endif -->
		<view class="tui-log">
			<tui-time-axis>
				<tui-timeaxis-item v-for="(item,index) in logList" :key="index">
					<template v-slot:node>
						<view class="tui-node">
							<tui-icon name="explore-fill" :color="version==item.version?'#5c8dff':'#ddd'" :size="18"></tui-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="tui-content-log" :class="[version==item.version?'':'tui-log-gray']">
							<view class="tui-version-date">{{logList.length-1==index?item.version:'V'+item.version}}（{{item.date}}）</view>
							<view v-for="(model,index2) in item.log" :key="index2" class="tui-log-text">{{model}}</view>
						</view>
					</template>
				</tui-timeaxis-item>
			</tui-time-axis>
		</view>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTimeAxis from "@/components/time-axis/time-axis"
	import tuiTimeaxisItem from "@/components/timeaxis-item/timeaxis-item"
	import {
		mapState
	} from 'vuex'
	export default {
		computed: mapState(['version']),
		components: {
			tuiIcon,
			tuiTimeAxis,
			tuiTimeaxisItem
		},
		data() {
			return {
				logList: [{
					version: "preface",
					date: "2019-06-01",
					log: ["本项目稳定后，会同步更新到微信小程序，支付宝小程序，百度小程序，头条小程序等"]
				}, {
					version: "0.1.0",
					date: "2019-06-01",
					log: ["1.Thor UI代码片段整理", "2.bug修复，以及部分兼容问题修复，代码优化"]
				}, {
					version: "0.5.0",
					date: "2019-06-08",
					log: ["1.Thor UI第一版开始内测", "2.已知bug修复，以及部分兼容问题修复", "3.代码片段优化，封装部分组件"]
				}, {
					version: "1.0.0",
					date: "2019-06-15",
					log: ["1.【地图】新增拖拽定位功能", "2.【扩展】新增基础组件，包括：字体图标，按钮，Grid宫格，List列表，Card卡片...", "3.【扩展】新增数字键盘", "4.【扩展】新增时间轴",
						"5.完善thor(个人中心)功能，包括：关于Thor UI，模拟登录，GitHub地址复制，赞赏，反馈，更新日志等", "6.已知bug修复，以及部分功能优化"
					]
				}, {
					version: "1.1.0",
					date: "2019-06-24",
					log: ["1.将基础组件移出扩展，单独出来", "2.扩展改为单独tab bar选项extend", "3.新增滚动消息（extend=>滚动消息）：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品",
						"4.新增弹层下拉选择（extend=>弹层下拉选择）：包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层",
						"5.新增ActionSheet操作菜单（extend=>ActionSheet）：可加入提示信息，可单独设置字体样式", "6.新增新闻模板（extend=>新闻模板）:包含新闻列表，新闻详情，评论等",
						"7.部分功能优化，修复已知bug"
					]
				}, {
					version: "1.2.0",
					date: "2019-07-01",
					log: ["1.新增组件NumberBox数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)", "2.新增组件Rate评分:可设置星星数，可设置大小颜色",
						"3.新增聊天模板，包含：消息列表，好友列表，聊天界面等", "4.新增商城模板,包含：商城首页，商城列表，商城详情等", "5.优化部分体验"
					]
				}, {
					version: "1.2.1",
					date: "2019-07-10",
					log: ["1.修复部分兼容性问题", "2.修复部分已知bug"]
				}, {
					version: "1.2.2",
					date: "2019-07-11",
					log: ["1.新增组件Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。", "2.修复已知bug", "3.ThorUI组件文档地址：http://www.donarui.com/"]
				}, {
					version: "1.3.0",
					date: "2019-07-14",
					log: ["1.新增倒计时组件:时分秒倒计时，支持设置大小，颜色等。", "2.新增分隔符组件:Divider分隔符，可设置占据高度，线条宽度，颜色等。", "3.新增卡片轮播:包含顶部轮播，秒杀商品轮播等。",
						"4.已知问题修复以及优化。"
					]
				}, {
					version: "1.3.1",
					date: "2019-07-19",
					log: ["1.修复H5端发行报错的问题。", "2.扩展基础组件(保留了之前版本):alert、tips、button、toast。", "3.新增表单验证功能，只需配置相应验证即可。", "4.优化部分页面，修复已知bug。"]
				}].reverse()
			}
		},
		methods: {

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

	.tui-version {
		color: #f54f46;
		font-weight: bold;
	}

	.tui-log {
		padding: 84upx 80upx 30upx 40upx;
		box-sizing: border-box;
	}

	.tui-node {
		padding: 3px 0;
	}

	.tui-content-log {
		border-radius: 10upx;
		position: relative;
		padding: 20upx 26upx;
		font-size: 28upx;
		color: #fff;
		background: #5c8dff;
		border: 1upx solid #5c8dff;
		display: inline-block;
	}

	.tui-log-text {
		/* word-break: break-all;
  word-wrap: break-word;
  text-align: justify; */
	}

	.tui-content-log::before {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		top: 14upx;
		border: 16upx solid;
		right: 100%;
		border-color: transparent #5c8dff transparent transparent;
	}

	.tui-log-gray {
		background: #ededed !important;
		border: 1upx solid #ededed !important;
		color: #999 !important;
	}

	.tui-log-gray::before {
		border-color: transparent #ededed transparent transparent !important;
	}

	.tui-version-date {
		font-size: 32upx;
		font-weight: bold;
		padding-bottom: 20upx;
	}
</style>
