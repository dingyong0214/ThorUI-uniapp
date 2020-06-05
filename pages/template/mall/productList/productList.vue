<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box">
			<view class="tui-header" :style="{ width: width + 'px', height: height + 'px' }">
				<view class="tui-back" :style="{ marginTop: arrowTop + 'px' }" @tap="back"><tui-icon name="arrowleft" color="#000"></tui-icon></view>
				<view class="tui-searchbox tui-search-mr" :style="{ marginTop: inputTop + 'px' }" @tap="search">
					<icon type="search" :size="13" color="#999"></icon>
					<text class="tui-search-text" v-if="!searchKey">搜索Thorui商品</text>
					<view class="tui-search-key" v-if="searchKey">
						<view class="tui-key-text">{{ searchKey }}</view>
						<tui-icon name="shut" :size="12" color="#fff"></tui-icon>
					</view>
				</view>
			</view>
		</view>
		<!--header-->
		<!--screen-->
		<view class="tui-header-screen" :style="{ top: height + 'px' }">
			<view class="tui-screen-top">
				<view class="tui-top-item tui-icon-ml" :class="[tabIndex == 0 ? 'tui-active tui-bold' : '']" data-index="0" @tap="screen">
					<view>{{ selectedName }}</view>
					<tui-icon :name="selectH > 0 ? 'arrowup' : 'arrowdown'" :size="14" :color="tabIndex == 0 ? '#e41f19' : '#444'"></tui-icon>
				</view>
				<view class="tui-top-item" :class="[tabIndex == 1 ? 'tui-active tui-bold' : '']" @tap="screen" data-index="1">销量</view>
				<view class="tui-top-item" @tap="screen" data-index="2">
					<tui-icon :name="isList ? 'manage' : 'listview'" :size="isList ? 22 : 18" :bold="isList ? false : true" color="#333"></tui-icon>
				</view>
				<view class="tui-top-item tui-icon-ml" @tap="screen" data-index="3">
					<text>筛选</text>
					<tui-icon name="screen" :size="12" color="#333" :bold="true"></tui-icon>
				</view>

				<!--下拉选择列表--综合-->
				<view class="tui-dropdownlist" :class="[selectH > 0 ? 'tui-dropdownlist-show' : '']" :style="{ height: selectH + 'rpx' }">
					<view
						class="tui-dropdownlist-item tui-icon-middle"
						:class="[item.selected ? 'tui-bold' : '']"
						v-for="(item, index) in dropdownList"
						:key="index"
						@tap.stop="dropdownItem"
						:data-index="index"
					>
						<text class="tui-ml tui-middle">{{ item.name }}</text>
						<tui-icon name="check" :size="16" color="#e41f19" :bold="true" v-if="item.selected"></tui-icon>
					</view>
				</view>
				<view class="tui-dropdownlist-mask" :class="[selectH > 0 ? 'tui-mask-show' : '']" @tap.stop="hideDropdownList"></view>
				<!--下拉选择列表--综合-->
			</view>
			<view class="tui-screen-bottom">
				<block v-for="(item, index) in attrArr" :key="index">
					<view
						class="tui-bottom-item tui-icon-ml"
						:class="[item.isActive ? 'tui-btmItem-active' : '', attrIndex == index ? 'tui-btmItem-tap' : '']"
						:data-index="index"
						@tap="btnDropChange"
					>
						<view class="tui-bottom-text" :class="[attrIndex == index ? 'tui-active' : '']">{{ item.isActive ? item.selectedName : item.name }}</view>
						<tui-icon
							:name="attrIndex == index ? 'arrowup' : 'arrowdown'"
							:size="14"
							:color="attrIndex == index || item.isActive ? '#e41f19' : '#444'"
							v-if="item.list.length > 0"
						></tui-icon>
					</view>
				</block>
			</view>
		</view>
		<!--screen-->

		<!--list-->
		<view class="tui-product-list" :style="{ marginTop: px(dropScreenH + 18) }">
			<view class="tui-product-container">
				<block v-for="(item, index) in productList" :key="index" v-if="(index + 1) % 2 != 0 || isList">
					<!-- <template is="productItem" data="{{item,index:index,isList:isList}}" /> -->
					<!--商品列表-->
					<view class="tui-pro-item" :class="[isList ? 'tui-flex-list' : '']" hover-class="hover" :hover-start-time="150" @tap="detail">
						<image :src="'/static/images/mall/product/' + item.img + '.jpg'" class="tui-pro-img" :class="[isList ? 'tui-proimg-list' : '']" mode="widthFix" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{ item.name }}</view>
							<view>
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{ item.sale }}</text>
									<text class="tui-factory-price">￥{{ item.factory }}</text>
								</view>
								<view class="tui-pro-pay">{{ item.payNum }}人付款</view>
							</view>
						</view>
					</view>
					<!--商品列表-->
				</block>
			</view>
			<view class="tui-product-container" v-if="!isList">
				<block v-for="(item, index) in productList" :key="index" v-if="(index + 1) % 2 == 0">
					<!-- <template is="productItem" data="{{item,index:index}}" /> -->
					<!--商品列表-->
					<view class="tui-pro-item" :class="[isList ? 'tui-flex-list' : '']" hover-class="hover" :hover-start-time="150" @tap="detail">
						<image :src="'/static/images/mall/product/' + item.img + '.jpg'" class="tui-pro-img" :class="[isList ? 'tui-proimg-list' : '']" mode="widthFix" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{ item.name }}</view>
							<view>
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{ item.sale }}</text>
									<text class="tui-factory-price">￥{{ item.factory }}</text>
								</view>
								<view class="tui-pro-pay">{{ item.payNum }}人付款</view>
							</view>
						</view>
					</view>
					<!--商品列表-->
				</block>
			</view>
		</view>

		<!--list-->

		<!--顶部下拉筛选弹层 属性-->
		<tui-top-dropdown backgroundColor="#f7f7f7" :show="dropScreenShow" :paddingbtm="110" :translatey="dropScreenH" @close="btnCloseDrop">
			<scroll-view class="tui-scroll-box" scroll-y :scroll-top="scrollTop">
				<view class="tui-seizeaseat-20"></view>
				<view
					class="tui-drop-item tui-icon-middle"
					:class="[item.selected ? 'tui-bold' : '']"
					v-for="(item, index) in attrData"
					:key="index"
					@tap.stop="btnSelected"
					:data-index="index"
				>
					<tui-icon name="check" :size="16" color="#e41f19" :bold="true" v-if="item.selected"></tui-icon>
					<text class="tui-ml tui-middle">{{ item.name }}</text>
				</view>
				<view class="tui-seizeaseat-30"></view>
			</scroll-view>
			<view class="tui-drop-btnbox">
				<view class="tui-drop-btn tui-btn-white" hover-class="tui-white-hover" :hover-stay-time="150" @tap="reset">重置</view>
				<view class="tui-drop-btn tui-btn-red" hover-class="tui-red-hover" :hover-stay-time="150" @tap="btnSure">确定</view>
			</view>
		</tui-top-dropdown>
		<!---顶部下拉筛选弹层 属性-->

		<!--左抽屉弹层 筛选 -->
		<tui-drawer mode="right" :visible="drawer" @close="closeDrawer">
			<view class="tui-drawer-box" :style="{ paddingTop: height + 'px' }">
				<scroll-view class="tui-drawer-scroll" scroll-y :style="{ height: drawerH + 'px'}">
					<view class="tui-drawer-title">
						<text class="tui-title-bold">价格区间</text>
						<view class="tui-attr-right">
							<tui-icon name="position-fill" color="#e41f19" :size="14" class="tui-location"></tui-icon>
							<text class="tui-addr-left">北京朝阳区三环到四环之间</text>
						</view>
					</view>
					<view class="tui-drawer-content">
						<input placeholder-class="tui-phcolor" class="tui-input" placeholder="最低价" maxlength="11" type="number" />
						<tui-icon name="reduce" color="#333" :size="14"></tui-icon>
						<input placeholder-class="tui-phcolor" class="tui-input" placeholder="最高价" maxlength="11" type="number" />
					</view>

					<view class="tui-drawer-title">
						<text class="tui-title-bold">全部分类</text>
						<view class="tui-all-box tui-icon-ml">
							<view class="tui-attr-right">全部</view>
							<tui-icon name="arrowdown" :size="14" color="#444"></tui-icon>
						</view>
					</view>
					<view class="tui-drawer-content tui-flex-attr">
						<view class="tui-attr-item tui-btmItem-active"><view class="tui-attr-ellipsis">男装</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">女装</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">运动服饰</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">户外鞋服</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">文化</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">服饰配件</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">流行男鞋</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">艺术</view></view>
					</view>

					<view class="tui-drawer-title">
						<text class="tui-title-bold">品牌</text>
						<view class="tui-all-box tui-icon-ml">
							<view class="tui-attr-right tui-active ">花花公子，七匹狼（SEPTWOLVES）</view>
							<tui-icon name="arrowdown" :size="14" color="#444"></tui-icon>
						</view>
					</view>
					<view class="tui-drawer-content tui-flex-attr">
						<view class="tui-attr-item tui-btmItem-active"><view class="tui-attr-ellipsis">花花公子</view></view>
						<view class="tui-attr-item tui-btmItem-active"><view class="tui-attr-ellipsis">七匹狼（SEPTWOLVES）</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">吉普</view></view>
					</view>

					<view class="tui-drawer-title">
						<text class="tui-title-bold">尺码</text>
						<view class="tui-all-box tui-icon-ml">
							<view class="tui-attr-right">全部</view>
							<tui-icon name="arrowup" :size="14" color="#444"></tui-icon>
						</view>
					</view>
					<view class="tui-drawer-content tui-flex-attr">
						<view class="tui-attr-item tui-btmItem-active"><view class="tui-attr-ellipsis">27</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">28</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">29</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">30</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">31</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">32</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">33</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">34</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">35</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">36</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">37</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">38</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">39</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">40</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">41</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">42</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">43</view></view>
						<view class="tui-attr-item"><view class="tui-attr-ellipsis">44</view></view>
					</view>
					<view class="tui-safearea-bottom"></view>
				</scroll-view>
				<view class="tui-attr-btnbox">
					<view class="tui-attr-safearea">
						<view class="tui-drawer-btn tui-drawerbtn-black" hover-class="tui-white-hover" :hover-stay-time="150">重置</view>
						<view class="tui-drawer-btn tui-drawerbtn-primary" hover-class="tui-red-hover" :hover-stay-time="150" @tap="closeDrawer">确定(80万+件商品)</view>
					</view>
				</view>
			</view>
		</tui-drawer>
		<!--左抽屉弹层 筛选-->

		<!--加载loadding-->
		<tui-loadmore v-if="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore v-if="!pullUpOn && isList" backgroundColor="#f7f7f7"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
