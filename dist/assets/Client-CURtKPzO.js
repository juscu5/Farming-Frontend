import{c as B,X as R,Y as k,Z as H,_ as L,i as S,u as y,b as j,s as E,j as t,M as l,B as m,a as x,r as u,g as G}from"./index-Cy1U88sa.js";import{F as V,C as Z,c as q}from"./Modal-BGjb3hrj.js";import{F as D,a as h,E as P}from"./formik.esm-Ck2ofJqQ.js";import{h as A}from"./moment-Cl4UOzQZ.js";import{R as g}from"./Row--G6XAMP6.js";import{c as U,a as X}from"./index.esm-DSeJ6hL8.js";import{l as N}from"./lodash-7L2L8PGe.js";const Y=e=>e.client,J=B([Y],e=>e.client),K=e=>({type:R,payload:e}),O=e=>({type:k,payload:e}),Q=e=>({type:H,payload:e}),W=e=>({type:L,payload:e}),ee=()=>S.get("/api/submitform/clients/"),te=e=>S.post("/api/submitform/client/create/",e),se=e=>S.put("/api/submitform/client/update/"+e.client_id+"/",e),ne=e=>{const n={last_updated_by:e.last_updated_by};return S.put("/api/submitform/client/freeze/"+e.client_id+"/",n)},w=e=>n=>{ee().then(a=>{n(K(a.data)),e&&e(null,"Success")}).catch(a=>{var s;n((void 0)()),e&&e(((s=a==null?void 0:a.response)==null?void 0:s.data)||a,null)})},ae=(e,n)=>async a=>{try{const s=await te(e);a(O()),s.status,n&&n(200,"Success")}catch(s){console.log(s),n&&n(s.status||s,null)}},ie=(e,n)=>async a=>{try{const s=await se(e);a(Q()),s.status,n&&n(200,"Success")}catch(s){console.log(s),n&&n(s.status||s,null)}},ce=(e,n)=>async a=>{try{const s=await ne(e);a(W()),s.status,n&&n(200,"Success")}catch(s){console.log(s),n&&n(s.status||s,null)}},le=e=>{const n=y(),{refetchClientData:a}=e,s=j(E),r=(i,c)=>{i===200?x.success("Success Edit Changes",{position:"bottom-right"}):x.error(c||"An error occurred",{position:"bottom-right"})},d=i=>{const c={client_id:e.idState[0].client_id,client_name:i.client_name,owner:s,last_updated_by:s,updated_dt_utc:A(new Date).format()};n(ie(c,r)),a(),e.close(!0)},C=()=>{const i={client_id:e.idState[0].client_id,last_updated_by:s};n(ce(i,r)),a(),e.close(!0)};return t.jsx("div",{children:t.jsx(l,{show:e.show,onHide:e.close,size:"xm",children:t.jsx(D,{initialValues:{client_name:e.clientState&&e.clientState.length>0?e.clientState[0].client_name:""},onSubmit:d,children:({handleSubmit:i,handleChange:c,values:f})=>t.jsxs(h,{onSubmit:i,children:[t.jsx(l.Header,{closeButton:!0,children:t.jsxs(l.Title,{children:["Edit Client #",e.idState[0].client_id]})}),t.jsx(l.Body,{children:t.jsx(g,{className:"mb-3",children:t.jsx("div",{children:t.jsxs(h.Group,{children:[t.jsx("div",{className:"strong",children:"Client Name:"}),t.jsx(h.Control,{placeholder:"Enter Client Name",name:"client_name",onChange:c,value:f.client_name})]})})})}),t.jsxs(l.Footer,{children:[t.jsx(m,{variant:"secondary",onClick:e.close,children:"Cancel"}),t.jsx(m,{variant:e.clientState[0].status===!0?"danger":"success",onClick:()=>C(),children:e.clientState[0].status===!1?"Active":"Inactive"}),t.jsx(m,{type:"submit",className:"btn-color",variant:"primary",children:"Save"})]})]})})})})},oe=e=>{const{refetchClientData:n}=e,a=y(),s=j(E),r=(i,c)=>{i===200?x.success("Client Added!",{position:"bottom-right"}):x.error(c||"An error occurred",{position:"bottom-right"})},d=i=>{const c={client_name:i.client_name,created_dt_utc:A(new Date).format(),last_updated_by:s};a(ae(c,r)),n(),e.close(!0)},C=U().shape({client_name:X().required("Please Enter Client Name")});return t.jsx("div",{className:"modal",children:t.jsx(l,{show:e.show,onHide:e.close,size:"xs",children:t.jsx(D,{validationSchema:C,initialValues:{client_name:""},onSubmit:d,children:({handleSubmit:i,handleChange:c,touched:f,errors:_})=>t.jsxs(h,{onSubmit:i,children:[t.jsx(l.Header,{closeButton:!0,children:t.jsx(l.Title,{children:"Add Client"})}),t.jsx(l.Body,{children:t.jsx(g,{className:"mb-3",children:t.jsx("div",{children:t.jsxs(h.Group,{children:[t.jsx(h.Control,{placeholder:"Enter Client Name",name:"client_name",onChange:c,isValid:!!f.client_name&&!_.client_name,isInvalid:!!_.client_name}),t.jsx(P,{name:"client_name",component:"div",className:"text-danger"})]})})})}),t.jsxs(l.Footer,{children:[t.jsx(m,{variant:"secondary",onClick:e.close,children:"Cancel"}),t.jsx(m,{type:"submit",className:"btn-color",variant:"primary",onClick:()=>setShowConfirm(!0),children:"Save"})]})]})})})})},xe=()=>{const[e,n]=u.useState(!1),[a,s]=u.useState(""),[r,d]=u.useState(!1),[C,i]=u.useState([]),[c,f]=u.useState([]),_=()=>n(!1),M=()=>d(!1);j(E);const b=y(),T=j(J),p=N.debounce(()=>{b(G())},300),I=N.debounce(()=>{b(w())},300);u.useEffect(()=>(b(w($)),p(),()=>{p.cancel()}),[]);const $=o=>{o&&x.error(o==null?void 0:o.error,{position:"bottom-right"})},F="Client",z=o=>{s(o),n(!0),f([{client_id:o.client_id}]),i([{client_name:o.client_name,status:o.is_active}])},v=()=>{I()};return t.jsxs("div",{className:"client",children:[t.jsx(m,{className:"btn-color",onClick:()=>d(!0),children:"Add Client"}),t.jsx(g,{className:"mb-4"}),t.jsx(V,{columns:Z,data:T,filterItems:q,handleRowClick:z}),t.jsx(oe,{show:r,close:M,refetchClientData:v}),t.jsx(le,{show:e,close:_,modalName:F,clientState:C,idState:c,refetchClientData:v})]})};export{xe as default};
