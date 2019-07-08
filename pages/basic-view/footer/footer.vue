<template>
	<view class="container">
		<view class="header">
			<view class="title">Footer</view>
			<view class="sub-title">页脚 </view>
		</view>
		<tui-footer :fixed="false" :copyright="copyright"></tui-footer>
		<tui-footer :fixed="false" :copyright="copyright" :navigate="navigate" tui-footer-class="tui-custom"></tui-footer>
		<tui-footer :fixed="false" :copyright="copyright" :navigate="navigate2" tui-footer-class="tui-custom"></tui-footer>
		<tui-footer :fixed="false" :copyright="copyright" :navigate="navigate3" tui-footer-class="tui-custom"></tui-footer>
		<tui-footer copyright="Copyright © 2019 Thor UI All Rights Reserved." :navigate="navigate" bgcolor="#fafafa"></tui-footer>

	</view>
</template>

<script>
	import tuiFooter from "@/components/footer/footer"
	export default {
		components: {
			tuiFooter
		},
		data() {
			return {
				navigate: [{
					url: "../../index/index",
					type: "switchTab",
					text: "ThorUI首页"
				}],
				navigate2: [{
					url: "../../index/index",
					type: "switchTab",
					text: "返回首页",
					color: "#5677fc"
				}, {
					url: "../../my/my",
					type: "switchTab",
					text: "个人中心",
					color: "#5677fc",
					size: 30
				}],
				navigate3: [{
					url: "../../index/index",
					type: "switchTab",
					text: "返回首页"
				}, {
					url: "../../my/my",
					type: "switchTab",
					text: "个人中心"
				}, {
					url: "../../about/about",
					type: "navigate",
					text: "Thor UI"
				}],
				copyright: " Copyright © 2014-2019 Thor UI."
			}
		},
		methods: {
			detail: function() {
				this.tui.toast("详情功能尚未完善~")
			}
		}
	}
</script>

<style>
	.container {
		padding: 20upx 0 120upx 0;
		box-sizing: border-box;
	}

	.header {
		padding: 80upx 90upx 60upx 90upx;
		box-sizing: border-box;
	}

	.title {
		font-size: 36upx;
		color: #333;
		font-weight: bold;
	}

	.sub-title {
		font-size: 28upx;
		color: #7a7a7a;
		padding-top: 18upx;
	}

	.tui-custom {
		margin-top: 30upx;
	}
</style>
