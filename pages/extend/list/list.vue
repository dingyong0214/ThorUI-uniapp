<template>
	<view class="container">
		<!--内容部分-->
		<tui-list-view title="不带箭头，无点击效果" color="#777">
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

		<tui-list-view title="带箭头，有点击效果">
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

		<tui-list-view title="无上下线条" unlined="all">
			<tui-list-cell @click="detail" :arrow="true">
				无上下线条,可单独设置，改变颜色
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true" color="#19be6b">
				无上下线条,可单独设置，改变颜色
			</tui-list-cell>
			<tui-list-cell unlined @click="detail" :arrow="true">
				无上下线条,可单独设置，改变颜色
			</tui-list-cell>
		</tui-list-view>

		<tui-list-view title="无线条" unlined="all">
			<tui-list-cell @click="detail" unlined :size="36">
				无线条，无箭头，大字体
			</tui-list-cell>
			<tui-list-cell @click="detail" unlined :size="36">
				无线条，无箭头，大字体
			</tui-list-cell>
			<tui-list-cell @click="detail" unlined :size="36">
				无线条，无箭头，大字体
			</tui-list-cell>
			<tui-list-cell unlined @click="detail" :size="36">
				无线条，无箭头，大字体
			</tui-list-cell>
		</tui-list-view>
		<tui-list-view title="菜单列表">
			<tui-list-cell @click="detail" :arrow="true">
				<view class="tui-item-box">
					<tui-icon name="wealth-fill" :size="24" color="#ff7900"></tui-icon>
					<text class="tui-list-cell_name">我的钱包</text>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true">
				<view class="tui-item-box">
					<tui-icon name="service-fill" :size="24" color="#5677fc"></tui-icon>
					<view class="tui-list-cell_name">服务窗</view>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true">
				<view class="tui-item-box">
					<tui-icon name="explore-fill" :size="24" color="#19be6b"></tui-icon>
					<view class="tui-list-cell_name">发现</view>
					<view class="tui-ml-auto">
						<tui-tag padding="10rpx 12rpx" margin="0 30rpx 0 0" size="24rpx" type="light-green" shape="circle">探索发现</tui-tag>
					</view>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true">
				<view class="tui-item-box">
					<tui-icon name="shop-fill" :size="23" color="#ed3f14"></tui-icon>
					<view class="tui-list-cell_name">我的店铺</view>
					<view class="tui-right">进入店铺</view>
				</view>
			</tui-list-cell>
			<tui-list-cell @click="detail" :arrow="true" last="true">
				<view class="tui-item-box">
					<image src="/static/images/my/thorui.png" class="tui-logo" mode="widthFix"></image>
					<text class="tui-list-cell_name">关于</text>
					<view class="tui-right">Thor UI</view>
				</view>
			</tui-list-cell>
		</tui-list-view>

		<tui-list-view title="消息列表">
			
			<tui-list-cell lineLeft="0" @click="detail">
				<view class="tui-item-box">
					<view class="tui-msg-box">
						<image src="/static/images/news/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">呼噜猪</view>
							<view class="tui-msg-content">上线打游戏了！</view>
						</view>
					</view>
					<view class="tui-msg-right">
						<view class="tui-msg-time">10:22</view>
						<tui-badge type="danger" class="tui-badge">9</tui-badge>
					</view>
				</view>
			</tui-list-cell>
			<tui-list-cell lineLeft="0" @click="detail">
				<view class="tui-item-box">
					<view class="tui-msg-box">
						<image src="/static/images/news/avatar_2.jpg" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">腾讯金融VIP交流3群</view>
							<view class="tui-msg-content">[分享]我很看好的这款金融产品，推荐给你们</view>
						</view>
					</view>
					<view class="tui-msg-right">
						<view class="tui-msg-time">09:08</view>
						<tui-badge type="gray" class="tui-badge">2</tui-badge>
					</view>
				</view>
			</tui-list-cell>
			<tui-list-cell lineLeft="0" @click="detail">
				<view class="tui-item-box">
					<view class="tui-msg-box">
						<image src="/static/images/news/3.jpg" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">客服助手</view>
							<view class="tui-msg-content">点击查看您与客服的沟通记录</view>
						</view>
					</view>
					<view class="tui-msg-right tui-right-dot">
						<view class="tui-msg-time">08:16</view>
						<tui-badge type="danger" :dot="true"></tui-badge>
					</view>
				</view>
			</tui-list-cell>
			<tui-list-cell lineLeft="0" @click="detail">
				<view class="tui-item-box">
					<view class="tui-msg-box">
						<image src="/static/images/news/4.jpg" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">我的资产</view>
							<view class="tui-msg-content">你昨天获得了7张优惠券，总计3000元</view>
						</view>
					</view>
					<view class="tui-msg-right">
						<view class="tui-msg-time">昨天</view>
						<tui-badge type="danger" class="tui-badge">2</tui-badge>
					</view>
				</view>
			</tui-list-cell>
			<tui-list-cell lineLeft="0" @click="detail">
				<view class="tui-item-box">
					<view class="tui-msg-box">
						<image src="/static/images/news/avatar_1.jpg" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">我的电脑</view>
							<view class="tui-msg-content">[图片]</view>
						</view>
					</view>
					<view class="tui-msg-right">
						<view class="tui-msg-time">昨天</view>
						<tui-badge type="danger" class="tui-badge">3</tui-badge>
					</view>
				</view>
			</tui-list-cell>
			<tui-list-cell lineLeft="0" @click="detail" unlined>
				<view class="tui-item-box">
					<view class="tui-msg-box">
						<image src="/static/images/news/avatar_2.jpg" class="tui-msg-pic" mode="widthFix"></image>
						<view class="tui-msg-item">
							<view class="tui-msg-name">小短腿</view>
							<view class="tui-msg-content">[表情]</view>
						</view>
					</view>
					<view class="tui-msg-right">
						<view class="tui-msg-time">星期五</view>
						<tui-badge type="danger" class="tui-badge">2</tui-badge>
					</view>
				</view>
			</tui-list-cell>
		</tui-list-view>
		<!--内容部分-->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			detail: function() {
				this.tui.toast("click~")
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-item-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.tui-list-cell_name {
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-ml-auto {
		margin-left: auto;
	}

	.tui-right {
		margin-left: auto;
		margin-right: 34rpx;
		font-size: 26rpx;
		color: #999;
	}

	.tui-logo {
		height: 52rpx;
		width: 52rpx;
		flex-shrink: 0;
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
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		display: block;
		margin-right: 24rpx;
		flex-shrink: 0;
	}

	.tui-msg-item {
		max-width: 500rpx;
		min-height: 80rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tui-msg-name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 34rpx;
		line-height: 1;
		color: #262b3a;
	}

	.tui-msg-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 26rpx;
		line-height: 1;
		color: #9397a4;
	}

	.tui-msg-right {
		max-width: 120rpx;
		height: 88rpx;
		margin-left: auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.tui-right-dot {
		height: 76rpx !important;
		padding-bottom: 10rpx !important;

	}

	.tui-msg-time {
		width: 100%;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #9397a4;
	}
</style>
