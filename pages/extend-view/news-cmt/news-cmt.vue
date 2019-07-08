<template>
	<view class="container">
		<view class="tui-cells">
			<textarea class="tui-textarea" name="desc" placeholder="发表你的评论..." maxlength="500" placeholder-class="tui-phcolor-color"
			 auto-focus />
			<view class="tui-textarea-counter">0/500</view>
  </view>
  <view class="tui-enclosure">
    <tui-icon name="satisfied" size="25" class="tui-mr"></tui-icon>
    <tui-icon name="picture" size="25" class="tui-mr"></tui-icon>
    <tui-icon name="link" size="22" class="tui-mr"></tui-icon>
  </view>
  <view class="tui-cmt-btn">
    <tui-button>发表</tui-button>
  </view>
</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiButton from "@/components/button/button"
	export default {
		components: {
			tuiIcon,
			tuiButton
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
page {
  background: #fff;
  color: #333;
}
.container{
  padding: 30upx;
  box-sizing: border-box;
}

.tui-cells {
  border-radius: 4upx;
  height: 280upx;
  box-sizing: border-box;
  padding: 20upx 20upx 0 20upx;
  position: relative;
}

.tui-cells::after {
  content: '';
  position: absolute;
  height: 200%;
  width: 200%;
  border: 1px solid #e6e6e6;
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  left: 0;
  top: 0;
  border-radius: 8upx;
}

.tui-textarea {
  height: 210upx;
  width: 100%;
  color: #666;
  font-size: 28upx;
}

.tui-phcolor-color {
  color: #ccc !important;
}

.tui-textarea-counter {
  font-size: 24upx;
  color: #999;
  text-align: right;
  height: 40upx;
  line-height: 40upx;
  padding-top: 4upx;
}
.tui-enclosure{
 display: flex;
 align-items: center;
 padding: 26upx 10upx;
 box-sizing: border-box;
}
.tui-mr{
  margin-right: 60upx;
}
.tui-cmt-btn{
  margin-top: 60upx;
}
</style>
