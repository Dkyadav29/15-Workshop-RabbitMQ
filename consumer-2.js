// note this is diffrent tcp channel

const amqp = require("amqplib")

connect();
async function connect() {

    try {
        // connection return the Bluebird that Bluebird JS is a fully-featured Promise library for JavaScrip 
        const connection = await amqp.connect("amqp://localhost:5672")

        const CreateChannel1 = await connection.createChannel();

        // use the consume method to get message form publisher
        CreateChannel1.consume("jobs", message => {
            console.log(message);
        })
        const input = 19;
        if (input.number == 19) {
            channel.ack(message)
        }

        console.log('Waiting for the message.......');

    } catch (ex) {
        console.error(ex);




    }

}