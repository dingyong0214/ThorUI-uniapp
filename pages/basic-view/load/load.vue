<template>
	<view class="container">
		<view class="header">
			<view class="title">Loading</view>
			<view class="sub-title">加载中...</view>
		</view>

		<!--正在加载 start-->
		<tui-loadmore :visible="true"></tui-loadmore>
		<!--正在加载 end-->

		<!--正在加载 start-->
		<tui-loadmore :visible="true" :index="2"></tui-loadmore>
		<!--正在加载 end-->
		<!--正在加载 start-->
		<tui-loadmore :visible="true" :index="3"></tui-loadmore>
		<tui-loadmore :visible="true" :index="3" type="primary"></tui-loadmore>
		<tui-loadmore :visible="true" :index="3" type="red"></tui-loadmore>
		<tui-loadmore :visible="true" :index="3" type="orange"></tui-loadmore>
		<tui-loadmore :visible="true" :index="3" type="green"></tui-loadmore>
		<!--正在加载 end-->
		<!--没有更多了 start-->
		<tui-nomore :visible="true"></tui-nomore>
		<tui-nomore :visible="true" text="NO MORE"></tui-nomore>
		<!--没有更多了 end-->
		<!--没有更多了 start-->
		<tui-nomore :visible="true" :isDot="true"></tui-nomore>
		<!--没有更多了 end-->

		<!--加载框 start-->
		<tui-loading :visible="true"></tui-loading>
		<!--加载框 end--> 

	</view>
</template>

<script>
	import tuiNomore from "@/components/nomore/nomore"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiLoading from "@/components/loading/loading"
	export default {
		components:{
			tuiNomore,
			tuiLoadmore,
			tuiLoading
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20upx 30upx 40upx 30upx;
		box-sizing: border-box;
	}

	.header {
		padding: 80upx 60upx 50upx 60upx;
	}

	.title {
		font-size: 36upx;
		color: #333;
		font-weight: bold;
	}

	.sub-title {
		font-size: 28upx;
		color: #7a7a7a;
		padding-top: 18upx;
	}
</style>
