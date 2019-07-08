<template>
	<view class="container">
		<view class="header">
			<view class="title">Basic</view>
			<view class="sub-title">基础组件是项目中独立的模块</view>
		</view>
		<tui-grid>
			<block v-for="(item,index) in routers" :key="index">
				<navigator :url="'../basic-view/'+item.url+'/'+item.url" hover-class='none'>
					<tui-grid-item>
						<view class="tui-grid-icon">
							<image :src="'../../static/images/basic/'+item.url+'.png'" :style="{width:tui.px(item.width),height:tui.px(item.height)}" />
						</view>
						<text class="tui-grid-label">{{item.name}}</text>
					</tui-grid-item>
				</navigator>
			</block>
		</tui-grid>
	</view>
</template>

<script>
	import tuiGrid from "@/components/grid/grid"
	import tuiGridItem from '@/components/grid-item/grid-item'
	export default {
		components: {
			tuiGrid,
			tuiGridItem
		},
		data() {
			return {
				routers: [{
						name: 'Color 色彩',
						url: 'color',
						width: 74,
						height: 74
					},
					{
						name: 'Flex 布局',
						url: 'flex',
						width: 60,
						height: 60
					},
					{
						name: 'Icon 图标',
						url: 'icon',
						width: 56,
						height: 56
					},
					{
						name: 'Button 按钮',
						url: 'button',
						width: 64,
						height: 64
					},
					{
						name: 'Tag 标签',
						url: 'tag',
						width: 64,
						height: 64
					},
					{
						name: 'Badge 徽章',
						url: 'badge',
						width: 58,
						height: 58
					},
					{
						name: 'List 列表',
						url: 'list',
						width: 64,
						height: 64
					},
					{
						name: 'Card 卡片',
						url: 'card',
						width: 68,
						height: 68
					},
					{
						name: 'Grid 宫格',
						url: 'grid',
						width: 48,
						height: 48
					},
					{
						name: 'Loading 加载',
						url: 'load',
						width: 74,
						height: 48
					},
					{
						name: 'Footer 页脚',
						url: 'footer',
						width: 64,
						height: 58
					},
					{
						name: 'Other 其它',
						url: 'other',
						width: 64,
						height: 50
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.header {
		padding: 80upx 60upx;
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

	.tui-grid-icon {
		width: 74upx;
		height: 74upx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-grid-icon image {
		display: block;
	}

	.tui-grid-icon+.tui-grid-label {
		margin-top: 10upx;
	}

	.tui-grid-label {
		display: block;
		text-align: center;
		font-weight: 400;
		color: #333;
		font-size: 28upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
