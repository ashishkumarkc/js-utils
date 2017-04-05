var s="This is a sample string for testing purpose by K.C.Ashish Kumar";
var t="";
for(var i=0;i<s.length;i++){
t+=String.fromCharCode(s.charCodeAt(i)^11^((i+1)%2));
}
var _t=encodeURIComponent(t);
console.log(_t);
var t=decodeURIComponent(_t);
var res="";
for(var i=0;i<t.length;i++){
res+=String.fromCharCode(t.charCodeAt(i)^11^((i+1)%2));
}
console.log(res);
