const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    res.send('he hej głowna route')
})

router.get('/tasks', (req, res) => {
    res.send('Tasks')
})

module.exports = router;