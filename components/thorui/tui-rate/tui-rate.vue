<template>
	<view class="tui-rate-box" @touchmove="touchMove">
		<block v-for="(item, index) in numbers" :key="index">
			<view class="tui-icon"
				:class="['tui-relative','tui-icon-collection' + (hollow && (current <= index || (disabled && current <= index + 1)) ? '' : '-fill')]"
				:data-index="index" @tap="handleTap"
				:style="{ fontSize: size + 'px', color: current > index + 1 || (!disabled && current > index) ? getActiveColor : normal }">
				<view class="tui-icon" :class="['tui-icon-main','tui-icon-collection-fill']"
					v-if="disabled && current == index + 1"
					:style="{ fontSize: size + 'px', color: getActiveColor, width: percent + '%' }"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: 'tuiRate',
		emits: ['change'],
		props: {
			//数量
			quantity: {
				type: [Number, String],
				default: 5
			},
			//当前选中
			current: {
				type: Number,
				default: 0
			},
			//当前选中星星分数(大于0，小于等于1的数)
			score: {
				type: [Number, String],
				default: 1
			},
			//禁用点击
			disabled: {
				type: Boolean,
				default: false
			},
			//大小
			size: {
				type: Number,
				default: 20
			},
			//未选中颜色
			normal: {
				type: String,
				default: '#b2b2b2'
			},
			//选中颜色
			active: {
				type: String,
				default: ''
			},
			//未选中是否为空心
			hollow: {
				type: Boolean,
				default: false
			},
			//自定义参数
			params: {
				type: [Number, String],
				default: 0
			}
		},
		computed: {
			getActiveColor() {
				return this.active || (uni && uni.$tui && uni.$tui.color.danger) || '#EB0909';
			}
		},
		data() {
			return {
				pageX: 0,
				percent: 0,
				numbers: []
			};
		},
		created() {
			this.handleQuantity(this.quantity)
			this.percent = Number(this.score || 0) * 100;
		},
		watch: {
			score(newVal, oldVal) {
				this.percent = Number(newVal || 0) * 100;
			},
			quantity(val) {
				this.handleQuantity(val)
			}
		},
		methods: {
			handleTap(e) {
				if (this.disabled) {
					return;
				}
				const index = e.currentTarget.dataset.index;
				this.$emit('change', {
					index: Number(index) + 1,
					params: this.params
				});
			},
			touchMove(e) {
				if (this.disabled) {
					return;
				}
				if (!e.changedTouches[0]) {
					return;
				}
				const movePageX = e.changedTouches[0].pageX;
				const distance = movePageX - this.pageX;

				if (distance <= 0) {
					return;
				}
				let index = Math.ceil(distance / this.size);
				index = index > this.quantity ? this.quantity : index;
				this.$emit('change', {
					index: index,
					params: this.params
				});
			},
			handleQuantity(quantity) {
				quantity = Number(quantity) || 5
				quantity = Math.ceil(quantity)
				this.numbers = Array.from(new Array(quantity + 1).keys()).slice(1)
			}
		},
		mounted() {
			this.$nextTick(()=>{
				setTimeout(() => {
					const className = '.tui-rate-box';
					let query = uni.createSelectorQuery().in(this);
					query
						.select(className)
						.boundingClientRect(res => {
							this.pageX = res.left || 0;
						})
						.exec();
				}, 80)
			})
		}
	};
</script>

