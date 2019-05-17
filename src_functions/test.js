// Run with:
// curl --header "Context-Type: application/json" --request POST --data '[0,0,1,0,0,0,0,0,0]' localhost:9000/test

import trainedNet from './neuralNet/trained-net';

exports.handler = function(event, context, callback) {
    //const result = []
    const board = JSON.parse(event.body)
    const result = trainedNet(board)
    
    // console.log(board['2'])
    // console.log(result)

    // const response = {index: 0};

    const emptySpaces = board.map((space, index) => {
        return space === 0 ? result[index] : null
    }).filter(space => {
        return space !== null
    })

    const response = {
        index: result.indexOf(emptySpaces.sort(function(a, b){return b - a})[0])
    }
  
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    })
  }