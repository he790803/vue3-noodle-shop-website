import{d as b,r as h,s as f,k as y,_ as $,b as _,c as u,F as P,f as x,e as s,t as g,j as S,w as I,u as n,l as N,p as m,i as C,n as v}from"./index-5933edd6.js";import{u as L}from"./shopping-3e7e308c.js";const k=b("pagination",()=>{const o=h(1),d=h(6),t=h("all"),i=L(),{cardList:r}=f(i),e=l=>{t.value=l},c=y(()=>{if(t.value==="all")return r.value;if(t.value==="mainMeal")return r.value.filter(l=>l.typeEN==="mainMeal");if(t.value==="dessert")return r.value.filter(l=>l.typeEN==="dessert");if(t.value==="soup")return r.value.filter(l=>l.typeEN==="soup");if(t.value==="drinks")return r.value.filter(l=>l.typeEN==="drinks")}),a=y(()=>c.value.slice((o.value-1)*d.value,o.value*d.value));return{perPage:d,paginationData:a,filterDataHandler:e,type:t}});const D=o=>(m("data-v-36de26d8"),o=o(),C(),o),M={class:"productsCard"},E={class:"cardHeader"},w={key:0,class:"placeholder"},B=["src","onLoad"],F={class:"tag"},H={class:"cardBody"},R={class:"cardFooter"},T=D(()=>s("button",{class:"apply"},"More",-1)),V={__name:"ProductsCard",setup(o){const d=L();f(d);const t=k(),{paginationData:i}=f(t),r=e=>{e.isLoading=!1,console.log(e.id)};return(e,c)=>(_(),u("div",M,[(_(!0),u(P,null,x(n(i),a=>(_(),u("div",{class:"card",key:a.id},[s("div",E,[a.isLoading||!a.imgLink?(_(),u("div",w)):(_(),u("img",{key:1,src:a.imgLink,onLoad:l=>r(a)},null,40,B)),s("div",F,[s("p",null,g(a.type),1)])]),s("div",H,[s("h3",null,g(a.title),1),s("p",null,"NT "+g(a.price)+" 元",1)]),s("div",R,[S(n(N),{to:`/shop/${a.id}`},{default:I(()=>[T]),_:2},1032,["to"])])]))),128))]))}},j=$(V,[["__scopeId","data-v-36de26d8"]]);const p=o=>(m("data-v-b7b15fe7"),o=o(),C(),o),z={class:"products"},q=p(()=>s("div",{class:"title"},[s("h1",null,"Menu")],-1)),A={class:"mainSection"},G={class:"menuList"},J=p(()=>s("span",null,"全部商品",-1)),K=[J],O=p(()=>s("span",null,"主餐",-1)),Q=[O],U=p(()=>s("span",null,"點心",-1)),W=[U],X=p(()=>s("span",null,"湯品",-1)),Y=[X],Z=p(()=>s("span",null,"飲品",-1)),ss=[Z],es={__name:"Products",setup(o){const d=k(),{type:t}=f(d),{filterDataHandler:i}=k();return(r,e)=>(_(),u("div",z,[q,s("div",A,[s("div",G,[s("ul",null,[s("li",{onClick:e[0]||(e[0]=c=>n(i)("all")),class:v({active:n(t)==="all"})},K,2),s("li",{onClick:e[1]||(e[1]=c=>n(i)("mainMeal")),class:v({active:n(t)==="mainMeal"})},Q,2),s("li",{onClick:e[2]||(e[2]=c=>n(i)("dessert")),class:v({active:n(t)==="dessert"})},W,2),s("li",{onClick:e[3]||(e[3]=c=>n(i)("soup")),class:v({active:n(t)==="soup"})},Y,2),s("li",{onClick:e[4]||(e[4]=c=>n(i)("drinks")),class:v({active:n(t)==="drinks"})},ss,2)])]),S(j)])]))}},ns=$(es,[["__scopeId","data-v-b7b15fe7"]]);export{ns as default};