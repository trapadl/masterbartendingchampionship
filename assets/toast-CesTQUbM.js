let e;function c(){return e||(e=document.createElement("div"),e.className="fixed top-4 right-4 z-[200] flex flex-col gap-2",document.body.appendChild(e)),e}function s(t,n="info",r=3e3){const a=c(),o=document.createElement("div");return o.className=`
    px-4 py-2 rounded shadow-lg text-white
    ${n==="error"?"bg-red-600":""}
    ${n==="success"?"bg-green-600":""}
    ${n==="info"?"bg-black":""}
    ${n==="warning"?"bg-yellow-600":""}
  `,o.textContent=t,a.appendChild(o),setTimeout(()=>{o.parentElement&&o.parentElement.removeChild(o),e&&e.children.length===0&&(document.body.removeChild(e),e=null)},r),o}const i=t=>s(t,"success"),l=t=>s(t,"error"),d=t=>s(t,"info");export{i as a,l as b,d as s};
