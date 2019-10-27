<template>
	<view class="tui-drawer-class tui-drawer" :class="[visible ? 'tui-drawer-show' : '','tui-drawer-' + mode]">
		<view v-if="mask" class="tui-drawer-mask" @tap="handleMaskClick" @touchmove.stop.prevent></view>
		<view class="tui-drawer-container" @touchmove.stop.prevent>
			<slot></slot>
		</view>
	</view>

</template>

<script>
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

<style>
	.tui-drawer {
		visibility: hidden;
	}

	.tui-drawer-show {
		visibility: visible;
	}

	.tui-drawer-show .tui-drawer-mask {
		display: block;
		opacity: 1;
	}

	.tui-drawer-show .tui-drawer-container {
		opacity: 1;
	}

	.tui-drawer-show.tui-drawer-left .tui-drawer-container,
	.tui-drawer-show.tui-drawer-right .tui-drawer-container {
		transform: translate3d(0, -50%, 0);
	}

	.tui-drawer-mask {
		opacity: 0;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 8888;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.3s ease-in-out;
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
		background: #fff;
		-webkit-overflow-scrolling: touch;
		-ms-touch-action: pan-y cross-slide-y;
		-ms-scroll-chaining: none;
		-ms-scroll-limit: 0 50 0 50;
	}

	.tui-drawer-left .tui-drawer-container {
		left: 0;
		top: 50%;
		transform: translate3d(-100%, -50%, 0);
	}

	.tui-drawer-right .tui-drawer-container {
		right: 0;
		top: 50%;
		left: auto;
		transform: translate3d(100%, -50%, 0);
	}
</style>
