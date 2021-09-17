/**
 * 复制文本 兼容H5
 * 来自 ThorUI  www.thorui.cn | 文档地址： www.donarui.com
 * @author echo.
 * @version 1.0.0
 **/
// #ifdef H5
import ClipboardJS from "./clipboard.min.js"
// #endif
const thorui = {
	/**
	 * data 需要复制的数据
	 * callback 回调
	 * e 当用户点击后需要先请求接口再进行复制时，需要传入此参数，或者将异步请求转为同步 （H5端）
	 * **/
	getClipboardData: function(data,callback,e) {
		// #ifdef APP-PLUS || MP
		uni.setClipboardData({
			data: data,
			success(res) {
				("function" == typeof callback) && callback(true)
			},
			fail(res) {
				("function" == typeof callback) && callback(false)
			}
		})
		// #endif

		// #ifdef H5
		let event = window.event || e || {}
		let clipboard = new ClipboardJS("", {
			text: () => data
		})
		clipboard.on('success', (e) => {
			("function" == typeof callback) && callback(true)
			clipboard.off('success')
			clipboard.off('error')
			clipboard.destroy()
		});
		clipboard.on('error', (e) => {
			("function" == typeof callback) && callback(false)
			clipboard.off('success')
			clipboard.off('error')
			clipboard.destroy()
		});
		clipboard.onClick(event)
		// #endif
	}
};

export default {
	getClipboardData: thorui.getClipboardData
};


