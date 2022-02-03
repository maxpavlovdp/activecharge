import {Get, Controller, Render} from '@nestjs/common';

const CloudIpsp = require('cloudipsp-node-js-sdk')

var propertiesReader = require('properties-reader');
var props = new propertiesReader('./props.properties');

@Controller()
export class AppController {
    @Get()
    @Render('index')
    async root() {
        let result;
        const fondy = new CloudIpsp({
            merchantId: props.get('merchantId'),
            secretKey: props.get('secretKey')
        })

        const requestData = {
            order_id: new Date().getTime(),
            order_desc: 'test order',
            currency: 'UAH',
            amount: '10000'
        }

        await fondy.Checkout(requestData).then(data => {
            console.log(data)
            result = data
        }).catch((error) => {
            console.log(error)
            result = error
        })

        return {
            message: result.checkout_url
        };
    }
}
