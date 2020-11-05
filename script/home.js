let container = document.querySelector(".container")
let UrlId =  new URLSearchParams(window.location.search).get("id")


let getUser = async()=>{
    let data = fetch("http://localhost:3000/users/"+UrlId).then(data=>data.json())
    return data
    }
// getting all tweets
let getAllTweet =async (user) =>{
    fetch("http://localhost:3000/tweets?_sort=id&_order=desc")

    .then(data=>data.json())

    .then((data)=>{
let tweet ;
        data.forEach(data=>{
            if(data){
    
                if(tweet === undefined){
                    tweet = `
                 <div class="tweet">
                    <div class="tweet_author">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                       ${data.author}
                    </div>
                    <div class="tweet_body">
                       ${data.body}
                    </div>
                    <div class="tweet_footer" data-id=${data.id}>
                        <i class="fas fa-comment"></i>
                        <i class="fas fa-retweet" title="comming soon" ></i>
                        <i class="fas fa-heart" title="like this post"></i>
                    </div>
                </div> 
                    `
                 }else{
                tweet += `
            <div class="tweet">
                <div class="tweet_author">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                   ${data.author}
                </div>
                <div class="tweet_body">
                   ${data.body}
                </div>
                <div class="tweet_footer" data-id=${data.id}>
                    <i class="fas fa-comment"></i>
                    <i class="fas fa-retweet" title="comming soon" ></i>
                    <i class="fas fa-heart" title="like this post"></i>
                </div>
            </div>  
            `                    
                }

         }
        })
     document.body.innerHTML = tweet + `
        
    <footer class="footer">
    <a href = "/profile.html?id=${user.id}"><i class="fa fa-user-circle" aria-hidden="true"></i><a/>
    </footer>   
     `
    })

}

getUser().then(data=>getAllTweet(data))

