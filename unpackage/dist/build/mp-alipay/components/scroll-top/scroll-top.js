;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/scroll-top/scroll-top"],{"04eb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiScrollTop",props:{bottom:{type:Number,default:120},right:{type:Number,default:24},top:{type:Number,default:100},duration:{type:Number,default:120},scrollTop:{type:Number}},watch:{scrollTop:function(t,e){this.change()}},data:function(){return{visible:!1,toggle:!0}},methods:{goTop:function(){var e=this;this.toggle=!1,t.pageScrollTo({scrollTop:0,duration:this.duration}),setTimeout(function(){e.toggle=!0},220)},change:function(){var t=this.scrollTop>this.top;t&&this.visible||!t&&!this.visible||(this.visible=t)}}};e.default=n}).call(this,n("c11b")["default"])},4785:function(t,e,n){"use strict";n.r(e);var o=n("04eb"),u=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=u.a},6590:function(t,e,n){"use strict";n.r(e);var o=n("cab8"),u=n("4785");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("b1c3");var r=n("2877"),c=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},8474:function(t,e,n){},b1c3:function(t,e,n){"use strict";var o=n("8474"),u=n.n(o);u.a},cab8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/scroll-top/scroll-top-create-component',
    {
        'components/scroll-top/scroll-top-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("6590"))
        })
    },
    [['components/scroll-top/scroll-top-create-component']]
]);                
