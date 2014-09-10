#! node

// http://repl.it/YeD

// PROBLEM //

/*
In England the currency is made up of pound, £, and pence, p, and there are
eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

// ANSWER //

function countWaysToGet(target) {
  var ways = 0;

  for (var p200 = 0; p200 <= target; p200 += 200)
  for (var p100 = 0; p100 <= target; p100 += 100) {
    if (p200 + p100 > target)
      break;

    for (var p50 = 0; p50 <= target; p50 += 50) {
      if (p200 + p100 + p50 > target)
        break;

      for (var p20 = 0; p20 <= target; p20 += 20) {
        if (p200 + p100 + p50 + p20 > target)
          break;

        for (var p10 = 0; p10 <= target; p10 += 10) {
          if (p200 + p100 + p50 + p20 + p10 > target)
            break;

          for (var p5 = 0; p5 <= target; p5 += 5) {
            if (p200 + p100 + p50 + p20 + p10 + p5 > target)
              break;

            for (var p2 = 0; p2 <= target; p2 += 2) {
              if (p200 + p100 + p50 + p20 + p10 + p5 + p2 > target)
                break;

              for (var p1 = 0; p1 <= target; p1++)
                if (p200 + p100 + p50 + p20 + p10 + p5 + p2 + p1 > target)
                  break;
                else if (p200 + p100 + p50 + p20 + p10 + p5 + p2 + p1 == target)
                  ways++;
            }
          }
        }
      }
    }
  }

  return ways;
}

var result = countWaysToGet(200);

console.log(result);

// 73682
