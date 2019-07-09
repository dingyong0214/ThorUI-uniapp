<template>
	<view class="container">
		<view class="tui-padding">
			<view class="tui-title">
				三角形
			</view>
			<view class="tui-flex">
				<view class="tui-triangle tui-triangle-left"></view>
				<view class="tui-triangle tui-triangle-right"></view>
				<view class="tui-triangle tui-triangle-top"></view>
				<view class="tui-triangle tui-triangle-bottom"></view>
			</view>
			<!-- <view class="tui-title">
    平行四边形
  </view>
  <view class="tui-parallelogram"></view>
  <view class="tui-title">
    月牙
  </view>
  <view class="tui-crescent"></view> -->

			<!-- <view class="tui-star"></view> -->
			<view class="tui-title tui-top40">
				聊天框
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
				<checkbox class="tui-checkbox"></checkbox>
			</view>


			<view class="tui-title tui-top40">问题描述框</view>
			<view class="tui-cells">
				<textarea class="tui-textarea" name="desc" placeholder="我望加入XXXX功能，我希望优化XXXX功能，XX功能在XX情况下会出现bug" maxlength="500"
				 placeholder-class="tui-phcolor-color" />
				<view class="tui-textarea-counter">0/500</view>
    </view>

    <view class="tui-title tui-top40">图片上传（请点击加号上传）</view>

    <view class="tui-upload-box">
      <view class="tui-upload-item" v-for="(item,index) in files" :key="index">
        <image :src="item" class='tui-upload-img' @tap="previewImage" mode="aspectFill" :id="item"></image>
        <tui-icon color="#ed3f14" size="24" name="close-fill" class="tui-upload-del" :index="index" @click="deleteImage"></tui-icon>
      </view>
      <view class="tui-upload-item tui-upload-add" v-if="files.length < 9" hover-class="tui-opcity" :hover-stay-time="150" @tap="chooseImage">
        <text>+</text>
      </view>
    </view>

    <view class="tui-title">操作条</view>

  </view>

  <view class="tui-operation">
    <view class="tui-operation-left tui-col-7">
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="kefu" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">客服</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="shop" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">店铺</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="cart" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">购物车</view>
        <tui-badge type="danger" size="small">18</tui-badge>
      </view>
    </view>
    <view class="tui-operation-right tui-col-5 tui-btnbox-1">
      <tui-button type="danger" shape="rightAngle">立即购买</tui-button>
    </view>
  </view>

  <view class="tui-operation tui-top40">
    <view class="tui-operation-left tui-col-4">
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="kefu" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">客服</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="cart" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">购物车</view>
        <tui-badge type="danger" size="small">9</tui-badge>
      </view>
    </view>
    <view class="tui-operation-right tui-col-8 tui-btnbox-2">
      <tui-button type="danger" shape="rightAngle">加入购物车</tui-button>
      <tui-button type="warning" shape="rightAngle">立即购买</tui-button>
    </view>
  </view>

  <view class="tui-operation tui-top40">
    <view class="tui-operation-left tui-col-5">
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="kefu" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">客服</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="shop" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">店铺</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="cart" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">购物车</view>
        <tui-badge type="danger" size="small">9</tui-badge>
      </view>
    </view>
    <view class="tui-operation-right tui-col-7 tui-btnbox-2">
      <tui-button type="danger" shape="rightAngle">加入购物车</tui-button>
      <tui-button type="warning" shape="rightAngle">立即购买</tui-button>
    </view>
  </view>

  <view class="tui-operation tui-top40">
    <view class="tui-operation-left tui-col-7">
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="kefu" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">客服</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="shop" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">店铺</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="cart" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">购物车</view>
        <tui-badge type="danger" size="small">18</tui-badge>
      </view>
    </view>
    <view class="tui-operation-right tui-right-flex tui-col-5 tui-btnbox-3">
      <tui-button type="danger"  shape="circle" size="mini">立即购买</tui-button>
    </view>
  </view>

  <view class="tui-operation tui-top40">
    <view class="tui-operation-left tui-col-5">
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="kefu" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">客服</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="cart" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">购物车</view>
        <tui-badge type="danger" size="small">9</tui-badge>
      </view>
    </view>
    <view class="tui-operation-right tui-right-flex tui-col-7 tui-btnbox-4">
      <view class="tui-flex-1">
				<tui-button type="danger"  shape="circle" size="mini">加入购物车</tui-button>
			</view>
			<view class="tui-flex-1">
       <tui-button type="warning" shape="circle" size="mini">立即购买</tui-button>
			</view>
    </view>
  </view>

  <view class="tui-operation tui-top40">
    <view class="tui-operation-left tui-col-5">
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="kefu" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">客服</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="shop" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">店铺</view>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="cart" size="22" color='#333'></tui-icon>
        <view class="tui-operation-text tui-scale-small">购物车</view>
        <tui-badge type="danger" size="small">9</tui-badge>
      </view>
    </view>
    <view class="tui-operation-right tui-right-flex tui-col-7 tui-btnbox-4">
      <view class="tui-flex-1">
				<tui-button type="danger" shape="circle" size="mini" >加入购物车</tui-button>
			</view>
      <view class="tui-flex-1">
				<tui-button type="warning" shape="circle" size="mini">立即购买</tui-button>
			</view>
    </view>
  </view>


  <view class="tui-operation tui-top40">
    <view class="tui-operation-left tui-col-7 tui-height-full tui-ptop-zero">
      <view class="tui-btn-comment">发表你的ThorUI言论</view>
    </view>
    <view class="tui-operation-right tui-right-flex tui-col-5">
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="message" size="30" color='#444'></tui-icon>
        <tui-badge type="danger" size="small">18</tui-badge>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="star" size="30" color='#444'></tui-icon>
      </view>
      <view class="tui-operation-item" hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="share" size="30" color='#444'></tui-icon>
      </view>
    </view>
  </view>

  <view class="tui-operation tui-chat-operation tui-top40">
    <view class='tui-right-flex tui-input-box'>
      <view hover-class="tui-opcity" :hover-stay-time="150">
        <tui-icon name="voice" size="34" color='#333' class="tui-voice-icon"></tui-icon>
      </view>
      <input class="tui-chat-input"></input>
    </view>
    <view hover-class="tui-opcity" :hover-stay-time="150">
      <tui-icon name="imface" size="26" color='#333'></tui-icon>
    </view>
    <view hover-class="tui-opcity" :hover-stay-time="150">
      <tui-icon name="add" size="30" color='#333'></tui-icon>
    </view>
  </view>

