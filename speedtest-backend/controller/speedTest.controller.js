const SpeedTest  = require('fast-speedtest-api');
const { token } = require('morgan');
const controller={};


let speedtester = new SpeedTest({
    token:"YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
    verbose: true,
    timeout: 10000,
    https:true,
    urlCount:5,
    bufferSize: 8,
    unit: SpeedTest.UNITS.Mbps
});

controller.getSpeedTest = async (req, res,next) =>{
    try{
       
        const speed = await speedtester.getSpeed();
        console.log(`Speed: ${speed} Mbps`);
        return res.status(200).json({ speed: `${speed} Mbps` });

    }catch(error){
        return res.status(500).json({message: 'Internal Server Error'});
    }
} 


module.exports = controller;

//https://api.fast.com/netflix/speedtest/v2?https=true&token=YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm&urlCount=5
