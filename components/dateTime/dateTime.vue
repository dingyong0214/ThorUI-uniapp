<template>
	<view class="tui-datetime-picker">
		<view class="tui-mask" :class="{ 'tui-mask-show': isShow }" @touchmove.stop.prevent="stop" catchtouchmove="stop" @tap="hide"></view>
		<view class="tui-header" :class="{ 'tui-show': isShow }">
			<view class="tui-picker-header" @touchmove.stop.prevent="stop" catchtouchmove="stop">
				<view class="tui-btn-picker" :style="{ color: cancelColor }" hover-class="tui-opacity" :hover-stay-time="150"
				 @click="hide">取消</view>
				<view class="tui-btn-picker" :style="{ color: color }" hover-class="tui-opacity" :hover-stay-time="150" @click="btnFix">确定</view>
			</view>
			<view class="tui-picker-body">
				<picker-view :value="value" @change="change" class="tui-picker-view">
					<picker-view-column v-if="!reset && type!=4">
						<view class="tui-column-item" v-for="(item,index) in years" :key="index">
							{{ item }}<text class="tui-text">年</text>
						</view>
					</picker-view-column>
					<picker-view-column v-if="!reset && type!=4">
						<view class="tui-column-item" v-for="(item,index) in months" :key="index">
							{{ formatNum(item)}}<text class="tui-text">月</text>
						</view>
					</picker-view-column>
					<picker-view-column v-if="!reset && (type==1 || type==2)">
						<view class="tui-column-item" v-for="(item,index) in days" :key="index">
							{{ formatNum(item) }}<text class="tui-text">日</text>
						</view>
					</picker-view-column>
					<picker-view-column v-if="!reset && (type==1 || type==4)">
						<view class="tui-column-item" v-for="(item,index) in hours" :key="index">
							{{ formatNum(item) }}<text class="tui-text">时</text>
						</view>
					</picker-view-column>
					<picker-view-column v-if="!reset && (type==1 || type==4)">
						<view class="tui-column-item" v-for="(item,index) in minutes" :key="index">
							{{ formatNum(item) }}<text class="tui-text">分</text>
						</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tuiDatetime",
		props: {
			//1-日期+时间（年月日+时分） 2-日期(年月日) 3-日期(年月) 4-时间（时分）
			type: {
				type: Number,
				default: 1
			},
			//年份区间
			startYear: {
				type: Number,
				default: 1980
			},
			//年份区间
			endYear: {
				type: Number,
				default: 2050
			},
			//"取消"字体颜色
			cancelColor: {
				type: String,
				default: "#888"
			},
			//"确定"字体颜色
			color: {
				type: String,
				default: "#5677fc"
			},
			//设置默认显示日期 2019-08-01 || 2019-08-01 17:01 || 2019/08/01 
			setDateTime: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				isShow: false,
				years: [],
				months: [],
				days: [],
				hours: [],
				minutes: [],
				year: 0,
				month: 0,
				day: 0,
				hour: 0,
				minute: 0,
				startDate: "",
				endDate: "",
				value: [0, 0, 0, 0, 0],
				reset: false
			};
		},
		mounted() {
			this.initData();
		},
		computed: {
			yearOrMonth() {
				return `${this.year}-${this.month}`
			},
			propsChange() {
				return `${this.setDateTime}-${this.type}-${this.startYear}-${this.endYear}`
			}
		},
		watch: {
			yearOrMonth() {
				this.setDays();
			},
			propsChange() {
				this.reset = true
				setTimeout(() => {
					this.initData()
				}, 10);
			}
		},
		methods: {
			stop() {},
			formatNum: function(num) {
				return num < 10 ? "0" + num : num + "";
			},
			generateArray: function(start, end) {
				return Array.from(new Array(end + 1).keys()).slice(start)
			},
			getIndex: function(arr, val) {
				let index = arr.indexOf(val);
				return ~index ? index : 0
			},
			//日期时间处理
			initSelectValue() {
				let fdate = this.setDateTime.replace(/\-/g, '/');
				fdate = fdate && fdate.indexOf("/") == -1 ? `2020/01/01 ${fdate}` : fdate
				let time = null;
				if (fdate)
					time = new Date(fdate);
				else
					time = new Date();
				this.year = time.getFullYear()
				this.month = time.getMonth() + 1;
				this.day = time.getDate();
				this.hour = time.getHours();
				this.minute = time.getMinutes();
			},
			initData() {
				this.initSelectValue()
				this.reset = false
				switch (this.type) {
					case 1:
						this.value = [0, 0, 0, 0, 0];
						this.setYears();
						this.setMonths();
						this.setDays();
						this.setHours();
						this.setMinutes();
						break;
					case 2:
						this.value = [0, 0, 0];
						this.setYears();
						this.setMonths();
						this.setDays();
						break;
					case 3:
						this.value = [0, 0];
						this.setYears();
						this.setMonths();
						break;
					case 4:
						this.value = [0, 0];
						this.setHours();
						this.setMinutes();
						break;
					default:
						break;
				}
			},
			setYears() {
				this.years = this.generateArray(this.startYear, this.endYear);
				setTimeout(()=> {
					this.$set(this.value, 0, this.getIndex(this.years, this.year));
				}, 8);
			},
			setMonths() {
				this.months = this.generateArray(1, 12);
				setTimeout(()=> {
					this.$set(this.value, 1, this.getIndex(this.months, this.month));
				}, 8);
			},
			setDays() {
				if (this.type == 3 || this.type == 4) return;
				let totalDays = new Date(this.year, this.month, 0).getDate();
				this.days = this.generateArray(1, totalDays);
				setTimeout(()=> {
					this.$set(this.value, 2, this.getIndex(this.days, this.day));
				}, 8);
			},
			setHours() {
				this.hours = this.generateArray(0, 23);
				setTimeout(()=> {
					this.$set(this.value, this.value.length - 2, this.getIndex(this.hours, this.hour));
				}, 8);
				
			},
			setMinutes() {
				this.minutes = this.generateArray(0, 59);
				setTimeout(()=> {
					this.$set(this.value, this.value.length - 1, this.getIndex(this.minutes, this.minute));
				}, 8);
			},
			show() {
				setTimeout(() => {
					this.isShow = true;
				}, 50);
			},
			hide() {
				this.isShow = false;
			},
			change(e) {
				this.value = e.detail.value;
				switch (this.type) {
					case 1:
						this.year = this.years[this.value[0]];
						this.month = this.months[this.value[1]];
						this.day = this.days[this.value[2]];
						this.hour = this.hours[this.value[3]];
						this.minute = this.minutes[this.value[4]];
						break;
					case 2:
						this.year = this.years[this.value[0]];
						this.month = this.months[this.value[1]];
						this.day = this.days[this.value[2]];
						break;
					case 3:
						this.year = this.years[this.value[0]];
						this.month = this.months[this.value[1]];
						break;
					case 4:
						this.hour = this.hours[this.value[0]];
						this.minute = this.minutes[this.value[1]];
						break;
					default:
						break;
				}

			},
			btnFix() {
				let result = {};
				let year = this.year;
				let month = this.formatNum(this.month || 0);
				let day = this.formatNum(this.day || 0);
				let hour = this.formatNum(this.hour || 0);
				let minute = this.formatNum(this.minute || 0);
				switch (this.type) {
					case 1:
						result = {
							year: year,
							month: month,
							day: day,
							hour: hour,
							minute: minute,
							result: `${year}-${month}-${day} ${hour}:${minute}`
						}
						break;
					case 2:
						result = {
							year: year,
							month: month,
							day: day,
							result: `${year}-${month}-${day}`
						}
						break;
					case 3:
						result = {
							year: year,
							month: month,
							result: `${year}-${month}`
						}
						break;
					case 4:
						result = {
							hour: hour,
							minute: minute,
							result: `${hour}:${minute}`
						}
						break;
					default:
						break;
				}
				this.$emit("confirm", result);
				this.hide();
			}
		}
	};
</script>

<style>
	.tui-datetime-picker {
		position: relative;
		z-index: 999;
	}

	.tui-picker-view {
		height: 100%;
		box-sizing: border-box;
	}

	.tui-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.6);
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}

	.tui-mask-show {
		visibility: visible !important;
		opacity: 1 !important;
	}

	.tui-header {
		z-index: 9999;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		transition: all 0.3s ease-in-out;
		transform: translateY(100%);
	}

	.tui-show {
		transform: translateY(0);
	}

	.tui-picker-header {
		width: 100%;
		height: 90rpx;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		font-size: 32rpx;
		background: #fff;
		position: relative;
	}

	.tui-picker-header::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 0;
	}

	.tui-picker-body {
		width: 100%;
		height: 500rpx;
		overflow: hidden;
		background-color: #fff;
	}

	.tui-column-item {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 36rpx;
		color: #333;
	}

	.tui-text {
		font-size: 24rpx;
		padding-left: 8rpx;
	}

	.tui-btn-picker {
		padding: 16rpx;
		box-sizing: border-box;
		text-align: center;
		text-decoration: none;
	}

	.tui-opacity {
		opacity: 0.5;
	}
</style>
