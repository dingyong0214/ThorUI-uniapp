<template>
	<view class="container">
		<view class="tips">
			<view>1、吸顶容器 wxs实现，与之前sticky组件使用方法基本一致，异步数据加载实现吸顶略有调整，具体参考文档</view>
			<view>2、tui-sticky可直接换成tui-sticky-wxs</view>
		</view>
		<tui-sticky-wxs @sticky="sticky"  :scrollTop="scrollTop" stickyHeight="104rpx" container>
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
					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='https://thorui.cn/images/basic/badge.png' class="logo"></image>
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

					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/my/mine_def_touxiang_3x.png' class="logo"></image>
							<view class="des-box">
								<view class="tit">扫收钱码付款-给小仙女(2019-06.04）</view>
								<view class="source">生活日用</view>
								<view class="time">今天 09:01</view>
							</view>
						</view>
						<view class="money">
							-20190604.07
						</view>
					</view>

					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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


					<view class="tui-list-item item-last" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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
		</tui-sticky-wxs>

		<tui-sticky-wxs :scrollTop="scrollTop" stickyHeight="104rpx" container>
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
				<view class="tui-list-view">
					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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

					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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

					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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


					<view class="tui-list-item item-last" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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
		</tui-sticky-wxs>

		<tui-sticky-wxs :scrollTop="scrollTop" stickyHeight="104rpx" container>
			<template v-slot:header>
				<view class="sticky-item">
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
					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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

					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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

					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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
					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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
					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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
					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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
					<view class="tui-list-item" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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


					<view class="tui-list-item item-last" hover-class="tui-hover" :hover-stay-time="150" @tap="detail">
						<view class="content-box">
							<image src='/static/images/index/logo.png' class="logo"></image>
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
		</tui-sticky-wxs>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0
			}
		},
		methods: {
			detail(e) {
				this.tui.toast("功能开发中~")
			},
			sticky(e){
				//通知事件
				console.log(e)
			}
		},
		//页面滚动执行方式
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tips {
		background: #fff;
		padding: 50rpx 34rpx;
		color: #555;
		font-size: 24rpx;
		line-height: 42rpx;
		position: relative;
	}

	.tips::before {
		content: '';
		position: absolute;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		top: 0;
		right: 0;
		left: 0;
	}

	/* sticky 容器 start */
	.sticky-item {
		width: 100%;
		height: 104rpx;
		padding: 20rpx 30rpx;
		background-color: #fafafa;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	/* sticky 容器 end */

	.date {
		height: 54rpx;
		font-size: 28rpx;
		background-color: #fff;
		padding: 0 28rpx;
		border-radius: 25rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		/* box-shadow: 0 0 1rpx #7A7A7A; */
	}

	.date::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1rpx solid #eaeef1;
		border-radius: 60rpx;
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
		font-size: 24rpx;
	}

	.list-view {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.list-view::after {
		content: '';
		position: absolute;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		top: 0;
		right: 0;
		left: 0;
	}

	.tui-list-item {
		width: 100%;
		padding: 30rpx 28rpx;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}

	.tui-list-item::after {
		left: 120rpx
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
		width: 60rpx;
		height: 60rpx;
		flex-grow: 1
	}

	.des-box {
		min-height: 130rpx;
		padding-left: 28rpx;
		box-sizing: border-box;
		vertical-align: top;
		color: #333;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tit {
		font-size: 32rpx;
		max-width: 420rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.time {
		color: #888
	}

	.money {
		font-size: 38rpx;
		font-weight: 500;
		color: #000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 20rpx;
	}

	.add {
		color: #5677FC !important;
	}

	.tui-color-primary {
		color: #5677fc;
	}
</style>
