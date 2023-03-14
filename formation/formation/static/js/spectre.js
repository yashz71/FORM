const luffy = document.querySelector(".luffy");
var dataid = document.querySelectorAll("[data-item-id]")
var dataname=document.querySelectorAll(".nami");
let firstChild = luffy.firstElementChild.innerHTML;
console.log(firstChild);
const title= [];
for (let i = 0; i <dataname.length; i++) {
    datatitle = dataname[i].innerHTML;
    title.push(datatitle);
  }
function product(clk_id,i_mg){
    //window.location.href = "https://www.youtube.com/watch?v=TlP5WIxVirU"; 
      console.log(clk_id);
      console.log(i_mg);
      for(let i = 0; i<dataname.length; i++){
        datatitle= dataname[i].innerHTML;
        if(datatitle == title[4]){
            console.log(title[4]);
            break;
          }
          else{
            console.log("nop");
          }
      }
      
}