import{r as y,g as kt,j as s,R as G,u as At}from"./index-BIWn8DDm.js";import{d as Ht}from"./dive-logo-FeOZN1dX.js";let Bt={data:""},zt=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||Bt},Ft=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Wt=/\/\*[^]*?\*\/|  +/g,$t=/\n+/g,J=(t,e)=>{let r="",n="",a="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?r=i+" "+o+";":n+=i[1]=="f"?J(o,i):i+"{"+J(o,i[1]=="k"?"":e)+"}":typeof o=="object"?n+=J(o,e?e.replace(/([^,])+/g,d=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,d):d?d+" "+f:f)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=J.p?J.p(i,o):i+":"+o+";")}return r+(e&&a?e+"{"+a+"}":a)+n},W={},Dt=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+Dt(t[r]);return e}return t},Yt=(t,e,r,n,a)=>{let i=Dt(t),o=W[i]||(W[i]=(f=>{let h=0,v=11;for(;h<f.length;)v=101*v+f.charCodeAt(h++)>>>0;return"go"+v})(i));if(!W[o]){let f=i!==t?t:(h=>{let v,b,C=[{}];for(;v=Ft.exec(h.replace(Wt,""));)v[4]?C.shift():v[3]?(b=v[3].replace($t," ").trim(),C.unshift(C[0][b]=C[0][b]||{})):C[0][v[1]]=v[2].replace($t," ").trim();return C[0]})(t);W[o]=J(a?{["@keyframes "+o]:f}:f,r?"":"."+o)}let d=r&&W.g?W.g:null;return r&&(W.g=W[o]),((f,h,v,b)=>{b?h.data=h.data.replace(b,f):h.data.indexOf(f)===-1&&(h.data=v?f+h.data:h.data+f)})(W[o],e,n,d),o},Ut=(t,e,r)=>t.reduce((n,a,i)=>{let o=e[i];if(o&&o.call){let d=o(r),f=d&&d.props&&d.props.className||/^go/.test(d)&&d;o=f?"."+f:d&&typeof d=="object"?d.props?"":J(d,""):d===!1?"":d}return n+a+(o??"")},"");function ut(t){let e=this||{},r=t.call?t(e.p):t;return Yt(r.unshift?r.raw?Ut(r,[].slice.call(arguments,1),e.p):r.reduce((n,a)=>Object.assign(n,a&&a.call?a(e.p):a),{}):r,zt(e.target),e.g,e.o,e.k)}let Ct,ht,pt;ut.bind({g:1});let Y=ut.bind({k:1});function Jt(t,e,r,n){J.p=e,Ct=t,ht=r,pt=n}function q(t,e){let r=this||{};return function(){let n=arguments;function a(i,o){let d=Object.assign({},i),f=d.className||a.className;r.p=Object.assign({theme:ht&&ht()},d),r.o=/ *go\d+/.test(f),d.className=ut.apply(r,n)+(f?" "+f:"");let h=t;return t[0]&&(h=d.as||t,delete d.as),pt&&h[0]&&pt(d),Ct(h,d)}return a}}var qt=t=>typeof t=="function",gt=(t,e)=>qt(t)?t(e):t,Vt=(()=>{let t=0;return()=>(++t).toString()})(),Zt=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Gt=20,Tt="default",Et=(t,e)=>{let{toastLimit:r}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:n}=e;return Et(t,{type:t.toasts.find(o=>o.id===n.id)?1:0,toast:n});case 3:let{toastId:a}=e;return{...t,toasts:t.toasts.map(o=>o.id===a||a===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Qt=[],Kt={toasts:[],pausedAt:void 0,settings:{toastLimit:Gt}},K={},It=(t,e=Tt)=>{K[e]=Et(K[e]||Kt,t),Qt.forEach(([r,n])=>{r===e&&n(K[e])})},Pt=t=>Object.keys(K).forEach(e=>It(t,e)),Xt=t=>Object.keys(K).find(e=>K[e].toasts.some(r=>r.id===t)),xt=(t=Tt)=>e=>{It(e,t)},te=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:r?.id||Vt()}),et=t=>(e,r)=>{let n=te(e,t,r);return xt(n.toasterId||Xt(n.id))({type:2,toast:n}),n.id},O=(t,e)=>et("blank")(t,e);O.error=et("error");O.success=et("success");O.loading=et("loading");O.custom=et("custom");O.dismiss=(t,e)=>{let r={type:3,toastId:t};e?xt(e)(r):Pt(r)};O.dismissAll=t=>O.dismiss(void 0,t);O.remove=(t,e)=>{let r={type:4,toastId:t};e?xt(e)(r):Pt(r)};O.removeAll=t=>O.remove(void 0,t);O.promise=(t,e,r)=>{let n=O.loading(e.loading,{...r,...r?.loading});return typeof t=="function"&&(t=t()),t.then(a=>{let i=e.success?gt(e.success,a):void 0;return i?O.success(i,{id:n,...r,...r?.success}):O.dismiss(n),a}).catch(a=>{let i=e.error?gt(e.error,a):void 0;i?O.error(i,{id:n,...r,...r?.error}):O.dismiss(n)}),t};var ee=Y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=Y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ne=Y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,se=q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ee} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ne} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ae=Y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ie=q("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ae} 1s linear infinite;
`,oe=Y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,le=Y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ce=q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${le} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ue=q("div")`
  position: absolute;
