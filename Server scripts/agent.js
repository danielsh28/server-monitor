const osUtil= require('node-os-utils');
const si = require('systeminformation');
const axios = require('axios');
const fetchData = async function() {
    const memData = await si.mem().catch(() => ' Memory Usage Not Available');
    const cpuData = await osUtil.cpu.usage().catch(() => 'CPU Usage Not Available');
    const hostName = await si.osInfo().catch(() => 'Hostname Not Available');
    axios.post('https://server-mon.herokuapp.com/data/', {
        cpuData,
        memData,
        hostName
    }).then(res =>
        console.log('request sent to user')).catch(err => {
        console.log('Error!');
    })
};
setInterval(fetchData,10000);

/*
const interval = setInterval(fetchData,2000);
*/

