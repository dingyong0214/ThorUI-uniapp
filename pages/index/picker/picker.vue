<template>
	<view class="container">
		<tui-button disabled shape="circle" margin="0 0 32rpx 0">禁用状态</tui-button>
		<tui-button disabled disabledGray shape="circle" margin="0 0 32rpx 0">禁用状态</tui-button>
		<picker :value="value" mode="multiSelector" @change="picker" @columnchange="columnPicker" :range="multiArray">
			<tui-button  shape="circle">请选择</tui-button>
		</picker>
		<view class="result">
			{{text}}
		</view>
	</view>
</template>

<script>
	import cityData from '@/utils/picker.city.js'
	export default {
		data() {
			return {
				selectList: cityData, //接口返回picker数据,此处就直接使用本地测试数据
				multiArray: [], //picker数据
				value: [0, 0, 0],
				text: "",
				id: ""
			}
		},
		onLoad: function() {
			this.multiArray = [
				this.toArr(this.selectList),
				this.toArr(this.selectList[0].children),
				this.toArr(this.selectList[0].children[0].children)
			]
		},
		methods: {
			picker: function(e) {
				let value = e.detail.value;
				if (this.selectList.length > 0) {
					let provice = this.selectList[value[0]].text
					let city = this.selectList[value[0]].children[value[1]].text
					let district = this.selectList[value[0]].children[value[1]].children[value[2]].text
					this.text = provice + " " + city + " " + district;
					this.id = this.selectList[value[0]].children[value[1]].children[value[2]].value
				}
			},
			toArr(object) {
				let arr = [];
				for (let i in object) {
					arr.push(object[i].text);
				}
				return arr;
			},
			columnPicker: function(e) {
				//第几列 下标从0开始
				let column = e.detail.column;
				//第几行 下标从0开始
				let value = e.detail.value;
				if (column === 0) {
					this.multiArray = [
						this.multiArray[0],
						this.toArr(this.selectList[value].children),
						this.toArr(this.selectList[value].children[0].children)
					];
					this.value = [value, 0, 0]
				} else if (column === 1) {
					this.multiArray = [
						this.multiArray[0],
						this.multiArray[1],
						this.toArr(this.selectList[this.value[0]].children[value].children)
					];
					this.value = [this.value[0], value, 0]
				}
			}
		}
	}
</script>

<style>
	.container {
		padding: 100rpx 30rpx
	}

	.result {
		padding: 60rpx 20rpx;
		font-size: 30rpx;
		color: #333
	}

</style>