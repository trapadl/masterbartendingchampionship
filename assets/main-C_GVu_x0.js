import{s as p,l as Z,c as O,g as ee,a as te,h as ae,i as re,b as ne}from"./countdown-DXygMo4P.js";import{r as f,R as r,O as oe,c as ie,a as j}from"./OrganizerSelect-BnELILh4.js";class se{async fetchLeaderboardData(){try{const{data:t,error:a}=await p.from("legacy_results").select(`
          id,
          legacy_competition_id,
          bartender_id,
          placement,
          points,
          status,
          competition_category,
          legacy_competitions (
            id,
            name,
            date,
            category
          )
        `).eq("status","approved");if(a)throw a;const{data:o,error:s}=await p.from("bartenders").select(`
          id, 
          full_name,
          rating,
          rating_rd,
          rating_volatility,
          ranking,
          speed_rating,
          speed_rd,
          speed_volatility,
          speed_ranking,
          traditional_rating,
          traditional_rd,
          traditional_volatility,
          traditional_ranking,
          flair_rating,
          flair_rd,
          flair_volatility,
          flair_ranking
        `).eq("is_approved",!0).not("is_archived","eq",!0);if(s)throw s;const i={legacy:new Set,speed:new Set,traditional:new Set,flair:new Set};return t.forEach(n=>{var w;if(!n.bartender_id)return;let d=n.competition_category||"legacy";!n.competition_category&&((w=n.legacy_competitions)!=null&&w.category)&&(d=n.legacy_competitions.category),i[d]?i[d].add(n.bartender_id):i.legacy.add(n.bartender_id)}),{legacy:o.filter(n=>i.legacy.has(n.id)&&n.rating!=null).sort((n,d)=>(d.rating||0)-(n.rating||0)).map(n=>({id:n.id,name:n.full_name,rating:n.rating,rating_rd:n.rating_rd,points:Math.round(n.rating||0),img:'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>'})),speed:o.filter(n=>i.speed.has(n.id)&&n.speed_rating!=null).sort((n,d)=>(d.speed_rating||0)-(n.speed_rating||0)).map(n=>({id:n.id,name:n.full_name,rating:n.speed_rating,rating_rd:n.speed_rd,points:Math.round(n.speed_rating||0),img:'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>'})),traditional:o.filter(n=>i.traditional.has(n.id)&&n.traditional_rating!=null).sort((n,d)=>(d.traditional_rating||0)-(n.traditional_rating||0)).map(n=>({id:n.id,name:n.full_name,rating:n.traditional_rating,rating_rd:n.traditional_rd,points:Math.round(n.traditional_rating||0),img:'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>'})),flair:o.filter(n=>i.flair.has(n.id)&&n.flair_rating!=null).sort((n,d)=>(d.flair_rating||0)-(n.flair_rating||0)).map(n=>({id:n.id,name:n.full_name,rating:n.flair_rating,rating_rd:n.flair_rd,points:Math.round(n.flair_rating||0),img:'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>'}))}}catch(t){return Z(t),{legacy:[],traditional:[],flair:[],speed:[]}}}}const le=new se,ce='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>';function z({data:e,type:t,filter:a="total",page:o=0}){const s=E=>t==="legacy"?Math.round(E.rating):a==="total"?E.points:E.points12mo,i=t==="legacy"?"Rating":"Points",n=E=>E%2===0?"even-row":"odd-row",d=10,w=o*d,_=e.slice(w,w+d),c=e.length>w+d,g=o>0,h=_.map((E,y)=>`
    <tr class="${n(y)}">
      <td>${w+y+1}</td>
      <td>
        <div class="profile-pic" onclick="window.openProfile('${t}', ${w+y})">
          ${ce}
        </div>
      </td>
      <td>
        <span class="cursor-pointer hover:text-blue-400" onclick="window.showCompetitionHistory('${E.id}', '${E.name}')">${E.name}</span>
      </td>
      <td>${s(E)}</td>
    </tr>
  `).join("");let v="";if(c||g){const E=[];g&&(E.push(`
        <span class="pagination-button" onclick="window.loadSpecificPage('${t}', 0, '${a}')">
          Top 10
        </span>
      `),E.push(`
        <span class="pagination-button" onclick="window.loadSpecificPage('${t}', ${o-1}, '${a}')">
          Previous 10
        </span>
      `)),c&&E.push(`
        <span class="pagination-button" onclick="window.loadSpecificPage('${t}', ${o+1}, '${a}')">
          Next 10
        </span>
      `),v=`
      <tr class="pagination-row">
        <td colspan="4" class="text-center">
          <div class="pagination-controls">
            ${E.join("")}
          </div>
        </td>
      </tr>
    `}return`
    <table class="leaderboard-table" data-type="${t}" data-page="${o}" data-filter="${a}">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Profile</th>
          <th>Name</th>
          <th>${i}</th>
        </tr>
      </thead>
      <tbody>
        ${h}
        ${v}
      </tbody>
    </table>
  `}const de=()=>`
  <div class="auth-prompt p-6 text-center">
    <h3 class="text-xl text-white mb-4">Sign in Required</h3>
    <p class="text-gray-300 mb-6">Please sign in or create an account to access this feature.</p>
    <a href="/masterbartendingchampionship/enter" class="inline-block px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
      Sign In / Sign Up
    </a>
  </div>
`,me=e=>`
  <div class="p-6">
    <h3 class="text-xl text-white mb-4">Pending Profile Claim</h3>
    <p class="text-gray-300 mb-6">Your profile claim is currently under review.</p>
    <div class="bg-yellow-500/20 border border-yellow-400 rounded p-4 mb-6 text-yellow-200">
      <p>Please note that administrator approval is required before your claim is processed.</p>
    </div>
    <button id="cancel-claim" class="w-full py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors">
      Cancel Claim
    </button>
  </div>
`,I=O("BartenderSelect"),V=({value:e,onSelect:t,placeholder:a="Select a bartender",initialLabel:o="",excludeIds:s=[]})=>{const[i,n]=f.useState(o),[d,w]=f.useState(!1),[_,c]=f.useState([]),[g,h]=f.useState(!1),[v,E]=f.useState(null);f.useEffect(()=>{if(!i.trim()){c([]);return}const x=setTimeout(async()=>{h(!0);try{let C=p.from("bartenders").select("id, full_name, is_approved").ilike("full_name",`%${i}%`).is("is_archived",!1);s.length>0&&(C=C.not("id","in",`(${s.join(",")})`));const{data:P,error:q}=await C.limit(5);if(q)throw q;c(P||[])}catch(C){I.error("Failed to load bartenders:",C),E("Failed to load bartenders")}finally{h(!1)}},300);return()=>clearTimeout(x)},[i,s.join(",")]);const y=u=>{n(u.full_name),w(!1),t(u)},m=async()=>{try{const{data:{user:u}}=await p.auth.getUser();if(!u)throw new Error("Please sign in to add a new bartender");const{data:x,error:C}=await p.from("bartenders").insert({full_name:i.trim(),bar:"",rating:1500,rating_rd:350,rating_volatility:.06,is_profile_claimed:!1,is_approved:!1}).select().single();if(C)throw C;I.info("Created new bartender:",{id:x.id,name:x.full_name}),alert("New bartender created! Note: Bartenders need to be approved by an administrator before appearing on leaderboards."),n(x.full_name),w(!1),t(x)}catch(u){I.error("Error adding new bartender:",u),E(u.message)}};return r.createElement("div",{className:"relative"},r.createElement("input",{type:"text",value:i,onChange:u=>{n(u.target.value),w(!0)},onClick:()=>w(!0),placeholder:a,className:"w-full p-2 bg-gray-700 text-white rounded border border-gray-600"}),d&&(i.trim()||g||v)&&r.createElement("div",{className:"absolute z-50 w-full mt-1 bg-gray-800 rounded-md border border-gray-700 shadow-lg"},g&&r.createElement("div",{className:"p-2 text-gray-300 text-center"},"Loading..."),v&&r.createElement("div",{className:"p-2 text-red-400"},v),!g&&!v&&_.length>0&&r.createElement("div",null,_.map(u=>r.createElement("div",{key:u.id,className:"p-2 hover:bg-gray-700 cursor-pointer text-white",onClick:()=>y(u)},r.createElement("div",{className:"flex justify-between items-center"},r.createElement("span",null,u.full_name),u.is_approved===!1&&r.createElement("span",{className:"text-xs text-yellow-400 px-2 py-1 bg-gray-800 rounded"},"Pending")))),r.createElement("div",{className:"border-t border-gray-700 mt-2"})),i.trim()&&r.createElement("div",{className:"p-2 hover:bg-gray-700 cursor-pointer text-white flex justify-between items-center",onClick:m},r.createElement("span",null,'+ Add "',i.trim(),'" as new bartender'),r.createElement("span",{className:"text-gray-400"},"→")),!g&&!v&&i.trim()&&_.length===0&&!v&&r.createElement("div",{className:"p-2 text-gray-300 text-center"},"No matching bartenders found")))},ue=({onSuccess:e,onError:t})=>{const[a,o]=f.useState(null),[s,i]=f.useState(!1),[n,d]=f.useState(null),[w,_]=f.useState(!1),[c,g]=f.useState(null);f.useEffect(()=>{h()},[]);const h=async()=>{try{const{data:{user:y}}=await p.auth.getUser();if(!y)return;const{data:m,error:u}=await p.from("bartenders").select("id").contains("users_attempting_to_claim",[y.id]).single();if(u&&u.code!=="PGRST116")throw u;m&&d(m)}catch(y){t==null||t(y.message),g(y.message)}},v=async y=>{y.preventDefault(),i(!0),g(null),_(!1);try{const{data:{user:m}}=await p.auth.getUser();if(!m)throw new Error("Authentication required");if(!a)throw new Error("Please select a bartender profile");const{data:u,error:x}=await p.from("bartenders").select("is_profile_claimed, users_attempting_to_claim").eq("id",a.id).single();if(x)throw x;if(u!=null&&u.is_profile_claimed)throw new Error("This profile has already been claimed");const C=u.users_attempting_to_claim||[];if(!C.includes(m.id)){const{error:P}=await p.from("bartenders").update({users_attempting_to_claim:[...C,m.id]}).eq("id",a.id);if(P)throw P}_(!0),setTimeout(()=>{e==null||e()},2e3)}catch(m){g(m.message),t==null||t(m.message)}finally{i(!1)}},E=async()=>{if(n){i(!0);try{const{data:{user:y}}=await p.auth.getUser();if(!y)throw new Error("Authentication required");const{data:m}=await p.from("bartenders").select("users_attempting_to_claim").eq("id",n.id).single(),u=(m.users_attempting_to_claim||[]).filter(C=>C!==y.id),{error:x}=await p.from("bartenders").update({users_attempting_to_claim:u}).eq("id",n.id);if(x)throw x;d(null),e==null||e({cancelled:!0})}catch(y){g(y.message),t==null||t(y.message)}finally{i(!1)}}};return n?r.createElement("div",{className:"p-6"},r.createElement("h3",{className:"text-xl text-white mb-4"},"Pending Profile Claim"),r.createElement("p",{className:"text-gray-300 mb-6"},"Your profile claim is currently under review by an administrator."),r.createElement("button",{onClick:E,disabled:s,className:"w-full py-2 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},s?"Processing...":"Cancel Claim")):r.createElement("form",{onSubmit:v,className:"p-6",method:"POST"},r.createElement("h3",{className:"text-xl text-white mb-6"},"Claim Your Profile"),c&&r.createElement("div",{className:"error-message mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-200"},c),w&&r.createElement("div",{className:"success-message mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-200"},"Profile claim submitted successfully! Your claim will be reviewed by an administrator."),r.createElement("div",{className:"mb-6"},r.createElement("label",{className:"block text-white mb-2"},"Select Your Profile"),r.createElement(V,{onSelect:o,placeholder:"Search for your profile",unclaimedOnly:!0})),r.createElement("button",{type:"submit",disabled:s||!a||w,className:"w-full py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},s?"Submitting...":"Submit Claim"))},ge=({onSelect:e,placeholder:t="Search for competition"})=>{const[a,o]=f.useState(""),[s,i]=f.useState(!1),[n,d]=f.useState([]),[w,_]=f.useState(!1),[c,g]=f.useState(null);f.useEffect(()=>{if(!a.trim()){d([]);return}const E=setTimeout(async()=>{_(!0);try{const{data:y,error:m}=await p.from("legacy_competitions").select("id, name, date, venue").ilike("name",`%${a}%`).order("date",{ascending:!1}).limit(5);if(m)throw m;d(y||[])}catch(y){console.error("Error fetching competitions:",y),g("Failed to load competitions")}finally{_(!1)}},300);return()=>clearTimeout(E)},[a]);const h=()=>{e({name:a.trim(),isNew:!0}),o(a.trim()),i(!1)};return r.createElement("div",{className:"relative"},r.createElement("input",{type:"text",value:a,onChange:v=>{o(v.target.value),i(!0)},onClick:()=>i(!0),placeholder:t,className:"w-full p-2 bg-gray-700 text-white rounded border border-gray-600"}),s&&a.trim()&&r.createElement("div",{className:"absolute z-50 w-full mt-1 bg-gray-800 rounded-md border border-gray-700 shadow-lg max-h-60 overflow-y-auto"},w&&r.createElement("div",{className:"p-2 text-gray-300 text-center"},"Loading..."),c&&r.createElement("div",{className:"p-2 text-red-400"},c),!w&&!c&&n.length>0&&r.createElement("div",null,n.map(v=>r.createElement("div",{key:v.id,className:"p-2 hover:bg-gray-700 cursor-pointer text-white",onClick:()=>{e(v),o(v.name),i(!1)}},r.createElement("div",null,v.name),r.createElement("div",{className:"text-gray-400 text-sm"},new Date(v.date).toLocaleDateString()," - ",v.venue),r.createElement("hr",{className:"border-t border-gray-700 mt-2"}))),r.createElement("div",{className:"border-t border-gray-700 mt-2"})),r.createElement("div",{className:"p-2 hover:bg-gray-700 cursor-pointer text-white flex justify-between items-center",onClick:h},r.createElement("span",null,'+ Add "',a.trim(),'" as new competition'),r.createElement("span",{className:"text-gray-400"},"→"))))},A=O("VenueSelect"),pe=({value:e,onSelect:t,placeholder:a="Select a venue",initialLabel:o=""})=>{const[s,i]=f.useState(o),[n,d]=f.useState(!1),[w,_]=f.useState([]),[c,g]=f.useState(!1),[h,v]=f.useState(null);f.useEffect(()=>{if(!s.trim()){_([]);return}const u=setTimeout(async()=>{g(!0);try{const{data:x,error:C}=await p.from("venues").select("id, name, city, country").ilike("name",`%${s}%`).is("is_archived",!1).order("name").limit(5);if(C)throw C;_(x||[])}catch(x){A.error("Failed to load venues:",x),v("Failed to load venues")}finally{g(!1)}},300);return()=>clearTimeout(u)},[s]);const E=m=>{i(m.name),d(!1),t(m)},y=async()=>{try{const{data:{user:m}}=await p.auth.getUser();if(!m)throw new Error("Please sign in to add a new venue");const{data:u,error:x}=await p.from("venues").insert({name:s.trim(),created_by:m.id}).select().single();if(x)throw x;A.info("Created new venue:",{id:u.id,name:u.name}),i(u.name),d(!1),t(u)}catch(m){A.error("Error adding new venue:",m),v(m.message)}};return r.createElement("div",{className:"relative"},r.createElement("input",{type:"text",value:s,onChange:m=>{i(m.target.value),d(!0)},onClick:()=>d(!0),placeholder:a,className:"w-full p-2 bg-gray-700 text-white rounded border border-gray-600"}),n&&(s.trim()||c||h)&&r.createElement("div",{className:"absolute z-50 w-full mt-1 bg-gray-800 rounded-md border border-gray-700 shadow-lg"},c&&r.createElement("div",{className:"p-2 text-gray-300 text-center"},"Loading..."),h&&r.createElement("div",{className:"p-2 text-red-400"},h),!c&&!h&&w.length>0&&r.createElement("div",null,w.map(m=>r.createElement("div",{key:m.id,className:"p-2 hover:bg-gray-700 cursor-pointer text-white",onClick:()=>E(m)},r.createElement("div",null,m.name),m.city&&m.country&&r.createElement("div",{className:"text-gray-400 text-sm"},m.city,", ",m.country))),r.createElement("div",{className:"border-t border-gray-700 mt-2"})),s.trim()&&r.createElement("div",{className:"p-2 hover:bg-gray-700 cursor-pointer text-white flex justify-between items-center",onClick:y},r.createElement("span",null,'+ Add "',s.trim(),'" as new venue'),r.createElement("span",{className:"text-gray-400"},"→")),!c&&!h&&s.trim()&&w.length===0&&!h&&r.createElement("div",{className:"p-2 text-gray-300 text-center"},"No matching venues found")))},fe=[{id:"state final",label:"State Final"},{id:"national final",label:"National Final"},{id:"global final",label:"Global Final"}],be=({onSuccess:e,onError:t})=>{const[a,o]=f.useState(!1),[s,i]=f.useState(""),[n,d]=f.useState([{id:"",position:""}]),[w,_]=f.useState(!1),[c,g]=f.useState({date:"",venue_id:"",venue_name:"",organizer_id:"",organizer_name:"",source_url:"",category:"legacy",country:"",round:"state final"}),[h,v]=f.useState(null),[E,y]=f.useState(!1),m=()=>{const{organizer_name:l,date:b,round:k,country:S}=c,$=(h==null?void 0:h.name)||"";if(!b||!l||!$||!k)return null;const N=new Date(b).getFullYear();return`${l} ${$} ${N} ${k} ${S||""}`.trim()},u=l=>{v(l),_(!(l!=null&&l.id)),l!=null&&l.id&&g(b=>({...b,date:l.date,venue_id:l.venue_id,venue_name:l.venue,organizer_id:l.organizer,category:l.category||"legacy",country:l.country||""}))},x=async l=>{try{const{data:b}=await p.from("organisers").select("organisation_name").eq("id",l.id).single();g(k=>({...k,organizer_id:l.id,organizer_name:(b==null?void 0:b.organisation_name)||""}))}catch(b){console.error("Error fetching organizer details:",b),i("Error fetching organizer details")}},C=l=>{g(b=>({...b,venue_id:l.id,venue_name:l.name}))},P=l=>({1:25,2:15,3:15,4:12,5:10,6:8,7:6,8:4,9:2,10:1})[l]||0,q=async l=>{l.preventDefault(),o(!0),i(""),y(!1);try{const{data:{user:b},error:k}=await p.auth.getUser();if(k)throw new Error("Authentication error");if(!b)throw new Error("Please sign in to submit results");if(w){if(!c.date)throw new Error("Date is required");if(!c.organizer_id)throw new Error("Organizer is required");if(!c.venue_id)throw new Error("Venue is required");if(!(h!=null&&h.name))throw new Error("Competition name is required");if(!c.round)throw new Error("Competition round is required")}let S;if(h!=null&&h.id)S=h.id;else{const N=m();if(!N)throw new Error("Unable to generate competition name - missing required fields");const{data:B,error:R}=await p.from("legacy_competitions").insert({name:N,date:c.date,venue:c.venue_name,venue_id:c.venue_id,organizer:c.organizer_id,category:c.category,country:c.country||null,created_by:b.id,status:"pending"}).select().single();if(R)throw R;S=B.id}const $=n.filter(N=>N.id&&N.position);if($.length===0)throw new Error("At least one competitor with position is required");for(const N of $){const{error:B}=await p.from("legacy_results").insert({legacy_competition_id:S,bartender_id:N.id,placement:parseInt(N.position,10),points:P(parseInt(N.position,10)),status:"pending",created_by:b.id,competition_category:c.category});if(B)throw B}if(c.source_url){const{error:N}=await p.from("sources").insert({legacy_competition_id:S,url:c.source_url,created_by:b.id});if(N)throw N}y(!0),setTimeout(()=>{W(),e==null||e()},2e3)}catch(b){console.error("Submission error:",b),i(b.message),t==null||t(b.message)}finally{o(!1)}},W=()=>{g({date:"",venue_id:"",venue_name:"",organizer_id:"",organizer_name:"",source_url:"",category:"legacy",country:"",round:"state final"}),v(null),d([{id:"",position:""}]),_(!1),y(!1)},J=()=>{d(l=>[...l,{id:"",position:""}])},X=l=>{d(b=>b.filter((k,S)=>S!==l))};return r.createElement("div",{className:"p-6 bg-gray-800 rounded-lg"},r.createElement("h3",{className:"text-xl text-white mb-6"},"Submit Competition Result"),s&&r.createElement("div",{className:"error-message mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-200"},s),E&&r.createElement("div",{className:"success-message mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-200"},"Competition result submitted successfully! Your submission will be reviewed by an administrator."),r.createElement("form",{onSubmit:q,className:"space-y-6",method:"POST"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"block text-white mb-2"},"Competition *"),r.createElement(ge,{onSelect:u,placeholder:"Search or add competition"})),w&&r.createElement(r.Fragment,null,r.createElement("div",{className:"form-group"},r.createElement("label",{className:"block text-white mb-2"},"Organizer *"),r.createElement(oe,{onSelect:x,placeholder:"Select organizer"})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"block text-white mb-2"},"Venue *"),r.createElement(pe,{onSelect:C,placeholder:"Select or add venue"})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"block text-white mb-2"},"Round *"),r.createElement("select",{value:c.round,onChange:l=>g({...c,round:l.target.value}),className:"w-full p-2 bg-gray-700 text-white rounded border border-gray-600",required:!0},fe.map(l=>r.createElement("option",{key:l.id,value:l.id},l.label)))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"block text-white mb-2"},"Category *"),r.createElement("select",{value:c.category,onChange:l=>g({...c,category:l.target.value}),className:"w-full p-2 bg-gray-700 text-white rounded border border-gray-600",required:!0},r.createElement("option",{value:"legacy"},"Legacy Competition"),r.createElement("option",{value:"speed"},"Speed"),r.createElement("option",{value:"flair"},"Flair"),r.createElement("option",{value:"traditional"},"Traditional"))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"block text-white mb-2"},"Country"),r.createElement("select",{value:c.country,onChange:l=>g({...c,country:l.target.value}),className:"w-full p-2 bg-gray-700 text-white rounded border border-gray-600"},r.createElement("option",{value:""},"Select country"),ie.map(l=>r.createElement("option",{key:l,value:l},l)))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"block text-white mb-2"},"Date *"),r.createElement("input",{type:"date",value:c.date,onChange:l=>g({...c,date:l.target.value}),className:"w-full p-2 bg-gray-700 text-white rounded border border-gray-600",required:!0}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"block text-white mb-2"},"Source URL *"),r.createElement("input",{type:"url",value:c.source_url,onChange:l=>g({...c,source_url:l.target.value}),className:"w-full p-2 bg-gray-700 text-white rounded border border-gray-600",required:!0,placeholder:"Link to competition results"})),r.createElement("div",{className:"competitors-section mt-8"},r.createElement("h3",{className:"text-lg text-white mb-4"},"Competitors *"),n.map((l,b)=>r.createElement("div",{key:b,className:"competitor-entry mb-4 p-4 bg-gray-700 rounded"},r.createElement("div",{className:"mb-3"},r.createElement("label",{className:"block text-white mb-2"},"Competitor Name *"),r.createElement(V,{onSelect:k=>{const S=[...n];S[b].id=k.id,d(S)},placeholder:"Search for competitor"})),r.createElement("div",{className:"mb-3"},r.createElement("label",{className:"block text-white mb-2"},"Position *"),r.createElement("input",{type:"number",value:l.position,onChange:k=>{const S=[...n];S[b].position=k.target.value,d(S)},className:"w-full p-2 bg-gray-600 text-white rounded border border-gray-500",required:!0,min:"1"})),b>0&&r.createElement("button",{type:"button",onClick:()=>X(b),className:"text-red-400 hover:text-red-300 px-4 py-2 border border-red-500 rounded hover:bg-red-500/20 transition-colors"},"Remove Competitor"))),r.createElement("button",{type:"button",onClick:J,className:"w-full p-2 border border-gray-400 text-gray-300 rounded hover:bg-gray-700 transition-colors"},"Add Competitor")),r.createElement("button",{type:"submit",disabled:a,className:"w-full p-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},a?"Submitting...":"Submit Result")))},he=`
  <style>
    .modal-content {
      max-height: 90vh;
      width: 90%;
      max-width: 500px;
      overflow-y: auto;
      background: var(--color-background);
      padding: var(--spacing-lg);
      border-radius: 8px;
    }

    .bartender-select-container {
      width: 100%;
      max-width: 400px;
    }

    .organizer-select-container {
      width: 100%;
      max-width: 400px;
    }

    .select-dropdown {
      max-height: 300px;
      overflow-y: auto;
      background: var(--color-background) !important;
    }

    .select-option {
      color: var(--color-text) !important;
      background: var(--color-background) !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .select-option:hover {
      background: rgba(255, 255, 255, 0.1) !important;
    }

    .auth-prompt {
      text-align: center;
      padding: var(--spacing-xl);
    }

    .auth-prompt h3 {
      margin-bottom: var(--spacing-md);
      color: var(--color-text);
    }

    .auth-prompt p {
      margin-bottom: var(--spacing-lg);
      color: var(--color-text-muted);
    }

    .auth-prompt-button {
      display: inline-block;
      padding: var(--spacing-sm) var(--spacing-lg);
      background: var(--color-text);
      color: var(--color-background);
      border-radius: 4px;
      text-decoration: none;
      transition: opacity 0.2s;
    }

    .auth-prompt-button:hover {
      opacity: 0.9;
    }
  </style>
`;function ye(e){if(!e)return;const t=e.closest(".profile-modal");t&&(e.addEventListener("click",a=>{a.preventDefault(),a.stopPropagation(),M(t)}),t.addEventListener("click",a=>{a.target===t&&M(t)}),document.addEventListener("keydown",a=>{a.key==="Escape"&&t.style.display==="flex"&&M(t)}))}function M(e){e&&(e.style.opacity="0",setTimeout(()=>{e.style.display="none",e.style.opacity="1";const t=document.getElementById(e.dataset.previousFocus);t&&t.focus(),e.dispatchEvent(new CustomEvent("modalclose"))},300))}function we(e){var a;if(!e)return;e.dataset.previousFocus=((a=document.activeElement)==null?void 0:a.id)||"",e.style.display="flex",e.style.opacity="0",e.offsetHeight,requestAnimationFrame(()=>{e.style.opacity="1"});const t=e.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t&&t.focus()}const ve={initializeFocusTrap(e){const t=e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=t[0],o=t[t.length-1];e.addEventListener("keydown",s=>{s.key==="Tab"&&(s.shiftKey?document.activeElement===a&&(s.preventDefault(),o.focus()):document.activeElement===o&&(s.preventDefault(),a.focus()))})},show:we,close:M};window.modalHelpers=ve;let U=!1;function Ee(){return`
    ${he}
    <div class="modal-wrapper">
      <!-- Profile Modal -->
      <div id="profile-modal" class="profile-modal" style="display: none;" tabindex="-1">
        <div class="modal-content">
          <button class="modal-close" type="button">&times;</button>
          <h2>Competitor Profile</h2>
          <div class="profile-details">
            <p><strong>Name:</strong> <span id="modal-name"></span></p>
            <p><strong>Total Points:</strong> <span id="modal-points"></span></p>
            <p><strong>Bio:</strong> <span id="modal-bio"></span></p>
          </div>
        </div>
      </div>

      <!-- Claim Profile Modal -->
      <div id="claim-profile-modal" class="profile-modal" style="display: none;" tabindex="-1">
        <div id="claim" class="modal-content">
          <button class="modal-close" type="button">&times;</button>
          <div id="claim-profile-content"></div>
        </div>
      </div>

      <!-- Submit Result Modal -->
      <div id="submit-result-modal" class="profile-modal" style="display: none;" tabindex="-1">
        <div class="modal-content">
          <button class="modal-close" type="button">&times;</button>
          <div id="submit-result-content"></div>
        </div>
      </div>
    </div>
  `}async function _e(){if(U)return;const e=document.querySelector(".modal-wrapper");if(!e){console.warn("Modal wrapper not found, skipping initialization");return}const t=e.querySelectorAll(".modal-close");t.length>0&&t.forEach(a=>ye(a)),window.openProfile=(a,o)=>{Se(document.getElementById("profile-modal"),a,o)},document.querySelectorAll(".action-button").forEach(a=>{a.addEventListener("click",async o=>{var _,c;o.preventDefault();const s=`${a.dataset.modal}-modal`,i=document.getElementById(s);if(!i){console.warn(`Modal ${s} not found`);return}const n=i.querySelector(`#${a.dataset.modal}-content`);if(!n){console.warn(`Content div not found in modal ${s}`);return}let d;try{d=await p.auth.getSession()}catch(g){if((_=g.message)!=null&&_.includes("storage is not allowed")){const{data:h}=await p.auth.getUser();d={data:{session:h?{user:h}:null}}}else throw g}!!((c=d==null?void 0:d.data)!=null&&c.session)?(n._root||(n._root=j(n)),a.dataset.modal==="claim-profile"?xe(n):a.dataset.modal==="submit-result"&&n._root.render(r.createElement(be,{onSuccess:()=>{i.style.display="none"},onError:g=>{console.error("Error submitting result:",g)}}))):n.innerHTML=de(),i.style.display="flex",i.focus()})}),U=!0}async function xe(e){try{const{data:{user:t}}=await p.auth.getUser();if(!t)throw new Error("Authentication required");const{data:a}=await p.from("submissions").select("id, status").eq("user_id",t.id).eq("status","pending").like("content",'%"type":"profile_claim"%'),o=a==null?void 0:a[0];o?(e.innerHTML=me(o),Ce()):(e._root||(e._root=j(e)),e._root.render(r.createElement(ue,{onSuccess:()=>{const s=e.closest(".profile-modal");s&&(s.style.display="none")},onError:s=>{console.error("Error submitting claim:",s)}})))}catch(t){console.error("Error handling claim modal:",t),e.innerHTML=`
      <div class="error-message">
        An error occurred. Please try again later.
      </div>
    `}}function Ce(){const e=document.getElementById("cancel-claim");e&&e.addEventListener("click",async()=>{try{const{data:{user:t}}=await p.auth.getUser();if(!t)return;const{data:a}=await p.from("submissions").select("*").eq("user_id",t.id).eq("status","pending").single();if(a){const{error:o}=await p.from("submissions").update({status:"cancelled"}).eq("id",a.id);if(o)throw o;const s=document.getElementById("claim-profile-modal");s&&(s.style.display="none");const i=document.createElement("div");i.className="success-message mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-200",i.textContent="Claim cancelled successfully",document.body.appendChild(i),setTimeout(()=>{i.remove(),location.reload()},3e3)}}catch(t){console.error("Error cancelling claim:",t),alert(t.message)}})}const Y={initializeFocusTrap(e){const t=e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=t[0],o=t[t.length-1];e.addEventListener("keydown",s=>{s.key==="Tab"&&(s.shiftKey?document.activeElement===a&&(s.preventDefault(),o.focus()):document.activeElement===o&&(s.preventDefault(),a.focus()))})},show(e){var a;if(!e)return;e.dataset.previousFocus=((a=document.activeElement)==null?void 0:a.id)||"",e.style.display="flex",e.style.opacity="0",e.offsetHeight,requestAnimationFrame(()=>{e.style.opacity="1"});const t=e.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t&&t.focus()},close(e){e&&(e.style.opacity="0",setTimeout(()=>{e.style.display="none",e.style.opacity="1";const t=document.getElementById(e.dataset.previousFocus);t&&t.focus(),e.dispatchEvent(new CustomEvent("modalclose"))},300))}};window.modalHelpers=Y;function Se(e,t,a){var s,i;const o=(i=(s=window.leaderboardData)==null?void 0:s[t])==null?void 0:i[a];o&&(document.getElementById("modal-name").textContent=o.name,document.getElementById("modal-points").textContent=o.points,document.getElementById("modal-bio").textContent=o.bio||"No bio available",Y.show(e))}let T={traditional:[],flair:[],speed:[],legacy:[]},F={traditional:0,flair:0,speed:0,legacy:0},L={traditional:"total",flair:"total",speed:"total",legacy:"total"};async function Ne(e){if(!e)return!1;const{data:t}=await p.from("bartenders").select("id").contains("users_attempting_to_claim",[e]);return(t==null?void 0:t.length)>0}async function ke(e){if(!e)return!1;const{data:t}=await p.from("bartenders").select("is_profile_claimed").eq("user_id",e).single();return(t==null?void 0:t.is_profile_claimed)||!1}async function Pe(){const e=document.querySelector(".column-right-content");if(e)try{await Le();const{data:{user:t}}=await p.auth.getUser(),a=t==null?void 0:t.id,o=await ke(a),s=await Ne(a),i=!o&&!s;e.innerHTML=await $e(i,s);const n=document.createElement("div");n.innerHTML=Ee(),document.body.appendChild(n),await Be(),await _e(),window.loadNextPage=Q,window.loadSpecificPage=D}catch(t){console.error("Error initializing leaderboards:",t),e.innerHTML='<div class="error-message">Error loading leaderboard data</div>'}}async function Le(){try{T=await le.fetchLeaderboardData()}catch(e){throw console.error("Error loading leaderboard data:",e),e}}async function $e(e,t){return`
    ${qe(e,t)}
    ${H("speed","MBC Speed Leaderboard")}
    ${H("traditional","MBC Traditional Leaderboard",!0)}
    ${H("flair","MBC Flair Leaderboard",!0)}
  `}function qe(e,t){let a="";return t?a='<button class="action-button" disabled>Claim Pending</button>':e&&(a='<button class="action-button" data-modal="claim-profile">Claim Profile</button>'),`
    <div id="legacy-section" class="leaderboard-container">
      <h2>Legacy Leaderboard</h2>
      <div class="button-container">
        <div class="filter-buttons">
          <button class="filter-button active" data-filter="total">Total Points</button>
          <button class="filter-button" data-filter="12mo">Last 12 Months</button>
        </div>
        <div class="action-buttons">
          ${a}
          <button class="action-button" data-modal="submit-result">Submit Result</button>
        </div>
      </div>
      <div class="leaderboard-content">
        ${z({data:T.legacy,type:"legacy",page:F.legacy,filter:L.legacy})}
      </div>
    </div>
  `}function H(e,t,a=!1){return`
    <div id="${e}-section" class="leaderboard-container${a?" coming-soon":""}">
      <h2>${t}</h2>
      <div class="leaderboard-content">
        ${z({data:T[e],type:e,page:F[e],filter:L[e]})}
      </div>
    </div>
  `}async function Be(){document.querySelectorAll(".filter-button").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.filter,o=t.closest(".leaderboard-container");if(o){o.querySelectorAll(".filter-button").forEach(n=>n.classList.remove("active")),t.classList.add("active");const i=o.id.replace("-section","");L[i]=a,F[i]=0,G(i,0,a)}})})}function G(e,t,a){const o=document.getElementById(`${e}-section`);if(!o)return;const s=o.querySelector(".leaderboard-content");if(!s)return;const i=z({data:T[e],type:e,filter:a,page:t});s.innerHTML=i}function Q(e,t){D(e,t,L[e])}function D(e,t,a){if(F[e]=t,a){L[e]=a;const s=document.getElementById(`${e}-section`);s&&s.querySelectorAll(".filter-button").forEach(n=>{n.dataset.filter===a?n.classList.add("active"):n.classList.remove("active")})}G(e,t,L[e]);const o=document.getElementById(`${e}-section`);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}function Me(){if(window.location.search&&(window.location.search.includes("password=")||window.location.search.includes("email="))){console.warn("Security: Sensitive data detected in URL, cleaning");const e=window.location.pathname;window.history.replaceState({},document.title,e)}}function Te(){document.querySelectorAll("form").forEach(t=>{t.method.toLowerCase()!=="post"&&(console.warn("Security: Form without POST method detected, fixing",t),t.setAttribute("method","POST")),t.addEventListener("submit",function(a){setTimeout(()=>{if(window.location.search){const o=window.location.pathname;window.history.replaceState({},document.title,o)}},0)},!0)})}function K(){const e=document.querySelector(".content");if(e&&!document.querySelector(".large-header")){const t=document.createElement("header");t.className="large-header";const a=document.createElement("div");a.className="scrolling-wrapper",a.innerHTML=`
      <div class="scrolling-text">
        MASTER BARTENDING CHAMPIONSHIP&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div class="scrolling-text">
        MASTER BARTENDING CHAMPIONSHIP&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    `,t.appendChild(a);const o=document.querySelector(".small-header");o?o.after(t):e.insertBefore(t,e.firstChild),t.offsetHeight,a.style.animationPlayState="running"}}window.openProfile=function(e,t){const a=document.querySelector("#profile-modal");if(!a){console.error("Profile modal not found");return}if(!window.leaderboardData||!window.leaderboardData[e]||!window.leaderboardData[e][t]){console.error("Leaderboard data not found",{type:e,index:t});return}const o=window.leaderboardData[e][t],s=document.getElementById("modal-name"),i=document.getElementById("modal-points"),n=document.getElementById("modal-bio");s&&(s.textContent=o.name),i&&(i.textContent=e==="legacy"?Math.round(o.rating):o.points||0),n&&(n.textContent=o.bio||"No bio available"),a.classList.add("show"),a.style.display="flex"};window.loadNextPage=Q;window.loadSpecificPage=D;window.showCompetitionHistory=function(e,t){let a=document.getElementById("competition-history-modal");a||(a=document.createElement("div"),a.id="competition-history-modal",a.className="profile-modal",document.body.appendChild(a)),a.innerHTML=`
    <div class="modal-content">
      <button class="modal-close" type="button" onclick="this.closest('.profile-modal').style.display = 'none'">&times;</button>
      <h2>${t}'s Competition History</h2>
      <div id="competition-history-content" class="competition-history-content">
        <div class="loading-spinner">Loading competition history...</div>
      </div>
    </div>
  `,a.style.display="flex",Fe(e,t)};async function Fe(e,t){try{const a=await window.supabase.from("legacy_results").select(`
        placement,
        post_competition_rating,
        pre_competition_rating,
        legacy_competition_id,
        legacy_competitions (
          name,
          date
        )
      `).eq("bartender_id",e);if(a.error)throw a.error;Ie(a.data||[],e,t)}catch(a){console.error("Error fetching competition history:",a);const o=document.getElementById("competition-history-content");o&&(o.innerHTML=`
        <div class="error-message">
          Failed to load competition history. Please try again later.
        </div>
      `)}}function Ie(e,t,a){const o=document.getElementById("competition-history-content");if(!o)return;if(e.length===0){o.innerHTML='<div class="no-data">No competition history found for this bartender.</div>';return}const s=e.map(i=>{var _,c;const n=i.post_competition_rating&&i.pre_competition_rating?Math.round(i.post_competition_rating-i.pre_competition_rating):0,d=n>0?"positive-change":n<0?"negative-change":"";return`
      <tr>
        <td>${(_=i.legacy_competitions)!=null&&_.date?new Date(i.legacy_competitions.date).toLocaleDateString():"Unknown date"}</td>
        <td>${((c=i.legacy_competitions)==null?void 0:c.name)||"Unknown competition"}</td>
        <td>${i.placement||"N/A"}</td>
        <td class="${d}">
          ${n>0?"+":""}${n}
        </td>
      </tr>
    `}).join("");o.innerHTML=`
    <table class="competition-history-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Competition</th>
          <th>Placement</th>
          <th>Rating Change</th>
        </tr>
      </thead>
      <tbody>
        ${s}
      </tbody>
    </table>
  `}window.getBaseUrl=ee;window.getAbsolutePath=te;document.addEventListener("DOMContentLoaded",function(){Te(),Me(),K(),ae(),re(),Pe(),ne()});window.addEventListener("load",K);
