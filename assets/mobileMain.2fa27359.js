import{h as e}from"./index.bab4bf68.js";import{_ as a,a as o,b as l}from"./main-header.8b88c661.js";import{y as n,g as t,l as s,h as i,o as r,c,i as m,a as p}from"./vendor.c251c323.js";const u={components:{sideMenu:a,navIcon:o,mainHeader:l},layout:"mobileMain",setup(){const a=n("emitter"),o=t(null);let l;return s((()=>{console.log(o.value),o.value&&(l=e(o.value)),console.log(l),l.on("swiperight",(e=>{console.log("swipe right"),a.emit("openmenu",e)})),l.on("panright",(e=>a.emit("partialopen",e))),l.on("panstart",(e=>a.emit("partialopen",e))),l.on("panend",(e=>a.emit("partialopen",e))),l.on("panleft",(e=>a.emit("partialopen",e)))})),{root:o,hammer:l,emitter:a}},methods:{logshit(e){console.log(e)}}},f={class:"block h-screen"},d={class:"flex flex-col justify-items-center h-screen",ref:"root",style:{height:"calc(var(--vh, 1vh) * 100)"}},h=p(),v={id:"main",class:"w-full flex flex-col h-full"},g=m("div",{class:"w-full mb-2 h-9 flex flex-shrink-0"},"aaa ",-1),b={id:"nav",class:"bg-gray-50 w-full h-auto border-t py-1 sticky bottom-0 left-0 z-30 bg-white"};u.render=function(e,a,o,l,n,t){const s=i("mainHeader"),p=i("sideMenu"),u=i("router-view"),x=i("navIcon");return r(),c("div",f,[m("div",d,[m(s),h,m(p,{ref:"sidemenu"},null,512),m("div",v,[g,m(u)]),m("div",b,[m(x)])],512)])};export default u;
