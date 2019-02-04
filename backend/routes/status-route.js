const statusService = require('../services/statusService')

function addRoutes (app) {
    app.get('/loadstatus', (req, res)=>{
        return statusService.getStatus()
        .then(data =>{
            return res.json(data)
        })
    })
    app.post('/addstatus', (req, res)=>{
        const status = req.body
        // console.log('status',status)
        return statusService.addStatus({status})
        .then(data =>{
            return res.json(data)
        })
    })
}



module.exports = addRoutes;


