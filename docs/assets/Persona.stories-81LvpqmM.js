import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{c as f}from"./clsx-Zbgk8kpT.js";import{r as E}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const y="_container_13ytf_1",v="_interactive_13ytf_17",A="_image_13ytf_31",h="_text_13ytf_39";const D=u=>`https://placehold.co/30x30/blue/white?text=${u.split(" ",2).map(t=>t[0]).join("")||"?"}`,s=({text:u,avatar:r,onClick:t,tooltip:d})=>{const _=t?"button":"div",x=f(y,!!t&&v),g=E.useMemo(()=>r||D(u),[r,u]);return o.jsxs(_,{className:x,onClick:t,title:d,children:[o.jsx("img",{className:A,src:g,alt:""}),o.jsx("span",{className:h,children:u})]})};try{s.displayName="Persona",s.__docgenInfo={description:"",displayName:"Persona",props:{text:{defaultValue:null,description:"Отображаемый текст",name:"text",required:!0,type:{name:"string"}},avatar:{defaultValue:null,description:"Ссылка на изображение",name:"avatar",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Обработчик нажатия",name:"onClick",required:!1,type:{name:"(() => void)"}},tooltip:{defaultValue:null,description:"Текст всплывающей подсказки",name:"tooltip",required:!1,type:{name:"string"}}}}}catch{}const F={component:s,tags:["autodocs"]},e={args:{text:"Иван Иванов",tooltip:"Подсказка",onClick:void 0}},a={args:{text:"Иван Иванов",tooltip:"Подсказка",onClick:()=>{}}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'Иван Иванов',
    tooltip: 'Подсказка',
    onClick: undefined
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'Иван Иванов',
    tooltip: 'Подсказка',
    onClick: () => {}
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const P=["Static","Interactive"];export{a as Interactive,e as Static,P as __namedExportsOrder,F as default};
