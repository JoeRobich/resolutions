// PROBLEM //

(*
2520 is the smallest number that can be divided by each of the numbers from
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*)

// ANSWER //
module Program

let numbers = [1..20]
let isMultiple x y = x % y = 0
let isMultipleOfAll x = numbers |> Seq.forall (isMultiple x)
let multiplesOf20 = Seq.unfold(fun x -> Some(x, x + 20))(20)

let result =
  multiplesOf20
  |> Seq.filter isMultipleOfAll
  |> Seq.head

// val result : int = 232792560
