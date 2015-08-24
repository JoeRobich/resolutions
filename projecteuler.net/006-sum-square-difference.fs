// PROBLEM //

(*
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten
natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one
hundred natural numbers and the square of the sum.
*)

// ANSWER //
module Program

let sumOfSquares nums = nums |> Seq.map (fun x -> x * x) |> Seq.sum
let squareOfSums nums =
  let sum = nums |> Seq.sum
  sum * sum

let result =
  let numbers = [1..100]
  squareOfSums numbers - sumOfSquares numbers

// val result : int = 25164150
