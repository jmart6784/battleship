(()=>{"use strict";var o={138:(o,e,r)=>{let s=document.querySelectorAll(".p1-board-tile"),l=document.querySelectorAll(".p2-board-tile");const t=(o,e,r)=>({length:o,sunk:e,coords:r,hit:(o,e)=>{}});let c=t(4,!1,["1A","1B","1C","1D"]),i=t(3,!1,["3A","3B","3C"]),n=t(3,!1,["5A","5B","5C"]),a=t(2,!1,["7A","7B"]),u=t(2,!1,["9A","9B"]),d=t(2,!1,["2I","2J"]),p=t(1,!1,["4J"]),y=t(1,!1,["6J"]),b=t(1,!1,["8J"]),g=t(1,!1,["10J"]),h=t(4,!1,["6I","7I","8I","9I"]),E=t(3,!1,["9B","9C","9D"]),m=t(3,!1,["2H","3H","4H"]),T=t(2,!1,["1B","2B"]),f=t(2,!1,["4A","4B"]),k=t(2,!1,["1E","1F"]),B=t(1,!1,["6E"]),C=t(1,!1,["7B"]),A=t(1,!1,["4F"]),v=t(1,!1,["8F"]);const P=(o,e,r,s,l)=>({name:o,isTurn:e,moves:r,ships:s,tiles:l});let I=P("player1",!0,[],[c,i,n,a,u,d,p,y,b,g],s),J=P("player2",!1,[],[h,E,m,T,f,k,B,C,A,v],l);(()=>{I.tiles.forEach((e=>{e.onclick=()=>{let r=e.name.split(" "),s=r[0],l=r[1],t=!e.classList[1];I.isTurn?console.log("Error: cannot attack your own board"):(e.disabled=!0,o({player:s,coord:l,isEmpty:t,tile:e}))}})),J.tiles.forEach((e=>{e.onclick=()=>{let r=e.name.split(" "),s=r[0],l=r[1],t=!e.classList[1];J.isTurn?console.log("Error: cannot attack your own board"):(e.disabled=!0,o({player:s,coord:l,isEmpty:t,tile:e})),e.disabled=!0}}));const o=o=>{console.log("receive attack",o),o.isEmpty?I.isTurn?(I.moves.push(o.coord),I.isTurn=!1,J.isTurn=!0,o.tile.style.backgroundColor="gray",console.log("P1 -> P2",I.isTurn,J.isTurn)):J.isTurn&&(J.moves.push(o.coords),I.isTurn=!0,J.isTurn=!1,o.tile.style.backgroundColor="gray",console.log("P2 -> P1",J.isTurn,I.isTurn)):o.tile.style.backgroundColor="red"};return{placePieces:()=>{I.ships.forEach((o=>{o.coords.forEach((o=>{I.tiles.forEach((e=>{e.name.split(" ")[1]===o&&(e.style.backgroundColor="blue",e.classList+=" occupied")}))}))})),J.ships.forEach((o=>{o.coords.forEach((o=>{J.tiles.forEach((e=>{e.name.split(" ")[1]===o&&(e.style.backgroundColor="blue",e.classList+=" occupied")}))}))}))},receiveAttack:o,getCoords:(o,e)=>{console.log("coords",o,e)}}})().placePieces()}},e={};function r(s){if(e[s])return e[s].exports;var l=e[s]={exports:{}};return o[s](l,l.exports,r),l.exports}r.d=(o,e)=>{for(var s in e)r.o(e,s)&&!r.o(o,s)&&Object.defineProperty(o,s,{enumerable:!0,get:e[s]})},r.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),r(138)})();