<template>
	<view class="container">
		<tui-swipe-action :actions="actions"  @click="handlerButton" v-for="(item,index) in dataList"
		 :key="index" :params="item">
			<template v-slot:content>
				<view class="tui-list-item">
					<image :src="'/static/images/news/'+item.img+'.jpg'" class="item-img"></image>
					<view class="item-box">
						<view class="item-title">{{item.title}}</view>
						<view class="item-time">2019-06-01</view>
					</view>
				</view>
			</template>
		</tui-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [{
					id: 1,
					title: "20余省公务员省考笔试放榜 作弊者特别惨",
					img: 'avatar_1'
				}, {
					id: 2,
					title: "钢票网与恒丰银行正式签订资金存管协议",
					img: 'avatar_2'
				}, {
					id: 3,
					title: "你的信息被出卖了吗？卖50条个人信息能判3年",
					img: 'avatar_1'
				}, {
					id: 4,
					title: "杨振宁：我跟翁帆说我准备活到100岁",
					img: 1
				}, {
					id: 5,
					title: "现实版孙连城：天津正局级干部因不作为被免职",
					img: 'avatar_1'
				}, {
					id: 6,
					title: "勒索病毒还未收场 内幕已经足够惊人",
					img: 'avatar_2'
				}, {
					id: 7,
					title: "普京弹钢琴又圈粉 国家领导人们都有哪些才艺？",
					img: 2
				}, {
					id: 8,
					title: "特朗普“海选”FBI局长 一天面试8个",
					img: 1
				}, {
					id: 9,
					title: "经济下行压力是否进一步扩大？官方回应经济热点",
					img: 4
				}, {
					id: 10,
					title: "上海一家三口住9平米房间27年 儿子踩冰箱上床",
					img: 'avatar_2'
				}, {
					id: 11,
					title: "英国曼彻斯特发生爆炸 事发地正举行演唱会",
					img: 1
				}, {
					id: 12,
					title: "美国会表决通过新驻华大使 月底有望赴华",
					img: 'avatar_1'
				}],
				actions: [{
					name: '删除',
					color: '#fff',
					fontsize: 30, //单位rpx
					width: 70, //单位px
					background: '#FD3B31'
				},
				{
					name: '收藏',
					width: 70,
					fontsize: 30,
					color: '#fff',
					background: '#C8C7CD'
				}]
			}
		},
		methods: {
			handlerButton(e) {
				let index = e.index;
				let item = e.item;
				let menuTxt = ["删除", "修改", "收藏"][index];
				this.tui.toast("您点击了【" + menuTxt + "】按钮，列表id：" + item.id);
				// setTimeout(() => {
				// 	this.closable= this.closable ? false : true
				// }, 200)
			}
		}
	}
</script>

<style>
	.container {
		background: #fff;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-list-item {
		padding: 30rpx 30rpx;
		display: flex;
		align-items: item;
	}

	.item-img {
		height: 120rpx;
		width: 120rpx;
		margin-right: 20rpx;
		display: block
	}

	.item-box {
		flex: 1;
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-between
	}

	.item-title {
		font-size: 32rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

	}

	.item-time {
		color: #999;
		font-size: 24rpx;
	}
</style>
