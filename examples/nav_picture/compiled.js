'use strict';var g=void 0,l=!0,n=null,p=!1,s,t=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function v(a){return"string"==typeof a}function w(a){return"number"==typeof a}function ba(a){return"function"==aa(a)}function x(a){return a[ca]||(a[ca]=++da)}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ga(a,b,c){ga=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return ga.apply(n,arguments)}
function ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}var ia=Date.now||function(){return+new Date};function y(a,b){function c(){}c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c};function ja(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}function ka(a){var b=v(g)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};function A(){0!=la&&(this.La=Error().stack,ma[x(this)]=this)}var la=0,ma={};A.prototype.ia=p;A.prototype.ba=function(){if(!this.ia&&(this.ia=l,this.w(),0!=la)){var a=x(this);delete ma[a]}};A.prototype.w=function(){if(this.pa)for(;this.pa.length;)this.pa.shift()()};var na="closure_listenable_"+(1E6*Math.random()|0),oa=0;function pa(){}s=pa.prototype;s.key=0;s.l=p;s.v=p;s.M=function(a,b,c,d,e,f){if(ba(a))this.ma=l;else if(a&&a.handleEvent&&ba(a.handleEvent))this.ma=p;else throw Error("Invalid listener argument");this.p=a;this.qa=b;this.src=c;this.type=d;this.capture=!!e;this.U=f;this.v=p;this.key=++oa;this.l=p};s.handleEvent=function(a){return this.ma?this.p.call(this.U||this.src,a):this.p.handleEvent.call(this.p,a)};function qa(a,b){for(var c in a)b.call(g,a[c],c,a)}function ra(){var a=sa,b;for(b in a)return p;return l}var ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ua(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ta.length;f++)c=ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var B,va,wa,xa;function ya(){return t.navigator?t.navigator.userAgent:n}xa=wa=va=B=p;var za;if(za=ya()){var Aa=t.navigator;B=0==za.indexOf("Opera");va=!B&&-1!=za.indexOf("MSIE");wa=!B&&-1!=za.indexOf("WebKit");xa=!B&&!wa&&"Gecko"==Aa.product}var Ba=B,C=va,D=xa,E=wa,Ca=t.navigator,Da=-1!=(Ca&&Ca.platform||"").indexOf("Mac");function Ea(){var a=t.document;return a?a.documentMode:g}var Fa;
a:{var Ga="",Ha;if(Ba&&t.opera)var Ia=t.opera.version,Ga="function"==typeof Ia?Ia():Ia;else if(D?Ha=/rv\:([^\);]+)(\)|;)/:C?Ha=/MSIE\s+([^\);]+)(\)|;)/:E&&(Ha=/WebKit\/(\S+)/),Ha)var Ja=Ha.exec(ya()),Ga=Ja?Ja[1]:"";if(C){var Ka=Ea();if(Ka>parseFloat(Ga)){Fa=String(Ka);break a}}Fa=Ga}var La={};
function F(a){var b;if(!(b=La[a])){b=0;for(var c=String(Fa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",k=d[f]||"",m=/(\d*)(\D*)/g,u=/(\d*)(\D*)/g;do{var q=m.exec(h)||["","",""],r=u.exec(k)||["","",""];if(0==q[0].length&&0==r[0].length)break;b=((0==q[1].length?0:parseInt(q[1],10))<(0==r[1].length?0:parseInt(r[1],10))?-1:(0==q[1].length?0:parseInt(q[1],10))>(0==r[1].length?
0:parseInt(r[1],10))?1:0)||((0==q[2].length)<(0==r[2].length)?-1:(0==q[2].length)>(0==r[2].length)?1:0)||(q[2]<r[2]?-1:q[2]>r[2]?1:0)}while(0==b)}b=La[a]=0<=b}return b}var Ma=t.document,Na=!Ma||!C?g:Ea()||("CSS1Compat"==Ma.compatMode?parseInt(Fa,10):5);var Oa=!C||C&&9<=Na,Pa=C&&!F("9");!E||F("528");D&&F("1.9b")||C&&F("8")||Ba&&F("9.5")||E&&F("528");D&&!F("8")||C&&F("9");var G=Array.prototype,Qa=G.indexOf?function(a,b,c){return G.indexOf.call(a,b,c)}:function(a,b,c){c=c==n?0:0>c?Math.max(0,a.length+c):c;if(v(a))return!v(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ra=G.forEach?function(a,b,c){G.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};function Sa(a,b){var c=Qa(a,b),d;(d=0<=c)&&G.splice.call(a,c,1);return d}
function Ta(a,b,c,d){G.splice.apply(a,Ua(arguments,1))}function Ua(a,b,c){return 2>=arguments.length?G.slice.call(a,b):G.slice.call(a,b,c)};function H(a,b){this.type=a;this.currentTarget=this.target=b}s=H.prototype;s.w=function(){};s.ba=function(){};s.u=p;s.defaultPrevented=p;s.ra=l;s.stopPropagation=function(){this.u=l};s.preventDefault=function(){this.defaultPrevented=l;this.ra=p};function Va(a){Va[" "](a);return a}Va[" "]=function(){};function I(a,b){a&&this.M(a,b)}y(I,H);s=I.prototype;s.target=n;s.relatedTarget=n;s.offsetX=0;s.offsetY=0;s.clientX=0;s.clientY=0;s.screenX=0;s.screenY=0;s.button=0;s.keyCode=0;s.charCode=0;s.ctrlKey=p;s.altKey=p;s.shiftKey=p;s.metaKey=p;s.Ha=p;s.J=n;
s.M=function(a,b){var c=this.type=a.type;H.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(D){var e;a:{try{Va(d.nodeName);e=l;break a}catch(f){}e=p}e||(d=n)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=E||a.offsetX!==g?a.offsetX:a.layerX;this.offsetY=E||a.offsetY!==g?a.offsetY:a.layerY;this.clientX=a.clientX!==g?a.clientX:a.pageX;this.clientY=a.clientY!==g?a.clientY:a.pageY;this.screenX=a.screenX||
0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Ha=Da?a.metaKey:a.ctrlKey;this.state=a.state;this.J=a;a.defaultPrevented&&this.preventDefault();delete this.u};s.stopPropagation=function(){I.A.stopPropagation.call(this);this.J.stopPropagation?this.J.stopPropagation():this.J.cancelBubble=l};
s.preventDefault=function(){I.A.preventDefault.call(this);var a=this.J;if(a.preventDefault)a.preventDefault();else if(a.returnValue=p,Pa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};s.w=function(){};var J={},K={},L={},M={};
function Wa(a,b,c,d,e){if("array"==aa(b))for(var f=0;f<b.length;f++)Wa(a,b[f],c,d,e);else{if(a&&a[na]){c=Xa(c);var f=a.m[b]||(a.m[b]=[]),h;h=Ya(f,c,d,e);-1<h?(h=f[h],h.v=p):(h=new pa,h.M(c,n,a,b,!!d,e),h.v=p,f.push(h));a=h}else a:{if(!b)throw Error("Invalid event type");d=!!d;var k=K;b in k||(k[b]={o:0,q:0});k=k[b];d in k||(k[d]={o:0,q:0},k.o++);k=k[d];f=x(a);k.q++;if(k[f]){h=k[f];for(var m=0;m<h.length;m++)if(k=h[m],k.p==c&&k.U==e){if(k.l)break;h[m].v=p;a=h[m];break a}}else h=k[f]=[],k.o++;m=Za();
k=new pa;k.M(c,m,a,b,d,e);k.v=p;m.src=a;m.p=k;h.push(k);L[f]||(L[f]=[]);L[f].push(k);a.addEventListener?(a==t||!a.customEvent_)&&a.addEventListener(b,m,d):a.attachEvent(b in M?M[b]:M[b]="on"+b,m);a=k}J[a.key]=a}}function Za(){var a=$a,b=Oa?function(c){return a.call(b.src,b.p,c)}:function(c){c=a.call(b.src,b.p,c);if(!c)return c};return b}
function ab(a,b,c,d,e){if("array"==aa(b))for(var f=0;f<b.length;f++)ab(a,b[f],c,d,e);else if(a&&a[na])c=Xa(c),b in a.m&&(a=a.m[b],e=Ya(a,c,d,e),-1<e&&(c=a[e],delete J[c.key],c.l=l,G.splice.call(a,e,1)));else{d=!!d;a:{f=K;if(b in f&&(f=f[b],d in f&&(f=f[d],a=x(a),f[a]))){a=f[a];break a}a=n}if(a)for(f=0;f<a.length;f++)if(a[f].p==c&&a[f].capture==d&&a[f].U==e){bb(a[f].key);break}}}
function bb(a){var b=J[a];if(b&&!b.l){var c=b.src;if(c&&c[na])cb(c,b);else{var d=b.type,e=b.qa,f=b.capture;c.removeEventListener?(c==t||!c.customEvent_)&&c.removeEventListener(d,e,f):c.detachEvent&&c.detachEvent(d in M?M[d]:M[d]="on"+d,e);c=x(c);L[c]&&(e=L[c],Sa(e,b),0==e.length&&delete L[c]);b.l=l;if(b=K[d][f][c])b.oa=l,db(d,f,c,b);delete J[a]}}}
function db(a,b,c,d){if(!d.V&&d.oa){for(var e=0,f=0;e<d.length;e++)d[e].l?d[e].qa.src=n:(e!=f&&(d[f]=d[e]),f++);d.length=f;d.oa=p;0==f&&(delete K[a][b][c],K[a][b].o--,0==K[a][b].o&&(delete K[a][b],K[a].o--),0==K[a].o&&delete K[a])}}function eb(a,b,c,d,e){var f=1;b=x(b);if(a[b]){var h=--a.q,k=a[b];k.V?k.V++:k.V=1;try{for(var m=k.length,u=0;u<m;u++){var q=k[u];q&&!q.l&&(f&=fb(q,e)!==p)}}finally{a.q=Math.max(h,a.q),k.V--,db(c,d,b,k)}}return Boolean(f)}
function fb(a,b){a.v&&bb(a.key);return a.handleEvent(b)}
function $a(a,b){if(a.l)return l;var c=a.type,d=K;if(!(c in d))return l;var d=d[c],e,f;if(!Oa){var h;if(!(h=b))a:{h=["window","event"];for(var k=t;e=h.shift();)if(k[e]!=n)k=k[e];else{h=n;break a}h=k}e=h;h=l in d;k=p in d;if(h){if(0>e.keyCode||e.returnValue!=g)return l;a:{var m=p;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(u){m=l}if(m||e.returnValue==g)e.returnValue=l}}m=new I;m.M(e,this);e=l;try{if(h){for(var q=[],r=m.currentTarget;r;r=r.parentNode)q.push(r);f=d[l];f.q=f.o;for(var z=q.length-1;!m.u&&
0<=z&&f.q;z--)m.currentTarget=q[z],e&=eb(f,q[z],c,l,m);if(k){f=d[p];f.q=f.o;for(z=0;!m.u&&z<q.length&&f.q;z++)m.currentTarget=q[z],e&=eb(f,q[z],c,p,m)}}else e=fb(a,m)}finally{q&&(q.length=0)}return e}c=new I(b,this);return e=fb(a,c)}var gb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Xa(a){return ba(a)?a:a[gb]||(a[gb]=function(b){return a.handleEvent(b)})};function N(){A.call(this);this.m={};this.Ba=this}y(N,A);N.prototype[na]=l;N.prototype.customEvent_=l;s=N.prototype;s.ea=n;s.addEventListener=function(a,b,c,d){Wa(this,a,b,c,d)};s.removeEventListener=function(a,b,c,d){ab(this,a,b,c,d)};
s.dispatchEvent=function(a){var b,c=this.ea;if(c)for(b=[];c;c=c.ea)b.push(c);var c=this.Ba,d=a.type||a;if(v(a))a=new H(a,c);else if(a instanceof H)a.target=a.target||c;else{var e=a;a=new H(d,c);ua(a,e)}var e=l,f;if(b)for(var h=b.length-1;!a.u&&0<=h;h--)f=a.currentTarget=b[h],e=hb(f,d,l,a)&&e;a.u||(f=a.currentTarget=c,e=hb(f,d,l,a)&&e,a.u||(e=hb(f,d,p,a)&&e));if(b)for(h=0;!a.u&&h<b.length;h++)f=a.currentTarget=b[h],e=hb(f,d,p,a)&&e;return e};
s.w=function(){N.A.w.call(this);var a=0,b;for(b in this.m){for(var c=this.m[b],d=0;d<c.length;d++)++a,delete J[c[d].key],c[d].l=l;c.length=0}this.ea=n};function cb(a,b){var c=b.type;c in a.m&&Sa(a.m[c],b)&&(delete J[b.key],b.l=l)}function hb(a,b,c,d){if(!(b in a.m))return l;var e=l;b=a.m[b];var f=b.length;if(0<f){for(var h=Array(f),k=0;k<f;k++)h[k]=b[k];b=h}else b=[];for(f=0;f<b.length;++f)if((h=b[f])&&!h.l&&h.capture==c)h.v&&cb(a,h),e=h.handleEvent(d)!==p&&e;return e&&d.ra!=p}
function Ya(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(f.p==b&&f.capture==!!c&&f.U==d)return e}return-1};function ib(a,b,c){A.call(this);this.da=a;this.Fa=b||0;this.ja=c;this.Ca=ga(this.Da,this)}y(ib,A);s=ib.prototype;s.G=0;s.w=function(){ib.A.w.call(this);this.stop();delete this.da;delete this.ja};s.start=function(a){this.stop();var b=this.Ca;a=a!==g?a:this.Fa;if(!ba(b))if(b&&"function"==typeof b.handleEvent)b=ga(b.handleEvent,b);else throw Error("Invalid listener argument");this.G=2147483647<a?-1:t.setTimeout(b,a||0)};s.stop=function(){0!=this.G&&t.clearTimeout(this.G);this.G=0};
s.Da=function(){this.G=0;this.da&&this.da.call(this.ja)};var sa={},jb=n;function kb(a){var b=x(a);b in sa||(sa[b]=a);lb()}function lb(){jb||(jb=new ib(function(){mb()},20));var a=jb;0!=a.G||a.start()}function mb(){ia();qa(sa,function(a){var b=a.ya,c=ia();if(0<b.Y){var d=c-b.Y,d=d/1E3;100>b.F.length?b.F.push(d):(b.P=(b.P+1)%b.F.length,b.H-=b.F[b.P],b.F[b.P]=d);b.H+=d;b.Ea=b.F.length/b.H}b.Y=c;a.fa.frame()});ra()||lb()};function nb(a){this.Ma=a}nb.prototype.Ga=n;function ob(a,b){this.name=a;this.value=b}ob.prototype.toString=function(){return this.name};var pb=new ob("CONFIG",700),qb=n;function O(a,b){this.x=a!==g?a:0;this.y=b!==g?b:0}O.prototype.t=function(){return new O(this.x,this.y)};O.prototype.toString=function(){return"("+this.x+", "+this.y+")"};O.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};O.prototype.scale=function(a,b){var c=w(b)?b:a;this.x*=a;this.y*=c;return this};function P(a,b,c,d,e,f){if(6==arguments.length)this.setTransform(a,b,c,d,e,f);else{if(0!=arguments.length)throw Error("Insufficient matrix parameters");this.a=this.d=1;this.c=this.b=this.f=this.g=0}}s=P.prototype;s.t=function(){return new P(this.a,this.c,this.b,this.d,this.f,this.g)};s.setTransform=function(a,b,c,d,e,f){if(!w(a)||!w(b)||!w(c)||!w(d)||!w(e)||!w(f))throw Error("Invalid transform parameters");this.a=a;this.c=b;this.b=c;this.d=d;this.f=e;this.g=f;return this};
function rb(a,b){a.a=b.a;a.c=b.c;a.b=b.b;a.d=b.d;a.f=b.f;a.g=b.g}s.scale=function(a,b){this.a*=a;this.c*=a;this.b*=b;this.d*=b;return this};s.toString=function(){return"matrix("+[this.a,this.c,this.b,this.d,this.f,this.g].join()+")"};function sb(a,b){var c=a.a,d=a.b;a.a=b.a*c+b.c*d;a.b=b.b*c+b.d*d;a.f+=b.f*c+b.g*d;c=a.c;d=a.d;a.c=b.a*c+b.c*d;a.d=b.b*c+b.d*d;a.g+=b.f*c+b.g*d;return a}
s.transform=function(a,b,c,d,e){var f=b;for(b+=2*e;f<b;){e=a[f++];var h=a[f++];c[d++]=e*this.a+h*this.b+this.f;c[d++]=e*this.c+h*this.d+this.g}};function ub(a){var b=a.a*a.d-a.b*a.c;return new P(a.d/b,-a.c/b,-a.b/b,a.a/b,(a.b*a.g-a.d*a.f)/b,(a.c*a.f-a.a*a.g)/b)}function vb(a,b,c){return a.setTransform(1,0,0,1,b,c)};function Q(a,b){this.width=a;this.height=b}Q.prototype.t=function(){return new Q(this.width,this.height)};Q.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};Q.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};Q.prototype.scale=function(a,b){var c=w(b)?b:a;this.width*=a;this.height*=c;return this};function wb(a,b,c,d,e){function f(b){h||a.fillText(b,c,0+d*z);z++;q=a.measureText(b).width;q>tb&&(tb=q)}var h=Boolean(g);b=b.replace(/(\r\n|\n\r|\r|\n)/g,"\n");b=b.split("\n");var k,m,u,q,r,z=0,tb=0;for(k=0;k<b.length;k++){r=b[k].split(" ");for(m=1;0<r.length&&m<=r.length;)u=r.slice(0,m).join(" "),q=a.measureText(u).width,q>e?(1===m?(u=r.slice(0,1).join(" "),r=r.splice(1)):(u=r.slice(0,m-1).join(" "),r=r.splice(m-1)),f(u),m=1):m++;0<m&&f(r.join(" "))}}
function xb(a,b){b&&a.transform(b.a,b.c,b.b,b.d,b.f,b.g)}function yb(a,b,c,d,e){e=e.t();switch(c){case zb:break;case Ab:e.x+=(a.width-b.width)/2;break;case Bb:e.x+=a.width-b.width;break;default:throw Error("horizontalAlignment value not expected "+c);}switch(d){case Cb:break;case Db:e.y+=(a.height-b.height)/2;break;case Eb:e.y+=a.height-b.height;break;default:throw Error("verticalAlignment value not expected "+d);}return e};function Fb(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}function Gb(a){for(var b=new Fb(arguments[0].y,arguments[0].x,arguments[0].y,arguments[0].x),c=1;c<arguments.length;c++){var d=arguments[c];b.top=Math.min(b.top,d.y);b.right=Math.max(b.right,d.x);b.bottom=Math.max(b.bottom,d.y);b.left=Math.min(b.left,d.x)}return b}s=Fb.prototype;s.t=function(){return new Fb(this.top,this.right,this.bottom,this.left)};
s.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};s.contains=function(a){return!this||!a?p:a instanceof Fb?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom};s.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
s.scale=function(a,b){var c=w(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function R(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}s=R.prototype;s.t=function(){return new R(this.left,this.top,this.width,this.height)};s.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};s.contains=function(a){return a instanceof R?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
s.z=function(){return new Q(this.width,this.height)};s.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};s.scale=function(a,b){var c=w(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function S(a,b,c){N.call(this);this.width=a;this.height=b;this.Ka=!!c;c&&(this.T=S.prototype.wa)}y(S,N);s=S.prototype;s.alpha=n;s.clip=l;s.r=n;s.s=n;function Hb(a){var b=new P;a.n&&Ra(a.n,function(a){sb(b,a)});return b}function Ib(a){a=a.n||(a.n=[]);var b=new P;a.push(b);return b}s.z=function(){return new Q(this.width,this.height)};function T(a){a.r!==n&&(a.r=n,a.s.aa(a))}s.K=function(){throw Error("No children for this element");};s.L=function(){return 0};
s.ca=function(a){this.update();var b=Boolean(!this.r);this.T(a);return b};s.update=function(){this.dispatchEvent("Update")};function Jb(a,b){a.alpha!=n&&(b.globalAlpha=a.alpha);a.I(b);a.r=a.z()}s.xa=function(a){var b=Hb(this);Kb(this,b,a)||(a.save(),xb(a,b),this.clip&&(a.beginPath(),a.rect(0,0,this.width,this.height),a.clip()),Jb(this,a),a.restore())};s.T=S.prototype.xa;
s.wa=function(a){var b=Hb(this);if(!Kb(this,b,a)){if(!this.i||!(new Q(this.i.width,this.i.height)==this.r||(!new Q(this.i.width,this.i.height)||!this.r?0:(new Q(this.i.width,this.i.height)).width==this.r.width&&(new Q(this.i.width,this.i.height)).height==this.r.height))){this.i||(this.i=document.createElement("canvas"));this.i.width=this.width;this.i.height=this.height;var c=this.i.getContext("2d");Jb(this,c)}a.save();xb(a,b);a.drawImage(this.i,0,0);a.restore()}};
function Kb(a,b,c){return a.clip?(a=new R(0,0,a.width,a.height),a=[new O(a.left,a.top),new O(a.left+a.width,a.top),new O(a.left+a.width,a.top+a.height),new O(a.left,a.top+a.height)],Lb(b,a),b=Gb.apply(n,a),a=new R(b.left,b.top,b.right-b.left,b.bottom-b.top),c=new R(0,0,c.canvas.width,c.canvas.height),!(a.left<=c.left+c.width&&c.left<=a.left+a.width&&a.top<=c.top+c.height&&c.top<=a.top+a.height)):p};function Mb(a,b,c){S.call(this,b,c,l);this.S=a}y(Mb,S);s=Mb.prototype;s.sa="white";s.font="25px Helvetica";s.lineHeight=25;s.na=p;s.la=p;s.shadowColor=g;s.shadowBlur=4;s.fillStyle=n;
s.I=function(a){this.fillStyle&&(a.fillStyle=this.fillStyle,a.fillRect(0,0,this.width,this.height));var b=0;this.la&&(a.textAlign="center",b=this.width/2);this.shadowColor&&(a.shadowColor=this.shadowColor,a.shadowBlur=this.shadowBlur);a.font=this.font;a.textBaseline="top";a.fillStyle=this.sa;this.na?wb(a,this.S,b,this.lineHeight,this.width):a.fillText(this.S,b,0)};!D&&!C||C&&C&&9<=Na||D&&F("1.9.1");C&&F("9");function Nb(a){v("background")?Ob(a,"black","background"):qa("background",ha(Ob,a))}function Ob(a,b,c){var d;a:if(d=ja(c),a.style[d]===g&&(c=(E?"Webkit":D?"Moz":C?"ms":Ba?"O":n)+ka(c),a.style[c]!==g)){d=c;break a}d&&(a.style[d]=b)};function Pb(a,b){var c=b.x;b.x=c*a.a+b.y*a.b+a.f;b.y=c*a.c+b.y*a.d+a.g;return b}function Lb(a,b){Ra(b,function(b){Pb(a,b)})};function U(a,b){N.call(this);this.k=a;this.W=b;this.W.s=this}y(U,N);U.prototype.z=function(){return new Q(this.k.width,this.k.height)};U.prototype.ca=function(){this.C?this.C.clearRect(0,0,this.k.width,this.k.height):this.C=this.k.getContext("2d");return this.W.ca(this.C)};U.prototype.getContext=function(){this.C||(this.C=this.k.getContext("2d"));return this.C};U.prototype.aa=function(){this.dispatchEvent("Update")};function Qb(a,b){N.call(this);this.k=a;this.$=new U(a,b);this.$.addEventListener("Update",function(){this.dispatchEvent("Update")},p,this)}y(Qb,N);Qb.prototype.frame=function(){return this.$.ca()};function V(a,b){this.Ja=a;this.va=b;this.O=Rb++}V.prototype.clear=function(a){a[W]&&(delete a[W][this.O],(a=Sb.get(a))&&a(this))};V.prototype.get=function(a){a[W]?(a=a[W],a=this.O in a?[a[this.O]]:n):a=g;return a?a[0]:this.va};V.prototype.set=function(a,b){(a[W]||(a[W]={}))[this.O]=b;var c=Sb.get(a);c&&c(this)};var W="prop_uid_"+Math.floor(2147483648*Math.random()).toString(36),Rb=0,Sb=new V("Callback");function Tb(a,b){var c=Ub.get(a);c&&Ra(c,function(a){Vb.clear(a);Wb.clear(a)});return b?(c=Xb(a.W,b),Ub.set(a,c),Ra(c,function(a){Vb.set(a,l)}),c.length&&Wb.set(c[c.length-1],l),c):n}var Vb=new V("IsMouseOver",p),Wb=new V("IsMouseDirectlyOver",p),Ub=new V("StageMouseCacheProperty");function X(a,b){S.call(this,a,b,l)}y(X,S);X.prototype.type="rectangle";X.prototype.fillStyle="white";
X.prototype.I=function(a){if(this.fillStyle)switch(a.fillStyle=this.fillStyle,this.type){case "rectangle":a.fillRect(0,0,this.width,this.height);break;case "ellipse":var b=this.width,c=this.height,d=0.5522848*(b/2),e=0.5522848*(c/2),f=0+b,h=0+c,b=0+b/2,c=0+c/2;a.beginPath();a.moveTo(0,c);a.bezierCurveTo(0,c-e,b-d,0,b,0);a.bezierCurveTo(b+d,0,f,c-e,f,c);a.bezierCurveTo(f,c+e,b+d,h,b,h);a.bezierCurveTo(b-d,h,0,c+e,0,c);a.closePath();a.fill();break;default:throw Error("Don't know how to draw "+this.type);
}};function Xb(a,b){var c=b,d=Hb(a);b=Pb(ub(d),c.t());var e=[];if((new R(0,0,a.width,a.height)).contains(b)){c=a.L();for(d=0;d<c&&!(e=a.K(c-1-d),e=Xb(e,b),e.length);d++);Ta(e,g,0,a);return e}return[]};function Y(a,b,c){S.call(this,a,b,c);this.B=[]}y(Y,S);s=Y.prototype;s.addElement=function(a){Ta(this.B,this.B.length,0,a);a.s=this;Yb.set(a,Ib(a));T(this)};s.remove=function(a){if(Sa(this.B,a)){a.s=n;var b=Yb.get(a);Yb.clear(a);Sa(a.n,b);a.n.length||(a.n=n);T(this)}else throw Error("element is not a child");};s.K=function(a){return this.B[a]};s.L=function(){return this.B.length};s.update=function(){Ra(this.B,function(a){a.update()},this);Y.A.update.call(this)};
s.I=function(a){for(var b=this.L(),c=0;c<b;c++)this.K(c).T(a)};s.aa=function(){T(this)};var Yb=new V("panelTransfrom");function Zb(a,b,c){Y.call(this,a,b,c)}y(Zb,Y);function $b(a,b){var c=Yb.get(a);b&&vb(c,b.x,b.y);Pb(c,new O)};var Cb="Top",Eb="Bottom",Db="Center",zb="Left",Bb="Right",Ab="Center";function ac(a,b,c){S.call(this,b,c,p);this.S=a}y(ac,S);ac.prototype.I=function(a){a.drawImage(this.S,0,0,this.width,this.height)};function bc(a,b,c,d,e,f,h,k,m,u){Y.call(this,a,b);this.clip=p;this.X=h;this.Q=new ac(c,c.width,c.height);this.Z=d;this.addElement(this.Q);this.addElement(d);rb(Ib(this.Q),ub(e));u=yb(this.z(),d.z(),k,m,u);this.D=vb(new P,u.x,u.y);this.j=sb(f.t(),e);this.ga=Ib(this);rb(this.ga,this.j);this.N=0}y(bc,Y);bc.prototype.ba=function(){this.remove(this.Z)};
bc.prototype.update=function(){if(this.N<this.X){var a=this.N/(this.X-1),b=new P(this.j.a+a*(this.D.a-this.j.a),this.j.c+a*(this.D.c-this.j.c),this.j.b+a*(this.D.b-this.j.b),this.j.d+a*(this.D.d-this.j.d),this.j.f+a*(this.D.f-this.j.f),this.j.g+a*(this.D.g-this.j.g));rb(this.ga,b);this.Q.alpha=1-a;T(this.Q);this.Z.alpha=a;T(this.Z);bc.A.update.call(this);T(this);this.N++}};function Z(a,b){this.x=a;this.y=b}y(Z,O);Z.prototype.t=function(){return new Z(this.x,this.y)};Z.prototype.scale=O.prototype.scale;function cc(a,b,c){S.call(this,a,b,c);this.h=this.e=n;this.ka=Ab;this.ta=Db;this.ha=n}y(cc,S);s=cc.prototype;
s.forward=function(a,b,c){c=c||30;if(this.h)throw Error("cannot move forward while animating...yet");if(this.e){var d=this.e;this.e.s=n;var e=dc.get(this.e);dc.clear(this.e);var f=this.e;Sa(f.n,e);f.n.length||(f.n=n);this.e=n;f=document.createElement("canvas");f.width=d.width;f.height=d.height;var h=f.getContext("2d");Jb(d,h);this.h=new bc(this.width,this.height,f,a,b,e,c,this.ka,this.ta,this.ha||new Z(0,0));this.h.s=this}this.e=a;this.h||ec(this);T(this)};
function ec(a){var b=Ib(a.e);dc.set(a.e,b);a.e.s=a;var b=dc.get(a.e),c=a.ha||new Z(0,0),c=yb(a.z(),a.e.z(),a.ka,a.ta,c);vb(b,c.x,c.y)}s.K=function(a){if(this.h&&0===a)return this.h;if(this.e&&0===a)return this.e;throw Error("Item not found");};s.L=function(){return this.h?1:this.e?1:0};s.update=function(){this.h&&(this.h.update(),this.h.N>=this.h.X&&(this.h.s=n,this.h.ba(),this.h=n,ec(this)));this.e&&!this.h&&this.e.update();cc.A.update.call(this)};s.I=function(a){for(var b=this.L(),c=0;c<b;c++)this.K(c).T(a)};
s.aa=function(){T(this)};var dc=new V("navLayerTransfrom");function fc(a){this.R=new cc(a.width,a.height);Qb.call(this,a,this.R);Wa(a,"mousedown",this.Aa,p,this);this.ua=0;gc(this,new P)}y(fc,Qb);
function gc(a,b){if(!a.R.h){var c=++a.ua,d=new Zb(300,300),e=new X(300,300);e.fillStyle="#333";e.alpha=0.5;d.addElement(e);c=new Mb("Click here\n\n"+c,100,100);c.la=l;c.fillStyle="white";c.sa="black";c.na=l;d.addElement(c);$b(c,new O(100,100));c=new X(100,100);c.fillStyle="red";d.addElement(c);$b(c,new O(0,0));c=new X(100,100);c.fillStyle="green";d.addElement(c);$b(c,new O(200,0));c=new X(100,100);c.fillStyle="blue";d.addElement(c);$b(c,new O(0,200));c=new X(100,100);c.fillStyle="yellow";d.addElement(c);
$b(c,new O(200,200));a.R.forward(d,b)}}fc.prototype.Aa=function(a){a.stopPropagation();this.za=new O(a.offsetX,a.offsetY);if((a=Tb(this.$,this.za))&&a.length){a=a[a.length-1];var b=new P;if(a==this.R||300===a.width)b=ub(vb(new P,100,100).scale(1/3,1/3));else{var b=a.width/300,c=a.height/300;a=Hb(a);b=vb(new P,a.f,a.g).scale(b,c)}gc(this,b)}};function hc(){this.P=this.Y=0;this.F=[];this.H=0;this.Ea=NaN};function ic(a){qb||(qb=new nb(""),qb.Ga=pb);this.Ia=qb;this.ya=new hc;kb(this);this.k=a;jc(this)}function kc(a){t.$demoHost=new ic(a)}var lc=["DemoHost","load"],$=t;!(lc[0]in $)&&$.execScript&&$.execScript("var "+lc[0]);for(var mc;lc.length&&(mc=lc.shift());)!lc.length&&kc!==g?$[mc]=kc:$=$[mc]?$[mc]:$[mc]={};function jc(a){a.k==n&&(a.k=document.getElementById("content"));Nb(a.k);a.fa=new fc(a.k);a.fa.addEventListener("Update",function(){kb(this)},p,a);kb(a)};
