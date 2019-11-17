;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/extend/alert/alert"],{"0145":function(t,e,n){"use strict";n.r(e);var a=n("a65e"),u=n.n(a);for(var l in a)"default"!==l&&function(t){n.d(e,t,function(){return a[t]})}(l);e["default"]=u.a},"0a09":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"5fa1":function(t,e,n){},9651:function(t,e,n){"use strict";var a=n("5fa1"),u=n.n(a);u.a},a65e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiAlert",props:{show:{type:Boolean,default:!1},size:{type:Number,default:30},color:{type:String,default:"#333"},btnColor:{type:String,default:"#EB0909"},btnText:{type:String,default:"确定"},maskClosable:{type:Boolean,default:!1}},methods:{handleClick:function(t){this.show&&this.$emit("click",{})},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};e.default=a},edd9:function(t,e,n){"use strict";n.r(e);var a=n("0a09"),u=n("0145");for(var l in u)"default"!==l&&function(t){n.d(e,t,function(){return u[t]})}(l);n("9651");var r=n("2877"),i=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/extend/alert/alert-create-component',
    {
        'components/extend/alert/alert-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("edd9"))
        })
    },
    [['components/extend/alert/alert-create-component']]
]);                
