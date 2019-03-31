import { post } from 'axios'

export async function addMove({
  game,
  board,
  move
}) {
  return post('/.netlify/functions/move', { game, board, move });
}

export default { 
  addMove,
}