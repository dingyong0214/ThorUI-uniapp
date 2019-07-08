<template>
	<view class="container">
		<view class="tips">
			<view>1、判断平台，ios可直接使用position: sticky</view>
			<view>2、对sticky-item容器进行绝对定位，底部内容部分使用外边距撑开sticky-item高度，减缓页面抖动</view>
		</view>
		<tui-sticky :scrollTop="scrollTop">
			<template v-slot:header>
				<view class="sticky-item">
					<view class="date">本月</view>
					<view class="amount">
						<view>支出 ￥2030.88</view>
						<view>收入 ￥230.50</view>
					</view>
				</view>

			</template>
			<template v-slot:content>
				<!--内容 start-->
				<view class="list-view">
					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">朝朝盈-2019.06.03-收益发放</view>
								<view class="source">理财</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money add">
							+0.07
						</view>
					</view>

					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">扫收钱码付款-给小短腿(2019-06.04）</view>
								<view class="source">生活日用</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money">
							-20190604.07
						</view>
					</view>

					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">美团点评</view>
								<view class="source">餐饮美食</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money">
							-888.00
						</view>
					</view>


					<view class="list-item item-last" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">工资收入</view>
								<view class="source">工资</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money add">
							+66668666.00
						</view>
					</view>


				</view>
				<!--内容 end-->
			</template>
		</tui-sticky>

		<tui-sticky :scrollTop="scrollTop">
			<template v-slot:header>
				<view class="sticky-item ">
					<view class="date">5月</view>
					<view class="amount">
						<view>支出 ￥130.88</view>
						<view>收入 ￥2430.50</view>
					</view>
				</view>
			</template>
			<template v-slot:content>
				<!--内容 start-->
				<view class="list-view">
					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">朝朝盈-2019.06.03-收益发放</view>
								<view class="source">理财</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money add">
							+0.07
						</view>
					</view>

					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">扫收钱码付款-给小短腿</view>
								<view class="source">生活日用</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money">
							-201906.07
						</view>
					</view>

					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">美团点评</view>
								<view class="source">餐饮美食</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money">
							-888.00
						</view>
					</view>


					<view class="list-item item-last" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">工资收入</view>
								<view class="source">工资</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money add">
							+66668666.00
						</view>
					</view>


				</view>
				<!--内容 end-->
			</template>
		</tui-sticky>

		<tui-sticky :scrollTop="scrollTop">
			<template v-slot:header>
				<view class="sticky-item ">
					<view class="date">4月</view>
					<view class="amount">
						<view>支出 ￥61300.88</view>
						<view>收入 ￥2430.50</view>
					</view>
				</view>
			</template>
			<template v-slot:content>
				<!--内容-->
				<view class="list-view">
					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">朝朝盈-2019.06.03-收益发放</view>
								<view class="source">理财</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money add">
							+0.07
						</view>
					</view>

					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">扫收钱码付款-给小短腿</view>
								<view class="source">生活日用</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money">
							-201906.07
						</view>
					</view>

					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">美团点评</view>
								<view class="source">餐饮美食</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money">
							-888.00
						</view>
					</view>
					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">美团点评</view>
								<view class="source">餐饮美食</view>
								<view class="time">昨天 09:01</view>
							</view>
						</view>
						<view class="money">
							-99.00
						</view>
					</view>
					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">美团点评</view>
								<view class="source">餐饮美食</view>
								<view class="time">04-03 09:01</view>
							</view>
						</view>
						<view class="money">
							-60.00
						</view>
					</view>
					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">美团点评</view>
								<view class="source">餐饮美食</view>
								<view class="time">04-02 19:30</view>
							</view>
						</view>
						<view class="money">
							-888.00
						</view>
					</view>
					<view class="list-item" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">美团点评</view>
								<view class="source">餐饮美食</view>
								<view class="time">04-02 09:01</view>
							</view>
						</view>
						<view class="money">
							-40.00
						</view>
					</view>


					<view class="list-item item-last" hover-class="hover" hover-stay-time="150" bindtap="detail">
						<view class="content-box">
							<image src='../../../static/images/index/logo.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">工资收入</view>
								<view class="source">工资</view>
								<view class="time">04-01 09:01</view>
							</view>
						</view>
						<view class="money add">
							+66668666.00
						</view>
					</view>

				</view>
				<!--内容-->
			</template>
		</tui-sticky>

	</view>
</template>

<script>
	import tuiSticky from "@/components/sticky/sticky"
	export default {
		components:{
			tuiSticky
		},
		data() {
			return {
				scrollTop: 0
			}
		},
		methods: {
			detail(e) {
				this.tui.toast("详情功能尚未完善~")
			}
		},
		//页面滚动执行方式
		onPageScroll(e) {
			this.scrollTop= e.scrollTop
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tips {
		background: #fff;
		padding: 50upx 34upx;
		color: #555;
		font-size: 24upx;
		line-height: 42upx;
		position: relative;
	}

	.tips::before {
		content: '';
		position: absolute;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		top: 0;
		right: 0;
		left: 0;
	}

	/* .sticky-container{
 position: relative;
} */
	/* sticky 容器 start */
	.sticky-item {
		width: 100%;
		padding: 20upx 30upx;
		background: #fafafa;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	/* sticky 容器 end */

	.date {
		height: 54upx;
		font-size: 28upx;
		background: #fff;
		padding: 0 28upx;
		border-radius: 25upx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		/* box-shadow: 0 0 1upx #7A7A7A; */
	}

	.date::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1upx solid #eaeef1;
		border-radius: 60upx;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
	}

	.amount {
		text-align: right;
		color: #7A7A7A;
		font-size: 24upx;
	}

	.list-view {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.list-view::after {
		content: '';
		position: absolute;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		top: 0;
		right: 0;
		left: 0;
	}

	.list-item {
		width: 100%;
		padding: 30upx 28upx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.list-item::after {
		left: 120upx
	}

	.item-last::after {
		left: 0 !important
	}

	.content-box {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.logo {
		width: 60upx;
		height: 60upx;
		flex-grow: 1
	}

	.des-box {
		min-height: 130upx;
		padding-left: 28upx;
		box-sizing: border-box;
		vertical-align: top;
		color: #333;
		font-size: 24upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tit {
		font-size: 32upx;
		max-width: 420upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.time {
		color: #888
	}

	.money {
		font-size: 38upx;
		font-weight: 500;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 20upx;
	}

	.add {
		color: #5677FC !important;
	}
</style>
