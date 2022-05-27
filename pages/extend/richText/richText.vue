<template>
	<view class="container">
		<view class="header">
			<view class="title">uParse</view>
			<view class="sub-title">uni-app框架下富文本解析。注：全局引入css文件，@import '/.../wxParse.css' </view>
		</view>
		<view class="tui-richtext">
			<view class="tui-title">
				markdown渲染(table表格)
			</view>
			<uParse :content="markdown || ''" />
			<view class="tui-title">
				html渲染(table表格)
			</view>
			<uParse :content="nodes.join('') || ''" />
		</view>
	</view>
</template>

<script>
	import marked from '@/components/uni/marked/index.js'
	import uParse from '@/components/uni/uParse/src/wxParse'
	export default {
		components: {
			uParse
		},
		data() {
			return {
				nodes: [
					'<table>',
					' <thead>',
					' <tr>',
					'<th>Android</th>',
					' <th>IOS</th>',
					'  <th>支付宝小程序</th>',
					'  <th>头条小程序</th>',
					'</tr>',
					'</thead>',
					'<tbody>',
					' <tr>',
					'<td >微信小程序</td>',
					' <td>H5二维码</td>',
					'<td>QQ小程序</td>',
					'<td>百度小程序</td>',
					' </tr>',
					'</tbody>',
					'</table>'
				],
				markdown: ''
			}
		},
		onLoad() {
			this.markdown = marked(
				"| ![微信小程序](https://thorui.cn/img/applets.jpg) |![H5二维码](https://thorui.cn/img/h5_qrcode.png)  |![QQ小程序](https://thorui.cn/img/qq_applets.png)  |![Android](https://thorui.cn/img/thorui_apk.png)  |\r\n| ------------ | ------------ | ------------ | ------------ |\r\n|  微信小程序 |H5二维码  | QQ小程序  | Android App  |"
			)
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20rpx 0 120rpx;
		box-sizing: border-box;
		overflow-x: hidden;
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

	.tui-richtext {
		width: 100%;
		/* #ifndef H5 */
		padding-right: 30rpx;
		/* #endif */
		box-sizing: border-box;
	}

	.tui-title {
		padding: 60rpx 30rpx 20rpx 30rpx;
		font-size: 26rpx;
		color: #7a7a7a;
	}

	.tui-code {
		width: 100%;
		padding: 16rpx;
		box-sizing: border-box;
	}

	.tui-scroll-view {
		width: 100%;
		border: 1rpx solid #19BE6B;
		padding: 10rpx;
		height: 240rpx;
		font-size: 24rpx;
		box-sizing: border-box;
	}
</style>
