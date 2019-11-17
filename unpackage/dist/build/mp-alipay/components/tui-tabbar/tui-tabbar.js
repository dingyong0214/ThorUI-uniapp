;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/tui-tabbar/tui-tabbar"],{"0ee5":function(t,e,n){"use strict";n.r(e);var u=n("f1e5"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a},"161f":function(t,e,n){"use strict";n.r(e);var u=n("9995"),r=n("0ee5");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("226f");var f=n("2877"),o=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},"226f":function(t,e,n){"use strict";var u=n("b8c2"),r=n.n(u);r.a},9995:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},b8c2:function(t,e,n){},f1e5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"tuiTabbar",props:{current:{type:Number,default:0},color:{type:String,default:"#666"},selectedColor:{type:String,default:"#5677FC"},backgroundColor:{type:String,default:"#FFFFFF"},hump:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!0},tabBar:{type:Array,default:function(){return[]}},badgeColor:{type:String,default:"#fff"},badgeBgColor:{type:String,default:"#F74D54"},unlined:{type:Boolean,default:!1}},watch:{current:function(){}},data:function(){return{}},methods:{tabbarSwitch:function(t,e,n,u){this.$emit("click",{index:t,hump:e,pagePath:n,verify:u})}}};e.default=u}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/tui-tabbar/tui-tabbar-create-component',
    {
        'components/tui-tabbar/tui-tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("161f"))
        })
    },
    [['components/tui-tabbar/tui-tabbar-create-component']]
]);                
