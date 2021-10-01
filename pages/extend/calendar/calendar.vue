<template>
	<view class="container">
		<view class="header">
			<view class="title">Calendar</view>
			<view class="sub-title">
				<text class="tui-color-primary">您选择的日期为：{{ result }}</text>
			</view>
			<view class="sub-title">
				<text class="tui-color-primary">农历：{{ lunarResult }}</text>
			</view>
		</view>
		<view class="tui-title tui-ptop20">
			显示农历（古历）
			<switch class="tui-switch" :checked="lunar" color="#5677fc" @change="switchChange"></switch>
		</view>
		<view class="tui-btn-box">
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="selectDate(1)">选择单个日期</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="selectDate(3)">设置日历可选范围</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="selectDate(2)">选择日期区间</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="selectDate(4)">自定义颜色</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="selectDate(5)">自定义区间文字</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="selectDate(6)">只能切换月份</tui-button>
			<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="selectDate(7)">设置默认值</tui-button>
		</view>
		<!--默认直接展示-->
		<view class="tui-title">默认平铺展示</view>
		<view class="tui-calendar-box">
			<!--isChange 加上则切换年份或月份时回传数据-->
			<tui-calendar :lunar="lunar" :arrowType="2" isChange :status="status" @change="monthChange"></tui-calendar>
		</view>
		<!--底部弹出选择-->
		<tui-calendar
			:lunar="lunar"
			isFixed
			:minDate="minDate"
			:maxDate="maxDate"
			:btnType="btnType"
			:activeBgColor="activeBgColor"
			:rangeBgColor="rangeBgColor"
			:rangeColor="rangeColor"
			:startText="startText"
			:endText="endText"
			:arrowType="arrowType"
			:type="type"
			:initStartDate="initStartDate"
			:initEndDate="initEndDate"
			ref="calendar"
			@change="change"
		></tui-calendar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: 1,
			status: [],
			arrowType: 1,
			minDate: '1920-01-01',
			maxDate: '',
			btnType: 'primary',
			activeBgColor: '#5677fc',
			rangeBgColor: 'rgba(86,119,252,0.1)',
			rangeColor: '#5677fc',
			startText: '开始',
			endText: '结束',
			lunar: true,
			result: '',
			lunarResult: '',
			initStartDate: '',
			initEndDate: ''
		};
	},
	methods: {
		switchChange(e) {
			this.lunar = e.target.value;
		},
		selectDate(type) {
			this.arrowType = 1;
			this.minDate = '1920-01-01';
			this.maxDate = '';
			this.btnType = 'primary';
			this.activeBgColor = '#5677fc';
			this.rangeBgColor = 'rgba(86,119,252,0.1)';
			this.rangeColor = '#5677fc';
			this.startText = '开始';
			this.endText = '结束';
			this.initStartDate = '';
			this.initEndDate = '';
			switch (type) {
				case 1:
					this.type = 1;
					break;
				case 2:
					this.type = 2;
					break;
				case 3:
					this.minDate = '2021-01-01';
					this.maxDate = '2022-12-12';
					this.type = 1;
					break;
				case 4:
					this.type = 2;
					this.btnType = 'danger';
					this.activeBgColor = '#EB0909';
					this.rangeBgColor = 'rgba(235,9,9,0.1)';
					this.rangeColor = '#EB0909';
					this.arrowType = 1;
					break;

				case 5:
					this.type = 2;
					this.startText = '住店';
					this.endText = '离店';
					break;
				case 6:
					this.arrowType = 2;
					break;
				case 7:
					this.type = 2;
					this.initStartDate = '2020-06-06';
					this.initEndDate = '2020-06-28';
					break;
				default:
					break;
			}
			this.$refs.calendar.show();
		},
		change(e) {
			console.log(e);
			if (this.type == 1) {
				this.result = e.result + ' ' + e.week;
				let date = `${e.lunar.lYear}-${e.lunar.lMonth}-${e.lunar.lDay}`;
				this.lunarResult = `${e.lunar.gzYear}年，${e.lunar.gzMonth}月，${e.lunar.gzDay}日 。生肖：${e.lunar.Animal}。日期：${e.lunar.IMonthCn + e.lunar.IDayCn}(${date})`;
			} else {
				this.result = `${e.startDate} 至 ${e.endDate}`;
				let sDate = `${e.startLunar.IMonthCn + e.startLunar.IDayCn}(${e.startLunar.lYear}-${e.startLunar.lMonth}-${e.startLunar.lDay})`;
				let eDate = `${e.endLunar.IMonthCn + e.endLunar.IDayCn}(${e.endLunar.lYear}-${e.endLunar.lMonth}-${e.endLunar.lDay})`;
				this.lunarResult = `${sDate} 至 ${eDate}`;
			}
		},
		monthChange(e) {
			//  {
			// 	days: 31, //当月共有多少天
			// 	isToday: false, //是否为今天
			// 	result: "2020-05-04",
			// 	year: 2020
			// 	month: 5,
			// 	day: 4,
			// 	week: "星期一"
			// }
			this.tui.toast(e.result);
			if (e.switch) {
				let now = new Date();
				let year = now.getFullYear();
				let month = now.getMonth() + 1;
				let day = now.getDate() - 1;
				if (e.year == year && e.month == month) {
					let days = e.days;
					let status = [];
					for (let i = 0; i < days; i++) {
						let bgColor = '';
						let check = false;
						if (i <= day) {
							bgColor = i === day ? '#19be6b' : '#ff7900';
							check = i === day ? true : false;
						} else {
							bgColor = '#999';
						}
						status.push({
							bgColor: bgColor,
							color: '#fff',
							check: check
						});
					}
					this.status = status;
				} else {
					this.status = [];
				}
			}
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
	padding: 10rpx 40rpx;
	box-sizing: border-box;
}

.tui-calendar-box {
	padding: 20rpx;
	background-color: #fff;
	margin-top: 40rpx;
	box-sizing: border-box;
}

.tui-title {
	width: 100%;
	padding: 80rpx 30rpx 30rpx;
	box-sizing: border-box;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tui-ptop20 {
	padding-top: 20rpx;
}

.tui-switch {
	transform: scale(0.8);
	transform-origin: 100% center;
}

.tui-color-primary {
	color: #5677fc;
}
</style>
