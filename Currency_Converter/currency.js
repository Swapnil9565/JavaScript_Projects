
let CurrencyDropdown1=document.getElementById("Currency-dropdown1");
let CurrencyDropdown2=document.getElementById("Currency-dropdown2");

let inr=document.getElementById("inr");
let usd=document.getElementById("usd");
let eur=document.getElementById("eur");
let jpy=document.getElementById("jpy");
let aud=document.getElementById("aud");
let cny=document.getElementById("cny");

let inr1=document.getElementById("inr1");
let usd1=document.getElementById("usd1");
let eur1=document.getElementById("eur1");
let jpy1=document.getElementById("jpy1");

let aud1=document.getElementById("aud1");
let cny1=document.getElementById("cny1");

let userInput=document.getElementById("user-input");
let input=document.getElementById("currency-input");

let currencyInfo=document.getElementById("currency-info")

CurrencyDropdown1.addEventListener("change",(e)=>{
    let dropdown1Currency=e.target.value;
    switch(dropdown1Currency){
        case "INR":
            INRtoOther();
            break;
        case "USD":
            USDToOther();
            break;
        case "EUR":
            EUROToOther();
            break;
        case "JPY":
            JPYToOther();
            break;
        case "AUD":
            AUDToOther();
            break;
        case "CNY":
            CNYToOther();
    }
    userInput.addEventListener("change",()=>{

        let dropdown1Currency=e.target.value;
        console.log(dropdown1Currency);
        switch(dropdown1Currency){
            case "INR":
                INRtoOther();
                break;
            case "USD":
                USDToOther();
                break;
            case "EUR":
                EUROToOther();
                break;
            case "JPY":
                JPYToOther();
                break;
            case "AUD":
                AUDToOther();
                break;
            case "CNY":
                CNYToOther();
        }
    })
})

function INRtoOther(){
    userInput.addEventListener("change",()=>{
        let dropdown2Currency=CurrencyDropdown2.value;
        switch(dropdown2Currency){
           case "INR":
               input.value=userInput.value;
               break;
           case "USD":
               input.value=userInput.value*0.0119.toFixed(4);
               break;
           case "EUR":
               input.value=(userInput.value*0.011).toFixed(4);
               break;
           case "AUD":
               input.value=userInput.value*0.018.toFixed(4);
               break;
           case "JPY":   
               input.value=(userInput.value*1.77).toFixed(4);
               break;
           case "CNY":
               input.value=(userInput.value*0.085).toFixed(4);
           
        }
       

})
}
function USDToOther(){
        userInput.addEventListener("change",()=>{
            let dropdown2Currency=CurrencyDropdown2.value;
            switch(dropdown2Currency){
                case "USD":
                    input.value=userInput.value;
                    break;
                case "INR":
                    input.value=userInput.value*83.5;
                    break;
                case "EUR":
                    input.value=(userInput.value*0.9068).toFixed(4);
                    break;
                case "AUD":
                    input.value=userInput.value*1.4993.toFixed(4);
                    break;
                case "JPY":   
                    input.value=(userInput.value*147.6485).toFixed(4);
                    break;
                case "CNY":
                    input.value=(userInput.value*7.1644).toFixed(4);
                
             }
            })          
    }
function EUROToOther(){
        userInput.addEventListener("change",()=>{
            let dropdown2Currency=CurrencyDropdown2.value;
            switch(dropdown2Currency){
                case "EUR":
                    input.value=userInput.value;
                    break;
                case "INR":
                    input.value=userInput.value*92.49;
                    break;
                case "USD":
                    input.value=(userInput.value*1.1028).toFixed(4);
                    break;
                case "AUD":
                    input.value=userInput.value*1.6534.toFixed(4);
                    break;
                case "JPY":   
                    input.value=(userInput.value*162.8221).toFixed(4);
                    break;
                case "CNY":
                    input.value=(userInput.value*7.9008).toFixed(4);
                
             }
            })          
    }
function JPYToOther(){
        userInput.addEventListener("change",()=>{
            let dropdown2Currency=CurrencyDropdown2.value;
            switch(dropdown2Currency){
                case "JPY":   
                input.value=userInput.value;
                break;
                case "INR":
                    input.value=userInput.value*0.568;
                    break;
                case "USD":
                    input.value=(userInput.value*0.0068).toFixed(4);
                    break;
                case "EUR":
                    input.value=(userInput.value*0.0061).toFixed(4);
                    break;       
                case "AUD":
                    input.value=userInput.value*0.0102.toFixed(4);
                    break;
                case "CNY":
                    input.value=(userInput.value*0.0485).toFixed(4);
                
             }
            })          
    }
function AUDToOther(){
        userInput.addEventListener("change",()=>{
            let dropdown2Currency=CurrencyDropdown2.value;
            switch(dropdown2Currency){
                case "AUD":
                    input.value=userInput.value;
                    break;
                case "INR":
                    input.value=userInput.value*55.941.toFixed(3);
                    break;
                case "USD":
                    input.value=(userInput.value*0.667).toFixed(4);
                    break;
                case "EUR":
                    input.value=(userInput.value*0.6048).toFixed(4);
                    break;       
                case "JPY":   
                    input.value=userInput.value*98.4707.toFixed(4);
                    break;
                case "CNY":
                    input.value=(userInput.value*4.7785).toFixed(4);
                
             }
            })          
    }
function CNYToOther(){
        userInput.addEventListener("change",()=>{
            let dropdown2Currency=CurrencyDropdown2.value;
            switch(dropdown2Currency){
                case "CNY":
                    input.value=userInput.value;
                    break;
                case "INR":
                    input.value=userInput.value*11.7195.toFixed(3);
                    break;
                case "USD":
                    input.value=(userInput.value*0.1396).toFixed(4);
                    break;
                case "EUR":
                    input.value=(userInput.value*0.1266).toFixed(4);
                    break;       
                case "JPY":   
                    input.value=userInput.value*20.607.toFixed(4);
                    break;
                case "AUD":
                    input.value=(userInput.value*0.2093).toFixed(4); 
                
             }
            })          
    }

function currencyConverter(){
   
        INRtoOther();
        USDToOther();
        EUROToOther();
        JPYToOther();
        AUDToOther();
        CNYToOther();
    
}


