<template>
	<view class="tui-loadmore">
		<view :class="['tui-loading-'+index, (index==3 && type)?'tui-loading-'+type:'']"></view>
		<view class="tui-loadmore-tips">{{text}}</view>
	</view>
</template>

<script>
	export default {
		name: "tuiLoadmore",
		props: {
			//显示文本
			text: {
				type: String,
				default: "正在加载..."
			},
			//loading 样式 ：1,2,3
			index: {
				type: Number,
				default: 1
			},
			//颜色设置，只有index=3时生效：primary，red，orange，green
			type: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style scoped>
	.tui-loadmore {
		width: 48%;
		margin: 1.5em auto;
		line-height: 1.5em;
		font-size: 24rpx;
		text-align: center;
	}

	.tui-loading-1 {
		margin: 0 5px;
		width: 20px;
		height: 20px;
		display: inline-block;
		vertical-align: middle;
		-webkit-animation: a 1s steps(12) infinite;
		animation: a 1s steps(12) infinite;
		background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
		background-size: 100%;
	}

	@-webkit-keyframes a {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		to {
			-webkit-transform: rotate(1turn);
			transform: rotate(1turn);
		}
	}

	@keyframes a {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		to {
			-webkit-transform: rotate(1turn);
			transform: rotate(1turn);
		}
	}

	.tui-loadmore-tips {
		display: inline-block;
		vertical-align: middle;
	}

	.tui-loading-2 {
		width: 28rpx;
		height: 28rpx;
		border: 1px solid #8f8d8e;
		border-radius: 50%;
		margin: 0 6px;
		display: inline-block;
		vertical-align: middle;
		clip-path: polygon(0% 0%,100% 0%,100% 30%,0% 30%);
		animation: rotate 1s linear infinite;
	}

	@-webkit-keyframes rotate {
		from {
			transform: rotatez(0deg);
		}

		to {
			transform: rotatez(360deg);
		}
	}

	@keyframes rotate {
		from {
			transform: rotatez(0deg);
		}

		to {
			transform: rotatez(360deg);
		}
	}

	.tui-loading-3 {
		display: inline-block;
		margin: 0 6px;
		vertical-align: middle;
		width: 28rpx;
		height: 28rpx;
		background: 0 0;
		border-radius: 50%;
		border: 2px solid;
		border-color: #e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;
		animation: tui-rotate 0.7s linear infinite;
	}

	.tui-loading-3.tui-loading-primary {
		border-color: #e5e5e5 #e5e5e5 #e5e5e5 #5677fc;
	}

	.tui-loading-3.tui-loading-green {
		border-color: #e5e5e5 #e5e5e5 #e5e5e5 #19be6b;
	}

	.tui-loading-3.tui-loading-orange {
		border-color: #e5e5e5 #e5e5e5 #e5e5e5 #ff7900;
	}

	.tui-loading-3.tui-loading-red {
		border-color: #ededed #ededed #ededed #ed3f14;
	}

	@-webkit-keyframes tui-rotate {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes tui-rotate {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
