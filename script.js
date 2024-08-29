const month=document.getElementById("month")
const day=document.getElementById("day")
const date1=document.getElementById("date1")
const year=document.getElementById("year")
 const date=new Date()

 month.innerText=date.toLocaleString("en",{
    month:"long"
 })
 day.innerText=date.toLocaleString("en",{
    weekday:"long"
 })
 date1.innerText=date.getDate()
 year.innerText=date.getFullYear()

 
 