<!--**
 * forked from：https://github.com/F-loat/mpvue-wxParse
 *
 * github地址: https://github.com/dcloudio/uParse
 *
 * uni-app框架下 富文本解析
 * 全局引入css文件，@import '/.../wxParse.css';
 * 
 */-->

<template>
	<!--基础元素-->
	<div class="wxParse" :class="className" :style="'user-select:' + userSelect">
		<block v-for="(node, index) of nodes" :key="index">
			<wxParseTemplate :node="node"  v-if="!loading"></wxParseTemplate>
		</block>
	</div>
</template>

<script>
	import HtmlToJson from './libs/html2json';
	import wxParseTemplate from './components/wxParseTemplate0';
	export default {
		name: 'wxParse',
		emits: ['navigate','preview'],
		props: {
			userSelect: {
				type: String,
				default: 'text' //none |text| all | element
			},
			imgOptions: {
				type: [Object, Boolean],
				default: function() {
					return {
						loop: false,
						indicator: 'number',
						longPressActions: false
					}
				}
			},
			loading: {
				type: Boolean,
				default: false
			},
			className: {
				type: String,
				default: ''
			},
			content: {
				type: String,
				default: ''
			},
			noData: {
				type: String,
				default: '<text></text>'
			},
			startHandler: {
				type: Function,
				default () {
					return node => {
						node.attr.class = null;
						node.attr.style = null;
					};
				}
			},
			endHandler: {
				type: Function,
				default: null
			},
			charsHandler: {
				type: Function,
				default: null
			},
			imageProp: {
				type: Object,
				default () {
					return {
						mode: 'aspectFit',
						padding: 0,
						lazyLoad: false,
						domain: ''
					};
				}
			}
		},
		components: {
			wxParseTemplate
		},
		data() {
			return {
				nodes: {},
				imageUrls: [],
				wxParseWidth: {
					value: 0
				}
			};
		},
		computed: {},
		mounted() {
			this.setHtml()
		},
		methods: {
			setHtml() {
				this.getWidth().then((data) => {
					this.wxParseWidth.value = data;
				})
				let {
					content,
					noData,
					imageProp,
					startHandler,
					endHandler,
					charsHandler
				} = this;
				let parseData = content || noData;
				let customHandler = {
					start: startHandler,
					end: endHandler,
					chars: charsHandler
				};
				let results = HtmlToJson(parseData, customHandler, imageProp, this);

				this.imageUrls = results.imageUrls;
				this.nodes = [];
				setTimeout(()=>{
					this.nodes = results.nodes;
				},20)

				// results.nodes.forEach((item) => {
				// 	setTimeout(() => {
				// 		this.nodes.push(item)
				// 	}, 0);
				// })
			},
			getWidth() {
				return new Promise((res, rej) => {
					// #ifndef MP-ALIPAY || MP-BAIDU
					uni.createSelectorQuery()
						.in(this)
						.select('.wxParse')
						.fields({
								size: true,
								scrollOffset: true
							},
							data => {
								res(data.width);
							}
						).exec();
					// #endif
					// #ifdef MP-BAIDU
					return new Promise((res, rej) => {
						swan.createSelectorQuery().select('.wxParse').boundingClientRect(function(rect) {
							res(rect.width)
						}).exec()
					});
					// #endif
					// #ifdef MP-ALIPAY
					my.createSelectorQuery()
						.select('.wxParse')
						.boundingClientRect().exec((ret) => {
							res(ret[0].width);
						});
					// #endif
				});
			},
			navigate(href, $event, attr) {
				this.$emit('navigate', href, $event);
			},
			preview(src, $event) {
				if (!this.imageUrls.length || typeof this.imgOptions === 'boolean') {

				} else {
					uni.previewImage({
						current: src,
						urls: this.imageUrls,
						loop: this.imgOptions.loop,
						indicator: this.imgOptions.indicator,
						longPressActions: this.imgOptions.longPressActions
					});
				}
				this.$emit('preview', src, $event);
			},
			removeImageUrl(src) {
				const {
					imageUrls
				} = this;
				imageUrls.splice(imageUrls.indexOf(src), 1);
			}
		},
		// 父组件中提供
		provide() {
			return {
				parseWidth: this.wxParseWidth,
				parseSelect: this.userSelect
				// 提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
			};
		},
		watch: {
			content() {
				this.setHtml()
			}
		}
	};
</script>
