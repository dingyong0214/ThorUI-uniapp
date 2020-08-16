<template>
	<view class="container">
		<view class="tui-title">
			默认卡片
		</view>
		<tui-card :image="card[0].img" :title="card[0].title" :tag="card[0].tag">
			<template v-slot:body>
				<view class="tui-default">
					默认卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="tui-default">
					默认卡片底部 slot=>footer
				</view>
			</template>
		</tui-card>
		<view class="tui-title">
			header图片设置，字体设置
		</view>
		<tui-card :image="card[1].img" :title="card[1].title" :tag="card[1].tag">
			<template v-slot:body>
				<view class="tui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="tui-default">
					卡片底部 slot=>footer
				</view>
			</template>
		</tui-card>

		<view class="tui-title">
			无图片，无tag
		</view>
		<tui-card :title="card[0].title">
			<template v-slot:body>
				<view class="tui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="tui-default">
					卡片底部 slot=>footer
				</view>
			</template>

		</tui-card>

		<view class="tui-title">
			header背景设置，去线条
		</view>
		<tui-card :image="card[0].img" :title="card[0].title" :tag="card[0].tag" :header="card[0].header">
			<template v-slot:body>
				<view class="tui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="tui-default">
					卡片底部 slot=>footer
				</view>
			</template>
		</tui-card>

		<view class="tui-title">
			通栏
		</view>
		<tui-card :image="card[0].img" :title="card[0].title" :tag="card[0].tag" :full="true">
			<template v-slot:body>
				<view class="tui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="tui-default">
					卡片底部 slot=>footer
				</view>
			</template>
		</tui-card>

		<view class="tui-title">
			去阴影，加border
		</view>
		<tui-card :image="card[0].img" :title="card[0].title" :tag="card[0].tag" :border="true">
			<template v-slot:body>
				<view class="tui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="tui-default tui-flex">
					<tui-tag type="light-green" padding="8rpx 12rpx" size="24rpx">卡片底部 slot=>footer</tui-tag>
				</view>
			</template>
		</tui-card>

		<view class="tui-title">
			card 卡片
		</view>
		<tui-card :image="card[2].img" :title="card[2].title" :tag="card[2].tag" :header="card[2].header" @click="detail">
			<template v-slot:body>
				<view class="tui-article">
					<image src="https://thorui.cn/images/mall/banner/2.jpg" class="tui-article-img"></image>
					<view class="tui-article-title">Vue+Node+高德地图+Echart做一款出行可视化全栈webapp</view>
				</view>
				<tui-list-cell>
					<view class="tui-flex">
						<view class='tui-cell-title'>.NET Core使用Exceptionless分布式日志收集</view>
						<image src="/static/images/news/avatar_1.jpg" class="tui-cell-img" mode="widthFix"></image>
					</view>
				</tui-list-cell>
			</template>
			<template v-slot:footer>
				<view class="tui-default tui-flex">
					<text>余下3篇</text>
					<tui-icon name="arrowdown" :size="20" color="#ccc" class="tui-right"></tui-icon>
				</view>
			</template>
		</tui-card>

		<view class="tui-title">
			card 卡片
		</view>
		<tui-card :image="card[2].img" :title="card[2].title" :tag="card[2].tag" :header="card[2].header" @click="detail">
			<template v-slot:body>
				<tui-list-cell>
					<view class="tui-flex">
						<view class='tui-cell-title'>.NET Core使用Exceptionless分布式日志收集</view>
						<image src="/static/images/product/44.jpg" class="tui-cell-img" mode="widthFix"></image>
					</view>
				</tui-list-cell>
				<tui-list-cell>
					<view class="tui-flex">
						<view class='tui-cell-title'>高德地图+Echart做一款出行可视化全栈</view>
						<image src="/static/images/product/11.jpg" class="tui-cell-img" mode="widthFix"></image>
					</view>
				</tui-list-cell>
				<tui-list-cell unlined>
					<view class="tui-flex">
						<view class='tui-cell-title'>高德地图+Echart做一款出行可视化全栈</view>
						<image src="/static/images/product/22.jpg" class="tui-cell-img" mode="widthFix"></image>
					</view>
				</tui-list-cell>
			</template>
		</tui-card>

		<view class="tui-title">
			card 卡片
		</view>
		<tui-card :image="card[1].img" :title="card[0].title" :full="true" :header="card[3].header" :border="true" @click="detail"
		 @longclick="detail">
			<template v-slot:body>
				<view class="tui-content">
					现实是此岸，成功是彼岸，中间隔着湍急的河流，兴趣便是河上的桥，只要行动就可以通过。
				</view>
				<view class="tui-default tui-flex-pic">
					<image src="/static/images/product/1.jpg" mode="widthFix"></image>
					<image src="/static/images/product/2.jpg" mode="widthFix"></image>
					<image src="/static/images/product/3.jpg" mode="widthFix"></image>
					<image src="/static/images/product/4.jpg" mode="widthFix"></image>
					<image src="/static/images/product/5.jpg" mode="widthFix"></image>
					<image src="/static/images/product/1.jpg" mode="widthFix"></image>
					<image src="/static/images/product/5.jpg" mode="widthFix"></image>
					<image src="/static/images/product/2.jpg" mode="widthFix"></image>
					<image src="/static/images/product/3.jpg" mode="widthFix"></image>
				</view>

			</template>
			<template v-slot:footer>
				<view class="tui-default tui-pleft">
					<view>深圳.世界之窗</view>
					<view class="tui-color-gray">7小时前</view>
				</view>
			</template> 
		</tui-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				card: [{
						img: {
							url: "/static/images/news/avatar_1.jpg"
						},
						title: {
							text: "CSDN云计算"
						},
						tag: {
							text: "1小时前"
						},
						header: {
							bgcolor: "#F7F7F7",
							line: true
						}
					},
					{
						img: {
							url: "/static/images/news/avatar_2.jpg",
							width: 80,
							height: 80,
							circle: true
						},
						title: {
							text: "CSDN云计算",
							color: "#ed3f14",
							size: 34
						},
						tag: {
							text: "1小时前",
							color: "#ed3f14",
							size: 28
						}
					},
					{
						img: {
							url: "/static/images/news/avatar_1.jpg",
							circle: true
						},
						title: {
							text: "JavaScript"
						},
						tag: {
							text: "昨天"
						},
						header: {
							line: true,
							bgcolor: "#F7F7F7"
						}
					},
					{
						header: {
							line: true
						}
					}
				]
			}
		},
		methods: {
			detail: function() {
				this.tui.toast('详情功能尚未完善~')
			}
		}
	}
</script>

<style>
	page {
		background: #EDEDED;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-title {
		width: 100%;
		padding: 70rpx 30rpx 30rpx 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		line-height: 30rpx;
		color: #666;
	}

	.tui-default {
		padding: 20rpx 30rpx;
	}

	.tui-article {
		position: relative;
	}

	.tui-article-img {
		width: 100%;
		height: 300rpx;
		display: block;
	}

	.tui-article-title {
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		font-size: 32rpx;
		font-weight: 500;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
	}

	.tui-cell-title {
		font-size: 32rpx;
		font-weight: 500;
		padding: 0 10rpx;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-cell-img {
		height: 160rpx;
		width: 160rpx;
	}

	.tui-flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-mr {
		margin-right: 20rpx;
	}


	.tui-flex-pic {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		background: #fff;
		padding: 0 120rpx;
	}

	.tui-flex-pic image {
		width: 32%;
		margin-bottom: 2%;
	}

	.tui-content {
		padding: 0rpx 30rpx 20rpx 120rpx;
		box-sizing: border-box;
		font-size: 34rpx;
		font-weight: 400;
		color: #333;
	}

	.tui-color-gray {
		color: #ccc;
	}

	.tui-pleft {
		padding-left: 120rpx;
	}
</style>
