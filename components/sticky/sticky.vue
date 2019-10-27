<template>
	<view class="tui-sticky-class">
		<!--sticky 容器-->
		<view :style="{height: stickyHeight,background:bgColor}" v-if="isFixed"></view>
		<view :class="{'tui-sticky-fixed':isFixed}" :style="{top:isFixed?stickyTop+'px':'auto'}">
			<slot name="header"></slot>
		</view>
		<!--sticky 容器-->
		<!--内容-->
		<slot name="content"></slot>
	</view>
</template>

<script>
	export default {
		name: "tuiSticky",
		props: {
			scrollTop: {
				type: Number
			},
			//吸顶容器距离顶部距离 px
			stickyTop: {
				type: [Number, String]
					// #ifdef APP-PLUS || MP
					,
				default: 0
					// #endif
					// #ifdef H5
					,
				default: 44
				// #endif
			},
			//吸顶容器 高度 rpx
			stickyHeight: {
				type: String,
				default: "auto"
			},
			//占位容器背景颜色
			bgColor: {
				type: String,
				default: "none"
			},
			//列表中的索引值
			index: {
				type: [Number, String],
				default: 0
			}
		},
		watch: {
			scrollTop(newValue, oldValue) {
				this.updateStickyChange();
			}
		},
		// #ifdef H5
		mounted() {
			this.updateScrollChange();
		},
		// #endif
		onReady() {
			this.updateScrollChange();
		},
		data() {
			return {
				timer: null,
				top: 0,
				height: 0,
				isFixed: false
			};
		},
		methods: {
			updateStickyChange() {
				const top = this.top;
				const height = this.height;
				const scrollTop = this.scrollTop
				let stickyTop = this.stickyTop
				// #ifdef H5
				stickyTop = stickyTop - 44
				stickyTop = stickyTop < 0 ? 0 : stickyTop
				// #endif
				this.isFixed = (scrollTop + stickyTop >= top && scrollTop + stickyTop < top + height) ? true : false
			},
			updateScrollChange() {
				if (this.timer) {
					clearTimeout(this.timer)
					this.timer = null
				}
				this.timer = setTimeout(() => {
					const className = '.tui-sticky-class';
					const query = uni.createSelectorQuery().in(this);
					query.select(className).boundingClientRect((res) => {
						if (res) {
							this.top = res.top + (this.scrollTop || 0);
							this.height = res.height
							this.$emit("change", {
								index: Number(this.index),
								top: this.top
							})
						}
					}).exec()
				}, 0)
			}
		}
	}
</script>

<style>
	.tui-sticky-fixed {
		width: 100%;
		position: fixed;
		z-index: 99999;
	}
</style>
