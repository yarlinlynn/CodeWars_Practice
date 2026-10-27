/*
Instructions:
Your phone shows its battery as a row of 5 bars. Each full bar represents 20% of charge. A bar only lights up when its whole 20% is reached.

Write a function battery_bars(percent) that returns the battery as a string: # for a lit bar, . for an empty one, all wrapped in square brackets.

Examples:
battery_bars(100)  # => "[#####]"
battery_bars(70)   # => "[###..]"
battery_bars(20)   # => "[#....]"
battery_bars(19)   # => "[.....]"
battery_bars(0)    # => "[.....]"

Notes: percent is an integer from 0 to 100
*/

// Solution:
function batteryBars(percent) {
  if(percent === 100) {
    return "[#####]";
  } else if (percent >= 80 && percent <= 100) {
    return "[####.]"
  } else if (percent >= 60 && percent <= 80) {
    return "[###..]"
  } else if (percent >= 40 && percent <= 60) {
      return "[##...]"
  } else if (percent >= 20 && percent <= 60) {
      return "[#....]"
  } else if (percent <= 20) {
    return "[.....]"
  }
}

/*
Best rated solutions:

function batteryBars(p) {
  r = Math.floor(p / 20);
  return `[${"#".repeat(r)}${".".repeat(5 - r)}]`;
}

function batteryBars(percent){
  return `[${'#'.repeat(percent / 20).padEnd(5, '.')}]`;
}

function batteryBars(percent) {
  return ["[.....]", "[#....]", "[##...]", "[###..]", "[####.]", "[#####]"][
    Math.floor(percent / 20)
  ];
}

*/