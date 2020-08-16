<template>
	<view class="container">
		<view class="header">
			<view class="title">Image Group</view>
			<view class="sub-title">图片组合</view>
		</view>
		<view class="tui-title">单个图设置圆角</view>
		<view class="tui-image-box">
			<view class="tui-group-box">
				<tui-image-group :imageList="imageList" radius="0"></tui-image-group>
			</view>
			<view class="tui-group-box">
				<tui-image-group :imageList="imageList" radius="12rpx"></tui-image-group>
			</view>
			<view class="tui-group-box">
				<tui-image-group :imageList="imageList" radius="20rpx"></tui-image-group>
			</view>
			<view class="tui-group-box">
				<tui-image-group :imageList="imageList"></tui-image-group>
			</view>
			
		</view>
		
		
		<view class="tui-title">单个图设置大小</view>
		<view class="tui-image-box">
			<view class="tui-group-box">
				<tui-image-group :imageList="imageList" width="60rpx" height="60rpx"></tui-image-group>
			</view>
			<view class="tui-group-box">
				<tui-image-group :imageList="imageList" width="80rpx" height="80rpx"></tui-image-group>
			</view>
			<view class="tui-group-box">
				<tui-image-group :imageList="imageList" width="120rpx" height="120rpx"></tui-image-group>
			</view>
			<view class="tui-group-box">
				<tui-image-group :imageList="imageList" width="150rpx" height="150rpx"></tui-image-group>
			</view>
		</view>
		
		<view class="tui-title">组合图 row | 设置偏移距离</view>
		<view class="tui-image-box">
			<tui-image-group :imageList="imageList2" isGroup width="60rpx" height="60rpx"></tui-image-group>
		</view>
		<view class="tui-image-box">
			<tui-image-group :imageList="imageList2" isGroup width="80rpx" height="80rpx" :distance="-30"></tui-image-group>
		</view>
		<view class="tui-title">组合图 row 多行展示</view>
		<view class="tui-image-box">
			<tui-image-group :imageList="imageList3" isGroup width="60rpx" height="60rpx" :distance="16" multiLine></tui-image-group>
		</view>
		<view class="tui-title">组合图 column</view>
		<view class="tui-image-box">
			<tui-image-group :imageList="imageList2" isGroup width="60rpx" height="60rpx" direction="column"></tui-image-group>
		</view>
		<view class="tui-image-box">
			<tui-image-group :imageList="imageList2" isGroup width="80rpx" height="80rpx" radius="12rpx" direction="column"></tui-image-group>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			imageList:[{
				id:1,
				src:"/static/images/product/2.jpg"
			}],
			imageList2:[{
				id:1,
				src:"/static/images/product/1.jpg"
			},{
				id:2,
				src:"/static/images/product/2.jpg"
			},{
				id:3,
				src:"/static/images/product/3.jpg"
			},{
				id:4,
				src:"/static/images/product/4.jpg"
			},{
				id:5,
				src:"/static/images/product/5.jpg"
			}],
			imageList3:[]
		};
	},
	onLoad() {
		this.imageList3=[...this.imageList2,...this.imageList2,...this.imageList2,...this.imageList2]
	},
	methods: {}
};
</script>

<style>
.container {
	padding: 20rpx 0 120rpx 0;
	box-sizing: border-box;
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
.tui-title {
	width: 100%;
	padding: 40rpx 30rpx 30rpx;
	box-sizing: border-box;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tui-image-box{
	width: 100%;
	padding: 30rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}
.tui-group-box{
	padding-right: 30rpx;
}
</style>
