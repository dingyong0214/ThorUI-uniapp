<template>
	<div class='tablebox'>
		<rich-text :nodes="nodes" :class="node.classStr" :style="'user-select:' + parseSelect"></rich-text>
	</div>
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
		loadNode(node) {
			let obj = [];
			for (let children of node) {
				if (children.node=='element') {
					let t = {
						name:children.tag,
						attrs: {
							class: children.classStr,
							// style: children.styleStr,
						},
						children: children.nodes?this.loadNode(children.nodes):[]
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
<style>
	@import url("../wxParse.css");
</style>