<template>
	<view class="container">
		<view class="header">
			<view class="title">NumberBox</view>
			<view class="sub-title">数字框</view>
		</view>

		<view class="tui-number-box">
			<view class="tui-title"> 基本用法</view>
			<tui-numberbox :value="value" @change="change"></tui-numberbox>
		</view>
		<view class="tui-number-box">
			<view class="tui-title">设置最小值和最大值</view>
			<tui-numberbox :min="1" :max="10" :value="value2" @change="change2"></tui-numberbox>
		</view>
		<view class="tui-number-box">
			<view class="tui-title">设置步长 0.1</view>
			<tui-numberbox :step="0.1" :value="value3" @change="change3"></tui-numberbox>
		</view>
		<view class="tui-number-box">
			<view class="tui-title">设置步长 10</view>
			<tui-numberbox :step="10" :value="value4" @change="change4"></tui-numberbox>
		</view>
		<view class="tui-number-box">
			<view class="tui-title">禁用状态</view>
			<tui-numberbox :disabled="true"></tui-numberbox>
		</view>
		<view class="tui-number-box">
			<view class="tui-title">设置大小</view>
			<tui-numberbox :height="70" :width="140" :iconsize="30" :value="value5" @change="change5"></tui-numberbox>
		</view>
		<view class="tui-number-box">
			<view class="tui-title">调整颜色</view>
			<tui-numberbox bgcolor="rgba(0,0,0,0.5)" color="#fff" iconcolor="rgba(0,0,0,0.5)" :value="value6" @change="change6"></tui-numberbox>
		</view>
		<view class="tui-number-box">
			<view class="tui-title"> 获取输入的值：{{value7}}</view>
			<tui-numberbox :value="value7" @change="change7"></tui-numberbox>
		</view>

	</view>

</template>

<script>
	import tuiNumberbox from "@/components/numberbox/numberbox"
	export default {
		components:{
			tuiNumberbox
		},
		data() {
			return {
				value: 0,
				value2: 1,
				value3: 1,
				value4: 0,
				value5: 1,
				value6: 1,
				value7: 1
			}
		},
		methods: {
			change: function(e) {
				this.value = e.value
			},
			change2: function(e) {
				this.value2 = e.value
			},
			change3: function(e) {
				this.value3 = e.value
			},
			change4: function(e) {
				this.value4 = e.value
			},
			change5: function(e) {
				this.value5 = e.value
			},
			change6: function(e) {
				this.value6 = e.value
			},
			change7: function(e) {
				this.value7 = e.value
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
		font-size: 34upx;
		color: #333;
		font-weight: 500;
	}

	.sub-title {
		font-size: 24upx;
		color: #7a7a7a;
		padding-top: 18upx;
	}

	.tui-number-box {
		padding: 40upx;
		box-sizing: border-box;
		margin-bottom: 30upx;
		background: #fff;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	
</style>
