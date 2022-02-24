<template>
	<view class="container">
		<view class="header">
			<view class="title">Cascade Selection</view>
			<view class="sub-title">级联选择：可设置内容区域的高度，以及相关主题色等基本样式修改</view>
		</view>
		<view class="tui-title">传入所有数据</view>
		<tui-cascade-selection height="200px" :itemList="itemList" :defaultItemList="defaultItemList1" @complete="complete"></tui-cascade-selection>

		<view class="tui-title">设置默认数据</view>
		<tui-cascade-selection height="200px" :itemList="itemList" :defaultItemList="defaultItemList" @complete="complete"></tui-cascade-selection>

		<view class="tui-title">请求返回子级数据（8级数据）</view>
		<tui-cascade-selection
			height="280px"
			activeColor="#EB0909"
			lineColor="#EB0909"
			checkMarkColor="#EB0909"
			:itemList="itemList2"
			request
			:receiveData="receiveData"
			@complete="complete2"
			@change="change"
		></tui-cascade-selection>

		<view class="tui-btn-box"><tui-button shape="circle" type="danger" @click="selectAddr">底部弹出选择+重置数据</tui-button></view>
		<tui-bottom-popup :show="show" backgroundColor="transparent" @close="close">
			<view class="tui-header">
				<view>配送至</view>
				<icon type="clear" :size="16" color="#c0c0c0" class="tui-icon-close" @tap="close"></icon>
			</view>
			<tui-cascade-selection :size="26" :textSize="24" :itemList="itemList" :reset="reset" @complete="complete3"></tui-cascade-selection>
		</tui-bottom-popup>
	</view>
</template>

<script>
import cityData from '@/utils/picker.city.js';
export default {
	data() {
		return {
			itemList: cityData,
			itemList2: [],
			receiveData: [],
			reset: 0,
			show: false,
			defaultItemList1:['安徽省','阜阳市','颍上县'],
			defaultItemList: [
				{
					text: '安徽省',
					subText: '',
					value: '340000',
					src: '',
					index: 1,
					list: [{ text: '北京市', value: '110000' }, { text: '安徽省', value: '340000' }]
				},
				{
					text: '阜阳市',
					subText: '',
					value: '341200',
					src: '',
					index: 10,
					list: [
						{ text: '合肥市', value: '340100' },
						{ text: '芜湖市', value: '340200' },
						{ text: '蚌埠市', value: '340300' },
						{ text: '淮南市', value: '340400' },
						{ text: '马鞍山市', value: '340500' },
						{ text: '淮北市', value: '340600' },
						{ text: '铜陵市', value: '340700' },
						{ text: '安庆市', value: '340800' },
						{ text: '黄山市', value: '341000' },
						{ text: '滁州市', value: '341100' },
						{ text: '阜阳市', value: '341200' },
						{ text: '宿州市', value: '341300' },
						{ text: '六安市', value: '341500' },
						{ text: '亳州市', value: '341600' },
						{ text: '池州市', value: '341700' },
						{ text: '宣城市', value: '341800' }
					]
				},
				{
					text: '颍上县',
					subText: '',
					value: '341226',
					src: '',
					index: 6,
					list: [
						{ text: '颍州区', value: '341202' },
						{ text: '颍东区', value: '341203' },
						{ text: '颍泉区', value: '341204' },
						{ text: '临泉县', value: '341221' },
						{ text: '太和县', value: '341222' },
						{ text: '阜南县', value: '341225' },
						{ text: '颍上县', value: '341226' },
						{ text: '界首市', value: '341282' }
					]
				}
			],
			webURL: 'https://thorui.cn'
		};
	},
	onLoad() {
		this.itemList2 = [
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(1)班',
				subText: '30人',
				value: 101
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(2)班',
				subText: '30人',
				value: 102
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(3)班',
				subText: '30人',
				value: 103
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(4)班',
				subText: '28人',
				value: 104
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(5)班',
				subText: '28人',
				value: 105
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(6)班',
				subText: '28人',
				value: 106
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(7)班',
				subText: '28人',
				value: 107
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(8)班',
				subText: '38人',
				value: 108
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(9)班',
				subText: '38人',
				value: 109
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(10)班',
				subText: '38人',
				value: 110
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(11)班',
				subText: '38人',
				value: 111
			},
			{
				src: this.webURL + '/images/basic/color.png',
				text: '高一(12)班',
				subText: '38人',
				value: 112
			}
		];
	},
	methods: {
		complete(e) {
			console.log(e);
			this.tui.toast('您选择的数据为：' + e.text);
		},
		change(e) {
			console.log(e);
			/**
			 *   layer: 0  第几级 index
				 src: '/static/images/basic/color.png'
				 subIndex: 2   //当前层级下选中项index
				 subText: '30人'  //选中项数据
				 text: '高一(3)班'
				 value: 103 //选中项value数据
			 * */

			// 模拟请求
			let value = e.value;
			let layer = e.layer;
			if (layer === 7) {
				//实际中以请求数据为准，无下级数据则传空数组
				this.receiveData = [];
			} else {
				uni.showLoading({
					title: '请稍候...'
				});
				setTimeout(() => {
					uni.hideLoading();
					//请求完成后将数据处理成以下格式，传入，最后一级没有则传空数组
					switch (layer) {
						case 0:
							this.receiveData = [
								{
									text: '张三',
									subText: '男',
									value: 11101
								},
								{
									text: '王五',
									subText: '男',
									value: 11102
								},
								{
									text: '周小小',
									subText: '女',
									value: 11103
								},
								{
									text: '周小小',
									subText: '女',
									value: 11103
								},
								{
									text: '周小小',
									subText: '女',
									value: 11103
								}
							];
							break;
						case 1:
							this.receiveData = [
								{
									text: '他(她)说',
									value: 11101
								}
							];
							break;
						case 2:
							this.receiveData = [
								{
									text: '这是一个',
									value: 11101
								}
							];
							break;
						case 3:
							this.receiveData = [
								{
									text: '级联选择器',
									value: 11101
								}
							];
							break;
						case 4:
							this.receiveData = [
								{
									text: '测试例子',
									value: 11101
								}
							];
							break;
						case 5:
							this.receiveData = [
								{
									text: '总共',
									value: 11101
								}
							];
							break;
						case 6:
							this.receiveData = [
								{
									text: '8级数据',
									value: 11101
								}
							];
							break;
						default:
							break;
					}
				}, 800);
			}
		},
		complete2(e) {
			console.log(e);
			this.tui.toast('您选择的数据为：' + e.text);
		},
		selectAddr() {
			this.show = true;
		},
		close() {
			this.show = false;
		},
		complete3(e) {
			this.tui.toast('您选择的数据为：' + e.text);
			this.close();
			setTimeout(() => {
				//重置数据
				this.reset++;
			}, 300);
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
.tui-title {
	width: 100%;
	padding: 50rpx 30rpx 30rpx;
	box-sizing: border-box;
	font-size: 32rpx;
	font-weight: bold;
}
.tui-btn-box {
	width: 100%;
	padding: 80rpx 30rpx;
	box-sizing: border-box;
}
.tui-header {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #fff;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	overflow: hidden;
	position: relative;
}
.tui-icon-close {
	position: absolute;
	right: 30rpx;
	top: 50%;
	transform: translateY(-50%);
}
</style>
