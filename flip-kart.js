console.log("Welcome to js") ;
let itemList=[ ] ;
displayBag();

function group() {
    let store = document.querySelector('.offers') ;
    itemList.push('.offers') ;
}

function displayBag() {
let bagItemcount=document.querySelector('#notification') ; 

if( bagItemcount.length < 0)
{
    bagItemcount.style.visibility ='hidden' ;
}
else {
    bagItemcount.style.visibility='visible' ;
    bagItemcount.innerText = itemList.length ;
group();

}
     
}
