function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var times = document.getElementById("times").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
    var cinterest = (principal * (1 + rate/100/times)**(times*years))-principal;
    if (principal == null || principal <= 0) {return alert("Enter a positive number");
    } else {
    return document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark> , or <mark>"+Math.round(cinterest)+"</mark> if compounded <mark>"+times+"</mark> time(s) per year<br\>"
}}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
    return rateval
}
function checkno()
{var prin_entry = document.getElementById("principal");
//Check if email field is empty or <= 0
if(prin_entry.value <= 0){
    alert("Enter a positive number");
    prin_entry.focus();
    return false;
}}   
