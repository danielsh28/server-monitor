const express = require('express');
const router = express.Router();
const util = require('../monitor-utilis');
const dbService = require('../monitor-data/data.service.db');




router.post('/',(req,res)=>{
dbService.inserTtoDB({availableMem:memLog(req.body.memData),
cpuData:req.body.cpuData,
name:req.body.hostName
}).then(data=>res.send(data));
});

module.exports = router;


const memLog = function (data) {
    const used = Math.round(util.convertToDisplyedUnites(data.used));
    const total = Math.round(util.convertToDisplyedUnites(data.total));
    return used/total;
};