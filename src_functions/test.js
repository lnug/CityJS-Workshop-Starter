exports.handler = function(event, context, callback) {
    console.log("hello world")
    callback(null, {
        statusCode: 200,
        body: "hello world"
    });
}