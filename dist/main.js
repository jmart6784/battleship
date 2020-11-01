(()=>{"use strict";var e={138:(e,o,t)=>{let l=document.querySelectorAll(".p1-board-tile"),r=document.querySelectorAll(".p2-board-tile");const s=e=>({coords:e});let i=s(["1A","1B","1C","1D"]),a=s(["3A","3B","3C"]),n=s(["5A","5B","5C"]),c=s(["7A","7B"]),d=s(["9A","9B"]),u=s(["2I","2J"]),p=s(["4J"]),m=s(["6J"]),y=s(["8J"]),E=s(["10J"]),f=s(["6I","7I","8I","9I"]),h=s(["9B","9C","9D"]),b=s(["2H","3H","4H"]),B=s(["1B","2B"]),T=s(["4A","4B"]),g=s(["1E","1F"]),H=s(["6E"]),v=s(["7B"]),A=s(["4F"]),I=s(["8F"]);const P=(e,o)=>(e=Math.ceil(e),o=Math.floor(o),Math.floor(Math.random()*(o-e+1))+e),k=(e,o,t)=>{let l=["1","2","3","4","5","6","7","8","9","10"],r=["A","B","C","D","E","F","G","H","I","J"],s=l[e]+r[o];if(t.moves.includes(s)){for(;t.moves.includes(s);)s=l[P(0,9)]+r[P(0,9)];return s}return s},C=(e,o,t,l,r,s)=>({name:e,isTurn:o,moves:t,ships:l,tiles:r,totalHP:s,aiMove:e=>{let o=document.querySelector(`[name="player1 ${e}"]`);return{player:o.name.split(" ")[0],coord:e,isEmpty:!o.classList[1],tile:o}}});let M=C("player1",!0,[],[i,a,n,c,d,u,p,m,y,E],l,20),L=C("player2",!1,[],[f,h,b,B,T,g,H,v,A,I],r,20);(()=>{M.tiles.forEach((o=>{o.onclick=()=>{let t=o.name.split(" "),l=t[0],r=t[1],s=!o.classList[1];M.isTurn||(o.disabled=!0,e({player:l,coord:r,isEmpty:s,tile:o}))}})),L.tiles.forEach((o=>{o.onclick=()=>{let t=o.name.split(" "),l=t[0],r=t[1],s=!o.classList[1];L.isTurn||(o.disabled=!0,e({player:l,coord:r,isEmpty:s,tile:o})),o.disabled=!0}}));const e=t=>{if(t.isEmpty)if(M.isTurn){M.moves.push(t.coord),M.isTurn=!1,L.isTurn=!0,t.tile.style.backgroundColor="gray";let o=k(P(0,9),P(0,9),L),l=L.aiMove(o);e(l)}else L.isTurn&&(L.moves.push(t.coord),M.isTurn=!0,L.isTurn=!1,t.tile.style.backgroundColor="gray");else if(t.tile.style.backgroundColor="red",M.isTurn)1===L.totalHP?o(M.name):L.totalHP-=1;else if(L.isTurn)if(1===M.totalHP)o(L.name);else{let o=k(P(0,9),P(0,9),L),t=L.aiMove(o);e(t),console.log("BEFORE HIT:",M.totalHP),M.totalHP-=1,console.log("AFTER HIT:",M.totalHP)}},o=e=>{M.tiles.forEach((e=>{e.disabled=!0})),L.tiles.forEach((e=>{e.disabled=!0})),document.getElementById("winner-name").innerHTML="player1"===e?"You Win!":"Enemy has won!",document.getElementById("winner-popup").style.display="block",document.getElementById("game-reset").addEventListener("click",(()=>{location.reload()}))};return{placePieces:()=>{M.ships.forEach((e=>{e.coords.forEach((e=>{M.tiles.forEach((o=>{o.name.split(" ")[1]===e&&(o.style.backgroundColor="blue",o.classList+=" occupied")}))}))})),L.ships.forEach((e=>{e.coords.forEach((e=>{L.tiles.forEach((o=>{o.name.split(" ")[1]===e&&(o.style.backgroundColor="blue",o.classList+=" occupied")}))}))}))},receiveAttack:e}})().placePieces()}},o={};function t(l){if(o[l])return o[l].exports;var r=o[l]={exports:{}};return e[l](r,r.exports,t),r.exports}t.d=(e,o)=>{for(var l in o)t.o(o,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t(138)})();