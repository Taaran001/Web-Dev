// import express from "express";
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "taara001",
  "id": 17548392,
  "node_id": "MDQ6VXNlcjE3NTQ4Mzky",
  "avatar_url": "https://avatars.githubusercontent.com/u/17548392?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/taara001",
  "html_url": "https://github.com/taara001",
  "followers_url": "https://api.github.com/users/taara001/followers",
  "following_url": "https://api.github.com/users/taara001/following{/other_user}",
  "gists_url": "https://api.github.com/users/taara001/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/taara001/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/taara001/subscriptions",
  "organizations_url": "https://api.github.com/users/taara001/orgs",
  "repos_url": "https://api.github.com/users/taara001/repos",
  "events_url": "https://api.github.com/users/taara001/events{/privacy}",
  "received_events_url": "https://api.github.com/users/taara001/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Tarjei",
  "company": null,
  "blog": "taara.no",
  "location": "Oslo, Norway",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2016-02-29T14:24:43Z",
  "updated_at": "2023-11-25T20:04:11Z"
}

app.get('/', (req, res) => {
    // "/" -> it is home route
    res.send('Hello World!')
})

app.get('/x', (req, res) => {
    res.send("X")
})

app.get('/login', (req, res) => {
    res.send('<h1> LOGIN </h1>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
