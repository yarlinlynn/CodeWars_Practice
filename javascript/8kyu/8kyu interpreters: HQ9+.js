/*
Instructions:
You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

If the input is 'H', return 'Hello World!'
If the input is 'Q', return the input
If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.
...
...
...
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
*/

// Solution:
function HQ9(code) {
  if(code === 'H') {
    return 'Hello World!';
  } else if(code === 'Q') {
    return code;
  } else if(code === '9') {
    let lyrics = [];
    for(let i = 99; i > 0; i--) {
      let currentLyric = i === 1 ? '1 bottle' : `${i} bottles`;
      let nextLyric = i - 1 === 1 ? '1 bottle' : i - 1 === 0 ? 'no more bottles' : `${i - 1} bottles`;
      
      lyrics.push(`${currentLyric} of beer on the wall, ${currentLyric} of beer.`);
      lyrics.push(`Take one down and pass it around, ${nextLyric} of beer on the wall.`);
    }
    lyrics.push('No more bottles of beer on the wall, no more bottles of beer.');
    lyrics.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
    return lyrics.join('\n');
  }
}

/*
Best rated solutions:

function HQ9(code) {
  switch (code) {
    case 'H': return 'Hello World!';
    case 'Q': return code;
    case '9': return beer(99);
    default: return undefined;
  }
}

function beer(count) {
  if (count === 2) {
    return '2 bottles of beer on the wall, 2 bottles of beer.\n' +
        'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
        '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take one down and pass it around, no more bottles of beer on the wall.\n' +
        'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.';
  } else {
    return `${count} bottles of beer on the wall, ${count} bottles of beer.\n` +
        `Take one down and pass it around, ${count - 1} bottles of beer on the wall.\n` +
        beer(count - 1);
  }
}

*/