// The amqp Advanced Message Queuing Protocol is an open standard application layer protocol for message-oriented middleware.

const amqp = require("amqplib")

const message = { number: 7 } // pass the json formate in number as message in line 18 used it 
    // create a promise based function
connect();
async function connect() {

    try {
        // connection return the Bluebird that Bluebird JS is a fully-featured Promise library for JavaScrip 
        const connection = await amqp.connect("amqp://localhost:5672")

        const CreateChannel1 = await connection.createChannel();
        // beLOw create a queue name it jobs
        const resuilt = await CreateChannel1.assertQueue("jobs")

        CreateChannel1.sendToQueue("jobs", Buffer.from(JSON.stringify(message))) // or can pass the simple sting like Buffer.from("hbjfbj")
            //  to dissconetd or sent sussesfully message 

        console.log(`WELCOME TO YOU MESSAGE SENT SCUESSFULLY share but depend upon who recive first it ${message.  number}!`);
    } catch (ex) {
        console.error(ex);




    }

}