let form = document.querySelector("form")
let message = document.querySelector(".message")


form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    if(form.usn.value && form.pass.value){
let user ;
    await fetch("http://localhost:3000/users?username="+form.usn.value.trim() +"&&"+"password="+form.pass.value.trim())
    .then(data=>data.json())
    .then(data=>{
       user = data[0]
       if(user){
           console.log("user exists")
       window.location.replace("/home.html?id="+user.id)

        }else {
        message.style.left ="0px"   
        setTimeout(()=>{
        message.style.left = "2000px"
        },3000)   
       }
    })
}else{
    message.style.left ="0px"   
    setTimeout(()=>{
    message.style.left = "2000px"
    },2000)   
}
})

// HIDE AND SHOW PASsWORD
document.addEventListener("click",(e)=>{
    if(e.target.tagName === 'I'){
        if(e.target.className === "fas fa-eye-slash"){
            e.target.className = "fas fa-eye"
            form.pass.type = "text"
        }else if(e.target.className === "fas fa-eye"){
            e.target.className = "fas fa-eye-slash"
             form.pass.type = "password"
        }
    }
})