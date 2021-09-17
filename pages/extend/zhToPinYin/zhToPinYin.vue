<template>
	<view class="container">
		<view class="header">
			<view class="title">中文转拼音</view>
			<view class="sub-title">中文转拼音,获取拼音首字母等，使用场景：如获取通讯录按A-Z排序</view>
		</view>
		<view class="tui-title">中文</view>
		<view class="tui-content">
			{{chinese}}
		</view>
		<view class="tui-title">拼音带空格</view>
		<view class="tui-content">
			{{pinyinSpace}}
		</view>
		<view class="tui-title">拼音不带空格</view>
		<view class="tui-content">
			{{pinyin}}
		</view>
		<view class="tui-title">拼音首字母</view>
		<view class="tui-content">
			{{initials}}
		</view>

		<view class="tui-title">姓氏</view>
		<view class="tui-content">
			{{surname.join("，")}}
		</view>
		<view class="tui-title">姓氏拼音（处理多音字）</view>
		<view class="tui-content">
			{{surnamePy.join("，")}}
		</view>
		
		<view class="tui-title">返回多音字所有首字母</view>
		<view class="tui-content">
			单 {{polyphone}}
		</view>
		
	</view>
</template>

<script>
	import ZhToPinYin from '@/components/common/tui-zh-pinyin/tui-zh-pinyin.js';
	export default {
		data() {
			return {
				zhToPinYin: null,
				chinese: "欢迎使用组件库，希望大家多多支持！",
				pinyinSpace: "", //拼音带空格
				pinyin: "", //拼音不带空格
				initials: "", //首字母
				surname: ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "曾", "单", "查", "尉", "晟"],
				surnamePy: [],
                polyphone:""
			};
		},
		onLoad() {
			//titleCase：首字母是否大写 ,默认true
			this.zhToPinYin = new ZhToPinYin(true);
			this.pinyinSpace = this.zhToPinYin.getPinYin(this.chinese, true)
			this.pinyin = this.zhToPinYin.getPinYin(this.chinese, false)
			this.initials = this.zhToPinYin.getInitials(this.chinese)

			let pyArr = []
			for (let item of this.surname) {
				let pinyin = this.zhToPinYin.surnamePolyphone(item)
				pinyin = pinyin ? pinyin : this.zhToPinYin.getPinYin(item)
				pyArr.push(pinyin)
			}
			this.surnamePy = pyArr
			
			this.polyphone=this.zhToPinYin.getInitials("单",true)
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
		padding: 30rpx;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		box-sizing: border-box;
	}

	.tui-content {
		padding: 30rpx;
		font-size: 30rpx;
		color: #333;
		box-sizing: border-box;
		background-color: #fff;
		word-break: break-all;
	}

	.tui-btn-box {
		padding: 30rpx 40rpx;
		box-sizing: border-box;
		margin-top: 40rpx;
	}
</style>
