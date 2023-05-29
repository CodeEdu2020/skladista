let datum=new Date("2023/06/06");
console.log(datum);

let obj={proizvod:[2,3,5,6,7,88,5]};


localStorage.setItem("objekat",JSON.stringify(obj));


if(localStorage.getItem("objekat")){

    let objekat=JSON.parse(localStorage.getItem("objekat"));
    console.log(objekat);
}
localStorage.removeItem("objekat");


document.cookie="username=Pera; expires="+datum.toUTCString();
ocument.cookie="username=Pera; expires="+datum.toUTCString();
document.cookie="obj="+JSON.stringify(obj)+"; expires="+datum.toUTCString();
console.log(document.cookie);

if(document.cookie){
let niz=document.cookie.split(";");
console.log(niz);
for(let i=0;i<niz.length;i++){
     
    let novi=niz[i].split("=");
console.log(novi);
    if(novi[0].trim()=="obj"){

        ispis(novi[1]);
        break;
    }

}





}
function ispis(obj){

    console.log(JSON.parse(obj));
}
