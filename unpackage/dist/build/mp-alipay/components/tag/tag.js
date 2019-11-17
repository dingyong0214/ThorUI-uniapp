;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/tag/tag"],{"2f14":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiTag",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"tui-"+t+"-outline":"tui-"+t},getClassName:function(t,e){var a=e?"tui-tag-outline ":"";return"square"!=t&&("circle"==t?a+=e?"tui-tag-outline-fillet":"tui-tag-fillet":"circleLeft"==t?a+="tui-tag-fillet-left":"circleRight"==t&&(a+="tui-tag-fillet-right")),a}}};e.default=n},"47bb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.getClassName(t.shape,t.plain)),n=t.getTypeClass(t.type,t.plain);t.$mp.data=Object.assign({},{$root:{m0:a,m1:n}})},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"80a2":function(t,e,a){},a4f5:function(t,e,a){"use strict";a.r(e);var n=a("2f14"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},ec9e:function(t,e,a){"use strict";var n=a("80a2"),i=a.n(n);i.a},f7fa:function(t,e,a){"use strict";a.r(e);var n=a("47bb"),i=a("a4f5");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("ec9e");var l=a("2877"),r=Object(l["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/tag/tag-create-component',
    {
        'components/tag/tag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("f7fa"))
        })
    },
    [['components/tag/tag-create-component']]
]);                
