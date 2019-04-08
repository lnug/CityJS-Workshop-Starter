const winContitions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const huPlayer = 1;

const aiPlayer = -1;


function checkWin(board, player) {
  const winCheck = player === huPlayer ? 1 : -1
	const plays = board.map((space, index) => {
    return space === winCheck ? index :null
  }).filter(space => {
    return space !== null
  })

  let gameWon = null;
  
  const win = winContitions.map((winCon) => {

    const things = winCon.map(space => {
      return plays.indexOf(space) > -1
    }).filter(bool => bool === true)

    return things.length === 3
  })

  const response = win.indexOf(true) > -1 ? { index: win.indexOf(true), winner: player } : null

	return response
}


const availableSpaces = (board) => {
  return board.map((space, index) => {
    return space === 0 ? index : null
  }).filter(space => {
    return space !== null
  })
}

const minMax = (board, player) => {

  const spaces = availableSpaces(board)
  console.log(spaces)
  if (checkWin(board, huPlayer))
	{
    console.log('terminal 1')
		return { score: -10 };
	} 
	else if (checkWin(board, aiPlayer))
	{
    console.log('terminal 2')
		return { score: 10 };
	} 
	else if (spaces.length === 0)
	{
    console.log('terminal 3')
		return { score: 0 };
  }


  console.log('not terminal')
  console.log(board)
  
  // If not terminal then work out possible moves

  let moves = []
  for( let i = 0; i < spaces.length; i++) {
    if(i !== 0) {
      console.log('secondtime')
    }
    console.log('again', i, spaces[i])

    let move = {}
    move.index = spaces[i]
    board[spaces[i]] = player

    console.log('itme', player)
    if (player == aiPlayer) {
      var result = minMax(board, huPlayer);
      console.log('herel', result)
			move.scorel = result.score;
		} 
		else if (player === huPlayer) {
      console.log('got here', player)
      var result = minMax(board, aiPlayer);
      console.log('herep', result)
			move.scorep = result.score;
    }
    
    board[spaces[i]] = move.index;
		moves.push(move);

  }

  console.log('deez', moves)
}



exports.handler = function(event, context, callback) {
  const board = [1,-1,0,-1,-1,0,1,1,0]

  console.log(minMax(board, aiPlayer))


  callback(null, {
      statusCode: 200,
      body: JSON.stringify('minMax(board, aiPlayer)')
  })
}