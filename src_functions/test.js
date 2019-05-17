// src_functions/test.js
//import net from "../brain/model"
//import next from "../brain/next"

exports.handler = function(event, context, callback) {

    // If you are building something serious you should probably 
    // validate that request type :D
    // if (event.httpMethod !== "POST") {
    //   return { statusCode: 405, body: "Method Not Allowed" };
    // }

    // const string = event.body
    // callback(null, {
    // statusCode: 200,
    // body: JSON.stringify(next(board, net))
    // });
    console.log(event);
}