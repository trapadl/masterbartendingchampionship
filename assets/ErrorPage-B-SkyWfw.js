import{a as l,b as d,j as e}from"./main-CyxRsl2n.js";const h=()=>{const o=l(),n=d(),{message:s="Something went wrong",contact:t="cocktails+mbc@trapadl.com"}=o.state||{},r=()=>{const i=encodeURIComponent("MBC Website Issue Report"),c=encodeURIComponent(`Hello,

I encountered an issue on the MBC website:

Issue: ${s}
Time: ${new Date().toLocaleString()}
URL: ${window.location.href}
Browser: ${navigator.userAgent}

Please help resolve this issue.

Thank you!`);window.location.href=`mailto:${t}?subject=${i}&body=${c}`},a=()=>{n("/")};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 px-4",children:e.jsxs("div",{className:"max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4",children:e.jsx("svg",{className:"h-8 w-8 text-red-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"})})}),e.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Oops! Something went wrong"}),e.jsx("p",{className:"text-gray-600 mb-6",children:s})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("button",{onClick:r,className:"w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center",children:[e.jsx("svg",{className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"Report Issue to Admin"]}),e.jsx("button",{onClick:a,className:"w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200",children:"Go Back to Homepage"})]}),e.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["Having trouble? Contact us at:"," ",e.jsx("a",{href:`mailto:${t}`,className:"text-red-600 hover:text-red-800 font-medium",children:t})]})})]})})};export{h as default};
