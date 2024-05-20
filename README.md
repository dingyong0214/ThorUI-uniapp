 <font color="#5677fc">`开源不易，需要鼓励。给 ThorUI项目点个 star吧`</font> [GitHub](https://github.com/dingyong0214/ThorUI-uniapp)

# ThorUI
ThorUI组件库，uni-app版本，v3编译，支持nvue uni-app编译模式（原weex编译模式），easycom组件模式（无需手动引入，开发工具自带智能感知）

|  ![微信小程序](https://thorui.cn/img/applets.jpg) |![H5二维码](https://thorui.cn/img/h5_qrcode.png)  |![QQ小程序](https://thorui.cn/img/qq_applets.png)  |![Android](https://thorui.cn/img/thorui_apk.png)  |![ThorUI示例](https://thorui.cn/img/thorui-extend.jpg)  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|  微信小程序 |H5二维码  | QQ小程序  | Android App  |ThorUI示例 |

---

## 网站介绍

[https://www.thorui.cn/](https://www.thorui.cn/)

---

## ThorUI组件文档

[https://thorui.cn/doc/](https://thorui.cn/doc/)

---

## 交流群

<font color="#5677fc">`QQ群1：745733024`</font>

<font color="#5677fc">`QQ群2：881906325`</font>

<font color="#5677fc">`QQ群3：605135318`</font>

<font color="#5677fc">`QQ群4：928308676`</font>

<font color="#5677fc">`会员群：加入会员可进`</font>

---
 
## 更新日志

### 3.0.0（2024-05-20）

1.新增 tui-virtual-table (虚拟化表格) 组件。

2.新增 tui-network-alert（网络状态提示）组件。

3.tui-tab（标签页）组件优化，滑块样式优化，新增sliderType属性可控制滑类型为块状。

4.tui-form（表单验证）组件优化，修复已知问题。

5.tui-tab（标签页）组件优化，tabs 数据格式优化，支持对象数组，显示文本key值可通过属性field指定。

6.tui-datetime（日期时间选择器）组件优化，修复已知问题。

7.tui-picker（选择器）组件优化，修复已知问题。

8.tui-tabs（标签页）组件优化，新增属性可指定显示文本数据key值，change事件新增返回item数据。

9.tui-picture-cropper（图片裁剪）组件优化，修复微信小程序端返回base64内容出错的问题。

10.tui-cropper（图片裁剪）组件优化，修复微信小程序端返回base64内容出错的问题。

11.tui-image-cropper（图片裁剪）组件优化，修复微信小程序端返回base64内容出错的问题。

12.tui-fab（悬浮按钮）组件优化，支持显示在顶部，新增属性可设置z-index值。

13.tui-checkbox（多项选择器）组件 优化，修复已知问题。

14.tui-radio（单项选择器）组件 优化，修复已知问题。

15.tui-dropdown-list（下拉列表）组件优化，修复已知问题。

16.tui-datetime（日期时间选择器）组件优化，修复已知问题。

17.tui-textarea (多行输入框) 组件优化，修复已知问题。

18.tui-switch（开关选择器）组件优化，修复已知问题。

19.tui-upload（图片上传）组件优化，新增属性控制删除图片时是否触发 complete 事件。

20.tui-slide-view（滑动菜单）组件优化，新增支持支付宝、QQ、头条、百度等其他小程序。

21.tui-radio（单项选择器）优化，修复编译到支付宝小程序不显示的问题。

22.tui-tab（标签页）组件优化，修复更新tab数据后滑动条可能错位的问题。

23.tui-card（卡片）组件优化，新增部分属性，详见文档。

24.tui-footer（页脚）组件优化，新增部分属性，详见文档。

25.tui-actionsheet（操作菜单）组件优化，新增部分属性，详见文档。

26.tui-fab（悬浮按钮）组件优化，新增部分属性，详见文档。

27.tui-swipe-action（滑动菜单）组件优化，新增部分属性，详见文档。

28.tui-cascade-selection（级联选择）组件优化，新增部分属性用于指定级联数据中的key。

29.tui-picker（选择器）组件优化，新增属性用于指定pickerData数据中的key。

30.tui-select 选择框 组件优化，新增部分属性用于指定list数据中的key。

31.tui-slide-view（滑动菜单）组件优化，新增部分属性，详见文档。

32.tui-data-checkbox（数据选择器）组件优化，新增部分属性，详见文档。

33.tui-gallery（图片预览）组件优化，新增部分属性，详见文档。

34.tui-divide-list（分隔列表）组件优化，新增部分属性，详见文档。

35.优化部分已知问题。


### 2.9.5（2023-11-04）

1.新增 tui-virtual-list（虚拟列表）组件。

2.新增 tui-notice-vertical（纵向通告栏）组件。

3.新增 tui-roll-news（滚动消息）组件。

4.全局配置（tui-config）文件调整。

5.tui-code-input（验证码输入框）组件优化，修复编译到支付宝小程序输入未触发事件的问题。

6.tui-popup（弹层动画）组件优化，修复已知问题。

7.tui-form（表单验证）组件优化，调整校验方法，示例优化，新增部分方法。

8.tui-form-item（表单项）组件优化，新增部分属性，新增结合 tui-form（表单验证）组件提示校验错误信息功能。

9.tui-form-button（按钮）组件优化，修复使用 btnSize 属性可能导致宽度不正确的问题。

10.tui-input（输入框） 组件优化，修复部分平台初始化时设置默认值placeholder可能未消失的问题。

11.tui-textarea (多行输入框) 组件优化，修复部分平台初始化时设置默认值placeholder可能未消失的问题。

12.horizontal-scroll 横向滚动示例优化，修复滚动条位置不正确的问题，调整样式，优化动画效果。

13.tui-slide-view（滑动菜单）组件优化，新增属性设置点击按钮后是否立即关闭菜单。

14.tui-picker（选择器）组件优化，修复部分已知问题。

15.tui-datetime（日期时间选择器）组件优化，新增 type=0 支持只选年份。

16.tui-upload（图片上传）组件优化，修复调整宽高可能导致样式出错的问题。

17.tui-datetime（日期时间选择器）组件优化， 修复小时/分/秒选择区间数据更新时未重新初始化的问题，优化部分已知问题。

18.tui-button（按钮）组件优化，修复vue3下部分事件不生效的问题。

19.tui-form-button（按钮）组件优化，修复vue3下部分事件不生效的问题。

20.tui-scale-horizontal（横向刻度尺滚动选择器）组件优化，修复设置宽度刻度滑动设置可能不正确的问题。

21.优化部分已知问题。


### 2.9.1（2023-07-21）

1.tui-picker（选择器）组件优化，修复初始化可能显示不正确的问题。

2.tui-datetime（日期时间选择器）组件优化，修复已知问题。

3.tui-sticky（吸顶容器）组件优化，修复已知问题。

4.tui-countdown（倒计时）组件优化，调整结束逻辑。

5.tui-rate（评分）组件优化。

6.tui-datetime（日期时间选择器）组件优化，新增属性设置z-index值。

7.tui-picker（选择器）组件优化，新增属性设置z-index值。

8.tui-slider（滑动选择器）组件优化，uni-app版支持在pc端使用。

9.tui-drag 拖拽排序 组件优化，uni-app版支持在pc端使用。

10.tui-slide-verify 滑动验证码 组件优化，uni-app版支持在pc端使用。

11.tui-rotate-verify 旋转图片验证 组件优化，uni-app版支持在pc端使用。

12.tui-upload（图片上传）组件优化，新增upload方法进行上传，此方法可满足更多上传需求，具体使用请查看文档。

13.tui-modal（弹框）组件优化，新增属性设置遮罩颜色，是否显示遮罩等。

14.tui-input（输入框）组件优化，修复小程序端圆角全局配置失效的问题。

15.tui-calendar（日历）组件优化，当最大日期小于今天时调整默认显示日期。

16.tui-actionsheet（操作菜单）组件优化，新增属性设置遮罩背景色。

17.ThorUI 文档优化，请刷新查看。

18.优化部分已知问题。

### 2.9.0（2023-06-20）

1.tui-lottie（动画）组件优化。

2.tui-radio（单项选择器）组件优化，修复在小程序端触发两次change事件的问题。

3.tui-checkbox（多项选择器）组件优化。

4.tui-navigation-bar（自定义导航栏）组件优化，支持设置持渐变色，详见示例。

5.tui-searchbar（搜索栏）组件优化, 新增默认插槽自定义设置搜索框左侧内容。

6.tui-icon（图标）组件优化，修复已知问题。

7.tui-countdown（倒计时）组件优化， 新增reset方法重置倒计时。

8.tui-picker（选择器）组件优化，修复已知问题。

9.tui-datetime（日期时间选择器）组件优化，修复已知问题。

10.tui-overflow-hidden (内容超出隐藏) 组件示例优化，新增展开收起示例。

11.tui-input（输入框）组件优化，修复 type=number 时数据过大显示出错的问题。

12.tui-button（按钮）组件优化，修复behaviors可能导致编译报错的问题。

13.tui-bottom-navigation 底部导航菜单 组件优化。

14.tui-form-button（按钮）组件优化，修复已知问题。

15.tui-select（选择框）组件优化，新增属性 设置item项图标背景色。

16.tui-slide-view（滑动菜单）组件优化，新增部分属性。

17.tui-list-cell（列表项）组件优化，新增marginTop、marginBottom属性。

18.tui-loading (加载动画) 组件优化，新增属性设置是否显示遮罩。

19.tui-searchbar（搜索栏）组件优化H5端需要点两次才能弹起键盘的问题。

20.新增[租房模板](https://thorui.cn/doc/docs/template/house.html)，付费模板，会员有折扣，包含如下页面：
 
 1）登录、注册、注册验证码输入、忘记密码、设置密码、用户服务协议。
 
 2）首页、收藏、消息、我的。
 
 3）聊天、搜索列表、筛选、房源详情、房源预定、支付结果。
 
 4）账号信息、修改昵称、修改头像、我的钱包、银行卡列表、添加银行卡、账单列表、消息通知、账号安全、关于我们、租赁记录、打分评价。
 
21.优化其他已知问题。

### 2.8.0（2023-05-18）

1.新增全局配置文件，常用组件部分属性支持全局配置，具体查看文档，支持全局配置主题色。

2.表单组件优化，移除vue3下behaviors限制，修复结合原生表单无法获取值的问题。

3.tui-form-field 组件优化，修复已知问题。

4.tui-popup（弹层动画）组件优化，默认值放入组件内部，无需重复传值。

5.tui-upload（图片上传）组件优化，新增属性设置选择框背景色，边框，圆角值，加号颜色等。

6.tui-textarea (多行输入框) 组件优化，新增属性设置圆角值、边框颜色。

7.tui-text（文本）组件优化，新增un-shrink属性，flex布局中是否取消收缩。

8.tui-data-checkbox（数据选择器）组件优化，新增属性设置item项默认边框颜色。

9.tui-bottom-popup（底部弹出层）组件优化，新增属性设置是否需要判断底部安全区域。

10.tui-tabs（标签页）组件优化，属性itemWidth默认值改为空，不传值时组件内部自动计算item项宽度。

11.tui-tabs（标签页）组件优化，新增属性设置当前选项卡字体缩放大小（倍数）。

12.tui-form-item（表单项）组件优化，新增属性设置label文本字重。

13.tui-picker（选择器）组件优化，修复已知问题，部分问题需更新开发工具版本至 Hbuilder X 3.7.13 alpha+。

14.tui-datetime（日期时间选择器）组件优化，修复已知问题，部分问题需更新开发工具版本至 Hbuilder X 3.7.13 alpha+。

15.tui-tab（标签页）组件优化，新增属性设置当前选项卡字体缩放大小（倍数）。

16.tui-no-data（暂无数据）组件优化，新增marginTop属性，设置外间距，新增 imgBottom 属性设置图标与提示文本间距。

17.tui-form 组件优化，部分属性类型调整。

18.tui-button（按钮）组件优化， 新增属性设置按钮大小，优先级高于width/height。

19.tui-form-button（按钮）组件优化， 新增属性设置按钮大小，优先级高于width/height。

20.tui-waterfall（瀑布流）组件优化，修复已知问题。

21.tui-calendar（日历）组件优化，修复原生小程序版本初始化出错的问题。

22.tui-data-checkbox（数据选择器）组件优化，item项默认padding值调整。

23.tui-input（输入框） 组件优化，新增属性设置圆角值、边框颜色。

24.tui-rotate-verify（旋转图片验证）组件优化，部分属性调整，详见文档。

25.tui-list-cell（列表项）组件优化调整，部分属性重新调整并支持全局配置。

26.tui-calendar（日历）组件优化，确定按钮调整，主色支持全局配置。

27.tui-icon（图标）组件优化，部分属性支持全局配置。

28.tui-alert（弹框）组件优化，主色支持全局配置。

29.tui-badge（徽章）组件优化，主色支持全局配置。

30.tui-cascade-selection（级联选择器）组件优化，主色支持全局配置。

31.tui-circular-progress（圆形进度条）组件优化，主色支持全局配置。

32.tui-datetime（日期时间选择器）组件优化，确定按钮主色支持全局配置。

33.tui-fab（悬浮按钮）组件优化，主色支持全局配置。

34.tui-footer（页脚）组件优化，链接颜色支持全局配置。

35.tui-modal  组件优化，主色支持全局配置。

36.tui-button 组件优化，部分属性以及主色支持全局配置。

37.tui-no-data（暂无数据）组件优化，主色支持全局配置。

38.tui-rate（评分）组件优化，主色支持全局配置。

39.tui-round-progress（圆形进度条）组件优化，主色支持全局配置。

40.tui-section（标题栏）组件优化，主色支持全局配置。

41.tui-steps（步骤条）组件优化，主色支持全局配置。

42.tui-tabbar（标签栏）组件优化，主色支持全局配置。

43.tui-tag（标签）组件优化，主色支持全局配置。

44.tui-upload（图片上传）组件优化，主色支持全局配置。

45.tui-form-button（按钮）组件优化，部分属性支持全局配置。

46.tui-input（输入框）组件优化，部分属性支持全局配置。

47.tui-form-item（表单项）组件优化，部分属性支持全局配置。

48.tui-form（表单验证）组件优化，部分属性支持全局配置。

49.tui-code-input（验证码输入框）组件优化，主色支持全局配置。

50.tui-countdown-verify（验证码倒计时）组件优化，主色支持全局配置。

51.tui-cubic-bezier（贝塞尔曲线）组件优化，主色支持全局配置。

52.tui-data-checkbox（数据选择器）组件优化，主色支持全局配置。

53.tui-digital-keyboard（数字键盘），主色支持全局配置。

54.tui-digital-roller（数字滚轮）组件优化，主色支持全局配置。

55.tui-divide-list（分隔列表组件）组件优化，主色支持全局配置。

56.tui-grade（评分）组件优化，主色支持全局配置。

57.tui-index-list（索引列表）组件优化，主色支持全局配置。

58.tui-link（超链接）组件优化，主色支持全局配置。

59.tui-msg（提示页）组件优化，主色支持全局配置。

60.tui-notice-bar（通告栏）组件优化，主色支持全局配置。

61.tui-pagination（分页器）组件优化，主色支持全局配置。

62.tui-picker（选择器）组件优化，主色支持全局配置。

63.tui-progress（进度条）组件优化，主色支持全局配置。

64.tui-radio（单项选择器）组件优化，主色支持全局配置。

65.tui-rotate-verify（旋转图片验证）组件优化，主色支持全局配置。

66.tui-scale-horizontal（横向刻度尺滚动选择器）组件优化，主色支持全局配置。

67.tui-scale-vertical（纵向刻度尺滚动选择器）组件优化，主色支持全局配置。

68.tui-searchbar（搜索栏）组件优化，主色支持全局配置。

69.tui-select（选择框）组件优化，主色支持全局配置。

70.tui-slide-verify（滑动验证码）组件优化，主色支持全局配置。

71.tui-slide-view（滑动菜单）组件优化，主色支持全局配置。

72.tui-slider（滑动选择器）组件优化，主色支持全局配置。

73.tui-swiper-dot（swiper指示点）组件优化，主色支持全局配置。

74.tui-switch（开关选择器）组件优化，主色支持全局配置。

75.tui-tab（标签页）组件优化，主色支持全局配置。

76.tui-text（文本）组件优化，部分属性支持全局配置。

77.tui-textarea (多行输入框) 组件优化，主色支持全局配置。

78.tui-week-date（周日期选择）组件优化，主色支持全局配置。

79.优化部分已知问题。

### 2.2.0（2023-04-21）

1.新增 tui-section（标题栏）组件。

2.新增 tui-white-space（上下留白）组件。

3.新增 tui-wing-blank（左右两侧留白）组件。

4.新增 tui-link（超链接）组件。

5.新增 tui-code-input（验证码输入框）组件。

6.新增 tui-org-horizontal 组织架构树（横向）组件。

7.新增 tui-lottie（动画）组件。

8.会员商城模板优化，调整部分样式，修复已知问题。

9.tui-drag 拖拽排序 组件优化，修复vue2下编译到app初始化出错的问题。

10.tui-lazyload-img（图片懒加载）示例优化，修复已知问题。

11.tui-row/tui-col（栅格布局）组件优化，修复已知问题。

12.tui-org-tree 组织架构树 组件优化，新增 fields 属性修改treeData数据约定key名称。

13.tui-select（选择框）组件优化，属性list 支持 传入 disabled 控制item项是否可选择。

14.tui-numberbox（数字框）组件优化，修复已知问题。

15.tui-list-view（列表）组件优化，新增属性设置圆角值。

16.tui-list-cell（列表Item）组件优化调整，圆角属性 radius 调整，传具体值，自由设置圆角大小。

17.tui-button（按钮）组件优化，小程序端新增部分属性/事件，详见文档。

18.tui-form-button（按钮）组件优化，小程序端新增部分属性/事件，详见文档。

19.tui-searchbar（搜索栏）组件优化，所有px单位改为rpx。

20.tui-textarea (多行输入框) 组件优化，修复已知问题。

21.tui-checkbox（多项选择器）组件优化，新增属性控制当设置checked属性时是否触发父级change方法。

22.tui-sticky-wxs（吸顶容器）组件优化，调整wxs中对H5的判断。

23.tui-circular-progress（圆形进度条）组件优化，修复在vue3下编译到小程序可能不显示的问题。

24.tui-poster（绘制海报）组件优化，修复在vue3下编译到小程序可能不显示的问题。

25.tui-searchbar（搜索栏）组件优化，新增外部调用方法，重置组件。

26.优化部分已知问题。

### 2.1.0（2023-04-03）

1.tui-dropdown-list（下拉列表）组件优化，新增mask遮罩，具体可查看文档使用。

2.tui-datetime（日期时间选择器）组件优化，时分秒选择数据新增props属性配置，可设置自定义数组值进行选择。

3.tui-datetime（日期时间选择器）组件优化，修复vue3下设置默认值可能无效的问题。

4.tui-datetime（日期时间选择器）组件 优化，修复点击确认可能无返回值且导致代码循环执行的问题。

5.tui-picker（选择器）组件优化，修复已知问题。

6.tui-notice-bar（通告栏）组件优化。

7.tui-vcode（图形验证码）组件优化，修复编译到小程序可能不显示的问题。

8.tui-input（输入框） 组件优化，修复已知问题。

9.tui-waterfall 瀑布流 组件优化，调整uni-app组件编译到小程序端出现警告的问题，注：此组件不向下兼容，不能直接替换使用，需要重新看文档和示例进行调整。

10.tui-icon（图标） 组件优化，新增扩展图标示例，请更新组件查看文档和示例使用。

11.tui-tabbar（标签栏）组件优化，支持字体图标配置，具体使用可参考文档和示例。

12.tui-charts-column（柱状图表）组件优化，支持负数展示，具体可查看文档和示例。

13.tui-charts-bar（横向柱状图表）组件优化，支持负数展示，具体可查看文档和示例。

14.tui-charts-line（折线图表）组件示例新增负数展示。

15.tui-switch（开关选择器）组件优化，修复vue3下编译到H5，父组件有tui-label组件时导致可能无法选中的问题。

16.tui-drag 拖拽排序 组件优化，修复vue3下编译到小程序事件失效的问题，此bug为uniapp编译bug，待官方修复此问题再进一步优化。

17.新增个人/会员中心模板，付费模板，会员有折扣，包含如下页面：

 1）个人中心01。
 
 2）个人中心02。
 
 3）我的会员03。
 
 4）会员中心04。
 
 5）个人中心05
 
 6）个人中心06
 
18.优化其他已知问题。


### V2.0.0（2022-10-05）

1.新增 tui-text（文本）组件。

2.新增 tui-form-item（表单项） 组件。

3.tui-charts-radar 雷达图表 组件优化，新增lineBold属性设置线条是否加粗。

4.tui-picker 选择器 组件优化，修复已知问题。

5.修复preview布局在ios16上兼容性问题。

6.tui-input（输入框） 组件优化，修复已知问题，新增min和max属性，当type=number、digit时生效。

7.tui-picture-cropper 图片裁剪组件优化，修复已知问题。

8.tui-slider 滑动选择器 组件优化，修复已知问题。

9.tui-poster（绘制海报）组件优化，修复组件编译到微信小程序生成海报失败的问题。

10.tui-numberbox（数字框）组件优化，新增样式设置，详见文档。

11.tui-textarea (多行输入框) 组件优化，修复设置属性textRight无效的问题。

12.tui-index-list（索引列表）组件优化，修复uniapp版本vue3下数据无法显示问题，此处调整无法向下兼容，请仔细阅读文档做调整。

13.tui-countdown（倒计时）组件优化，可调用endOfTime方法中断倒计时。

14.tui-drag 拖拽排序 组件优化，修复uni-app版组件编译到微信小程序内容宽度显示不正确的问题，修复vue3下H5和app端拖拽报错的问题。

15.新增 登录注册模版01 （付费模版，会员有折扣），详见文档说明。

16.新增 登录注册模版02 （付费模版，会员有折扣），详见文档说明。

17.新增 登录注册模版03 （付费模版，会员有折扣），详见文档说明。

18.新增 登录注册模版04 （付费模版，会员有折扣），详见文档说明。

19.登录注册模版01~04包含以下页面：

 1）密码登录页面。
 
 2）验证码登录页面。
 
 3）注册页面。
 
 4）重置密码页面。
 
 5）设置密码页面。

20.新增 生鲜商城模版 （付费模版，会员有折扣），详见文档说明，模版包含以下页面：

 1）生鲜商城首页。
 
 2）分类页面。
 
 3）购物车页面。
 
 4）我的 页面。
 
 5）登录页面。
 
 6）注册页面。
 
 7）用户协议页面。
 
 8）搜索页面。
 
 9）搜索列表页面。
 
 10）商品详情页面。
 
 11）用户评价页面。
 
 12）确认订单页面。
 
 13）收货地址页面。
 
 14）添加/编辑地址页面。
 
 15）付款结果页面。
 
 16）我的订单页面。
 
 17）订单详情页面。
 
 18）评价页面。
 
 19）足迹页面。
 
 20）收藏页面。
 
 21）设置页面。
 
 22）个人信息页面。
 
 23）常见问题页面。
 
 24）领券中心页面。
 
 25）优惠券页面。
 
 26）退货退款页面。
 
 27）退款/售后页面。
 
 28）退款详情页面。
 
 29）积分页面。
 
 30）物流信息页面。
 
 31）修改昵称页面。
 
 32）更换头像页面。
 
 33）发票页面。
 
 34）选择地址页面。
 
 35）失效券页面。
 
 36）关于我们页面。
 
21.优化部分已知问题。

### V1.9.0 (2022-05-28)

1.card 卡片组件优化，当header部分内容不传值时可使用默认插槽自定义内容。

2.修复组件使用wxs初始化报错的问题。

3.优化部分组件vue3下兼容问题。

4.商城模板优化，调整vue3下样式出错问题。

5.优化并删除filters使用。

6.tui-countdown 倒计时 组件优化，支持支付宝、百度、QQ、字节小程序。

7.tui-divider 分隔符 组件优化，支持支付宝、百度、QQ、字节小程序。

8.tui-scroll-top 回到顶部 组件优化，支持支付宝、百度、QQ、字节小程序。

9.tui-alert 弹框 组件优化，支持支付宝、百度、QQ、字节小程序。

10.tui-no-data 暂无数据 组件优化，支持支付宝、百度、QQ、字节小程序。

11.tui-toast 提示 组件优化，支持支付宝、百度、QQ、字节小程序。

12.tui-datetime 日期时间选择器 组件优化，支持支付宝、百度、QQ、字节小程序。

13.tui-fab 悬浮按钮 组件优化，支持支付宝、百度、QQ、字节小程序。

14.tui-tabbar 标签栏 组件优化，支持支付宝、百度、QQ、字节小程序。

15.tui-tabs 标签页 组件优化，支持支付宝、百度、QQ、字节小程序。

16.tui-collapse 折叠面板 组件优化，支持支付宝、百度、QQ、字节小程序。

17.tui-upload 图片上传 组件优化，支持支付宝、百度、QQ、字节小程序。

18.tui-skeleton 骨架屏 组件优化，支持支付宝、百度、QQ、字节小程序。

19.tui-calendar 日历 组件优化，支持支付宝、百度、QQ、字节小程序。

20.tui-steps 步骤条 组件优化，支持支付宝、百度、QQ、字节小程序。

21.tui-drawer 抽屉 组件优化，支持支付宝、百度、QQ、字节小程序。

22.tui-swipe-action 滑动菜单 组件优化，支持支付宝、百度、QQ、字节小程序。

23.tui-bottom-navigation 底部导航菜单 组件优化，支持支付宝、百度、QQ、字节小程序。

24.tui-cascade-selection 级联选择 组件优化，支持支付宝、百度、QQ、字节小程序。

25.tui-circular-progress 圆形进度条 组件优化，支持支付宝、百度、QQ、字节小程序。

26.tui-navigation-bar 自定义导航栏 组件优化，支持支付宝、百度、QQ、字节小程序。

27.tui-bubble-popup 气泡弹框 组件优化，支持支付宝、百度、QQ、字节小程序。

28.tui-image-group 图片组合 组件优化，支持支付宝、百度、QQ、字节小程序。

<font color="#5677fc">`扫码体验[ThorUI组件库]小程序`</font>

![ThorUI组件库](https://thorui.cn/img/applets_sm.jpg) 

========================

【ThorUI示例V1.4.0】更新：

1.修复组件使用wxs初始化报错的问题。

2.内嵌ucharts图表，当thorui图表无法满足时推荐使用。

3.tui-gallery 图片预览 组件优化，修复索引显示可能出错的问题。

4.优化部分vue3下兼容问题。

5.tui-label 标签 组件优化，支持支付宝、百度、QQ、字节小程序。

6.tui-picker 选择器 组件优化，支持支付宝、百度、QQ、字节小程序。

7.tui-swiper-dot swiper指示点 组件优化，支持支付宝、百度、QQ、字节小程序。

8.tui-progress 进度条 组件优化，支持支付宝、百度、QQ、字节小程序。

9.tui-index-list 索引列表 组件优化，支持支付宝、百度、QQ、字节小程序。

10。tui-gallery 图片预览 组件优化，支持支付宝、百度、QQ、字节小程序。

11.tui-loading 加载动画 组件优化，支持支付宝、百度、QQ、字节小程序。

12.tui-dialog 对话框 组件优化，支持支付宝、百度、QQ、字节小程序。

13.tui-msg 提示页 组件优化，支持支付宝、百度、QQ、字节小程序。

14.tui-searchbar 搜索栏 组件优化，支持支付宝、百度、QQ、字节小程序。

15.tui-copy-text 长按复制 组件优化，支持支付宝、百度、QQ、字节小程序。

16.tui-tab 标签页 组件优化，支持支付宝、百度、QQ、字节小程序。

17.tui-cubic-bezier 贝塞尔曲线 组件优化，支持支付宝、百度、QQ、字节小程序。

18.tui-drag 拖拽排序 组件优化，支持支付宝、百度、QQ小程序、字节小程序。

19.tui-slide-verify 滑动验证码 组件优化，支持支付宝、百度、QQ、字节小程序。

20.tui-digital-keyboard 数字键盘 组件优化，支持支付宝、百度、QQ、字节小程序。

21.tui-digital-roller 数字滚轮 组件优化，支持支付宝、百度、QQ、字节小程序。

22.tui-timer 计时器 组件优化，支持支付宝、百度、QQ、字节小程序。

23.tui-table 表格 组件优化，支持支付宝小程序。

24.tui-grade 评分 组件优化，支持支付宝、百度、QQ、字节小程序。

25.tui-countdown-verify 验证码倒计时 组件优化，支持支付宝、百度、QQ、字节小程序。

26.tui-slider 滑动选择器 组件优化，支持支付宝、百度、QQ、字节小程序。

27.tui-rotate-verify 旋转图片验证 组件优化，支持支付宝、百度、QQ、字节小程序。

28.tui-scale-horizontal 刻度尺滚动选择器 组件优化，支持支付宝、百度、QQ、字节小程序。

29.tui-scale-vertical 刻度尺滚动选择器 组件优化，支持支付宝、百度、QQ、字节小程序。

30.tui-waterfall 瀑布流 组件优化，支持支付宝、百度、QQ、字节小程序。

31.tui-lazyload-img 图片懒加载 组件优化，支持支付宝、百度、QQ、字节小程序。

32.tui-overflow-hidden 内容超出隐藏 组件优化，支持支付宝、百度、QQ、字节小程序。

33.tui-org-tree 组织架构树 组件优化，支持支付宝、百度、QQ、字节小程序。

34.tui-landscape 压屏窗 组件优化，支持支付宝、百度、QQ、字节小程序。

35.tui-tree-view 树型菜单 组件优化，支持支付宝、百度、QQ、字节小程序。

36.tui-charts-column 柱状图表 组件优化，支持支付宝、百度、QQ、字节小程序。

37.tui-charts-bar 横向柱状图表 组件优化，支持支付宝、百度、QQ、字节小程序。

38.tui-charts-line 折线图表 组件优化，支持支付宝、百度、QQ、字节小程序。

39.tui-charts-pie 饼状图表 组件优化，支持支付宝、百度、QQ、字节小程序。

40.tui-charts-area 面积图表 组件优化，支持支付宝、百度、QQ、字节小程序。

41.tui-charts-funnel 漏斗图表 组件优化，支持支付宝、百度、QQ、字节小程序。

42.tui-charts-scatter 散点图表 组件优化，支持支付宝、百度、QQ、字节小程序。

43.tui-charts-radar 雷达图表 组件优化，支持支付宝、百度、QQ、字节小程序。

44.tui-banner-arc Banner底部圆弧效果 组件优化，支持支付宝、百度、QQ、字节小程序。

45.tui-data-checkbox 数据选择器 组件优化，支持支付宝、百度、QQ、字节小程序。

46、tui-poster 绘制海报 组件优化，支持支付宝、百度、QQ、字节小程序。

=====================

<font color="#5677fc">`扫码体验[ThorUI示例]小程序`</font>

![ThorUI示例](https://thorui.cn/img/thorui-extend__sm.jpg) 

=====================

其中【ThorUI示例】项目只对会员开放。点此 [开通会员](https://thorui.cn/doc/docs/member.html)。
 

### V1.8.0 (2022-04-19)

1.tui-countdown（倒计时）组件优化，修复已知问题。

2.tui-button（按钮）组件优化，支持支付宝、百度、QQ、字节小程序。

3.tui-tag（标签）组件优化，支持支付宝、百度、QQ、字节小程序。

4.tui-badge（徽章）组件优化，支持支付宝、百度、QQ、字节小程序。

5.tui-list-view（列表）组件优化，支持支付宝、百度、QQ、字节小程序。

6.tui-list-cell（列表Item）组件优化，支持支付宝、百度、QQ、字节小程序。

7.tui-card（卡片）组件优化，支持支付宝、百度、QQ、字节小程序。

8.tui-grid（宫格）组件优化，支持支付宝、百度、QQ、字节小程序。

9.tui-grid-item（宫格Item）组件优化，支持支付宝、百度、QQ、字节小程序。

10.tui-loading（加载中）组件优化，支持支付宝、百度、QQ、字节小程序。

11.tui-loadmore（加载更多）组件优化，支持支付宝、百度、QQ、字节小程序。

12.tui-nomore（没有更多了）组件优化，支持支付宝、百度、QQ、字节小程序。

13.tui-footer（页脚）组件优化，支持支付宝、百度、QQ、字节小程序。

14.tui-tips（消息提示）组件优化，支持支付宝、百度、QQ、字节小程序。

15.tui-sticky（吸顶容器）组件优化，支持支付宝、百度、QQ、字节小程序。

16.tui-keyboard（数字键盘）组件优化，支持支付宝、百度、QQ、字节小程序。

17.tui-keyboard-input（数字键盘输入框）组件优化，支持支付宝、百度、QQ、字节小程序。

18.tui-time-axis（时间轴）组件优化，支持支付宝、百度、QQ、字节小程序。

19.tui-timeaxis-item（时间轴Item）组件优化，支持支付宝、百度、QQ、字节小程序。

20.tui-top-dropdown（顶部弹出层）组件优化，支持支付宝、百度、QQ、字节小程序。

21.tui-bottom-popup（底部弹出层）组件优化，支持支付宝、百度、QQ、字节小程序。

22.tui-dropdown-list（下拉列表）组件优化，支持支付宝、百度、QQ、字节小程序。

23.tui-actionsheet（操作菜单）组件优化，支持支付宝、百度、QQ、字节小程序。

24.tui-numberbox（数字框）组件优化，支持支付宝、百度、QQ、字节小程序。

25.tui-rate（评分）组件优化，支持支付宝、百度、QQ、字节小程序。 

26.tui-modal（弹框）组件优化，支持支付宝、百度、QQ、字节小程序。 

<font color="#5677fc">`扫码体验[ThorUI组件库]小程序`</font>

![ThorUI组件库](https://thorui.cn/img/applets_sm.jpg) 

========================

【ThorUI示例V1.3.0】更新：

1.新增 tui-banner-arc（banner底部圆弧效果）组件。

2.新增 tui-data-checkbox（数据选择器）组件。

3.新增 tui-charts-area（面积图表-css版）组件。

4.新增 tui-charts-funnel（漏斗图表-css版）组件。

5.新增 tui-charts-scatter（散点图表-css版）组件。

6.新增 tui-charts-radar（雷达图表-css版）组件。

7.新增 tui-poster（绘制海报）组件，配置数据绘制海报。

8.小程序端 tui-input（输入框） 组件优化，修复已知问题。

9.tui-tab（标签页）组件优化，修复已知问题。

10.其他已知问题优化。

=====================

<font color="#5677fc">`扫码体验[ThorUI示例]小程序`</font>

![ThorUI示例](https://thorui.cn/img/thorui-extend__sm.jpg) 

=====================

其中【ThorUI示例】项目只对会员开放。点此 [开通会员](https://thorui.cn/doc/docs/member.html)。
 

### V1.7.2 (2022-02-25)

1.tui-time-axis（时间轴）组件优化，新增属性来设置节点层级。

2.tui-steps（步骤条）组件优化，字体图标支持设置字体大小。

3.tui-datetime（日期时间选择器）组件优化，新增属性 maskClosable 来设置是否可点击遮罩关闭选择器。

4.tui-datetime（日期时间选择器）组件优化，优化微信小程序端快速滚动点击确定按钮时数据未更新的问题。

5.tui-datetime （日期时间选择器）组件优化，可设置标题。

6.优化tui-numberbox组件，修复数据类型问题。

7.优化tui-tabs（标签页）组件，可控制底部滑块是否显示。

8.微信小程序tui-tabbar（标签栏）组件优化，修复页面路径传值错误的问题。

9.tui-calendar（日历）组件优化，选择日期时显示标题内容可配置。

10.tui-cascade-selection（级联选择器） 默认选中优化，当一次性传入所有数据时默认选项传值可为字符串数组，如：['安徽省','阜阳市','颍上县']。

11.tui-skeleton（骨架屏）组件优化，加入背景动画效果。

12.tui-upload（上传组件优化），新增属性控制删除图片时是否弹框确认。

13.已知问题优化。

<font color="#5677fc">`扫码体验[ThorUI组件库]小程序`</font>

![ThorUI组件库](https://thorui.cn/img/applets_sm.jpg) 

========================

【ThorUI示例V1.2.2】更新：

1.tui-index-list（索引列表）组件优化，修复App端右侧索引随页面滚动的bug。

2.tui-textarea (多行输入框) 组件优化，修复初始化赋值时计数错误问题。

3.tui-picker（选择器）组件优化，优化微信小程序端快速滚动点击确定按钮时数据未更新的问题。

4.tui-utils.js（工具库）优化，优化日期格式化方法，新增isMs（时间戳精度是否为毫秒）参数。（当 type=2 精度为秒时，参数isMs需要传入false）

5.tui-picker（选择器）组件优化，新增属性 maskClosable 来设置是否可点击遮罩关闭选择器。

6.新增 tui-week-date（周日期选择）组件。

7.新增 tui-vcode（验证码）组件。

8.新增 tui-divide-list（分隔列表组件）。

9.新增 tui-select（选择框）组件。

10.新增 tui-amount-inwords（数字金额转大写）组件。

11.已知问题优化。

=====================

<font color="#5677fc">`扫码体验[ThorUI示例]小程序`</font>

![ThorUI示例](https://thorui.cn/img/thorui-extend__sm.jpg) 

=====================

其中【ThorUI示例】项目只对会员开放。点此 [开通会员](https://thorui.cn/doc/docs/member.html)。
 

### V1.7.1 (2021-10-01)

1.微信小程序版wx:key赋值优化，去除警告。

2.tui-icon（图标组件优化），修复同时引入组件和样式文件冲突的问题。

3.tui-calendar（日历）组件优化，选择区间时需选择起始和结束日期才可点击确定按钮。

4.微信小程序版本索引列表（吸顶效果）页面优化，修复索引和吸顶索引不一致的问题。

5.tui-numberbox（数字框）组件优化，当步长step为整数时，value支持传入小数。

<font color="#5677fc">`扫码体验[ThorUI组件库]小程序`</font>

![ThorUI组件库](https://thorui.cn/img/applets_sm.jpg) 

========================

【ThorUI示例V1.2.1】更新：

1.tui-searchbar（搜索栏）组件优化，新增属性showLabel、showInput用于控制是否显示占位标签和输入框。

2.tui-rotate-verify (旋转图片验证) 组件优化，新增type类型，当type=2时，返回旋转角度，可传给后端进行验证。

3.tui-input（输入框）、tui-textarea （多行输入框）组件优化，修复v-model赋值Number类型值报错的问题。

4.tui-waterfall（瀑布流）组件优化，修复已知问题。

5.微信小程序版本 tui-table（表格）组件优化，修复数字或英文内容换行显示不正确问题。

6.其他已知问题优化。

=====================

<font color="#5677fc">`扫码体验[ThorUI示例]小程序`</font>

![ThorUI示例](https://thorui.cn/img/thorui-extend__sm.jpg) 

=====================

其中【ThorUI示例】项目只对会员开放。点此 [开通会员](https://thorui.cn/doc/docs/member.html)。


###  V1.7.0（2021-09-17）

1.修复tui-bottom-navigation（底部导航菜单）组件编译到小程序点击二级菜单报错的问题。

2.tui-datetime（日期时间选择器）组件优化，可以自定义设置滚动区域高度。

3.tui-datetime（日期时间选择器）组件优化，新增类型type=8，即选择：时分秒+小时。

4.tui-cascade-selection（级联选择器）组件优化，修复编译到小程序端索引错乱问题。

5.uni-app端所有 commonJS 改为 ES6 模块规范，详见文档升级指南。

6.组件兼容vue3调整优化，支持情况与uni-app同步。

7.tui-icon（字体图标组件优化），删除以前播放（play）图标，新增播放（play）、暂停（suspend）图标；删除以前不可见（unseen）图标，新增可见（seen）,不可见（unseen）图标。

8.tui-icon（字体图标组件优化），uni-app版新增支持包含App-Nvue、支付宝/百度/字节/QQ小程序。

9.微信小程序原生版组件属性类型调整，修复高版本调试基础库出现警告提示。

10.tui-swipe-action（滑动菜单）组件优化，修复已知问题。

<font color="#5677fc">`扫码体验[ThorUI组件库]小程序`</font>

![ThorUI组件库](https://thorui.cn/img/applets_sm.jpg) 

=====================

【ThorUI示例V1.2.0】更新：

1.tui-picker（选择器）组件新增暗黑模式示例。

2.tui-charts-pie（饼状图表-css版）组件优化，修复部分场景可能导致样式错乱的问题。

3.tui-charts-line（折线图表-css版）组件优化，修复部分Android手机显示空白问题。

4.图表组件（所有）优化，修复其它已知问题。

5.tui-form（表单验证）组件优化，部分平台不支持在props中嵌套传入Function函数，model和rules参数由props传入改为校验方法validate中传入。

6.tui-slider（滑动选择器）组件优化，修复已知问题。

7.tui-timer（计时器）组件优化，修复冒号换成文字时显示错误的问题。

8.uni-app端所有 commonJS 改为 ES6 模块规范，详见文档升级指南。

9.组件兼容vue3调整优化，支持情况与uni-app同步。

10.tui-progress（进度条）组件优化。

11.tui-checkbox（多项选择器）组件优化，修复v-model手动修改值视图不更新的问题。

12.tui-radio（单项选择器）组件优化，修复v-model手动修改值视图不更新的问题。

13.微信小程序原生版组件属性类型调整，修复高版本调试基础库出现警告提示。

14.tui-tab（标签页）组件优化，支持设置左右间距，需传入属性leftGap（距离左侧间隙）值。

15.tui-row/tui-col（栅格布局）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

16.tui-form-button（按钮）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

17.tui-popup（弹层动画）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

18.tui-input（输入框） 组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

19.tui-radio（单项选择器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

20.tui-checkbox（多项选择器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

21.tui-switch（开关选择器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

22.tui-textarea（多行输入框）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

23.tui-alerts（警告提示）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

24.新增 tui-status-bar（状态栏）组件。

25.tui-pagination（分页器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

26.tui-segmented-control（分段器）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

27.tui-notice-bar（通告栏）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

28.tui-form（表单验证）组件优化，uni-app版新增支持App-Nvue、支付宝/百度/字节/QQ小程序。

29.其他已知问题优化。

=====================

<font color="#5677fc">`扫码体验[ThorUI示例]小程序`</font>

![ThorUI示例](https://thorui.cn/img/thorui-extend__sm.jpg) 

=====================

其中【ThorUI示例】项目只对会员开放。点此 [开通会员](https://thorui.cn/doc/docs/member.html)。


###  V1.6.5（2021-05-24）

1.tui-validation（表单验证）优化，新增validator自定义验证配置项，具体查看文档。

2.tui-round-progress（圆形进度条）组件优化，修复已知问题。

3.tui-cascade-selection（级联选择器）组件优化，修复已知问题。

4.tui-tabs（标签页）组件优化，选项卡可设置数字角标。

<font color="#5677fc">`扫码体验[ThorUI组件库]小程序`</font>

![ThorUI组件库](https://thorui.cn/img/applets_sm.jpg) 

=====================

【ThorUI示例V1.1.0】更新：

1.tui-org-tree（组织架构树）组件优化，可控制节点内容排版方式、节点选中状态、展开收起子节点，具体查看文档。

2.新增tui-form（表单）组件，主要用于表单验证。

3.新增tui-input（输入框）组件，原生input组件增强。

4.新增tui-textarea（多行输入框）组件。

5.新增tui-label（标签）组件，用来改进表单组件的可用性。

6.新增tui-radio（单项选择器）组件。

7.新增tui-checkbox（多项选择器）组件。

8.新增tui-switch（开关）组件。

9.新增tui-picker（选择器）组件，支持1~3级数据。

10.新增tui-landscape（压屏窗）组件。

11.新增tui-segmented-control（分段器）组件。

12.新增tui-notice-bar（通告栏）组件。

13.新增tui-alerts（警告框）组件。

14.新增tui-request（数据请求）封装，支持Promise，支持请求拦截和响应拦截,支持请求未结束之前阻止重复请求等。

15.tui-utils（工具类）优化，具体查看文档。

16.新增tui-row组件，配合组件tui-col组件使用（24栅格化布局）。

17.新增tui-tree-view（树型菜单）组件。

18.新增tui-charts-column（柱状图-css版）组件。

19.新增tui-charts-bar（横向柱状图-css版）组件。

20.新增tui-charts-line（折线图表-css版）组件。

21.新增tui-charts-pie（饼状图表-css版）组件。

22.tui-lazyload-img（图片懒加载）组件优化，修复已知问题。

23.新增tui-pagination（分页器）组件。

<font color="#5677fc">`扫码体验[ThorUI示例]小程序`</font>

![ThorUI示例](https://thorui.cn/img/thorui-extend__sm.jpg) 

=====================

<font color="#5677fc">`其中【ThorUI示例】项目只对会员开放。`</font>

注：会员专用内容加入会员才可使用，点此 [开通会员](https://thorui.cn/doc/docs/member.html)。

 ### 部分功能截图

|  ![](https://thorui.cn/img/V165/t_01.jpg)	|![](https://thorui.cn/img/V165/t_02.jpg)	|![](https://thorui.cn/img/V165/t_03.jpg)	|
| ------------								| ------------								| ------------								|
|  ![](https://thorui.cn/img/V165/t_04.jpg)	|![](https://thorui.cn/img/V165/t_05.jpg)	|![](https://thorui.cn/img/V165/t_06.jpg)	|
|  ![](https://thorui.cn/img/V165/t_07.jpg)	|![](https://thorui.cn/img/V165/t_08.jpg)	|![](https://thorui.cn/img/V165/t_09.jpg)	|
|  ![](https://thorui.cn/img/V165/t_10.png)	|![](https://thorui.cn/img/V165/t_11.jpg)	|![](https://thorui.cn/img/V165/t_12.jpg)	|
|  ![](https://thorui.cn/img/V165/t_13.jpg)	|![](https://thorui.cn/img/V165/t_14.png)	|![](https://thorui.cn/img/V165/t_15.jpg)	|
|  ![](https://thorui.cn/img/V165/t_16.jpg)	|![](https://thorui.cn/img/V165/t_17.jpg)	|![](https://thorui.cn/img/V165/t_18.jpg)	|
|  ![](https://thorui.cn/img/V165/t_19.jpg)	|![](https://thorui.cn/img/V165/t_20.jpg)	|![](https://thorui.cn/img/V165/t_21.jpg)	|
|  ![](https://thorui.cn/img/V165/t_22.jpg)	|											|											|

###  V1.6.2 （2021-03-21）

1.tui-actionsheet（操作菜单）组件优化，点击事件返回参数中新增按钮obj对象数据。

2.tui-upload（图片上传）组件优化，可设置展示图片的宽高。

3.圆形进度条组件优化，修复已知问题。

4.tui-validation.js（表单验证）优化，具体查看文档。

5.tui-numberbox（数字框组件优化），修复已知问题。

6.修复productNvue页，回到顶部在android端失效的问题。

<font color="#5677fc">`扫码体验[ThorUI组件库]小程序`</font>

![ThorUI组件库](https://thorui.cn/img/applets_sm.jpg) 

=====================

【ThorUI示例V1.0.2】更新：

1.ThorUI示例个人中心内容对会员开放（个人中心、分享、会员介绍、版本介绍、开源地址、帮助中心等）。

2.tui-timer（计时器）组件优化，可设置初始时间。

3.tui-poster.js（生成海报）优化，修复已知问题，保存图片到本地相册时新增相册权限判断。

4.新增tui-scale（刻度尺滚动选择器）组件。

5.新增tui-waterfall（瀑布流）组件。

6.新增tui-lazyload-img（图片懒加载）组件。

7.新增tui-overflow-hidden（内容超出隐藏）组件。

8.新增tui-org-tree（组织架构树）组件。

<font color="#5677fc">`扫码体验[ThorUI示例]小程序`</font>

![ThorUI示例](https://thorui.cn/img/thorui-extend__sm.jpg) 

=====================

<font color="#5677fc">`其中【ThorUI示例】项目只对会员开放。`</font>

注：会员专用内容加入会员才可使用，点此 [开通会员](https://thorui.cn/doc/docs/member.html)。

 ### 部分功能截图

|  ![](https://thorui.cn/img/V162/1.png)	|![](https://thorui.cn/img/V162/2.png)	|![](https://thorui.cn/img/V162/3.png)	|
| ------------								| ------------							| ------------							|
|  ![](https://thorui.cn/img/V162/4.png)	|![](https://thorui.cn/img/V162/5.jpg)	|![](https://thorui.cn/img/V162/6.png)	|
|  ![](https://thorui.cn/img/V162/7.jpg)	|![](https://thorui.cn/img/V162/8.jpg)	|![](https://thorui.cn/img/V162/9.png)	|
|  ![](https://thorui.cn/img/V162/10.png)	|![](https://thorui.cn/img/V162/11.jpg)	|![](https://thorui.cn/img/V162/12.jpg)	|


###  V1.6.1 （2021-01-19）

【ThorUI组件库V1.6.1】更新： 

1.商城模板更新：

 1）商城模板拆分成单独模板项目。

 2）个人中心，新增未登录状态。
 
 3）个人信息页面操作优化。
 
 4）编辑地址页面优化，新增省市区城市选择。
 
 5）新增我的钱包页面。
 
 6）新增充值确认页面。
 
 7）新增我的银行卡页面。
 
 8）新增交易记录页面。
 
 9）商品详情页分享优化，新增生成分享海报。
 
2.优化滑动菜单组件多个触摸点滑动问题。
 
3.消息提示组件（tui-tips）优化，支持自定义背景色，字体颜色以及字体大小，参数type废弃。

4.圆形进度条组件优化，修复activeMode=forwards(动画从上次结束点接着播)时且上次进度大于当前进度时进度条不刷新bug。

5.优化日历组件（tui-calendar）滚动穿透问题。

6.优化顶部选项卡示例左右切换过快出现闪动的问题，优化下拉刷新出现动画不关闭的问题。

7.上传图片组件（tui-upload）优化，新增一键上传方法uploadAllImage（当属性serverUrl传空时，父级可调用该方法一次性上传所有图片）。

8.新增富文本渲染示例。

=====================

【ThorUI示例V1.0.1】更新：

1.数字滚轮组件（tui-digital-roller）优化，支持数字中带逗号（,）。
 
2.拖拽排序组件（tui-drag）优化，修复编译到小程序端不执行change和sortend事件的bug。

3.新增grade评分组件，支持滑动半星。
 
4.新增图片裁剪组件（tui-cropper），裁剪框可显示为圆形。 
 
5.新增短信验证码倒计时组件。

6.新增滑动选择器组件，支持区间选择。

7.新增旋转图片验证组件。

8.新增付费成品入口。

=====================

<font color="#5677fc">`其中【ThorUI示例】项目组件，以及商城模板只对会员开放。`</font>

注：会员专用内容加入会员才可使用，点此 [开通会员](https://thorui.cn/doc/docs/member.html)。

 ### 部分功能截图

|  ![](https://thorui.cn/img/V161/1.png)	|![](https://thorui.cn/img/V161/2.png)	|![](https://thorui.cn/img/V161/3.png)	|
| ------------								| ------------							| ------------							|
|  ![](https://thorui.cn/img/V161/4.png)	|![](https://thorui.cn/img/V161/5.png)	|![](https://thorui.cn/img/V161/6.png)	|
|  ![](https://thorui.cn/img/V161/7.png)	|![](https://thorui.cn/img/V161/8.png)	|![](https://thorui.cn/img/V161/9.png)	|
|  ![](https://thorui.cn/img/V161/10.jpg)	|![](https://thorui.cn/img/V161/11.png)	|![](https://thorui.cn/img/V161/12.jpg)	|
|  ![](https://thorui.cn/img/V161/13.jpg)	|![](https://thorui.cn/img/V161/14.png)	|![](https://thorui.cn/img/V161/15.jpg)	|


### V1.6.0 （2020-11-15）

【ThorUI组件库V1.6.0】更新：

1.tui-fab悬浮按钮组件优化，默认按钮支持自定内容，替换自带加号。

2.修复裁剪组件在小程序端设置isBase64为true时裁剪出错的问题。

3.tui-drawer抽屉组件优化，支持left,right,bottom,top方向弹出，可自定义背景色。

4.倒计时组件优化，新增毫秒展示。

5.时间选择器优化，支持header，body等部分背景色修改。

6.宫格组件优化，可去掉宫格边框线条。

7.修复地图周边兴趣点在H5端出错的问题。

8.新增[ThorUI示例]入口。

=====================

【ThorUI示例V1.0.0】更新：

1.新增scroll-view常用布局案例。

2.新增swiper指示点组件及使用案例。

3.新增长形进度条组件以及使用案例。

4.新增checkbox常用布局案例。

5.新增input常用布局案例。

6.新增radio常用布局案例。

7.新增地图选点示例。

8.地图周边兴趣点布局调整以及可分页加载数据。

9.新增生成海报示例。

10.新增类似微信联系人索引列表组件以及示例。

11.新增左滑菜单组件 wxs实现。

12.新增图片预览组件。

13.新增loading样式。
14.新增panel布局案例。

15.新增preview布局案例。

16.新增表单常用布局案例。

17.新增dialog组件以及使用案例。

18.新增msg组件以及使用案例。

19.新增搜索searchbar组件。

20.新增表单按钮组件，可自定义背景色。

21.新增长按复制组件，长按弹出菜单。

22.新增贝赛尔曲线组件，加入购物车效果等。

23.新增tab标签页组件，可超出一屏。

24.新增图片裁剪组件（App端使用组件，使用5+ api裁剪）。

25.新增拖拽排序组件以及使用案例。

26.新增滑动验证码组件以及使用案例。

27.新增类似微信数字键盘组件以及使用案例。

28.新增工具库（常用数据处理）。

29.新增popup弹层动画组件。

30.新增计时器组件以及使用案例。

31.新增table表格组件以及使用案例。

32.新增多端适配组件，以及使用案例。

33.新增咖啡点单模板预览入口。

34.新增签到模板预览入口。

35.新增个人中心页面（内部页面，不对外开放），包含分享，会员介绍，版本介绍，开源地址，帮助中心，反馈建议，我要合作，福利专享等页面。

<font color="#5677fc">`扫码体验小程序`</font>

![ThorUI示例](https://thorui.cn/img/thorui-extend__sm.jpg) 

=====================

<font color="#5677fc">`【ThorUI示例】项目只对会员开放。`</font>

注：会员专用内容加入会员才可使用（￥200/永久)，付费模板会员可享受折扣。
如若需要，请联系QQ：3168647172 或 3039218619。

 ### 部分功能截图

|  ![](https://thorui.cn/img/V160/1.png)	|![](https://thorui.cn/img/V160/2.png)	|![](https://thorui.cn/img/V160/3.png)	|
| ------------								| ------------							| ------------							|
|  ![](https://thorui.cn/img/V160/4.png)	|![](https://thorui.cn/img/V160/5.png)	|![](https://thorui.cn/img/V160/6.png)	|
|  ![](https://thorui.cn/img/V160/7.png)	|![](https://thorui.cn/img/V160/8.png)	|![](https://thorui.cn/img/V160/9.png)	|
|  ![](https://thorui.cn/img/V160/10.png)	|![](https://thorui.cn/img/V160/11.png)	|![](https://thorui.cn/img/V160/12.png)	|
|  ![](https://thorui.cn/img/V160/13.png)	|![](https://thorui.cn/img/V160/14.png)	|![](https://thorui.cn/img/V160/15.png)	|
|  ![](https://thorui.cn/img/V160/16.png)	|![](https://thorui.cn/img/V160/17.png)	|![](https://thorui.cn/img/V160/18.png)	|
|  ![](https://thorui.cn/img/V160/19.png)	|![](https://thorui.cn/img/V160/20.png)	|![](https://thorui.cn/img/V160/21.png)	|
|  ![](https://thorui.cn/img/V160/22.png)	|![](https://thorui.cn/img/V160/23.png)	|![](https://thorui.cn/img/V160/24.png)	|
|  ![](https://thorui.cn/img/V160/25.png)	|![](https://thorui.cn/img/V160/26.png)	|![](https://thorui.cn/img/V160/27.png)	|
|  ![](https://thorui.cn/img/V160/28.png)	|![](https://thorui.cn/img/V160/29.png)	|![](https://thorui.cn/img/V160/30.png)	|
|  ![](https://thorui.cn/img/V160/31.png)	|![](https://thorui.cn/img/V160/32.png)	|![](https://thorui.cn/img/V160/33.png)	|
|  ![](https://thorui.cn/img/V160/34.png)	|![](https://thorui.cn/img/V160/35.png)	|![](https://thorui.cn/img/V160/36.png)	|
|  ![](https://thorui.cn/img/V160/37.png)	|![](https://thorui.cn/img/V160/38.png)	|![](https://thorui.cn/img/V160/39.png)	|
|  ![](https://thorui.cn/img/V160/40.png)	|![](https://thorui.cn/img/V160/41.png)	|![](https://thorui.cn/img/V160/42.png)	|
|  ![](https://thorui.cn/img/V160/43.png)	|![](https://thorui.cn/img/V160/44.png)	|![](https://thorui.cn/img/V160/45.png)	|
|  ![](https://thorui.cn/img/V160/46.png)	|![](https://thorui.cn/img/V160/47.png)	|![](https://thorui.cn/img/V160/48.png)	|
|  ![](https://thorui.cn/img/V160/49.png)	|![](https://thorui.cn/img/V160/50.png)	|![](https://thorui.cn/img/V160/51.png)	|
|  ![](https://thorui.cn/img/V160/52.png)	|![](https://thorui.cn/img/V160/53.png)	|![](https://thorui.cn/img/V160/54.png)	|

 
 
---

### V1.5.8（2020-09-01）

1.tui-navigation-bar组件优化，可设置背景透明 【设置该属性，则背景透明，只出现内容，isOpacity和maxOpacity失效】

2.tui-swipe-action组件优化，背景色改为配置。modal弹框、抽屉、tabbar等组件z-index改为配置，具体查看文档。

3.修复小程序端tui-numberbox组件输入比最小值小的数无法自动重置成最小值的问题。

4.优化索引列表在H5端滑动切换索引会引起页面回弹的问题。

5.tui-bottom-popup组件优化，可设置z-index以及显示时垂直方向移动的距离translateY。

6.nvue版thor-icon组件优化，更换字体base64。

7.商城模板更新【会员专用】。

 1).首页调整，新增拼团模块
 
 2).拼团列表
 
 3).拼团商品详情
 
 4).正在拼团中列表
 
 5).我的拼团
 
 6).拼团详情
 
 7).退款/售后列表
 
 8).退款详情
 
 9).申请售后

8.新增简单咖啡点单模板，类似weStoreCafe【该模板为付费模板￥100,会员2折】

 1).点单
 
 2).账单结算
 
 3).编辑地址
 
 4).地址列表
 
 5).我的订单
 
 6).订单详情
 
 7).微信登录/验证码登录
 
9.修复部分已知bug。

 --------------------------
 
 注：会员专用内容加入会员才可使用（￥200/永久)，付费模板会员可享受折扣。
 
 如若需要，请联系QQ：3168647172 或 3039218619。
 
 ### 部分功能截图
 
|  ![](https://thorui.cn/img/V158/1.png)	|![](https://thorui.cn/img/V158/2.png)	|![](https://thorui.cn/img/V158/3.png)	|
| ------------								| ------------							| ------------							|
|  ![](https://thorui.cn/img/V158/4.png)	|![](https://thorui.cn/img/V158/5.png)	|![](https://thorui.cn/img/V158/6.png)	|
|  ![](https://thorui.cn/img/V158/7.png)	|![](https://thorui.cn/img/V158/8.png)	|![](https://thorui.cn/img/V158/9.png)	|
|  ![](https://thorui.cn/img/V158/10.png)	|![](https://thorui.cn/img/V158/11.png)	|![](https://thorui.cn/img/V158/12.png)	|
|  ![](https://thorui.cn/img/V158/13.png)	|![](https://thorui.cn/img/V158/14.png)	|![](https://thorui.cn/img/V158/15.png)	|
|  ![](https://thorui.cn/img/V158/16.png)	|![](https://thorui.cn/img/V158/17.png)	|![](https://thorui.cn/img/V158/18.png)	|
|  ![](https://thorui.cn/img/V158/19.png)	|![](https://thorui.cn/img/V158/20.png)	|	|

---

### V1.5.6（2020-08-18）

1.修复tui-tabs组件宽度不正确的bug。

2.修复级联选择组件(tui-cascade-selection)默认数据不生效的bug。

3.优化tui-button按钮组件，新增props：preventClick[是否阻止用户重复点击，设为true则200ms内只执行一次点击事件，默认false]

 --------------------------
 
 注：加入会员享受更多权益（￥200/永久)。
 
 如若需要，请联系QQ：3168647172 或 3039218619。

### V1.5.5（2020-08-16）

1.自定义导航栏组件优化，新增props：maxOpacity（最大不透明度值），dropDownHide（下拉隐藏NavigationBar，主要针对有回弹效果ios端）。

2.上传组件优化，可限制上传图片类型，单张图片大小，sizeType，sourceType。

3.倒计时组件优化，可每秒返回剩余时间，默认不返回。

4.tui-modal弹框组件优化，修复transform导致元素内字体模糊的问题。

5.tui-button按钮组件优化，新增link样式配置，具体查看文档。

6.tui-tabs标签页组件优化，新增props：width（tabs宽度）设置。

7.tui-image-group图片组合组件优化，横向展示支持多行。

8.裁剪组件优化，修复网络图片在小程序端裁剪出现空白的问题。

9.商城模板更新【会员专用】。

 1).首页改版，新增秒杀模块
 
 2).选择优惠券（提交订单）
 
 3).开具发票
 
 4).发票详情
 
 5).查看发票，发送至邮箱
 
 6).商品评论
 
 7).评论详情，评论回复
 
 8).评价晒单
 
 9).店铺
 
 10).店铺详情
 
 11).限时秒杀列表
 
 12).秒杀详情
 
 13).商品详情优化，新增视频播放入口
 
 --------------------------
 
 注：会员专用内容加入会员才可使用（￥200/永久)。
 
 如若需要，请联系QQ：3168647172 或 3039218619。
 
 ### 部分功能截图
 
|  ![](https://thorui.cn/img/V155/1.png)	|![](https://thorui.cn/img/V155/2.png)	|![](https://thorui.cn/img/V155/3.png)	|
| ------------								| ------------							| ------------							|
|  ![](https://thorui.cn/img/V155/4.png)	|![](https://thorui.cn/img/V155/5.png)	|![](https://thorui.cn/img/V155/6.jpg)	|
|  ![](https://thorui.cn/img/V155/7.png)	|![](https://thorui.cn/img/V155/8.png)	|![](https://thorui.cn/img/V155/9.png)	|
|  ![](https://thorui.cn/img/V155/10.png)	|![](https://thorui.cn/img/V155/11.png)	|![](https://thorui.cn/img/V155/12.png)	|
|  ![](https://thorui.cn/img/V155/13.png)	|![](https://thorui.cn/img/V155/14.png)	|![](https://thorui.cn/img/V155/15.png)	|
|  ![](https://thorui.cn/img/V155/16.png)	|![](https://thorui.cn/img/V155/17.png)	|![](https://thorui.cn/img/V155/18.png)	|
|  ![](https://thorui.cn/img/V155/19.png)	|![](https://thorui.cn/img/V155/20.png)	|![](https://thorui.cn/img/V155/21.png)	|
|  ![](https://thorui.cn/img/V155/22.png)	|![](https://thorui.cn/img/V155/23.png)	|![](https://thorui.cn/img/V155/24.png)										|
 

### V1.5.2（2020-07-20）

1.步骤条组件优化，支持自定义图标，支持设置线条为虚线。

2.修复图片裁剪组件(wxs版)初始化裁剪不正确的问题。

3.按钮（tui-button)组件支持表单提交，详见文档。

4.图片上传组件（tui-upload）新增props：header，formData，修复初始化图片不显示的bug。

5.tabbar组件与自定义导航栏组件(NavBar)背景支持设置高斯模糊(ios端)。

6.uni-app版本骨架屏修复编译到小程序端无法获取到组件节点的bug。

7.日历组件单个日期选择和区间选择支持设置默认选中。

8.新增多语言模板。源码地址 ：[ThorUI-utag](https://github.com/dingyong0214/ThorUI-utag) 

9.新增拖拽排序组件，wxs实现，详细查看多语言模板示例。

10.新增签到模板（点star获取源码）。获取步骤如下：

  1）去GitHub给ThorUI项目点star，项目地址分别为：[ThorUI](https://github.com/dingyong0214/ThorUI) 和 [ThorUI-uniapp](https://github.com/dingyong0214/ThorUI-uniapp)

  2）加QQ3039218619，截图发送到该QQ即可获取源码。

--------------------------

注：自1.4.2版本之后，ThorUI只对uni-app版本进行开源，小程序原生版付费会员才可使用（￥200/永久），1.4.2版本之前不受影响。
如若需要，请联系QQ：3168647172。


### 部分功能截图 
|  ![](https://thorui.cn/img/V152/1.png)	|![](https://thorui.cn/img/V152/2.png)	|![](https://thorui.cn/img/V152/3.png)	|
| ------------								| ------------							| ------------							|
|  ![](https://thorui.cn/img/V152/4.png)	|![](https://thorui.cn/img/V152/5.png)	|![](https://thorui.cn/img/V152/6.png)	|
|  ![](https://thorui.cn/img/V152/7.png)	|![](https://thorui.cn/img/V152/8.png)	|![](https://thorui.cn/img/V152/9.png)	|
|  ![](https://thorui.cn/img/V152/10.png)	|![](https://thorui.cn/img/V152/11.png)	|![](https://thorui.cn/img/V152/12.png)	|
|  ![](https://thorui.cn/img/V152/13.png)	|![](https://thorui.cn/img/V152/14.png)	|![](https://thorui.cn/img/V152/17.png)	|

[![Watch the video](https://thorui.cn/img/V152/6.png)](https://thorui.cn/img/V152/0720.MP4)

### V1.5.1（2020-06-06）

1.日历组件支持农历（古历）。

2.sticky吸顶组件新增wxs实现(tui-sticky-wxs)。

3.新增圆形进度条组件renderjs实现(App、H5端)与canvas 2d实现（小程序端）以及nuve版本。

4.图片裁剪组件优化，手势事件改为wxs实现。

5.级联选择器组件优化，支持设置默认选中。

6.新增图片颜色分析器组件，传入图片分析图片色彩。

7.新增中文转拼音组件，可处理多音字。

8.新增update页面(App端资源更新页面)。

9.解决H5端异步请求数据后复制文本（clipboard）报错bug。
解决方案：
①.新增参数event，调用方法时传入此参数;
②.异步请求转同步。

10.修复其它已知bug。

注：自1.4.2版本之后，ThorUI只对uni-app版本进行开源，小程序原生版付费会员才可使用（￥200/永久），1.4.2版本之前不受影响。
如若需要，请联系QQ：3168647172。

### 部分功能截图 
|  ![](https://thorui.cn/img/v151/1.png) |![](https://thorui.cn/img/v151/2.png)  |![](https://thorui.cn/img/v151/3.png)  |
| ------------ | ------------ | ------------ |


### V1.5.0 (2020-05-12)

1.新增日历组件 。

2.新增图片裁剪组件。

3.新增头像、图片组合组件。

4.新增顶部NavationBar导航组件。

5.新增圆形进度条组件。

6.新增底部导航组件。

7.新增级联选择组件cascade-selection。

8.新增步骤条组件。

9.新增气泡框组件。

10.countdown倒计时组件优化，可只显示秒数倒计时。

11.回到顶部组件优化，新增回首页，分享按钮，可自定义控制显示。

12.日期时间选择组件优化，新增秒数选择，单位可置顶展示。

13.新增垂直分类菜单左右联动联动案例。

14.地图支持H5。

15.表单验证优化:非必填情况下,如果值为空,则不进行校验，不为空则进行校验。

16.发布H5、QQ小程序以及Android App。H5地址：https://www.thorui.cn/h5/#/ ，QQ小程序搜索ThorUI,apk前往https://www.thorui.cn/ 下载。

17.针对支付宝小程序做了部分优化调整。

18.nvue支持uni-app编译模式。

19.新增自定义tabbar使用模板，小程序参考：https://github.com/dingyong0214/AfterSale ，uni-app参考：https://github.com/dingyong0214/tabbar-uniapp。

20.引入优化uParse。

21.搜索页面新增关键词高亮显示。

22.新增navbar上拉加载下拉刷新案例。

23.v3编译支持。

24.支持easycom组件模式，直接在页面中使用组件，无需引入注册。

25.优化sticky组件，新增普通案例和异步加载案例。

26.整体优化调整，项目重构，部分模板完善。

### 部分功能截图 
|  ![](https://thorui.cn/img/v150/v1501.png) |![](https://thorui.cn/img/v150/v1502.png)  |![](https://thorui.cn/img/v150/v1503.png)  |
| ------------ | ------------ | ------------ |
|  ![](https://thorui.cn/img/v150/v1504.png) |![](https://thorui.cn/img/v150/v1505.png)  |![](https://thorui.cn/img/v150/v1506.png)  |
|  ![](https://thorui.cn/img/v150/v1507.png) |![](https://thorui.cn/img/v150/v1508.png)  |![](https://thorui.cn/img/v150/v1509.jpg)  |



### V1.4.2

1.modal组件优化，宽高以及padding值可设置

2.rate评分组件支持小数，如4星半，4.6星等

3.tabs组件优化

4.商城模板新增优惠券页面

5.商城模板新增订单详情页面

6.分包，解决小程序预览时包体积超出限制的问题

### 功能截图 
|  ![](https://thorui.cn/img/v142/1.jpg) |![](https://thorui.cn/img/v142/2.jpg)  |![](https://thorui.cn/img/v142/3.jpg)  |
| ------------ | ------------ | ------------ |


### V1.4.1

1.新增文档相关链接信息。

2.新增骨架屏组件(extend=>骨架屏)。

3.新增网络请求示例。

4.调整sticky组件，支持索引列表吸顶效果。

5.新增吸顶&索引列表，非scroll-view实现(code[首页]=>索引列表=>索引&吸顶效果)。

6.已知问题修复以及优化。

### 功能截图 
|  ![](https://thorui.cn/img/V141/1.png) |![](https://thorui.cn/img/V141/2.jpg)  |
| ------------ | ------------ |
|  ![](https://thorui.cn/img/V141/3.jpg) |![](https://thorui.cn/img/V141/4.png)  | 

### V1.4.0

1.新增日期时间选择器组件。

2.H5新增复制文本功能。

3.新增悬浮按钮组件。

4.新增Tabbar组件。

5.新增tabs标签页组件。

6.新增折叠面板组件。

7.新增图片上传组件。

8.NumberBox组件优化调整。

9.Modal组件优化调整。

10.sticky组件优化调整。

11.countdown组件优化调整。

12.商城模板新增购物车、我的、提交订单、支付成功、我的订单、地址列表、新增地址、设置、用户信息等页面。

13.修改已知bug。

### 功能截图 
|  ![](https://thorui.cn/img/V140/1.png) |![](https://thorui.cn/img/V140/2.png)  |  ![](https://thorui.cn/img/V140/3.png) |
| ------------ | ------------ | ------------ |
|  ![](https://thorui.cn/img/V140/4.png) |![](https://thorui.cn/img/V140/5.png)  |  ![](https://thorui.cn/img/V140/6.png) |
|  ![](https://thorui.cn/img/V140/7.png) |![](https://thorui.cn/img/V140/8.png)  |  ![](https://thorui.cn/img/V140/9.png) |
|  ![](https://thorui.cn/img/V140/10.png) |![](https://thorui.cn/img/V140/11.png)  |  ![](https://thorui.cn/img/V140/12.png) |
|  ![](https://thorui.cn/img/V140/13.png) |![](https://thorui.cn/img/V140/14.png)  |  ![](https://thorui.cn/img/V140/15.png) |

### V1.3.2

1.修复H5端发行报错的问题。

2.扩展基础组件(保留了之前版本):alert、tips、button、toast。

3.新增表单验证功能，只需配置相应验证即可。

4.新增返回顶部组件,nvue返回顶部看首页[nvue商品列表]。

5.优化部分页面，修复已知bug。

### 功能截图 
|  ![](https://thorui.cn/img/V132/4.jpg) |![](https://thorui.cn/img/V132/2.jpg)  |  ![](https://thorui.cn/img/V132/3.jpg) |
| ------------ | ------------ | ------------ |
|   |    |   |

### V1.3.0
1.新增倒计时组件:时分秒倒计时，支持设置大小，颜色等。

2.新增分隔符组件:Divider分隔符，可设置占据高度，线条宽度，颜色等。

3.新增卡片轮播:包含顶部轮播，秒杀商品轮播等。

4.nvue下拉刷新优化。

5.修复已知bug。

### V1.2.2
1.新增组件Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。 

2.修复部分已知bug。

### V1.2.1
1.修复部分兼容性问题。

2.修复部分已知bug。

### V1.2.0
1.新增组件NumberBox数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)。

2.新增组件Rate评分:可设置星星数，可设置大小颜色。

3.新增聊天模板，包含：消息列表，好友列表，聊天界面等。

4.新增商城模板,包含：商城首页，商城列表，商城详情等。

5.优化部分体验。

### V1.1.0
1.将基础组件移出扩展，单独出来。

2.扩展改为单独tab bar选项extend。

3.新增滚动消息（extend=>滚动消息）：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品。

4.新增弹层下拉选择（extend=>弹层下拉选择）：包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层。

5.新增ActionSheet操作菜单（extend=>ActionSheet）：可加入提示信息，可单独设置字体样式。

6.新增新闻模板（extend=>新闻模板）:包含新闻列表，新闻详情，评论等。

7.部分功能优化，修复已知bug。

### V1.0.0
1.【地图】新增拖拽定位功能

2.【扩展】新增基础组件，包括：字体图标，按钮，Grid宫格，List列表，Card卡片...

3.【扩展】新增数字键盘

4.【扩展】新增时间轴

5.完善thor(个人中心)功能，包括：关于Thor UI，模拟登录，GitHub地址复制，赞赏，反馈，更新日志等

6.已知bug修复，以及部分功能优化


###  商城模板部分截图


| ![商城首页](https://thorui.cn/img/mall/1.png)  | ![](https://thorui.cn/img/mall/2.png)  | ![](https://thorui.cn/img/mall/3.png)  |  ![](https://thorui.cn/img/mall/4.png) |
| ------------ | ------------ | ------------ | ------------ |
| ![](https://thorui.cn/img/mall/5.png)  |  ![](https://thorui.cn/img/mall/6.png) |   ![](https://thorui.cn/img/mall/7.png)| ![](https://thorui.cn/img/mall/8.png)  |
|   ![](https://thorui.cn/img/mall/9.png)|  ![](https://thorui.cn/img/mall/10.png) |   |   |


###  新闻模板部分截图

| ![](https://thorui.cn/img/news/1.png)  |   ![](https://thorui.cn/img/news/2.png)|  ![](https://thorui.cn/img/news/3.png) |
| ------------ | ------------ | ------------ |
|  ![](https://thorui.cn/img/news/4.png) | ![](https://thorui.cn/img/news/5.png)  |  ![](https://thorui.cn/img/news/6.png) |


###  聊天模板截图
|  ![](https://thorui.cn/img/chat/1.png) | ![](https://thorui.cn/img/chat/2.png)  |  ![](https://thorui.cn/img/chat/3.png) |
| ------------ | ------------ | ------------ |
|  |   |   |


###  组件功能部分截图

|   ![消息提示](https://thorui.cn/img/function/1.jpg)| ![吸顶容器](https://thorui.cn/img/function/2.jpg)  |  ![数字键盘](https://thorui.cn/img/function/3.jpg) |  ![锁频键盘](https://thorui.cn/img/function/4.jpg) |  ![时间轴](https://thorui.cn/img/function/5.jpg) |
| ------------ | ------------ | ------------ | ------------ | ------------ |
|  ![消息滚动](https://thorui.cn/img/function/6.jpg) |  ![弹层，下拉选择](https://thorui.cn/img/function/7.jpg) |  ![抽奖转盘](https://thorui.cn/img/function/8.jpg) | ![抽屉](https://thorui.cn/img/function/9.jpg)  | ![滑动菜单](https://thorui.cn/img/function/10.png)  |
| ![二维码生成](https://thorui.cn/img/function/11.png)  |  ![地图-拖拽定位](https://thorui.cn/img/function/12.png) |![地图-周边地点](https://thorui.cn/img/function/13.png)   |  ![基础组件](https://thorui.cn/img/function/14.png) |  ![索引列表-城市选择](https://thorui.cn/img/function/15.png) |
| ![索引列表](https://thorui.cn/img/function/16.png)  | ![顶部选项卡](https://thorui.cn/img/function/17.png)  |  ![rate评分](https://thorui.cn/img/function/18.png) |![数字输入框](https://thorui.cn/img/function/19.png) |   |



## 赞赏

![image](https://thorui.cn/img/reward_small.jpg)