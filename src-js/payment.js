var propertiesReader = require('properties-reader');
var props = new propertiesReader('./props.properties');

const CloudIpsp = require('cloudipsp-node-js-sdk')

const fondy = new CloudIpsp(
    {
        merchantId:  props.get('merchantId'),
        secretKey: props.get('secretKey')
    }
)
const requestData = {
    order_id: new Date().getTime(),
    order_desc: 'test order',
    currency: 'UAH',
    amount: '100'
}
fondy.Checkout(requestData).then(data => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})
