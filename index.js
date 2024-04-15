require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
      
const githuData={
   
      "login": "harsh29patel",
      "id": 164307998,
      "node_id": "U_kgDOCcskHg",
      "avatar_url": "https://avatars.githubusercontent.com/u/164307998?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/harsh29patel",
      "html_url": "https://github.com/harsh29patel",
      "followers_url": "https://api.github.com/users/harsh29patel/followers",
      "following_url": "https://api.github.com/users/harsh29patel/following{/other_user}",
      "gists_url": "https://api.github.com/users/harsh29patel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/harsh29patel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/harsh29patel/subscriptions",
      "organizations_url": "https://api.github.com/users/harsh29patel/orgs",
      "repos_url": "https://api.github.com/users/harsh29patel/repos",
      "events_url": "https://api.github.com/users/harsh29patel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/harsh29patel/received_events",
      "type": "User",
      "site_admin": false,
      "name": null,
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": null,
      "twitter_username": null,
      "public_repos": 1,
      "public_gists": 0,
      "followers": 0,
      "following": 0,
      "created_at": "2024-03-21T05:59:43Z",
      "updated_at": "2024-04-15T06:34:34Z"
    }

    app.get('/', (req, res) => {
     res.send('Hello World!')
   
})
app.get('/twitter', (req,res)=>{
    res.send('harshpateldotcom')
 })
 app.get('/login', (req,res)=>{
    res.send('<h1> Please login at Twitter</h1>')
 })
 app.get('/youtube',(req,res)=>{
    res.send('<h1> Chai Aur Code</h1>')
 })
 app.get('/github',(req,res)=>{
   res.json(githuData)
 })

    app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})