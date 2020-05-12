<template>
	<view class="tui-linkage-class"><slot></slot></view>
</template>

<script>
//分类菜单左右联动
export default {
	name: 'tLinkage',
	props: {
		scrollTop: {
			type: Number
		},
		recalc: {
			type: Number,
			default: 0
		},
		//px
		distanceTop: {
			type: Number,
			default: 0
		},
		//列表中的索引值
		index: {
			type: [Number, String],
			default: 0
		}
	},
	watch: {
		scrollTop(newValue, oldValue) {
			if (this.initialize != 0) {
				this.updateScrollChange(() => {
					this.updateStickyChange();
					this.initialize = 0;
				});
			} else {
				this.updateStickyChange();
			}
		},
		recalc(newValue, oldValue) {
			this.updateScrollChange(() => {
				this.updateStickyChange();
				this.initialize = 0;
			});
		}
	},
	created() {
		this.initialize = this.recalc;
	},
	mounted() {
		setTimeout(() => {
			this.updateScrollChange();
		}, 20);
	},
	data() {
		return {
			timer: null,
			top: 0,
			height: 0,
			initialize: 0 //重新初始化
		};
	},
	methods: {
		updateStickyChange() {
			const top = this.top;
			const height = this.height;
			const scrollTop = this.scrollTop;
			let linkage = scrollTop + this.distanceTop >= top && scrollTop + this.distanceTop < top + height ? true : false;
			if (linkage) {
				this.$emit('linkage', {
					isLinkage: linkage,
					index: this.index
				});
			}
		},
		updateScrollChange(callback) {
			if (this.timer) {
				clearTimeout(this.timer);
				this.timer = null;
			}
			this.timer = setTimeout(() => {
				const className = '.tui-linkage-class';
				const query = uni.createSelectorQuery().in(this);
				query
					.select(className)
					.boundingClientRect(res => {
						if (res) {
							this.top = res.top + (this.scrollTop || 0);
							this.height = res.height;
							callback && callback();
						}
					})
					.exec();
			}, 0);
		}
	}
};
</script>

<style></style>