export default {
	data() {
		return {
			searchKey: '', //搜索关键词
			width: 200, //header宽度
			height: 64, //header高度
			inputTop: 0, //搜索框距离顶部距离
			arrowTop: 0, //箭头距离顶部距离
			dropScreenH: 0, //下拉筛选框距顶部距离
			attrData: [],
			attrIndex: -1,
			dropScreenShow: false,
			scrollTop: 0,
			tabIndex: 0, //顶部筛选索引
			isList: false, //是否以列表展示  | 列表或大图
			drawer: false,
			drawerH: 0, //抽屉内部scrollview高度
			selectedName: '综合',
			selectH: 0,
			dropdownList: [
				{
					name: '综合',
					selected: true
				},
				{
					name: '价格升序',
					selected: false
				},
				{
					name: '价格降序',
					selected: false
				}
			],
			attrArr: [
				{
					name: '新品',
					selectedName: '新品',
					isActive: false,
					list: []
				},
				{
					name: '品牌',
					selectedName: '品牌',
					isActive: false,
					list: [
						{
							name: 'trendsetter',
							selected: false
						},
						{
							name: '维肯（Viken）',
							selected: false
						},
						{
							name: 'AORO',
							selected: false
						},
						{
							name: '苏发',
							selected: false
						},
						{
							name: '飞花令（FHL）',
							selected: false
						},
						{
							name: '叶梦丝',
							selected: false
						},
						{
							name: 'ITZOOM',
							selected: false
						},
						{
							name: '亿魅',
							selected: false
						},
						{
							name: 'LEIKS',
							selected: false
						},
						{
							name: '雷克士',
							selected: false
						},
						{
							name: '蕊芬妮',
							selected: false
						},
						{
							name: '辉宏达',
							selected: false
						},
						{
							name: '英西达',
							selected: false
						},
						{
							name: '戴为',
							selected: false
						},
						{
							name: '魔风者',
							selected: false
						},
						{
							name: '即满',
							selected: false
						},
						{
							name: '北比',
							selected: false
						},
						{
							name: '娱浪',
							selected: false
						},
						{
							name: '搞怪猪',
							selected: false
						}
					]
				},
				{
					name: '类型',
					selectedName: '类型',
					isActive: false,
					list: [
						{
							name: '线充套装',
							selected: false
						},
						{
							name: '单条装',
							selected: false
						},
						{
							name: '车载充电器',
							selected: false
						},
						{
							name: 'PD快充',
							selected: false
						},
						{
							name: '数据线转换器',
							selected: false
						},
						{
							name: '多条装',
							selected: false
						},
						{
							name: '充电插头',
							selected: false
						},
						{
							name: '无线充电器',
							selected: false
						},
						{
							name: '座式充电器',
							selected: false
						},
						{
							name: '万能充',
							selected: false
						},
						{
							name: '转换器/转接线',
							selected: false
						},
						{
							name: 'MFI苹果认证',
							selected: false
						},
						{
							name: '转换器',
							selected: false
						},
						{
							name: '苹果认证',
							selected: false
						}
					]
				},
				{
					name: '适用手机',
					selectedName: '适用手机',
					isActive: false,
					list: [
						{
							name: '通用',
							selected: false
						},
						{
							name: 'vivo',
							selected: false
						},
						{
							name: 'OPPO',
							selected: false
						},
						{
							name: '魅族',
							selected: false
						},
						{
							name: '苹果',
							selected: false
						},
						{
							name: '华为',
							selected: false
						},
						{
							name: '三星',
							selected: false
						},
						{
							name: '荣耀',
							selected: false
						},
						{
							name: '诺基亚5',
							selected: false
						},
						{
							name: '荣耀4',
							selected: false
						},
						{
							name: '诺基',
							selected: false
						},
						{
							name: '荣耀',
							selected: false
						},
						{
							name: '诺基亚2',
							selected: false
						},
						{
							name: '荣耀2',
							selected: false
						},
						{
							name: '诺基',
							selected: false
						}
					]
				}
			],
			productList: [
				{
					img: 1,
					name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）',
					sale: 599,
					factory: 899,
					payNum: 2342
				},
				{
					img: 2,
					name: '德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒',
					sale: 29,
					factory: 69,
					payNum: 999
				},
				{
					img: 3,
					name: '【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
					sale: 299,
					factory: 699,
					payNum: 666
				},
				{
					img: 4,
					name: '百雀羚套装女补水保湿护肤品',
					sale: 1599,
					factory: 2899,
					payNum: 236
				},
				{
					img: 5,
					name: '百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋',
					sale: 599,
					factory: 899,
					payNum: 2399
				},
				{
					img: 6,
					name: '短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤',
					sale: 599,
					factory: 899,
					payNum: 2399
				},
				{
					img: 1,
					name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜',
					sale: 599,
					factory: 899,
					payNum: 2342
				},
				{
					img: 2,
					name: '德国DMK进口牛奶',
					sale: 29,
					factory: 69,
					payNum: 999
				},
				{
					img: 3,
					name: '【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
					sale: 299,
					factory: 699,
					payNum: 666
				},
				{
					img: 4,
					name: '百雀羚套装女补水保湿护肤品',
					sale: 1599,
					factory: 2899,
					payNum: 236
				}
			],
			pageIndex: 1,
			loadding: false,
			pullUpOn: true
		};
	},
	onLoad: function(options) {
		let obj = {};
		// #ifdef MP-WEIXIN
		obj = wx.getMenuButtonBoundingClientRect();
		// #endif
		// #ifdef MP-BAIDU
		obj = swan.getMenuButtonBoundingClientRect();
		// #endif
		// #ifdef MP-ALIPAY
		my.hideAddToDesktopMenu();
		// #endif
		uni.getSystemInfo({
			success: res => {
				this.width = obj.left || res.windowWidth;
				this.height = obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44;
				this.inputTop = obj.top ? obj.top + (obj.height - 30) / 2 : res.statusBarHeight + 7;
				this.arrowTop = obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6;
				this.searchKey = options.searchKey || '';
				//略小，避免误差带来的影响
				this.dropScreenH = (this.height * 750) / res.windowWidth + 186;
				this.drawerH = res.windowHeight - uni.upx2px(100) - this.height;
			}
		});
	},
	methods: {
		px(num) {
			return uni.upx2px(num) + 'px';
		},
		btnDropChange: function(e) {
			let index = e.currentTarget.dataset.index;
			let arr = JSON.parse(JSON.stringify(this.attrArr[index].list));
			if (arr.length === 0) {
				this.btnCloseDrop();
				this.$set(this.attrArr[index], 'isActive', !this.attrArr[index].isActive);
			} else {
				this.attrData = arr;
				this.attrIndex = index;
				this.dropScreenShow = true;
				this.$set(this.attrArr[index], 'isActive', false);
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0;
				});
			}
		},
		btnSelected: function(e) {
			let index = e.currentTarget.dataset.index;
			this.$set(this.attrData[index], 'selected', !this.attrData[index].selected);
		},
		reset() {
			let arr = this.attrData;
			for (let item of arr) {
				item.selected = false;
			}
			this.attrData = arr;
		},
		btnCloseDrop() {
			this.scrollTop = 1;
			this.$nextTick(() => {
				this.scrollTop = 0;
			});
			this.dropScreenShow = false;
			this.attrIndex = -1;
		},
		btnSure: function() {
			let index = this.attrIndex;
			let arr = this.attrData;
			let active = false;
			let attrName = '';
			//这里只是为了展示选中效果,并非实际场景
			for (let item of arr) {
				if (item.selected) {
					active = true;
					attrName += attrName ? ';' + item.name : item.name;
				}
			}
			let obj = this.attrArr[index];
			this.btnCloseDrop();
			this.$set(obj, 'isActive', active);
			this.$set(obj, 'selectedName', attrName);
		},
		showDropdownList: function() {
			this.selectH = 246;
			this.tabIndex = 0;
		},
		hideDropdownList: function() {
			this.selectH = 0;
		},
		dropdownItem: function(e) {
			let index = e.currentTarget.dataset.index;
			let arr = this.dropdownList;
			for (let i = 0; i < arr.length; i++) {
				if (i === index) {
					arr[i].selected = true;
				} else {
					arr[i].selected = false;
				}
			}
			this.dropdownList = arr;
			this.selectedName = index == 0 ? '综合' : '价格';
			this.selectH = 0;
		},
		screen: function(e) {
			let index = e.currentTarget.dataset.index;
			this.hideDropdownList();
			this.btnCloseDrop();
			if (index == 0) {
				this.showDropdownList();
			} else if (index == 1) {
				this.tabIndex = 1;
			} else if (index == 2) {
				this.isList = !this.isList;
			} else if (index == 3) {
				this.drawer = true;
			}
		},
		closeDrawer: function() {
			this.drawer = false;
		},
		back: function() {
			if (this.drawer) {
				this.closeDrawer();
			} else {
				uni.navigateBack();
			}
		},
		search: function() {
			uni.navigateTo({
				url: '../../news/search/search'
			});
		},
		detail: function() {
			uni.navigateTo({
				url: '../productDetail/productDetail'
			});
		}
	},
	onReachBottom: function() {
		if (!this.pullUpOn) return;
		this.loadding = true;
		if (this.pageIndex == 4) {
			this.loadding = false;
			this.pullUpOn = false;
		} else {
			let loadData = JSON.parse(JSON.stringify(this.productList));
			loadData = loadData.splice(0, 10);
			if (this.pageIndex == 1) {
				loadData = loadData.reverse();
			}
			this.productList = this.productList.concat(loadData);
			this.pageIndex = this.pageIndex + 1;
			this.loadding = false;
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.container {
	padding-bottom: env(safe-area-inset-bottom);
}

/* 隐藏scroll-view滚动条*/

::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}

.tui-header-box {
	width: 100%;
	background: #fff;
	position: fixed;
	z-index: 99998;
	left: 0;
	top: 0;
}

.tui-header {
	display: flex;
	align-items: flex-start;
}

.tui-back {
	margin-left: 8rpx;
	height: 32px !important;
	width: 32px !important;
}

.tui-searchbox {
	width: 100%;
	height: 30px;
	margin-right: 30rpx;
	border-radius: 15px;
	font-size: 12px;
	background: #f7f7f7;
	padding: 3px 10px;
	box-sizing: border-box;
	color: #999;
	display: flex;
	align-items: center;
	overflow: hidden;
}

/* #ifdef MP */
.tui-search-mr {
	margin-right: 20rpx !important;
}
/* #endif */

.tui-search-text {
	padding-left: 16rpx;
}

.tui-search-key {
	max-width: 80%;
	height: 100%;
	padding: 0 16rpx;
	margin-left: 12rpx;
	display: flex;
	align-items: center;
	border-radius: 15px;
	background: rgba(0, 0, 0, 0.5);
	color: #fff;
}

.tui-key-text {
	box-sizing: border-box;
	padding-right: 12rpx;
	font-size: 12px;
	line-height: 12px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

/*screen*/

.tui-header-screen {
	width: 100%;
	box-sizing: border-box;
	background: #fff;
	position: fixed;
	z-index: 1000;
}

.tui-screen-top,
.tui-screen-bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 28rpx;
	color: #333;
}

.tui-screen-top {
	height: 88rpx;
	position: relative;
	background: #fff;
}

.tui-top-item {
	height: 28rpx;
	line-height: 28rpx;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-topitem-active {
	color: #e41f19;
}

.tui-screen-bottom {
	height: 100rpx;
	padding: 0 30rpx;
	box-sizing: border-box;
	font-size: 24rpx;
	align-items: center;
	overflow: hidden;
}

.tui-bottom-text {
	line-height: 26rpx;
	max-width: 82%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.tui-bottom-item {
	flex: 1;
	width: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 12rpx;
	box-sizing: border-box;
	background-color: #f7f7f7;
	margin-right: 20rpx;
	white-space: nowrap;
	height: 60rpx;
	border-radius: 40rpx;
}

.tui-bottom-item:last-child {
	margin-right: 0;
}

.tui-btmItem-active {
	background-color: #fcedea !important;
	color: #e41f19;
	font-weight: bold;
	position: relative;
}

.tui-btmItem-active::after {
	content: '';
	position: absolute;
	border: 1rpx solid #e41f19;
	width: 100%;
	height: 100%;
	border-radius: 40rpx;
	left: 0;
	top: 0;
}

.tui-btmItem-tap {
	position: relative;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}

.tui-btmItem-tap::after {
	content: '';
	position: absolute;
	width: 100%;
	height: 22rpx;
	background: #f7f7f7;
	left: 0;
	top: 58rpx;
}

.tui-bold {
	font-weight: bold;
}

.tui-active {
	color: #e41f19;
}

.tui-addr-left {
	padding-left: 6rpx;
}

.tui-seizeaseat-20 {
	height: 20rpx;
}

.tui-seizeaseat-30 {
	height: 30rpx;
}

/*screen*/

/*顶部下拉选择 属性*/

.tui-scroll-box {
	width: 100%;
	height: 480rpx;
	box-sizing: border-box;
	position: relative;
	z-index: 99;
	color: #fff;
	font-size: 30rpx;
	word-break: break-all;
}

.tui-drop-item {
	color: #333;
	height: 80rpx;
	font-size: 28rpx;
	padding: 20rpx 40rpx 20rpx 40rpx;
	box-sizing: border-box;
	display: inline-block;
	width: 50%;
}

.tui-drop-btnbox {
	width: 100%;
	height: 100rpx;
	position: absolute;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	display: flex;
}

.tui-drop-btn {
	width: 50%;
	font-size: 32rpx;
	text-align: center;
	height: 100rpx;
	line-height: 100rpx;
	border: 0;
}

.tui-btn-red {
	background: #e41f19;
	color: #fff;
}

.tui-red-hover {
	background: #c51a15 !important;
	color: #e5e5e5;
}

.tui-btn-white {
	background: #fff;
	color: #333;
}

.tui-white-hover {
	background: #e5e5e5;
	color: #2e2e2e;
}

/*顶部下拉选择 属性*/

/*顶部下拉选择 综合*/

.tui-dropdownlist {
	width: 100%;
	position: absolute;
	background-color: #fff;
	border-bottom-left-radius: 24rpx;
	border-bottom-right-radius: 24rpx;
	overflow: hidden;
	box-sizing: border-box;
	padding-top: 10rpx;
	padding-bottom: 26rpx;
	left: 0;
	top: 88rpx;
	visibility: hidden;
	transition: all 0.2s ease-in-out;
	z-index: 999;
}

.tui-dropdownlist-show {
	visibility: visible;
}

.tui-dropdownlist-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: -1;
	transition: all 0.2s ease-in-out;
	opacity: 0;
	visibility: hidden;
}

.tui-mask-show {
	opacity: 1;
	visibility: visible;
}

.tui-dropdownlist-item {
	color: #333;
	height: 70rpx;
	font-size: 28rpx;
	padding: 0 40rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

/*顶部下拉选择 综合*/

.tui-drawer-box {
	width: 686rpx;
	font-size: 24rpx;
	overflow: hidden;
	position: relative;
	padding-bottom: 100rpx;
}

.tui-drawer-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	box-sizing: border-box;
	height: 80rpx;
}

.tui-title-bold {
	font-size: 26rpx;
	font-weight: bold;
	flex-shrink: 0;
}

.tui-location {
	margin-right: 6rpx;
}

.tui-attr-right {
	width: 70%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: right;
}

.tui-all-box {
	width: 90%;
	white-space: nowrap;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.tui-drawer-content {
	padding: 16rpx 30rpx 30rpx 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
}

.tui-input {
	border: 0;
	height: 64rpx;
	border-radius: 32rpx;
	width: 45%;
	background-color: #f7f7f7;
	text-align: center;
	font-size: 24rpx;
	color: #333;
}

.tui-phcolor {
	text-align: center;
	color: #b2b2b2;
	font-size: 24rpx;
}

.tui-flex-attr {
	flex-wrap: wrap;
	justify-content: flex-start;
}

.tui-attr-item {
	width: 30%;
	height: 64rpx;
	background-color: #f7f7f7;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 4rpx;
	box-sizing: border-box;
	border-radius: 32rpx;
	margin-right: 5%;
	margin-bottom: 5%;
}

.tui-attr-ellipsis {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	width: 96%;
	text-align: center;
}

.tui-attr-item:nth-of-type(3n) {
	margin-right: 0%;
}

.tui-attr-btnbox {
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	padding: 0 30rpx;
	background: #fff;
}

.tui-attr-safearea {
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: env(safe-area-inset-bottom);
}

.tui-safearea-bottom {
	width: 100%;
	height: env(safe-area-inset-bottom);
}

.tui-attr-btnbox::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	border-top: 1px solid #eaeef1;
	transform: scaleY(0.5) translateZ(0);
	transform-origin: 0 0;
}

.tui-drawer-btn {
	width: 47%;
	text-align: center;
	height: 60rpx;
	border-radius: 30rpx;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
}

.tui-drawerbtn-black {
	border: 1rpx solid #555;
}

.tui-drawerbtn-primary {
	background: #e41f19;
	color: #fff;
}

/* 商品列表*/

.tui-product-list {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	flex-wrap: wrap;
	box-sizing: border-box;
}

.tui-product-container {
	flex: 1;
	margin-right: 10rpx;
}

.tui-product-container:last-child {
	margin-right: 0;
}

.tui-pro-item {
	width: 100%;
	margin-bottom: 10rpx;
	background: #fff;
	box-sizing: border-box;
	border-radius: 12rpx;
	overflow: hidden;
	transition: all 0.15s ease-in-out;
}

.tui-flex-list {
	display: flex;
	margin-bottom: 1rpx !important;
}

.tui-pro-img {
	width: 100%;
	display: block;
}

.tui-proimg-list {
	width: 260rpx;
	height: 260rpx !important;
	flex-shrink: 0;
	border-radius: 12rpx;
}

.tui-pro-content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 20rpx;
}

.tui-pro-tit {
	color: #2e2e2e;
	font-size: 26rpx;
	word-break: break-all;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}

.tui-pro-price {
	padding-top: 18rpx;
}

.tui-sale-price {
	font-size: 34rpx;
	font-weight: 500;
	color: #e41f19;
}

.tui-factory-price {
	font-size: 24rpx;
	color: #a0a0a0;
	text-decoration: line-through;
	padding-left: 12rpx;
}

.tui-pro-pay {
	padding-top: 10rpx;
	font-size: 24rpx;
	color: #656565;
}

/* 商品列表*/
</style>
