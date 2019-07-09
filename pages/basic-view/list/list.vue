<template>
	<view class="container">
		<!--内容部分-->
		<tui-list-view title="不带箭头，无点击效果" color="#777" class="tui-list-view">
			<tui-list-cell @click="detail" :hover="false">
				不带箭头，无点击效果
			</tui-list-cell>
			<tui-list-cell @click="detail" :hover="false">
				不带箭头，无点击效果
			</tui-list-cell>
			<tui-list-cell @click="detail" :hover="false">
				不带箭头，无点击效果
			</tui-list-cell>
		</tui-list-view>

		<tui-list-view title="带箭头，有点击效果" class="tui-list-view">
			<tui-list-cell @click="detail" :arrow="true">
				带箭头，有点击效果
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true">
				带箭头，有点击效果
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true">
				带箭头，有点击效果
			</tui-list-cell>
		</tui-list-view>

		<tui-list-view title="无上下线条" unlined="all" class="tui-list-view">
			<tui-list-cell @click="detail" :arrow="true">
				无上下线条,可单独设置，改变颜色
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true" color="#19be6b">
				无上下线条,可单独设置，改变颜色
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true">
				无上下线条,可单独设置，改变颜色
			</tui-list-cell>
		</tui-list-view>

		<tui-list-view title="无线条" unlined="all" class="tui-list-view">
			<tui-list-cell @click="detail" :last="true" size="36">
				无线条，无箭头，大字体
			</tui-list-cell>
			<tui-list-cell @click="detail" :last="true" size="36">
				无线条，无箭头，大字体
			</tui-list-cell>
			<tui-list-cell @click="detail" :last="true" size="36">
				无线条，无箭头，大字体
			</tui-list-cell>
			<tui-list-cell :last="true" @click="detail" size="36">
				无线条，无箭头，大字体
			</tui-list-cell>
		</tui-list-view>
		<tui-list-view title="菜单列表" class="tui-list-view">
			<tui-list-cell @click="detail" :arrow="true" class="tui-list">
				<tui-icon name="wealth-fill" size="24" color="#ff7900"></tui-icon>
				<text class="tui-list-cell-name">我的钱包</text>
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true" class="tui-list">
				<tui-icon name="service-fill" size="24" color="#5677fc"></tui-icon>
				<view class="tui-list-cell-name">服务窗</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true" class="tui-list">
				<tui-icon name="explore-fill" size="24" color="#19be6b"></tui-icon>
				<view class="tui-list-cell-name">发现</view>
				<tui-tag size="small" type="light-green" shape="circle" class="tui-right">探索发现</tui-tag>
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true" class="tui-list">
				<tui-icon name="shop-fill" size="23" color="#ed3f14"></tui-icon>
				<view class="tui-list-cell-name">我的店铺</view>
				<view class="tui-right">进入店铺</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true" last="true" class="tui-list">
				<image src="../../../static/images/my/thorui.png" class="logo" mode="widthFix"></image>
				<text class="tui-list-cell-name">关于</text>
				<view class="tui-right">Thor UI</view>
			</tui-list-cell>
		</tui-list-view>

		<tui-list-view title="消息列表" class="tui-list-view">
			<tui-list-cell @click="detail" class="tui-msg">
				<view class="tui-msg-box">
					<image src="../../../static/images/news/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
					<view class="tui-msg-item">
						<view class="tui-msg-name">呼噜猪</view>
						<view class="tui-msg-content">上线打游戏了！</view>
					</view>
				</view>
				<view class="tui-msg-right">
					<view class="tui-msg-time">10:22</view>
					<tui-badge type="danger" class="tui-badge">9</tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" class="tui-msg">
				<view class="tui-msg-box">
					<image src="../../../static/images/news/avatar_2.jpg" class="tui-msg-pic" mode="widthFix"></image>
					<view class="tui-msg-item">
						<view class="tui-msg-name">融金宝VIP交流3群</view>
						<view class="tui-msg-content">[分享]我很看好的这款金融产品，推荐给你们</view>
					</view>
				</view>
				<view class="tui-msg-right">
					<view class="tui-msg-time">09:08</view>
					<tui-badge type="gray" class="tui-badge">2</tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" class="tui-msg">
				<view class="tui-msg-box">
					<image src="../../../static/images/news/3.jpg" class="tui-msg-pic" mode="widthFix"></image>
					<view class="tui-msg-item">
						<view class="tui-msg-name">客服助手</view>
						<view class="tui-msg-content">点击查看您与客服的沟通记录</view>
					</view>
				</view>
				<view class="tui-msg-right tui-right-dot">
					<view class="tui-msg-time">08:16</view>
					<tui-badge type="danger" :dot="true"></tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" class="tui-msg">
				<view class="tui-msg-box">
					<image src="../../../static/images/news/4.jpg" class="tui-msg-pic" mode="widthFix"></image>
					<view class="tui-msg-item">
						<view class="tui-msg-name">我的资产</view>
						<view class="tui-msg-content">你昨天获得了7张优惠券，总计3000元</view>
					</view>
				</view>
				<view class="tui-msg-right">
					<view class="tui-msg-time">昨天</view>
					<tui-badge type="danger" class="tui-badge">2</tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" class="tui-msg">
				<view class="tui-msg-box">
					<image src="../../../static/images/news/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
					<view class="tui-msg-item">
						<view class="tui-msg-name">我的电脑</view>
						<view class="tui-msg-content">[图片]</view>
					</view>
				</view>
				<view class="tui-msg-right">
					<view class="tui-msg-time">昨天</view>
					<tui-badge type="danger" class="tui-badge">3</tui-badge>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" last="true" class="tui-msg">
				<view class="tui-msg-box">
					<image src="../../../static/images/news/avatar_2.jpg" class="tui-msg-pic" mode="widthFix"></image>
					<view class="tui-msg-item">
						<view class="tui-msg-name">小短腿</view>
						<view class="tui-msg-content">[表情]</view>
					</view>
				</view>
				<view class="tui-msg-right">
					<view class="tui-msg-time">星期五</view>
					<tui-badge type="danger" class="tui-badge">2</tui-badge>
				</view>
			</tui-list-cell>
		</tui-list-view>
		<!--内容部分-->
	</view>
