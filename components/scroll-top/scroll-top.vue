<template>
	<view class="tui-scroll-top" :style="{bottom:bottom+'rpx',right:right+'rpx'}" v-show="visible && toggle" @tap.stop="goTop">
		<image class="tui-scroll-top-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACKklEQVRoQ+3b61HDMAwAYGkC1AlgBEaADcoEtBNQNoAJKBNQJqAbsAIjlAkiJhBnruG4XBO/1TNVfjZx4k+yXJ+bIpzYgSfmBQP/94xbhocZJqJLADhrJPNfzPwx1dfJDBPRHBHfGsH+dFNEbph5O9ZnH3iDiLeNgV+ZeZEKPq0Muyjta3jeSJa3WTXcCDKqm/a1FBWuBi9WzzAR3QFAPye4mnvWjJsamIgIAN4R0S1kfg8RcQuFa2ZmDbgKeAzbAzXR1cE+rDa6KjgUq4muBo7FaqGrgCcmqCUivgwmrUOfVZvIioOnsMy8mc1m8hfcdR0S0eJAIKqgi4J9WAc9BN6v2VXQxcAh2CmwFroIOBTrA2ugs8Ex2BBwbXQWOBYbCq6JTganYGPAtdBJ4FRsLLgGOhqcg00Bl0ZHgXOxqeCS6GBwCWwOuBQ6CFwKmwsugQ4FrxDxabjod2vj2F2KsaVlzH1G1t73zLz23ScJLCLLFGyJDPegIVpEioLdfpSL3gUAbFKxJcH98AYA97PKDgBWIftiQRn2DZOY8yWGdMzzhtcaOCd6IW0tw12nOspUH1Z60goZUVbDKVHKaWM1bDWcM378bW3S8sco7wqrYavhvBHka2017ItQ7nmrYavh3DE03V69holoh4jnrlsi8snMbhdF7TgGeI2I7l0tB35k5gc1LcBx/vNARFcA4LagJl/mrhEI9QzXQMTc08Ax0WrxWstwi1mL6fM3Q1/xTKsOmbgAAAAASUVORK5CYII="></image>
	</view>
</template>

<script>
	export default {
		name: "tuiScrollTop",
		props: {
			//回顶部按钮距离底部距离 rpx
			bottom: {
				type: Number,
				default: 120
			},
			//回顶部按钮距离右侧距离 rpx
			right: {
				type: Number,
				default: 24
			},
			//距离顶部多少距离显示 px
			top: {
				type: Number,
				default: 100
			},
			//滚动时间
			duration:{
				type: Number,
				default: 120
			},
			//滚动距离
			scrollTop: {
				type: Number
			}
		},
		watch: {
			scrollTop(newValue, oldValue) {
				this.change();
			}
		},
		data() {
			return {
				//判断是否显示
				visible: false,
				//控制显示，主要解决调用api滚到顶部fixed元素抖动的问题
				toggle: true
			};
		},
		methods: {
			goTop: function() {
				this.toggle = false;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: this.duration
				})
				setTimeout(() => {
					this.toggle = true
				}, 220)
			},
			change() {
				let show = this.scrollTop > this.top;
				if ((show && this.visible) || (!show && !this.visible)) {
					return
				}
				this.visible = show
			}
		}
	}
</script>

<style>
	.tui-scroll-top {
		width: 76rpx;
		height: 76rpx;
		background: rgba(255, 255, 255, .98);
		border: 1rpx solid #BCBCBC;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		position: fixed;
		z-index: 999999;
		/* -webkit-transform: translateZ(0);
		transform: translateZ(0); */
		/* -webkit-overflow-scroll: touch; */
	}

	.tui-scroll-top-img {
		width: 48rpx;
		height: 48rpx;
		display: block;
	}
</style>
