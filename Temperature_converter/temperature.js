let celsius=document.getElementById("celsius");
let fahrenheit=document.getElementById("fahrenheit");
let kelvin=document.getElementById("kelvin");

celsius.addEventListener("change",()=>{
     let ft=((celsius.value*9/5)+32).toFixed(2);
     let kel=(parseFloat((celsius.value))+273.15);
     fahrenheit.value=ft;
     kelvin.value=kel;
});

fahrenheit.addEventListener("change",()=>{
    let cel=((fahrenheit.value-32)*5/9).toFixed(2);
    let kel=((fahrenheit.value-32) * 5/9 + 273.15).toFixed(2);
    celsius.value=cel;
    kelvin.value=kel;
});
kelvin.addEventListener("change",()=>{
    let cel=(parseFloat(kelvin.value)-273.15).toFixed(2);
    let ft=((kelvin.value-273.15)*9/5+32).toFixed(2);
    celsius.value=cel;
    fahrenheit.value=ft;
})



