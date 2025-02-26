import{s as v,i as F,b as R}from"./countdown-Br4p3XrO.js";async function S(){const{data:y,error:r}=await v.from("legacy_competitions").select("id, name, date, venue, category, more_info_link").eq("status","upcoming").order("date",{ascending:!0});if(r){console.error("Error fetching upcoming competitions:",r);return}const i=document.getElementById("upcoming-competitions-body");i.innerHTML="",y.forEach(e=>{const n=document.createElement("tr"),s=document.createElement("td");s.textContent=new Date(e.date).toLocaleDateString(),n.appendChild(s);const l=document.createElement("td");l.textContent=e.name,n.appendChild(l);const p=document.createElement("td"),t=document.createElement("span");t.classList.add("category-badge"),e.category==="speed"?(t.classList.add("category-speed"),t.textContent="Speed"):e.category==="flair"?(t.classList.add("category-flair"),t.textContent="Flair"):e.category==="traditional"||e.category==="legacy"?(t.classList.add("category-traditional"),t.textContent="Traditional"):t.textContent=e.category,p.appendChild(t),n.appendChild(p);const m=document.createElement("td");m.textContent=e.venue,n.appendChild(m);const c=document.createElement("td");if(e.more_info_link){const a=document.createElement("a");a.href=e.more_info_link,a.target="_blank",a.rel="noopener noreferrer",a.textContent="see more",c.appendChild(a)}else c.textContent="N/A";n.appendChild(c),i.appendChild(n)})}async function B(){let{data:y,error:r}=await v.from("legacy_competitions").select(`
            id,
            name,
            date,
            venue,
            category,
            status,
            legacy_results (
              placement,
              post_competition_rating,
              pre_competition_rating,
              bartender:bartenders ( full_name )
            )
          `).eq("status","approved").order("date",{ascending:!1});if(r){console.error("Error fetching past competitions:",r);return}const i=document.getElementById("past-competitions-body");i.innerHTML="",y.forEach(e=>{const n=document.createElement("tr"),s=document.createElement("td");s.textContent=new Date(e.date).toLocaleDateString(),n.appendChild(s);const l=document.createElement("td");l.textContent=e.name,n.appendChild(l);const p=document.createElement("td"),t=document.createElement("span");t.classList.add("category-badge"),e.category==="speed"?(t.classList.add("category-speed"),t.textContent="Speed"):e.category==="flair"?(t.classList.add("category-flair"),t.textContent="Flair"):e.category==="traditional"||e.category==="legacy"?(t.classList.add("category-traditional"),t.textContent="Traditional"):t.textContent=e.category,p.appendChild(t),n.appendChild(p);const m=document.createElement("td");m.textContent=e.venue,n.appendChild(m);const c=document.createElement("td"),a=document.createElement("button");a.textContent="▼",a.style.cursor="pointer",c.appendChild(a),n.appendChild(c);const C=document.createElement("tr");C.classList.add("hidden");const f=document.createElement("td");f.colSpan=5;const u=document.createElement("table");u.style.width="100%",u.style.marginTop="0.5rem";const x=document.createElement("thead");x.innerHTML=`
            <tr>
              <th style="width: 10%">Placement</th>
              <th style="width: 40%">Bartender</th>
              <th style="width: 25%">Rating After</th>
              <th style="width: 25%">Change</th>
            </tr>
          `,u.appendChild(x);const E=document.createElement("tbody");if(e.legacy_results&&e.legacy_results.length>0)e.legacy_results.forEach(o=>{var w;const d=document.createElement("tr"),T=document.createElement("td");T.textContent=o.placement,d.appendChild(T);const b=document.createElement("td");b.textContent=((w=o.bartender)==null?void 0:w.full_name)||"Unknown Bartender",d.appendChild(b);const _=document.createElement("td"),g=o.post_competition_rating??"?";_.textContent=g.toFixed?g.toFixed(1):g,d.appendChild(_);const L=document.createElement("td"),k=o.pre_competition_rating??g,h=g-k,D=h>=0?"+":"";L.textContent=`${D}${h.toFixed?h.toFixed(1):h}`,d.appendChild(L),E.appendChild(d)});else{const o=document.createElement("tr"),d=document.createElement("td");d.colSpan=4,d.textContent="No results found.",o.appendChild(d),E.appendChild(o)}u.appendChild(E),f.appendChild(u),C.appendChild(f),a.addEventListener("click",()=>{C.classList.toggle("hidden")}),i.appendChild(n),i.appendChild(C)})}document.addEventListener("DOMContentLoaded",async()=>{await S(),await B()});document.addEventListener("DOMContentLoaded",()=>{F(),R()});
