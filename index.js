var express = require('express');
const bodyParser = require('body-parser');
var app = express();
const {WebhookClient} = require('dialogflow-fulfillment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('succcecss');
})

app.post('/calltest', function (req, res) {
    // const agent = new WebhookClient({ req, res });
    // console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
     console.log('Dialogflow Request body: ' + JSON.stringify(req.body.queryResult.fulfillmentText));
    console.log('test webhook requset')
    // First read existing users.
    return res.send({
        "fulfillmentText": "i am vivek"
    })
});

app.listen(8080);