</template>

<script>
	import tuiListView from "@/components/list-view/list-view"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiBadge from "@/components/badge/badge"
	export default {
		components: {
			tuiListView,
			tuiListCell,
			tuiIcon,
			tuiTag,
			tuiBadge
		},
		data() {
			return {

			}
		},
		methods: {
			detail: function() {
				uni.showToast({
					title: '详情功能尚未完善~',
					icon: "none"
				})
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-list-view {
		padding-top: 40upx !important
	}

	.tui-list-cell-name {
		padding-left: 20upx;
		vertical-align: middle;
		line-height: 30upx;
	}

	.tui-list::after {
		left: 94upx !important
	}

	.tui-right {
		margin-left: auto;
		margin-right: 34upx;
		font-size: 26upx;
		line-height: 1;
		color: #999;
	}

	.logo {
		height: 40upx;
		width: 40upx;
	}

	.tui-flex {
		display: flex;
		align-items: center;
	}

	.tui-msg-box {
		display: flex;
		align-items: center;
	}

	.tui-msg-pic {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		display: block;
		margin-right: 24upx;
	}

	.tui-msg-item {
		max-width: 500upx;
		min-height: 80upx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tui-msg-name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 34upx;
		line-height: 1;
		color: #262b3a;
	}

	.tui-msg-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 26upx;
		line-height: 1;
		color: #9397a4;
	}

	.tui-msg-right {
		max-width: 120upx;
		height: 88upx;
		margin-left: auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.tui-msg-right.tui-right-dot {
		height: 76upx;
		padding-bottom: 10upx;

	}

	.tui-msg-time {
		width: 100%;
		font-size: 24upx;
		line-height: 24upx;
		color: #9397a4;
	}

	.tui-badge {
		width: auto
	}

	.tui-msg::after {
		left: 154upx !important
	}
</style>
