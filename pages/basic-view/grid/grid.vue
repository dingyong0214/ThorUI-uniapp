<template>
	<view class="container">
		<view class="tui-title">
			Grid-2列
		</view>
		<tui-grid>
			<block v-for="(item,index) in dataList" :key="index">
				<tui-grid-item cell="2" @click="detail">
					<view class="tui-grid-icon">
						<tui-icon :name="item.name" :size="item.size" :color="item.color"></tui-icon>
					</view>
					<text class="tui-grid-label">{{item.name}}</text>
				</tui-grid-item>
			</block>
		</tui-grid>

		<view class="tui-title">
			Grid-3列
		</view>
		<tui-grid>
			<block v-for="(item,index) in dataList" :key="index">
				<tui-grid-item cell="3" @click="detail">
					<view class="tui-grid-icon">
						<tui-icon :name="item.name" :size="item.size" :color="item.color"></tui-icon>
					</view>
					<text class="tui-grid-label">{{item.name}}</text>
				</tui-grid-item>
			</block>
		</tui-grid>

		<view class="tui-title">
			Grid-4列
		</view>
		<tui-grid>
			<block v-for="(item,index) in dataList" :key="index">
				<!--不支持class-->
				<tui-grid-item cell="4" @click="detail">
					<view class="tui-grid-icon">
						<tui-icon :name="item.name" :size="item.size" :color="item.color"></tui-icon>
					</view>
					<text class="tui-grid-label">{{item.name}}</text>
				</tui-grid-item>
			</block>
		</tui-grid>

		<view class="tui-title">
			Grid-5列
		</view>
		<tui-grid>
			<block v-for="(item,index) in iconList" :key="index">
				<tui-grid-item cell="5" bgcolor="#fcebef" @click="detail">
					<view class="tui-grid-icon">
						<tui-icon :name="item.name" :size="item.size" color="#8a5966"></tui-icon>
					</view>
					<text class="tui-grid-label tui-grid-label-5">{{item.name}}</text>
				</tui-grid-item>
			</block>
		</tui-grid>
		<view class="tui-title">
			Grid-5列
		</view>
		<tui-grid>
			<block v-for="(item,index) in iconList" :key="index">
				<tui-grid-item cell="5" @click="detail">
					<view class="tui-grid-icon">
						<tui-icon :name="item.name" :size="item.size" color="#8a5966"></tui-icon>
					</view> 
					<text class="tui-grid-label tui-grid-label-5">{{item.name}}</text>
				</tui-grid-item>
			</block>
		</tui-grid>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiGrid from "@/components/grid/grid"
	import tuiGridItem from '@/components/grid-item/grid-item'
	export default {
		components: {
			tuiGrid,
			tuiGridItem,
			tuiIcon
		},
		data() {
			return {
				iconList: [{
					name: "refresh",
					size: 26
				}, {
					name: "search",
					size: 26
				}, {
					name: "ios",
					size: 26
				}, {
					name: "android",
					size: 26
				}, {
					name: "close",
					size: 26
				}, {
					name: "close-fill",
					size: 25
				}, {
					name: "shut",
					size: 25
				}, {
					name: "plus",
					size: 26
				}, {
					name: "star-fill",
					size: 25
				}, {
					name: "revoke",
					size: 25
				}, {
					name: "shop",
					size: 25
				}, {
					name: "shop-fill",
					size: 25
				}, {
					name: "order",
					size: 25
				}, {
					name: "feedback",
					size: 26
				}, {
					name: "like",
					size: 26
				}],
				dataList: [{
					name: "refresh",
					size: 30
				}, {
					name: "search",
					size: 30
				}, {
					name: "close-fill",
					size: 30
				}, {
					name: "shut",
					size: 30
				}, {
					name: "plus",
					size: 30
				}, {
					name: "star-fill",
					size: 30
				}, {
					name: "revoke",
					size: 30
				}, {
					name: "shop",
					size: 30
				}, {
					name: "shop-fill",
					size: 30
				}, {
					name: "order",
					size: 30
				}, {
					name: "feedback",
					size: 30
				}, {
					name: "like",
					size: 30
				}]
			}
		},
		methods: {
			detail: function(e) {
				this.tui.toast("未完成的功能~");
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-title {
		padding: 50upx 30upx 30upx 30upx;
		font-size: 32upx;
		color: #333;
		box-sizing: border-box;
		font-weight: bold;
		clear: both;
	}

	.tui-grid-icon {
		width: 64upx;
		height: 64upx;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
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
		margin-top: 10upx;
	}
	.tui-grid-label-5 {
		margin-top: 0 !important;
		color: #8a5966 !important;
	}
</style>
