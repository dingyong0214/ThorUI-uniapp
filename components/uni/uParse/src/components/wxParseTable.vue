<template>
	<view class="wxTable" @tap="wxParseTableTap">
		<rich-text :nodes="nodes" :class="node.classStr" :style="'user-select:' + parseSelect"></rich-text>
	</view>
</template>
<script>
export default {
	name: 'wxParseTable',
	props: {
		node: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	inject: ['parseSelect'],
	data() {
		return {
			nodes:[]
		};
	},
	mounted() {
		this.nodes=this.loadNode([this.node]);
	},
	methods: {
		wxParseTableTap(e) {
			let parent = this.$parent;
			while (!parent.preview || typeof parent.preview !== 'function') {
				// TODO 遍历获取父节点执行方法
				parent = parent.$parent;
			}
			parent.preview("", e);
		},
		loadNode(node) {
			let obj = [];
			for (let children of node) {
				if (children.node=='element') {
					let t = {
						name:children.tag,
						attrs: {
							class: children.classStr
						},
						children: children.nodes?this.loadNode(children.nodes):[]
					}
					if(children.tag==="img"){
						t.attrs.src= children.attr.src;
						t.attrs.mode=children.attr.mode;
						t.attrs.alt=children.attr.alt;
					}
					obj.push(t)
				} else if(children.node=='text'){
					obj.push({
						type: 'text',
						text: children.text
					})
				}
			}
			return obj
		}
	}
};
</script>