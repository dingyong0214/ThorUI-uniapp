<template>
	<view  @touchmove.stop.prevent>
		<view v-if="mask" class="tui-drawer-mask" :class="{'tui-drawer-mask_show':visible}" @tap="handleMaskClick"></view>
		<view class="tui-drawer-container" :class="[mode=='left'?'tui-drawer-container_left':'tui-drawer-container_right',visible?'tui-drawer-container_show':'']">
			<slot></slot>
		</view>
	</view>

</template>

<script>
	/**
	 * 超过一屏时插槽使用scroll-view
	 **/
	export default {
		name:"tuiDrawer",
		props: {
			visible: {
				type: Boolean,
				default: false
			},
			mask: {
				type: Boolean,
				default: true
			},
			maskClosable: {
				type: Boolean,
				default: true
			},
			mode: {
				type: String,
				default: 'left' // left right
			}
		},
		methods: {
			handleMaskClick() {
				if (!this.maskClosable) {
					return;
				}
				this.$emit('close', {});
			}
		}
	}
</script>

<style scoped>
	.tui-drawer-mask {
		opacity: 0;
		visibility: hidden;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 8888;
		background-color: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out;
	}
	.tui-drawer-mask_show {
		display: block;
		visibility: visible;
		opacity: 1;
	}

	.tui-drawer-container {
		position: fixed;
		left: 50%;
		height: 100.2%;
		top: 0;
		transform: translate3d(-50%, -50%, 0);
		transform-origin: center;
		transition: all 0.3s ease-in-out;
		z-index: 99999;
		opacity: 0;
		overflow-y: scroll;
		background-color: #fff;
		-webkit-overflow-scrolling: touch;
		-ms-touch-action: pan-y cross-slide-y;
		-ms-scroll-chaining: none;
		-ms-scroll-limit: 0 50 0 50;
	}
	.tui-drawer-container_left {
		left: 0;
		top: 50%;
		transform: translate3d(-100%, -50%, 0);
	}

	.tui-drawer-container_right {
		right: 0;
		top: 50%;
		left: auto;
		transform: translate3d(100%, -50%, 0);
	}
	.tui-drawer-container_show {
		opacity: 1;
		transform: translate3d(0, -50%, 0);
	}
</style>
