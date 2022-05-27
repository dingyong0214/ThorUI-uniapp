<template>
	<view class="container">

		<view class="tui-padding">
			<view class="tui-title">三角形</view>
			<view class="tui-flex">
				<view class="tui-triangle tui-triangle-left"></view>
				<view class="tui-triangle tui-triangle-right"></view>
				<view class="tui-triangle tui-triangle-top"></view>
				<view class="tui-triangle tui-triangle-bottom"></view>
			</view>
			<view class="tui-title">平行四边形</view>
			<view class="tui-parallelogram"></view>
			<view class="tui-title">月牙</view>
			<view class="tui-crescent"></view>

			<view class="tui-title tui-top40">
				聊天框【tui-popup组件可以当聊天框使用】
			</view>

			<view>
				<view class="tui-chatbox tui-chatbox-left">
					哈喽~，欢迎关注Thor UI！
				</view>
			</view>

			<view class='tui-flex tui-align-right'>
				<view class="tui-chatbox tui-chatbox-right tui-top40">
					哈喽~，欢迎关注Thor UI！ 请说出您想加入或者优化的功能！
				</view>
			</view>

			<view class="tui-title tui-top40">
				checkbox默认和自定义样式
			</view>
			<view class="tui-flex">
				<checkbox></checkbox>
				<!-- #ifdef VUE2 -->
				<checkbox class="tui-checkbox" color="#fff"></checkbox>
				<!-- #endif -->
				<!-- #ifdef VUE3 -->
				<checkbox class="tui-checkbox" color="#F82400"></checkbox>
				<!-- #endif -->
			</view>
			<view class="tui-title tui-top40">问题描述框</view>
			<view class="tui-textarea-box">
				<textarea class="tui-textarea" name="desc" placeholder="我望加入XXXX功能，我希望优化XXXX功能，XX功能在XX情况下会出现bug"
					maxlength="500" placeholder-class="tui-phcolor-color"></textarea>
				<view class="tui-textarea-counter">0/500</view>
			</view>


			<view class="tui-title tui-top40">图片上传（可直接使用组件tui-upload）</view>

			<view class="tui-upload-box">
				<view class="tui-upload-item" v-for="(item,index) in files" :key="index">
					<image :src="item" class='tui-upload-img' @tap="previewImage" mode="aspectFill" :id="item"></image>
					<view class="tui-upload-del">
						<tui-icon color="#ed3f14" :size="18" name="close-fill" :index="index" @click="deleteImage">
						</tui-icon>
					</view>
				</view>
				<view class="tui-upload-item tui-upload-add" v-if="files.length < 9" hover-class="tui-opcity"
					:hover-stay-time="150" @tap="chooseImage">
					<tui-icon name="plus"></tui-icon>
				</view>
			</view>
			<view class="tui-title">操作条</view>

		</view>

		<view class="tui-operation">
			<view class="tui-operation-left tui-col-7">
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="kefu" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">客服</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="shop" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">店铺</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<view class="tui-relative">
						<tui-icon name="cart" :size="22" color='#333'></tui-icon>
						<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="60%" top="-6rpx">18</tui-badge>
					</view>
					<view class="tui-operation-text tui-scale-small">购物车</view>

				</view>
			</view>
			<view class="tui-operation-right tui-col-5">
				<tui-button type="danger" shape="rightAngle" height="100rpx" :size="30">立即购买</tui-button>
			</view>
		</view>

		<view class="tui-operation tui-top40">
			<view class="tui-operation-left tui-col-4">
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="kefu" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">客服</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<view class="tui-relative">
						<tui-icon name="cart" :size="22" color='#333'></tui-icon>
						<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="60%" top="-6rpx">9</tui-badge>
					</view>
					<view class="tui-operation-text tui-scale-small">购物车</view>
				</view>
			</view>
			<view class="tui-center tui-operation-right  tui-col-8">
				<view class="tui-flex-1">
					<tui-button type="danger" shape="rightAngle" height="100rpx" :size="30">加入购物车</tui-button>
				</view>
				<view class="tui-flex-1">
					<tui-button type="warning" shape="rightAngle" height="100rpx" :size="30">立即购买</tui-button>
				</view>
			</view>
		</view>

		<view class="tui-operation tui-top40">
			<view class="tui-operation-left tui-col-5">
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="kefu" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">客服</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="shop" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">店铺</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<view class="tui-relative">
						<tui-icon name="cart" :size="22" color='#333'></tui-icon>
						<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="60%" top="-6rpx">2</tui-badge>
					</view>
					<view class="tui-operation-text tui-scale-small">购物车</view>
				</view>
			</view>
			<view class="tui-center tui-operation-right tui-col-7">
				<view class="tui-flex-1">
					<tui-button type="danger" shape="rightAngle" height="100rpx" :size="30">加入购物车</tui-button>
				</view>
				<view class="tui-flex-1">
					<tui-button type="warning" shape="rightAngle" height="100rpx" :size="30">立即购买</tui-button>
				</view>
			</view>
		</view>

		<view class="tui-operation tui-top40">
			<view class="tui-operation-left tui-col-7">
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="kefu" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">客服</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="shop" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">店铺</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<view class="tui-relative">
						<tui-icon name="cart" :size="22" color='#333'></tui-icon>
						<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="60%" top="-6rpx">99+</tui-badge>
					</view>
					<view class="tui-operation-text tui-scale-small">购物车</view>
				</view>
			</view>
			<view class="tui-operation-right tui-center  tui-col-5">
				<view class="tui-flex-1 tui-center">
					<tui-button type="danger" shape="circle" :size="28" width="80%" height="72rpx">立即购买</tui-button>
				</view>
			</view>
		</view>

		<view class="tui-operation tui-top40">
			<view class="tui-operation-left tui-col-5">
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="kefu" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">客服</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<view class="tui-relative">
						<tui-icon name="cart" :size="22" color='#333'></tui-icon>
						<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="60%" top="-6rpx">9</tui-badge>
					</view>
					<view class="tui-operation-text tui-scale-small">购物车</view>
				</view>
			</view>
			<view class="tui-operation-right tui-center  tui-col-7">
				<view class="tui-flex-1">
					<tui-button type="danger" shape="circle" :size="28" height="72rpx" width="90%">加入购物车</tui-button>
				</view>
				<view class="tui-flex-1">
					<tui-button type="warning" shape="circle" :size="28" height="72rpx" width="90%">立即购买</tui-button>
				</view>
			</view>
		</view>

		<view class="tui-operation tui-top40">
			<view class="tui-operation-left tui-col-5">
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="kefu" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">客服</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="shop" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">店铺</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<view class="tui-relative">
						<tui-icon name="cart" :size="22" color='#333'></tui-icon>
						<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="60%" top="-6rpx">9</tui-badge>
					</view>
					<view class="tui-operation-text tui-scale-small">购物车</view>
				</view>
			</view>
			<view class="tui-operation-right tui-center tui-col-7 ">
				<view class="tui-flex-1">
					<tui-button type="danger" shape="circle" :size="28" height="72rpx" width="90%">加入购物车</tui-button>
				</view>
				<view class="tui-flex-1">
					<tui-button type="warning" shape="circle" :size="28" height="72rpx" width="90%">立即购买</tui-button>
				</view>
			</view>
		</view>


		<view class="tui-operation tui-top40">
			<view class="tui-operation-left tui-col-7 tui-height-full tui-ptop-zero">
				<view class="tui-btn-comment">发表你的ThorUI言论</view>
			</view>
			<view class="tui-center tui-operation-right tui-col-5">
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<view class="tui-relative">
						<tui-icon name="message" :size="30" color='#444'></tui-icon>
						<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="60%" top="-6rpx">18</tui-badge>
					</view>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="star" :size="30" color='#444'></tui-icon>
				</view>
				<view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="share" :size="30" color='#444'></tui-icon>
				</view>
			</view>
		</view>

		<view class="tui-operation tui-chat-operation tui-top40">
			<view class='tui-center tui-input-box'>
				<view class="tui-voice-icon" hover-class="tui-opcity" :hover-stay-time="150">
					<tui-icon name="imvoice" :size="26" color='#333'></tui-icon>
				</view>
				<input class="tui-chat-input" />
			</view>
			<view hover-class="tui-opcity" :hover-stay-time="150">
				<tui-icon name="imface" :size="26" color='#333'></tui-icon>
			</view>
			<view hover-class="tui-opcity" :hover-stay-time="150">
				<tui-icon name="immore" :size="26" color='#333'></tui-icon>
			</view>
		</view>

		<view class="tui-title tui-pl-30">Input输入框</view>


		<tui-list-cell :hover="false">
			<view class="tui-input-item">
				<view class="tui-input-title">姓名</view>
				<input class="tui-input" placeholder="请输入姓名" placeholder-class="tui-phcolor" />
			</view>
		</tui-list-cell>
		<tui-list-cell :hover="false" unlined>
			<view class="tui-input-item">
				<view class="tui-input-title">联系电话</view>
				<input class="tui-input" placeholder="请输入手机号" placeholder-class="tui-phcolor" maxlength="11" />
			</view>
		</tui-list-cell>

		<view class="tui-title tui-pl-30">无标题输入框</view>

		<tui-list-cell :hover="false">
			<input class="tui-input" placeholder="请输入姓名" placeholder-class="tui-phcolor" />
		</tui-list-cell>
		<tui-list-cell :hover="false" unlined>
			<input class="tui-input" placeholder="请输入姓名" placeholder-class="tui-phcolor" />
		</tui-list-cell>

		<view class="tui-title tui-pl-30">圆角输入框</view>
		<tui-list-cell :hover="false" unlined>
			<view class="tui-input-border">
				<input class="tui-input" placeholder="请输入姓名" placeholder-class="tui-phcolor" />
			</view>
		</tui-list-cell>
		<tui-list-cell :hover="false" unlined>
			<view class="tui-input-border tui-flex tui-align-between">
				<view class="tui-input-title">联系电话</view>
				<input class="tui-input" placeholder="请输入手机号" placeholder-class="tui-phcolor" />
			</view>
		</tui-list-cell>
		<tui-list-cell :hover="false" unlined>
			<view class="tui-input-border tui-flex tui-align-between">
				<view class="tui-input-title">消费总额</view>
				<input class="tui-input tui-text-right" placeholder="请输入消费总额" placeholder-class="tui-phcolor" />
			</view>
		</tui-list-cell>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				files: [] //最多上传9张图片
			}
		},
		methods: {
			chooseImage: function(e) {
				let that = this;
				if (that.files.length >= 9) {
					this.tui.toast("最多上传9张图片");
					return
				}
				uni.chooseImage({
					count: 9 - that.files.length,
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
					success: function(res) {
						// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
						that.files = that.files.concat(res.tempFilePaths)
						//上传功能已移除
						//...
					}
				})
			},
			previewImage: function(e) {
				uni.previewImage({
					current: e.currentTarget.id,
					urls: this.files
				})
			},
			deleteImage: function(e) {
				const index = e.index;
				this.files.splice(index, 1);
			}
		}
	}
</script>

<style>
	@import '../../../static/style/thorui.css';

	.container {
		padding: 30rpx 0 80rpx 0;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-padding {
		padding: 0 30rpx;
		box-sizing: border-box;
		overflow: hidden;
	}

	.tui-title {
		padding: 55rpx 0 30rpx 0;
		font-size: 32rpx;
		color: #333;
		font-weight: bold
	}

	.tui-flex {
		align-items: center;
	}

	.tui-triangle {
		margin-right: 30rpx;
	}

	.tui-checkbox {
		margin-left: 60rpx;
	}

	.tui-top40 {
		margin-top: 40rpx;
	}

	.tui-pl-30 {
		padding-left: 30rpx;
	}
</style>
