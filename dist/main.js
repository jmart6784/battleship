(()=>{"use strict";var e={138:(e,o,t)=>{let l=document.querySelectorAll(".p1-board-tile"),r=document.querySelectorAll(".p2-board-tile");const s=(e,o,t)=>({length:e,sunk:o,coords:t,hit:(e,o)=>{}});let c=s(4,!1,["1A","1B","1C","1D"]),i=s(3,!1,["3A","3B","3C"]),a=s(3,!1,["5A","5B","5C"]),n=s(2,!1,["7A","7B"]),p=s(2,!1,["9A","9B"]),d=s(2,!1,["2I","2J"]),u=s(1,!1,["4J"]),y=s(1,!1,["6J"]),g=s(1,!1,["8J"]),b=s(1,!1,["10J"]),A=s(4,!1,[]),E=s(3,!1,[]),h=s(3,!1,[]),m=s(2,!1,[]),C=s(2,!1,[]),f=s(2,!1,[]),k=s(1,!1,[]),T=s(1,!1,[]),v=s(1,!1,[]),x=s(1,!1,[]);const B=(e,o,t,l,r)=>({name:e,isTurn:o,moves:t,ships:l,tiles:r});let J=B("player1",!0,[],[c,i,a,n,p,d,u,y,g,b],l);B("player2",!1,[],[A,E,h,m,C,f,k,T,v,x],r),(()=>{J.tiles.forEach((o=>{o.onclick=()=>{let t=o.name.split(" "),l=t[0],r=t[1].split("")[0],s=t[1].split("")[1],c=!o.classList[1];e({player:l,x:r,y:s,isEmpty:c,tile:o}),o.disabled=!0}}));const e=e=>{console.log("receive attack",e),e.isEmpty?(console.log("EMPTY ATTACK"),e.tile.style.backgroundColor="gray"):(console.log("HIT DETECTED"),e.tile.style.backgroundColor="red")};return{placePieces:()=>{J.ships.forEach((e=>{e.coords.forEach((e=>{J.tiles.forEach((o=>{o.name.split(" ")[1]===e&&(o.style.backgroundColor="blue",o.classList+=" occupied")}))}))}))},receiveAttack:e,getCoords:(e,o)=>{console.log("coords",e,o)}}})().placePieces()}},o={};function t(l){if(o[l])return o[l].exports;var r=o[l]={exports:{}};return e[l](r,r.exports,t),r.exports}t.d=(e,o)=>{for(var l in o)t.o(o,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t(138)})();