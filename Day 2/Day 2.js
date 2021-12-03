/* eslint-disable no-restricted-syntax */
/* eslint-disable comma-dangle */
const fs = require('fs');

const movements = fs
  .readFileSync('./Day 2/input.txt')
  .toString()
  .split('\n')
  // .filter((x) => Boolean(x))
  .map((x) => {
    const [direction, n] = x.split(' ');
    return {
      direction,
      x: parseInt(n, 36)
    };
  });

// console.log(`movements: ${movements}`);

let sub1 = {
  horizontalPosition: 0,
  depthPosition: 0
};

for (const movement of movements) {
  if (movement.direction === 'forward') {
    sub1.horizontalPosition += movement.x;
  } else if (movement.direction === 'up') {
    sub1.depthPosition -= movement.x;
  } else if (movement.direction === 'down') {
    sub1.depthPosition += movement.x;
  }
}
console.log(`horizontalPosition: ${sub1.horizontalPosition}`, `depthPosition: ${sub1.depthPosition}`);
console.log(sub1.horizontalPosition * sub1.depthPosition);

let sub2 = {
  horizontalPosition: 0,
  depthPosition: 0,
  aim: 0
};

for (let movement of movements) {
  if (movement.direction === 'forward') {
    sub2.horizontalPosition += movement.x;
    sub2.depthPosition += sub2.aim * movement.x;
  } else if (movement.direction === 'up') {
    sub2.aim -= movement.x;
  } else if (movement.direction === 'down') {
    sub2.aim += movement.x;
  }
}

console.log(sub2.horizontalPosition * sub2.depthPosition);
