import{_ as m,r as o,b as p,c as v,e as t,z as _,A as f,D as N}from"./index-7641fed2.js";const y={class:"numBtn"},b=["onKeyup"],x={__name:"NumInput",props:{defineBuyNum:{type:Number,required:!0},index:{type:Number,required:!1}},emits:["numControlHandler"],setup(l,{emit:u}){const n=l,e=o(0);e.value=n.defineBuyNum;const r=o(100),s=()=>{e.value<r.value&&(e.value+=1,u("numControlHandler",e.value,n.index))},c=()=>{e.value>1&&(e.value-=1,u("numControlHandler",e.value,n.index))},d=()=>{e.value=e.value,e.value<=0&&(e.value=1),u("numControlHandler",e.value,n.index),console.log(e.value)};return(B,a)=>(p(),v("div",y,[t("button",{onClick:c},"-"),_(t("input",{type:"number",id:"numberArr",onKeyup:N(d,["enter"]),"onUpdate:modelValue":a[0]||(a[0]=i=>e.value=i),oninput:"value=value.replace(/^(0+)|[^\\d]+/g, '')"},null,40,b),[[f,e.value]]),t("button",{onClick:s},"+")]))}},H=m(x,[["__scopeId","data-v-00fcbd21"]]);export{H as N};
