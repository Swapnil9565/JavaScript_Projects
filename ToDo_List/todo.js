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
        
        let checkBox=document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        li.appendChild(checkBox);

        let disabledInput=document.createElement("input");
        disabledInput.setAttribute("type","text");
        disabledInput.disabled=true;
        li.appendChild(disabledInput);
        
        let removeBtn=document.createElement("button");
        removeBtn.textContent="Remove";
        li.appendChild(removeBtn);
 
        disabledInput.value=userInput.value;
        userInput.value="";
          
        checkBox.addEventListener("change",()=>{
            if(checkBox.checked){
                disabledInput.style.textDecoration="line-through";
                disabledInput.style.backgroundColor="#ffffffc4";
            }
            else{
                disabledInput.style.textDecoration="none";
                disabledInput.style.backgroundColor="white";
            }
        })
        removeBtn.addEventListener("click",()=>{
            li.remove();
        })
              
    }

})