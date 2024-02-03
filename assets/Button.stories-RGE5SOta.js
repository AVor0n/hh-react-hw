import{j as B}from"./jsx-runtime-vNq4Oc-g.js";import{c as j}from"./clsx-Zbgk8kpT.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const r="_button_1ryzf_1",_="_primary_1ryzf_17",y="_ghost_1ryzf_33",a="_disabled_1ryzf_49",n="_wide_1ryzf_55",f="_s_1ryzf_59",b="_m_1ryzf_64",x="_l_1ryzf_70",g="_xl_1ryzf_76",o="_circle_1ryzf_82",l="_loading_1ryzf_89",q={button:r,primary:_,ghost:y,disabled:a,wide:n,s:f,m:b,l:x,xl:g,circle:o,loading:l},c=Object.freeze(Object.defineProperty({__proto__:null,button:r,circle:o,default:q,disabled:a,ghost:y,l:x,loading:l,m:b,primary:_,s:f,wide:n,xl:g},Symbol.toStringTag,{value:"Module"})),t=({className:s,children:z,loading:e,disabled:i,circle:D,buttonType:A="primary",flex:E,size:F,...v})=>{const h=j(s,r,c[F],c[A],E&&n,D&&o,(i??e)&&a,e&&l);return B.jsx("button",{type:"button",className:h,disabled:e||i,...v,children:z})};try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:`Высота кнопки:
s - 20px
m - 24px
l - 32px
xl - 36px`,name:"size",required:!0,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},flex:{defaultValue:null,description:"Растянуть кнопку по ширине контейнера,",name:"flex",required:!1,type:{name:"boolean"}},buttonType:{defaultValue:{value:"primary"},description:`Тип кнопки
primary - цветная
ghost - бледная`,name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"ghost"'}]}},circle:{defaultValue:null,description:"Сделать кнопку круглой",name:"circle",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Показать спиннер на кнопке",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const C={component:t,tags:["autodocs"]},u={args:{children:"text",buttonType:"primary",size:"m"}};var m,d,p;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'text',
    buttonType: 'primary',
    size: 'm'
  }
}`,...(p=(d=u.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const O=["Primary"];export{u as Primary,O as __namedExportsOrder,C as default};
