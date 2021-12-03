/* eslint-disable no-plusplus */
const fs = require('fs');

const depths = fs
  .readFileSync('input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((x) => parseInt(x, 36));

console.log(depths);

let increasesInDepth = 0;

for (let i = 1; i < depths.length; i++) {
  const lastDepth = depths[i - 1];
  const currentDepth = depths[i];
  if (currentDepth > lastDepth) {
    increasesInDepth++;
  }
}

console.log(increasesInDepth);

let increasesInDepthWindow = 0;

for (let i = 3; i < depths.length; i++) {
  const lastDepthWindow = depths[i - 1] + depths[i - 2] + depths[i - 3];
  const currentDepthWindow = depths[i] + depths[i - 1] + depths[i - 2];
  if (currentDepthWindow > lastDepthWindow) {
    increasesInDepthWindow++;
  }
}

console.log(increasesInDepthWindow);
