;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/extend/button/button"],{"20d0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiButton",props:{type:{type:String,default:"primary"},shadow:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"94rpx"},size:{type:Number,default:32},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{})},getShadowClass:function(t,e,n){var a="";return e&&"white"!=t&&!n&&(a="tui-shadow-"+t),a},getDisabledClass:function(t,e){var n="";return t&&"white"!=e&&"gray"!=e&&(n="tui-dark-disabled"),n},getShapeClass:function(t,e){var n="";return"circle"==t?n=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(n=e?"tui-outline-rightAngle":"tui-rightAngle"),n},getHoverClass:function(t,e,n){var a="";return t||(a=n?"tui-outline-hover":"tui-"+(e||"primary")+"-hover"),a}}};e.default=a},b631:function(t,e,n){"use strict";var a=n("f95d"),i=n.n(a);i.a},c14d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getDisabledClass(t.disabled,t.type)),a=t.getShapeClass(t.shape,t.plain),i=t.getShadowClass(t.type,t.shadow,t.plain),u=t.getHoverClass(t.disabled,t.type,t.plain);t.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:i,m3:u}})},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},dc14:function(t,e,n){"use strict";n.r(e);var a=n("c14d"),i=n("f889");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("b631");var r=n("2877"),l=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports},f889:function(t,e,n){"use strict";n.r(e);var a=n("20d0"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},f95d:function(t,e,n){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/extend/button/button-create-component',
    {
        'components/extend/button/button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("dc14"))
        })
    },
    [['components/extend/button/button-create-component']]
]);                