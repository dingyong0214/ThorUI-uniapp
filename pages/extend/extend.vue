<template>
	<view class="tui-container">
		<view class="tui-extend-box">
			<block v-for="(item,index) in list" :key="index" v-if="(index+1)%2!=0">
				<view class="tui-extend-item" :class="'tui-bg-'+item.bg" :id="item.page" @tap.stop="detail">
					<view class="tui-title tui-light">
						{{item.name}}
					</view>
					<view class="tui-sub-title">{{item.desc}}</view>
					<view class="tui-footer">
						<tui-tag size="small" type="white" shape="circle" :plain="true">查看详情</tui-tag>
						<view>
							<button @tap.stop="like(index)" class="tui-btn">
								<tui-icon :name="item.like?'like-fill':'like'" :color="item.like?'#f54f46':'#fff'" :size="20" class="tui-l-icon"></tui-icon>
							</button>
							<button open-type="share" @tap.stop="onshare" class="tui-btn" :data-id="index">
								<tui-icon name="partake" color="#fff" :size="20" class="tui-r-icon"></tui-icon>
							</button>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="tui-extend-box">
			<block v-for="(item,index) in list" :key="index" v-if="(index+1)%2==0">
				<view class="tui-extend-item" :class="'tui-bg-'+item.bg" :id="item.page" @tap.stop="detail">
					<view class="tui-title tui-light">
						{{item.name}}
					</view>
					<view class="tui-sub-title">{{item.desc}}</view>
					<view class="tui-footer">
						<tui-tag size="small" type="white" shape="circle" :plain="true">查看详情</tui-tag>
						<view>
							<button @tap.stop="like(index)" class="tui-btn">
								<tui-icon :name="item.like?'like-fill':'like'" :color="item.like?'#f54f46':'#fff'" :size="20" class="tui-l-icon"></tui-icon>
							</button>
							<button open-type="share" @tap.stop="onshare" class="tui-btn" :data-id="index">
								<tui-icon name="partake" color="#fff" :size="20" class="tui-r-icon"></tui-icon>
							</button>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from '@/components/tag/tag'
	export default {
		components: {
			tuiIcon,
			tuiTag
		},
		data() {
			return {
				list: [{
					name: "消息提示",
					desc: "包括顶部提示，居中提示，底部提示。可切换提示框背景颜色。",
					page: "msgtips",
					like: false,
					bg: this.getRandom()
				}, {
					name: "吸顶容器",
					desc: "sticky吸顶容器，根据实际场景选择使用。",
					page: "sticky",
					like: false,
					bg: this.getRandom()
				}, {
					name: "数字键盘",
					desc: "例子包括6位数和4位数输入，长度动态传入，根据实际情况使用。",
					page: "keyboard",
					like: false,
					bg: this.getRandom()
				}, {
					name: "时间轴",
					desc: "time-axis时间轴，样式可自定义，例子实现了物流时间轴，在【thor=>日志】中也有使用。",
					page: "timeaxis",
					like: false,
					bg: this.getRandom()
				}, {
					name: "滚动消息",
					desc: "滚动消息：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品。",
					page: "rollingNews",
					like: false,
					bg: this.getRandom()
				}, {
					name: "弹层下拉选择",
					desc: "包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层。",
					page: "popup",
					like: false,
					bg: this.getRandom()
				}, {
					name: "ActionSheet",
					desc: "操作菜单:可加入提示信息，可单独设置字体样式。",
					page: "actionsheet",
					like: false,
					bg: this.getRandom()
				}, {
					name: "NumberBox",
					desc: "数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)。",
					page: "numberbox",
					like: false,
					bg: this.getRandom()
				}, {
					name: "Rate评分",
					desc: "Rate评分:可设置星星数，可设置大小颜色，支持手势touch选择。",
					page: "rate",
					like: false,
					bg: this.getRandom()
				}, {
					name: "新闻模板",
					desc: "新闻模板包含：新闻列表，新闻详情，评论等。",
					page: "news",
					like: false,
					bg: this.getRandom()
				}, {
					name: "聊天模板",
					desc: "聊天模板包含：消息列表，好友列表，聊天界面等。",
					page: "msgList",
					like: false,
					bg: this.getRandom()
				}, {
					name: "商城模板",
					desc: "商城模板包含：商城首页，商城列表，商城详情，购物车等。",
					page: "mall",
					like: false,
					bg: this.getRandom()
				}, {
					name: "抽奖转盘",
					desc: "抽奖转盘，例子使用随机值进行抽奖，可以指定中奖奖项。",
					page: "luckdraw",
					like: false,
					bg: this.getRandom()
				}, {
					name: "模板",
					desc: "计划前三套模板：新闻，聊天，商城。敬请期待！",
					page: "template",
					like: false,
					bg: this.getRandom()
				}]
			}
		},
		methods: {
			getRandom: function(index) {
				var rnd = Math.floor(Math.random() * 6 + 1);
				return rnd;
			},
			detail: function(e) {
				const page = e.currentTarget.id;
				uni.navigateTo({
					url: `../extend-view/${page}/${page}`
				})
			},
			like: function(index) {
				Vue.set(this.list[index], 'like', !this.list[index].like)
			},
			onshare: function(e) {
				//#ifdef APP-PLUS
				let index = e.target.dataset.id;
				let title = this.list[index].name;
				plus.share.sendWithSystem({
					content: "ThorUI：" + title,
					href: 'https://thorui.cn/'
				}, function() {
					console.log('分享成功');
				}, function(e) {
					console.log('分享失败：' + JSON.stringify(e));
				});
				//#endif
				return false;
			}
		},
		onShareAppMessage: function(e) {
			let index = e.target.dataset.id;
			let title = this.list[index].name;
			return {
				title: title
			}
		}
	}
