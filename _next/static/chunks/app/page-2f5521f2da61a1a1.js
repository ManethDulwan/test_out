(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4709:function(e,t,r){Promise.resolve().then(r.bind(r,724))},724:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r(7437),s=r(2265);function l(){let[e,t]=(0,s.useState)([]);(0,s.useEffect)(()=>{(async()=>{let e=await fetch("https://randomuser.me/api/?results=1"),{results:r}=await e.json();t(r)})()},[]);for(var r=[],l=[[1,2,3],[4,5,6],[7,8,9]],n=2;n>=0;n--)for(var c=2;c>=0;c--)r.push(l[n][c]);for(var d=[[1,1],[1,1],[1,1]],i=0,n=0;n<=2;n++)for(var c=0;c<=2;c++)d[n][c]=r[i],i+=1;console.log(d);let o=()=>{(async()=>{let e=await fetch("https://randomuser.me/api/?results=1?&&gender=male&&nat=CA"),{results:r}=await e.json();t(r)})()},u=()=>{(async()=>{let e=await fetch("https://randomuser.me/api/?results=1?&&gender=female&&nat=CA"),{results:r}=await e.json();t(r)})(),console.log(e)};return(0,a.jsxs)(a.Fragment,{children:[e.map((e,t)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{class:"h-screen dark:bg-gray-700 bg-gray-200 pt-12",children:(0,a.jsxs)("div",{class:"max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg",children:[(0,a.jsx)("div",{class:"border-b px-4 pb-6",children:(0,a.jsxs)("div",{class:"text-center my-4",children:[(0,a.jsx)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5",onClick:o,children:"Male"}),(0,a.jsx)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5",onClick:u,children:"Female"}),(0,a.jsx)("img",{class:"h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4",unoptimized:!0,src:e.picture.large,alt:""}),(0,a.jsxs)("div",{class:"py-2",children:[(0,a.jsx)("h3",{class:"font-bold text-2xl text-gray-800 dark:text-white mb-1",children:e.name.title+"."+e.name.first+"  "+e.name.last}),(0,a.jsxs)("h5",{class:"font-bold  text-gray-800 dark:text-white mb-1",children:["\uD83D\uDCCC ",e.location.country+","+e.location.city+","+e.location.street.name]}),(0,a.jsxs)("p",{class:"text-gray-600 dark:text-gray-300",children:["✉️  "," "+e.email]}),(0,a.jsxs)("p",{class:"text-gray-600 dark:text-gray-300",children:["\uD83E\uDDC1 ",e.dob.date]}),(0,a.jsxs)("p",{class:"text-gray-600 dark:text-gray-300",children:["\uD83D\uDCDE ",e.cell]})]})]})}),(0,a.jsx)("div",{class:"px-4 py-4",children:(0,a.jsx)("div",{class:"flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4"})})]},t)})})),";"]})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=4709)}),_N_E=e.O()}]);