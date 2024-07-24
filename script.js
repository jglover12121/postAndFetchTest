fetch('https://example.com/data') 
  .then(response => response.json()) 
  .then(data => console.log(data)) 
  .catch(error => console.error(error)); 

const oriHref = window.location.href;

console.log(oriHref);
const roomCode = 0;

document.getElementById("setRoom").addEventListener("click", ()=>{
  roomCode = toString(document.getElementById("roomCodeInput"))
  window.location.href = oriHref + roomCode;
})
document.getElementById("leaveRoom").addEventListener("click", ()=>{
  window.location.href = oriHref;
})