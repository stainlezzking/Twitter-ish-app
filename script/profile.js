let UrlId =  new URLSearchParams(window.location.search).get("id")
content = document.querySelector(".content")
write = document.querySelector(".write i")
modal = document.querySelector(".modal")
content.style.marginTop =   document.querySelector(".header").offsetHeight + "px" ;

let getUser = async()=>{
    let data = fetch("http://localhost:3000/users/"+UrlId).then(data=>data.json())
    return data
 }

document.addEventListener("click",async(e)=>{
    
    if(e.target.className.includes("close")){
        e.target.nextElementSibling.value = ""
        e.target.parentElement.classList.remove("modal_open")
    }
    if(e.target === write){
        modal.classList.add("modal_open")
    }
    if(e.target.tagName === 'BUTTON'){
       
        if(modal.querySelector("textarea").value.trim()){
            // a function that adds chat to data base
            let newT = modal.querySelector("textarea").value.trim();
            getUser().then(user=>{
                Tweet(user,newT);
            }).then(()=>console.log("tweeted"))
        }
    }
})

let Tweet = async(user,value)=>{
    data ={
        author : user.username,
        body : value,
        likes : 0
    }
    fetch("http://localhost:3000/tweets",{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {'Content-Type':'application/json'}
    })
}
let getUserTweet = (user)=>{
   return fetch("http://localhost:3000/tweets?author="+user.username+"&_sort=likes").then(data=>data.json())
}
let render = (UserTweets)=>{
      let newArr =  UserTweets.map(tweet=>{
            
            return `
    <div class="tweet">
            <div class="tweet_author">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                ${tweet.author}
            </div>
            <div class="tweet_body">
               ${tweet.body}
            </div>
            <div class="tweet_footer" data-id=${tweet.id}>
                <i class="fas fa-comment"></i>
                <i class="fas fa-retweet" title="comming soon"></i>
                <span><i class="fas fa-heart" title="like this post"></i>${tweet.likes}</span>
            </div>
        </div>
    </div>
            `
        })
        newArr.forEach(tweet=>{
            document.querySelector(".content").innerHTML += tweet
        })
}
let renderName=(user)=>{
    document.querySelector(".usn").innerText = user.username
    if(user.rank ==="admin"){
        document.querySelector(".usn").innerHTML = `
        <div class="usn">stainlezzking 
        <span class="rank">
          <i class="fas fa-certificate"></i>         
        </span>
        `    
    }
}
document.querySelector("footer").innerHTML= `
<a href="home.html?id=${UrlId}"><i class="fa fa-home" aria-hidden="true"></i></a>
`
getUser()
 .then(data=>{
    renderName(data)
    return getUserTweet(data)
    
    })
.then(data=>render(data))

