/*
  基础组件props属性全局配置文件。优先级：全局配置文件props < 单独设置组件props
  温馨提示：未设置则使用组件内默认值，避免出错，请勿删减以下配置
  组件属性介绍请查看文档
*/

//组件内主色配置 
const color = {
	primary: '#5677fc',
	success: '#07c160',
	warning: '#ff7900',
	danger: '#EB0909',
	pink: '#f74d54',
	blue: '#007AFF',
	link: '#586c94'
}

const propsConfig = {
	//组件内主色配置 
	color,
	//组件名称，字体图标组件 tui-icon
	tuiIcon: {
		//组件属性值
		size: 32,
		unit: 'px',
		color: '#999'
	},
	//按钮组件 tui-button
	tuiButton: {
		height: '96rpx',
		size: 32
	},
	//列表项组件 tui-list-cell
	tuiListCell: {
		arrowColor: '#c0c0c0',
		lineColor: '#eaeef1',
		lineLeft: 44,
		padding: '26rpx 44rpx',
		color: '#333',
		size: 28
	},
	//按钮组件 tui-form-button
	tuiFormButton: {
		background: color.primary,
		color: '#fff',
		height: '96rpx',
		size: 32,
		radius: '6rpx'
	},
	//文本组件 tui-text
	tuiText: {
		size: 32,
		unit: 'rpx',
		color: ''
	},
	//输入框组件 tui-input
	tuiInput: {
		requiredColor: color.danger,
		labelSize: 32,
		labelColor: '#333',
		size: 32,
		color: '#333',
		padding: '26rpx 30rpx',
		backgroundColor: '#FFFFFF',
		radius: 0
	},
	//表单项组件 tui-form-item
	tuiFormItem: {
		padding: '28rpx 30rpx',
		labelSize: 32,
		labelColor: '#333',
		labelFontWeight: 400,
		asteriskColor: color.danger,
		background: '#fff',
		arrowColor: '#c0c0c0',
		borderColor: '#eaeef1',
		radius: '0rpx',
		position: 2
	},
	//表单校验组件 tui-form
	tuiForm: {
		tipBackgroundColor: color.pink,
		duration: 2000
	},
	//全局方法,调用 uni.$tui.toast
	toast(text, duration, success) {
		uni.showToast({
			// #ifndef MP-ALIPAY
			duration: duration || 2000,
			// #endif
			title: text || "出错啦~",
			icon: success ? 'success' : 'none'
		})
	},
	modal(title, content, showCancel, callback, confirmColor, confirmText) {
		uni.showModal({
			title: title || '提示',
			content: content,
			showCancel: showCancel,
			cancelColor: "#555",
			confirmColor: confirmColor || color.primary,
			confirmText: confirmText || "确定",
			success(res) {
				if (res.confirm) {
					callback && callback(true)
				} else {
					callback && callback(false)
				}
			}
		})
	},
	//跳转页面
	href(url, isMain) {
		if (isMain) {
			uni.switchTab({
				url: url
			})
		} else {
			uni.navigateTo({
				url: url
			});
		}
	},
	rpx2px(value) {
		return uni.upx2px(value)
	}
}

export default propsConfig