</script>

<style>
	page {
		-webkit-font-smoothing: antialiased;
	}


	.tui-container {
		width: 100%;
		padding: 40upx 30upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.tui-extend-box {
		flex: 1;
		margin-right: 10upx;
	}

	.tui-extend-box:last-child {
		margin-right: 0;
	}

	.tui-extend-item {
		/* display: inline-block; */
		width: 100%;
		padding: 30upx 20upx;
		margin-bottom: 10upx;
		border-radius: 20upx;
		box-sizing: border-box;
		color: #fff;
		font-family: "Microsoft YaHei";
		text-align: justify;
		word-break: break-all;
		word-wrap: break-word;
		position: relative;
	}

	.tui-extend-item::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 20upx;
	}

	.tui-title {
		font-size: 40upx;
		line-height: 40upx;
		font-weight: bold;
		position: relative;
	}

	.tui-sub-title {
		font-size: 32upx;
		padding-top: 30upx;
		color: #fff;
		position: relative;
		z-index: 10;
	}

	.tui-footer {
		padding-top: 60upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		z-index: 10;
		height: 44upx;
	}

	.tui-r-icon {
		padding-left: 16upx;
		padding-bottom: 5upx;
	}

	.tui-l-icon {
		padding: 0 10upx 5upx 8upx;
	}

	.tui-btn {
		background: none;
		padding: 0;
		margin: 0;
		display: inline;
	}

	.tui-bg-1 {
		background: #282537;
		background-image: -webkit-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
		background-image: radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
	}

	.tui-bg-2 {
		background: #092756;
		background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, 0.4) 10%, rgba(138, 114, 76, 0) 40%),
			-webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%),
			-webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
		background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104, 128, 138, 0.4) 10%, rgba(138, 114, 76, 0) 40%),
			linear-gradient(to bottom, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4) 100%),
			linear-gradient(135deg, #670d10 0%, #092756 100%);
	}

	.tui-bg-3 {
		background-image: linear-gradient(#8b9da9, #fff6e4);
		box-shadow: inset 0 0 100px hsla(0, 0%, 0%, 0.3);
	}

	.tui-bg-4 {
		background: rgb(105, 155, 200);
		background: -webkit-gradient(radial, top left, 0px, top left, 100%, color-stop(0%, rgba(105, 155, 200, 1)), color-stop(57%, rgba(181, 197, 216, 1)));
		background: -webkit-radial-gradient(top left, ellipse cover, rgba(105, 155, 200, 1) 0%, rgba(181, 197, 216, 1) 57%);
	}

	.tui-bg-5 {
		background-image: linear-gradient(45deg, rgba(194, 233, 221, 0.5) 1%, rgba(104, 119, 132, 0.5) 100%),
			linear-gradient(-45deg, #494d71 0%, rgba(217, 230, 185, 0.5) 80%);
	}

	.tui-bg-6 {
		background: rgb(244, 226, 156);
		background: -webkit-linear-gradient(-45deg, rgba(244, 226, 156, 0) 0%, rgba(59, 41, 58, 1) 100%),
			-webkit-linear-gradient(left, rgba(244, 226, 156, 1) 0%, rgba(130, 96, 87, 1) 100%);
		background: linear-gradient(135deg, rgba(244, 226, 156, 0) 0%, rgba(59, 41, 58, 1) 100%),
			linear-gradient(to right, rgba(244, 226, 156, 1) 0%, rgba(130, 96, 87, 1) 100%);
	}

	.tui-light {
		color: #fff;
		text-shadow: 0 0 0.1em rgba(0, 0, 0, 0.3), 0 0 0.2em rgba(0, 0, 0, 0.3);
	}
</style>
