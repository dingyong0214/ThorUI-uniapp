(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tips/tips"],{"2c86":function(t,e,n){"use strict";var i=n("e879"),u=n.n(i);u.a},"2e03":function(t,e,n){"use strict";n.r(e);var i=n("ce23"),u=n("8442");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("2c86");var o=n("2877"),s=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},8442:function(t,e,n){"use strict";n.r(e);var i=n("e5a4"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=u.a},ce23:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},e5a4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiTips",props:{position:{type:String,default:"top"}},data:function(){return{timer:null,show:!1,msg:"无法连接到服务器~",type:"translucent"}},methods:{showTips:function(t){var e=this,n=t.type,i=void 0===n?"translucent":n,u=t.duration,r=void 0===u?2e3:u;clearTimeout(this.timer),this.show=!0,this.type=i,this.msg=t.msg,this.timer=setTimeout(function(){e.show=!1,clearTimeout(e.timer),e.timer=null},r)}}};e.default=i},e879:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tips/tips-create-component',
    {
        'components/tips/tips-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2e03"))
        })
    },
    [['components/tips/tips-create-component']]
]);                
