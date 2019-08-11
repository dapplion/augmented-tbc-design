(window["webpackJsonpaugmented-tbc-design"]=window["webpackJsonpaugmented-tbc-design"]||[]).push([[0],{216:function(e,t,a){e.exports=a(408)},406:function(e,t,a){},407:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(14),o=a.n(i),c=a(448),l=a(447),s=a(63),u=a.n(s),m=a(114),d=a(4),p=a(409),f=a(454),h=a(446),g=a(410),b=a(450),v=a(444),x=a(445),E=a(452),y=a(443),O="https://medium.com/block-science/cadcad-filling-a-critical-gap-in-open-source-data-science-fcd0d3faa8ed",k=Object(p.a)(function(e){return Object(f.a)({title:{},subtitle:{color:e.palette.text.secondary,margin:e.spacing(3,0,0)},subsubtitle:{color:e.palette.text.secondary,opacity:.6},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},link:{color:e.palette.primary.main},logoContainer:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:e.spacing(4)},logo:{width:"25px",marginRight:"4px"},logoText:{display:"inline",fontSize:"1.1rem",fontWeight:500}})});function j(){var e=k();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.logoContainer},r.a.createElement("img",{src:"./favicon.ico",className:e.logo,alt:"logo"}),r.a.createElement(g.a,{className:e.logoText},"Commons Stack")),r.a.createElement(g.a,{className:e.title,variant:"h4"},"Augmented Bonding Curve Design"),r.a.createElement(g.a,{className:e.subtitle},"Experiment and test augmented bonding curves"),r.a.createElement(g.a,{className:e.subsubtitle},"A narrative showcase of ",r.a.createElement(y.a,{href:O},"cadCAD"),"'s capabilities"))}var C=a(12),w=a(3),N=a(449),B=a(81),F=a.n(B),S=a(8),P=a(453),A=Object(S.a)({root:{height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4},markLabel:{top:30}})(P.a),R=a(451),T=Object(p.a)(function(e){var t;return{container:{color:e.palette.text.secondary,display:"flex",fontSize:"0.9rem",cursor:"pointer",transition:"color ease 150ms","&:hover":{color:"#c3c9d0"}},popoverContainer:{padding:e.spacing(2),"& > p:not(:last-child)":{paddingBottom:e.spacing(1),marginBottom:e.spacing(1),borderBottom:"1px solid #3f5463"}},paper:(t={backgroundColor:"#384b59",maxWidth:.9*e.breakpoints.values.md},Object(C.a)(t,"@media screen and (max-width: ".concat(e.breakpoints.values.md,"px)"),{maxWidth:"90vw"}),Object(C.a)(t,"padding",e.spacing(.5)),t),descriptionBody:{color:"#dbdfe4"}}});function I(e){var t=e.content,a=e.popoverText,n=T(),i=r.a.useState(null),o=Object(d.a)(i,2),c=o[0],l=o[1];function s(){l(null)}var u=Boolean(c),m=u?"simple-popover":void 0;return r.a.createElement("div",{className:n.container},r.a.createElement("div",{"aria-describedby":m,onClick:function(e){l(e.currentTarget)}},r.a.createElement(g.a,null,t)),r.a.createElement(R.a,{PaperProps:{className:n.paper},id:m,open:u,anchorEl:c,onClose:s,onClick:s,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(b.a,{className:n.popoverContainer},r.a.createElement(g.a,null,t),r.a.createElement(g.a,{className:n.descriptionBody},a))))}var M=Object(p.a)(function(e){return Object(f.a)({root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},leftContainer:{color:e.palette.text.secondary},centerContainer:{},listBoxContainer:{"& > div:not(:last-child)":{paddingBottom:"12px",marginBottom:"12px",borderBottom:"1px solid #313d47"}},listBox:{"& > div":{display:"flex",alignItems:"center","& p":{marginBottom:0}},"& > div:not(:last-child)":{paddingRight:"12px"}},slider:{color:e.palette.primary.main}})});function D(e){var t=e.inputRef,a=e.onChange,n=e.prefix,i=e.suffix,o=Object(w.a)(e,["inputRef","onChange","prefix","suffix"]);return r.a.createElement(F.a,Object.assign({},o,{getInputRef:t,onValueChange:function(e){a({target:{value:e.value}})},thousandSeparator:!0,prefix:n,suffix:i}))}function H(e){var t=e.inputFields,a=e.onChangeCommited,n=M();return r.a.createElement("div",{className:n.listBoxContainer},t.map(function(e){var t=e.label,i=e.description,o=e.value,c=e.setter,l=e.min,s=e.max,u=e.step,m=e.prefix,d=e.suffix,p=e.format,f=e.toText,h=e.toNum;function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;isNaN(e)&&(e=0),e>s?e=s:e<l&&(e=l),c(e)}return r.a.createElement(x.a,{key:t,container:!0,spacing:0,className:n.listBox},r.a.createElement(x.a,{item:!0,xs:6,className:n.leftContainer},r.a.createElement(I,{content:t,popoverText:i})),r.a.createElement(x.a,{item:!0,xs:2,className:n.centerContainer},r.a.createElement(N.a,{onChange:function(e){g(h?h(e.target.value):parseFloat(e.target.value)),a()},InputProps:{inputComponent:D,disableUnderline:!0,inputProps:{prefix:m,suffix:d}},value:f?f(o):o})),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(A,{className:n.slider,valueLabelDisplay:"auto","aria-label":t,defaultValue:o,onChange:function(e,t){return g(Number(t))},onChangeCommitted:a,value:o,min:l,max:s,step:u,valueLabelFormat:function(e){return p(e).replace("$","")}})))}))}var V={theta:{name:"Hatch Raise % to funding pool",text:"The percentage of the funds raised in the Hatch going directly to funding pool to be used to support the Commons, the rest goes to the collateral pool"},p0:{name:"Hatch price",text:"The price paid per token by when hatching the project"},p1:{name:"Post-Hatch price",text:"The price per token after the Hatch ends, the curve is set, and anyone can interact with the bonding curve"},wFee:{name:"Exit tribute",text:"The percentage that goes to the funding pool when token holders 'sell' by burning their token at the price determined by the bonding curve"},vHalflife:{name:"Vesting half-life",text:"Tokens that are purchased during the Hatch are locked for 8 weeks and then released slowly such that 50% of the tokens will be able to be sold after this many weeks and 87.5% of the tokens after 3x this many weeks"},d0:{name:"Hatch Raise",text:"Amount of funds contributed during the hatch period"}},L="Visualization of the bonding curve up to 4x the initial size of the Collateral Pool Post-Hatch. This result is deterministic given the curve parameters and the Hatch raise. It will never change regardless of the campaign's performance, it simply shows how the price will react to changes in the Collateral Pool.",z="This chart shows a 52 week simulation of discrete transactions interacting with the Augmented Bonding Curve. Each transaction adds to or subtracts reserve from the system, modifying the price over time. The frequency, size and direction of each transaction is computed from a set of bounded random functions. This is a NOT a cadCAD simulation, but it showcases the intention behind cadCAD.",W={price:{name:"Price",text:"Price of the token over time."},floorPrice:{name:"Floor price",text:"Lower bound of the price guaranteed by the vesting of hatch tokens. It decreases over time as more hatch tokens are allowed to be traded"},totalRaised:{name:"Total funds raised",text:"Cumulative sum of the funds sent to the Funding Pool"}},K={totalReserve:{name:"Collateral pool balance",text:"Total DAI in the collateral pool at the end of the simulated period"},initialHatchFunds:{name:"Funds generated from Raise Hatch",text:"Funds raised during the Hatch that go directly to the cause"},exitTributes:{name:"Funds generated from exit tributes",text:"Cumulative sum of exit tributes collected from only exit / sell / burn transactions"},slippage:{name:"Median slippage",text:"Median of change in price a user experiences from the current price to the price received for exiting/selling/burning"}};function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function q(e){var t=e.curveParams,a=e.setCurveParams,i=Object(n.useState)(t.theta),o=Object(d.a)(i,2),c=o[0],l=o[1],s=Object(n.useState)(t.p0),u=Object(d.a)(s,2),m=u[0],p=u[1],f=Object(n.useState)(t.p1),h=Object(d.a)(f,2),g=h[0],b=h[1],v=Object(n.useState)(t.wFee),x=Object(d.a)(v,2),E=x[0],y=x[1],O=Object(n.useState)(t.vHalflife),k=Object(d.a)(O,2),j=k[0],w=k[1];Object(n.useEffect)(function(){l(t.theta),p(t.p0),b(t.p1),y(t.wFee),w(t.vHalflife)},[t]);var N=10,B=1.5;var F=[{label:V.theta.name,description:V.theta.text,value:c,setter:l,min:0,max:.9,step:.01,suffix:"%",format:function(e){return"".concat(Math.round(100*e),"%")},toText:function(e){return String(+(100*e).toFixed(0))},toNum:function(e){return.01*parseFloat(e)}},{label:"".concat(V.p0.name," (DAI/token)"),description:V.p0.text,value:m,setter:function(e){p(e),g<e*B?b(e*B):g>e*N&&b(e*N)},min:.01,max:1,step:.01,toText:function(e){return String(+e.toFixed(2))},toNum:function(e){return parseFloat(e)},format:function(e){return"$".concat(e)}},{label:"".concat(V.p1.name," (DAI/token)"),description:V.p1.text,value:g,setter:b,min:Number((B*(m||.1)).toFixed(2)),max:Number((N*m).toFixed(2)),step:.01,toText:function(e){return String(+e.toFixed(2))},toNum:function(e){return parseFloat(e)},format:function(e){return"$".concat(e)}},{label:V.wFee.name,description:V.wFee.text,value:E,setter:y,min:0,max:.1,step:.001,suffix:"%",format:function(e){return"".concat(+(100*e).toFixed(1),"%")},toText:function(e){return String(+(100*e).toFixed(1))},toNum:function(e){return.01*parseFloat(e)}},{label:"".concat(V.vHalflife.name," (weeks)"),description:V.vHalflife.text,value:j,setter:w,min:1,max:104,step:1,suffix:"",format:function(e){return String(Math.round(e))},toText:function(e){return String(Math.round(e))},toNum:function(e){return Math.round(parseInt(e))}}];return r.a.createElement(H,{inputFields:F,onChangeCommited:function(){a(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(a,!0).forEach(function(t){Object(C.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{theta:c,p0:m,p1:g,wFee:E,vHalflife:j})})}})}var G=a(172),J=a.n(G),U=Object(p.a)(function(e){return{container:{display:"flex",marginLeft:"6px",fontSize:"0.9rem",cursor:"pointer",transition:"opacity ease 150ms",opacity:.2,"&:hover":{opacity:.85}},popoverContainer:{padding:e.spacing(2)},paper:Object(C.a)({backgroundColor:"#384b59",maxWidth:.9*e.breakpoints.values.md},"@media screen and (max-width: ".concat(e.breakpoints.values.md,"px)"),{maxWidth:"90vw"}),descriptionContainer:{"& > div:not(:last-child)":{paddingBottom:e.spacing(1),marginBottom:e.spacing(1),borderBottom:"1px solid #3f5463"},"& td":{verticalAlign:"top",padding:e.spacing(.5)}},descriptionTitle:{padding:e.spacing(.5)},descriptionBody:{color:"#dbdfe4",padding:e.spacing(.5)},descriptionPadding:{padding:e.spacing(.5)}}});function Q(e){var t=e.text,a=e.title,n=e.table,i=e.body,o=U(),c=r.a.useState(null),l=Object(d.a)(c,2),s=l[0],u=l[1];function m(){u(null)}var p=Boolean(s),f=p?"simple-popover":void 0;return r.a.createElement("div",{className:o.container},r.a.createElement(J.a,{onClick:function(e){u(e.currentTarget)}}),r.a.createElement(R.a,{PaperProps:{className:o.paper},id:f,open:p,anchorEl:s,onClose:m,onClick:m,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(b.a,{className:o.popoverContainer},r.a.createElement("div",{className:o.descriptionContainer},a&&r.a.createElement("div",null,r.a.createElement(g.a,{className:o.descriptionTitle},a)),i&&r.a.createElement("div",null,r.a.createElement(g.a,{className:o.descriptionBody},i)),n&&r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,n.map(function(e){var t=e.name,a=e.text;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(g.a,null,t)),r.a.createElement("td",null,r.a.createElement(g.a,{className:o.descriptionBody},a)))})))),t))))}var X=Object(p.a)(function(e){return Object(f.a)({root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},leftContainer:{},centerContainer:{},listBoxContainer:{"& > div:not(:last-child)":{paddingBottom:"12px",marginBottom:"12px",borderBottom:"1px solid #313d47"}},listBox:{"& > div":{display:"flex",alignItems:"center","& p":{marginBottom:0}},"& > div:not(:last-child)":{paddingRight:"12px"}},slider:{color:e.palette.primary.main}})});function Y(e){var t=e.inputRef,a=e.onChange,n=e.prefix,i=e.suffix,o=Object(w.a)(e,["inputRef","onChange","prefix","suffix"]);return r.a.createElement(F.a,Object.assign({},o,{getInputRef:t,onValueChange:function(e){a({target:{value:e.value}})},thousandSeparator:!0,prefix:n,suffix:i}))}function Z(e){var t=e.inputFields,a=e.onChangeCommited,n=X();return r.a.createElement("div",{className:n.listBoxContainer},t.map(function(e){var t=e.label,i=e.description,o=e.value,c=e.setter,l=e.min,s=e.max,u=e.step,m=e.prefix,d=e.suffix,p=e.format,f=e.toText,h=e.toNum;function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;isNaN(e)&&(e=0),e>s?e=s:e<l&&(e=l),c(e)}return r.a.createElement(x.a,{key:t,container:!0,spacing:0,className:n.listBox},r.a.createElement(x.a,{item:!0,xs:6,sm:6,md:3,lg:2,className:n.leftContainer},r.a.createElement(g.a,{variant:"h6"},t),r.a.createElement(Q,{title:t,body:i})),r.a.createElement(x.a,{item:!0,xs:2,sm:2,md:1,className:n.centerContainer},r.a.createElement(N.a,{onChange:function(e){b(h?h(e.target.value):parseFloat(e.target.value)),a()},InputProps:{inputComponent:Y,disableUnderline:!0,inputProps:{prefix:m,suffix:d}},value:f?f(o):o})),r.a.createElement(x.a,{item:!0,xs:4,sm:4,md:8,lg:9},r.a.createElement(A,{className:n.slider,valueLabelDisplay:"auto","aria-label":t,defaultValue:o,onChange:function(e,t){return b(Number(t))},onChangeCommitted:a,value:o,min:l,max:s,step:u,valueLabelFormat:function(e){return p(e).replace("$","")}})))}))}function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ee(e){var t=e.curveParams,a=e.setCurveParams,i=Object(n.useState)(3e6),o=Object(d.a)(i,2),c=o[0],l=o[1];Object(n.useEffect)(function(){l(t.d0)},[t]);var s=[{label:"".concat(V.d0.name),description:V.d0.text,value:c,setter:l,min:1e5,max:1e7,step:1e5,suffix:"M",format:function(e){return"$".concat(+(1e-6*e).toFixed(1),"M")},toText:function(e){return String(+(1e-6*e).toFixed(1))},toNum:function(e){return Math.floor(1e6*parseFloat(e))}}];return r.a.createElement(Z,{inputFields:s,onChangeCommited:function(){a(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(C.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{d0:c})})}})}var te=a(15);function ae(e){for(var t=e.from,a=void 0===t?0:t,n=e.to,r=e.steps,i=[],o=a;o<=n;o+=(n-a)/r)i.push(o);return i}function ne(e,t){for(var a=[],n=(e[e.length-1]-e[0])/t,r=e[0];r<e[e.length-1];r+=n)a.push(r);return a.length<t+1&&a.push(e[e.length-1]),a}function re(e){return e[e.length-1]}function ie(e){return e.reduce(function(e,t){return e+Math.abs(t)},0)/e.length}function oe(e){return new Promise(function(t){return setTimeout(t,e)})}function ce(e){var t=e>5e8?[1e9,"B"]:e>5e5?[1e6,"M"]:e>500?[1e3,"K"]:[1,""],a=Object(d.a)(t,2);return{scaling:a[0],unit:a[1]}}var le=a(19);function se(e){var t=e.d0,a=e.theta,n=e.p0,r=e.p1/n/(1-a),i=(1-a)*t,o=t/n;return{k:r,R0:i,S0:o,V0:Math.pow(o,r)/i}}function ue(e){var t=e.S,a=e.V0,n=e.k;return Math.pow(t,n)/a}function me(e){var t=e.R,a=e.V0,n=e.k;return Math.pow(a*t,1/n)}function de(e){var t=e.S,a=e.H,n=e.V0,r=e.k;if(t===a){var i=pe({R:ue({S:t,V0:n,k:r}),V0:n,k:r});return Math.abs(i)}return pe({R:ue({S:t-a,V0:n,k:r}),V0:n,k:r})}function pe(e){var t=e.R,a=e.V0,n=e.k;return n*Math.pow(t,(n-1)/n)/Math.pow(a,1/n)}function fe(e){var t=e.R,a=e.deltaR,n=e.V0,r=e.k,i=Math.pow(n*t,1/r),o=a/(Math.pow(n*(t+a),1/r)-i),c=pe({R:t,V0:n,k:r});return Math.abs(o-c)/c}function he(e){var t=e.R,a=e.k,n=e.priceGrowth;return-t+Math.pow(n*Math.pow(t,1-1/a),a/(-1+a))}function ge(e){for(var t=e.sum,a=e.num,n=t/a,r=n*e.spread,i=[],o=0;o<a;o++)i.push(xe(n-r,n+r));return i}function be(e){var t=e.week,a=e.H,n=e.halflife;return t<e.cliff?0:a*(1-Math.pow(.5,1/n))}function ve(e,t){return Math.random()*(t-e)+e}function xe(e,t){for(var a=0,n=0;0===a;)a=Math.random();for(;0===n;)n=Math.random();var r=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*n);return((r=r/10+.5)>1||r<0)&&(r=xe(e,t)),r*=t-e,r+=e}function Ee(e){var t=Math.floor(e.length/2),a=Object(le.a)(e).sort(function(e,t){return e-t});return e.length%2!==0?a[t]:(a[t-1]+a[t])/2}var ye=a(185),Oe=!1,ke="x",je="Supply (tokens) / Collateral (DAI)",Ce="#b7c1cb",we=Object(p.a)(function(e){return Object(f.a)({tooltip:{border:"1px solid #313d47",backgroundColor:"#384b59",padding:e.spacing(1),color:"#c7ccd2"}})});var Ne=function(e){for(var t=e.theta,a=se({d0:e.d0,theta:t,p0:e.p0,p1:e.p1}),n=a.k,i=a.R0,o=a.S0,c=a.V0,l=Math.round(i),s=function(e){return o*Math.pow(e/l,1/n)},u=4*l,m=Math.round((u-0)/100),p=ce(Math.max(u,s(u))),f=p.scaling,h=p.unit,g=[],b=0;b<101;b++){var v,x=Math.round(0+m*b);g.push((v={},Object(C.a)(v,ke,x),Object(C.a)(v,je,s(x)),v))}var E=Object(ye.a)(),y=we(),O=function(e){return(+(e/f).toPrecision(2)).toLocaleString()};return r.a.createElement(te.g,{debounce:1},r.a.createElement(te.b,{width:0,height:400,data:g,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(te.c,{vertical:!1,stroke:E.palette.text.secondary,strokeOpacity:.13}),r.a.createElement(te.i,{interval:24,dataKey:ke,tickFormatter:O,unit:h,tick:{fill:E.palette.text.secondary},stroke:E.palette.text.secondary}),r.a.createElement(te.j,{interval:"preserveStartEnd",ticks:ne(g.map(function(e){return e[je]}),3),tickFormatter:O,unit:h,tick:{fill:E.palette.text.secondary},domain:[0,s(u)],stroke:E.palette.text.secondary}),r.a.createElement(te.h,{content:r.a.createElement(function(e){var t=e.active,a=e.payload,i=e.label;if(t){var o=a[0].value,l=i,s=pe({R:l,V0:c,k:n}),u=[["Supply",O(o)+h,"tokens"],["Collateral",O(l)+h,"DAI"],["Price",s.toFixed(2),"DAI/token"]];return r.a.createElement("div",{className:y.tooltip},r.a.createElement("table",null,r.a.createElement("tbody",null,u.map(function(e){var t=Object(d.a)(e,3),a=t[0],n=t[1],i=t[2];return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,i))}))))}return null},null)}),r.a.createElement(te.a,{isAnimationActive:Oe,type:"monotone",dataKey:je,stroke:E.palette.primary.main,fill:E.palette.primary.main,fillOpacity:.3,strokeWidth:2}),r.a.createElement(te.f,{x:l,y:s(l),stroke:"transparent",strokeDasharray:"9 0",label:r.a.createElement(function(e){var t=e.textAnchor,a=e.viewBox;return r.a.createElement("text",{x:a.x+a.width/4+10,y:a.y+20,fill:Ce,textAnchor:t},"Initial Token Supply")},null)}),r.a.createElement(te.e,{x:l,y:s(l),r:6,fill:E.palette.primary.main,stroke:2}),r.a.createElement(te.d,{formatter:function(e){return r.a.createElement("span",{style:{color:E.palette.text.secondary}},e)}})))};a(406);function Be(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"}))}var Fe=Object(p.a)(function(e){return Object(f.a)({root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},leftContainer:{color:e.palette.text.secondary},centerContainer:{},listBoxContainer:{"& > div:not(:last-child)":{marginBottom:"12px",borderBottom:"1px solid #313d47"}},listBox:{paddingBottom:"12px","& > div":{display:"flex",alignItems:"center","& p":{marginBottom:0}},"& > div:not(:last-child)":{paddingRight:"12px"}},valueFooter:{color:e.palette.text.secondary,fontSize:"80%"}})});function Se(e){var t=e.resultFields,a=e.simulationDuration,i=Object(n.useState)(!0),o=Object(d.a)(i,2),c=o[0],l=o[1];Object(n.useEffect)(function(){var e=setTimeout(function(){l(!1)},a);return function(){clearTimeout(e)}});var s=Fe();return r.a.createElement("div",{className:s.listBoxContainer},t.map(function(e){var t=e.label,a=e.description,n=e.value,i=e.valueFooter;return r.a.createElement(x.a,{key:t,container:!0,spacing:0,className:s.listBox},r.a.createElement(x.a,{item:!0,xs:8,className:s.leftContainer},r.a.createElement(I,{content:t,popoverText:a})),r.a.createElement(x.a,{item:!0,xs:4,className:s.centerContainer},c?r.a.createElement(Be,null):r.a.createElement("div",null,r.a.createElement(g.a,null,n),i&&r.a.createElement(g.a,{className:s.valueFooter},i))))}))}var Pe="x",Ae="Price (DAI/token)",Re="Floor price (DAI/token)",Te="Total funds raised (DAI)",Ie="Post-Hatch price",Me="Hatch price",De="#53c388",He="#4090d9",Ve="#b7c1cb",Le=Object(p.a)(function(e){return Object(f.a)({tooltip:{border:"1px solid #313d47",backgroundColor:"#384b59",padding:e.spacing(1),color:"#c7ccd2"}})});var ze=function(e){for(var t=e.priceTimeseries,a=e.totalFundsRaisedTimeseries,i=e.floorpriceTimeseries,o=e.simulationDuration,c=e.p0,l=e.p1,s=[],u=0;u<t.length;u++){var m;s.push((m={},Object(C.a)(m,Pe,u),Object(C.a)(m,Ae,t[u]||0),Object(C.a)(m,Re,i[u]||0),Object(C.a)(m,Te,a[u]||0),m))}var p=Object(n.useState)(!0),f=Object(d.a)(p,2),h=f[0],g=f[1];Object(n.useEffect)(function(){var e=setTimeout(function(){g(!1)},o+100);return function(){clearTimeout(e)}});var b=a[0],v=a.slice(-1)[0],x=v-b,E=function(e){return(+e.toFixed(2)).toLocaleString()},y=ce(v),O=y.scaling,k=y.unit,j=function(e){return(+(e/O).toPrecision(3)).toLocaleString()},w=Object(ye.a)(),N=Le();function B(e){var t=e.textAnchor,a=e.viewBox,n=e.text;e.fill;return r.a.createElement("text",{x:a.x+4,y:a.y+17,fill:Ve,textAnchor:t},n)}return r.a.createElement(te.g,{debounce:1},r.a.createElement(te.b,{width:0,height:400,data:s,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(te.c,{vertical:!1,stroke:w.palette.text.secondary,strokeOpacity:.13}),r.a.createElement(te.i,{dataKey:Pe,tick:{fill:w.palette.text.secondary},stroke:w.palette.text.secondary,ticks:[].concat(Object(le.a)(ae({to:t.length,steps:4}).map(Math.floor)),[t.length-1])}),r.a.createElement(te.j,{yAxisId:"left",domain:[0,Math.max.apply(Math,Object(le.a)(t).concat([1.25*l]))],tickFormatter:E,tick:{fill:De},stroke:De}),r.a.createElement(te.j,{yAxisId:"right",domain:[b.toPrecision(2),+(v+x).toPrecision(2)],orientation:"right",tickFormatter:function(e){return(+e.toPrecision(3)).toLocaleString()},tick:{fill:He},stroke:He}),r.a.createElement(te.h,{content:r.a.createElement(function(e){var t=e.active,a=e.payload,n=e.label;if(t){var i=a[0].value,o=a[1].value,c=a[2].value,l=n,s=[["Price",E(i),"DAI/tk"],["Floor P.",E(o),"DAI/tk"],["Funds R.",j(c)+k,"DAI"],["Week",l,""]];return r.a.createElement("div",{className:N.tooltip},r.a.createElement("table",null,r.a.createElement("tbody",null,s.map(function(e){var t=Object(d.a)(e,3),a=t[0],n=t[1],i=t[2];return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,i))}))))}return null},null)}),r.a.createElement(te.a,{isAnimationActive:h,animationDuration:o,yAxisId:"left",type:"monotone",dataKey:Ae,stroke:w.palette.primary.main,fill:w.palette.primary.main,fillOpacity:.3,strokeWidth:2}),r.a.createElement(te.a,{isAnimationActive:h,animationDuration:o,yAxisId:"left",type:"monotone",dataKey:Re,stroke:"#adcd2e",fill:"#adcd2e",fillOpacity:.05,strokeWidth:2}),r.a.createElement(te.f,{y:c,yAxisId:"left",stroke:w.palette.primary.main,label:r.a.createElement(B,{text:Me})}),r.a.createElement(te.f,{y:l,yAxisId:"left",stroke:w.palette.primary.main,label:r.a.createElement(B,{text:Ie})}),r.a.createElement(te.a,{isAnimationActive:h,animationDuration:o,yAxisId:"right",type:"monotone",dataKey:Te,stroke:"#0085ff",fill:w.palette.secondary.dark,fillOpacity:.5,strokeWidth:2}),r.a.createElement(te.d,{formatter:function(e){return r.a.createElement("span",{style:{color:w.palette.text.secondary}},e)}})))},We=a(182),Ke=[1,.8,.8,.9,.9,.8,.6,.5,.8,.9,.9,.97,.97,.97,.8,.97,.97,.97,.75,.97,.97,.97,.75,.97,.97,.97,.75,.97,.97,.97,.75,.97,.97,.97,.75,.97,.97,.97,.75,.97,.97,.97,.97,.97,.97,.75,.97,.97,.97,.97,.97,.97],$e=[3,1.5,1.01,1.04,1.1,1.15,1.15,1.15,1.1,1.1,1.2,1.15,1.07,1.07,1.3,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.3,1.07,1.07,1.07,1.07,1.07,1.2,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.4,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.07,1.04],qe=(a(407),4e3),Ge=Object(p.a)(function(e){return Object(f.a)({mainContainer:{"& > div:not(:last-child)":{paddingBottom:e.spacing(3)},"& > div":{"& > div":{paddingTop:"0 !important"}},paddingBottom:e.spacing(9)},simulationContainer:{minHeight:"442px"},paper:{width:"100%",height:"100%",minHeight:310,backgroundColor:"#293640"},box:{padding:e.spacing(3,3)},boxButton:{padding:e.spacing(3,3)},boxHeader:{padding:e.spacing(3,3),height:e.spacing(10),display:"flex",alignItems:"center",borderBottom:"1px solid #313d47"},boxBorderBottom:{borderBottom:"1px solid #313d47"},initialRaise:{justifyContent:"space-between"},boxChart:{width:"100%",height:"100%",minHeight:310,maxHeight:350,padding:e.spacing(3,3),paddingRight:"5px",paddingLeft:"5px"},boxPlaceholder:{padding:e.spacing(3,3),display:"flex",height:"100%",alignItems:"center",justifyContent:"center",color:e.palette.text.secondary,opacity:.4},header:{backgroundColor:"#0b1216",color:"#f8f8f8",textAlign:"center",padding:e.spacing(3,0,16),marginBottom:-e.spacing(10)},button:{background:"linear-gradient(290deg, #1aa059, #3d9567)",color:"white"},descriptionContainer:{"& > div:not(:last-child)":{paddingBottom:e.spacing(1),marginBottom:e.spacing(1),borderBottom:"1px solid #3f5463"},"& td":{verticalAlign:"top",padding:e.spacing(.5)}},descriptionTitle:{padding:e.spacing(.5)},descriptionBody:{color:"#dbdfe4"},descriptionPadding:{padding:e.spacing(.5)},d0Container:{"& > div":{padding:"0 12px 0 0 !important",display:"flex",alignItems:"center"}},d0Number:{padding:"0 !important",display:"flex",alignItems:"center"},d0Slidder:{padding:"0 12px 0 0 !important",display:"flex",alignItems:"center"}})});var Je=a(183),Ue=a.n(Je),Qe=a(184),Xe=Object(Qe.a)({palette:{type:"dark",primary:{main:"#2ecd79"},secondary:{main:"#116be0",light:"#0f8bff",dark:"#116be0"},error:{main:Ue.a.A400},background:{default:"#fff",paper:"#293640"},text:{primary:"#fff",secondary:"#9aa3ad"}},typography:{h6:{fontWeight:400}}});console.log(Xe);var Ye=Xe;o.a.render(r.a.createElement(l.a,{theme:Ye},r.a.createElement(c.a,null),r.a.createElement(function(){var e=Object(n.useState)({theta:.35,p0:.1,p1:.3,wFee:.05,vHalflife:17,d0:3e6}),t=Object(d.a)(e,2),a=t[0],i=t[1],o=a.d0,c=a.theta,l=a.p0,s=a.p1,p=a.wFee,f=a.vHalflife,y=Object(n.useMemo)(function(){return Object(We.throttle)(i,250)},[]),O=se({d0:o,theta:c,p0:l,p1:s}),k=O.k,C=O.R0,w=O.S0,N=O.V0,B=Object(n.useState)([0]),F=Object(d.a)(B,2),S=F[0],P=F[1],A=Object(n.useState)([0]),R=Object(d.a)(A,2),T=R[0],I=R[1],M=Object(n.useState)([0]),D=Object(d.a)(M,2),H=D[0],$=D[1],G=Object(n.useState)(C),J=Object(d.a)(G,2),U=J[0],X=J[1],Y=Object(n.useState)(0),Z=Object(d.a)(Y,2),_=Z[0],te=Z[1],ae=Object(n.useState)(0),ne=Object(d.a)(ae,2),ce=ne[0],le=ne[1],ue=Object(n.useState)(0),xe=Object(d.a)(ue,2),ye=xe[0],Oe=xe[1],ke=Object(n.useState)(!1),je=Object(d.a)(ke,2),Ce=je[0],we=je[1],Be=Object(n.useState)(!1),Fe=Object(d.a)(Be,2),Pe=Fe[0],Ae=Fe[1];function Re(){return(Re=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Te(),e.next=3,oe(0);case 3:we(!0);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Te(){we(!1),te(0),P([0]),I([0]),le(0)}Object(n.useEffect)(function(){we(!1)},[a]),Object(n.useEffect)(function(){var e=!0;function t(){return(t=Object(m.a)(u.a.mark(function t(){var a,n,r,i,o,c,l,s,m,d,h;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=[C],n=[w],r=[pe({R:C,V0:N,k:k})],i=[0],o=[],c=[],l=[w],s=[],m=52,.97,1.04,10,8,Ae(!0),d=function(t){for(var u=ve(100,40*t+100),m=re(a),d=(re(n),re(l)),h=0,g=0,b=0,v=0,x=[0],E=1,y=0,O=0;O<20&&v<1.05*E;O++){var j=void 0,C=void 0;j=Ke[t],C=$e[t],O>15&&(j=1.02,C+=1.04);var w=ve(j,C),B=he({R:m,k:k,priceGrowth:w});h=m+B;var F=ge({sum:B,num:u,spread:10});y=Ee(F.map(function(e){return fe({R:m,deltaR:e,V0:N,k:k})})),x=F.filter(function(e){return e<0}),b=d-be({week:t,H:d,halflife:f,cliff:8}),E=de({S:g=me({R:m,V0:N,k:k}),H:g-b,V0:N,k:k}),v=pe({R:h,V0:N,k:k})}var S=Ee(x),P=-p*x.reduce(function(e,t){return e+t},0);if(a.push(h),n.push(g),l.push(b),r.push(v),o.push(y),c.push(S),i.push(re(i)+P),s.push(E),te(function(e){return e+x.length}),!Ce||!e)return"break"},h=0;case 16:if(!(h<m)){t.next=23;break}if("break"!==d(h)){t.next=20;break}return t.abrupt("break",23);case 20:h++,t.next=16;break;case 23:s[s.length]=s[s.length-1],P(r),I(i),$(s),le(ie(o)),Oe(ie(c.filter(function(e){return!isNaN(e)}))),X(re(a)),Ae(!1);case 31:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Ce&&function(){t.apply(this,arguments)}(),function(){e=!1}},[Ce]);var Ie=o*c,Me=T.map(function(e){return e+Ie}),De=[{label:K.totalReserve.name,description:K.totalReserve.text,value:(+U.toPrecision(3)).toLocaleString()+" DAI"},{label:K.initialHatchFunds.name,description:K.initialHatchFunds.text,value:Math.round(o*c).toLocaleString()+" DAI"},{label:K.exitTributes.name,description:K.exitTributes.text,value:(+re(T).toPrecision(3)).toLocaleString()+" DAI",valueFooter:"From ".concat(_," exit txs")},{label:K.slippage.name,description:K.slippage.text,value:+(100*ce).toFixed(3)+" %",valueFooter:"Avg tx size ".concat(Math.round(ye).toLocaleString()," DAI")}],He=Ge();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:He.header},r.a.createElement(h.a,{fixed:!0},r.a.createElement(j,null))),r.a.createElement(h.a,{fixed:!0,className:He.mainContainer},r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0,xs:12,sm:12,md:6,lg:4},r.a.createElement(v.a,{className:He.paper},r.a.createElement(b.a,{className:He.boxHeader},r.a.createElement(g.a,{variant:"h6"},"Curve Design"),r.a.createElement(Q,{title:"Parameters description",table:[V.theta,V.p0,V.p1,V.wFee,V.vHalflife]})),r.a.createElement(b.a,{className:"".concat(He.box," ").concat(He.boxBorderBottom)},r.a.createElement(q,{curveParams:a,setCurveParams:y})))),r.a.createElement(x.a,{item:!0,xs:12,sm:12,md:6,lg:8},r.a.createElement(v.a,{className:He.paper},r.a.createElement(b.a,{className:He.boxHeader},r.a.createElement(g.a,{variant:"h6"},"Preview"),r.a.createElement(Q,{body:L})),r.a.createElement(b.a,{className:He.boxChart},r.a.createElement(Ne,{theta:c,d0:o,p0:l,p1:s}))))),r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(v.a,null,r.a.createElement(b.a,{className:"".concat(He.box," ").concat(He.boxBorderBottom)},r.a.createElement(ee,{curveParams:a,setCurveParams:y})),r.a.createElement(b.a,{className:He.boxHeader},r.a.createElement(x.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{variant:"contained",className:He.button,onClick:function(){return Re.apply(this,arguments)},disabled:Pe},"Run simulation")))))),r.a.createElement(x.a,{container:!0,spacing:3,className:He.simulationContainer},Ce?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{item:!0,xs:12,sm:12,md:6,lg:8},r.a.createElement(v.a,{className:He.paper},r.a.createElement(b.a,{className:He.boxHeader},r.a.createElement(g.a,{variant:"h6"},"Simulation"),r.a.createElement(Q,{body:z,table:Object.values(W)})),r.a.createElement(b.a,{className:He.boxChart},r.a.createElement(ze,{priceTimeseries:S,floorpriceTimeseries:H,totalFundsRaisedTimeseries:Me,simulationDuration:qe,p0:l,p1:s})))),r.a.createElement(x.a,{item:!0,xs:12,sm:12,md:6,lg:4},r.a.createElement(v.a,{className:He.paper},r.a.createElement(b.a,{className:He.boxHeader},r.a.createElement(g.a,{variant:"h6"},"Results"),r.a.createElement(Q,{title:"Result parameters description",table:Object.values(K)})),r.a.createElement(b.a,{className:He.box},r.a.createElement(Se,{resultFields:De,simulationDuration:qe}))))):r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(v.a,{className:He.paper},r.a.createElement(b.a,{className:He.boxPlaceholder},r.a.createElement(g.a,{variant:"h6"},"Run a simulation to see results")))))))},null)),document.querySelector("#root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.ba7919ce.chunk.js.map