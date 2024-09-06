const weights=["Pound","Ton","Quintal","Gram","Milligram","Select Unit"];
 
let input=document.getElementById("weight-input");      
let result=document.getElementById("result");
let weightDropDown=document.getElementById("Weight");
let disabledInput=document.getElementById("disabled-input");
let btn=document.getElementById("btn");

weights.forEach(weightUnit => {
    let options=document.createElement("option");
    options.textContent=weightUnit;
    options.value=weightUnit;
    weightDropDown.append(options);
    options.selected="Select Unit";
});
function currencyConverter(){
    let value=input.value;
    switch(weightDropDown.value){

        case "Milligram":
            disabledInput.value=value*0.000001;
            break;
        case "Gram":
            disabledInput.value=value*0.001.toFixed(3);
            break;
        case "Quintal":
            disabledInput.value=(value*100);
            break;
        case "Ton":
            disabledInput.value=value*1000;
            break;
        case "Pound":
            disabledInput.value=value*0.453592.toFixed(3);
       
     }
}
input.addEventListener("change",()=>{
    if(weightDropDown.value=="Select Unit"){
           alert("Please,Select weight unit first");
    }

    btn.addEventListener("click",()=>{    
        currencyConverter();
        result.textContent=`${input.value} ${weightDropDown.value} = ${disabledInput.value} Kilogram`
        if(input.value<0){
            disabledInput.value="Enter a valid weight";
            result.textContent="Invalid data";
        }
    })

})
