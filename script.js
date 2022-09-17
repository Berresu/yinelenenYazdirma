let cift=["2","4","6","8","10"];
let tek=["1","3","5","7","9"];
let rakam=["0","1","2","3","4","5","6","7","8","9"];
let dogal=["0","1","2","3","4","5","6","7","8","9","10"];
let sonuc=document.getElementById("sonuc");

document.getElementById("btnSec").addEventListener("click", ()=>{
    if(document.getElementById("cift").checked){
        sonuc.innerHTML=cift[0] +" ,"+ cift[1] +" ,"+ cift[2] +" ,"+ cift[3] +" ,"+ cift[4];
    }
    else if(document.getElementById("tek").checked){
        sonuc.innerHTML=tek[0] +" ,"+ tek[1] +" ,"+ tek[2] +" ,"+ tek[3] +" ,"+ tek[4];
    }
    else if(document.getElementById("rakam").checked){
        sonuc.innerHTML=rakam[0] +" ,"+ rakam[1] +" ,"+ rakam[2] +" ,"+ rakam[3] +" ,"+ rakam[4];
    }
    else if(document.getElementById("dogal").checked){
        sonuc.innerHTML=dogal[0] +" ,"+ dogal[1] +" ,"+ dogal[2] +" ,"+ dogal[3] +" ,"+ dogal[4];
    }
});
