let ul=document.getElementById("list");
let addBtn=document.getElementById("addBtn");

let userInput=document.getElementById("user-input");

addBtn.addEventListener("click",()=>{
    if(userInput.value==""){
        alert("Add Something first")
    }
    else{
        let li=document.createElement("li");
        ul.appendChild(li);
        let disabledInput=document.createElement("input");
        disabledInput.setAttribute("type","text");
        disabledInput.disabled=true;
        li.appendChild(disabledInput);

        let removeBtn=document.createElement("button");
        removeBtn.textContent="Remove";
        li.appendChild(removeBtn);
 
        disabledInput.value=userInput.value;
        userInput.value="";
        
        removeBtn.addEventListener("click",()=>{
            let value=disabledInput;
            disabledInput.style.backgroundColor="#ffffffc4";
            removeBtn.style.backgroundColor="rgb(255 0 21 / 55%)";
            value.style.textDecoration="line-through";
        })
              
    }

})