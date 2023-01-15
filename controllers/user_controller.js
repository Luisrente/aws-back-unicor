


const {response} = require('express');
const userGet = (req, res = response) => {
    res.json({
        msg:'get API - controlador'
    })

}

module .exports ={
    userGet
}