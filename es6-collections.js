(function(f){function g(a){return function e(c){if(!this||this.constructor!==e)return new e(c);this._keys=[];this._values=[];this.objectOnly=a;if(c)if(this.add)for(var b=c.length;b--;this.add(c[b]));else for(b=c.length;b--;this.set(c[b][0],c[b][1]));}}function h(a){this.has(a)&&(this._keys.splice(b,1),this._values.splice(b,1));return-1<b}function q(a){return this.has(a)?this._values[b]:void 0}function r(a,d){if(this.objectOnly&&d!==Object(d))throw new TypeError("Invalid value used as weak collection key");
if(d!=d||0===d)for(b=a.length;b--&&!y(a[b],d););else b=a.indexOf(d);return-1<b}function s(a){return r.call(this,this._values,a)}function t(a){return r.call(this,this._keys,a)}function u(a,d){this.has(a)?this._values[b]=d:this._values[this._keys.push(a)-1]=d}function k(){this._values.length=0}function v(){return this._values.slice()}function z(){return this._keys.slice()}function w(){return this._values.length}function A(a,b){var e=this,c=e._values.slice();e._keys.slice().forEach(function(f,g){a.call(b,
f,c[g],e)})}function B(a,b){var e=this;e._values.slice().forEach(function(c){a.call(b,c,c,e)})}function x(a){!this.has(a)&&!!this._values.push(a)}if("undefined"==typeof l){var l=g(!0);l.prototype={constructor:l,"delete":h,clear:k,get:q,has:t,set:u};f.WeakMap=l}if("undefined"==typeof m){var m=g();m.prototype={constructor:m,"delete":h,has:t,get:q,set:u,size:w,keys:z,values:v,forEach:A,clear:k};f.Map=m}if("undefined"==typeof n){var n=g();n.prototype={constructor:n,has:s,add:x,"delete":h,clear:k,size:w,
values:v,forEach:B};f.Set=n}if("undefined"==typeof p){var p=g(!0);p.prototype={constructor:p,"delete":h,add:x,clear:k,has:s};f.WeakSet=p}var b,y=Object.is})("undefined"==typeof exports?window:global);
