(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,a){e.exports=a(412)},405:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(13),o=a.n(i),c=a(456),l=a(455),s=a(64),m=a.n(s),u=a(114),p=a(18),d=a(413),f=a(461),g=a(454),h=a(414),x=a(458),b=a(453),v=a(452),E=a(459),y=a(451),j=Object(d.a)(function(e){return Object(f.a)({root:{margin:e.spacing(3,0,0)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},link:{color:e.palette.primary.main}})});function O(){var e=j();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"h4",component:"h1",gutterBottom:!0},"Augmented Token Bonding Curve Design"),r.a.createElement(h.a,{className:e.root},"Experiment and test augmented token bonding curves, part of the"," ",r.a.createElement(y.a,{className:e.link,href:"https://commonsstack.org/"},"Commons Stack")))}var k=a(185),w=a(7),C=a(460),N=a(457),F=a(169),S=a.n(F),B=Object(w.a)({root:{height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4},markLabel:{top:30}})(C.a),A=Object(d.a)(function(e){return Object(f.a)({root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},leftContainer:{color:e.palette.text.secondary},centerContainer:{},listBoxContainer:{"& > div:not(:last-child)":{paddingBottom:"12px",marginBottom:"12px",borderBottom:"1px solid #313d47"}},listBox:{"& > div":{display:"flex",alignItems:"center","& p":{marginBottom:0}},"& > div:not(:last-child)":{paddingRight:"12px"}},slider:{color:e.palette.primary.main}})});function I(e){var t=e.inputRef,a=e.onChange,n=e.prefix,i=e.suffix,o=Object(k.a)(e,["inputRef","onChange","prefix","suffix"]);return r.a.createElement(S.a,Object.assign({},o,{getInputRef:t,onValueChange:function(e){a({target:{value:e.value}})},thousandSeparator:!0,prefix:n,suffix:i}))}function M(e){e.curveParams;var t=e.setCurveParams,a=Object(n.useState)(1e6),i=Object(p.a)(a,2),o=i[0],c=i[1],l=Object(n.useState)(.35),s=Object(p.a)(l,2),m=s[0],u=s[1],d=Object(n.useState)(.1),f=Object(p.a)(d,2),g=f[0],x=f[1],b=Object(n.useState)(3),E=Object(p.a)(b,2),y=E[0],j=E[1],O=Object(n.useState)(.05),k=Object(p.a)(O,2),w=k[0],C=k[1];function F(){t({d0:o,theta:m,p0:g,returnF:y,wFee:w})}var S=[{label:"Initial raise",value:o,setter:c,min:1e5,max:1e7,step:1e5,unit:"$M",prefix:"$",suffix:"M",format:function(e){return"$".concat(+(1e-6*e).toFixed(1),"M")},toText:function(e){return String(+(1e-6*e).toFixed(1))},toNum:function(e){return Math.floor(1e6*parseFloat(e))}},{label:"Allocation to project",value:m,setter:u,min:0,max:.9,step:.01,unit:"%",suffix:"%",format:function(e){return"".concat(Math.round(100*e),"%")},toText:function(e){return String(+(100*e).toFixed(0))},toNum:function(e){return.01*parseFloat(e)}},{label:"Initial token price",value:g,setter:x,min:.01,max:1,step:.01,unit:"$",prefix:"$",toText:function(e){return String(+e.toFixed(2))},toNum:function(e){return parseFloat(e)},format:function(e){return"$".concat(e)}},{label:"Return factor",value:y,setter:j,min:1,max:10,step:.1,unit:"x",suffix:"x",toText:function(e){return String(+e.toFixed(1))},toNum:function(e){return parseFloat(e)},format:function(e){return"".concat(e,"x")}},{label:"Withdrawl fee",value:w,setter:C,min:0,max:.1,step:.001,unit:"%",suffix:"%",format:function(e){return"".concat(+(100*e).toFixed(1),"%")},toText:function(e){return String(+(100*e).toFixed(1))},toNum:function(e){return.01*parseFloat(e)}}],M=A();return r.a.createElement("div",{className:M.listBoxContainer},S.map(function(e){var t=e.label,a=e.value,n=e.setter,i=e.min,o=e.max,c=e.step,l=e.prefix,s=e.suffix,m=e.format,u=e.toText,p=e.toNum;function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;isNaN(e)&&(e=0),e>o?e=o:e<i&&(e=i),n(e)}return r.a.createElement(v.a,{key:t,container:!0,spacing:0,className:M.listBox},r.a.createElement(v.a,{item:!0,xs:6,className:M.leftContainer},r.a.createElement(h.a,{id:t,gutterBottom:!0},t)),r.a.createElement(v.a,{item:!0,xs:2,className:M.centerContainer},r.a.createElement(N.a,{onChange:function(e){d(p?p(e.target.value):parseFloat(e.target.value)),F()},InputProps:{inputComponent:I,disableUnderline:!0,inputProps:{prefix:l,suffix:s}},value:u?u(a):a})),r.a.createElement(v.a,{item:!0,xs:4},r.a.createElement(B,{className:M.slider,valueLabelDisplay:"auto","aria-label":t,defaultValue:a,onChange:function(e,t){return d(Number(t))},onChangeCommitted:F,value:a,min:i,max:o,step:c,valueLabelFormat:function(e){return m(e).replace("$","")}})))}))}var R=a(47),D=a(17);function P(e){for(var t=e.from,a=void 0===t?0:t,n=e.to,r=e.steps,i=[],o=a;o<=n;o+=(n-a)/r)i.push(o);return i}function T(e){return e[e.length-1]}function H(e){return e.reduce(function(e,t){return e+Math.abs(t)},0)/e.length}function L(e){return new Promise(function(t){return setTimeout(t,e)})}var $=a(186);var K=function(e){for(var t=e.returnF,a=e.theta,n=e.d0,i=e.p0,o=t/(1-a),c=(1-a/100)*n,l=n/i,s=function(e){return l*Math.pow(e/c,1/o)},m=4*c,u=(m-0)/100,d=Math.max(m,s(m)),f=d>5e8?[1e9,"B"]:d>5e5?[1e6,"M"]:d>500?[1e3,"K"]:[1,""],g=Object(p.a)(f,2),h=g[0],x=g[1],b=[],v=0;v<=m;v+=u){var E;b.push((E={},Object(R.a)(E,"x",v),Object(R.a)(E,"Supply (tokens) / Reserve (DAI)",s(v)),E))}var y=Object($.a)(),j=function(e){return(+(e/h).toPrecision(2)).toLocaleString()};return r.a.createElement(D.f,{debounce:1},r.a.createElement(D.b,{width:0,height:400,data:b,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(D.c,{strokeDasharray:"3 3"}),r.a.createElement(D.h,{interval:"preserveStartEnd",ticks:P({to:m,steps:4}),dataKey:"x",tickFormatter:j,unit:x,tick:{fill:y.palette.text.secondary},stroke:y.palette.text.secondary}),r.a.createElement(D.i,{interval:"preserveStartEnd",ticks:P({to:s(m),steps:3}),tickFormatter:j,unit:x,tick:{fill:y.palette.text.secondary},domain:[0,s(m)],stroke:y.palette.text.secondary}),r.a.createElement(D.g,{formatter:function(e){return j(Number(e))}}),r.a.createElement(D.a,{isAnimationActive:!1,type:"monotone",dataKey:"Supply (tokens) / Reserve (DAI)",stroke:y.palette.primary.main,fill:y.palette.primary.main}),r.a.createElement(D.e,{x:c,stroke:"#90a4ae",strokeDasharray:"6 3",label:r.a.createElement(function(e){var t=e.textAnchor,a=e.viewBox;return r.a.createElement("text",{x:a.x+10,y:30,fill:y.palette.text.secondary,textAnchor:t},"Initial value")},null)}),r.a.createElement(D.d,{formatter:function(e){return r.a.createElement("span",{style:{color:y.palette.text.secondary}},e)}})))},J=Object(d.a)(function(e){return Object(f.a)({root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)},leftContainer:{color:e.palette.text.secondary},centerContainer:{},listBoxContainer:{"& > div:not(:last-child)":{marginBottom:"12px",borderBottom:"1px solid #313d47"}},listBox:{paddingBottom:"12px","& > div":{display:"flex",alignItems:"center","& p":{marginBottom:0}},"& > div:not(:last-child)":{paddingRight:"12px"}}})});function V(e){var t=e.resultFields,a=J();return r.a.createElement("div",{className:a.listBoxContainer},t.map(function(e){var t=e.label,n=e.value;return r.a.createElement(v.a,{key:t,container:!0,spacing:0,className:a.listBox},r.a.createElement(v.a,{item:!0,xs:8,className:a.leftContainer},r.a.createElement(h.a,{id:t,gutterBottom:!0},t)),r.a.createElement(v.a,{item:!0,xs:4,className:a.centerContainer},r.a.createElement(h.a,{gutterBottom:!0},n)))}))}var W=a(88);var q=function(e){for(var t=e.priceTimeseries,a=e.withdrawFeeTimeseries,n=(e.p0,[]),i=0;i<t.length;i++){var o;n.push((o={},Object(R.a)(o,"x",i),Object(R.a)(o,"Price (DAI / token)",t[i]||0),Object(R.a)(o,"Collected withdraw fee (DAI)",a[i]||0),o))}var c=Object($.a)();return r.a.createElement(D.f,{debounce:1},r.a.createElement(D.b,{width:0,height:400,data:n,margin:{top:10,right:30,left:0,bottom:0}},r.a.createElement(D.c,{strokeDasharray:"3 3"}),r.a.createElement(D.h,{dataKey:"x",tick:{fill:c.palette.text.secondary},stroke:c.palette.text.secondary,ticks:[].concat(Object(W.a)(P({to:t.length,steps:4}).map(Math.floor)),[t.length-1])}),r.a.createElement(D.i,{yAxisId:"left",domain:[Math.min.apply(Math,Object(W.a)(t)),Math.max.apply(Math,Object(W.a)(t))],tickFormatter:function(e){return(+e.toPrecision(3)).toLocaleString()},tick:{fill:c.palette.text.secondary},stroke:c.palette.text.secondary}),r.a.createElement(D.i,{yAxisId:"right",orientation:"right",tick:{fill:c.palette.text.secondary},stroke:c.palette.text.secondary}),r.a.createElement(D.g,{formatter:function(e){return Number(e)}}),r.a.createElement(D.a,{isAnimationActive:!1,yAxisId:"left",type:"monotone",dataKey:"Price (DAI / token)",stroke:c.palette.primary.main,fill:c.palette.primary.main}),r.a.createElement(D.a,{isAnimationActive:!1,yAxisId:"right",type:"monotone",dataKey:"Collected withdraw fee (DAI)",stroke:c.palette.secondary.main,fill:c.palette.secondary.main}),r.a.createElement(D.d,{formatter:function(e){return r.a.createElement("span",{style:{color:c.palette.text.secondary}},e)}})))},z=a(179),U=(a(405),Object(d.a)(function(e){return Object(f.a)({mainContainer:{"& > div:not(:last-child)":{paddingBottom:e.spacing(3)},"& > div":{"& > div":{paddingTop:"0 !important"}},paddingBottom:e.spacing(9)},paper:{width:"100%",height:"100%",minHeight:310,backgroundColor:"#293640"},box:{padding:e.spacing(3,3),minHeight:310},boxHeader:{padding:e.spacing(3,3),height:e.spacing(10),display:"flex",alignItems:"center",borderBottom:"1px solid #313d47"},boxChart:{width:"100%",height:"100%",minHeight:310,maxHeight:350,padding:e.spacing(3,3),paddingRight:"5px",paddingLeft:"5px"},header:{backgroundColor:"#0b1216",color:"#f8f8f8",padding:e.spacing(9,0,16),marginBottom:-e.spacing(10)},button:{background:"linear-gradient(290deg, #2ad179, #4ab47c)",color:"white"}})}));var G=a(183),Q=a.n(G),X=a(184),Y=Object(X.a)({palette:{type:"dark",primary:{main:"#2ecd79"},secondary:{main:"#116be0"},error:{main:Q.a.A400},background:{default:"#fff",paper:"#293640"},text:{primary:"#fff",secondary:"#9aa3ad"}},typography:{h6:{fontWeight:400}}});console.log(Y);var Z=Y;o.a.render(r.a.createElement(l.a,{theme:Z},r.a.createElement(c.a,null),r.a.createElement(function(){var e=Object(n.useState)({d0:1e6,theta:.35,p0:.1,returnF:3,wFee:.05}),t=Object(p.a)(e,2),a=t[0],i=t[1],o=a.d0,c=a.theta,l=a.p0,s=a.returnF,d=a.wFee,f=Object(n.useMemo)(function(){return Object(z.throttle)(i,1e3)},[]),y=s/(1-c),j=(1-c/100)*o,k=o/l,w=Math.pow(k,y)/j,C=Object(n.useState)([0]),N=Object(p.a)(C,2),F=N[0],S=N[1],B=Object(n.useState)([0]),A=Object(p.a)(B,2),I=A[0],R=A[1],D=Object(n.useState)(j),P=Object(p.a)(D,2),$=P[0],J=P[1],W=Object(n.useState)(0),G=Object(p.a)(W,2),Q=G[0],X=G[1],Y=Object(n.useState)(0),Z=Object(p.a)(Y,2),_=Z[0],ee=Z[1],te=Object(n.useState)(1e4),ae=Object(p.a)(te,1)[0],ne=Object(n.useState)(!1),re=Object(p.a)(ne,2),ie=re[0],oe=re[1],ce=Object(n.useState)(!1),le=Object(p.a)(ce,2),se=le[0],me=le[1];function ue(){return(ue=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return oe(!1),X(0),S([0]),R([0]),ee(0),e.next=3,L(0);case 3:oe(!0);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(n.useEffect)(function(){var e=!0;function t(){return(t=Object(u.a)(m.a.mark(function t(){var a,n,r,i,o,c,l,s,u,p,f,g,h,x,b,v,E,O,C,N,F,B,A,I,M,D;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(a=[j],n=[k],r=[j/k],i=[0],o=[],c=100,l=1,s=[],u=0;u<c;u++)p=1-2*Math.random(),f=Math.sin(u/c*.05),g=Math.sin(Math.PI/1*(u/c)),h=1e5*p+1e5*f+2e4*g,s.push(h);x=H(s),b=s.map(function(e){return ae*e/x}),me(!0),v=0;case 13:if(!(v<c)){t.next=41;break}if(E=b[v],O=T(a),C=T(n),N=T(r),F=O+E,B=Math.pow(w*(O+E),1/y)-C,A=C+B,a.push(F),n.push(A),r.push(F/A),E<0?(i.push(T(i)-E*d),X(function(e){return e+1})):i.push(T(i)),I=T(r),M=N,D=Math.abs(I-M)/M/2,o.push(D),ie&&e){t.next=31;break}return t.abrupt("break",41);case 31:if(v%l!==0){t.next=38;break}return S(r),R(i),ee(H(o)),J(F),t.next=38,L(5);case 38:v++,t.next=13;break;case 41:me(!1);case 42:case"end":return t.stop()}},t)}))).apply(this,arguments)}return ie&&function(){t.apply(this,arguments)}(),function(){e=!1}},[ie]);var pe=[{label:"Average slippage (avg tx size ".concat(ae," DAI)"),value:+(100*_).toFixed(3)+"%"},{label:"Capital collected from withdraw fees (".concat(Q," txs)"),value:(+T(I).toPrecision(3)).toLocaleString()+" DAI"},{label:"Total reserve",value:(+$.toPrecision(3)).toLocaleString()+" DAI"}],de=U();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:de.header},r.a.createElement(g.a,{fixed:!0},r.a.createElement(O,null))),r.a.createElement(g.a,{fixed:!0,className:de.mainContainer},r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:4},r.a.createElement(b.a,{className:de.paper},r.a.createElement(x.a,{className:de.boxHeader},r.a.createElement(h.a,{variant:"h6"},"Curve Design")),r.a.createElement(x.a,{className:de.box},r.a.createElement(M,{setCurveParams:f})))),r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:8},r.a.createElement(b.a,{className:de.paper},r.a.createElement(x.a,{className:de.boxHeader},r.a.createElement(h.a,{variant:"h6"},"Preview")),r.a.createElement(x.a,{className:de.boxChart},r.a.createElement(K,{returnF:s,theta:c,d0:o,p0:l}))))),r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,md:12},r.a.createElement(b.a,null,r.a.createElement(x.a,{className:de.boxHeader},r.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{variant:"contained",className:de.button,onClick:function(){return ue.apply(this,arguments)},disabled:se},"Run simulation")))))),ie&&r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:8},r.a.createElement(b.a,{className:de.paper},r.a.createElement(x.a,{className:de.boxHeader},r.a.createElement(h.a,{variant:"h6"},"Price walk")),r.a.createElement(x.a,{className:de.boxChart},r.a.createElement(q,{priceTimeseries:F,withdrawFeeTimeseries:I,p0:l})))),r.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:4},r.a.createElement(b.a,{className:de.paper},r.a.createElement(x.a,{className:de.boxHeader},r.a.createElement(h.a,{variant:"h6"},"Results")),r.a.createElement(x.a,{className:de.box},r.a.createElement(V,{resultFields:pe})))))))},null)),document.querySelector("#root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.1e43bbb8.chunk.js.map