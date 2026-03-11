let sub=document.getElementById("submit");
let fn12=document.getElementById("fn1");
let ln12=document.getElementById("ln1");
let e12=document.getElementById("e1");
let p12=document.getElementById("p1");
let s12=document.getElementById("s1");

const employee={
firstname: fn12.value,
lastname: ln12.value,
email: e12.value,
phone: p12.value,
salary: s12.value
};
sub.onclick=(e)=>{
   console.log(employee);
  localStorage.setItem("employee",JSON.stringify(employee));
  
}
