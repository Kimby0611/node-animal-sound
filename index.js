const express = require('express')
var cors = require('cors')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use(cors())

app.get('/sound/:name', function (req, res) {
    const { name } = req.params

    if (name == "dog"){
        res.json({'sound' : '멍멍'})
    }else if(name == "cat"){
        res.json({'sound' : '야옹'})
    }else if (name == "pig"){
        res.json({'sound' : '꿀꿀'})
    }else {
        res.json({'sound' : '알수 없음'})
    }
})

app.get('/user/:id', function (req, res) {
    // const p = req.params
    // console.log(p.id)
    // const q = req.query
    // console.log(q.q)

    res.json({'userid' : q.id})
})

app.listen(3000)