(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9735:function(e,r,t){Promise.resolve().then(t.bind(t,6117))},6117:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return n}});var s=t(7437),a=t(2265),o=t(3464);function n(){let[e,r]=(0,a.useState)(""),[t,n]=(0,a.useState)(""),[u,c]=(0,a.useState)(""),[i,l]=(0,a.useState)(""),d=async r=>{r.preventDefault();try{let r=await o.Z.post("https://teste.fluxodocapital.com.br/api/postusers",{nome:e,email:t});200===r.status?(l("success"),c("Usu\xe1rio criado com sucesso!")):(l("error"),c("Erro ao criar o usu\xe1rio."))}catch(e){l("error"),c("Erro ao criar o usu\xe1rio."),console.error("API Error:",e)}setTimeout(()=>{c(""),l("")},4e3)};return(0,s.jsx)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:(0,s.jsxs)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"Cadastro de Usu\xe1rio"}),(0,s.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:d,children:[(0,s.jsx)("input",{className:"border p-2 rounded w-80",type:"text",placeholder:"Nome",value:e,onChange:e=>r(e.target.value),required:!0}),(0,s.jsx)("input",{className:"border p-2 rounded w-80",type:"email",placeholder:"Email",value:t,onChange:e=>n(e.target.value),required:!0}),(0,s.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600",children:"Cadastrar"})]}),u&&(0,s.jsx)("p",{className:"text-".concat("success"===i?"green":"red","-500"),children:u})]})})}}},function(e){e.O(0,[464,971,117,744],function(){return e(e.s=9735)}),_N_E=e.O()}]);