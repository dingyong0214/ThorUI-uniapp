<template>
	<view class="tui-footer-class tui-footer" :class="[fixed?'tui-fixed':'']" :style='{background:bgcolor}'>
		<view class="tui-footer-link" v-if="navigate.length>0">
			<block v-for="(item,index) in navigate" :key="index">
				<navigator class="tui-link" hover-class="tui-link-hover" :hover-stop-propagation="true" :style="{color:(item.color || '#596d96'),fontSize:px(item.size || 28)}"
				 :open-type="item.type" :url="item.url" :target="item.target" :delta="item.delta" :app-id="item.appid"
				 :path="item.path" :extra-data="item.extradata" :bindsuccess="item.bindsuccess" :bindfail="item.bindfail">{{item.text}}</navigator>
			</block>
		</view>
		<view class="tui-footer-copyright" :style="{color:color,fontSize:px(size)}">
			{{copyright}}
		</view>
	</view>
</template>

<script>
	export default {
		name: "tuiFooter",
		props: {
			//type target url delta appid path extradata bindsuccess bindfail text color size
			//链接设置  数据格式对应上面注释的属性值
			navigate: {
				type: Array,
				default:function(){
					return  []
				}
			},
			//底部文本
			copyright: {
				type: String,
				default: "All Rights Reserved."
			},
			//copyright 字体颜色
			color: {
				type: String,
				default: "#A7A7A7"
			},
			//copyright 字体大小
			size: {
				type: Number,
				default: 24
			},
			//footer背景颜色
			bgcolor: {
				type: String,
				default: "none"
			},
			//是否固定在底部
			fixed: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			px(num) {
				return uni.upx2px(num) + 'px'
			}
		}
	}
</script>

<style>
	.tui-footer {
		width: 100%;
		overflow: hidden;
		padding: 30upx 24upx;
		box-sizing: border-box;
	}

	.tui-fixed {
		position: fixed;
		z-index: 9999;
		bottom: 0;
		bottom: env(safe-area-inset-bottom);
	}

	.tui-footer-link {
		color: #596d96;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
	}

	.tui-link {
		position: relative;
		padding: 0 18upx;
		line-height: 1;
	}

	.tui-link::before {
		content: " ";
		position: absolute;
		right: 0;
		top: 0;
		width: 1px;
		bottom: 0;
		border-right: 1px solid #d3d3d3;
		-webkit-transform-origin: 100% 0;
		transform-origin: 100% 0;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
	}

	.tui-link:last-child::before {
		border-right: 0 !important
	}

	.tui-link-hover {
		opacity: 0.5
	}

	.tui-footer-copyright {
		font-size: 24upx;
		color: #A7A7A7;
		line-height: 1;
		text-align: center;
		padding-top: 16upx
	}
</style>
