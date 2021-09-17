<template>
	<view class="container">
		<view class="header">
			<view class="title">map 地图</view>
			<view class="sub-title">常用地图示例</view>
		</view>
		<view class="tui-btn-box">
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="map(1)">拖拽定位</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="map(2)">周边兴趣点</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="map(3)">地址解析</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="map(4)">天气</tui-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		map(type) {
			let url='../location/location'
			if(type==2){
				url='../maps/maps'
			}else if(type==3){
				url='../longlat/longlat'
			}else if(type==4){
				url='../weather/weather'
			}
			this.tui.href(url)
		}
	}
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

.tui-btn-box {
	width: 100%;
	padding: 10rpx 40rpx;
	box-sizing: border-box;
}

</style>
