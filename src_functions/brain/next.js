export default function (input, model) {
  const you = input.filter(el => el !== 0).reduce((sum, el, i, arr) =>
    (arr.filter(v => v === sum).length >= arr.filter(v => v === el).length ? sum : el),
    null) * -1;
  console.log('you are',you)
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const moves = winConditions.find(el => el.filter(value => input[value] == you).length == 2 && el.filter(value => input[value] == you * -1).length == 0)
  console.log('moves')
  if(moves) {
    // eslint-disable-next-line no-console
    console.log('--- found a winner --->',moves.find(el => input[el] == 0))
    return {
      index: moves.find(el => input[el] == 0)
    }
  }
  

  const preventLoss = winConditions.find(el => el.filter(value => input[value] == you * -1).length == 2 && el.filter(value => input[value] == you).length == 0)
  console.log('loss')
  if(preventLoss) {
    // eslint-disable-next-line no-console
    console.log('--- uh oh we are in trouble --->',preventLoss.find(el => input[el] == 0))
    return {
      index: preventLoss.find(el => input[el] == 0)
    }
  }

  const backup = model(input);

  const sorted = [...backup].map((el, index) => ({prob: el, index})).sort((a,b)=>b.prob-a.prob).find(el => input[el.index]==0)

  // eslint-disable-next-line no-console
  console.log('--- this is a good move --->',sorted.index)
  return {
    index: sorted.index,
  }
}