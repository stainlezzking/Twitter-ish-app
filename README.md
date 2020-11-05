
# Twitter-ish App :)
___

### __THE APP'S UI__

> Create an account

<img src="img/createA.jpg">

>Log into your account

<img src="img/login.jpg">

> A home page to see tweets from all users


> View all your personal tweets on your profile and create new tweets

<img src="img/profile.png">

<div class="space"></div>

### __TOOLS__
* HTML 
* CSS
* JAVASCRIPT
* JSON-server (_installed with npm_)

<div class="space"></div>

### __TECHNICAL IDEA__
> Had the json-server listening to local-host port 3000  

>When an account is created a POST request is sent and a JSON object is created with those information passed in then redirected to the login page

> In the login page, a GET query request is sent to check if the user exists, if user exists it redirects to the home page, if the user is not fined, an error message is sent back to the user in a cool and animated.

> ones logged in, the home page returns tweets from all users while the profile page returns the user tweets.

## NOTE

* to Use this app
    *  install the json-server and run the server using npm

         ``` 
         npm install -g json-server 
         ```
    *   run your project on liver server

    * navigate to the project folder and run the server
        ```
        json-server --watch storage/db.json
        ```
    Make sure the server is running on port 3000 or navigate manually change the port in the scripts


## UNCOMPLETED
this is not yet to be completed
 ### FEATURES LEFT
 * like 
 * comment
 * view other users profile
 * follow users

 ### contribute to this
 This app is developed just for fun,
 want to contribute to this ?
 * folk  the repository and create a new branch with your name - "the feature" added 
 * Thank you
