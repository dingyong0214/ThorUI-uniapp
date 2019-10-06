<template>
	<view class="tui-collapse" :style="{backgroundColor:bgColor}">
		<view class="tui-collapse-head" :style="{backgroundColor:hdBgColor}" @tap.stop="handleClick">
			<view class="tui-header" :class="{'tui-opacity':disabled}">
				<slot name="title"></slot>
				<view class="tui-collapse-icon tui-icon-arrow" :class="{'tui-icon-active':isOpen}" :style="{color:arrowColor}" v-if="arrow"></view>
			</view>
		</view>
		<view class="tui-collapse-body" :style="{backgroundColor:bdBgColor,transform: isOpen ? 'translateY(0)' : `translateY(${translateY})`,height:isOpen?height:'0'}">
			<slot name="content"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tuiCollapse",
		props: {
			//collapse背景颜色
			bgColor: {
				type: String,
				default: 'none'
			},
			//collapse-head 背景颜色
			hdBgColor: {
				type: String,
				default: '#fff'
			},
			//collapse-body 背景颜色
			bdBgColor: {
				type: String,
				default: 'none'
			},
			//collapse-body实际高度 open时使用
			height: {
				type: String,
				default: 'auto'
			},
			//close时translateY ，当bd高度固定时，建议值为0
			translateY: {
				type: String,
				default: '-50%'
			},
			//索引
			index: {
				type: Number,
				default: 0
			},
			//当前索引，index==current时展开
			current: {
				type: Number,
				default: -1
			},
			// 是否禁用
			disabled: {
				type: [Boolean, String],
				default: false
			},
			//是否带箭头
			arrow:{
				type: [Boolean, String],
				default: true
			},
			//箭头颜色
			arrowColor:{
				type: String,
				default: "#333"
			}
		},
		watch: {
			current() {
				this.updateCurrentChange()
			}
		},
		created() {
			this.updateCurrentChange()
		},
		data() {
			return {
				isOpen: false
			};
		},
		methods: {
			updateCurrentChange() {
				this.isOpen = this.index == this.current
			},
			handleClick() {
				if (this.disabled) return;
				this.$emit("click", {
					index: Number(this.index)
				})
			}
		}
	}
</script>

<style>
	@font-face {
	    font-family: 'tuiCollapse';
	    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQ4AA0AAAAABlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEHAAAABoAAAAciRx3B0dERUYAAAP8AAAAHgAAAB4AKQAKT1MvMgAAAaAAAABCAAAAVjxuR/JjbWFwAAAB9AAAAD4AAAFCAA/pq2dhc3AAAAP0AAAACAAAAAj//wADZ2x5ZgAAAkAAAABEAAAARCs1U/toZWFkAAABMAAAADAAAAA2FpaT+mhoZWEAAAFgAAAAHQAAACQHngOFaG10eAAAAeQAAAAPAAAAEAwAAEBsb2NhAAACNAAAAAoAAAAKACIAAG1heHAAAAGAAAAAHwAAACABDwAdbmFtZQAAAoQAAAFJAAACiCnmEVVwb3N0AAAD0AAAACMAAAA1DunpUnjaY2BkYGAAYja/oO54fpuvDNwsDCBwc4/6fzjtwNDNfICpBMjlYGACiQIAGVAKZnjaY2BkYGBu+N/AEMPCAALMBxgYGVABCwBVNgMsAAAAeNpjYGRgYGBhEGQA0QwMTEDMBYQMDP/BfAYACnYBLQB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PGJ4xMDf8b2CIYW5gaAAKM4LkANq9C9sAAHjaY2GAABYIdgAAAMAATQB42mNgYGBmgGAZBkYGELAB8hjBfBYGBSDNAoRA/jOG//8hpBQzVCUDIxsDjMnAyAQkmBhQASPDsAcAMCAGoQAAAAAAAAAAAAAAIgAAAAEAQACLA8ACdAAQAAAlASYiBhQXARYyNwE2NCYiBwIA/oYNIBkMAZcNIA0BlwwZIA3uAXoMGSAN/mkMDAGXDSAZDAB42n2QPU4DMRCFn/MHJBJCIKhdUQDa/JQpEyn0CKWjSDbekGjXXnmdSDkBLRUHoOUYHIAbINFyCl6WSZMia+3o85uZ57EBnOMbCv/fJe6EFY7xKFzBETLhKvUX4Rr5XbiOFj6FG9R/hJu4VQPhFi7UGx1U7YS7m9JtywpnGAhXcIon4Sr1lXCN/CpcxxU+hBvUv4SbGONXuIVrZakM4WEwQWCcQWOKDeMCMRwskjIG1qE59GYSzExPN3oRO5s4GyjvV2KXAx5oOeeAKe09t2a+Sif+YMuB1JhuHgVLtimNLiJ0KBtfLJzV3ahzsP2e7ba02L9rgTXH7FENbNT8Pdsz0khsDK+QkjXyMrekElOPaGus8btnKdbzXgiJTrzL9IjHmjR1OvduaeLA4ufyjBx9tLmSPfeoHD5jWQh5v91OxCCKXYY/k9hxGQAAAHjaY2BigAAuMMnIgA5YwKJMjExciUVF+eW6KfnleQAZ0wQyAAAAAAH//wACAAEAAAAMAAAAFgAAAAIAAQADAAMAAQAEAAAAAgAAAAB42mNgYGBkAIKrS9Q5QPTNPer/YTQAQ+0HIAAA) format('woff');
	    font-weight: normal;
	    font-style: normal;
	}

	.tui-collapse-icon {
		font-family: "tuiCollapse" !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.tui-icon-arrow:before {
		content: "\e600";
	}

	.tui-icon-arrow {
		font-size: 32rpx;
		transform: rotate(0);
		transform-origin: center center;
		transition: all 0.3s;
		position: absolute;
		top: 50%;
		margin-top: -8px;
		right: 30rpx;
	}
	.tui-arrow-padding{
		padding-right: 62rpx;
		box-sizing: border-box;
	}
	.tui-icon-active {
		transform: rotate(180deg);
		transform-origin: center center;
	}

	.tui-header {
		position: relative;
	}
	
	.tui-collapse-body {
		overflow: hidden;
		transition: all 0.3s;
	}
	.tui-opacity{
		opacity: 0.6;
	}
</style>
