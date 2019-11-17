;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/actionsheet/actionsheet"],{"2b85":function(t,e,n){},"4bcf":function(t,e,n){"use strict";var a=n("2b85"),i=n.n(a);i.a},b33d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiActionsheet",props:{maskClosable:{type:Boolean,default:!0},show:{type:Boolean,default:!1},itemList:{type:Array,default:function(){return[{text:"确定",color:"#1a1a1a"}]}},tips:{type:String,default:""},color:{type:String,default:"#9a9a9a"},size:{type:Number,default:26},isCancel:{type:Boolean,default:!0}},methods:{handleClickMask:function(){this.maskClosable&&this.handleClickCancel()},handleClickItem:function(t){if(this.show){var e=t.currentTarget.dataset;this.$emit("click",{index:e.index})}},handleClickCancel:function(){this.$emit("cancel")}}};e.default=a},daaf:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},dfe5:function(t,e,n){"use strict";n.r(e);var a=n("b33d"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},e9b9:function(t,e,n){"use strict";n.r(e);var a=n("daaf"),i=n("dfe5");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("4bcf");var c=n("2877"),l=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/actionsheet/actionsheet-create-component',
    {
        'components/actionsheet/actionsheet-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("e9b9"))
        })
    },
    [['components/actionsheet/actionsheet-create-component']]
]);                
