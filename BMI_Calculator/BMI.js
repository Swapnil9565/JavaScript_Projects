let height=document.getElementById("height");
let weight=document.getElementById("weight");

let result=document.getElementById("result");

let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    let condition=document.getElementById("condition");
    let compute=((weight.value/(height.value*height.value))*10000).toFixed(4);
    result.value=compute;
    if(compute<16){
        condition.innerHTML=`Weight Condition:<b>Severe Thickness</b>`;
    }
    else if(compute>16&&compute<17){
        condition.innerHTML=`Weight Condition:<b>Moderate Thinness</b>`;
    }
    else if(compute>17&&compute<18.5){
        condition.innerHTML=`Weight Condition:<b>Mild Thinness</b>`;
    }
    else if(compute>18.5&&compute<25){
        condition.innerHTML=`Weight Condition:<b>Normal Weight</b>`;
    }
    else if(compute>25&&compute<30){
        condition.innerHTML=`Weight Condition:<b>Overweight</b>`;
    }
    else{
        condition.innerHTML=`Weight Condition:<b>Obesity</b>`;
    }
})

