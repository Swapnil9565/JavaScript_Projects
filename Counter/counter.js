
let btnIncr=document.getElementById("increment");
let btnDecr=document.getElementById("decrement");
let reset=document.getElementById("reset");

let count=document.getElementById('count');

let intialCount=0;
btnIncr.addEventListener('click',()=>{
    console.log("Increment button was clicked");
    intialCount++;
    count.textContent=intialCount;
    if(count.textContent>0){
        count.style.color="green";
    }
    else if(count.textContent==0){
        count.style.color="black";
      };
});

btnDecr.addEventListener('click',()=>{
    console.log("decrement button was clicked");
    intialCount--;
    count.textContent=intialCount;
    if(count.textContent<0){
        count.style.color="red";
    }
    else if(count.textContent==0){
        count.style.color="black";
      };
});
reset.addEventListener('click',()=>{
    console.log("Reset button was clicked");
    intialCount=0;
    count.textContent=intialCount;
    if(count.textContent==0){
        count.style.color="black";
      };

});

