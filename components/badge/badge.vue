<template>
	<view class="tui-badge-class" :class="[dot?'tui-badge-dot':'tui-badge','tui-'+type, size?'tui-badge-small':'']" v-if="visible">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "tuiBadge",
		props: {
			//primary,warning,green,danger,white，black，gray
			type: {
				type: String,
				default: 'primary'
			},
			// '', small
			size: {
				type: String,
				default: ''
			},
			//是否是圆点
			dot: {
				type: Boolean,
				default: false
			},
			//是否可见
			visible: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style>
	/* color start*/

	.tui-primary {
		background: #5677fc;
		color: #fff;
	}

	.tui-danger {
		background: #ed3f14;
		color: #fff;
	}

	.tui-red {
		background: #ff201f;
		color: #fff;
	}

	.tui-warning {
		background: #ff7900;
		color: #fff;
	}

	.tui-green {
		background: #19be6b;
		color: #fff;
	}

	.tui-white {
		background: #fff;
		color: #333;
	}

	.tui-black {
		background: #000;
		color: #fff;
	}

	.tui-gray {
		background: #ededed !important;
		color: #999 !important;
	}

	/* color end*/

	/* badge start*/

	.tui-badge-dot {
		height: 8px;
		width: 8px;
		border-radius: 4px;
		line-height: 1;
	}

	.tui-badge {
		font-size: 12px;
		line-height: 1;
		padding: 3px 6px;
		border-radius: 50px;
	}

	.tui-badge-small {
		transform: scale(0.8);
		transform-origin: center center;
	}

	/* badge end*/
</style>
