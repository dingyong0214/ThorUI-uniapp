<template>
	<view class="container">
		<view class="header">
			<view class="title">日期时间选择器</view>
			<view class="sub-title">picker-view扩展，日期时间选择器</view>
			<view class="sub-title tui-primary">您选择的结果为：{{ result }}</view>
		</view>
		<view class="tui-btn-box">
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(1)">选择日期 年月日</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(2)">选择日期 年月</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(3)">选择时间</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(4)">日期+时间</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(5)">设置默认显示 2019-09-12 18:01</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(6)">年份区间 2019-2021</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(7)">改变按钮字体颜色</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(8)">选择日期 时分秒</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(9)">选择日期 分秒</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(10)">选择日期 年月日时分秒</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(11)">年月日时分秒 单位置顶</tui-button>
			</view>
			<view class="tui-btn-btm">
				<tui-button type="white" shape="circle" @click="show(12)">设置圆角</tui-button>
			</view>
		</view>
		<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
		 :setDateTime="setDateTime" :unitTop="unitTop" :radius="radius" @confirm="change"></tui-datetime>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 1,
				startYear: 1980,
				endYear: 2030,
				cancelColor: '#888',
				color: '#5677fc',
				setDateTime: '',
				result: '',
				unitTop: false,
				radius: false
			};
		},
		methods: {
			show: function(type) {
				this.cancelColor = '#888';
				this.color = '#5677fc';
				this.setDateTime = '';
				this.startYear = 1980;
				this.endYear = 2030;
				this.unitTop = false;
				this.radius = false;
				switch (type) {
					case 1:
						//this.setDateTime = "2019-10-12";
						this.type = 2;
						break;
					case 2:
						//this.setDateTime = "2019-11";
						this.type = 3;
						break;
					case 3:
						// this.setDateTime = "18:01";
						this.type = 4;
						break;
					case 4:
						this.type = 1;
						break;
					case 5:
						this.type = 1;
						this.setDateTime = '2019-09-12 18:01';
						break;
					case 6:
						this.type = 1;
						this.startYear = 2019;
						this.endYear = 2021;
						break;
					case 7:
						this.type = 1;
						this.cancelColor = '#555';
						this.color = '#e41f19';
						break;
					case 8:
						this.type = 5;
						this.cancelColor = '#555';
						this.color = '#e41f19';
						break;
					case 9:
						this.type = 6;
						this.cancelColor = '#555';
						this.color = '#e41f19';
						break;
					case 10:
						this.type = 7;
						this.cancelColor = '#555';
						this.color = '#e41f19';
						break;
					case 11:
						this.type = 7;
						this.cancelColor = '#555';
						this.color = '#e41f19';
						this.unitTop = true;
						break;
					case 12:
						this.type = 2;
						this.radius = true;
						break;
					default:
						break;
				}
				this.$refs.dateTime.show();
			},
			change: function(e) {
				console.log(e);
				this.result = e.result;
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

	.tui-primary {
		color: #5677fc;
	}

	.tui-btn-box {
		padding: 10rpx 40rpx;
		box-sizing: border-box;
	}

	.tui-btn-btm {
		margin-bottom: 36rpx;
	}
</style>
