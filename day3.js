// Day 3
const benchmark = require('./benchmark')

/**
 * For a given number, assuming the numbers are positioned in a counter-clockwise spiral,
 * return the distance from 1 for a given number `num`
 * 
 * @param {Number} num
 * @returns {Number} number of steps to go from `num` to 1, assuming 1 is at 0,0
 */
function findDistance(num){
  const pos = findPosition(num); // find position
  return Math.abs(pos[0])+Math.abs(pos[1]); // calculate distance
}

/**
 * For a given number, assuming the numbers are positioned in a counter-clockwise spiral,
 * return the position of `num` where 1 is at 0,0
 * 
 * @param {Number} num
 * @returns {Array[2]} x,y coords of number
 */
function findPosition(number){
  const Dirs = [[1,0,"R"],[0,1,"U"],[-1,0,"L"],[0,-1,"D"]]
  const pos = [0, 0];
  let currentDir = 0;
  let prevMoves = 1;
  let nextMoves = 0;
  let curMovesLeft = 1;
  for(let i=1;i<number;i++){    
    if(curMovesLeft === 0){
      // turn
      currentDir = (currentDir+1)%4
      // do the same number of moves twice
      if(prevMoves === nextMoves){
        nextMoves++;
      }else{
        prevMoves = nextMoves;
      }
      // reset move counter
      curMovesLeft = nextMoves;      
    }else{
      // move
      curMovesLeft--;
    }
    pos[0] = pos[0] + Dirs[currentDir][0]
    pos[1] = pos[1] + Dirs[currentDir][1]

  }
  return pos;
}

console.log("Problem 1",findDistance(289326))
benchmark(() => findDistance(289326))
