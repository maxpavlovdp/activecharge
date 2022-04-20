var propertiesReader = require('properties-reader');
var props = new propertiesReader('./props.properties');

const ewelink = require('ewelink-api');

(async () => {

    const connection = new ewelink({
        email: props.get('email'),
        password: 'Nopassword1',
        region:  props.get('region'),
    });

    /* get all devices */
    const monitor = "100136f1a4"

    const device = await connection.getDevice(monitor);
    console.log(device);



    const status = await connection.setDevicePowerState(monitor, 'on');
    console.log(status);

    const usage = await connection.getDevicePowerUsage('100136f1a4');
    console.log(usage);

})();