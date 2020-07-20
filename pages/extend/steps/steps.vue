<template>
	<view class="container">
		<view class="tui-title">
			水平方向
		</view>
		<tui-steps :items="items" spacing="180rpx" :activeSteps="activeSteps"></tui-steps>
		<view class="tui-top">
			<tui-steps :items="items" :type="2" spacing="180rpx" :activeSteps="activeSteps"></tui-steps>
		</view>
		
		<view class="tui-top">
			<tui-steps :items="items2" :type="2" spacing="180rpx" :activeSteps="activeSteps"></tui-steps>
		</view>
		<view class="tui-top">
			<tui-steps :items="items2" lineStyle="dashed" :type="2" spacing="180rpx" :activeSteps="activeSteps"></tui-steps>
		</view>
		<view class="tui-title">
			垂直方向
		</view>
		<view class="tui-top tui-flex-box">
			<tui-steps :activeSteps="activeSteps" :items="items" direction="column" deactiveColor="#c0c0c0" activeColor="#19be6b"></tui-steps>
			<tui-steps :activeSteps="activeSteps" :items="items" direction="column" :type="2" deactiveColor="#c0c0c0" activeColor="#EB0909"></tui-steps>
		</view>
		<view class="tui-btn-box">
			<tui-button @click="change" shape="circle">下一步</tui-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
					title: "步骤一",
					desc: "2020-04-01"
				}, {
					title: "步骤二",
					desc: "2020-04-01"
				}, {
					title: "步骤三",
					desc: "2020-04-01"
				}, {
					title: "步骤四",
					desc: "2020-04-01"
				}],
				items2: [{
					title: "",
					desc: "code",
					name:"",
					icon:"/static/images/tabbar/code_gray.png",
					activeIcon:"/static/images/tabbar/code_active.png"
				}, {
					title: "",
					desc: "extend",
					name:"",
					icon:"/static/images/tabbar/extend_gray.png",
					activeIcon:"/static/images/tabbar/extend_active.png"
				}, {
					title: "",
					desc: "my",
					name:"",
					icon:"/static/images/tabbar/thor_gray.png",
					activeIcon:"/static/images/tabbar/thor_active.png"
				}, {
					title: "",
					desc: "thor",
					name:"",
					icon:"/static/images/tabbar/thor_gray.png",
					activeIcon:"/static/images/tabbar/thor_active.png"
				}],
				activeSteps: 1
			}
		},
		methods: {
			change() {
				let steps = this.activeSteps + 1
				this.activeSteps = steps > 3 ? 0 : steps
			}
		}
	}
</script>

<style>
	.container{
		padding-bottom: 90rpx;
	}
	.tui-title {
		width: 100%;
		padding: 50rpx 30rpx 30rpx;
		box-sizing: border-box;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
	}

	.tui-top {
		margin-top: 40rpx;
	}

	.tui-flex-box {
		width: 100%;
		padding: 0 50rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.tui-btn-box {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
</style>
