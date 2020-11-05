let form = document.querySelector("form")
let message = document.querySelector(".message")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    post();
})


let post = async()=>{
    if(form.pass.value.trim() == form.passA.value.trim() && form.usn.value.length > 4 && form.pass.value.length > 4){
let data ={
username : form.usn.value ,
password : form.pass.value,
posts : 0,
rank: null
}
    fetch("http://localhost:3000/users",{
        method : "POST",
        body : JSON.stringify(data),
        headers : {"Content-Type": "application/json"}
    }).then(data=>{
     window.location.replace("/login.html")    
   
});

}else{
message.style.left ="0px"   
}
setTimeout(()=>{
message.style.left = "2000px"
},3000)
}
