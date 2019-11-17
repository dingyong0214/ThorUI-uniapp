;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/top-dropdown/top-dropdown"],{"015a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiTopDropdown",props:{mask:{type:Boolean,default:!0},show:{type:Boolean,default:!1},bgcolor:{type:String,default:"#f2f2f2"},paddingbtm:{type:Number,default:0},height:{type:Number,default:580},translatey:{type:Number,default:0}},methods:{handleClose:function(){this.show&&this.$emit("close",{})},px:function(e){return t.upx2px(e)+"px"}}};e.default=n}).call(this,n("c11b")["default"])},"5a66":function(t,e,n){"use strict";var a=n("ef73"),u=n.n(a);u.a},7337:function(t,e,n){"use strict";n.r(e);var a=n("015a"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},"95b5":function(t,e,n){"use strict";n.r(e);var a=n("ca71"),u=n("7337");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("5a66");var r=n("2877"),f=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=f.exports},ca71:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.px(t.height)),a=t.px(t.paddingbtm),u=t.px(t.translatey);t.$mp.data=Object.assign({},{$root:{m0:n,m1:a,m2:u}})},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},ef73:function(t,e,n){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/top-dropdown/top-dropdown-create-component',
    {
        'components/top-dropdown/top-dropdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("95b5"))
        })
    },
    [['components/top-dropdown/top-dropdown-create-component']]
]);                
