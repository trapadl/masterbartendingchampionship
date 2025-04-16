import{r as d,u as k,b as E,a as z,j as e,d as B}from"./main-D8rAxTry.js";const o=B("EntryPage"),P=()=>{const[m,y]=d.useState("signin"),[r,h]=d.useState({email:"",password:"",fullName:"",role:"bartender",bar:"",brand:""}),{signIn:j,signUp:N,loading:l,isAuthenticated:p,authError:u}=k(),[g,i]=d.useState(""),[b,c]=d.useState(""),x=E(),f=z();d.useEffect(()=>{var s,a;if(p){const n=((a=(s=f.state)==null?void 0:s.from)==null?void 0:a.pathname)||"/";o.info(`User authenticated, redirecting to ${n}.`),x(n,{replace:!0})}},[p,x,f.state]),d.useEffect(()=>{u&&(i(u),c(""))},[u]);const t=s=>{const{name:a,value:n}=s.target;h(S=>({...S,[a]:n})),i(""),c("")},w=s=>{y(s),h(a=>({...a,email:"",password:""})),i(""),c("")},v=async s=>{s.preventDefault(),i(""),c(""),o.info("Attempting sign in via context",{email:r.email});try{await j({email:r.email,password:r.password})}catch(a){const n=a.message||"Sign in failed. Please check your credentials.";i(n),o.error("Sign in failed (handled by EntryPage)",a)}},C=async s=>{s.preventDefault(),i(""),c(""),o.info("Attempting sign up via context",{email:r.email,role:r.role});try{if(!r.fullName.trim())throw new Error("Full Name is required.");if(!r.email.trim())throw new Error("Email is required.");if(r.password.length<6)throw new Error("Password must be at least 6 characters long.");if(r.role==="bartender"&&!r.bar.trim())throw new Error("Bar name is required for bartenders.");if(r.role==="organiser"&&!r.brand.trim())throw new Error("Brand/Organisation name is required for organisers.");await N({email:r.email,password:r.password},{fullName:r.fullName,role:r.role,bar:r.role==="bartender"?r.bar:null,brand:r.role==="organiser"?r.brand:null}),o.info("Sign up successful (via context)"),c("Account created! Please check your email for verification."),window.fbq&&(window.fbq("track","CompleteRegistration",{content_name:"New MBC Signup (React)",content_category:r.role}),o.debug("FB Pixel CompleteRegistration tracked"))}catch(a){const n=a.message||"Sign up failed. Please try again.";i(n),o.error("Sign up failed (handled by EntryPage)",a)}};return e.jsxs("div",{className:"content-section max-w-lg mx-auto px-4 sm:px-8 py-8",children:[e.jsx("h1",{className:"text-3xl font-bold mb-8 text-white text-center",children:"Join MBC"}),e.jsxs("div",{className:"auth-container bg-zinc-800 p-8 rounded-lg shadow-xl",children:[e.jsxs("div",{className:"auth-tabs flex mb-8 border-b border-gray-700",children:[e.jsx("button",{className:`auth-tab px-6 py-3 flex-1 text-center cursor-pointer transition-colors ${m==="signin"?"text-white border-b-2 border-white":"text-gray-400 hover:text-gray-200"}`,onClick:()=>w("signin"),disabled:l,children:"Sign In"}),e.jsx("button",{className:`auth-tab px-6 py-3 flex-1 text-center cursor-pointer transition-colors ${m==="signup"?"text-white border-b-2 border-white":"text-gray-400 hover:text-gray-200"}`,onClick:()=>w("signup"),disabled:l,children:"Sign Up"})]}),g&&e.jsx("div",{className:"error-message mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-200",children:g}),b&&e.jsx("div",{className:"success-message mb-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-200",children:b}),m==="signin"&&e.jsxs("form",{onSubmit:v,className:"space-y-6",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"block text-white mb-2",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:r.email,onChange:t,required:!0,autoComplete:"email",className:"form-input w-full p-3 bg-zinc-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"block text-white mb-2",children:"Password"}),e.jsx("input",{type:"password",name:"password",value:r.password,onChange:t,required:!0,autoComplete:"current-password",className:"form-input w-full p-3 bg-zinc-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"})]}),e.jsx("button",{type:"submit",disabled:l,className:"submit-button w-full p-3 bg-white text-black font-bold rounded hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Signing In...":"Sign In"}),e.jsx("p",{className:"text-center text-gray-400 text-sm mt-4",children:"Having issues? Try refreshing the page!"})]}),m==="signup"&&e.jsxs("form",{onSubmit:C,className:"space-y-6",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"block text-white mb-2",children:"Full Name"}),e.jsx("input",{type:"text",name:"fullName",value:r.fullName,onChange:t,required:!0,autoComplete:"name",className:"form-input w-full p-3 bg-zinc-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"block text-white mb-2",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:r.email,onChange:t,required:!0,autoComplete:"email",className:"form-input w-full p-3 bg-zinc-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"block text-white mb-2",children:"Password (min. 6 characters)"}),e.jsx("input",{type:"password",name:"password",value:r.password,onChange:t,required:!0,minLength:6,autoComplete:"new-password",className:"form-input w-full p-3 bg-zinc-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"block text-white mb-2",children:"Role"}),e.jsxs("select",{name:"role",value:r.role,onChange:t,className:"form-input w-full p-3 bg-zinc-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none",children:[e.jsx("option",{value:"bartender",children:"Bartender"}),e.jsx("option",{value:"organiser",children:"Organiser"})]})]}),r.role==="bartender"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"block text-white mb-2",children:"Bar Name *"}),e.jsx("input",{type:"text",name:"bar",value:r.bar,onChange:t,required:!0,className:"form-input w-full p-3 bg-zinc-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"})]}),r.role==="organiser"&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"block text-white mb-2",children:"Brand/Organisation Name *"}),e.jsx("input",{type:"text",name:"brand",value:r.brand,onChange:t,required:!0,className:"form-input w-full p-3 bg-zinc-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"})]}),e.jsx("button",{type:"submit",disabled:l||b,className:"submit-button w-full p-3 bg-white text-black font-bold rounded hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Creating Account...":"Sign Up"}),e.jsx("p",{className:"text-center text-gray-400 text-sm mt-4",children:"Having issues? Try refreshing the page!"})]})]}),e.jsxs("div",{className:"membership-info mt-12 bg-zinc-800 p-8 rounded-lg shadow-xl text-white",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-center",children:"MBC Membership Benefits"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"membership-section",children:[e.jsx("h3",{className:"text-xl font-medium mb-4 border-b border-gray-700 pb-2",children:"Free Membership"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Anyone can join MBC free. As a free registered member you can:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-300",children:[e.jsx("li",{children:"Claim a profile on the leaderboard"}),e.jsx("li",{children:"Submit competition results for admin approval"})]})]}),e.jsxs("div",{className:"membership-section",children:[e.jsx("h3",{className:"text-xl font-medium mb-4 border-b border-gray-700 pb-2",children:"Paid Membership"}),e.jsx("p",{className:"text-gray-300 mb-3",children:"Paid members are entitled to:"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1 text-gray-300",children:[e.jsx("li",{children:"10% off ticket entry for any MBC endorsed competition"}),e.jsx("li",{children:"10% off merch and equipment"}),e.jsx("li",{children:"Members lapel pin (special founders pin before 28/4)"}),e.jsx("li",{children:"1x Free entry ticket to each hosted MBC event"}),e.jsx("li",{children:"Access to members only nights at trap."}),e.jsx("li",{children:"Access to Members only communication channels"})]})]})]}),e.jsxs("div",{className:"membership-cta mt-8 p-6 bg-zinc-700 rounded-lg text-center",children:[e.jsx("p",{className:"text-gray-200 mb-4",children:"Become a paid member by buying an annual membership using the same email address you use to sign up/sign in."}),e.jsx("a",{href:"https://buy.stripe.com/7sI8zY2cleYm1LGeUW",target:"_blank",rel:"noopener noreferrer",className:"buy-membership-button inline-block px-8 py-3 bg-white text-black font-bold rounded hover:bg-zinc-200 transition-colors",children:"Buy Annual Membership"})]})]})]})};export{P as default};
