;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/modal/modal"],{3105:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"4d72":function(t,e,n){"use strict";n.r(e);var a=n("3105"),u=n("5d5c");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("5909");var i=n("2877"),l=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports},5909:function(t,e,n){"use strict";var a=n("f782"),u=n.n(a);u.a},"5d5c":function(t,e,n){"use strict";n.r(e);var a=n("bbdc"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},bbdc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"tuiModal",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},custom:{type:Boolean,default:!1},fadein:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var e=t.currentTarget.dataset;this.$emit("click",{index:Number(e.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};e.default=a},f782:function(t,e,n){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/modal/modal-create-component',
    {
        'components/modal/modal-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("4d72"))
        })
    },
    [['components/modal/modal-create-component']]
]);                
