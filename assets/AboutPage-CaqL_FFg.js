import{r as j,g as I,i as K,k as _,_ as h,m as A,n as F,y as D,b as L,j as p,d as U,z as v,A as W,e as Z,S as w,O as H}from"./index-2j_tCPV5.js";import{A as q,T as b}from"./Avatar-CjoZ2BfX.js";const J=j.createContext(),B=J;function Q(e){return I("MuiGrid",e)}const X=[0,1,2,3,4,5,6,7,8,9,10],Y=["column-reverse","column","row-reverse","row"],ee=["nowrap","wrap-reverse","wrap"],x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=K("MuiGrid",["root","container","item","zeroMinWidth",...X.map(e=>`spacing-xs-${e}`),...Y.map(e=>`direction-xs-${e}`),...ee.map(e=>`wrap-xs-${e}`),...x.map(e=>`grid-xs-${e}`),...x.map(e=>`grid-sm-${e}`),...x.map(e=>`grid-md-${e}`),...x.map(e=>`grid-lg-${e}`),...x.map(e=>`grid-xl-${e}`)]),ne=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function g(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function re({theme:e,ownerState:n}){let i;return e.breakpoints.keys.reduce((t,r)=>{let s={};if(n[r]&&(i=n[r]),!i)return t;if(i===!0)s={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")s={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=v({values:n.columns,breakpoints:e.breakpoints.values}),l=typeof a=="object"?a[r]:a;if(l==null)return t;const u=`${Math.round(i/l*1e8)/1e6}%`;let c={};if(n.container&&n.item&&n.columnSpacing!==0){const o=e.spacing(n.columnSpacing);if(o!=="0px"){const d=`calc(${u} + ${g(o)})`;c={flexBasis:d,maxWidth:d}}}s=h({flexBasis:u,flexGrow:0,maxWidth:u},c)}return e.breakpoints.values[r]===0?Object.assign(t,s):t[e.breakpoints.up(r)]=s,t},{})}function te({theme:e,ownerState:n}){const i=v({values:n.direction,breakpoints:e.breakpoints.values});return W({theme:e},i,t=>{const r={flexDirection:t};return t.indexOf("column")===0&&(r[`& > .${S.item}`]={maxWidth:"none"}),r})}function M({breakpoints:e,values:n}){let i="";Object.keys(n).forEach(r=>{i===""&&n[r]!==0&&(i=r)});const t=Object.keys(e).sort((r,s)=>e[r]-e[s]);return t.slice(0,t.indexOf(i))}function ie({theme:e,ownerState:n}){const{container:i,rowSpacing:t}=n;let r={};if(i&&t!==0){const s=v({values:t,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=M({breakpoints:e.breakpoints.values,values:s})),r=W({theme:e},s,(l,u)=>{var c;const o=e.spacing(l);return o!=="0px"?{marginTop:`-${g(o)}`,[`& > .${S.item}`]:{paddingTop:g(o)}}:(c=a)!=null&&c.includes(u)?{}:{marginTop:0,[`& > .${S.item}`]:{paddingTop:0}}})}return r}function se({theme:e,ownerState:n}){const{container:i,columnSpacing:t}=n;let r={};if(i&&t!==0){const s=v({values:t,breakpoints:e.breakpoints.values});let a;typeof s=="object"&&(a=M({breakpoints:e.breakpoints.values,values:s})),r=W({theme:e},s,(l,u)=>{var c;const o=e.spacing(l);return o!=="0px"?{width:`calc(100% + ${g(o)})`,marginLeft:`-${g(o)}`,[`& > .${S.item}`]:{paddingLeft:g(o)}}:(c=a)!=null&&c.includes(u)?{}:{width:"100%",marginLeft:0,[`& > .${S.item}`]:{paddingLeft:0}}})}return r}function oe(e,n,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return n.forEach(r=>{const s=e[r];Number(s)>0&&t.push(i[`spacing-${r}-${String(s)}`])}),t}const ae=_("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e,{container:t,direction:r,item:s,spacing:a,wrap:l,zeroMinWidth:u,breakpoints:c}=i;let o=[];t&&(o=oe(a,c,n));const d=[];return c.forEach(f=>{const m=i[f];m&&d.push(n[`grid-${f}-${String(m)}`])}),[n.root,t&&n.container,s&&n.item,u&&n.zeroMinWidth,...o,r!=="row"&&n[`direction-xs-${String(r)}`],l!=="wrap"&&n[`wrap-xs-${String(l)}`],...d]}})(({ownerState:e})=>h({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),te,ie,se,re);function ce(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return n.forEach(t=>{const r=e[t];if(Number(r)>0){const s=`spacing-${t}-${String(r)}`;i.push(s)}}),i}const le=e=>{const{classes:n,container:i,direction:t,item:r,spacing:s,wrap:a,zeroMinWidth:l,breakpoints:u}=e;let c=[];i&&(c=ce(s,u));const o=[];u.forEach(f=>{const m=e[f];m&&o.push(`grid-${f}-${String(m)}`)});const d={root:["root",i&&"container",r&&"item",l&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...o]};return Z(d,Q,n)},ue=j.forwardRef(function(n,i){const t=A({props:n,name:"MuiGrid"}),{breakpoints:r}=F(),s=D(t),{className:a,columns:l,columnSpacing:u,component:c="div",container:o=!1,direction:d="row",item:f=!1,rowSpacing:m,spacing:k=0,wrap:P="wrap",zeroMinWidth:V=!1}=s,y=L(s,ne),E=m||k,T=u||k,O=j.useContext(B),C=o?l||12:O,G={},z=h({},y);r.keys.forEach($=>{y[$]!=null&&(G[$]=y[$],delete z[$])});const N=h({},s,{columns:C,container:o,direction:d,item:f,rowSpacing:E,columnSpacing:T,wrap:P,zeroMinWidth:V,spacing:k},G,{breakpoints:r.keys}),R=le(N);return p.jsx(B.Provider,{value:C,children:p.jsx(ae,h({ownerState:N,className:U(R.root,a),as:c,ref:i},z))})}),pe=ue,me=()=>{const e="350px",n={fontFamily:"Public Sans",fontWeight:"bold",fontSize:64};return p.jsxs("div",{children:[p.jsx(pe,{container:!0,direction:"column",justifyContent:"center",children:p.jsxs(w,{direction:"row",alignItems:"center",gap:8,children:[p.jsx(w,{children:p.jsx(q,{sx:{width:e,height:e},alt:"Florin",src:"/src/assets/images/Profile.jpg"})}),p.jsxs(w,{direction:"column",gap:2,children:[p.jsx(b,{style:n,children:"Hi 👋"}),p.jsxs(w,{direction:"row",gap:2,children:[p.jsx(b,{style:n,children:"I'm"}),p.jsx(b,{style:n,sx:{background:"linear-gradient(to right, rgb(222, 91, 181), rgb(145, 70, 255))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Florin"})]}),p.jsx(b,{style:n,children:"Software Engineer"})]})]})}),p.jsx(H,{})]})};export{me as default};