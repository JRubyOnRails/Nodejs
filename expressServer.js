/*
Express server supports routing
*/
const express = require('express');
const server = express();

server.get('/:mypage', (req, res) => {
    res.send({requestedPage: req.params.mypage});
});

server.listen(3000, () => {
    console.log('Server is running');
})