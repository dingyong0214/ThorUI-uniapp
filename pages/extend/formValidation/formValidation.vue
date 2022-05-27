<template>
	<view class="container">
		<form @submit="formSubmit" @reset="formReset">
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">姓名</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="name" placeholder="请输入姓名"
						maxlength="50" type="text" />
					<radio-group class="radio-group" name="sex">
						<label class="tui-radio">
							<radio value="1" color="#5677fc" ></radio>男
						</label>
						<label class="tui-radio">
							<radio value="2" color="#5677fc" ></radio>女
						</label>
					</radio-group>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">年龄</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="age" placeholder="请输入年龄"
						maxlength="50" type="number"/>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">手机号</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="mobile" placeholder="请输入手机号"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">邮箱</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="email" placeholder="请输入邮箱"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">身份证</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入身份证号码"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">密码</view>
					<input password placeholder-class="tui-phcolor" class="tui-input" name="pwd" placeholder="请输入密码"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">确认密码</view>
					<input password placeholder-class="tui-phcolor" class="tui-input" name="pwd2" placeholder="请输入确认密码"
						maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">区间</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="range" placeholder="请输入3-20之间的数"
						maxlength="50" type="number" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false" unlined>
				<view class="tui-line-cell">
					<view class="tui-title">金额</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="amount" placeholder="请输入金额,允许保留两位小数"
						maxlength="50" type="digit" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false" unlined>
				<view class="tui-line-cell">
					<view class="tui-title">自定义</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="custom" placeholder="自定义验证,屏蔽***"
						maxlength="50" />
				</view>
			</tui-list-cell>

			<view class="tui-tips">更多验证请参考文档</view>

			<view class="tui-btn-box">
				<button class="tui-button-primary" hover-class="tui-button-hover" formType="submit"
					type="primary">Submit</button>
				<button class="tui-button-primary tui-button-gray" hover-class="tui-button-gray_hover"
					formType="reset">Reset</button>
			</view>
		</form>
	</view>
</template>
<script>
	import form from "@/components/common/tui-validation/tui-validation.js"

	function checkKeyword(value) {
		if (~value.indexOf("***")) {
			return false;
		}
		return true;
	}
	export default {
		data() {
			return {}
		},
		methods: {
			formSubmit: function(e) {
				//表单规则
				let rules = [{
					name: "name",
					rule: ["required", "isChinese", "minLength:2", "maxLength:6"], //可使用区间，此处主要测试功能
					msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
				}, {
					name: "sex",
					rule: ["required"],
					msg: ["请选择性别"]
				}, {
					name: "age",
					rule: ["required", "isNum", "range:[0,150]"],
					msg: ["请输入年龄", "请输入正确的年龄", "请输入正确的年龄范围：0-150"]
				}, {
					name: "mobile",
					rule: ["required", "isMobile"],
					msg: ["请输入手机号", "请输入正确的手机号"]
				}, {
					name: "email",
					rule: ["required", "isEmail"],
					msg: ["请输入邮箱", "请输入正确的邮箱"]
				}, {
					name: "idcard",
					rule: ["required", "isIdCard"],
					msg: ["请输入身份证号码", "请输入正确的身份证号码"]
				}, {
					name: "pwd",
					rule: ["required", "isEnAndNo"],
					msg: ["请输入密码", "密码为8~20位数字和字母组合"]
				}, {
					name: "pwd2",
					rule: ["required", "isSame:pwd"],
					msg: ["请输入确认密码", "两次输入的密码不一致"]
				}, {
					name: "range",
					rule: ["required", "range:[3,20]"],
					msg: ["请输入区间数字", "请输入3-20之间的数字"]
				}, {
					name: "amount",
					rule: ["required", "isAmount"],
					msg: ["请输入金额", "请输入正确的金额，允许保留两位小数"]
				}, {
					name: "custom",
					rule: ["required"],
					msg: ["请输入自定义内容"],
					validator: [{
						msg: "内容不可包含非法字符***",
						method: checkKeyword
					}]
				}];
				//进行表单检查
				let formData = e.detail.value;
				let checkRes = form.validation(formData, rules);
				if (!checkRes) {
					uni.showToast({
						title: "验证通过!",
						icon: "none"
					});
				} else {
					uni.showToast({
						title: checkRes,
						icon: "none"
					});
				}
			},
			formReset: function(e) {
				console.log("清空数据")
			}
		}
	}
</script>

<style>
	.container {
		padding: 20rpx 0 50rpx 0;
	}

	.tui-line-cell {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.tui-title {
		line-height: 32rpx;
		min-width: 120rpx;
		flex-shrink: 0;
	}

	.tui-input {
		font-size: 32rpx;
		color: #333;
		padding-left: 20rpx;
		flex: 1;
		overflow: visible;
	}

	.radio-group {
		margin-left: auto;
		transform: scale(0.8);
		transform-origin: 100% center;
		flex-shrink: 0;
	}

	.tui-radio {
		display: inline-block;
		padding-left: 28rpx;
		font-size: 36rpx;
		vertical-align: middle;
	}


	.tui-btn-box {
		padding: 40rpx 50rpx;
		box-sizing: border-box;
	}

	.tui-button-gray {
		margin-top: 30rpx;
	}

	.tui-tips {
		padding: 30rpx;
		color: #999;
		font-size: 24rpx;
	}
</style>