</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiButton from "@/components/button/button"
	import tuiBadge from "@/components/badge/badge"
	export default {
		components: {
			tuiIcon,
			tuiButton,
			tuiBadge
		},
		data() {
			return {
				 files: [] //最多上传9张图片
			}
		},
		methods: {
			 chooseImage: function (e) {
					let that = this;
					if (that.files.length >= 9) {
						this.tui.toast("最多上传9张图片");
						return
					}
					wx.chooseImage({
						count: 9 - that.files.length,
						sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
						success: function (res) {
							// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
							that.files=that.files.concat(res.tempFilePaths)
							//上传功能已去除
							//...
						}
					})
				},
				previewImage: function (e) {
					uni.previewImage({
						current: e.currentTarget.id, // 当前显示图片的http链接
						urls: this.files // 需要预览的图片http链接列表
					})
				},
				deleteImage: function (e) {
					const index = e.index;
					this.files.splice(index, 1);
				}
		}
	}
</script>

<style>
@import '../../../static/style/thorui.css';

.container {
  padding: 30upx 0 80upx 0;
  box-sizing: border-box;
  overflow: hidden;
}

.tui-padding {
  padding: 0 30upx;
  box-sizing: border-box;
  overflow: hidden;
}

.tui-title {
  padding: 55upx 0 30upx 0;
  font-size: 32upx;
  color: #333;
  font-weight: bold
}

.tui-flex {
  align-items: center;
}

.tui-triangle {
  margin-right: 30upx;
}
.tui-checkbox{
  margin-left: 60upx;
}
.tui-top40 {
  margin-top: 40upx;
}

</style>