<style scoped>
	@font-face {
		font-family: 'rateFont';
		src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAT4AA0AAAAAB4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE3AAAABoAAAAciBprQUdERUYAAAS8AAAAHgAAAB4AKQALT1MvMgAAAaAAAABDAAAAVj1YSN1jbWFwAAAB+AAAAEIAAAFCAA/qlmdhc3AAAAS0AAAACAAAAAj//wADZ2x5ZgAAAkgAAADwAAABZLMTdXtoZWFkAAABMAAAADAAAAA2FZKISmhoZWEAAAFgAAAAHQAAACQHYgOFaG10eAAAAeQAAAARAAAAEgx6AHpsb2NhAAACPAAAAAwAAAAMAEYAsm1heHAAAAGAAAAAHgAAACABEQBPbmFtZQAAAzgAAAFJAAACiCnmEVVwb3N0AAAEhAAAAC0AAABHLO3vkXjaY2BkYGAA4t2/VF7G89t8ZeBmYQCBm9ZKMnC6ikGMuYXpP5DLwcAEEgUAHPQJOXjaY2BkYGBu+N/AEMPCAALMLQyMDKiABQBQwgLwAAAAeNpjYGRgYGBlcGZgYgABEMkFhAwM/8F8BgAPigFhAAB42mNgZGFgnMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PXj17zdzwv4EhhrmBoQEozAiSAwD/YA2wAHjaY2GAABYIrmKoAgACggEBAAAAeNpjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEQP6z1///A8lX//9LSkJVMjCyMcCYDIxMQIKJARUwMgx7AAA/9QiLAAAAAAAAAAAAAABGALJ42mNgZKhiEGNuYfrPoMnAwGimps+ox6jPqKbEz8jHCMLyjHJAmk1czMie0cxInlHMDChrZs6cJyaosI+NlzmU34I/lImPdb+CoHgXCyujIosYtzTfKlYBtlWyuqwKjKwsjNvFTdlkGDnZ1srKrmXjZJRhMxVvZxFgA+rgYI9iYoriV1TYzybAwsDABHeLBIMT0DUg29VBTjEHucvcjtGeUVyOUZ6JaFcybefnZ5HuFdEX6ZVm5uMvniemxuXmzqUmNs+FeOfHCeiKzfPi4vKaJ6YrUCDOIiM8YYKwDIu4OMRbrOtkZdex4vMWACzGM5B42n2QPU4DMRCFn/MHJBJCIKhdUQDa/JQpEyn0CKWjSDbekGjXXnmdSDkBLRUHoOUYHIAbINFyCl6WSZMia+3o85uZ57EBnOMbCv/fJe6EFY7xKFzBETLhKvUX4Rr5XbiOFj6FG9R/hJu4VQPhFi7UGx1U7YS7m9JtywpnGAhXcIon4Sr1lXCN/CpcxxU+hBvUv4SbGONXuIVrZakM4WEwQWCcQWOKDeMCMRwskjIG1qE59GYSzExPN3oRO5s4GyjvV2KXAx5oOeeAKe09t2a+Sif+YMuB1JhuHgVLtimNLiJ0KBtfLJzV3ahzsP2e7ba02L9rgTXH7FENbNT8Pdsz0khsDK+QkjXyMrekElOPaGus8btnKdbzXgiJTrzL9IjHmjR1OvduaeLA4ufyjBx9tLmSPfeoHD5jWQh5v91OxCCKXYY/k9hxGQAAAHjaY2BigAAuMMnIgA5YwaJMjEyMzPzJ+Tk5qcklmfl58WmZOTlcCD4Ak9QKlAAAAAAAAAH//wACAAEAAAAMAAAAFgAAAAIAAQADAAQAAQAEAAAAAgAAAAB42mNgYGBkAIKrS9Q5QPRNayUZGA0AM8UETgAA) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	.tui-icon {
		font-family: 'rateFont' !important;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: block;
	}

	.tui-relative {
		position: relative;
	}

	.tui-icon-main {
		position: absolute;
		height: 100%;
		left: 0;
		top: 0;
		overflow: hidden;
	}

	.tui-icon-collection-fill:before {
		content: '\e6ea';
	}

	.tui-icon-collection:before {
		content: '\e6eb';
	}

	.tui-rate-box {
		display: inline-flex;
		align-items: center;
		margin: 0;
		padding: 0;
	}
</style>