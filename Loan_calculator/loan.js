
function calculateLoan(){
    let loanAmt=document.getElementById("loan-amount").value;
    let IR=document.getElementById("interest-rate").value;
    let MP=document.getElementById("months-to-pay").value;
    let pt=document.getElementById("payment");
    
         interest=(loanAmt*((IR)/100))/MP;
        
          monthlyPayment=(loanAmt/MP+interest).toFixed(2);
        
         pt.innerText=`Monthly Payment: RS.${monthlyPayment}`;

}

