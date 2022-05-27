<template>
	<view class="container">
		<view class="tui-header">
			<view class="tui-title">Basic</view>
			<view class="tui-sub-title">基础组件，常用组件</view>
		</view>
		<tui-grid>
			<block v-for="(item,index) in routers" :key="index">
				<navigator :url="item.url" hover-class='none'>
					<tui-grid-item>
						<view class="tui-grid-icon">
							<image class="tui-grid-img" :src="'https://thorui.cn/images/basic/'+item.img+'.png'" :style="{width:item.width+'rpx',height:item.height+'rpx'}" ></image>
						</view>
						<text class="tui-grid-label">{{item.name}}</text>
					</tui-grid-item>
				</navigator>
			</block>
		</tui-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				routers: [{
						name: 'Color 色彩',
						url: '/pages/index/color/color',
						img: "color",
						width: 74,
						height: 74
					},
					{
						name: 'Flex 布局',
						url: '/pages/index/flex/flex',
						img: "flex",
						width: 60,
						height: 60
					},
					{
						name: 'Icon 图标',
						url: '/pages/extend/icon/icon',
						img: "icon",
						width: 56,
						height: 56
					},
					{
						name: 'Button 按钮',
						url: '/pages/extend/button/button',
						img: "button",
						width: 64,
						height: 64
					},
					{
						name: 'Tag 标签',
						url: '/pages/extend/tag/tag',
						img: "tag",
						width: 64,
						height: 64
					},
					{
						name: 'Badge 徽章',
						url: '/pages/extend/badge/badge',
						img: "badge",
						width: 58,
						height: 58
					},
					{
						name: 'List 列表',
						url: '/pages/extend/list/list',
						img: "list",
						width: 64,
						height: 64
					},
					{
						name: 'Card 卡片',
						url: '/pages/extend/card/card',
						img: "card",
						width: 68,
						height: 68
					},
					{
						name: 'Grid 宫格',
						url: '/pages/extend/grid/grid',
						img: "grid",
						width: 48,
						height: 48
					},
					{
						name: 'Loading 加载',
						url: '/pages/extend/loading/loading',
						img: "loading",
						width: 74,
						height: 48
					},
					{
						name: 'Footer 页脚',
						url: '/pages/extend/footer/footer',
						img: "footer",
						width: 64,
						height: 58
					},
					{
						name: 'Layout 布局',
						url: '/pages/index/layout/layout',
						img: "layout",
						width: 64,
						height: 50
					}
				]
			}
		}
	}
</script>

<style>
	.tui-header {
		padding: 80rpx 60rpx;
	}

	.tui-title {
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
	}

	.tui-sub-title {
		font-size: 28rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.tui-grid-icon {
		width: 100%;
		height: 74rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-grid-label {
		margin-top: 10rpx;
		display: block;
		text-align: center;
		font-weight: 400;
		color: #333;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
