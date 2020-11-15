<template>
	<view class="container">
		<view class="tui-title">
			Grid-2列
		</view>
		<tui-grid>
			<block v-for="(item,index) in dataList" :key="index">
				<tui-grid-item :cell="2" @click="detail">
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
				<tui-grid-item :cell="3" @click="detail">
					<view class="tui-grid-icon">
						<tui-icon :name="item.name" :size="item.size" :color="item.color"></tui-icon>
					</view>
					<text class="tui-grid-label">{{item.name}}</text>
				</tui-grid-item>
			</block>
		</tui-grid>
		
		<view class="tui-title">
			Grid-3列【去掉所有边框】
		</view>
		<tui-grid unlined>
			<block v-for="(item,index) in dataList" :key="index">
				<tui-grid-item :border="false" :bottom-line="false" :cell="3" @click="detail">
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
				<tui-grid-item :cell="4" @click="detail">
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
				<tui-grid-item :cell="5" backgroundColor="#fcebef" @click="detail">
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
				<tui-grid-item :cell="5" @click="detail">
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
	export default {
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
				this.tui.toast("click~");
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-title {
		padding: 50rpx 30rpx 30rpx 30rpx;
		font-size: 32rpx;
		color: #333;
		box-sizing: border-box;
		font-weight: bold;
		clear: both;
	}

	.tui-grid-icon {
		width: 64rpx;
		height: 64rpx;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
	}


	

	.tui-grid-label {
		display: block;
		text-align: center;
		font-weight: 400;
		color: #333;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 10rpx;
	}
	.tui-grid-label-5 {
		margin-top: 0 !important;
		color: #8a5966 !important;
	}
</style>
