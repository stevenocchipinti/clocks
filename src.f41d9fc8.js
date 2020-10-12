parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"srJ4":[function(require,module,exports) {
var define;
var n;!function(){"use strict";var t=Math.PI,e=Math.sin,r=Math.cos,a=Math.tan,u=Math.asin,o=Math.atan2,i=Math.acos,c=t/180,s=864e5,d=2440588,f=2451545;function l(n){return new Date((n+.5-d)*s)}function h(n){return function(n){return n.valueOf()/s-.5+d}(n)-f}var M=23.4397*c;function v(n,t){return o(e(n)*r(M)-a(t)*e(M),r(n))}function g(n,t){return u(e(t)*r(M)+r(t)*e(M)*e(n))}function w(n,t,u){return o(e(n),r(n)*e(t)-a(u)*r(t))}function m(n,t,a){return u(e(t)*e(a)+r(t)*r(a)*r(n))}function p(n,t){return c*(280.16+360.9856235*n)-t}function D(n){return c*(357.5291+.98560028*n)}function P(n){return n+c*(1.9148*e(n)+.02*e(2*n)+3e-4*e(3*n))+102.9372*c+t}function y(n){var t=P(D(n));return{dec:g(t,0),ra:v(t,0)}}var b={getPosition:function(n,t,e){var r=c*-e,a=c*t,u=h(n),o=y(u),i=p(u,r)-o.ra;return{azimuth:w(i,a,o.dec),altitude:m(i,a,o.dec)}}},H=b.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];b.addTime=function(n,t,e){H.push([n,t,e])};var T=9e-4;function E(n,e,r){return T+(n+e)/(2*t)+r}function I(n,t,r){return f+n+.0053*e(t)-.0069*e(2*r)}function k(n,t,a,u,o,c,s){return I(E(function(n,t,a){return i((e(n)-e(t)*e(a))/(r(t)*r(a)))}(n,a,u),t,o),c,s)}function x(n){var t=c*(134.963+13.064993*n),a=c*(93.272+13.22935*n),u=c*(218.316+13.176396*n)+6.289*c*e(t),o=5.128*c*e(a),i=385001-20905*r(t);return{ra:v(u,o),dec:g(u,o),dist:i}}function z(n,t){return new Date(n.valueOf()+t*s/24)}b.getTimes=function(n,e,r){var a,u,o,i,s,d=c*-r,f=c*e,M=function(n,e){return Math.round(n-T-e/(2*t))}(h(n),d),v=E(0,d,M),w=D(v),m=P(w),p=g(m,0),y=I(v,w,m),b={solarNoon:l(y),nadir:l(y-.5)};for(a=0,u=H.length;a<u;a+=1)s=y-((i=k((o=H[a])[0]*c,d,f,p,M,w,m))-y),b[o[1]]=l(s),b[o[2]]=l(i);return b},b.getMoonPosition=function(n,t,u){var i=c*-u,s=c*t,d=h(n),f=x(d),l=p(d,i)-f.ra,M=m(l,s,f.dec),v=o(e(l),a(s)*r(f.dec)-e(f.dec)*r(l));return M+=function(n){return n<0&&(n=0),2967e-7/Math.tan(n+.00312536/(n+.08901179))}(M),{azimuth:w(l,s,f.dec),altitude:M,distance:f.dist,parallacticAngle:v}},b.getMoonIllumination=function(n){var t=h(n||new Date),a=y(t),u=x(t),c=i(e(a.dec)*e(u.dec)+r(a.dec)*r(u.dec)*r(a.ra-u.ra)),s=o(149598e3*e(c),u.dist-149598e3*r(c)),d=o(r(a.dec)*e(a.ra-u.ra),e(a.dec)*r(u.dec)-r(a.dec)*e(u.dec)*r(a.ra-u.ra));return{fraction:(1+r(s))/2,phase:.5+.5*s*(d<0?-1:1)/Math.PI,angle:d}},b.getMoonTimes=function(n,t,e,r){var a=new Date(n);r?a.setUTCHours(0,0,0,0):a.setHours(0,0,0,0);for(var u,o,i,s,d,f,l,h,M,v,g,w,m,p=.133*c,D=b.getMoonPosition(a,t,e).altitude-p,P=1;P<=24&&(u=b.getMoonPosition(z(a,P),t,e).altitude-p,h=((d=(D+(o=b.getMoonPosition(z(a,P+1),t,e).altitude-p))/2-u)*(l=-(f=(o-D)/2)/(2*d))+f)*l+u,v=0,(M=f*f-4*d*u)>=0&&(g=l-(m=Math.sqrt(M)/(2*Math.abs(d))),w=l+m,Math.abs(g)<=1&&v++,Math.abs(w)<=1&&v++,g<-1&&(g=w)),1===v?D<0?i=P+g:s=P+g:2===v&&(i=P+(h<0?w:g),s=P+(h<0?g:w)),!i||!s);P+=2)D=o;var y={};return i&&(y.rise=z(a,i)),s&&(y.set=z(a,s)),i||s||(y[h>0?"alwaysUp":"alwaysDown"]=!0),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=b:"function"==typeof n&&n.amd?n(b):window.SunCalc=b}();
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dateToDegrees=void 0;var e=t(require("suncalc"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(null==e)return{};var n,r,a=o(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function o(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var r=function(e){return 360*((60*e.getHours()+e.getMinutes())/1440)};exports.dateToDegrees=r;var a=function(e,t){return document.documentElement.style.setProperty(e,t)},u=function(t){var o=t.latitude,u=t.longitude,l=e.default.getTimes(new Date,o,u),c=l.nadir,i=n(l,["nadir"]);a("--nadir-deg","".concat(r(c),"deg")),Object.keys(i).forEach(function(e){return a("--".concat(e,"-deg"),"calc(".concat(r(i[e]),"deg - ").concat(r(c),"deg)"))})},l=function(){return a("--now","".concat(r(new Date),"deg"))};l(),setInterval(l,6e4);var c=localStorage.getItem("latitude"),i=localStorage.getItem("longitude");c&&i&&u({latitude:c,longitude:i}),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,n=t.latitude,o=t.longitude;u({latitude:n,longitude:o}),localStorage.setItem("latitude",n),localStorage.setItem("longitude",o)});
},{"suncalc":"srJ4"}]},{},["Focm"], null)
//# sourceMappingURL=/clocks/src.f41d9fc8.js.map