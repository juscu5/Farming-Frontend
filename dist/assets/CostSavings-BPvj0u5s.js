import{r as E,l as D,p as ee,j as e,C as se,H as te,I as ne,i as V,b as I,s as ce,u as H,M as $,B as M,a as G,c as oe,g as ae,R as O}from"./index-Cy1U88sa.js";import{u as le,b as re,F as J,a as h,C as l,E as T}from"./formik.esm-Ck2ofJqQ.js";import{c as U,a as F}from"./index.esm-DSeJ6hL8.js";import{f as ie,b as W,I as de,d as ue}from"./selectors-B3ZcmyZz.js";import{h as X}from"./moment-Cl4UOzQZ.js";import{R as Q,C as z}from"./Row--G6XAMP6.js";import{l as R}from"./lodash-7L2L8PGe.js";const he=E.forwardRef(({bsPrefix:s,className:t,striped:a,bordered:n,borderless:S,hover:m,size:f,variant:v,responsive:N,...A},b)=>{const d=D(s,"table"),u=ee(t,d,v&&`${d}-${v}`,f&&`${d}-${f}`,a&&`${d}-${typeof a=="string"?`striped-${a}`:"striped"}`,n&&`${d}-bordered`,S&&`${d}-borderless`,m&&`${d}-hover`),o=e.jsx("table",{...A,className:u,ref:b});if(N){let r=`${d}-responsive`;return typeof N=="string"&&(r=`${r}-${N}`),e.jsx("div",{className:r,children:o})}return o}),me=he,Z=({...s})=>{const{setFieldValue:t}=le(),[a]=re(s),n=m=>{const f=`Tooltip for year: ${m}`;return e.jsx("span",{title:f,children:m})},S=m=>{m.preventDefault()};return e.jsx(ie,{...a,...s,className:"date",placeholderText:"Enter Year",renderYearContent:n,showYearPicker:!0,dateFormat:"yyyy",selected:a.value&&new Date(a.value)||null,onChange:m=>{t(a.name,m)},onKeyDown:S})},xe=s=>({type:se,payload:s}),je=s=>({type:te,payload:s}),ve=s=>({type:ne,payload:s}),ge=()=>V.get("/api/costsavings/"),fe=s=>V.post("/api/costsavings/create/",s),pe=s=>{const t=s.cost_id;return V.put("/api/costsavings/"+t+"/",s)},Ce=()=>s=>{ge().then(t=>{s(xe(t.data))}).catch(t=>{s((void 0)(t))})},ye=(s,t)=>async a=>{try{const n=await fe(s);a(je()),n.status===200?t&&t(200,"Success"):t&&t(n.status||n.statusText,"Error occurred")}catch(n){console.log(n),t&&t(n.status||n,null)}},Qe=(s,t)=>async a=>{try{const n=await pe(s);a(ve()),n.status===200?t&&t(200,"Success"):t&&t(n.status||n.statusText,"Error occurred")}catch(n){console.log(n),t&&t(n.status||n,null)}},Se=s=>{var A,b,d;const{refetchCsData:t}=s,a=I(W),n=I(ce),S=H(),m=()=>{s.close(!0)},f=(u,o)=>{u===200?G.success("Success Add Cost Savings",{position:"bottom-right"}):G.error(o||"An error occurred",{position:"bottom-right"})},v=u=>{const r=new Date(u.year).getFullYear(),x={account_name:u.account,cost_saved:u.amount,quarter:u.quarter,site:u.site,year:r,last_updated_by:n};console.log(x),S(ye(x,f)),t(),s.close(!0)},N=U().shape({site:F().required("Please Select Site"),quarter:F().required("Please Select Quarter"),account:F().required("Please Input Account"),amount:F().required("Please Input Amount")});return e.jsx("div",{children:e.jsx($,{show:s.show,onHide:s.close,children:e.jsx(J,{validationSchema:N,initialValues:{site:s.toggle===!0?(A=s.data)==null?void 0:A.site:"",year:s.toggle===!0?X((b=s.data)==null?void 0:b.year,"YYYY").toDate():new Date,quarter:s.toggle===!0?(d=s.data)==null?void 0:d.quarter:"",account:"",amount:""},onSubmit:v,children:({handleSubmit:u,handleChange:o,values:r,touched:x,errors:g})=>e.jsxs(h,{onSubmit:u,children:[e.jsx($.Header,{closeButton:!0,children:e.jsx($.Title,{children:"Add Account"})}),e.jsxs($.Body,{children:[e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Site:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsxs(h.Group,{children:[e.jsxs("select",{className:"form-select",name:"site",value:r.site,onChange:o,children:[e.jsx("option",{value:"",children:"Select Site"}),a==null?void 0:a.map(_=>e.jsx("option",{value:_.site_name,children:_.site_name}))]}),e.jsx(T,{name:"site",component:"div",className:"text-danger"})]})})})]}),e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Year:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsx(h.Group,{children:e.jsx(Z,{name:"year",className:"date"})})})})]}),e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Quarter:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsxs(h.Group,{children:[e.jsxs("select",{className:"form-select",name:"quarter",value:r.quarter,onChange:o,children:[e.jsx("option",{value:"",children:"Select Quarter"}),e.jsx("option",{value:"Q1",children:"Q1"}),e.jsx("option",{value:"Q2",children:"Q2"}),e.jsx("option",{value:"Q3",children:"Q3"}),e.jsx("option",{value:"Q4",children:"Q4"})]}),e.jsx(T,{name:"quarter",component:"div",className:"text-danger"})]})})})]}),e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Account:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsxs(h.Group,{children:[e.jsx(h.Control,{placeholder:"Enter Account",name:"account",onChange:o,isValid:!!x.account&&!g.account,isInvalid:!!g.account}),e.jsx(T,{name:"account",component:"div",className:"text-danger"})]})})})]}),e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Amount:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsxs(h.Group,{children:[e.jsx(h.Control,{placeholder:"Enter Amount",name:"amount",type:"number",onChange:o,isValid:!!x.amount&&!g.amount,isInvalid:!!g.amount}),e.jsx(T,{name:"amount",component:"div",className:"text-danger"})]})})})]})]}),e.jsxs($.Footer,{children:[e.jsx(M,{variant:"secondary",onClick:()=>m(),children:"Cancel"}),e.jsx(M,{type:"submit",className:"btn-color",variant:"primary",children:"Add"})]})]})})})})},Ne=s=>{var v,N,A,b,d,u;const{refetchCsData:t}=s,a=H(),n=I(W),S=(o,r)=>{o===200?G.success("Success Edit Changes",{position:"bottom-right"}):G.error(r||"An error occurred",{position:"bottom-right"})},m=o=>{const x=new Date(o.year).getFullYear(),g={account_name:o.account,cost_saved:o.amount,quarter:o.quarter,site:o.site,year:x,cost_id:o.cost_id};a(Qe(g,S)),t(),s.close(!0)},f=U().shape({account:F().required("Please Input Account"),amount:F().required("Please Input Amount")});return e.jsx("div",{children:e.jsx($,{show:s.show,onHide:s.close,children:e.jsx(J,{validationSchema:f,initialValues:{site:(v=s.data)==null?void 0:v.site,year:X((N=s.data)==null?void 0:N.year,"YYYY").toDate(),quarter:(A=s.data)==null?void 0:A.quarter,cost_id:(b=s.data)==null?void 0:b.cost_id,account:(d=s.data)==null?void 0:d.account,amount:(u=s.data)==null?void 0:u.amount},onSubmit:m,children:({handleSubmit:o,handleChange:r,values:x,touched:g,errors:_})=>e.jsxs(h,{onSubmit:o,children:[e.jsx($.Header,{closeButton:!0,children:e.jsx($.Title,{children:"Edit Account"})}),e.jsxs($.Body,{children:[e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Site:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsx(h.Group,{children:e.jsx("select",{className:"form-select",name:"site",value:x.site,onChange:r,children:n==null?void 0:n.map(P=>e.jsx("option",{value:P.site_name,children:P.site_name}))})})})})]}),e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Year:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsx(h.Group,{children:e.jsx(de,{children:e.jsx(Z,{name:"year",className:"date"})})})})})]}),e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Quarter:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsx(h.Group,{children:e.jsxs("select",{className:"form-select",name:"quarter",value:x.quarter,onChange:r,children:[e.jsx("option",{value:"Q1",children:"Q1"}),e.jsx("option",{value:"Q2",children:"Q2"}),e.jsx("option",{value:"Q3",children:"Q3"}),e.jsx("option",{value:"Q4",children:"Q4"})]})})})})]}),e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Account:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsxs(h.Group,{children:[e.jsx(h.Control,{placeholder:"Enter Account",name:"account",value:x.account,onChange:r,isValid:!!g.account&&!_.account,isInvalid:!!_.account}),e.jsx(T,{name:"account",component:"div",className:"text-danger"})]})})})]}),e.jsxs(Q,{className:"mb-3",children:[e.jsx(l,{md:"5",children:e.jsx("div",{className:"strong",children:"Amount:"})}),e.jsx(l,{md:"6",children:e.jsx("div",{children:e.jsxs(h.Group,{children:[e.jsx(h.Control,{placeholder:"Enter Amount",name:"amount",type:"number",value:x.amount,onChange:r,isValid:!!g.amount&&!_.amount,isInvalid:!!_.amount}),e.jsx(T,{name:"amount",component:"div",className:"text-danger"})]})})})]})]}),e.jsxs($.Footer,{children:[e.jsx(M,{variant:"secondary",onClick:s.close,children:"Cancel"}),e.jsx(M,{type:"submit",className:"btn-color",variant:"primary",children:"Save"})]})]})})})})},be=s=>s.cs,Ee=oe([be],s=>s.cs),Me=s=>{const[t,a]=E.useState(!1),[n,S]=E.useState(!1),[m,f]=E.useState();E.useState(!1);const[v,N]=E.useState({Q1:0,Q2:0,Q3:0,Q4:0}),[A,b]=E.useState(!1),d=()=>{a(!1),b(!1)},u=()=>S(!1),o=H(),r=I(Ee);E.useEffect(()=>{g(),x()},[]),E.useEffect(()=>{K()},[r]);const x=R.debounce(()=>{o(ae())},300),g=R.debounce(()=>{o(Ce(_)),o(ue())},300),_=c=>{c&&G.error(c==null?void 0:c.error,{position:"bottom-right"})},P=c=>{const i=c.reduce((C,j)=>{const y=`${j.site}-${j.year}`;C[y]||(C[y]={site:j.site,year:j.year,Q1:[],Q2:[],Q3:[],Q4:[]});const q=`Q${j.quarter.slice(1)}`,w={cost_id:j.cost_id,account:j.account_name,amount:j.cost_saved};return C[y][q].push(w),C},{});return Object.values(i)},k=E.useMemo(()=>P(r),[r]),K=R.debounce(()=>{const c={Q1:0,Q2:0,Q3:0,Q4:0};k.forEach(i=>{["Q1","Q2","Q3","Q4"].forEach(p=>{i[p]&&i[p].length>0&&i[p].forEach(C=>{c[p]+=parseInt(C.amount,10)})})}),N(c)},300),B=(c,i,p)=>{if(i===null){const C={site:c.site,year:c.year,quarter:p,account:i===null?"":i.account,amount:i===null?"":i.amount,cost_id:i===null?null:i.cost_id};b(!0),f(C),a(!0)}else{const C={site:c.site,year:c.year,quarter:p,account:i===null?"":i.account,amount:i===null?"":i.amount,cost_id:i===null?null:i.cost_id};f(C),S(!0)}},Y=c=>parseFloat(c).toLocaleString({style:"currency",currency:"PHP"}),L=()=>{g(),x(),K()};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cost-savings",children:[e.jsx(Q,{className:"mb-3",children:e.jsx(l,{md:5,children:e.jsx(M,{onClick:()=>a(!0),children:"Add Account"})})}),e.jsx(z,{children:e.jsx(z.Body,{children:e.jsx("div",{className:"table-cost",children:e.jsxs(me,{bordered:!0,size:"xl",children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:k.year}),e.jsx("th",{colSpan:2,children:"Q1"}),e.jsx("th",{colSpan:2,children:"Q2"}),e.jsx("th",{colSpan:2,children:"Q3"}),e.jsx("th",{colSpan:2,children:"Q4"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Site"}),e.jsx("th",{children:"Account"}),e.jsx("th",{children:"Cost Savings"}),e.jsx("th",{children:"Account"}),e.jsx("th",{children:"Cost Savings"}),e.jsx("th",{children:"Account"}),e.jsx("th",{children:"Cost Savings"}),e.jsx("th",{children:"Account"}),e.jsx("th",{children:"Cost Savings"})]})]}),e.jsxs("tbody",{children:[k.map((c,i)=>{const p=Math.max(c.Q1.length,c.Q2.length,c.Q3.length,c.Q4.length);return Array.from({length:p}).map((C,j)=>e.jsxs("tr",{children:[j===0&&e.jsx("td",{className:"center",rowSpan:p,children:c.site}),["Q1","Q2","Q3","Q4"].map(y=>{const w=c[y][j];return w?e.jsxs(O.Fragment,{children:[e.jsx("td",{className:"hoverable-account",onClick:()=>B(c,w,y),children:w.account}),e.jsx("td",{className:"hoverable-amount",onClick:()=>B(c,w,y),children:Y(w.amount)})]},`${y}-cell-${j}`):e.jsxs(O.Fragment,{children:[e.jsx("td",{className:"hoverable-account",onClick:()=>B(c,null,y)}),e.jsx("td",{className:"hoverable-amount",onClick:()=>B(c,null,y)})]},`${y}-empty-cell-${j}`)})]},j))}),e.jsx("br",{}),e.jsxs("tr",{children:[e.jsx("th",{children:"Total"}),e.jsx("td",{}),e.jsxs("th",{children:["₱ ",Y(v.Q1)]}),e.jsx("td",{}),e.jsxs("th",{children:["₱ ",Y(v.Q2)]}),e.jsx("td",{}),e.jsxs("th",{children:["₱ ",Y(v.Q3)]}),e.jsx("td",{}),e.jsxs("th",{children:["₱ ",Y(v.Q4)]})]})]})]})})})})]}),e.jsx(Se,{show:t,close:d,data:m,toggle:A,refetchCsData:L}),e.jsx(Ne,{show:n,close:u,data:m,refetchCsData:L})]})};export{Me as default};
