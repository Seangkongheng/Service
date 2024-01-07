const body =document.body;
const arry_a =document.getElementsByTagName("a");
function mode(){

    body.classList.toggle("blackmode");
   for(let i=0; i<arry_a.length;i++){
    arry_a[i].classList.toggle("modecolor");
   }
}
