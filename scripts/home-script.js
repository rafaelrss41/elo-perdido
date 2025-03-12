let text = document.getElementById('text');
let leaf = document.getElementById("leat");
let hill1 = document.getElementById("hill1");
//let hill2 = document.getElementById("hill2");
let hill3 = document.getElementById("hill3");


window.addEventListener('scroll' , ()=>{
  let value =window.screenY;

  text.style.marginTop = value *1.7 + "px";
  hill1.style.left = value * 1.2 + "px";
  hill2.style.left = value * 1.2 + "px";
  hill3.style.top = value * 0.2 + "px";

})
