/*
Instructions:
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

// Solution:
function well(x) {
  let countGoods = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      countGoods++; 
    }
  }

  if (countGoods === 0) {
    return 'Fail!';
  } else if (countGoods <= 2) {
    return 'Publish!';
  } else {
    return 'I smell a series!';
  }
}

/*
Best rated solutions:

const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}

function well(x) {
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}

const well = x => x.includes('good') ? x.filter(s => s == 'good').length < 3 ? 'Publish!' : 'I smell a series!' : 'Fail!';

*/