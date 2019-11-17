;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/tips/tips"],{"2c86":function(t,n,e){"use strict";var i=e("4cc6"),u=e.n(i);u.a},"2e03":function(t,n,e){"use strict";e.r(n);var i=e("ce23"),u=e("8442");for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);e("2c86");var o=e("2877"),s=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},"4cc6":function(t,n,e){},8442:function(t,n,e){"use strict";e.r(n);var i=e("da93"),u=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);n["default"]=u.a},ce23:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u})},da93:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"tuiTips",props:{position:{type:String,default:"top"}},data:function(){return{timer:null,show:!1,msg:"无法连接到服务器~",type:"translucent"}},methods:{showTips:function(t){var n=this,e=t.type,i=void 0===e?"translucent":e,u=t.duration,r=void 0===u?2e3:u;clearTimeout(this.timer),this.show=!0,this.type=i,this.msg=t.msg,this.timer=setTimeout(function(){n.show=!1,clearTimeout(n.timer),n.timer=null},r)}}};n.default=i}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/tips/tips-create-component',
    {
        'components/tips/tips-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("2e03"))
        })
    },
    [['components/tips/tips-create-component']]
]);                