`,de=q("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fe=Y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,me=q("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,he=({toast:t})=>{let{icon:e,type:r,iconTheme:n}=t;return e!==void 0?typeof e=="string"?y.createElement(me,null,e):e:r==="blank"?null:y.createElement(de,null,y.createElement(ie,{...n}),r!=="loading"&&y.createElement(ue,null,r==="error"?y.createElement(se,{...n}):y.createElement(ce,{...n})))},pe=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,xe="0%{opacity:0;} 100%{opacity:1;}",ye="0%{opacity:1;} 100%{opacity:0;}",ve=q("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,be=q("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$e=(t,e)=>{let r=t.includes("top")?1:-1,[n,a]=Zt()?[xe,ye]:[pe(r),ge(r)];return{animation:e?`${Y(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};y.memo(({toast:t,position:e,style:r,children:n})=>{let a=t.height?$e(t.position||e||"top-center",t.visible):{opacity:0},i=y.createElement(he,{toast:t}),o=y.createElement(be,{...t.ariaProps},gt(t.message,t));return y.createElement(ve,{className:t.className,style:{...a,...r,...t.style}},typeof n=="function"?n({icon:i,message:o}):y.createElement(y.Fragment,null,i,o))});Jt(y.createElement);ut`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;const je=(t,e)=>new Date().valueOf()-Date.parse(e).valueOf()>1e3*60*60*24*t;var at={exports:{}},we=at.exports,jt;function Se(){return jt||(jt=1,(function(t,e){(function(r,n){t.exports=n()})(we,(function(){var r=1e3,n=6e4,a=36e5,i="millisecond",o="second",d="minute",f="hour",h="day",v="week",b="month",C="quarter",T="year",I="date",w="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,z={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var u=["th","st","nd","rd"],l=p%100;return"["+p+(u[(l-20)%10]||u[l]||u[0])+"]"}},H=function(p,u,l){var m=String(p);return!m||m.length>=u?p:""+Array(u+1-m.length).join(l)+p},R={s:H,z:function(p){var u=-p.utcOffset(),l=Math.abs(u),m=Math.floor(l/60),c=l%60;return(u<=0?"+":"-")+H(m,2,"0")+":"+H(c,2,"0")},m:function p(u,l){if(u.date()<l.date())return-p(l,u);var m=12*(l.year()-u.year())+(l.month()-u.month()),c=u.clone().add(m,b),g=l-c<0,x=u.clone().add(m+(g?-1:1),b);return+(-(m+(l-c)/(g?c-x:x-c))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:b,y:T,w:v,d:h,D:I,h:f,m:d,s:o,ms:i,Q:C}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},N="en",S={};S[N]=z;var L="$isDayjsObject",F=function(p){return p instanceof nt||!(!p||!p[L])},rt=function p(u,l,m){var c;if(!u)return N;if(typeof u=="string"){var g=u.toLowerCase();S[g]&&(c=g),l&&(S[g]=l,c=g);var x=u.split("-");if(!c&&x.length>1)return p(x[0])}else{var j=u.name;S[j]=u,c=j}return!m&&c&&(N=c),c||!m&&N},k=function(p,u){if(F(p))return p.clone();var l=typeof u=="object"?u:{};return l.date=p,l.args=arguments,new nt(l)},$=R;$.l=rt,$.i=F,$.w=function(p,u){return k(p,{locale:u.$L,utc:u.$u,x:u.$x,$offset:u.$offset})};var nt=(function(){function p(l){this.$L=rt(l.locale,null,!0),this.parse(l),this.$x=this.$x||l.x||{},this[L]=!0}var u=p.prototype;return u.parse=function(l){this.$d=(function(m){var c=m.date,g=m.utc;if(c===null)return new Date(NaN);if($.u(c))return new Date;if(c instanceof Date)return new Date(c);if(typeof c=="string"&&!/Z$/i.test(c)){var x=c.match(B);if(x){var j=x[2]-1||0,M=(x[7]||"0").substring(0,3);return g?new Date(Date.UTC(x[1],j,x[3]||1,x[4]||0,x[5]||0,x[6]||0,M)):new Date(x[1],j,x[3]||1,x[4]||0,x[5]||0,x[6]||0,M)}}return new Date(c)})(l),this.init()},u.init=function(){var l=this.$d;this.$y=l.getFullYear(),this.$M=l.getMonth(),this.$D=l.getDate(),this.$W=l.getDay(),this.$H=l.getHours(),this.$m=l.getMinutes(),this.$s=l.getSeconds(),this.$ms=l.getMilliseconds()},u.$utils=function(){return $},u.isValid=function(){return this.$d.toString()!==w},u.isSame=function(l,m){var c=k(l);return this.startOf(m)<=c&&c<=this.endOf(m)},u.isAfter=function(l,m){return k(l)<this.startOf(m)},u.isBefore=function(l,m){return this.endOf(m)<k(l)},u.$g=function(l,m,c){return $.u(l)?this[m]:this.set(c,l)},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(l,m){var c=this,g=!!$.u(m)||m,x=$.p(l),j=function(Z,P){var U=$.w(c.$u?Date.UTC(c.$y,P,Z):new Date(c.$y,P,Z),c);return g?U:U.endOf(h)},M=function(Z,P){return $.w(c.toDate()[Z].apply(c.toDate("s"),(g?[0,0,0,0]:[23,59,59,999]).slice(P)),c)},D=this.$W,E=this.$M,A=this.$D,Q="set"+(this.$u?"UTC":"");switch(x){case T:return g?j(1,0):j(31,11);case b:return g?j(1,E):j(0,E+1);case v:var V=this.$locale().weekStart||0,X=(D<V?D+7:D)-V;return j(g?A-X:A+(6-X),E);case h:case I:return M(Q+"Hours",0);case f:return M(Q+"Minutes",1);case d:return M(Q+"Seconds",2);case o:return M(Q+"Milliseconds",3);default:return this.clone()}},u.endOf=function(l){return this.startOf(l,!1)},u.$set=function(l,m){var c,g=$.p(l),x="set"+(this.$u?"UTC":""),j=(c={},c[h]=x+"Date",c[I]=x+"Date",c[b]=x+"Month",c[T]=x+"FullYear",c[f]=x+"Hours",c[d]=x+"Minutes",c[o]=x+"Seconds",c[i]=x+"Milliseconds",c)[g],M=g===h?this.$D+(m-this.$W):m;if(g===b||g===T){var D=this.clone().set(I,1);D.$d[j](M),D.init(),this.$d=D.set(I,Math.min(this.$D,D.daysInMonth())).$d}else j&&this.$d[j](M);return this.init(),this},u.set=function(l,m){return this.clone().$set(l,m)},u.get=function(l){return this[$.p(l)]()},u.add=function(l,m){var c,g=this;l=Number(l);var x=$.p(m),j=function(E){var A=k(g);return $.w(A.date(A.date()+Math.round(E*l)),g)};if(x===b)return this.set(b,this.$M+l);if(x===T)return this.set(T,this.$y+l);if(x===h)return j(1);if(x===v)return j(7);var M=(c={},c[d]=n,c[f]=a,c[o]=r,c)[x]||1,D=this.$d.getTime()+l*M;return $.w(D,this)},u.subtract=function(l,m){return this.add(-1*l,m)},u.format=function(l){var m=this,c=this.$locale();if(!this.isValid())return c.invalidDate||w;var g=l||"YYYY-MM-DDTHH:mm:ssZ",x=$.z(this),j=this.$H,M=this.$m,D=this.$M,E=c.weekdays,A=c.months,Q=c.meridiem,V=function(P,U,tt,st){return P&&(P[U]||P(m,g))||tt[U].slice(0,st)},X=function(P){return $.s(j%12||12,P,"0")},Z=Q||function(P,U,tt){var st=P<12?"AM":"PM";return tt?st.toLowerCase():st};return g.replace(_,(function(P,U){return U||(function(tt){switch(tt){case"YY":return String(m.$y).slice(-2);case"YYYY":return $.s(m.$y,4,"0");case"M":return D+1;case"MM":return $.s(D+1,2,"0");case"MMM":return V(c.monthsShort,D,A,3);case"MMMM":return V(A,D);case"D":return m.$D;case"DD":return $.s(m.$D,2,"0");case"d":return String(m.$W);case"dd":return V(c.weekdaysMin,m.$W,E,2);case"ddd":return V(c.weekdaysShort,m.$W,E,3);case"dddd":return E[m.$W];case"H":return String(j);case"HH":return $.s(j,2,"0");case"h":return X(1);case"hh":return X(2);case"a":return Z(j,M,!0);case"A":return Z(j,M,!1);case"m":return String(M);case"mm":return $.s(M,2,"0");case"s":return String(m.$s);case"ss":return $.s(m.$s,2,"0");case"SSS":return $.s(m.$ms,3,"0");case"Z":return x}return null})(P)||x.replace(":","")}))},u.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},u.diff=function(l,m,c){var g,x=this,j=$.p(m),M=k(l),D=(M.utcOffset()-this.utcOffset())*n,E=this-M,A=function(){return $.m(x,M)};switch(j){case T:g=A()/12;break;case b:g=A();break;case C:g=A()/3;break;case v:g=(E-D)/6048e5;break;case h:g=(E-D)/864e5;break;case f:g=E/a;break;case d:g=E/n;break;case o:g=E/r;break;default:g=E}return c?g:$.a(g)},u.daysInMonth=function(){return this.endOf(b).$D},u.$locale=function(){return S[this.$L]},u.locale=function(l,m){if(!l)return this.$L;var c=this.clone(),g=rt(l,m,!0);return g&&(c.$L=g),c},u.clone=function(){return $.w(this.$d,this)},u.toDate=function(){return new Date(this.valueOf())},u.toJSON=function(){return this.isValid()?this.toISOString():null},u.toISOString=function(){return this.$d.toISOString()},u.toString=function(){return this.$d.toUTCString()},p})(),bt=nt.prototype;return k.prototype=bt,[["$ms",i],["$s",o],["$m",d],["$H",f],["$W",h],["$M",b],["$y",T],["$D",I]].forEach((function(p){bt[p[1]]=function(u){return this.$g(u,p[0],p[1])}})),k.extend=function(p,u){return p.$i||(p(u,nt,k),p.$i=!0),k},k.locale=rt,k.isDayjs=F,k.unix=function(p){return k(1e3*p)},k.en=S[N],k.Ls=S,k.p={},k}))})(at)),at.exports}var Me=Se();const ot=kt(Me);var it={exports:{}},Oe=it.exports,wt;function Ne(){return wt||(wt=1,(function(t,e){(function(r,n){t.exports=n()})(Oe,(function(){return function(r,n,a){r=r||{};var i=n.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function d(h,v,b,C){return i.fromToBase(h,v,b,C)}a.en.relativeTime=o,i.fromToBase=function(h,v,b,C,T){for(var I,w,B,_=b.$locale().relativeTime||o,z=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],H=z.length,R=0;R<H;R+=1){var N=z[R];N.d&&(I=C?a(h).diff(b,N.d,!0):b.diff(h,N.d,!0));var S=(r.rounding||Math.round)(Math.abs(I));if(B=I>0,S<=N.r||!N.r){S<=1&&R>0&&(N=z[R-1]);var L=_[N.l];T&&(S=T(""+S)),w=typeof L=="string"?L.replace("%d",S):L(S,v,N.l,B);break}}if(v)return w;var F=B?_.future:_.past;return typeof F=="function"?F(w):F.replace("%s",w)},i.to=function(h,v){return d(h,v,this,!0)},i.from=function(h,v){return d(h,v,this)};var f=function(h){return h.$u?a.utc():a()};i.toNow=function(h){return this.to(f(this),h)},i.fromNow=function(h){return this.from(f(this),h)}}}))})(it)),it.exports}var ke=Ne();const _t=kt(ke);ot.extend(_t);const De=t=>{let e="";return Date.now().valueOf()-t.valueOf()<1e3*60*60*24*7?e=ot(t).fromNow():e=ot(t).format("DD MMM YYYY"),e},yt=t=>{const e=("0"+Math.floor(t/6e4%60).toString()).slice(-2),r=("0"+Math.floor(t/1e3%60).toString()).slice(-2),n=("0"+Math.floor(t/10%100).toString()).slice(-2);return[e,r,n]},Ce=({timeInMs:t,isRunning:e,toggleTimerHandler:r})=>{const[n,a]=y.useState(!0),[i,o]=y.useState(!1);y.useEffect(()=>{const b=localStorage.getItem("lastVisit");b===null?O("Tap the timer to hide it",{duration:5e3,position:"top-center"}):je(5,b)&&O("Tap the timer to hide it",{duration:5e3,position:"top-center"}),localStorage.setItem("lastVisit",new Date().toString())},[]);const[d,f,h]=yt(t),v=+Math.floor(t/1e3%60).toString().slice(-2)/60*100;return s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"mx-auto my-10 aspect-square h-52",children:s.jsxs("svg",{viewBox:"0 0 36 36",className:"h-full w-full",children:[s.jsx("path",{d:`M18 2.0845\r
              a 15.9155 15.9155 0 0 1 0 31.831\r
              a 15.9155 15.9155 0 0 1 0 -31.831`,className:"fill-none stroke-gray-300 stroke-2"}),n&&s.jsx("path",{d:`M18 2.0845\r
              a 15.9155 15.9155 0 0 1 0 31.831\r
              a 15.9155 15.9155 0 0 1 0 -31.831`,"stroke-dasharray":`${v}, 100`,strokeLinecap:"round",className:`fill-none stroke-primary stroke-2 ${v===0?"":"transition-all duration-[1.1s] ease-linear"}`}),s.jsx("text",{x:n?"5.4":"5",y:"20.35",textAnchor:"start",className:"text-[6px] font-semibold",onClick:()=>{a(b=>!b)},children:n?`${d||"00"}:${f||"00"}:${h||"00"}`:"-- : -- : --"})]})}),s.jsx("button",{onClick:()=>{o(!0),r()},onAnimationEnd:()=>o(!1),className:`h-14 w-44 rounded-lg bg-primary text-2xl font-semibold text-secondary ${i?"animate-shrink":""}`,children:e?"Stop":"Start"})]})},Te=({records:t})=>(ot.extend(_t),t?s.jsxs("div",{className:"mx-3 overflow-y-scroll rounded-md border-2 border-slate-200 bg-slate-100 shadow-md",children:[t&&t.length===0&&s.jsx("div",{className:"flex justify-center border-b-2 border-black py-2 px-6",children:s.jsx("p",{className:"text-lg",children:"Log your first record"})}),t&&t.map(e=>{const r=De(e.updatedAt),n=("0"+Math.floor(e.milliseconds/6e4%10).toString()).slice(-2),a=("0"+Math.floor(e.milliseconds/1e3%60).toString()).slice(-2),i=("0"+Math.floor(e.milliseconds/10%100).toString()).slice(-2);return s.jsxs("div",{className:"flex justify-between border-b-2 border-black py-2 px-6",children:[s.jsxs("p",{className:"text-lg",children:[n,":",a,":",i]}),s.jsx("p",{className:"text-lg",children:r})]},e.id)})]}):s.jsx("div",{className:"mx-auto",children:"Something went wrong"})),Ee=({records:t,addRecord:e})=>{const[r,n]=y.useState(0),[a,i]=y.useState(!1);y.useEffect(()=>{let d;return a?d=setInterval(()=>n(f=>f+10),10):clearInterval(d),()=>clearInterval(d)},[a]);const o=()=>{if(i(d=>!d),a&&r>0){const d={id:crypto.randomUUID(),userId:"local-user",milliseconds:r,createdAt:new Date,updatedAt:new Date};e(d)}else n(0)};return s.jsxs(s.Fragment,{children:[s.jsx(Ce,{timeInMs:r,isRunning:a,toggleTimerHandler:o}),s.jsx(Te,{records:t})]})};var Rt={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},St=G.createContext&&G.createContext(Rt),Ie=["attr","size","title"];function Pe(t,e){if(t==null)return{};var r=_e(t,e),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function _e(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function lt(){return lt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},lt.apply(this,arguments)}function Mt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function ct(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Mt(Object(r),!0).forEach(function(n){Re(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Mt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Re(t,e,r){return e=Le(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Le(t){var e=Ae(t,"string");return typeof e=="symbol"?e:e+""}function Ae(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Lt(t){return t&&t.map((e,r)=>G.createElement(e.tag,ct({key:r},e.attr),Lt(e.child)))}function dt(t){return e=>G.createElement(He,lt({attr:ct({},t.attr)},e),Lt(t.child))}function He(t){var e=r=>{var{attr:n,size:a,title:i}=t,o=Pe(t,Ie),d=a||r.size||"1em",f;return r.className&&(f=r.className),t.className&&(f=(f?f+" ":"")+t.className),G.createElement("svg",lt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,o,{className:f,style:ct(ct({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&G.createElement("title",null,i),t.children)};return St!==void 0?G.createElement(St.Consumer,null,r=>e(r)):e(Rt)}function Be(t){return dt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"},child:[]},{tag:"path",attr:{d:"M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889"},child:[]},{tag:"path",attr:{d:"M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889"},child:[]}]})(t)}function ze(t){return dt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 8l0 4l2 2"},child:[]},{tag:"path",attr:{d:"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"},child:[]}]})(t)}function Fe(t){return dt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"},child:[]},{tag:"path",attr:{d:"M8.5 8.5l7 7"},child:[]},{tag:"path",attr:{d:"M8.5 15.5l7 -7"},child:[]}]})(t)}function We(t){return dt({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1 -2.5 2.5h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1z"},child:[]},{tag:"path",attr:{d:"M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5 -5.5v-9.5"},child:[]}]})(t)}const ft=({children:t,title:e,Icon:r,pageNo:n,pageHandler:a,currentPage:i})=>{const o=()=>{a(n)},d=n===i;return s.jsxs("div",{className:"relative flex flex-1 flex-col justify-center",onClick:o,children:[t,s.jsx(r,{size:d?44:36,className:"mx-auto text-secondary"}),s.jsx("p",{className:`text-center  text-secondary ${d?"text-md font-bold":"text-sm font-semibold"}`,children:e})]})},Ye=({page:t,pageHandler:e})=>{const r={0:"translate-x-0",1:"translate-x-full",2:"translate-x-[200%]"};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"absolute top-full flex h-20 w-full -translate-y-full justify-between  rounded-t-2xl bg-primary align-middle",children:[s.jsx(ft,{title:"Best",Icon:Be,pageNo:0,pageHandler:e,currentPage:t,children:s.jsx("div",{className:`absolute -z-10 h-full w-full ${r[t]||"translate-x-full"} -translate-y-4 transform rounded-full bg-primary transition-transform duration-300 ease-in-out`})}),s.jsx(ft,{title:"Training",Icon:We,pageNo:1,pageHandler:e,currentPage:t}),s.jsx(ft,{title:"Reset",Icon:ze,pageNo:2,pageHandler:e,currentPage:t})]})})},Ue=({setsTime:t,onComplete:e})=>{const[r,n]=y.useState(0),[a,i]=y.useState(0),[o,d]=y.useState(!1),[f,h]=y.useState(t.length%2===0?"Breathe":"Hold");y.useEffect(()=>{t[0]&&(n(0),i(t[0]))},[t]),y.useEffect(()=>{let w;return o?w=setInterval(()=>{if(i(_=>_-10),a>0)return;if(r+1>=t.length){d(!1),i(t[0]!=null?t[0]:100),n(0),h(t.length%2===0?"Breathe":"Hold"),e();return}const B=t[r+1];B!=null&&(i(B),n(_=>_+1),h(_=>_==="Breathe"?"Hold":"Breathe"))},10):clearInterval(w),()=>clearInterval(w)},[o,e,r,a,t]);const v=()=>{o||(i(t[(r+1)%2]||0),n(w=>(w+1)%2),h((r+1)%2===0?"Breathe":"Hold"))},b=()=>{o?t&&(n(0),t[0]&&i(t[0]),d(w=>!w)):d(w=>!w)},C=a/(t[r]||1)*100,[T,I]=yt(a);return s.jsxs("div",{className:"relative flex flex-col items-center justify-between",children:[s.jsxs("p",{className:"text-2xl",children:["Cycle ",r+1," of ",t.length]}),s.jsx("p",{className:"text-2xl",children:f}),s.jsxs("svg",{viewBox:"0 0 36 36",className:"my-5 h-full w-2/3",children:[s.jsx("path",{d:`M18 2.0845\r
              a 15.9155 15.9155 0 0 1 0 31.831\r
              a 15.9155 15.9155 0 0 1 0 -31.831`,className:"fill-none stroke-gray-300 stroke-2"}),s.jsx("path",{d:`M18 2.0845\r
              a 15.9155 15.9155 0 0 1 0 31.831\r
              a 15.9155 15.9155 0 0 1 0 -31.831`,"stroke-dasharray":`${C}, 100`,strokeLinecap:"round",className:`"transition-all ease-linear" fill-none 
                  stroke-primary stroke-2
              `}),s.jsx("text",{x:"7.25",y:"20.75",textAnchor:"start",className:"fill-white text-[8px]",children:`${T||"00"}:${I||"00"}`})]}),s.jsxs("div",{className:"flex flex-col gap-5",children:[s.jsx("button",{className:"h-10 w-40 rounded-md bg-primary text-xl",onClick:w=>{w.stopPropagation(),b()},children:o?"Stop":"Start"}),!o&&s.jsx("button",{className:"h-20 w-40 rounded-md bg-secondary text-xl text-primary",onClick:v,children:r%2===0?"Already Breathing?":"I Need To Breathe"})]})]})},Je=({onClose:t})=>{const[e,r]=y.useState("top-full bottom-0"),[n,a]=y.useState(!1);y.useEffect(()=>{setTimeout(()=>{r("top-0 bottom-0")},400)},[]);const i=()=>{a(!0),r("top-0 bottom-full")},o=()=>{n&&t()};return s.jsx("div",{className:`absolute left-0 right-0 z-20 overflow-hidden bg-black bg-opacity-50 transition-all duration-1000 ${e}`,onClick:i,onTransitionEnd:o,children:s.jsxs("div",{className:"absolute top-1/4 bottom-1/4 left-0 right-0 overflow-hidden rounded-md bg-secondary",children:[s.jsx("img",{alt:"dive buddy",src:Ht,className:"absolute top-1/3 left-1/2 w-72 -translate-y-1/2 -translate-x-1/2"}),s.jsxs("div",{className:"absolute bottom-0 left-0 right-0 flex flex-col items-center bg-primary py-6 font-semibold text-secondary",children:[s.jsx("p",{className:"text-xl",children:"Training Completed, Well Done"}),s.jsx("p",{children:"Come back tomorrow for another session"})]})]})})},vt={CO2:"CO2",O2:"O2"},qe=vt,Ot=({height:t})=>s.jsx("div",{className:`${t} w-full`}),Ve=({closeFunction:t})=>s.jsx("button",{className:"absolute right-1 top-1",onClick:e=>{e.stopPropagation(),t()},children:s.jsx(Fe,{className:"rounded-full bg-secondary text-3xl text-black"})}),Ze=t=>{const e=localStorage.getItem("trainings")?JSON.parse(localStorage.getItem("trainings")):[],r={id:crypto.randomUUID(),userId:"local-user",type:t.type,referenceMilliseconds:t.referenceMilliseconds,createdAt:new Date};e.push(r),localStorage.setItem("trainings",JSON.stringify(e))},Nt=({title:t,description:e,trainingType:r,record:n})=>{const[a,i]=y.useState(!1),[o,d]=y.useState([0]),[f,h]=y.useState(0),[v,b]=y.useState(!1),[C,T]=y.useState(!1);y.useEffect(()=>{b(n!==0)},[n]),y.useEffect(()=>{if(!v)return;const H=[];let R=0;if(r===qe.O2){let S=.5;for(let L=0;L<8;L++){const F=Math.floor(S*n);H.push(12e4),R+=12e4,H.push(F),R+=F,S+=.5}}else{const N=Math.floor(n*.65);let S=1e3*60*2;for(let L=0;L<8;L++)H.push(S),R+=S,H.push(N),R+=N,S-=1e3*15}h(R),d(H)},[n,r,v]);const I=()=>{v?i(!0):O("Log a record to start training",{position:"top-center"})},w=()=>{T(!0),Ze({type:r,referenceMilliseconds:n})},[B,_]=yt(f),z="transition-all duration-1000";return s.jsxs(s.Fragment,{children:[s.jsx(Ot,{height:"h-6"}),s.jsxs("div",{className:`box-content bg-cover bg-center ${a?"absolute top-0 bottom-0 left-0 right-0 z-10 overflow-scroll px-5":"mx-10 flex h-1/2 flex-col overflow-hidden rounded-lg  shadow-xl"}  ${r===vt.O2?"bg-[url('/assets/o2-training.jpg')]":"bg-[url('/assets/co2-training.jpg')]"} ${z}`,onClick:I,children:[a&&s.jsx(Ve,{closeFunction:()=>{i(!1)}}),s.jsx(Ot,{height:`${a?"h-0":"flex-1"} ${z}`}),s.jsxs("div",{className:`h-fit flex-1 bg-stone-600 opacity-80 text-white ${a?"absolute left-5 right-5 top-1/2 -translate-y-1/2 rounded-xl bg-opacity-80 py-5":"bg-opacity-70 px-3"} ${z}`,children:[s.jsx("div",{className:`w-fit shrink-0 ${a?"mx-auto text-center":""} ${z}`,children:s.jsxs("div",{className:"mb-5",children:[s.jsx("h3",{className:`${a?"text-4xl":"text-xl"}`,children:t}),v&&s.jsxs("p",{className:`${a?"text-xl":"text-base"}`,children:["Time - ",B,":",_]}),!v&&s.jsx("p",{className:`${a?"text-xl":"text-base"}`,children:"Log a record to start training"})]})}),a?s.jsx(Ue,{setsTime:o,onComplete:w}):s.jsx("p",{children:e})]})]}),C&&s.jsx(Je,{onClose:()=>{T(!1)}})]})},Ge=({records:t})=>{const e=vt;let r=0;return t.map(n=>{n.milliseconds>r&&(r=n.milliseconds)}),s.jsxs(s.Fragment,{children:[s.jsx(Nt,{title:"CO2 Training",description:"Decreasing breathe times",trainingType:e.CO2,record:r}),s.jsx(Nt,{title:"O2 Training",description:"Increasing breath hold times",trainingType:e.O2,record:r})]})},Qe=1,mt=({children:t,page:e,index:r})=>e!==r?s.jsx(s.Fragment,{}):s.jsx("main",{className:"h-full",children:s.jsxs("div",{className:"h-160 flex flex-col gap-5 justify-between",children:[t,s.jsx("div",{className:"h-24 flex-shrink-0"})]})});function tr(){const t=At(),e=y.useRef(!0),[r,n]=y.useState(Qe),[a,i]=y.useState([]),o=f=>{i(h=>[...h,f])};y.useEffect(()=>{const f=localStorage.getItem("records");f&&i(JSON.parse(f))},[]),y.useEffect(()=>{if(e.current){e.current=!1;return}localStorage.setItem("records",JSON.stringify(a))},[a]);const d=f=>{r!==f&&n(f)};return s.jsxs(s.Fragment,{children:[s.jsx(mt,{index:0,page:r,children:s.jsx(Ee,{records:a,addRecord:o})}),s.jsx(mt,{index:1,page:r,children:s.jsx(Ge,{records:a})}),s.jsx(mt,{index:2,page:r,children:s.jsx("button",{className:"w-48 text-white bg-primary h-12 rounded-lg font-extrabold text-xl self-center mt-20",onClick:()=>{t({to:"/"}),localStorage.clear()},children:"Reset"})}),s.jsx(Ye,{page:r,pageHandler:d})]})}export{tr as component};
